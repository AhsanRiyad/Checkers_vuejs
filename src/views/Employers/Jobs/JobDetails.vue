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
              >description
              </v-icon
              >
              <span v-if="jobs.type_in_text">{{ jobs.type_in_text }}</span>
            </div>
          </li>
          <li class="jd_list">
            <p class="jd_title">published on</p>
            <div class="jd_status">
              <v-icon style="line-height: 0 !important" size="20"
              >calendar_today
              </v-icon
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
      <!--********** Filter Card Start **************-->

      <v-expansion-panels class="filter_panel">
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
            <span><v-icon>mdi-magnify</v-icon>Search Applicant</span>
            <template v-slot:actions>
              <v-icon color="teal">
                mdi-account-search
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat class="ja__selected_card filter_card">
              <v-row>
                <v-col cols="12" lg="3" md="3">
                  <!--                  <v-select-->
                  <!--                      v-model="skill_list"-->
                  <!--                      :items="itemsSkillList"-->
                  <!--                      item-text="title"-->
                  <!--                      item-value="id"-->
                  <!--                      :menu-props="{ maxHeight: '400' }"-->
                  <!--                      label="Select Skills"-->
                  <!--                      multiple-->
                  <!--                      dense-->
                  <!--                      persistent-hint-->
                  <!--                  ></v-select>-->
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-select
                      v-model="job_level"
                      :items="itemsJobLevel"
                      item-text="value"
                      label="Select Job Level"
                      dense
                  ></v-select>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-select
                      v-model="gender"
                      :items="itemsGender"
                      label="Select Gender"
                      dense
                  ></v-select>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field dense v-model="name" label="Name"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field dense v-model="salary_range" label="Salary Range (eg: 50,000)"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field dense v-model="location" label="Location"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field dense v-model="experiences" label="Experiences (eg: min, max)"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field dense v-model="qualifications" label="Qualification"></v-text-field>
                </v-col>
              </v-row>
              <div class="search__btn text-center">
                <v-btn color="success" dark @click="() => searchApplicants()">search</v-btn>
              </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <!--********** Filter card END **************-->
      <v-container class="tab_contain">
        <v-row align="center">
          <v-col cols="12" md="8">
            <v-tabs v-model="tabs">
              <v-tab class="job_tab">Applicants ({{ totalApplicants }})</v-tab>
              <v-tab class="job_tab"
              >Shortlisted ({{ totalApplicantShortlist }})
              </v-tab
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
          <job-preview :jobs="jobs"/>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import {eventBus} from "@/main";
import "../../../sass/employers/_jobs.scss"

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
      loadingApplicant: false,
      imageUrl: "",
      applicantShortListed: [],
      salary_range: '',
      skill_list: '',
      experiences: '',
      name: '',
      location: '',
      gender: '',
      job_level: '',
      qualifications: '',
      itemsJobLevel: [],
      itemsSkillList: [],
      itemsGender: ['Male', 'Female', 'Others']
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
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios({
        url: "/jobs/expertize-label/",
        method: "get",
        data: {},
        headers,
        baseURL: this.$store.state.apiBase,
      })
          .then((response) => {
            console.log("job label ", response);
            this.itemsJobLevel = response.data.data;
          })

      axios({
        url: "resume/skill/lists/",
        method: "get",
        data: {},
        headers,
        baseURL: this.$store.state.apiBase,
      })
          .then((response) => {
            console.log("job skill list ", response);
            this.itemsSkillList = response.data;
          })
          .catch((error) => {
            console.log("error status code... ", error.response.status);
            if (error.response.status == 401) {
              axios({
                method: "get",
                baseURL: this.$store.state.apiBase,
                url: `users/new-access-token`,
                params: {
                  access_token: this.$cookies.get("accessToken"),
                  ip: this.$store.getters.userIp,
                },
                headers,
              })
                  .then((response) => {
                    console.log("this is refresh token.....", response);
                    this.$cookies.set("accessToken", response.data.access_token);
                    this.getData();
                  })
                  .catch((error) => {
                    this.$awn.alert("Failed!");
                    this.$router.history.push("/signin");
                    console.log(error);
                  })
                  .finally(() => {
                  });
            }
            //   this.$awn.alert("Failed");
          })
          .finally(() => {
            //  this.tableLoading = false;
          });

    },
    searchApplicants() {
      this.loadingApplicant = true
      if ((this.skill_list == '' || this.skill_list == null)
          && (this.salary_range == '' || this.salary_range == null)
          && (this.experience == '' || this.experience == null)
          && (this.name == '' || this.name == null)
          && (this.location == '' || this.experience == null)
          && (this.gender == '' || this.experience == null)
          && (this.job_level == '' || this.job_level == null)
          && (this.qualification == '' || this.qualification == null)
      ) {
        return this.getApplicantList()
      }
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
          limit: this.limit,
          skill_list: this.skill_list,
          salary_range: this.salary_range,
          experience: this.experiences,
          name: this.name,
          location: this.location,
          gender: this.gender,
          job_level: this.job_level,
          qualification: this.qualifications
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
            this.loadingApplicant = false;
            if (this.applicant.length === 0) this.ShowAlertMsg = true;
          });
    },
    getApplicantList() {
      this.loadingApplicant = true
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
            this.loadingApplicant = false;
            if (this.applicant.length === 0) this.ShowAlertMsg = true;
          });
    },
    getApplicantShortList() {
      this.loadingApplicant = true
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
      this.$router.history.push({name: "AddJobs", params: {id: id}});
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
    goToJobDetails(jobId) {
      this.$router.push({name: "JobDetails", params: {id: jobId}});
    },
  },
};
</script>
