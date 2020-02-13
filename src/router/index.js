import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Final from '@/components/Final'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    },
    {
      path: '/final',
      name: 'Final',
      component: Final
    },
  ]
})
