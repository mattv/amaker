<template>
  <v-container>
    <h1>Home (aka Playground)</h1>
    <p>I'm using the home screen, which is currently not used, as a
      playground to test new components and things I'm working on.
      Don't be surprised to see all manor of strange things show up
      here.  Use the <v-icon>mdi-menu</v-icon> button in the toolbar
      to get to someplace more useful <v-icon>mdi-emoticon-happy-outline</v-icon>
    </p>
    <v-divider />
    <v-subheader>Console log actions</v-subheader>
    <v-btn @click="authCurrentSession">Auth Current Session</v-btn>
    <v-btn @click="authCurrentUser">Auth Current User</v-btn>
    <div>
      <em>Check the browser console log to see output</em>
    </div>
    <v-divider />
    <v-subheader>Authentication actions</v-subheader>
    <code>https://aws-amplify.github.io/docs/js/vue#authentication-components</code>
    <amplify-sign-out />
    <amplify-authenticator></amplify-authenticator>
  </v-container>
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'HelloWorld',
  mounted () {
    AmplifyEventBus.$on('authState', info => {
      console.log(`auth event: ${info}`)
    });
  },
  methods: {
    authCurrentSession () {
      Auth.currentSession()
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    authCurrentUser () {
      Auth.currentAuthenticatedUser({
        // Optional, By default is false. If set to true, this call 
        // will send a request to Cognito to get the latest user data
        bypassCache: false  
      }).then(user => console.log(user))
        .catch(err => console.log(err));
    },
  },
}
</script>
