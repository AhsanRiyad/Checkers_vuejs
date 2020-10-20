import Vue from 'vue'
import VueRouter from 'vue-router'
const AllJobList = () => import("@/views/Employers/Jobs/JobsTab/AllJobList");
const JobsTab = () =>  import("@/views/Employers/Jobs/JobsTab");
const companiesTab = () => import("@/views/Employers/companies/companiesTab");
const userInfoDetails = () => import("@/views/Employers/companies/UserInfo/userInfoDetails");
const Contact = () =>  import("@/views/JobAlart/Footer/Contact");
const PrivacyPolicy = () =>  ("@/views/JobAlart/Footer/PrivacyPolicy");

const FAQSeekers = () => import("@/views/JobAlart/Footer/FAQSeekers");
const FAQCompany = () => import("@/views/JobAlart/Footer/FAQCompany");
const TermsAndCondition = () => import("@/views/JobAlart/Footer/TermsAndCondition");

const JobCard = () => import('../views/JobAlart/JobCard')
const SearchJob = () => import('../views/JobAlart/SearchJob')
const CreateAlert = () => import('../views/JobAlart/Alart/CreateAlert')
const Signin = () => import('../views/JobAlart/Auth/Signin')
const Signup = () => import('../views/JobAlart/Auth/Signup')
const Resume = () => import('../views/JobAlart/Resume/Resume.vue')
const accountSettings = () => import("@/views/JobAlart/accountSettings")
const changeEmail = () => import("@/views/JobAlart/AccountSettings/changeEmail")
const changePassword = () => import("@/views/JobAlart/AccountSettings/changePassword")
const addNumber = () => import("@/views/JobAlart/AccountSettings/addNumber")
const verifyPhoneNumber = () => import("@/views/JobAlart/AccountSettings/verifyPhoneNumber")
const appliedJobs = () => import("@/views/JobAlart/appliedJobs")

const AddJobs = () => import("@/views/Employers/Jobs/AddJobs")
const defaultResume = () => import("../views/JobAlart/ResumeLayout/default.vue")
const premiumResume = () => import("../views/JobAlart/ResumeLayout/premium.vue")
const EmployersPanel = () => import("@/views/Employers/EmployersPanel")
const JobDetails = () => import("@/views/Employers/Jobs/JobDetails")
const JobOnlineApply = () => import("@/views/JobAlart/JobApply/JobOnlineApply")

const biodata = () => import("../views/JobAlart/Resume/Biodata")
const workExperience = () => import("../views/JobAlart/Resume/WorkExperience")
const education = () => import("../views/JobAlart/Resume/Education")
const pricingTable = () => import("@/views/JobAlart/pricingTable")

const forgotPassword = () => import("../views/JobAlart/AccountSettings/forgotPassword")
const changeForgotPassword = () => import("../views/JobAlart/AccountSettings/changeForgotPassword")
const AddCompanies = () => import("@/views/Employers/companies/AddCompanies")
const userInfo = () => import("@/views/Employers/companies/UserInfo/userInfo")
const CompanyList = () => import("@/views/Employers/companies/CompanyList")
const PostedJobList = () => import("@/views/Employers/Jobs/PostedJobList")

const recruiterList = () => import("../views/JobAlart/Recruiter/RecruiterList");
const recruitersJob = () => import("../views/JobAlart/Recruiter/RecruitersJob");
const AlertList = () => import ("../views/JobAlart/Alart/AlertList");


//footer
const AboutUs = () => import("../views/JobAlart/Footer/AboutUs")


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
    path: '/about-us',
    name: 'aboutUs',
    component: AboutUs,
    meta: {
      title: 'JobAlart'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'JobAlart'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'JobAlart'
    }
  },
  {
    path: '/terms-and-condition',
    name: 'TermsAndCondition',
    component: TermsAndCondition,
    meta: {
      title: 'JobAlart'
    }
  },
  {
    path: '/faq-for-job-seekers',
    name: 'FAQSeekers',
    component: FAQSeekers,
    meta: {
      title: 'JobAlart'
    }
  },
  {
    path: '/faq-for-company',
    name: 'FAQCompany',
    component: FAQCompany,
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
    path: '/create-alert',
    name: 'CreateAlert',
    component: CreateAlert,
    meta: {
      title: 'Create Alert'
    }
  },
  {
    path: '/my-job-alerts',
    name: 'AlertList',
    component: AlertList,
    meta: {
      title: 'Alert List'
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
    name: 'ForgotPassword',
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
    path: '/users/new-password/:code',
    name: 'changeForgotPassword',
    component: changeForgotPassword,
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
    path: '/recruiter',
    name: 'recruiter',
    component: recruiterList,
    meta: {
      title: 'recruiter'
    }
  },

  {
    path: '/recruitersJob',
    name: 'recruitersJob',
    component: recruitersJob,
    meta: {
      title: 'recruiter'
    }
  },
  {
    path: '/employers',
    redirect: { name: 'userInfoDetails' },
    component: EmployersPanel,
    meta: {
      title: 'Employers Panel'
    },
    children: [
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
        path: '/jobs',
        name: 'JobsTab',
        component: JobsTab,
        meta: {
          title: 'Jobs'
        }
      },
      {
        path: '/companies',
        name: 'companiesTab',
        component: companiesTab,
        meta: {
          title: 'companies'
        }
      },


      {
        path: '/add-job',
        name: 'AddJobs',
        component: AddJobs,
        meta: {
          title: 'Add Jobs'
        }
      },
      {
        path: '/job-list/:id',
        name: 'PostedJobList',
        component: PostedJobList,
        meta: {
          title: 'Employers Panel'
        }
      },
      {
        path: '/all-jobs',
        name: 'AllJobList',
        component: AllJobList,
        meta: {
          title: 'All Jobs'
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
        path: '/subscription',
        name: 'pricingTable',
        component: pricingTable,
        meta: {
          title: 'Pricing Table'
        }
      },
      {
        path: '/user-info',
        name: 'userInfo',
        component: userInfo,
        props: { newsletterPopup: false },
        meta: {
          title: 'User Info'
        }
      },
      {
        path: '/user-details',
        name: 'userInfoDetails',
        component: userInfoDetails,
        meta: {
          title: 'User Info Details'
        }
      }
    ]
  },

  //   jobs components routing end
]
const router = new VueRouter({
  routes,
  mode: 'history' /*mode: 'hash'*/
})

import { companyRoutes, guestRoute } from "../data/protectedRoute";

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("accessToken") == null) {
    if (guestRoute.some(n => n == to.name)) {
      next();
    } else {
      next('/');
    }
  } else if (localStorage.getItem("is_company") == 'true') {
    next();
  } else if (localStorage.getItem("is_company") == 'false') {
    if (!companyRoutes.some(n => n == to.name)) {
      next();
    } else {
      next('/');
    }
  } else {
    next('/');
  }
})
export default router;
