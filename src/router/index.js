import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login_registration/Login.vue'
import JobCard from '../views/JobAlart/JobCard'
import SearchJob from '../views/JobAlart/SearchJob'
import CreateAlert from '../views/JobAlart/CreateAlert'


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
{
  path: '/create-alert' ,
  name: 'CreateAlert',
  component: CreateAlert,
  meta: {
    title: 'Create Alert'
  }
},
]

const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

export default router
