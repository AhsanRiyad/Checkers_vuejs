<template>
  <v-container class="mainTemplate">
    <v-form ref="form">
      <v-row class="mainContainer" v-if="companyInfo">
        <v-col cols="12" md="11" lg="11">
          <p class="h1Text">User Info</p>
          <v-row align="center">
            <v-col cols="12" md="12" lg="12">
              <p>Full Name</p>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Full Name"
                  outlined
                  dense
                  v-model="companyInfo.full_name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <p>Email</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    placeholder="Enter email"
                    outlined
                    dense
                    v-model="companyInfo.official_email"
                    type="email"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <p>Company Contact Number</p>
              <vue-tel-input-vuetify
                  outlined
                  dense
                  single-line
                  v-model="companyInfo.official_phone"
                  @validate="validate"
                  :required="true"
                  background-color="white"
                  :validCharactersOnly="true"
                  inputClasses="vTelInput"
              ></vue-tel-input-vuetify>
            </v-col>
          </v-row>
          <div>
            <p>About You</p>
            <div>
              <v-textarea
                  v-model="companyInfo.about_you"
                  background-color="white"
                  class="mb-0"
                  placeholder="About us"
                  outlined
                  dense
              ></v-textarea>
            </div>
          </div>

          <div class="text-right">
            <div class="item-2" v-if="paramId">
              <v-btn
                  color="green"
                  class="white--text"
                  @click.stop="updateCompanyInfo()"
              >Update
              </v-btn
              >
            </div>
            <div class="item-2" v-else>
              <v-btn color="#365899" class="white--text" @click.stop="submit"
              >Save
              </v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-form>
    <!-- loading data  starts-->
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Loading Data...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- loading data  ends-->
  </v-container>
</template>

<script>
import "../../../../sass/employers/_jobs.scss";
import axios from "axios";

export default {
  name: "userInfo",
  data: () => {
    return {
      companyInfo: {
        full_name: "",
        official_email: "",
        official_phone: "",
        about_you: "",
      },
      paramId: "",
      loading: true
    };
  },
  created() {
    this.getInfoById();
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getInfoById() {
      if (this.$route.params.id) {
        this.paramId = this.$route.params.id;
        this.loading = true;
        const headers = {
          Authorization: "Bearer " + this.$cookies.get("accessToken"),
          "Content-Type": "application/json",
          Accept: "application/json",
        };
        axios({
          method: "get",
          baseURL: this.$store.state.apiBase,
          url: `companies/user-basic-infos/` + this.$route.params.id,
          data: {},
          headers,
        })
            .then((response) => {
              console.log("info usersss", response);
              console.log("user response", response.status);
              this.companyInfo = response.data.data;
              this.loading = true;
              // if (response.status == 404) {
              //   this.$router.history.push({name:"userInfo"});
              // }else if (response.status == 201) {
              //   this.$awn.success("Successful");
              //   setTimeout(() => {
              //     this.$router.history.push({name: 'CompanyList'});
              //   })
              // }else if (response.status == 200) {
              //   this.$awn.success("Successful");
              //   setTimeout(() => {
              //     this.$router.history.push({name: 'CompanyList'});
              //   })
              // }else if (response.status == 204) {
              //   setTimeout(() => {
              //     this.$router.history.push({name: 'CompanyList'});
              //   })
              // }
            })
            .catch(() => {
            })
            .finally(() => {
              this.loading = false;
            });
      } else {
        this.paramId = null;
      }
    },
    getUserInfo() {
      console.log("params check...", this.$route);

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
            console.log(response);
            // console.log("user response", response.status);
            this.loading = true;
            if (response.status == 404) {
              this.$router.history.push({name: "userInfo"});
            } else if (response.status == 201) {
              this.$awn.success("Successful");
              setTimeout(() => {
                if (
                    this.R.isNil(this.$route.params.id) ||
                    this.R.isEmpty(this.$route.params.id)
                ) {
                  this.$router.history.push({name: "CompanyList"});
                }
              });
            } else if (response.status == 200) {
              this.$awn.success("Successful");
              setTimeout(() => {
                if (
                    this.R.isNil(this.$route.params.id) ||
                    this.R.isEmpty(this.$route.params.id)
                ) {
                  this.$router.history.push({name: "CompanyList"});
                }
              });
            } else if (response.status == 204) {
              setTimeout(() => {
                if (
                    this.R.isNil(this.$route.params.id) ||
                    this.R.isEmpty(this.$route.params.id)
                ) {
                  this.$router.history.push({name: "CompanyList"});
                }


              });
            }
          })
          .catch(() => {
          })
          .finally(() => {
            this.loading = false;
          });
    },
    submit() {
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      if (this.paramId) {
        this.$store
            .dispatch("callApi", {
              url: "companies/user-basic-infos/" + this.paramId,
              method: "put",
              data: this.companyInfo,
              headers,
            })
            .then((response) => {
              console.log("user info", response);
              this.$awn.success("Successful");

              setTimeout(() => {
                this.$router.history.push({name: "userInfoDetails"});
                // this.$router.history.push({ name: "SearchJob" }); params: {homePageUrl:this.homePageUrl}
              }, 1000);
              // localStorage.setItem("accessToken", response.access_token);
              // this.$cookies.set("accessToken", response.access_token);
              // this.$store.commit("isLoggedIn", true);
            })
            .catch(() => {
              this.$awn.alert("Failed!");
            })
            .finally(() => {
              this.loading = false;
            });
      } else {
        this.$store
            .dispatch("callApi", {
              url: "companies/user-basic-infos/",
              method: "post",
              data: {},
              headers,
            })
            .then((response) => {
              console.log("user info", response);
              this.$awn.success("Successful");

              setTimeout(() => {
                this.$router.history.push({name: "userInfoDetails"});
                // this.$router.history.push({ name: "SearchJob" }); params: {homePageUrl:this.homePageUrl}
              }, 1000);
              // localStorage.setItem("accessToken", response.access_token);
              // this.$cookies.set("accessToken", response.access_token);
              // this.$store.commit("isLoggedIn", true);
            })
            .catch(() => {
              this.$awn.alert("Failed!");
            })
            .finally(() => {
              this.loading = false;
            });
      }
    },
    updateCompanyInfo() {
      if (this.paramId) {
        this.$store
            .dispatch("callApi", {
              url: "companies/user-basic-infos/" + this.paramId,
              method: "put",
              data: this.companyInfo,
            })
            .then((response) => {
              console.log("user info", response);
              this.$awn.success("Successful");

              setTimeout(() => {
                this.$router.history.push({name: "userInfoDetails"});
                // this.$router.history.push({ name: "SearchJob" }); params: {homePageUrl:this.homePageUrl}
              }, 1000);
              // localStorage.setItem("accessToken", response.access_token);
              // this.$cookies.set("accessToken", response.access_token);
              // this.$store.commit("isLoggedIn", true);
            })
            .catch(() => {
              this.$awn.alert("Failed!");
            })
            .finally(() => {
              this.loading = false;
            });
      }
    },
  },
};
</script>

<style scoped>
</style>
