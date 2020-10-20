<template>
  <v-container class="jobcard-first-container" id="mainDocs">
    <div class="searchText">
      <div class="searchText-pagination-jobcard">
        <div>
          <h1>Search Result</h1>
        </div>

        <div>
          <v-pagination v-model="pageNo" :length="length"></v-pagination>
        </div>
      </div>
    </div>

    <div class="alertMsg">
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
            style="
              height: 40px;
              margin-top: -8px;
              margin-bottom: 0;
              margin-left: -8px;
              background: rgb(54, 88, 153);
            "
            @click.stop="getData"
            >Search</v-btn
          >
        </template>
      </v-text-field>
    </div>

    <v-row class="ml-lg-10 ml-md-10 mr-lg-10 mr-md-10 pl-lg-10 pl-md-10 pr-lg-10 pr-md-10" v-if="skeleton">
      <v-col cols="12" md="4" v-for="n in 3" :key="n">
        <v-skeleton-loader
            class="recruiter-loader"
            type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row
      class="ml-lg-10 ml-md-10 mr-lg-10 mr-md-10 pl-lg-10 pl-md-10 pr-lg-10 pr-md-10"
      id="companyName"
      v-else
    >
      <v-col
        v-for="reqrCom in recruiterCompanyList"
        :key="reqrCom.id"
        cols="12"
        lg="4"
        md="4"
      >
        <div
          @click.stop="() => getDataByCompany(reqrCom.company_name)"
          class="jobCard_box"
        >
          <v-avatar size="90">
            <img :src="$store.getters.imageUrl + reqrCom.company_logo" />
          </v-avatar>
          <div class="jobCard_body">
            <h4 class="mb-2">
              <span class="mr-1">Company Name:</span
              ><span>{{ reqrCom.company_name }}</span>
            </h4>
            <p>
              <span class="mr-2">Location:</span>
              <span style="text-transform: capitalize">{{
                reqrCom.company_location
              }}</span>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import "../../../sass/job-alart/_JobCard.scss";

import axios from "axios";

export default {
  name: "recruiter",
  components: {},

  data: () => {
    return {
      recruiterCompanyList: [],
      Jobs: [],
      loading: false,
      pageNo: 1,
      showModal: false,
      ShowAlertMsg: false,
      termsAndConditions: false,
      search: "",
      applyLoading: false,
      screenHeight: "",
      loadingAppliedJob: false,
      page: 1,
      jobId: "",
      length: 0,
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
        // maxHeight: "300px",
        // overflowY: "scroll",
        width: "35%",
        // height: "400px",
        float: "left",
        marginLeft: "2%",
        // right: "21%",
        // top: "287px",
        // position: "static",
        // position: "fixed",
        // height: "100%",
        // transition: "top 0.1s",
      },

      //style for search
      jobDetailsLoader: {
        // display: "none",
        width: "35%",
        right: "27%",
        top: "250px",
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
  created() {
    this.getAllCompanyList();
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
            this.$router.history.push("/biodata");
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
            this.$router.history.push("/biodata");
            return;
          }
        })
        .finally(() => {
          this.loadingAppliedJob = false;
        });
    },
    getAllCompanyList() {
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        method: "get",
        baseURL: this.$store.state.apiBase,
        url: `companies/all-list`,
        data: {},
        headers,
      })
        .then((response) => {
          console.log("company lissssssstttttttttttt", response);
          this.recruiterCompanyList = response.data.data;
          // console.log("user response", response.status);
          this.loading = true;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
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

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios({
        url: "jobs/" + n.id,
        method: "get",
        data: {},
        baseURL: this.$store.state.apiBase,
        headers,
      })
        .then((response) => {
          console.log("details list in the", response.data.data.jobs);
          this.JobDescription = response.data.data.jobs;
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
      // if (window.innerHeight)
      /*
      this.JobDescriptionStyle.height =
        screen.availHeight - 48 - 64 - 20 - window.scrollY + "px";
      */

      console.log("pixel ratio ", window.devicePixelRatio);
      console.log("match media ", window.matchMedia);

      let spaceGap = 0 * window.devicePixelRatio;
      // if (window.innerHeight > 900) spaceGap = 280 * window.devicePixelRatio;
      if (window.innerHeight > 900) spaceGap = 245 * window.devicePixelRatio;
      else if (window.innerHeight < 700)
        spaceGap = 225 * window.devicePixelRatio;
      else spaceGap = 225 * window.devicePixelRatio;

      if (window.scrollY > 132) {
        this.filterFixedPosition.position = "fixed";
        this.filterFixedPosition.top = "0px";
        this.filterFixedPosition.zIndex = 3;

        // this.jobDetails.top = "100px";
        this.jobDetails.float = "none";
        this.jobDetails.right = "20%";
        this.jobDetails.width = "35%";
        //for filter top position
        // this.jobDetails.top = "142px";
        this.jobDetails.top = "70px";
        this.jobDetails.position = "fixed";
        // this.JobDescriptionStyle.height = "300px";
        if (window.innerWidth > 960) {
          this.filterFixedPosition.right = "20%";
        }
      } else {
        // this.jobDetails.top = "287px";
        this.jobDetails.float = "left";
        this.jobDetails.marginLeft = "2%";
        this.jobDetails.width = "35%";
        this.jobDetails.position = "static";

        this.filterFixedPosition.top = "100px";
        this.filterFixedPosition.position = "static";
        // this.JobDescriptionStyle.height = " calc( 100vh - 190px ) ";
      }

      this.JobDescriptionStyle.height =
        screen.availHeight - spaceGap - window.scrollY + "px";

      // this.JobDescriptionStyle.height = "100px";

      console.log(
        "screen available height.......",
        screen.availHeight - 400 - window.scrollY + "px"
      );
      console.log(
        "document available height.......",
        document.querySelector("#mainDocs").scrollHeight
      );
      console.log("scroll Y.......", window.scrollY);
      console.log("inner height.......", window.innerHeight);
      console.log("inner width.......", window.innerWidth);

      let screenDifference = screen.availHeight - window.innerHeight;

      console.log("inner height...", window.innerHeight);

      console.log(screenDifference);
    },
    getData() {
      if (this.$store.getters.userIp == "") {
        new Promise((resolve, reject) => {
          this.getIp(resolve, reject);
        }).then(() => {
          //document.getElementById('companyName').style.display="none"
          this.getSearchData();
        });
      } else {
        this.getSearchData();
        // document.getElementById('companyName').style.display="none"
      }
    },
    getDataByCompany(name) {
      console.log(name);
      this.$router.history.push("/recruitersJob?q=" + name);
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
          company_name: this.search,
          page: this.pageNo,
          ip: this.$store.getters.userIp,
        },
        headers,
      })
        .then((response) => {
          console.log("job list....", response);
          // this.Jobs = [...this.Jobs, ...response.jobs.items];
          this.Jobs = response.data.items;
          this.jobId = this.JobDescription = this.Jobs[0];
          this.skeletonJobDetails = false;
          this.length = Math.round(
            response.data.total_count / response.data.num_items_per_page
          );
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
          this.skeleton = false;
          this.ShowAlertMsg = false;
        })
        .catch(() => {
          this.Jobs = [];
          // this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          this.skeleton = false;
          if (this.Jobs.length === 0) this.ShowAlertMsg = true;
          //  this.tableLoading = false;
          // this.JobDescriptionStyle.height = document.querySelector("#mainDocs").scrollHeight - 64 - 48 - 140 + "px";
          this.JobDescriptionStyle.height =
            screen.availHeight - 48 - 64 - 140 - window.scrollY + "px";
          console.log(
            "window availheight.....",
            document.querySelector("#mainDocs").scrollHeight
          );
          //alert(this.search)
          if (this.search != undefined) {
            document.getElementById("companyName").style.display = "none";
          }
        });
    },
  },
  mounted() {
    this.pageNo = 1;
    window.addEventListener("scroll", this.onScroll);
    this.screenHeight = screen.availHeight;

    // this.jobDetails.height =  "1000px";

    console.log("screen height... ", this.screenHeight);

    this.search = this.$route.query.q;

    this.getData();
    this.getAllCompanyList();
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.onScroll);
  },
  updated() {
    // this.jobDetails.top = screen.availHeight + "px";
  },
  watch: {
    pageNo() {
      this.getData();
    },
  },
};
</script>

<style scoped>
</style>

