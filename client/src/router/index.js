import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import Register from '@/components/Register'
import ContentPage from '@/components/ContentPage'
import ContentDetail from '@/components/ContentDetail'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      component: Page,
      children: [
        {
          path: '',
          component: ContentPage
        },
        {
          path: ':id',
          component: ContentDetail,
          props: true
        }
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
