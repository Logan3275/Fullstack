<template>
  <v-layout>
    <v-flex>
      <br><br><br><br><br><br><br>
      <h3>Are you sure you want to delete your account?</h3>
      <br>
      <v-btn
        dark
        class="amber accent-4 glow-on-hover"
        @click="remove">
        Yes
      </v-btn>
      <v-btn
        dark
        class="amber accent-4 glow-on-hover"
        @click="back">
        No
      </v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  methods: {
    back () {
      this.$router.push({
        name: 'posts'
      })
    },
    async remove () {
      try {
        await AuthenticationService.delete({
          id: this.$store.state.user.id
        })
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'homepage'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.button {
  width: 200px;
  height: 25px;
  height: 75px;
  font-size: 50%;
}
.glow-on-hover {
  width: 150px;
  height: 50px;
  outline: none;
  color: #fff;
  background: #1E88E5;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #1E88E5;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>