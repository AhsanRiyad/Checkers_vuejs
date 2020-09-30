<template>
  <div class="posted__list" :all-jobs="allJobs">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <h2 class="jaif" :total-jobs="totalJobs">Total Job: <span>{{ totalJobs }}</span></h2>
                </v-col>
              </v-row>
            </div>
            <!--********** Job activities end **************-->
            <!--********** Job applied table start **************-->
            <div style="overflow-x: auto !important;">
              <table>
                <thead>
                <tr class="panel-heading">
                  <th>Sl</th>
                  <th style=" width:45%;">Job Title</th>
                  <th>
                    <v-icon>mdi-bell-ring</v-icon>
                    Job Status
                  </th>
                  <!--                  <th>-->
                  <!--                    <v-icon>mdi-file-multiple-outline</v-icon>-->
                  <!--                    Application-->
                  <!--                  </th>-->
                  <!--                  <th class="text-center">-->
                  <!--                    <v-icon>mdi-format-list-bulleted</v-icon>-->
                  <!--                    Short-listed-->
                  <!--                  </th>-->
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
                <tr v-for="(job, i) in allJobs" :key="i">
                  <td><p>{{ i + 1 }}</p></td>
                  <td>
                    <a class="text-capitalize" @click="goToJobDetails(job.id)">{{ job.job_title }}</a>
                    <p class="mb-0"><span class="mr-1">Company Name:</span><span>{{ job.company_name }}</span></p>
                    <p class="mb-0"><small>Published On:<span class="ml-1"
                                                              v-if="job.live_at"> {{ getHumanDate(job.live_at) }}</span>
                      <span class="ml-1" v-else>Not Yet</span></small></p>
                    <p class="mb-0"><small>Deadline:<span class="ml-1" v-if="job.end_at">{{
                        getHumanDate(job.end_at)
                      }}</span> <span class="ml-1" v-else>Not Yet</span></small></p>
                  </td>
                  <td>
                    <p class="green--text font-weight-bold" v-if="job.job_status == 1">Is Lived</p>
                    <p class="error--text font-weight-bold" v-else-if="job.job_status == 0">Is Not Lived</p>
                    <p class="red--text font-weight-bold" v-else-if="job.is_expired">Is Expired</p>
                  </td>
                  <!--                  <td>{{ job.applicant }}</td>-->
                  <!--                  <td class="text-center">{{ job.shortlisted }}</td>-->
                  <td class="action text-center">
                    <v-btn id="edit_btn" :disabled="job.job_status == 1" class="interactn c-grey" icon>
                      <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-btn :disabled="job.job_status == 1" class="interactn  mr-2 ml-2 c-green" icon>
                      <v-icon>mdi-backup-restore</v-icon>
                    </v-btn>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!--********** Job applied table end **************-->
            <!--********** pagination start **************-->
            <div class="pagination">
              <v-pagination v-model="pageNo" :length="length"></v-pagination>
            </div>
            <!--********** pagination end **************-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "AllJobList",
  data: () => ({
    allJobs: [],
    pageNo: 1,
    length: 0,
    loading: true
  }),
  computed: {
    totalJobs() {
      return this.allJobs && this.allJobs.length
    },
  },
  created() {
    this.getPostedJobs()
  },
  methods: {
    getHumanDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$router.push({name: 'JobDetails', params: {id: jobId}})
    },
    getPostedJobs() {
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: `jobs/`,
        method: "get",
        params: {
          limit: this.limit,
          page: this.pageNo
        },
        data: {},
        headers,
      })
          .then((response) => {
            console.log("job list", response.data.data.jobs);
            this.allJobs = response.data.data.jobs;
            // this.jobId =this.allJobs[3]
            for (let i = 0; i < this.allJobs.length; i++) {
              console.log("job index i", i) // returns the numbered index
              console.log("job index object", this.allJobs[i]) // returns [Object object]
              console.log(this.allJobs[i].id) // returns undefined
              this.jobId = this.allJobs[i].id
              console.log("id jobssssssssss", this.jobId)
            }

            // this.orders.find(({ id }) => id === this.orderId)
            // this.jobId = this.allJobs.find((job_id) => job_id.id === id);
            // this.job_status = response.data.items.job_status
            this.loading = false
            this.length = Math.round(
                response.data.total_count /
                response.data.num_items_per_page
            );
            console.log("page length", this.length)
            // setTimeout(() => (this.loading = false), 1000)
          })
          .catch((error) => {
            this.allJobs = []
            this.$awn.alert("Failed");
            console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
          })
          .finally(() => {
            if (this.allJobs.length === 0) this.ShowAlertMsg = true;

          });
    },

  }
}
</script>

