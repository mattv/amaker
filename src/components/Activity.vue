<template>
  <div>

    <v-expansion-panel-header color="accent">

      <span>{{ title }}</span>
      <v-spacer/>
      <span>{{ percent }} | CA, BA | days | run</span>

    </v-expansion-panel-header>

    <v-expansion-panel-content>

      <v-subheader>Description</v-subheader>
      <v-divider/>
      <p>{{ description }}</p>

      <v-subheader>Goal</v-subheader>
      <v-divider/>
      <p>{{ goal }}</p>

      <v-subheader>Probes</v-subheader>
      <v-divider/>
      <probes :ids="probeIds" />

    </v-expansion-panel-content>

  </div>
</template>

<script>
import Probes from '@/components/Probes'

export default {
  name: 'Activity',
  components: {
    Probes,
  },
  props: ['id'],
  computed: {
    probeIds () {
      return this.$store.state.activities[this.id].probeIds
    },
    title () {
      return this.$store.state.activities[this.id].title
    },
    percent () {
      return this.$store.state.activities[this.id].percent
    },
    description () {
      return this.$store.state.activities[this.id].description
    },
    goal () {
      return this.$store.state.activities[this.id].goal
    },
  },
}
</script>

