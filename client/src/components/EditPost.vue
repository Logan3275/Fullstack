<template>
 <v-layout>
    <v-flex>
      <panel title="Edit Post">
        <v-text-field
          label="Name"
          required
          :rules="[required]"
          v-model="post.fullName"
        ></v-text-field>

        <v-text-field
          label="Description"
          required
          :rules="[required]"
          v-model="post.description"
        ></v-text-field>

        <v-text-field
          label="Image Url"
          v-model="post.imageUrl"
        ></v-text-field>

        <v-btn
        dark
        class="amber accent-4 glow-on-hover"
        @click="save">
        Save
      </v-btn>

      <div class="danger-alert" v-if="error">
        {{error}}
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
      post: {
        fullName: null,
        description: null,
        imageUrl: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      const postId = this.$store.state.route.params.postId
      try {
        await PostsService.put(this.post)
        this.$router.push({
          name: 'posts',
          params: {
            postId: postId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const postId = this.$store.state.route.params.postId
      this.post = (await PostsService.show(postId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
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