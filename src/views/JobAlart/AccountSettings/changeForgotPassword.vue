<template>
  <div class="change_pass">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">
            Change password
            <!-- <span>farzanakabirrinky@yahoo.com</span> -->
          </h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="ja__card">
            <v-form ref="form">
              <v-col cols="12" md="8" class="col-1 mb-n4 pb-0">
                <p class="mb-1">New password</p>
                <v-text-field
                  :rules="[
                    (v) => !!v || 'required',
                    (v) =>
                      v.length > 6 ||
                      'Password can not be less than 6 characters',
                  ]"
                  class="mb-0 pb-0 mb-0"
                  placeholder="Password"
                  outlined
                  dense
                  type="password"
                  v-model="data.password"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8" class="col-2 mb-0 pb-0">
                <p class="mb-1">Confirm password</p>
                <v-text-field
                  class="mb-0"
                  :rules="[
                    (v) => {
                      if (v != data.password) {
                        return 'Password does not match';
                      } else return true;
                    },
                  ]"
                  placeholder="Password"
                  outlined
                  dense
                  type="password"
                  v-model="data.new_password"
                ></v-text-field>
              </v-col>
              <div class="ja__button">
                <v-btn
                  color="#365899"
                  class="white--text ma-2"
                  @click.stop="submit"
                  >save</v-btn
                >
                <v-btn
                  color="#365899"
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
import axios from "axios";
export default {
  name: "changePassword",
  data: () => {
    return {
      data: {
        password: "",
        new_password: "",
      },
      loading: false,
    };
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) return;

      this.loading = true;

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: "users/new-password/" + this.$route.params.code,
        method: "put",
        data: {
          new_password: this.data.password,
        },
        headers,
      })
        .then((response) => {
          console.log(response);
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
  mounted() {
    console.log(this.$route);
  },
};
</script>
