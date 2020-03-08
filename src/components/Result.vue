<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  />
</template>

<script>
export default {
  name: 'Result',
  computed: {
    headers () {
      return [
        {
          text: 'Area',
          align: 'start',
          value: 'area',
          sortable: true
        },
        {
          text: 'Score',
          align: 'start',
          value: 'percent',
          sortable: true
        },
        {
          text: 'Effort',
          align: 'start',
          value: 'effort',
          sortable: true
        },
        {
          text: 'Roles',
          align: 'start',
          value: 'roles',
          sortable: true
        },
      ]
    },
    items () {
      return [
        {
          area: 'Cost',
          percent: '50%',
          effort: 'hours',
          roles: 'CA, BA, DE'
        },
        {
          area: 'Operations',
          percent: '80%',
          effort: 'days',
          roles: 'CA, CE'
        },
        {
          area: 'Security',
          percent: '40%',
          effort: 'weeks',
          roles: 'CA, BA'
        },
      ]
    }
  },
}
</script>
