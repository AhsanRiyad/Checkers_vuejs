<template>
  <div class="posted__list">
    <v-card flat class="ja__card pa-6">
      <!--********** Job activities start **************-->
      <div class="jobActivity">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="jaif">Total Drafted Job: <span>{{totalJobs}}</span></h2>
          </v-col>
        </v-row>
      </div>
      <!--********** Job activities end **************-->
      <!--********** Job applied table start **************-->
      <div v-if="!expiredJobs.length" class="text-center">
        <h1>Expired job is not available</h1>
      </div>
      <div v-else style="overflow-x: auto !important;">
        <table class="ja_table">
          <thead>
          <tr class="panel-heading">
            <th>Sl</th>
            <th style=" width:35%;">Job Title</th>
            <th>
              <v-icon>mdi-bell-ring</v-icon>
              Job Status
            </th>
            <th>
              <v-icon>mdi-file-multiple-outline</v-icon>
              Application
            </th>
            <th class="text-center">
              <v-icon>mdi-format-list-bulleted</v-icon>
              Short-listed
            </th>
            <th class="text-center">Actions</th>
          </tr>
          </thead>
          <tbody>
          <v-dialog v-model="loading" hide-overlay persistent width="300">
            <v-card color="primary" dark>
              <v-card-text>
                Loading Data...
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
          <tr v-for="(job, i) in expiredJobs" :key="i">
            <td><p>{{ i+1 }}</p></td>
            <td>
              <a class="text-capitalize" @click="goToJobDetails(job.id)">{{ job.job_title }}</a>
              <p class="mb-0"><small>Published On:<span class="ml-1" v-if="job.live_at"> {{getHumanDate(job.live_at) }}</span> <span class="ml-1" v-else>Not Yet</span></small></p>
              <p  class="mb-0"><small>Deadline:<span class="ml-1" v-if="job.end_at">{{ getHumanDate(job.end_at) }}</span> <span class="ml-1" v-else>Not Yet</span></small></p>
            </td>
            <td v-if="false">
              <v-switch
                  @click.stop="jobLive(job.id)"
                  color="success"
                  :input-value="job.job_status == 1 ? true : false"
                  hide-details
              ></v-switch>
            </td>
            <td>{{ job.applicant }}</td>
            <td class="text-center">{{ job.shortlisted }}</td>
            <td class="action text-center">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn   v-bind="attrs"
                           v-on="on" @click.stop="editJob(job.id)" id="edit_btn" class="interactn c-grey" icon>
                    <v-icon>mdi-square-edit-outline</v-icon>
                  </v-btn>
                </template>
                <span>Edit Job</span>
              </v-tooltip>

              <v-btn v-if="false" :disabled="job.job_status == 1" class="interactn  mr-2 ml-2 c-green" icon>
                <v-icon>mdi-backup-restore</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </table>
        <!--********** pagination start **************-->
        <div class="pagination">
          <v-pagination v-model="pageNo" :length="expiredJobsLength"></v-pagination>
        </div>
        <!--********** pagination end **************-->
      </div>
      <!--********** Job applied table end **************-->
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
name: "ExpiredJobs",
  data: () => ({
    expiredJobs: [],
    pageNo: 1,
    expiredJobsLength: 0,
    loading: true,
    jobsId: ''
  }),
  computed: {
    totalJobs() {
      return this.expiredJobs && this.expiredJobs.length
    },
  },
  created() {
    this.getExpiredJobs()
  },
  methods: {
    getHumanDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$router.push({name: 'JobDetails', params: {id: jobId}})
    },
    getExpiredJobs(){
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: `jobs/expired-job`,
        method: "get",
        params: {
          page: this.pageNo
        },
        data: {},
        headers,
      })
          .then((response) => {
            console.log("expired jobs", response);
            this.expiredJobs = response.data.data.job.items;
            // this.jobId =this.expiredJobs[3]
            for (let i = 0; i < this.expiredJobs.length; i++) {
              console.log("job index i", i) // returns the numbered index
              console.log("job index object", this.expiredJobs[i]) // returns [Object object]
              console.log(this.expiredJobs[i].id) // returns undefined
              this.jobId = this.expiredJobs[i].id
              console.log("id jobssssssssss",this.jobId)
            }
            this.loading = false
            this.darafteJobsLength = Math.round(
                response.data.total_count /
                response.data.num_items_per_page
            );
            console.log("page darafteJobsLength", this.darafteJobsLength)
            // setTimeout(() => (this.loading = false), 1000)
          })
          .catch((error) => {
            this.expiredJobs = []
            this.$awn.alert("Failed");
            console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
          })
          .finally(() => {
            if (this.expiredJobs.length === 0) this.ShowAlertMsg = true;

          });
    }
  }
}
</script>

<style scoped>

</style>
