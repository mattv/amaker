<template>
  <v-list dense>
    <v-list-item link to="/">
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/cloud">
      <v-list-item-action>
        <v-icon>mdi-cloud-check</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Cloud Check-up</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'MainNav'
} 
</script>
