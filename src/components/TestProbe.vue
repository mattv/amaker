<template>
  <div>
    <v-list-item-action>
      <v-checkbox v-model="state"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </div>
</template>

<script>
export default {
  name: 'TestProbe',
  props: ['title', 'active'],
  data () {
    return {
      state: this.active
    }
  },
}
</script>

