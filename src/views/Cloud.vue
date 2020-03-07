<template>
  <div class="cloud">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(activityId, i) in activityIds"
        :key="i"
      >
        <activity v-bind:id="activityId" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Activity from '@/components/Activity'

export default {
  name: 'Cloud',
  components: {
    Activity
  },
  computed: {
    activityIds () {
      return Object.keys(this.$store.state.activities)
    },
  },
}
</script>

<style>
.v-subheader {
  color: #ff7500 !important
}
</style>
