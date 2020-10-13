<template>
  <div class="applied-job">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">Applied Jobs</h1>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="ja__card">
            <!--********** Top card start **************-->
            <v-card flat class="ja__selected_card">
              <v-row>
                <v-col cols="12" lg="3">
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="computedDateFormatted"
                        label="Date"
                        prepend-icon="event"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" lg="3">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="computedDateFormatted"
                        label="Date (read only text field)"
                        persistent-hint
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field label="Company Name"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-select :items="items" label="Status"></v-select>
                </v-col>
              </v-row>
              <div class="search__btn text-center">
                <v-btn color="success" dark>search</v-btn>
              </div>
            </v-card>
            <!--********** Top card END **************-->
            <!-- loading data  starts-->
            <v-dialog v-model="loading" hide-overlay persistent width="300">
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
            <!-- loading data  ends-->
            <!--********** Job activities start **************-->
            <div v-if="!appliedJobs.length" class="text-center">
              <h1>You haven't applied for any job yet</h1>
            </div>
            <div v-else class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <p class="jaif">
                    Total Job Found : <span>{{ totalJobs }}</span>
                  </p>
                </v-col>
                <v-col cols="12" lg="8" v-if="false">
                  <ul class="d-flex ja__info justify-end">
                    <li class="ja_tinfo d-flex align-center">
                      <v-icon class="light__grey"
                        >mdi-account-tie-voice-off</v-icon
                      >
                      <p>not connected: <span>1</span></p>
                    </li>
                    <li class="ja_tinfo d-flex align-center">
                      <v-icon class="green">mdi-account-voice</v-icon>
                      <p>connected: <span>1</span></p>
                    </li>
                    <li class="ja_tinfo d-flex align-center">
                      <v-icon class="blue">mdi-handshake-outline</v-icon>
                      <p>hired: <span>1</span></p>
                    </li>
                  </ul>
                </v-col>
              </v-row>
              <!--********** Job applied table start **************-->
              <div style="overflow-x: auto">
                <table class="ja_table">
                  <thead>
                    <tr class="panel-heading">
                      <th>Sl</th>
                      <th style="width: 42%">Job Title</th>
                      <th>Expected Salary</th>
                      <th class="text-center">Viewed (by Employer)</th>
                      <th class="text-center">Employer's interaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(job, i) in appliedJobs" :key="i">
                      <td>
                        <p>{{ i + 1 }}</p>
                      </td>
                      <td class="col-w">
                        <a @click="showJobDetails(job.id)">{{
                          job.job_title
                        }}</a>
                        <p>{{ job.company_name }}</p>
                        <small class="font-weight-bold"
                          >Applied On:
                          <v-icon small>mdi-calendar-month</v-icon>
                          <span>{{ getHumanDate(job.applied_at) }}</span></small
                        >
                      </td>
                      <td class="exp-c">
                        <p>
                          <span class="font-weight-bold">{{
                            job.currency_code
                          }}</span>
                          {{ job.expected_salary }}
                        </p>
                      </td>
                      <td class="text-center">
                        <!-- Summary View icon start -->
                        <v-tooltip top v-if="job.summary_view">
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-green"
                              icon
                              dark
                              v-bind="attrs"
                              v-on="on"
                              color="green"
                              >mdi-eye
                            </v-icon>
                          </template>
                          <span>Summary Viewed</span>
                        </v-tooltip>
                        <v-tooltip top v-else>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-red"
                              rounded
                              dark
                              v-bind="attrs"
                              v-on="on"
                              color="red"
                              >mdi-eye-off
                            </v-icon>
                          </template>
                          <span>Summary Not Viewed</span>
                        </v-tooltip>
                        <!-- Summary View icon end -->
                        <!-- Details View icon start -->
                        <v-tooltip top v-if="job.details_view">
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-green"
                              icon
                              dark
                              v-bind="attrs"
                              v-on="on"
                              color="green"
                              >mdi-text-box-check
                            </v-icon>
                          </template>
                          <span>Details Viewed</span>
                        </v-tooltip>
                        <v-tooltip top v-else>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-red"
                              icon
                              dark
                              v-bind="attrs"
                              v-on="on"
                              color="red"
                              >mdi-text-box-remove
                            </v-icon>
                          </template>
                          <span>Details Not Viewed</span>
                        </v-tooltip>
                        <!-- Details View icon end -->
                      </td>
                      <td class="text-center">
                        <!-- Interview call icon start-->
                        <v-tooltip top v-if="job.inter_view_call">
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-green"
                              rounded
                              dark
                              v-bind="attrs"
                              v-on="on"
                              color="green"
                              >mdi-account-voice
                            </v-icon>
                          </template>
                          <span>Interview call</span>
                        </v-tooltip>
                        <v-tooltip top v-else>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-red"
                              rounded
                              dark
                              v-bind="attrs"
                              v-on="on"
                              color="red"
                              >mdi-account-tie-voice-off
                            </v-icon>
                          </template>
                          <span>Interview not call</span>
                        </v-tooltip>
                        <!-- Interview call icon end-->
                        <!-- shortlisted icon start-->
                        <v-tooltip top v-if="job.short_listed">
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-green"
                              icon
                              color="primary"
                              dark
                              v-bind="attrs"
                              v-on="on"
                              >mdi-check
                            </v-icon>
                          </template>
                          <span>Short listed</span>
                        </v-tooltip>
                        <v-tooltip top v-else>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="interactn c-red"
                              icon
                              color="red"
                              dark
                              v-bind="attrs"
                              v-on="on"
                              >mdi-close
                            </v-icon>
                          </template>
                          <span>Not Short listed</span>
                        </v-tooltip>
                        <!-- shortlisted icon end-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--********** Job applied table end **************-->
              <!--********** pagination start **************-->
              <div>
                <v-pagination
                  v-model="pageNo"
                  :length="length"
                  :total-visible="page_range"
                ></v-pagination>
              </div>
              <!--********** pagination end **************-->
            </div>
            <!--********** Job activities end **************-->

            <!-- job apply modal starts-->
            <job-alert-modal persistent v-if="showModal">
              <div :style="modalStyle" v-if="!modalSkeleton">
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="card"
                ></v-skeleton-loader>
              </div>
              <div class="d-flex" slot="header">
                <div class="top_job_det">
                  <h1 class="warning-text">{{ jobDetails.job_title }}</h1>
                  <p class="company-name">
                    {{ jobDetails.company_name }} ||
                    {{ jobDetails.type_in_text }}
                  </p>
                  <p>
                    <span class="font-weight-bold">{{
                      jobDetails.currency_code
                    }}</span
                    ><span> {{ jobDetails.min_salary_range }}</span> -
                    <span> {{ jobDetails.max_salary_range }}</span>
                  </p>
                </div>
                <v-spacer></v-spacer>
                <v-btn small @click="showModal = false" icon>
                  <v-icon color="black" small>mdi-close</v-icon>
                </v-btn>
              </div>
              <div slot="body">
                <h4 class="mb-3">Job Location</h4>
                <div class="d-flex mb-4">
                  <div class="job_location d-flex">
                    <p>{{ jobDetails.job_location }}</p>
                    ,
                    <p>{{ jobDetails.city }}</p>
                    ,
                    <p>{{ jobDetails.country }}</p>
                  </div>
                  <!--                 <div class="job_city" v-else-if="jobDetails.city">-->
                  <!--                   <p>{{jobDetails.city}}</p>-->
                  <!--                 </div>-->
                  <!--                 <div class="job_city" v-else-if="jobDetails.country">-->
                  <!--                   <p>{{jobDetails.country}}</p>-->
                  <!--                 </div>-->
                  <!--                 <div v-else>-->
                  <!--                   <p>{{jobDetails.country}}</p>-->
                  <!--                 </div>-->
                </div>
                <h4 class="mb-3">Job Description</h4>
                <p v-html="jobDetails.job_description"></p>
                <div class="job_responsibilities mt-3">
                  <h4>Responsibilities</h4>
                  <div
                    v-for="jobres in jobDetails.job_responsibilities"
                    :key="jobres.id"
                  >
                    <p v-html="jobres.text"></p>
                  </div>
                </div>
                <div class="edu_req mt-3">
                  <h4>Educational Requirements</h4>
                  <div
                    v-for="edu in jobDetails.job_education_req"
                    :key="edu.id"
                  >
                    <p v-html="edu.degre_title"></p>
                  </div>
                </div>
                <div class="edu_req mt-3">
                  <h4>Skills</h4>
                  <div v-for="(skill, i) in jobDetails.skills" :key="skill.id">
                    <ul>
                      <li>
                        {{ i + 1 }}. <span class="ml-1">{{ skill.title }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="job_description mt-3">
                  <h4>Salary</h4>
                  <p v-if="jobDetails.negotiable">Negotiable</p>
                  <p v-else>
                    <span class="mr-1">{{ jobDetails.currency_code }}</span
                    ><span>{{ jobDetails.min_salary_range }}</span> -
                    <span>{{ jobDetails.max_salary_range }}</span>
                  </p>
                </div>
                <div class="job_faci mt-4">
                  <h4>Job Facilities</h4>
                  <div v-for="fac in jobDetails.job_facilities" :key="fac.id">
                    <p v-html="fac.text"></p>
                  </div>
                </div>
              </div>
            </job-alert-modal>
            <!-- job apply modal ends-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../../sass/job-alart/_appliedJobs.scss";
import moment from "moment";
import axios from "axios";

export default {
  name: "appliedJobs",
  components: {
    JobAlertModal: () => import("../../components/Modal"),
  },
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    items: ["viewed", "Not viewed"],
    appliedJobs: [],
    jobDetails: {},
    showModal: false,
    page: 1,
    pageNo: 1,
    jobId: "",
    length: 0,
    page_range: 5,
    limit: 5,
    loading: true,
    modalSkeleton: true,
    modalStyle: {
      width: "50%",
    },
  }),

  computed: {
    totalJobs() {
      return this.appliedJobs && this.appliedJobs.length;
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  mounted() {
    this.pageNo = 1;
    this.getJobAppliedData();
  },
  methods: {
    getJobAppliedData() {
      this.loading = true;
      this.skeleton = true;
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: "jobs/applied",
        method: "get",
        params: {
          page: this.pageNo,
          limit: this.limit,
        },
        headers,
      })
        .then((response) => {
          console.log("job applied list....", response);
          this.appliedJobs = response.data.jobs.items;
          this.length = Math.round(
            response.data.jobs.total_count /
              response.data.jobs.num_items_per_page
          );
          console.log("page length", this.length);
          this.loading = false;
        })
        .catch(() => {
          this.appliedJobs = [];
          // this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          if (this.appliedJobs.length === 0) this.ShowAlertMsg = true;
          //  this.tableLoading = false;
          // this.JobDescriptionStyle.height = document.querySelector("#mainDocs").scrollHeight - 64 - 48 - 140 + "px";
        });
    },
    showJobDetails(id) {
      console.log("job id", id);
      this.loading = true;
      // this.jobId = id
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      this.$store
        .dispatch("callApi", {
          url: "jobs/" + id,
          method: "get",
          headers,
          data: {},
        })
        .then((response) => {
          console.log("Job Details list in the", response.data.jobs);
          this.jobDetails = response.data.jobs;
          this.showModal = true;
        })
        .catch((error) => {
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.loading = false;
          //  this.tableLoading = false;
          // this.skeletonJobDetails = false;
        });
      // this.jobDetails = this.appliedJobs.find(({id}) => id === this.jobId)
      // console.log("job details", this.jobDetails)
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
    formatDate(date) {
      0.0;

      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  // watch: {
  //   pageNo() {
  //     this.getData();
  //   },
  // },
};
</script>
