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

export default {
  name: "App",
  mixins: [cookie_mixins, commonInfoMixins],
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
  created() {
    if (
      this.R.isNil(this.$cookies.get("accessToken")) ||
      this.R.isEmpty(this.$cookies.get("accessToken"))
    ) {
      this.$store.commit("isLoggedIn", false);
    } else {
      this.$store.commit("isLoggedIn", true);
    }
  },
  updated() {
    this.getCommonInfo();
  },
};
</script>
