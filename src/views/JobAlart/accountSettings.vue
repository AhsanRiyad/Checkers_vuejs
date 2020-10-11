<template>
  <div class="account-settings" :user-email="userEmail">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">Account Settings</h1>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="ja__card">
            <ul class="ja__account__list">
              <li>
                <div class="left__side">
                  <div class="top__text">Email:</div>
                  <div class="bottom__text">{{ $cookies.get("email") }}</div>
                </div>
                <div class="right__side">
                  <router-link to="/change-email"
                    >Change email address</router-link
                  >
                </div>
              </li>
              <li>
                <div class="left__side">
                  <div class="top__text">Password:</div>
                  <div class="bottom__text">******</div>
                </div>
                <div class="right__side">
                  <router-link to="/change-password"
                    >Change password</router-link
                  >
                </div>
              </li>
              <!--  <li>
                <div class="left__side">
                  <div class="top__text">phone:</div>
                  <div class="bottom__text">01753212480</div>
                </div>
                <div class="right__side">
                  <router-link to="/add-number">add a number</router-link>
                </div>
              </li>
              <li>
                <div class="left__side">
                  <div class="top__text">Third-Party application:</div>
                  <div class="bottom__text">No third-party applications have access to your account</div>
                </div>
              </li>
              <li>
                <div class="left__side">
                  <div class="top__text">farzanakabirrinky@yahoo.com</div>
                </div>
                <div class="right__side">
                  <router-link to="/signin">signout</router-link>
                  <router-link to="/">Return to job search</router-link>
                </div>
              </li> -->
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../../sass/job-alart/_accountSettings.scss";
import axios from "axios";
export default {
  name: "accountSettings",
  data: () => {
    return {
      userEmail: "",
    };
  },
  created() {
    this.getEmail();
  },
  methods: {
    getEmail() {
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: "users/email",
        method: "get",
        data: {},
        headers,
      })
        .then((response) => {
          this.userEmail = response.data.email;
          console.log("farznaan emaillllllllllllllllllll", response);

          this.$awn.success("Successful");
        })
        .catch(() => {
          this.$awn.alert("Failed");
        });
    },
  },
};
</script>
