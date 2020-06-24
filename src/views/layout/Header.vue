<template>
  <div>
    <!-- header starts -->
    <v-app-bar class="white--text" style="background: #365899 ">
      <v-toolbar-title  >
        <!-- <img :src="require('../../../public/JobAlartLogo.png')" alt=""> -->
        
        <router-link to="/" style="color: white; text-decoration: none">
          JobAlart
        </router-link>

      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="d-none d-md-inline">
        <v-btn router to="/" text color="white">Jobs</v-btn>
        <v-btn text color="white">Recruiters</v-btn>
        <v-btn text color="white">Login</v-btn>
        <v-btn text color="white">Employeer/Job Post</v-btn>
        <v-btn tile color="white">Get Alert</v-btn>
      </span>

      <span>
      <v-app-bar-nav-icon color="white" class="d-sm-none d-inline" @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
      </span>

    </v-app-bar>


    <!-- header ends -->

    <!-- drawer starts -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="background: #365899"
    >
      <v-list>
        <v-list-item  v-for="([icon, text], i) in items" :key="i" link>
          <v-list-item-icon>
            <v-icon class="white--text" >{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text" >{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- drawer ends -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      drawer: false,
      items: [
        ["mdi-email", "Jobs"],
        ["mdi-account-supervisor-circle", "Recruite"],
        ["mdi-clock-start", "Login"],
        // ["mdi-clock-start", "Employeers/Job Post"],
        // ["mdi-clock-start", "Get Alerts"],
      ]
    };
  }
};
</script>