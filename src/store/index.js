import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createLogger()],
  state: {
    bestPractices: {
      "1": {
        id: 1,
        title: 'Right Sizing',
        description: 'Right sizing is the practice of...',
        percent: '63%',
        goal: 'Get the size right',
        testProbes: ["1", "2", "3"]
      },
      "2": {
        id: 2,
        title: 'Wrong Sizing',
        description: 'Wrong sizing is the practice of...',
        percent: '63%',
        goal: 'Get the size wrong',
        testProbes: ["4", "5", "6" ]
      },
      "3": {
        id: 3,
        title: 'Upsizing Sizing',
        description: 'Upsizing sizing is the practice of...',
        percent: '63%',
        goal: 'Get the size more up',
        testProbes: ["7", "8", "9" ]
      },
      "4": {
        id: 4,
        title: 'Super Sizing',
        description: 'Super sizing is the practice of...',
        percent: '63%',
        goal: 'Get the size superest',
        testProbes: ["10", "11", "12" ]
      },
    },
    testProbes: {
      "1": { id: "1", title: '1 This is a test', active: false},
      "2": { id: "2", title: '2 This is another test', active: true},
      "3": { id: "3", title: '3 And yet another one', active: false},
      "4": { id: "4", title: '4 This is a test', active: false },
      "5": { id: "5", title: '5 This is another test', active: true },
      "6": { id: "6", title: '6 And yet another one', active: false },
      "7": { id: "7", title: '7 This is a test', active: false },
      "8": { id: "8", title: '8 This is another test', active: true },
      "9": { id: "9", title: '9 And yet another one', active: false },
      "10": { id: "10", title: '10 This is a test', active: false },
      "11": { id: "11", title: '11 This is another test', active: true },
      "12": { id: "12", title: '12 And yet another one', active: false },
    },
  },
  getters: {
    testProbes: (state) => (testProbes) => {
      return testProbes.map(p => state.testProbes[p])
    },
    probeState: (state) => (probe) => {
      return state.testProbes[probe].active
    }
  },
  mutations: {
    updateProbe (state, payload) {
      state.testProbes[payload.id].active = payload.value
    },
  },
  actions: {
  },
  modules: {
  }
})
