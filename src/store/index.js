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
    areas: {
      '1': {
        id: 1,
        type: 'area',
        name: 'Cost',
        description: 'This should describe the cost area...',
        goal: 'This should explain why you would focus in the cost area',
        activityIds: ['1', '2', '3', '4']
      },
      '2': {
        id: 2,
        type: 'area',
        name: 'Operations',
        description: 'This should describe the operations area...',
        goal: 'This should explain why you would focus in the operations area',
        activityIds: ['1', '2', '3', '4']
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
        probeIds: ['1', '2', '3']
      },
      '2': {
        id: 2,
        type: 'activity',
        title: 'Wrong Sizing',
        description: 'Wrong sizing is the activity of...',
        goal: 'Get the size wrong',
        probeIds: ['4', '5', '6' ]
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
      '1': { id: '1', type: 'probe', title: '1 This is a probe', passed: false},
      '2': { id: '2', type: 'probe', title: '2 This is another probe', passed: true},
      '3': { id: '3', type: 'probe', title: '3 And yet another one', passed: false},
      '4': { id: '4', type: 'probe', title: '4 This is a probe', passed: false },
      '5': { id: '5', type: 'probe', title: '5 This is another probe', passed: true },
      '6': { id: '6', type: 'probe', title: '6 And yet another one', passed: false },
      '7': { id: '7', type: 'probe', title: '7 This is a probe', passed: false },
      '8': { id: '8', type: 'probe', title: '8 This is another probe', passed: true },
      '9': { id: '9', type: 'probe', title: '9 And yet another one', passed: false },
      '10': { id: '10', type: 'probe', title: '10 This is a probe', passed: false },
      '11': { id: '11', type: 'probe', title: '11 This is another probe', passed: true },
      '12': { id: '12', type: 'probe', title: '12 And yet another one', passed: false },
    },
  },
  getters: {
    probes: (state) => (ids) => {
      return ids.map(id => state.probes[id])
    },
  },
  mutations: {
    updateProbe (state, payload) {
      state.probes[payload.id].passed = payload.value
    },
  },
  actions: {
  },
  modules: {
  }
})
