<template>
  <div class="change_email">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">Please enter your email:</h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="ja__card">
            <v-form ref="form">
              <v-col cols="12" md="8" class="col-1 mb-n4 pb-0">
                <p class="mb-1">New email address</p>
                <v-text-field
                  :rules="[(v) => !!v || 'required']"
                  class="mb-0 pb-0 mb-0"
                  placeholder="Email"
                  outlined
                  dense
                  :rule="fieldRulesProp(true, 'email', 'email')"
                  v-model="email"
                ></v-text-field>
              </v-col>

              <div class="ja__button">
                <v-btn
                  color="#00204e"
                  class="white--text ma-2"
                  @click.stop="submit"
                  :loading="loading"
                  >save</v-btn
                >
                <v-btn
                  color="#00204e"
                  class="white--text ma-2"
                  link
                  to="/account-settings"
                  >cancel changes</v-btn
                >
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../../../sass/job-alart/_accountSettings.scss";
import validate from "../../../mixins/validation";
export default {
  name: "changeEmail",
  mixins: [validate],
  data() {
    return {
      email: "",
      loading: false,
    };
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      this.$store
        .dispatch("callApi", {
          url: "/users/forget-password",
          method: "post",
          params: {},
          data: {
            email: this.email,
          },
        })
        .then((response) => {
          console.log("Resume...fra", response);
          this.$awn.success("An email sent to your email");
        })
        .catch((error) => {
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>