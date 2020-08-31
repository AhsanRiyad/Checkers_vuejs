import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login_registration/Login.vue'
import JobCard from '../views/JobAlart/JobCard'
import SearchJob from '../views/JobAlart/SearchJob'
import CreateAlert from '../views/JobAlart/CreateAlert'
import Signin from '../views/JobAlart/Auth/Signin'
import Signup from '../views/JobAlart/Auth/Signup'
import Resume from '../views/JobAlart/Resume/Resume.vue'
import accountSettings from "@/views/JobAlart/accountSettings";
import changeEmail from "@/views/JobAlart/AccountSettings/changeEmail";
import changePassword from "@/views/JobAlart/AccountSettings/changePassword";
import addNumber from "@/views/JobAlart/AccountSettings/addNumber";
import verifyPhoneNumber from "@/views/JobAlart/AccountSettings/verifyPhoneNumber";
import appliedJobs from "@/views/JobAlart/appliedJobs";
// import AddCompany from "@/views/Employers/Company/AddCompany";
import JobsTab from "@/views/Employers/JobsTab";
import AddJobs from "@/views/Employers/Jobs/AddJobs";
import defaultResume from "../views/JobAlart/ResumeLayout/default.vue"
import premiumResume from "../views/JobAlart/ResumeLayout/premium.vue"

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
  path: '/defaultResume' ,
  name: 'defaultResume',
  component: defaultResume,
  meta: {
    title: 'defaultResume'
  }
},
{
  path: '/premiumResume' ,
  name: 'premiumResume',
  component: premiumResume,
  meta: {
    title: 'premiumResume'
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
  path: '/signup' ,
  name: 'Signup',
  component: Signup,
  meta: {
    title: 'Signup'
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
//    companies components routing start
//   {
//     path: '/add-company' ,
//     name: 'AddCompany',
//     component: AddCompany,
//     meta: {
//       title: 'Add Company'
//     }
//   },
  {
    path: '/jobs' ,
    name: 'JobsTab',
    component: JobsTab,
    meta: {
      title: 'Jobs'
    }
  },
//    companies components routing end
  //   jobs components routing start
  {
    path: '/add-job' ,
    name: 'AddJobs',
    component: AddJobs,
    meta: {
      title: 'Add Jobs'
    }
  }
//   jobs components routing end
]

const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

export default router
