<template>
  <div id="mainDocs">
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

    <div v-if="skeleton">
      <v-skeleton-loader
          v-for="n in 3"
          :key="n"
          class="loader"
          type="card"
      ></v-skeleton-loader>
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
      <!--      <v-alert type="error">Sorry, No Jobs Found with this Keyword</v-alert>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "RecruiterList",
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
  created() {
    this.getAllCompanyList();
  },
  methods: {
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
    getDataByCompany(name) {
      this.search = name;
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
}
</script>

<style scoped>

</style>
