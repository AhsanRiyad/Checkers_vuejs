<template>
  <v-app>
    <LandingPage></LandingPage>
  </v-app>
</template>

<script>
// import { bus } from '@/main'
import cookie_mixins from "@/mixins/cookie_mixins";
import commonInfoMixins from "@/mixins/commonInfoMixins";
import LandingPage from "./views/JobAlart/LandingPage";
import ipMixins from "./mixins/ipMixins";
import refreshToken from "./mixins/tokenMixins";
export default {
  name: "App",
  mixins: [cookie_mixins, commonInfoMixins, ipMixins, refreshToken],
  components: {
    LandingPage: LandingPage,
  },

  data: () => ({
    login: false,
  }),
  computed: {
    isLogin() {
      return this.$store.getters.auth;
    },
  },
  beforeCreate() {},
  mounted() {
    this.getIp(
      () => {},
      () => {}
    );

    this.refreshToken(
      () => {},
      () => {}
    );
  },
  created() {
    if (
      this.R.isNil(this.$cookies.get("accessToken")) ||
      this.R.isEmpty(this.$cookies.get("accessToken"))
    ) {
      this.$store.commit("isLoggedIn", false);
    } else {
      this.$store.commit("isLoggedIn", true);
    }
    /* if (
      this.R.isNil(this.$cookies.get("is_company")) ||
      this.R.isEmpty(this.$cookies.get("is_company"))
    ) {
      this.$store.commit("is_company", false);
    } else {
      if (this.$cookies.get("is_company") == true) {
        console.log("is compnay... in the app.vue true");
        this.$store.commit("is_company", true);
      } else {
        this.$store.commit("is_company", false);
      }
    } */
  },
  updated() {
    this.getCommonInfo();
  },
};
</script>
