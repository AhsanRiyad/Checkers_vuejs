<template>
  <div>
    <v-container>
      <v-form ref="form">
        <v-row justify="center">
          <v-col cols="12" md="4">
            <h1 class="text-center ja__headline">Job Alert</h1>

            <v-card>
              <v-row justify="center">
                <p class="text-center mb-n12 mt-4 header-text">Please Login</p>

                <v-col cols="10" md="10" class="col-1 mb-n4 pb-0">
                  <p class="mb-1">Email</p>
                  <v-text-field
                    :rules="fieldRulesProp(true, 'email', 'email')"
                    class="mb-0 pb-0 mb-0"
                    placeholder="Email"
                    outlined
                    dense
                    v-model="email"
                    @keyup.enter="submit"
                  ></v-text-field>
                  <p class="smallText mt-n3">
                    We will never share your email with anyone
                  </p>
                </v-col>

                <v-col cols="10" md="10" class="col-2 mb-0 pb-0">
                  <p class="mb-1">Password</p>
                  <v-text-field
                    class="mb-0"
                    :rules="fieldRulesProp(true, 'password', 'password')"
                    placeholder="Password"
                    outlined
                    v-model="password"
                    dense
                    type="password"
                    @keyup.enter="submit"
                  ></v-text-field>

                  <div style="display: flex; justify-content: flex-end">
                    <router-link to="/forgot-password"
                      >Forgot password?</router-link
                    >
                  </div>
                </v-col>

                <v-col cols="10" md="10" class="col-3">
                  <v-btn
                    :loading="loading"
                    block
                    color="primary"
                    class="white--text"
                    @click.stop="submit()"
                    >Login</v-btn
                  >
                </v-col>

                <v-col cols="10" md="10">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="10" md="10" class="mb-n6 mt-0">
                  <div class="text-center">
                    <router-link :to="{ name: 'Signup' }"
                      >Create New Account</router-link
                    >
                  </div>
                </v-col>

                <v-col cols="10" md="10" class="mb-n4 mt-0">
                  <p class="smallText mt-0 mb-0">
                    All your activity will remain private
                  </p>
                </v-col>

                <v-col cols="10" md="10" class="mb-0 mt-0">
                  <p class="tocText">
                    By signing in to your account, you agree to JOB ALERT’s
                    <span style="color: #365899" @click.stop="tocView">
                      Terms and Conditions</span
                    >
                    and consent to our
                    <span style="color: #365899" @click.stop="tocView">
                      Cookie Policy</span
                    >
                    and
                    <span style="color: #365899" @click.stop="tocView">
                      Privacy Policy</span
                    >
                    .
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import validation from "../../../mixins/validation";
import axios from "axios";
export default {
  name: "Signin",
  mixins: [validation],

  data() {
    return {
      email: "",
      password: "",
      loading: false,
      homePageUrl: "",
    };
  },
  methods: {
    tocView() {
      console.log("toc click");
      /*
      let routeData = this.$router.resolve({
        name: "/",
        query: { data: "someData" },
      }); */

      let routeData = this.$router.resolve({
        name: "TermsAndCondition",
      });
      window.open(routeData.href, "_blank");

      // this.dialog = true;
    },
    submit() {
      if (!this.$refs.form.validate()) return;

      this.loading = true;

      this.$store
        .dispatch("callApi", {
          url: "users/login",
          method: "post",
          data: {
            email: this.email,
            password: this.password,
            home_page_url: this.homePageUrl,
          },
          params: {
            ip: this.$store.getters.userIp,
          },
        })
        .then((response) => {
          console.log("login image", response);
          this.$awn.success("Successful");
          localStorage.setItem("accessToken", response.access_token);
          this.$cookies.set("accessToken", response.access_token);
          localStorage.setItem("accessToken", response.access_token);
          this.$cookies.set("email", this.email);
          localStorage.setItem("email", this.email);
          this.$cookies.set("is_company", response.is_company);
          localStorage.setItem("is_company", response.is_company);
          this.$store.commit("is_company", response.is_company);
          this.$cookies.set("_id", response.id);
          this.$store.commit("isLoggedIn", true);
          this.homePageUrl = response.home_page_url;

          setTimeout(() => {
            if (response.is_company) {
              this.$router.history.push({ name: "userInfo" });
            } else {
              this.$router.history.push({ name: "biodata" });
            }
            // this.$router.history.push({ name: "SearchJob" }); params: {homePageUrl:this.homePageUrl}
          }, 1000);

          // this.$refs.form.reset();
          // saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
        })
        .catch(() => {
          this.$awn.alert("Failed! Email/Password doesn't match");
          // this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          //  this.tableLoading = false;
        });
    },
  },
  mounted() {
    // this.$cookies.set("accessToken", null);

    // console.log("cookies", this.$cookies.get("accessToken"));
    /*
    console.log(
      " is logged in ",
      this.R.isEmpty(this.$cookies.get("accessToken"))
    ); */

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios({
      method: "get",
      baseURL: this.$store.state.apiBase,
      url: `users/logout`,
      data: {},
      params: {
        access_token: this.$cookies.get("accessToken"),
        ip: this.$store.getters.userIp,
      },
      headers,
    })
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        this.$cookies.remove("accessToken");
        this.$cookies.remove("is_company");
        localStorage.removeItem("is_company");
        localStorage.removeItem("accessToken");
        this.$cookies.remove("_id");
        this.$store.commit("isLoggedIn", false);
        this.$store.commit("is_company", false);
      });
  },
};
</script>


<style scoped lang="scss">
.col-1 {
  margin-top: 40px;
}

.smallText {
  font-size: 12px;
  margin-top: 0px;
}

.tocText {
  font-weight: bold;
}

.tocInsideText {
  color: blue;
}

.header-text {
  font-size: 20px;
  color: #002157;
  font-weight: bold;
}
</style>
