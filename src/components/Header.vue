<template>
  <div class="desktop-nav">
    <div class="job_container">
      <div id="nav">
        <div class="logo">
          <router-link class="logo_link" to="/">
            <img class="logo_img" src="../assets/logo.png" alt="Job alert" />
          </router-link>
        </div>

        <nav class="right-nav">
          <router-link :to="{ name: 'Jobs'}">Jobs</router-link>
          <router-link :to="{ name: 'Recruiters'}">Recruiters</router-link>
          <a @click.prevent="logOut" v-if="isLoggedIn" href="#">Log out</a>
          <router-link v-if="!isLoggedIn" :to="{ name: 'Login'}">Log in</router-link>
          <router-link :to="{ name: 'Employer'}">Employer / Post job</router-link>
          <router-link :to="{ name: 'GetAlert'}" class="nav_btn job_btn">Get Alert</router-link
          >
        </nav>
      </div>
      <!-- /#nav -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
      isLoggedIn: false,
    }
  },
  created() {
    if(this.getCookie('auth_token') !== ''){
      console.log(this.getCookie('auth_token'));
      this.isLoggedIn = true;
    }

  },
  methods: {
    getCookie(cname) {
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
    },
    eraseCookie(name) {
      document.cookie = name+'=; Max-Age=-99999999;';
    },
    logOut(){
      this.eraseCookie('auth_token');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped></style>
