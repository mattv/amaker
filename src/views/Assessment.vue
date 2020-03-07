<template>
	<div>
		<v-tabs
			v-model="tab"
			align-with-title
		>
			<v-tabs-slider color="secondary"></v-tabs-slider>

			<v-tab v-for="area in areas" :key="area.id">
				{{ area.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab">
			<v-tab-item
				v-for="area in areas"
				:key="area.id"
			>
        <assessment-area :id="area.id" />
			</v-tab-item>
		</v-tabs-items>

	</div>
</template>

<script>
import AssessmentArea from '@/components/AssessmentArea'

export default {
  name: 'Assessment',
  components: {
    AssessmentArea
  },
  computed: {
    areas () {
      return this.$store.state.areas
    },
    areaIds () {
      return Object.keys(this.$store.state.areas)
    },
  },
  data () {
    return {
      tab: null,
    }
  },
}
</script>
