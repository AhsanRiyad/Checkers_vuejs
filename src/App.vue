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
                      <router-link class="nav_btn job_btn" to="/about">Get Alert</router-link>
                  </nav>

              </div> <!-- /#nav -->

          </div>
      </div>

      <router-view />

      <footer class="site_footer">

          <div class="job_container">

              <div class="footer_col">

                  <h3 class="footer_title">
                      About Us
                  </h3>

                  <ul class="footer_nav">
                      <li>
                          <a href="#">About Us</a>
                      </li>
                      <li>
                          <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                          <a href="#">International Partners</a>
                      </li>
                      <li>
                          <a href="#">Other Partners</a>
                      </li>
                      <li>
                          <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#">Feedback</a>
                      </li>
                      <li>
                          <a href="#">Contact Us</a>
                      </li>
                  </ul> <!-- /.footer_nav -->

              </div> <!-- /.footer_col -->

              <div class="footer_col">

                  <h3 class="footer_title">
                      Job Seekers
                  </h3>

                  <ul class="footer_nav">
                      <li>
                          <a href="#">Create Account</a>
                      </li>
                      <li>
                          <a href="#">Career Counseling</a>
                      </li>
                      <li>
                          <a href="#">FAQ</a>
                      </li>
                      <li>
                          <a href="#">Video Guides</a>
                      </li>
                  </ul> <!-- /.footer_nav -->

              </div> <!-- /.footer_col -->

              <div class="footer_col">

                  <h3 class="footer_title">
                      Employer
                  </h3>

                  <ul class="footer_nav">
                      <li>
                          <a href="#">Create Account</a>
                      </li>
                      <li>
                          <a href="#">Products/Service</a>
                      </li>
                      <li>
                          <a href="#">Post a Job</a>
                      </li>
                      <li>
                          <a href="#">FAQ</a>
                      </li>
                  </ul> <!-- /.footer_nav -->

              </div> <!-- /.footer_col -->

              <div class="footer_col">

                  <h3 class="footer_title">
                      Social Media
                  </h3>

                  <ul class="footer_nav">
                      <li>
                          <a href="#">Facebook</a>
                      </li>
                      <li>
                          <a href="#">Google</a>
                      </li>
                      <li>
                          <a href="#">Youtube</a>
                      </li>
                      <li>
                          <a href="#">LinkedIn</a>
                      </li>
                  </ul> <!-- /.footer_nav -->

              </div> <!-- /.footer_col -->

          </div>

      </footer>

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
    .job_btn{
        display: inline-block;
        text-align: center;
        font-weight: 700;
        background: #365899;
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        &:hover{
            background: #6f9ae8;
        }
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* nav css start */
    .desktop-nav{
        position: relative;
    }
#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    .logo{
        .logo_link{
            display: inline-block;
        }
        .logo_img{
            height: 50px;
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
            &.nav_btn{
                color: #fff;
            }
        }
    }
}


    /* footer css start*/
    .site_footer{
        padding: 50px 0;
        background: #365899;
        .job_container{
            display: flex;
            .footer_col{
                width: 25%;
            }
        }
        .footer_title{
            color: #fff;
            margin: 0 0 20px;
        }
        .footer_nav{
            padding: 0;
            margin: 0;
            list-style-type: none;
            li{
                margin-bottom: 5px;
                a{
                    display: inline-block;
                    color: #c8c8c8;
                }
            }
        }
    }
</style>
