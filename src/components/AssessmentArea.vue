<template>
  <div class="area">
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
  name: 'Area',
  props: ['id'],
  components: {
    Activity
  },
  computed: {
    activityIds () {
      return this.$store.state.areas[this.id].activityIds
    },
  },
}
</script>

<style>
.v-subheader {
  color: #ff7500 !important
}
</style>
