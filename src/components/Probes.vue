<template>
  <div>
    <v-list>
      <div>
        <v-list-item
          v-for="(probe, i) in probes"
          :key="i"
        >
          <v-list-item-action>
            <v-switch :input-value="probe.passed" @change="updateProbe(probe.id, $event)"></v-switch>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ probe.title }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-select
                v-if="probe.passed"
                v-model="evidenceSelected"
                :items="evidenceItems"
                label="Select"
                hint="What supports this?"
                persistent-hint
              />
              <v-checkbox v-if="!probe.passed" label="Planned" />
              <v-select
                v-if="!probe.passed"
                v-model="factorsSelected"
                :items="factorItems"
                label="Select"
                multiple
                chips
                hint="We need more..."
                persistent-hint
              />
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
  <v-divider />
  <div class="text-center">
    <span>Did you find this useful?
      <v-rating v-model="rating"></v-rating>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Probe',
  props: ['ids'],
  data () {
    return {
      evidenceSelected: [],
      evidenceItems: ['Gut feeling', 'Have process/documation in place', 'Have tested it', 'It is regularly tested', 'certified audit (e.g. ISO...)', 'Other'],
      rating: 0,
      factorsSelected: [],
      factorItems: ['People', 'Time', 'Technology', 'Training', 'Other', 'Unknown'],
    }
  },
  computed: {
    probes () {
      return this.$store.getters.probes(this.ids)
    },
  },
  methods: {
    updateProbe (id, value) {
      this.$store.commit('updateProbe', {id: id, value: value})
    },
  },
}
</script>

