<template>
  <div>
    <v-expansion-panel-header color="accent">
      <span>{{ bestPractice.title }}</span>
      <v-spacer/>
      <span>{{ bestPractice.percent }} | CA, BA | days | run</span>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-subheader>Description</v-subheader>
      <v-divider/>
      <p>Right sizing is the process of...</p>
      <v-subheader>Goal</v-subheader>
      <v-divider/>
      <p>Reduce costs by lowering resource...</p>

      <v-subheader>Tests</v-subheader>
      <v-divider/>
      <v-list>
        <v-list-item
          v-for="(testProbe, i) in bestPractice.testProbes"
          :key="i"
        >
          <test-probe v-bind="testProbe" />
        </v-list-item>
      </v-list>
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
  props: ['bestPractice'],
  data () {
    return {
      state: this.active
    }
  },
}
</script>

