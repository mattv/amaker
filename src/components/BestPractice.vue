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

      <v-subheader>Tests</v-subheader>
      <v-divider/>
      <test-probe :probes="testProbes" />

    </v-expansion-panel-content>

  </div>
</template>

<script>
import TestProbe from '@/components/TestProbe'

export default {
  name: 'BestPractice',
  components: {
    TestProbe,
  },
  props: ['title', 'percent', 'description', 'goal', 'testProbes'],
  data () {
    return {
    }
  },
}
</script>

