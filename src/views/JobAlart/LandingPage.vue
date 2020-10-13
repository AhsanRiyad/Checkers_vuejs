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
      console.log("route changed...", this.$route);
      if (this.$route.path == "/" || this.$route.path == "/signin" || this.$route.path == "/signup" || this.$route.path == "/forgot-password" || this.$route.path == "/company-list" || this.$route.name == "PostedJobList" || this.$route.path == "/companies" || this.$route.path == "/company-list" || this.$route.path == "/user-info" || this.$route.path == "/user-details" || this.$route.path == "/jobs" || this.$route.path == "/change-password" || this.$route.path == "/applied-jobs" || this.$route.path == "/account-settings" || this.$route.name == "JobDetails" || this.$route.path == "/change-email") {
        this.bodyStyle = {
          "background-image":
            "url(" + require("../../assets/background.png") + ")",
          "background-size": "cover",
          'min-height': "calc(100vh - 250px)",
          display: "block",
        };
      } else {
        this.bodyStyle = {
          "background-image":
            "url(" + require("../../assets/background.png") + ")",
          "background-size": "cover",
          display: "block",
        };
      }
    },
  },
};
</script>
