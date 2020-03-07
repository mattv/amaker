<template>
  <v-list>
    <div>
    <v-list-item
      v-for="(probe, i) in probes"
      :key="i"
    >
      <v-list-item-action>
        <v-switch :input-value="probe.passed" @change="updateProbe(probe.id, $event)"></v-switch>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{ probe.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
  </v-list>
</template>

<script>
export default {
  name: 'Probe',
  props: ['ids'],
  computed: {
    probes () {
      return this.$store.getters.probes(this.ids)
    },
  },
  methods: {
    updateProbe (id, value) {
      this.$store.commit('updateProbe', {id: id, value: value})
    },
  },
}
</script>

