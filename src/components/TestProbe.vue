<template>
  <v-list>
    <v-list-item
      v-for="(probe, i) in testProbes"
      :key="i"
    >
      <v-list-item-action>
        <v-switch :input-value="probe.active" @change="updateProbe(probe.id, $event)"></v-switch>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{ probe.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'TestProbe',
  props: ['probes'],
  computed: {
    testProbes: function () {
      return this.$store.getters.testProbes(this.probes)
    },
  },
  methods: {
    updateProbe (id, value) {
      this.$store.commit('updateProbe', {id: id, value: value})
    },
  },
}
</script>

