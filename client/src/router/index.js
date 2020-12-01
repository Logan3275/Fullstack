import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Homepage from '@/components/Homepage'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
import EditPost from '@/components/EditPost'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/create',
      name: 'posts-create',
      component: CreatePost
    },
    {
      path: '/posts/:postId/edit',
      name: 'posts-edit',
      component: EditPost
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
