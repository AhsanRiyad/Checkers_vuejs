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
import AddJobs from "@/views/Employers/Jobs/AddJobs";
import defaultResume from "../views/JobAlart/ResumeLayout/default.vue"
import premiumResume from "../views/JobAlart/ResumeLayout/premium.vue"
import EmployersPanel from "@/views/Employers/EmployersPanel";
import JobDetails from "@/views/Employers/Jobs/JobDetails";
import JobOnlineApply from "@/views/JobAlart/JobApply/JobOnlineApply";

import biodata from "../views/JobAlart/Resume/Biodata"
import workExperience from "../views/JobAlart/Resume/WorkExperience"
import education from "../views/JobAlart/Resume/Education"
import pricingTable from "@/views/JobAlart/pricingTable";

import forgotPassword from "../views/JobAlart/AccountSettings/forgotPassword"
import AddCompanies from "@/views/Employers/companies/AddCompanies";
import userInfo from "@/views/JobAlart/userInfo";
import CompanyList from "@/views/Employers/companies/CompanyList";
import PostedJobList from "@/views/Employers/Jobs/PostedJobList";
import recruiter from "@/views/recruiter";
import ApplicantResume from "@/views/Employers/Jobs/jobDetails/ApplicantResume";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/',
    name: 'SearchJob',
    component: SearchJob,
    meta: {
      title: 'JobAlart'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: JobCard,
    meta: {
      title: 'search'
    }
  },
  {
    path: '/defaultResume',
    name: 'defaultResume',
    component: defaultResume,
    meta: {
      title: 'defaultResume'
    }
  },
  {
    path: '/premiumResume',
    name: 'premiumResume',
    component: premiumResume,
    meta: {
      title: 'premiumResume'
    }
  },
  {
    path: '/applicant-resume/:id',
    name: 'ApplicantResume',
    component: ApplicantResume,
    meta: {
      title: 'ApplicantResume'
    }
  },
  {
    path: '/create-alert',
    name: 'CreateAlert',
    component: CreateAlert,
    meta: {
      title: 'Create Alert'
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: {
      title: 'Signin'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Signup'
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: {
      title: 'Resume'
    }
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: forgotPassword,
    meta: {
      title: 'Forgot Password'
    }
  },
  {
    path: '/biodata',
    name: 'biodata',
    component: biodata,
    meta: {
      title: 'Biodata'
    }
  },
  {
    path: '/work-experience',
    name: 'workExperience',
    component: workExperience,
    meta: {
      title: 'Work Experience'
    }
  },
  {
    path: '/education',
    name: 'education',
    component: education,
    meta: {
      title: 'Education'
    }
  },
  {
    path: '/account-settings',
    name: 'accountSettings',
    component: accountSettings,
    meta: {
      title: 'Account Settings'
    }
  },
  {
    path: '/applied-jobs',
    name: 'appliedJobs',
    component: appliedJobs,
    meta: {
      title: 'Applied Jobs'
    }
  },
  // account settings component routing start
  {
    path: '/change-email',
    name: 'changeEmail',
    component: changeEmail,
    meta: {
      title: 'Change Email'
    }
  },
  {
    path: '/change-password',
    name: 'changePassword',
    component: changePassword,
    meta: {
      title: 'Change Password'
    }
  },
  {
    path: '/add-number',
    name: 'addNumber',
    component: addNumber,
    meta: {
      title: 'Add Number'
    }
  },
  {
    path: '/verifyphone',
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
    path: '/job-list/:id',
    name: 'PostedJobList',
    component: PostedJobList,
    meta: {
      title: 'Employers Panel'
    }
  },
  {
    path: '/recruiter',
    name: 'recruiter',
    component: recruiter,
    meta: {
      title: 'recruiter'
    }
  },
  {
    path: '/employers',
    name: 'EmployersPanel',
    component: EmployersPanel,
    meta: {
      title: 'Employers Panel'
    }
  },
  {
    path: '/company-list',
    name: 'CompanyList',
    component: CompanyList,
    meta: {
      title: 'Companies List'
    }
  },
  //    companies components routing end
  //   jobs components routing start
  {
    path: '/add-job',
    name: 'AddJobs',
    component: AddJobs,
    meta: {
      title: 'Add Jobs'
    }
  },
  {
    path: '/add-companies',
    name: 'AddCompanies',
    component: AddCompanies,
    meta: {
      title: 'Add Companies'
    }
  },
  {
    path: '/applicant-list/:id',
    name: 'JobDetails',
    component: JobDetails,
    meta: {
      title: 'Job Details'
    }
  },
  {
    path: '/jobonlineapply',
    name: 'JobOnlineApply',
    component: JobOnlineApply,
    meta: {
      title: 'Job Online Apply'
    }
  },
  {
    path: '/subscription' ,
    name: 'pricingTable',
    component: pricingTable,
    meta: {
      title: 'Pricing Table'
    }},
  {
    path: '/user-info/:homePage' ,
    name: 'userInfo',
    component: userInfo,
    props: { newsletterPopup: false },
    meta: {
      title: 'User Info'
    }
  }
  //   jobs components routing end
]

const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

export default router
