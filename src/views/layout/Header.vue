<template>
  <div class="header">
    <!-- header starts -->
    <v-app-bar class="white--text" style="background: #365899">
      <v-toolbar-title>
        <!-- <img :src="require('../../../public/JobAlartLogo.png')" alt=""> -->
        <router-link to="/" style="color: white; text-decoration: none">JobAlart</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="d-none d-md-inline">
        <v-btn router to="/" text color="white">Jobs</v-btn>
        <v-btn text  router to="/recruiter" color="white">Recruiters</v-btn>
        <v-btn
          router
          to="/signin"
          text
          color="white"
        >{{ $store.getters.isLoggedIn ? 'Logout' : 'Login' }}</v-btn>
        <v-btn router to="/employers" text color="white">Employeer/Job Post</v-btn>
        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
          v-if="$store.getters.isLoggedIn"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="white" icon v-bind="attrs" v-on="on" class="mr-3">
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item v-for="([icon, text, url], i) in menus" :key="i" link>
                <v-list-item-content>
                  <router-link :to="url">
                    <v-list-item-title>{{ text }}</v-list-item-title>
                  </router-link>
                </v-list-item-content>
                <v-list-item-icon>
                  <router-link :to="url">
                    <v-icon>{{ icon }}</v-icon>
                  </router-link>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block color="primary" text @click="menu = false">Signout</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
        <v-btn router to="/create-alert" color="white">Get Alert</v-btn>
      </span>

      <span>
        <v-app-bar-nav-icon color="white" class="d-md-none d-inline" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </span>
    </v-app-bar>
    <!-- header ends -->

    <!-- drawer starts -->
    <v-navigation-drawer v-model="drawer" fixed temporary style="background: #365899">
      <v-list style="background: #365899">
        <v-list-item v-for="([icon, text, url], i) in items" :key="i" link>
          <v-list-item-icon>
            <router-link :to="url">
              <v-icon class="white--text">{{ icon }}</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link :to="url">
              <v-list-item-title class="white--text">{{ text }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- drawer ends -->
  </div>
</template>

<script>
import "../../sass/job-alart/_header.scss";
export default {
  name: "Header",
  data: () => {
    return {
      drawer: false,
      items: [
        ["mdi-email", "Jobs", "/"],
        ["mdi-account-supervisor-circle", "Recruite", "/"],
        ["mdi-clock-start", "Login", "/"],
        // ["mdi-clock-start", "Employeers/Job Post"],
        // ["mdi-clock-start", "Get Alerts"],
      ],
      menus: [
        ["mdi-account-settings-outline", "Account", "/account-settings"],
        ["mdi-account-supervisor-circle", "My Jobs", "/applied-jobs"],
        ["mdi-clock-start", "Profile", "/"],
      ],
    };
  },
  computed: {
    isLoggedIn() {
      if (this.$cookies.get("accessToken") == null) {
        this.$store.commit("isLoggedIn", false);
        return false;
      } else {
        this.$store.commit("isLoggedIn", true);
        return true;
      }
    },
  },
  mounted() {
    console.log(
      "logged in check in the header...",
      this.$cookies.get("accessToken")
    );
  },
};
</script>
