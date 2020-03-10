<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-footer
  />
</template>

<script>
export default {
  name: 'Result',
  computed: {
    headers () {
      return [
        { text: 'Area', align: 'start', value: 'area', sortable: true },
        { text: 'Score', align: 'start', value: 'percent', sortable: true },
        { text: 'Effort', align: 'start', value: 'effort', sortable: true },
        { text: 'Roles', align: 'start', value: 'roles', sortable: true },
      ]
    },
    items () {
      let {state, getters} = this.$store
      let assessment = state.assessments[state.assessments.active]
      let areas = assessment.areaIds.map(id => state.areas[id])

      return areas.map(area => {
        return {
          area: area.name,
          percent: `${getters.areaScore(area.id)}%`,
          effort: getters.areaEffort(area.id).join(' - '),
          roles: getters.areaRoles(area.id). join(', ').toUpperCase()
        }
      })
    },
  },
}
</script>
