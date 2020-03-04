<template>
  <div>
    <v-list-item-action>
      <v-checkbox v-model="active"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </div>
</template>

<script>
export default {
  name: 'TestProbe',
  props: ['id'],
  data () {
    return {
      active: this.$store.getters.probeState(this.id),
      title: this.$store.state.testProbes[this.id].title
    }
  },
}
</script>

