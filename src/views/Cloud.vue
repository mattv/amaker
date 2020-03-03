<template>
  <div class="cloud">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(bestPractice, i) in bestPractices"
        :key="i"
      >
        <best-practice v-bind="bestPractice" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import BestPractice from '@/components/BestPractice'

export default {
  components: {
    BestPractice
  },
  data () {
    return {
      bestPractices: [
        {
          bestPractice: {
            title: 'Right Sizing',
            description: 'Right sizing is the practice of...',
            percent: '63%',
            goal: 'Get the size right',
            testProbes: [
              { title: 'This is a test', active: false },
              { title: 'This is another test', active: true },
              { title: 'And yet another one', active: false },
            ]
          }
        },
        {
          bestPractice: {
            title: 'Wrong Sizing',
            description: 'Wrong sizing is the practice of...',
            percent: '63%',
            goal: 'Get the size wrong',
            testProbes: [
              { title: 'This is a test', active: false },
              { title: 'This is another test', active: true },
              { title: 'And yet another one', active: false },
            ]
          }
        },
        {
          bestPractice: {
            title: 'Upsizing Sizing',
            description: 'Upsizing sizing is the practice of...',
            percent: '63%',
            goal: 'Get the size more up',
            testProbes: [
              { title: 'This is a test', active: false },
              { title: 'This is another test', active: true },
              { title: 'And yet another one', active: false },
            ]
          }
        },
        {
          bestPractice: {
            title: 'Super Sizing',
            description: 'Super sizing is the practice of...',
            percent: '63%',
            goal: 'Get the size superest',
            testProbes: [
              { title: 'This is a test', active: false },
              { title: 'This is another test', active: true },
              { title: 'And yet another one', active: false },
            ]
          }
        },
        {
        },
      ],
    }
  },
}
</script>

<style>
.v-subheader {
  color: #ff7500 !important
}
</style>
