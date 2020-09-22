<template>
  <div class="posted__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <p class="jaif">Total Job: <span>{{totalPostedJobs}}</span></p>
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
                <v-progress-linear
                    v-show="loading"
                    :indeterminate="loading"
                    color="deep-purple accent-4"
                    rounded
                    absolute
                    height="6"
                ></v-progress-linear>
                <tr v-for="(job, i) in postedJobs" :key="i">
                  <td><p>{{ i+1 }}</p></td>
                  <td>
                    <a class="text-capitalize" @click="goToJobDetails(job.id)">{{ job.job_title }}</a>
                    <p class="mb-0"><small>Published On:<span class="ml-1" v-if="job.live_at"> {{getHumanDate(job.live_at) }}</span> <span class="ml-1" v-else>Not Yet</span></small></p>
                    <p  class="mb-0"><small>Deadline:<span class="ml-1" v-if="job.end_at">{{ getHumanDate(job.end_at) }}</span> <span class="ml-1" v-else>Not Yet</span></small></p>
                  </td>
                  <td>
                    <v-switch
                        @click="job.job_status = (job.job_status + 1) % 2"
                        color="success"
                        :input-value="job.job_status == 1 ? true:false"
                        hide-details
                    ></v-switch>
                  </td>
                  <td>{{ job.applicant }}</td>
                  <td class="text-center">{{ job.shortlisted }}</td>
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
import moment from 'moment';

export default {
  name: "PostedJobList",
  data: () => ({
    loading: true,
    menu1: false,
    menu2: false,
    items: ['viewed', 'Not viewed'],
    postedJobs: [],
    company_id: null,
    pageNo: 1,
    length: 0,
    page: 1,
    job_status: 1
  }),

  computed: {
    totalPostedJobs() {
      return this.postedJobs && this.postedJobs.length
    },
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.$cookies.get("accessToken"),
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios({
      baseURL: this.$store.state.apiBase,
      url: `jobs/company-id/` + this.$route.params.id,
      method: "get",
      params: {
        page: this.pageNo
      },
      data: {},
      headers,
    })
        .then((response) => {
          console.log("sataus", response.data.items[0].job_status);
          this.postedJobs = response.data.items;
          // this.job_status = response.data.items.job_status
          this.loading = false
          this.length = Math.round(
              response.data.total_count /
              response.data.num_items_per_page
          );
          console.log("page length", this.length)
          setTimeout(() => (this.loading = false), 1000)
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
  methods: {
    getHumanDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$router.push({name: 'JobDetails', params: {id: jobId}})
    },
  },
}
</script>