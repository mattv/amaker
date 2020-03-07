<template>
  <div>

    <v-expansion-panel-header color="accent">

      <span>{{ title }}</span>
      <v-spacer/>
      <span>{{ percent }}% | CA, BA | days | run</span>

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
      let sumPasses = (t, probe) => {
        if (probe.passed) t++
        return t++
      }
      const count = this.probeIds.length
      const passes = this.$store.getters.probes(this.probeIds).reduce(sumPasses, 0)
      return Math.round(passes / count * 100)
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

