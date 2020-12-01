<template>
    <v-layout column>
    <br><br><br><br>
    <v-flex xs6 offset-xs3>
      <panel title="Newsfeed">
        <v-btn 
          slot="action"
          @click="navigateTo({name: 'posts-create'})"
          class="amber accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <br><br>
        
        <div v-for="post in posts" 
        :key="post.id">

          <v-layout>
            <v-flex xs6>
              <div class="post-name">
                <strong>{{post.fullName}}</strong> posted:
              </div>
              <br><br>
              <div class="post-description">
                {{post.description}}
              </div>
            </v-flex>

            <v-flex xs6>
              <img class="image" :src="post.imageUrl" />
            </v-flex>
          </v-layout>

          <v-btn
            dark
            class="amber accent-4 glow-on-hover"
            :to="{
              name: 'posts-edit', 
              params: {
                postId: post.id
              }
            }">
            Edit
          </v-btn>
          <br><br>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  data () {
    return {
      posts: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.posts = (await PostsService.index()).data
  }
}
</script>

<style scoped>
* {
  color: black;
}
.post-name {
  font-size: 20px;
  text-align: left;
}

.post-description {
  font-size: 16px;
}
.image {
  width: 100%;
  margin: 0 auto;
}
.glow-on-hover {
  outline: none;
  color: #fff;
  background: #1E88E5;
  cursor: pointer;
  position: relative;
  z-index: 0;
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
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>
