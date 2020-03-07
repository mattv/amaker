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
    activities: {
      '1': {
        id: 1,
        type: 'activity',
        title: 'Right Sizing',
        description: 'Right sizing is the activity of...',
        percent: '63%',
        goal: 'Get the size right',
        probeIds: ['1', '2', '3']
      },
      '2': {
        id: 2,
        type: 'activity',
        title: 'Wrong Sizing',
        description: 'Wrong sizing is the activity of...',
        percent: '63%',
        goal: 'Get the size wrong',
        probeIds: ['4', '5', '6' ]
      },
      '3': {
        id: 3,
        type: 'activity',
        title: 'Upsizing Sizing',
        description: 'Upsizing sizing is the activity of...',
        percent: '63%',
        goal: 'Get the size more up',
        probeIds: ['7', '8', '9' ]
      },
      '4': {
        id: 4,
        type: 'activity',
        title: 'Super Sizing',
        description: 'Super sizing is the activity of...',
        percent: '63%',
        goal: 'Get the size superest',
        probeIds: ['10', '11', '12' ]
      },
    },
    probes: {
      '1': { id: '1', type: 'probe', title: '1 This is a probe', active: false},
      '2': { id: '2', type: 'probe', title: '2 This is another probe', active: true},
      '3': { id: '3', type: 'probe', title: '3 And yet another one', active: false},
      '4': { id: '4', type: 'probe', title: '4 This is a probe', active: false },
      '5': { id: '5', type: 'probe', title: '5 This is another probe', active: true },
      '6': { id: '6', type: 'probe', title: '6 And yet another one', active: false },
      '7': { id: '7', type: 'probe', title: '7 This is a probe', active: false },
      '8': { id: '8', type: 'probe', title: '8 This is another probe', active: true },
      '9': { id: '9', type: 'probe', title: '9 And yet another one', active: false },
      '10': { id: '10', type: 'probe', title: '10 This is a probe', active: false },
      '11': { id: '11', type: 'probe', title: '11 This is another probe', active: true },
      '12': { id: '12', type: 'probe', title: '12 And yet another one', active: false },
    },
  },
  getters: {
    probes: (state) => (ids) => {
      return ids.map(id => state.probes[id])
    },
  },
  mutations: {
    updateProbe (state, payload) {
      state.probes[payload.id].active = payload.value
    },
  },
  actions: {
  },
  modules: {
  }
})
