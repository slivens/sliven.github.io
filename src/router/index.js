import Vue from 'vue'
import Router from 'vue-router'
import Page from '../pages/page.vue'
import All from '../components/all.vue'
import Exact from '../components/exact.vue'
import Share from '../components/share.vue'
import Job from '../components/job.vue'
import Pctest from '../components/pctest.vue'
import Answer from '../components/answer.vue'
import Contents from '../components/contents.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Page,
      children: [
        { path: '/',
          redirect: '/all'

        },
        {
          path: '/all',
          name: 'all',
          component: All
        },
        {path: '/exact',
          name: 'exact',
          component: Exact

        },
        {
          path: '/share',
          name: 'share',
          component: Share
        },
        {
          path: '/answer',
          name: 'answer',
          component: Answer
        },
        {
          path: '/job',
          name: 'job',
          component: Job
        },
        {
          path: '/pctest',
          name: 'pctest',
          component: Pctest
        }
      ]
    },
    {
      path: '/contents/:id',
      name: 'contents',
      component: Contents
    }
  ]
})
