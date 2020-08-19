<template>
  <div>
    <v-container>
      <v-form ref="form">
        <v-row justify="center">
          <v-col cols="12" md="4">
            <h1 class="text-center">Job Alert</h1>
            <v-card>
              <v-row justify="center">
                <v-col cols="10" md="10" class="col-1 mb-n4 pb-0">
                  <p class="mb-1">Email Id / Username</p>
                  <v-text-field
                    :rules="fieldRulesProp(true, 'email' , 'email')"
                    class="mb-0 pb-0 mb-0"
                    placeholder="Email"
                    outlined
                    dense
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
                    dense
                  ></v-text-field>
                  <p class="text-right mt-n6">Forgot Password?</p>
                </v-col>

                <v-col cols="10" md="10" class="col-3">
                  <v-btn block color="#00204e" class="white--text" @click.stop="submit">Login</v-btn>
                </v-col>

                <v-col cols="10" md="10">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="10" md="10" class="mb-n6 mt-0">
                  <p class="text-center">Create New Account</p>
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
import validation from "../../mixins/validation";
export default {
  name: "Signin",
  mixins: [validation],
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$refs.form.validate();
    },
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
</style>