<template>
  <div id="app">

      <div class="desktop-nav">
          <div class="job_container">

              <div id="nav">

                  <div class="logo">
                      <router-link class="logo_link" to="/">
                          <img class="logo_img" src="./assets/logo.png" alt="Job alert">
                      </router-link>
                  </div>

                  <nav class="right-nav">
                      <router-link to="/">Jobs</router-link>
                      <router-link to="/about">Recruiters</router-link>
                      <router-link to="/about">Log in</router-link>
                      <router-link to="/about">Employer / Post job</router-link>
                      <router-link class="nav-btn" to="/about">Get Alert</router-link>
                  </nav>

              </div> <!-- /#nav -->

          </div>
      </div>

    <router-view />

  </div>
</template>

<style lang="scss">
    html{

    }
    body{
        padding: 0;
        margin: 0;
        font-size: 16px;
    }
    .job_container{
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 15px;
    }
    a{
        text-decoration: none;
        transition: all .4s ease;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .logo{
        .logo_link{
            display: inline-block;
        }
        .logo_img{
            height: 54px;
        }
    }
    .right-nav{
        a {
            font-weight: bold;
            color: #000;
            display: inline-block;
            margin-left: 40px;
            &:hover{
                color: #365899;
            }
            &.router-link-exact-active {
                color: #365899;
            }
            &.nav-btn{
                background: #365899;
                color: #fff;
                border-radius: 5px;
                padding: 10px 20px;
            }
        }
    }
}
</style>
