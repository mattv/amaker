<template>
  <div>
    <v-tabs
      background-color="primary"
      dark
      v-model="tab"
      align-with-title
    >
      <v-tabs-slider color="secondary"></v-tabs-slider>

      <v-tab v-for="area in areas" :key="area.name">
        {{ area.name }}
      </v-tab>
      <v-spacer />
      <v-tab key=result>Results</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="area in areas"
        :key="area.name"
      >
        <assessment-area :id="area.id" />
      </v-tab-item>
      <v-tab-item key="result">
        <result />
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
import AssessmentArea from '@/components/AssessmentArea'
import Result from '@/components/Result'

export default {
  name: 'Assessment',
  probs: ['id'],
  components: {
    AssessmentArea,
    Result
  },
  computed: {
    active () {
      return this.$store.state.assessments.active
    },
    areas () {
      return this.$store.state.areas
    },
  },
  data () {
    return {
      tab: null,
    }
  },
}
</script>
