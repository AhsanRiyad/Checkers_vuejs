<template>
  <div class="posted__list">
    <v-card flat class="ja__card pa-lg-6 pa-md-6">
      <!--********** Job activities start **************-->
      <div class="jobActivity">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="jaif">
              Total Job: <span>{{ totalJobs }}</span>
            </h2>
          </v-col>
        </v-row>
      </div>
      <!--********** Job activities end **************-->
      <!--********** Job applied table start **************-->
      <div v-if="!allJobs.length" class="text-center not-available">
        <h1>Job is not Available</h1>
      </div>
      <div v-else style="overflow-x: auto !important">
        <table class="ja_table">
          <thead>
            <tr class="panel-heading">
              <th>Sl</th>
              <th style="width: 45%">Job Title</th>
              <th>
                <v-icon>mdi-bell-ring</v-icon>
                Job Status
              </th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(job, i) in allJobs" :key="i">
              <td>
                <p>{{ i + 1 }}</p>
              </td>
              <td>
                <a
                  class="text-capitalize"
                  @click.stop="() => goToJobDetails(job.id)"
                  >{{ job.job_title }}</a
                >
                <p class="mb-0">
                  <span class="mr-1">Company Name:</span
                  ><span>{{ job.company_name }}</span>
                </p>
                <p class="mb-0">
                  <small
                    >Published On:<span class="ml-1" v-if="job.live_at">
                      {{ getHumanDate(job.live_at) }}</span
                    >
                    <span class="ml-1" v-else>Not Yet</span></small
                  >
                </p>
                <p class="mb-0">
                  <small
                    >Deadline:<span class="ml-1" v-if="job.end_at">{{
                      getHumanDate(job.end_at)
                    }}</span>
                    <span class="ml-1" v-else>Not Yet</span></small
                  >
                </p>
              </td>
              <td>
                <p
                  class="green--text font-weight-bold"
                  v-if="job.job_status == 1"
                >
                  Is Lived
                </p>
                <p
                  class="red--text font-weight-bold"
                  v-else-if="job.is_expired"
                >
                  Is Expired
                </p>
                <p class="error--text font-weight-bold" v-else>Is Not Lived</p>
              </td>
              <!--                  <td>{{ job.applicant }}</td>-->
              <!--                  <td class="text-center">{{ job.shortlisted }}</td>-->
              <td  class="action text-center">
                <v-btn
                    v-if="false"
                  :disabled="isDisabled"
                  class="interactn c-grey"
                  icon
                >
                  <v-icon>mdi-square-edit-outline</v-icon>
                </v-btn>
                <!--                    "-->
                <v-btn v-if="false"
                  :disabled="isDisabled"
                  class="interactn mr-2 ml-2 c-green"
                  icon
                >
                  <v-icon>mdi-backup-restore</v-icon>
                </v-btn>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="goToJobDetails(job.id)"
                        class="interactn mr-2 ml-2 c-green"
                        v-bind="attrs"
                        v-on="on"
                        icon
                    >
                      <v-icon>mdi-account-group</v-icon>
                    </v-btn>
                  </template>
                  <span>Applicant List</span>
                </v-tooltip>

              </td>
            </tr>
          </tbody>
        </table>
        <!--********** pagination start **************-->
        <div class="pagination">
          <v-pagination
            v-model="pageNo"
            :all-job-length="allJobLength"
          ></v-pagination>
        </div>
        <!--********** pagination end **************-->
        <v-dialog v-model="modalLoading" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Loading Data...
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <!--********** Job applied table end **************-->
    </v-card>
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
    allJobLength: 0,
    modalLoading: true,
  }),
  computed: {
    isDisabled() {
      if (this.allJobs.job_status === 1) {
        return true;
      } else if (this.allJobs.is_expired) {
        return true;
      } else {
        return false;
      }
    },
    totalJobs() {
      return this.allJobs && this.allJobs.length;
    },
  },
  mounted() {
    this.getAllJobs();
  },
  methods: {
    getAllJobs() {
      this.modalLoading = true;
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
          page: this.pageNo,
        },
        data: {},
        headers,
      })
        .then((response) => {
          this.allJobs = response.data.data.jobs;
          this.modalLoading = false;
          console.log("all jobasdasdvdasfvdfa", response.data.data);
          // this.jobId =this.allJobs[3]
          for (let i = 0; i < this.allJobs.length; i++) {
            console.log("job index i", i); // returns the numbered index
            console.log("job index object", this.allJobs[i]); // returns [Object object]
            console.log(this.allJobs[i].id); // returns undefined
            this.jobId = this.allJobs[i].id;
            console.log("id jobssssssssss", this.jobId);
          }

          this.allJobLength = Math.round(
            response.data.total_count / response.data.num_items_per_page
          );
          console.log("pagefddddddddg length", this.allJobLength);
          // setTimeout(() => (this.modalLoading = false), 1000)
        })
        .catch((error) => {
          this.allJobs = [];
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.modalLoading = false;
          if (this.allJobs.length === 0) this.ShowAlertMsg = true;
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$store.commit("job", jobId);
      this.$router.push({ name: "JobDetails", params: { id: jobId } });
    },
  },
};
</script>

