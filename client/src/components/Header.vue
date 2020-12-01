<template>
  <v-toolbar fixed class="amber accent-4" dark>
    <v-toolbar-title class="mr-1">
      <img src="../assets/icon.png" alt="logo" width="30" height="25">
      <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'homepage'
        }">
        Groupomania Social Network
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
      
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        Log Out
      </v-btn>

      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="account">
        Delete
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'homepage'
      })
    },
    async account () {
      this.$router.push({
        name: 'user'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: lightblue;
}
</style>
