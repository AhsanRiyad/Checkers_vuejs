<template>
  <div>
    <v-container>
      <v-form ref="form">
        <v-row justify="center">
          <v-col cols="12" md="4">
            <h1 class="text-center ja__headline">Job Alert</h1>

            <optionTab />

            <v-card>
              <v-row justify="center">
                <p class="text-center mb-n12 mt-4 header-text">
                  Create a new account
                </p>

                <v-col cols="10" md="10" class="col-1 pb-0">
                  <p class="mb-1">Username</p>
                  <v-text-field
                    :rules="fieldRulesProp(true, 'name', 'name')"
                    class="mb-0 pb-0 mb-0"
                    placeholder="Username"
                    outlined
                    dense
                    v-model="username"
                    @keyup.enter="submit"
                  ></v-text-field>
                </v-col>

                <v-col cols="10" md="10" class="col-2 mb-n4 pb-0">
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
                  <div
                    style="
                      display: flex;
                      justify-content: flex-start;
                      margin-top: -15px;
                      margin-bottom: -20px;
                    "
                  >
                    <v-checkbox v-model="toc">
                      <div slot="label">
                        I agree with the
                        <span style="color: #365899" @click.stop="tocView">
                          Terms and Conditions</span
                        >
                      </div>
                    </v-checkbox>
                  </div>
                </v-col>

                <v-col cols="10" md="10" class="col-3">
                  <v-btn
                    :loading="loading"
                    block
                    color="primary"
                    class="white--text"
                    :disabled="!toc"
                    @click.stop="submit"
                    >Signup</v-btn
                  >
                </v-col>

                <v-col cols="10" md="10">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="10" md="10" class="mb-n6 mt-0">
                  <div class="text-center">
                    <router-link :to="{ name: 'Signin' }"
                      >Already have an account? Signin.</router-link
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

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Terms and Conditions
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import validation from "../../../mixins/validation";
export default {
  name: "Signin",
  mixins: [validation],
  components: {
    optionTab: () => import("./tab/optionTab"),
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      dialog: false,
      loading: false,
      toc: false,
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
        name: "PrivacyPolicy",
      });
      window.open(routeData.href, "_blank");

      // this.dialog = true;
    },
    submit() {
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      let data = {};
      this.$store.getters.registerAs == "APPLICANTS"
        ? (data = {
            email: this.email,
            password: this.password,
            username: this.username,
          })
        : (data = {
            email: this.email,
            username: this.username,
            password: this.password,
            roles: "COMPANY",
          });

      this.$store
        .dispatch("callApi", {
          url: "users",
          method: "post",
          data,
        })
        .then((response) => {
          console.log("login image", response);
          //   this.$awn.success("Successful");
          //   localStorage.setItem("accessToken", response.access_token);
          //   this.$cookies.set("accessToken", response.access_token);

          setTimeout(() => {
            this.$router.history.push({ name: "Signin" });
          }, 1000);
        })
        .catch(() => {
          this.$awn.alert("Failed! Email/Password doesn't match");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          //  this.tableLoading = false;
        });
    },
  },
  mounted() {
    // this.$cookies.set("accessToken", null);
    this.$cookies.remove("accessToken");
    this.$store.commit("isLoggedIn", false);

    // console.log("cookies", this.$cookies.get("accessToken"));
    /*
    console.log(
      " is logged in ",
      this.R.isEmpty(this.$cookies.get("accessToken"))
    ); */
  },
};
</script>


<style scoped lang="scss">
// @import "../../../sass/_baseVariables.scss";
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
