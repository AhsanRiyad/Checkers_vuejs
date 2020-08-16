import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login_registration/Login.vue'
import JobCard from '../views/JobAlart/JobCard'
import SearchJob from '../views/JobAlart/SearchJob'
import CreateAlert from '../views/JobAlart/CreateAlert'
import Signin from '../views/JobAlart/Signin.vue'
import Resume from '../views/JobAlart/Resume/Resume.vue'

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
{
  path: '/signin' ,
  name: 'Signin',
  component: Signin,
  meta: {
    title: 'Signin'
  }
},
{
  path: '/resume' ,
  name: 'resume',
  component: Resume,
  meta: {
    title: 'Resume'
  }
},
]

const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

export default router
