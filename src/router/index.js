import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login_registration/Login.vue'
import JobCard from '../views/JobAlart/JobCard'
import SearchJob from '../views/JobAlart/SearchJob'
import CreateAlert from '../views/JobAlart/CreateAlert'
import Signin from '../views/JobAlart/Signin.vue'
import Resume from '../views/JobAlart/Resume/Resume.vue'
import accountSettings from "@/views/JobAlart/accountSettings";
import changeEmail from "@/views/JobAlart/AccountSettings/changeEmail";
import changePassword from "@/views/JobAlart/AccountSettings/changePassword";
import addNumber from "@/views/JobAlart/AccountSettings/addNumber";
import verifyPhoneNumber from "@/views/JobAlart/AccountSettings/verifyPhoneNumber";
import appliedJobs from "@/views/JobAlart/appliedJobs";



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
  {
    path: '/account-settings' ,
    name: 'accountSettings',
    component: accountSettings,
    meta: {
      title: 'Account Settings'
    }
  },
  {
    path: '/applied-jobs' ,
    name: 'appliedJobs',
    component: appliedJobs,
    meta: {
      title: 'Applied Jobs'
    }
  },
// account settings component routing start
  {
    path: '/change-email' ,
    name: 'changeEmail',
    component: changeEmail,
    meta: {
      title: 'Change Email'
    }
  },
  {
    path: '/change-password' ,
    name: 'changePassword',
    component: changePassword,
    meta: {
      title: 'Change Password'
    }
  },
  {
    path: '/add-number' ,
    name: 'addNumber',
    component: addNumber,
    meta: {
      title: 'Add Number'
    }
  },
  {
    path: '/verifyphone' ,
    name: 'verifyPhoneNumber',
    component: verifyPhoneNumber,
    meta: {
      title: 'Verify Phone Number'
    }
  },
// account settings component routing end
]

const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

export default router
