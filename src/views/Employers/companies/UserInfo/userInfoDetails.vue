<template>
  <v-container class="mainTemplate">
    <v-row class="mainContainer  pa-6">
      <v-col cols="12" md="12" lg="12">
       <v-row>
         <v-col cols="12" md="6" lg="6">
           <p class="h1Text text-left ma-0" >User Basic Info</p>
         </v-col>
         <v-col cols="12" md="6" lg="6" class="text-right">
           <v-btn small @click.stop="()=>editInfo(userDetails.id)" id="edit_btn" class="interactn c-grey">
             <v-icon size="15">mdi-square-edit-outline</v-icon>
             edit
           </v-btn>
         </v-col>
       </v-row>
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div>
              <h3 class="mr-2">Company Name:</h3>
              <p class="mb-0">{{userDetails.full_name}}</p>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div>
              <h3 class="mr-2">Company Email:</h3>
              <p class="mb-0">{{userDetails.official_email}}</p>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div>
              <h3 class="mr-2">Company Contact Number:</h3>
              <p class="mb-0">{{userDetails.official_phone}}</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="12" md="12">
            <h3 class="mr-2">About Company</h3>
            <p>{{userDetails.about_you}}</p>
          </v-col>
        </v-row>
        <v-dialog v-model="loading" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Loading Data...
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "userInfoDetails",
  data() {
    return {
      userDetails: {},
      loading: true,
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    editInfo: function (id){
      this.$router.history.push({name: 'userInfo', params: {id: id}})
    },
    getUserInfo() {
      this.loading = true
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        method: "get",
        baseURL: this.$store.state.apiBase,
        url: `companies/user-basic-infos/`,
        data: {},
        headers,
      })
          .then((response) => {
            this.userDetails = response.data.data
            this.loading = true
          })
          .catch(() => {
          })
          .finally(() => {
            this.loading = false;
          });
    },
  },

}
</script>

<style scoped>

</style>
