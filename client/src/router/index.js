import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import Register from '@/components/Register'
import ContentPage from '@/components/ContentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page,
      children: [
        {
          path: '',
          component: ContentPage
        }
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
