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
      bestPractices: this.$store.state.bestPractices,
    }
  },
}
</script>

<style>
.v-subheader {
  color: #ff7500 !important
}
</style>
