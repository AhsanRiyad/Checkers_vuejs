import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login_registration/Login.vue'
import JobCard from '../views/JobAlart/JobCard'
import SearchJob from '../views/JobAlart/SearchJob'


Vue.use(VueRouter)

const routes = [
{
  path: '/' ,
  alias: '/',
  name: 'SearchJob',
  component: SearchJob,
  meta: {
    title: 'JobAlart'
  }
},
{
  path: '/search' ,
  name: 'search',
  component: JobCard,
  meta: {
    title: 'search'
  }
},
]

const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

export default router
