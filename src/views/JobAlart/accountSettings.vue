<template>
  <div class="account-settings">
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
                  <router-link to="/change-email" class="hidden-sm-and-down"
                    >Change email address</router-link
                  >
                  <router-link to="/change-email" class="hidden-md-and-up"
                  ><v-icon>mdi-square-edit-outline</v-icon></router-link
                  >
                </div>
              </li>
              <li>
                <div class="left__side">
                  <div class="top__text">Password:</div>
                  <div class="bottom__text">******</div>
                </div>
                <div class="right__side">
                  <router-link to="/change-password" class="hidden-sm-and-down"
                    >Change password</router-link
                  >
                  <router-link to="/change-password" class="hidden-md-and-up"
                  ><v-icon>mdi-square-edit-outline</v-icon></router-link
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
                  <router-link to="/">Return o job search</router-link>
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
export default {
  name: "accountSettings",
  data: () => {
    return {};
  },
};
</script>
