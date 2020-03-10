import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createLogger(),
    vuexLocal.plugin,
  ],
  state: {
    assessments: {
      active: '1',
      '1': {
        id: '1',
        type: 'assessment',
        name: 'Cloud Platform Check-up',
        description: 'The cloud check-up discovers...',
        goal: 'Businesses need a healthy cloud platform so they can...',
        areaIds: ['1', '2', '3']
      },
    },
    areas: {
      '1': {
        id: 1,
        type: 'area',
        name: 'Cost',
        description: 'This should describe the cost area...',
        goal: 'This should explain why you would focus in the cost area',
        activityIds: ['1', '3', '4']
      },
      '2': {
        id: 2,
        type: 'area',
        name: 'Operations',
        description: 'This should describe the operations area...',
        goal: 'This should explain why you would focus in the operations area',
        activityIds: ['2', '3', '4']
      },
      '3': {
        id: 3,
        type: 'area',
        name: 'Security',
        description: 'This should describe the security area...',
        goal: 'This should explain why you would focus in the security area',
        activityIds: ['1', '2', '3', '4']
      },
    },
    activities: {
      '1': {
        id: 1,
        type: 'activity',
        title: 'Right Sizing',
        description: 'Right sizing is the activity of...',
        goal: 'Get the size right',
        probeIds: ['1', '2']
      },
      '2': {
        id: 2,
        type: 'activity',
        title: 'Wrong Sizing',
        description: 'Wrong sizing is the activity of...',
        goal: 'Get the size wrong',
        probeIds: ['3', '4', '5', '6' ]
      },
      '3': {
        id: 3,
        type: 'activity',
        title: 'Upsizing Sizing',
        description: 'Upsizing sizing is the activity of...',
        goal: 'Get the size more up',
        probeIds: ['7', '8', '9' ]
      },
      '4': {
        id: 4,
        type: 'activity',
        title: 'Super Sizing',
        description: 'Super sizing is the activity of...',
        goal: 'Get the size superest',
        probeIds: ['10', '11', '12' ]
      },
    },
    probes: {
      '1': { id: '1', type: 'probe', roles: ['ca', 'ba'], effort: [4, 8], title: '1 This is a probe', passed: false},
      '2': { id: '2', type: 'probe', roles: ['ba', 'ce', 'dv'], effort: [8, 16], title: '2 This is another probe', passed: false},
      '3': { id: '3', type: 'probe', roles: ['ce', 'se', 'ex'], effort: [4, 8], title: '3 And yet another one', passed: false},
      '4': { id: '4', type: 'probe', roles: ['ca', 'ce'], effort: [24, 48], title: '4 This is a probe', passed: false },
      '5': { id: '5', type: 'probe', roles: ['ce'], effort: [32, 64], title: '5 This is another probe', passed: false },
      '6': { id: '6', type: 'probe', roles: ['ba', 'po'], effort: [16, 32], title: '6 And yet another one', passed: false },
      '7': { id: '7', type: 'probe', roles: ['ca'], effort: [4, 8], title: '7 This is a probe', passed: false },
      '8': { id: '8', type: 'probe', roles: ['po', 'ce'], effort: [8, 16], title: '8 This is another probe', passed: false },
      '9': { id: '9', type: 'probe', roles: ['pm', 'ce'], effort: [4, 8], title: '9 And yet another one', passed: false },
      '10': { id: '10', type: 'probe', roles: ['se', 'ce'], effort: [4, 8], title: '10 This is a probe', passed: false },
      '11': { id: '11', type: 'probe', roles: ['ca', 'ce'], effort: [48, 96], title: '11 This is another probe', passed: false },
      '12': { id: '12', type: 'probe', roles: ['ca', 'ba'], effort: [64, 128], title: '12 And yet another one', passed: false },
    },
  },
  getters: {
    activities: ({activities}) => (ids) => {
      return ids.map(id => activities[id])
    },
    activityEffort: ({activities}, {probes}) => (activityId) => {
      const probeIds = activities[activityId].probeIds
      const efforts = probes(probeIds).filter(p => !p.passed).map(p => p.effort)
      return efforts.reduce((a, b) => {
        return [a[0] + b[0], a[1] + b[1]]
      }, [0, 0])
    },
    activityScore: ({activities}, {probes}) => (activityId) => {
      let sumPasses = (t, probe) => {
        if (probe.passed) t++
        return t++
      }
      const probeIds = activities[activityId].probeIds
      const count = probeIds.length
      const passes = probes(probeIds).reduce(sumPasses, 0)
      return Math.round(passes / count * 100)
    },
    activityRoles: ({activities}, {probes}) => (activityId) => {
      return Array.from(
          // load/extract from Set gets unique values
          new Set(
              probes(activities[activityId].probeIds).filter(p => !p.passed).flatMap(p => p.roles)
          )
      ).sort()
    },
    areaEffort: ({areas}, {activityEffort}) => (areaId) => {
      const activityIds = areas[areaId].activityIds
      const efforts = activityIds.map(a => activityEffort(a))
      return efforts.reduce((a, b) => {
        return [a[0] + b[0], a[1] + b[1]]
      })
    },
    areaRoles: ({areas}, {activityRoles}) => (areaId) => {
      let activityIds = areas[areaId].activityIds
      let areaRoles = activityIds.flatMap(id => activityRoles(id))
      return Array.from(new Set(areaRoles)).sort()
    },
    areaScore: ({areas}, {activityScore}) => (areaId) => {
      let activityIds = areas[areaId].activityIds
      let activityScores = activityIds.map(id => activityScore(id))
      let score = activityScores.reduce((a,b) => a +b, 0) / activityScores.length
      return Math.round(score)
    },
    probes: ({probes}) => (ids) => {
      return ids.map(id => probes[id])
    },
  },
  mutations: {
    updateProbe ({probes}, payload) {
      probes[payload.id].passed = payload.value
    },
  },
  actions: {
  },
  modules: {
  }
})
