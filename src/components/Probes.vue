<template>
  <div>
    <v-list>
      <div>
        <v-list-item
          v-for="(probe, i) in probes"
          :key="i"
        >
          <v-list-item-action>
            <v-radio-group
              :input-value="probe.passed"
              @change="updatePassed(probe.id, $event)"
            >
              <v-radio label="Yes" value="yes" />
              <v-radio label="No" value="no" />
            </v-radio-group>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ probe.title }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-select
                v-if="probe.passed === 'yes'"
                :items="assurances"
                :input-value="probe.assurances"
                @change="updateAssurances(probe.id, $event)"
                label="Select"
                multiple
                chips
                hint="What supports this?"
                persistent-hint
              />
              <v-checkbox
                v-if="probe.passed === 'no'"
                label="Planned"
                :input-value="probe.planned"
                @change="updatePlanned(probe.id, $event)"
              />
              <v-select
                v-if="probe.passed === 'no'"
                :input-value="probe.constraints"
                @change="updateConstraints(probe.id, $event)"
                :items="constraints"
                label="Select"
                multiple
                chips
                hint="What is preventing this?"
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
      assurances: ['Gut feeling', 'Have process/documation in place', 'Have tested it', 'It is regularly tested', 'certified audit (e.g. ISO...)', 'Other'],
      rating: 0,
      constraints: ['People', 'Time', 'Technology', 'Training', 'Other', 'Unknown'],
    }
  },
  computed: {
    probes () {
      return this.$store.getters.probes(this.ids)
    },
  },
  methods: {
    updatePassed (probeId, value) {
      this.$store.commit('updatePassed', {probeId: probeId, value: value})
    },
    updatePlanned (probeId, value) {
      this.$store.commit('updatePlanned', {probeId: probeId, value: value})
    },
    updateConstraints (probeId, value) {
      this.$store.commit('updateConstraints', {probeId: probeId, value: value})
    },
    updateAssurances (probeId, value) {
      this.$store.commit('updateAssurances', {probeId: probeId, value: value})
    },
  },
}
</script>

