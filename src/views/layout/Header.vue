<template>
  <div class="header">
    <!-- header starts -->
    <v-app-bar class="white--text" style="background: #365899">
      <v-toolbar-title>
        <!-- <img :src="require('../../../public/JobAlartLogo.png')" alt=""> -->
        <router-link to="/" style="color: white; text-decoration: none"
        >JobAlart
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="d-none d-md-inline">
        <v-btn router to="/" text color="white">Jobs</v-btn>
        <v-btn text router @click.stop="gotoRecruiter" color="white"
        >Recruiters</v-btn
        >
        <v-btn
            v-if="$store.getters.isLoggedIn"
            router
            to="/biodata"
            text
            color="white"
        >Resume</v-btn
        >
        <v-btn
            v-if="!$store.getters.isLoggedIn"
            router
            to="/signin"
            text
            color="white"
        >Login</v-btn
        >
        <v-btn
            v-if="$store.getters.is_company"
            router
            to="/employers"
            text
            color="white"
        >Employeer/Job Post</v-btn
        >
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
            <v-list nav dense>
              <v-list-item
                  v-for="([icon, text, url], i) in menus"
                  :key="i"
                  link
              >
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
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn block router to="/signin" text color="primary">{{
                    $store.getters.isLoggedIn ? "Logout" : "Login"
                  }} <v-icon>mdi-power</v-icon></v-btn>
                <!--              <v-btn block color="primary" text @click="menu = false"-->
                <!--              >Logout</v-btn-->
                <!--              >-->
              </v-card-actions>
            </v-list>
          </v-card>
        </v-menu>
        <v-btn router-link to="/create-alert" color="white">Get Alert</v-btn>
      </span>

      <span>
        <v-app-bar-nav-icon
            color="white"
            class="d-md-none d-inline"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </span>
    </v-app-bar>
    <!-- header ends -->

    <!-- drawer starts -->
    <v-navigation-drawer
        v-model="drawer"
        fixed
        app
        temporary
        style="background: #365899; z-index: 999"
    >
      <v-list style="background: #365899">
        <v-list-item link>
          <v-list-item-icon>
            <router-link to="/">
              <v-icon class="white--text">mdi-briefcase</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/">
              <v-list-item-title class="white--text">Jobs</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <router-link to="/create-alert">
              <v-icon class="white--text">mdi-bell</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/create-alert">
              <v-list-item-title class="white--text">Get Alart</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <router-link to="/recruiter">
              <v-icon class="white--text">mdi-view-dashboard</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/recruiter">
              <v-list-item-title class="white--text">Recruiters</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <router-link to="/biodata">
              <v-icon class="white--text">mdi-account-supervisor-circle</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/biodata">
              <v-list-item-title class="white--text">Resume</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="$store.getters.isLoggedIn">
          <v-list-item-icon>
            <router-link to="/applied-jobs">
              <v-icon class="white--text">mdi-briefcase</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/applied-jobs">
              <v-list-item-title class="white--text">My Jobs</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="$store.getters.isLoggedIn">
          <v-list-item-icon>
            <router-link to="/account-settings">
              <v-icon class="white--text">mdi-account-settings-outline</v-icon>
            </router-link>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/account-settings">
              <v-list-item-title class="white--text">Account Settings</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
            :value="false"
            prepend-icon="mdi-account-circle"
            color="white"
            link v-if="$store.getters.is_company"
        >
          <template v-slot:activator>
            <v-list-item-content class="white--text">
              <v-list-item-title>Company</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
              v-for="([icon, title, url], i) in jobs"
              :key="i"
              link
          >
            <v-list-item-icon class="white--text">
              <router-link class="white--text" :to="url">
                <v-icon color="white" v-text="icon"></v-icon>
              </router-link>
            </v-list-item-icon>
            <router-link class="white--text" :to="url">
              <v-list-item-title v-text="title"></v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-group>

      </v-list>
      <template v-slot:append>
        <div class="pa-2" >
          <v-btn style="background-color: #ffffff; font-weight: bold" block router to="/signin" text color="primary">{{
              $store.getters.isLoggedIn ? "Logout" : "Login"
            }}
          </v-btn>
        </div>
      </template>
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
      jobs: [
        ["mdi-view-dashboard", "Basic Info", "/user-details"],
        ["mdi-image", "company", "/companies"],
        ["mdi-briefcase", "Job", "/jobs"],
      ],
      menus: [
        ["mdi-account-settings-outline", "Account", "/account-settings"],
        ["mdi-account-supervisor-circle", "My Jobs", "/applied-jobs"],
        // ["mdi-clock-start", "Profile", "/"],
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
    setTimeout(() => {
      if (
          this.R.isNil(this.$cookies.get("is_company")) ||
          this.R.isEmpty(this.$cookies.get("is_company"))
      ) {
        this.$store.commit("is_company", false);
        // return false;
      } else {
        if (
            this.$cookies.get("is_company") == "true" ||
            this.$cookies.get("is_company") == true
        ) {
          console.log("is compnay... in the app.vue true");
          this.$store.commit("is_company", true);
          // return true;
        } else {
          this.$store.commit("is_company", false);
          // return false;
        }
      }
    }, 1000);

    this.$store.commit("is_company", this.$cookies.get("is_company"));
    // console.log("this is is_company...", this.$store.getters.is_company);
    console.log(
        "this is is_company... mounted",
        this.$cookies.get("is_company")
    );
    console.log(
        "logged in check in the header...",
        this.$cookies.get("accessToken")
    );
  },
  updated() {
  },
  methods: {
    gotoRecruiter() {
      //alert('here');
      // this.$router.go(-1);
      // location.reload();
      this.$router.history.push({name: "recruiter"});
    },
  },
};
</script>
