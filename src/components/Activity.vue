<template>
  <div>

    <v-expansion-panel-header>
        <h4>{{ title }}</h4>
    </v-expansion-panel-header>

    <v-expansion-panel-content>

      <v-subheader class="primary--text">Summary</v-subheader>
      <v-divider/>
      <div>Complete: {{ percent }}</div>
      <div>Roles: {{ roles }}</div>
      <div>Effort: {{ effort }}</div>

      <v-subheader class="primary--text">Description</v-subheader>
      <v-divider/>
      <p>{{ description }}</p>

      <v-subheader class="primary--text">Goal</v-subheader>
      <v-divider/>
      <p>{{ goal }}</p>

      <v-subheader class="primary--text">Probes</v-subheader>
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
      const percent = this.$store.getters.activityScore(this.id)
      return percent > 0
        ? `${percent}%`
        : 'Gotta start before you can finish :)'
    },
    description () {
      return this.$store.state.activities[this.id].description
    },
    goal () {
      return this.$store.state.activities[this.id].goal
    },
    effort () {
      const range = this.$store.getters.activityEffort(this.id)

      return range.reduce((a,b) => a+b,0) > 0
        ? `${range.join(' to ')} hrs`
      : 'nothing to see here, move along'
    },
    roles () {
      const roles = this.$store.getters.activityRoles(this.id)
      return roles.length > 0 
        ? roles.join(', ').toUpperCase()
        : 'none identified'
    },
  },
}
</script>

