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
                <p class="text-center mb-n12 mt-4 header-text">Create a new account</p>

                <v-col cols="10" md="10" class="col-1 pb-0">
                  <p class="mb-1">Username</p>
                  <v-text-field
                    :rules="fieldRulesProp(true, 'name' , 'name')"
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
                    :rules="fieldRulesProp(true, 'email' , 'email')"
                    class="mb-0 pb-0 mb-0"
                    placeholder="Email"
                    outlined
                    dense
                    v-model="email"
                    @keyup.enter="submit"
                  ></v-text-field>
                  <p class="smallText mt-n3">We will never share your email with anyone</p>
                </v-col>

                <v-col cols="10" md="10" class="col-2 mb-0 pb-0">
                  <p class="mb-1">Password</p>
                  <v-text-field
                    class="mb-0"
                    :rules="fieldRulesProp(true, 'password' , 'password')"
                    placeholder="Password"
                    outlined
                    v-model="password"
                    dense
                    type="password"
                    @keyup.enter="submit"
                  ></v-text-field>
                  <p class="text-right mt-n6">Forgot Password?</p>
                </v-col>

                <v-col cols="10" md="10" class="col-3">
                  <v-btn
                    :loading="loading"
                    block
                    color="primary"
                    class="white--text"
                    @click.stop="submit"
                  >Signup</v-btn>
                </v-col>

                <v-col cols="10" md="10">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="10" md="10" class="mb-n6 mt-0">
                  <div class="text-center">
                    <router-link :to="{ name: 'Signin' }">Already have an account? Signin.</router-link>
                  </div>
                </v-col>

                <v-col cols="10" md="10" class="mb-n4 mt-0">
                  <p class="smallText mt-0 mb-0">All your activity will remain private</p>
                </v-col>

                <v-col cols="10" md="10" class="mb-0 mt-0">
                  <p class="tocText">
                    By signing in to your account, you agree to JOB ALERT’s
                    <span
                      class="tocInsideText"
                    >Terms of Service</span> and consent to our
                    <span class="tocInsideText">Cookie Policy</span> and
                    <span class="tocInsideText">Privacy Policy</span> .
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

      loading: false,
    };
  },
  methods: {
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
            role: "COMPANY",
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

          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
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