<template>
  <div class="jobcard-first-container">
    <div class="searchText">
      <div class="searchText-pagination-jobcard">
        <div>
          <h1>Search Result</h1>
        </div>

        <div>
          <v-pagination v-model="page" :length="6"></v-pagination>
        </div>
      </div>
    </div>

    <div v-if="skeleton">
      <v-skeleton-loader v-for="n in 3" :key="n" class="loader" type="card"></v-skeleton-loader>
    </div>

    <div class="alertMsg" v-else-if="ShowAlertMsg">
      <v-text-field
        @keyup.enter="getData"
        dense
        solo
        label="Search"
        prepend-inner-icon="search"
        v-model="search"
      >
        <template v-slot:append-outer>
          <v-btn
            tile
            class="white--text"
            style="height: 40px; margin-top: -8px; margin-bottom: 0; margin-left: -8px; background: rgb(54, 88, 153);"
            @click.stop="getData"
          >Search</v-btn>
        </template>
      </v-text-field>
      <v-alert type="error">Sorry, No Jobs Found with this Keyword</v-alert>
    </div>

    <div v-else>
      <div :style="filterFixedPosition" class="filterFixedPosition">
        <div class="job-search-job-card">
          <v-text-field
            @keyup.enter="getData"
            dense
            solo
            label="Search"
            prepend-inner-icon="search"
            v-model="search"
          >
            <template v-slot:append-outer>
              <v-btn
                tile
                class="white--text"
                style="height: 40px; margin-top: -8px; margin-bottom: 0; margin-left: -8px; background: rgb(54, 88, 153);"
                @click.stop="getData"
              >Search</v-btn>
            </template>
          </v-text-field>
        </div>

        <div class="filter">
          <div class="filter-item-1">
            <v-autocomplete
              item-text="country_name"
              item-value="id"
              :items="['hi', 'hellow']"
              outlined
              dense
              background-color="white"
              placeholder="Select Country"
            ></v-autocomplete>
          </div>
          <div class="filter-item-2">
            <v-autocomplete
              item-text="country_name"
              item-value="id"
              :items="['hi', 'hellow']"
              outlined
              dense
              background-color="white"
              placeholder="Select Country"
            ></v-autocomplete>
          </div>
          <div class="filter-item-3">
            <v-autocomplete
              item-text="country_name"
              item-value="id"
              :items="['hi', 'hellow']"
              outlined
              dense
              background-color="white"
              placeholder="Select Country"
            ></v-autocomplete>
          </div>
          <div class="filter-item-4">
            <v-autocomplete
              item-text="country_name"
              item-value="id"
              :items="['hi', 'hellow']"
              outlined
              dense
              background-color="white"
              placeholder="Select Country"
            ></v-autocomplete>
          </div>
        </div>
        <div class="clearFix"></div>
      </div>

      <div class="searchResults">
        <v-card class="mx-auto searchResults-text" v-for="n in Jobs" :key="n.id">
          <v-card-text @click.stop="()=>saveDetails(n)" class="job-card-job-search">
            <h2 style="color: green" class="mb-2" v-text="n.job_title"></h2>
            <h4 v-text="n.company_name"></h4>
            <p class="text--primary">
              <v-icon>location_on</v-icon>
              {{ n.job_location }}
            </p>
            <p class="text--primary">
              <v-icon>school</v-icon>
              {{ n.education }}
            </p>
            <p class="text--primary">
              <v-icon>payment</v-icon>
              {{ n.min_salary_range }} to {{ n.max_salary_range }}
            </p>
          </v-card-text>
        </v-card>
      </div>

      <div class="clearFix"></div>

      <div class="Fixed-Job-Details">
        <div :style="jobDetailsLoader" v-if="skeletonJobDetails">
          <v-skeleton-loader width="400" class="loader" type="card"></v-skeleton-loader>
        </div>

        <div v-else>
          <div :style="jobDetails" v-if="!loading">
            <div outlined :style="firstContainer">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{ JobDescription.job_title }}</v-list-item-title>
                  <!-- <v-list-item-subtitle> {{ JobDescription.companyName }} || {{ JobDescription.typeInText }} </v-list-item-subtitle> -->
                  <p>{{ JobDescription.company_name }} || {{ JobDescription.type_in_text }}</p>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  @click="showModal = true"
                  class="applyNow white--text"
                  color="primary"
                  v-bind:disabled="isApplied"
                >Apply Now</v-btn>
              </v-card-actions>

              <v-divider class="divider"></v-divider>

              <div :style="JobDescriptionStyle">
                <h4>Location</h4>
                <p>{{ JobDescription.city }}</p>

                <h4>Descriptions</h4>
                <p>{{ JobDescription.job_description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- job apply modal starts-->
    <job-alert-modal persistent v-if="showModal">
      <div class="d-flex align-center" slot="header">
        <h1 class="warning-text">Warning Message</h1>
        <v-spacer></v-spacer>
        <v-btn @click="showModal = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div slot="body">
        <p>
          JobAlert.com only works as a mean of communication between employers and job-seekers.
          JobAlert.com Limited will not be responsible for any financial transaction or irregularity/ fraud by
          the company after applying through the jobalert.com website.
        </p>
        <div class="d-flex align-center">
          <v-checkbox
            v-model="termsAndConditions"
            label="I have read the above warning message."
            required
          ></v-checkbox>
          <v-spacer></v-spacer>
        </div>

        <div v-if="termsAndConditions">
          <div class="expectedSalary-job-search">
            <div class="expectedSalary-job-search__title">Expected Salary</div>
            <div class="expectedSalary-job-search__textinput">
              <v-form ref="expectedSalary" v-on:submit.prevent="applyJob">
                <v-text-field
                  type="number"
                  :rules="[ v=>!!v||'required' ]"
                  v-model="expectedSalary"
                  outlined
                  dense
                  solo
                  placeholder="Salary"
                  @keyup.enter.stop="applyJob"
                ></v-text-field>
              </v-form>
            </div>
          </div>

          <div class="expectedSalary-job-search__applybutton">
            <div>
              <v-btn
                class="white--text"
                color="green"
                depressed
                link
                :disabled="!termsAndConditions"
                @click.stop="applyJob"
                :loading="loadingAppliedJob"
              >Apply</v-btn>
            </div>
          </div>
        </div>
      </div>
    </job-alert-modal>
    <!-- job apply modal ends-->

    <!-- apply online Expected salary starts -->

    <!-- apply online Expected salary ends -->
  </div>
</template>

<script>
import "../../sass/job-alart/_JobCard.scss";
import axios from "axios";
import ipMixins from "../../mixins/ipMixins";
import tokenMixins from "../../mixins/tokenMixins";

export default {
  name: "JobCard",
  components: {
    JobAlertModal: () => import("../../components/Modal"),
  },
  mixins: [ipMixins, tokenMixins],
  data: () => {
    return {
      Jobs: [],
      loading: false,
      pageNo: 1,
      showModal: false,
      ShowAlertMsg: false,
      termsAndConditions: false,
      search: "",

      loadingAppliedJob: false,

      page: 1,

      jobId: "",

      expectedSalary: "",

      showModalSalary: false,

      skeleton: true,
      skeletonJobDetails: true,

      JobDescription: {
        job_title: "PHP developer",
        company_name: "PHP",
        country: "Bangladesh",
        education: "CSE",
        job_location: "Bangladesh, India",
        job_responsibilities: "Web site development",
        skill_qualification_requirement: "CSE, EEE, IT",
        type_in_text: "Remote",
        max_salary_range: "20000",
      },

      filterFixedPosition: {
        position: "static",
        zIndex: 0,
        margin: "0 auto",
        backgroundColor: "#e1e1e1",
        paddingTop: "10px",
      },

      //style for search
      jobDetails: {
        // display: "none",
        // overflowY: "scroll",
        // maxHeight: "300px",
        width: "35%",
        right: "21%",
        top: "287px",
        position: "fixed",
        // height: "100%",
        // transition: "top 0.1s",
      },

      //style for search
      jobDetailsLoader: {
        // display: "none",
        width: "35%",
        right: "27%",
        top: "325px",
        position: "fixed",
        // height: "100%",
        transition: "top 0.1s",
      },

      JobDescriptionStyle: {
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "20px",
        // height: "calc( 100vh - 400px )",
        height: "300px",
        overflowY: "scroll",
        // overflowY: "visible",
      },

      firstContainer: {
        background: "white",
        // height: "calc( 100% - 190px )",
        // overflowY: "auto",
      },
    };
  },
  computed: {
    isApplied() {
      return this.jobId.applied == 1 ? true : false;
    },
  },
  methods: {
    applyJob(event) {
      if (event) {
        event.preventDefault();
      }
      if (!this.$refs.expectedSalary.validate()) return;

      if (this.$cookies.get("accessToken") == null) {
        this.$router.history.push("/signin");
        return;
      }

      this.loadingAppliedJob = true;

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios({
        method: "post",
        baseURL: this.$store.state.apiBase,
        url: `jobs/${this.jobId.id}/apply`,
        data: {
          expected_salary: this.expectedSalary,
        },
        headers,
      })
        .then((response) => {
          console.log(response);

          if (response.status == 206) {
            this.$router.history.push("/resume/biodata");
            this.$awn.alert("Your resume is not completed");
            return;
          }
          this.showModal = false;
          this.$awn.success("You have successfully applied!");
          this.getData();
        })
        .catch((error) => {
          console.log(error);

          if (error.response.status == 401) {
            this.$awn.alert("You are not logged in");
            this.$router.history.push("/signin");
          } else if (error.response.status == 404) {
            this.$awn.alert("Your resume is not completed");
            this.$router.history.push("/resume/biodata");
            return;
          }
        })
        .finally(() => {
          this.loadingAppliedJob = false;
        });
    },
    showModalExpectedSalary() {
      this.showModal = false;
      this.showModalSalary = true;
    },
    saveDetails(n) {
      console.log("dd", n);
      this.skeletonJobDetails = true;

      this.jobId = n;

      this.$store
        .dispatch("callApi", {
          url: "jobs/" + n.id,
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("details list in the", response.data.jobs);
          this.JobDescription = response.data.jobs;
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
          this.skeleton = false;
        })
        .catch((error) => {
          this.$awn.alert("Failed");
          console.log("eror..", error.response);
        })
        .finally(() => {
          //  this.tableLoading = false;
          this.skeletonJobDetails = false;
        });
    },
    onScroll() {
      // console.log(e);
      /* console.log(window);
      let MainCard = document.getElementById("MainCard");
      console.log('in the main card');
      console.log(window.scrollY);
      console.log(MainCard);
      console.log("scorlling"); */

      console.log("window ... ", window);

      /* console.log("window inner height", window.innerHeight);
      console.log("scrol top", document.body.scrollTop);
      console.log("offset height", document.body.offsetHeight);
      console.log("addition ", window.innerHeight + window.scrollY); */
      console.log("scroll y... ", window.scrollY);
      console.log("subtraction... ", 142 - window.scrollY);

      // this.JobDescriptionStyle.height = "calc( 100% - 300px )";
      // this.JobDescriptionStyle.height = "calc( 100vh - 300px )";
      // this.JobDescriptionStyle.height = "200px";

      // this.jobDetails.top = 142 - window.scrollY + "px";

      if (window.scrollY > 132) {
        this.jobDetails.top = "142px";
        // this.JobDescriptionStyle.height = "calc( 100vh - 250px )";
        this.filterFixedPosition.position = "fixed";
        this.filterFixedPosition.top = "0px";
        this.filterFixedPosition.zIndex = 3;

        console.log("inner width.... ", window.innerWidth);

        if (window.innerWidth > 960) {
          this.filterFixedPosition.right = "20%";
        }
      } else {
      this.jobDetails.top = 287 - window.scrollY + "px";
        // this.jobDetails.top = "287px";
        this.filterFixedPosition.top = "100px";
        this.filterFixedPosition.position = "static";
        // this.JobDescriptionStyle.height = " calc( 100vh - 190px ) ";
      }

      if (
        document.body.offsetHeight - (window.innerHeight + window.scrollY) <
        210
      ) {
        // this.JobDescriptionStyle.height = " calc( 100vh - 550px ) ";
      }

      let pageNo = window.scrollY / 2400;
      let isInt = Number.isInteger(window.scrollY / 2400);
      // console.log('is int check,' , isInt);
      // console.log( 'scroll result ' ,  (window.scrollY/2400) ) ;

      if (isInt && this.pageNo < pageNo + 1) {
        // console.log("call second api");
        this.pageNo = pageNo + 1;
        // this.getData();
      }
    },
    getData() {
      if (this.$store.getters.userIp == "") {
        new Promise((resolve, reject) => {
          this.getIp(resolve, reject);
        }).then(() => {
          this.getSearchData();
        });
      } else {
        this.getSearchData();
      }
    },
    getSearchData() {
      this.loading = true;

      this.skeleton = true;

      let url = "search";

      if (this.$store.getters.isLoggedIn) url = "job-search";

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url,
        method: "get",
        params: {
          q: this.search,
          page: this.pageNo,
          ip: this.$store.getters.userIp,
        },
        headers,
      })
        .then((response) => {
          console.log("job list....", response);
          // this.Jobs = [...this.Jobs, ...response.jobs.items];
          this.Jobs = response.data.jobs.items;
          this.jobId = this.JobDescription = this.Jobs[0];
          this.skeletonJobDetails = false;
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
          this.skeleton = false;
          this.ShowAlertMsg = false;
        })
        .catch(() => {
          this.Jobs = [];
          this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          this.skeleton = false;
          if (this.Jobs.length === 0) this.ShowAlertMsg = true;
          //  this.tableLoading = false;
        });
    },
  },
  mounted() {
    this.pageNo = 1;
    window.addEventListener("scroll", this.onScroll);

    this.search = this.$route.query.q;

    this.getData();
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>