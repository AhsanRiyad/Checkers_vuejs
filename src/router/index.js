import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration";
import Login from "../views/Login.vue";
import GetAlert from "../views/GetAlert";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (getCookie('auth_token')) {
    console.log(getCookie('auth_token'));
    next()
    return
  }
  next('/login')
}

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import(/* webpackChunkName: "about" */ "../views/Jobs.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
      path: "/registration",
      name: "Registration",
      component: Registration
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/recruiters",
    name: "Recruiters",
    component: () => import(/* webpackChunkName: "about" */ "../views/Recruiters.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/employer",
    name: "Employer",
    component: () => import(/* webpackChunkName: "about" */ "../views/Employer.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/getalert",
    name: "GetAlert",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GetAlert
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
