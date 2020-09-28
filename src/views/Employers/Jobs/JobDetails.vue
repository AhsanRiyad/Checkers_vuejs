<template>
  <v-container class="jobsDetails">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="10">
        <v-card>
          <!--********** Top card start **************-->
          <div class="top_section_card">
            <div class="ja_left_card">
              <h1 class="job_title">{{jobs.job_title}}</h1>
            </div>
            <div class="ja_right_card">
              <v-btn class="text--white" color="blue-grey">
                <v-icon>launch</v-icon>
                edit
              </v-btn>
              <v-btn class="ml-2 mr-2" color="secondary">
                <v-icon>reply</v-icon>
                repost
              </v-btn>
              <v-btn color="primary">
                <v-icon>share</v-icon>
                share
              </v-btn>
            </div>
          </div>
          <div class="jd_section_card">
            <ul class="d-flex jd_border jd_left_card">
              <li class="jd_list">
                <p class="jd_title">job status</p>
                <div class="jd_status"><span>expired</span></div>
              </li>
              <li class="jd_list">
                <p class="jd_title">job type</p>
                <div class="jd_status">
                  <v-icon size="20">description</v-icon>
                  <span>Stand Out</span></div>
              </li>
              <li class="jd_list">
                <p class="jd_title">published on</p>
                <div class="jd_status">
                  <v-icon size="20">calendar_today</v-icon>
                  <span>05 September 2020</span></div>
              </li>
            </ul>
            <ul class="d-flex jd_border jd_right_card">
              <li class="jd_list">
                <v-icon>search</v-icon>
                <p class="jd_title">search views</p>
                <div class="jd_status">9,392</div>
              </li>
              <li class="jd_list">
                <v-icon>mdi-file-document-outline</v-icon>
                <p class="jd_title">detailed views</p>
                <div class="jd_status">2346</div>
              </li>
              <li class="jd_list">
                <v-icon>mdi-file-multiple-outline</v-icon>
                <p class="jd_title">application</p>
                <div class="jd_status">35</div>
              </li>
            </ul>
          </div>
          <!--********** Top card END **************-->
          <v-container class="tab_contain">
            <v-row align="center">
              <v-col cols="12" md="8">
                <v-tabs v-model="tabs">
                  <v-tab class="job_tab">Applicants ({{totalApplicants}})</v-tab>
                  <v-tab class="job_tab">Shortlisted</v-tab>
                  <v-tab class="job_tab">Job Preview</v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="12" md="4">
                <div class="tab-right_side d-flex">
                  <v-text-field
                      dense
                      class="mx-4"
                      flat
                      hide-details
                      label="Search job by title"
                      append-icon="search"
                      solo-inverted
                  ></v-text-field>
                  <v-text-field outlined dense v-model="dateRangeText" placeholder="Date range"
                                prepend-inner-icon="event" single-line></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <applicant-list :total-exp="totalExp" :biodata="biodata" :job-appliers="jobAppliers" :experience="experience" :qualification="qualification" :applicant="applicant"/>
            </v-tab-item>
            <v-tab-item>
              <short-listed/>
            </v-tab-item>
            <v-tab-item>
              <job-summary job="job"/>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "JobDetails",
  components: {
    ApplicantList: () => import('../Jobs/jobDetails/ApplicantsList'),
    ShortListed: () => import('./jobDetails/ShortListed'),
    JobSummary: () => import('../Jobs/jobDetails/JobSummary'),
  },
  data: () => {
    return {
      tabs: null,
      applicant: [],
      qualification: [],
      experience: [],
      jobAppliers: {},
      biodata: [],
      totalExp: {},
      pageNo: 1,
      length: 0,
      jobs: {}
    }
  },
created() {
    this.getApplicantList()
  },
  computed: {
    totalApplicants() {
      return this.applicant && this.applicant.length
    },
  },
  methods: {
    getApplicantList(){
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: `resume/` + this.$route.params.id + `/applicants`,
        method: "get",
        params: {
          page: this.pageNo
        },
        data: {},
        headers,
      })
          .then((response) => {
            console.log("Applicant list", response.data.data);
            console.log("job list", response.data.job);
            console.log("qualification", this.qualification);
            this.applicant = response.data.data;
            this.jobs = response.data.job
            for (let i = 0; i < this.applicant.length; i++) {
              console.log("qualification index object", this.applicant[i]) // returns [Object object]
              console.log("qualification", this.applicant[i].qualification) // returns undefined
              console.log("adagsgvfgsdff", this.jobAppliers) // returns undefined
              console.log("experience", this.experience) // returns undefined
              console.log("biodata", this.biodata) // returns undefined
              console.log("total exp", this.totalExp) // returns undefined
              this.qualification = this.applicant[i].qualification
              this.biodata = this.applicant[i].biodata
              this.experience = this.applicant[i].experiences
              this.jobAppliers = this.applicant[i].job_appliers
              this.totalExp = this.applicant[i].total_experice
            }

            // this.jobId =this.postedJobs[3]

            // this.orders.find(({ id }) => id === this.orderId)
            // this.jobId = this.postedJobs.find((job_id) => job_id.id === id);
            // this.job_status = response.data.items.job_status
            this.loading = false
            this.length = Math.round(
                response.data.total /
                response.data.page
            );
            console.log("page length", this.length)
            // setTimeout(() => (this.loading = false), 1000)
          })
          .catch((error) => {
            this.postedJobs = []
            this.$awn.alert("Failed");
            console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
          })
          .finally(() => {
            this.modalSkeleton = false
            if (this.postedJobs.length === 0) this.ShowAlertMsg = true;

          });
    },
    getHumanDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$router.push({name: 'JobDetails', params: {id: jobId}})
    },
  },
}
</script>
