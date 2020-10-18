<template>
  <div>
    <Header></Header>
    <span :style="bodyStyle">
      <router-view></router-view>
    </span>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
export default {
  name: "LandingPage",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      drawer: true,
      items: [
        ["mdi-email", "Inbox"],
        ["mdi-account-supervisor-circle", "Supervisors"],
        ["mdi-clock-start", "Clock-in"],
      ],
      bodyStyle: {
        "background-image":
          "url(" + require("../../assets/background.png") + ")",
        "background-size": "cover",
        // height: "calc(100vh - 250px)",
        display: "block",
      },
    };
  },
  watch: {
    $route() {
     /*  const routesPath = [ "/" , "/signin", "/signup", "/forgot-password", "/company-list", "/companies", "/company-list", "/user-info", "/user-details" , "/jobs"  , "/change-password" , "/applied-jobs" ,"/account-settings" , "/change-email"];
      const routeName = [ "PostedJobList" , "JobDetails" ];  */

      console.log("route changed...", this.$route);
      if ( this.$route.name == "search" ) {
         this.bodyStyle = {
          "background-image":
            "url(" + require("../../assets/background.png") + ")",
          "background-size": "cover",
          display: "block",
        };
      } else {
        this.bodyStyle = {
          "background-image":
            "url(" + require("../../assets/background.png") + ")",
          "background-size": "cover",
          'min-height': "calc(100vh - 250px)",
          display: "block",
        };
      }
    },
  },
};
</script>
