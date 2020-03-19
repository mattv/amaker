<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <main-nav />
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Amaker</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer
      app
      color="primary"
      dark
    >
      <span>&copy; ClusterGarage 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainNav from '@/components/MainNav'

export default {
  name: 'App',
  components: {
    MainNav,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>
