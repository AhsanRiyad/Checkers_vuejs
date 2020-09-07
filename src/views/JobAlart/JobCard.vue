<template>
  <div>
    <div class="searchText">
      <h1>Search Result</h1>
    </div>

    <div v-if="skeleton">
      <v-skeleton-loader v-for="n in 3" :key="n" class="loader" type="card"></v-skeleton-loader>
    </div>

    <div class="alertMsg" v-else-if="ShowAlertMsg">
      <v-alert type="error">Sorry, No Jobs Found with this Keyword</v-alert>
    </div>

    <div v-else>
      <div class="filter">
        <div class="filter-item-1">
          <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
        </div>
        <div class="filter-item-2">
          <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
        </div>
        <div class="filter-item-3">
          <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
        </div>
        <div class="filter-item-4">
          <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
        </div>
      </div>

      <div class="clearFix"></div>

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
                  dark
                  v-on="on"
                  class="applyNow"
                  color="primary">
                Apply Now
              </v-btn>
              <job-alert-modal persistent v-if="showModal">
                <div class="d-flex align-center" slot="header">
                  <h1 class="warning-text">Warning Message</h1>
                  <v-spacer></v-spacer>
                  <v-btn @click="showModal = false" icon><v-icon>mdi-close</v-icon></v-btn>
                </div>
                <div slot="body">
                  <p>JobAlert.com only works as a mean of communication between employers and job-seekers.
                    JobAlert.com Limited will not be responsible for any financial transaction or irregularity/ fraud by
                    the company after applying through the jobalert.com website.
                  </p>
                  <div class="d-flex align-center">
                    <v-checkbox label="I have read the above warning message." required></v-checkbox>
                    <v-spacer></v-spacer>
                    <v-btn class="text--white" color="green" depressed link to="/jobonlineapply">Apply</v-btn>
                  </div>
                </div>
              </job-alert-modal>
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
</template>

<script>
import "../../sass/job-alart/_JobCard.scss";

export default {
  name: "JobCard",
  components: {
    JobAlertModal: () => import('../../components/Modal')
  },
  data: () => {
    return {
      Jobs: [],
      loading: false,
      pageNo: 1,
      showModal: false,
      ShowAlertMsg: false,

      skeleton: true,

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

      //style for search
      jobDetails: {
        // display: "none",
        width: "35%",
        right: "21%",
        top: "225px",
        position: "fixed",
        // height: "100%",
        transition: "top 0.1s",
      },

      JobDescriptionStyle: {
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "20px",
        // height: "calc( 100vh - 400px )",
        overflowY: "auto",
        // overflowY: "visible",
      },

      firstContainer: {
        background: "white",
        // height: "calc( 100% - 190px )",
        // overflowY: "auto",
      },
    };
  },
  methods: {
    saveDetails(n) {
      console.log("dd", n);


      this.$store
        .dispatch("callApi", {
          url: "jobs/"+n.id,
          method: "get",
          data:{},
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
        .catch(() => {
          this.$awn.alert("Failed");
        })
        .finally(() => {
          //  this.tableLoading = false;
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

      console.log("window inner height", window.innerHeight);
      console.log("scrol top", document.body.scrollTop);
      console.log("offset height", document.body.offsetHeight);
      console.log("addition ", window.innerHeight + window.scrollY);

      // this.JobDescriptionStyle.height = "calc( 100% - 300px )";
      // this.JobDescriptionStyle.height = "calc( 100vh - 300px )";
      // this.JobDescriptionStyle.height = "200px";

      if (window.scrollY > 217) {
        this.jobDetails.top = "20px";
        this.JobDescriptionStyle.height = "calc( 100vh - 250px )";
      } else {
        this.jobDetails.top = "225px";
        // this.JobDescriptionStyle.height = " calc( 100vh - 190px ) ";
      }

      if (
          document.body.offsetHeight - (window.innerHeight + window.scrollY) <
          210
      ) {
        this.JobDescriptionStyle.height = " calc( 100vh - 550px ) ";
      }

      let pageNo = window.scrollY / 2400;
      let isInt = Number.isInteger(window.scrollY / 2400);
      // console.log('is int check,' , isInt);
      // console.log( 'scroll result ' ,  (window.scrollY/2400) ) ;

      if (isInt && this.pageNo < pageNo + 1) {
        // console.log("call second api");
        this.pageNo = pageNo + 1;
        this.getData();
      }
    },
    getData() {
      this.loading = true;

      this.$store
        .dispatch("callApi", {
          url: "search",
          method: "get",
          params: {
            q: this.$route.query.q,
            page: this.pageNo,
          },
        })
        .then((response) => {
          console.log("job list....", response);
          this.Jobs = [...this.Jobs, ...response.jobs.items];
          this.JobDescription = this.Jobs[0];
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
          this.skeleton = false;
        })
        .catch(() => {
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
    this.getData();
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>