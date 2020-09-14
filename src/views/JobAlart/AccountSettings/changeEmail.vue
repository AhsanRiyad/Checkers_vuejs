<template>
  <div class="change_email">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">
            Change email address for
            <span>farzanakabirrinky@yahoo.com</span>
          </h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="ja__card">
            <v-form ref="form">
              <v-col cols="12" md="8" class="col-1 mb-n4 pb-0">
                <p class="mb-1">New email address</p>
                <v-text-field
                  :rules="[v=>!!v||'required']"
                  class="mb-0 pb-0 mb-0"
                  placeholder="Email"
                  outlined
                  dense
                  v-model="data.email"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8" class="col-2 mb-0 pb-0">
                <p class="mb-1">Current password</p>
                <v-text-field
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Password"
                  outlined
                  dense
                  type="password"
                  v-model="data.password"
                ></v-text-field>
              </v-col>
              <div class="ja__button">
                <v-btn
                  :loading="loading"
                  color="#00204e"
                  class="white--text ma-2"
                  @click.stop="submit"
                >save</v-btn>
                <v-btn
                  color="#00204e"
                  class="white--text ma-2"
                  link
                  to="/account-settings"
                >cancel changes</v-btn>
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
import axios from "axios";

export default {
  name: "changeEmail",
  data: () => {
    return {
      data: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    submit() {
      console.log("this is submit clicked...");
      if (!this.$refs.form.validate()) return;
      this.loading = true;

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: "users/email",
        method: "put",
        data: this.data,
        headers,
      })
        .then((response) => {
          console.log(response);
          this.$router.histroy.push('/signin');

          this.$awn.success("Successful");
        })
        .catch(() => {
          this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>