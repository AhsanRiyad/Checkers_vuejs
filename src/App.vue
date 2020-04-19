<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
}
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
.job_container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
}
a {
  text-decoration: none;
  transition: all 0.4s ease;
}
.job_btn {
  display: inline-block;
  text-align: center;
  font-weight: 700;
  background: #365899;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  &:hover {
    background: #6f9ae8;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* nav css start */
.desktop-nav {
  position: relative;
}
#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  .logo {
    .logo_link {
      display: inline-block;
    }
    .logo_img {
      height: 50px;
    }
  }
  .right-nav {
    a {
      font-weight: bold;
      color: #000;
      display: inline-block;
      margin-left: 40px;
      &:hover {
        color: #365899;
      }
      &.router-link-exact-active {
        color: #365899;
      }
      &.nav_btn {
        color: #fff;
      }
    }
  }
}

/* footer css start*/
.site_footer {
  padding: 50px 0;
  background: #365899;
  .job_container {
    display: flex;
    .footer_col {
      width: 25%;
    }
  }
  .footer_title {
    color: #fff;
    margin: 0 0 20px;
  }
  .footer_nav {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      margin-bottom: 5px;
      a {
        display: inline-block;
        color: #c8c8c8;
      }
    }
  }
}
</style>
