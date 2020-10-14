<template>
  <div class="jobsDetails">
    <v-card>
      <!--********** Top card start **************-->
      <div class="top_section_card">
        <div class="ja_left_card">
          <h1 class="job_title">{{ jobs.job_title }}</h1>
        </div>
        <div class="ja_right_card">
<!--          <v-btn-->
<!--              :disabled="isDisabled"-->
<!--            @click="editJob(jobs.id)"-->
<!--            class="text&#45;&#45;white"-->
<!--            color="blue-grey"-->
<!--          >-->
<!--            <v-icon>launch</v-icon>-->
<!--            edit-->
<!--          </v-btn>-->
          <v-btn class="ml-2 mr-2" color="secondary" v-if="false">
            <v-icon>reply</v-icon>
            repost
          </v-btn>
          <v-btn color="primary" v-if="false">
            <v-icon>share</v-icon>
            share
          </v-btn>
        </div>
      </div>
      <div class="jd_section_card">
        <ul class="d-flex jd_border jd_left_card">
          <li class="jd_list">
            <p class="jd_title">job status</p>
            <div class="jd_status" v-if="jobs.is_lived">
              <span class="green--text">Live</span>
            </div>
            <div class="jd_status" v-else-if="jobs.is_expired">
              <span class="red--text">Expired</span>
            </div>
            <div class="jd_status" v-else>
              <span class="blue--text">Draft</span>
            </div>
          </li>
          <li class="jd_list">
            <p class="jd_title">job type</p>
            <div class="jd_status">
              <v-icon style="line-height: 0 !important" size="20"
                >description</v-icon
              >
              <span v-if="jobs.type_in_text">{{ jobs.type_in_text }}</span>
            </div>
          </li>
          <li class="jd_list">
            <p class="jd_title">published on</p>
            <div class="jd_status">
              <v-icon style="line-height: 0 !important" size="20"
                >calendar_today</v-icon
              >
              <span>{{ getHumanDate(jobs.live_at) }}</span>
            </div>
          </li>
        </ul>
        <ul class="d-flex jd_border jd_right_card">
          <li class="jd_list" v-if="false">
            <v-icon>search</v-icon>
            <p class="jd_title">search views</p>
            <div class="jd_status">9,392</div>
          </li>
          <li class="jd_list" v-if="false">
            <v-icon>mdi-file-document-outline</v-icon>
            <p class="jd_title">detailed views</p>
            <div class="jd_status">2346</div>
          </li>
          <li class="jd_list">
            <v-icon>mdi-file-multiple-outline</v-icon>
            <p class="jd_title">application</p>
            <div class="jd_status">{{ totalApplicants }}</div>
          </li>
        </ul>
      </div>
      <!--********** Top card END **************-->
      <v-container class="tab_contain">
        <v-row align="center">
          <v-col cols="12" md="8">
            <v-tabs v-model="tabs">
              <v-tab class="job_tab">Applicants ({{ totalApplicants }})</v-tab>
              <v-tab class="job_tab"
                >Shortlisted ({{ totalApplicantShortlist }})</v-tab
              >
              <v-tab class="job_tab">Job Preview</v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12" md="4" v-if="false">
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
              <!--                  v-model="dateRangeText"-->
              <v-text-field
                outlined
                dense
                placeholder="Date range"
                prepend-inner-icon="event"
                single-line
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <applicant-list
            :loading-applicant="loadingApplicant"
            :total-exp="totalExp"
            :biodata="biodata"
            :job-appliers="jobAppliers"
            :experience="experience"
            :qualification="qualification"
            :applicant="applicant"
          ></applicant-list>
        </v-tab-item>
        <v-tab-item>
          <short-listed></short-listed>
        </v-tab-item>
        <v-tab-item>
          <job-preview :jobs="jobs" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { eventBus } from "@/main";

export default {
  name: "JobDetails",
  components: {
    ApplicantList: () => import("../Jobs/jobDetails/ApplicantsList"),
    ShortListed: () => import("./jobDetails/ShortListed"),
    JobPreview: () => import("./jobDetails/JobPreview"),
  },
  data: () => {
    return {
      tabs: null,
      applicant: [],
      qualification: [],
      experience: [],
      jobAppliers: [],
      biodata: [],
      totalExp: {},
      pageNo: 1,
      shortList: 1,
      jobDetailsLength: 0,
      jobs: {},
      jobId: "",
      jobResponsibility: {},
      loadingApplicant: true,
      imageUrl: "",
      applicantShortListed: [],
    };
  },
  created() {
    this.getApplicantList();
    this.getApplicantShortList();
    eventBus.$on("updateApplicantList", () => {
      this.getApplicantList();
      this.getApplicantShortList();
    });
  },
  computed: {
    isDisabled() {
      if (this.jobs.job_status === 1) {
        return true;
      } else if (this.jobs.is_expired) {
        return true;
      } else {
        return false;
      }
    },
    totalApplicants() {
      return this.applicant && this.applicant.length;
    },
    totalApplicantShortlist() {
      return this.applicantShortListed && this.applicantShortListed.length;
    },
  },
  methods: {
    getApplicantList() {
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
          page: this.pageNo,
        },
        data: {},
        headers,
      })
        .then((response) => {
          console.log("Applicant list", response.data);
          console.log("job list", response.data.job);
          console.log("qualification", this.qualification);
          this.applicant = response.data.data;
          this.jobs = response.data.job;
          this.jobId = response.data.job.id;
          this.$store.commit("job", this.jobId);
          console.log("job id", this.jobId);

          // this.jobId =this.postedJobs[3]

          // this.orders.find(({ id }) => id === this.orderId)
          // this.jobId = this.postedJobs.find((job_id) => job_id.id === id);
          // this.job_status = response.data.items.job_status
          this.loadingApplicant = false;
          this.jobDetailsLength = Math.round(
            response.data.total / response.data.page
          );
          console.log("page length of applicant list", this.jobDetailsLength);
          // setTimeout(() => (this.loadingApplicant = false), 1000)
        })
        .catch((error) => {
          this.applicant = [];
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.modalSkeleton = false;
          if (this.applicant.length === 0) this.ShowAlertMsg = true;
        });
    },
    getApplicantShortList() {
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
          short_list: this.shortList,
          page: this.pageNo,
        },
        data: {},
        headers,
      })
        .then((response) => {
          console.log("Applicant list shortlist", response.data);
          console.log("job list", response.data.job);
          console.log("qualification", this.qualification);
          this.applicantShortListed = response.data.data;
          this.jobs = response.data.job;
          this.jobId = response.data.job.id;
          // this.$store.commit("job", this.jobId);
          console.log("job id", this.jobId);
          this.loadingApplicant = false;
          this.length = Math.round(response.data.total / response.data.page);
          console.log("page length", this.length);
          // setTimeout(() => (this.loadingApplicant = false), 1000)
        })
        .catch((error) => {
          this.applicantShortListed = [];
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.modalSkeleton = false;
          if (this.applicantShortListed.length === 0) this.ShowAlertMsg = true;
        });
    },
    editJob: function (id) {
      this.$router.history.push({ name: "AddJobs", params: { id: id } });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$router.push({ name: "JobDetails", params: { id: jobId } });
    },
  },
};
</script>
