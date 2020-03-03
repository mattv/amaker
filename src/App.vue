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
      color="primary"
      dark
    >
      <v-app-bar-nav-icon color="secondary" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="secondary--text">Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer
      color="primary"
      app
    >
      <span class="secondary--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainNav from '@/components/MainNav'

export default {
  name: 'App',

  components: {
    MainNav
  },

  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
  }),
}
</script>
