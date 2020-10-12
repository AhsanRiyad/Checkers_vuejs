<template>
  <div class="applicantShortListed__list">
    <v-card flat class="ja__card pt-0">
      <!--********** Job applied table start **************-->
      <div style="overflow-x: auto !important">
        <table class="ja_table">
          <tbody>
            <v-dialog
              v-model="loadingApplicant"
              hide-overlay
              persistent
              width="300"
            >
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
            <tr v-if="!applicantShortListed.length">
              <td class="text-center" style="color: #0d47a1; font-size: 25px">
                No one is selected on this job
              </td>
            </tr>
            <tr v-for="app in applicantShortListed" :key="app.id">
              <td class="text-center">
                <p class="font-weight-bold"></p>
              </td>
              <td
                style="width: 10%"
                v-for="photo in app.biodata"
                :key="photo.id"
              >
                <v-avatar size="85">
                  <img
                    :src="$store.getters.imageUrl + photo.photo"
                    :alt="photo.full_name"
                  />
                </v-avatar>
              </td>
              <td>
                <div v-for="bio in app.biodata" :key="bio.id">
                  <p class="mb-4">
                    <a
                      @click.stop="() => showApplicantResume(bio.userId)"
                      style="font-size: 20px; text-transform: capitalize"
                      >{{ bio.full_name }} </a
                    ><span class="age_outline font-weight-bold">
                      Age: {{ bio.age }}</span
                    >
                  </p>
                  <p>{{ bio.address }}</p>
                </div>
                <div v-for="qua in app.qualification" :key="qua.id">
                  <p>{{ qua.institute }}</p>
                  <p>
                    <span>{{ qua.exam_title }}</span> in
                    <span>{{ qua.subject }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div v-for="ex in app.experiences" :key="ex.id">
                  <p class="font-weight-bold">{{ ex.company_name }}</p>
                  <p>{{ ex.job_title }}</p>
                </div>
              </td>
              <td></td>
              <td>
                <p>
                  <span class="mr-2"><v-icon small>mdi-briefcase</v-icon></span
                  ><span
                    >{{ app.total_experice.years }}
                    <span class="font-weight-bold ml-1 mr-1">Years</span>
                    {{ app.total_experice.months }}
                    <span class="font-weight-bold ml-1 mr-1">Month</span>
                    {{ app.total_experice.days }}
                    <span class="font-weight-bold ml-1 mr-1">Days</span></span
                  >
                </p>
                <div v-for="apear in app.job_appliers" :key="apear.id">
                  <p>
                    <span class="mr-2">{{ apear.currency_code }}</span
                    >{{ apear.expected_salary }}
                  </p>
                  <p>
                    <span class="mr-2 font-weight-bold">Applied On: </span
                    ><span>{{ getHumanDate(apear.created_at) }}</span>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--********** Job applied table end **************-->
      <!-- job apply modal starts-->
      <v-dialog v-model="dialogShow" width="900">
        <applicant-resume-modal
          @closeD="dialogShow = false"
          :user-id="userId"
          :applicantShortListedResume="applicantShortListedResume"
        />
      </v-dialog>

      <!-- job apply modal ends-->
      <!--********** pagination start **************-->
      <!--      <div class="pagination">-->
      <!--        <ul class="d-flex pg-list">-->
      <!--          <li>-->
      <!--            <v-btn class="pg-btn" small text>-->
      <!--              <v-icon>mdi-chevron-double-left</v-icon>-->
      <!--            </v-btn>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <v-btn class="pg-btn" small text>1</v-btn>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <v-btn class="pg-btn" small text>2</v-btn>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <v-btn class="pg-btn" small text>3</v-btn>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <v-btn class="pg-btn" small text>..124</v-btn>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <v-btn class="pg-btn" small text>-->
      <!--              <v-icon>mdi-chevron-double-right</v-icon>-->
      <!--            </v-btn>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
      <!--********** pagination end **************-->
    </v-card>
  </div>
</template>

<script>
import "../../../../sass/employers/_jobs.scss";
import "../../../../sass/job-alart/ResumeLayout/_default.scss";
import axios from "axios";
import moment from "moment";
import { eventBus } from "@/main";
export default {
  name: "ShortListed",
  components: {
    ApplicantResumeModal: () => import("../jobDetails/ApplicantResume"),
  },
  props: {},
  data: () => {
    return {
      applicantShortListed: [],
      applicantShortListedResume: {},
      shortList: 1,
      pageNo: 1,
      jobs: {},
      jobId: "",
      userId: "",
      loadingApplicant: true,
      dialogShow: false,
    };
  },
  created() {
    this.getApplicantList();
    eventBus.$on("updateApplicantList", () => {
      this.getApplicantList();
    });
  },
  mounted() {
    console.log("job id in app resume ", this.$store.getters.job);
  },
  methods: {
    showApplicantResume(userId) {
      console.log("User id... farzana", userId);
      this.$store.commit("userId_resume", userId);
      this.userId = userId;
      // this.$store.commit("userId_resume", this.userId);
      this.loading = true;
      this.$store
        .dispatch("callApi", {
          url: "resume/" + userId,
          method: "get",
          params: { job_id: this.$store.getters.job },
          data: {},
        })
        .then((response) => {
          console.log("Resume...fra", response);
          this.applicantShortListedResume = response.data;
          this.$store.commit("resume", response.data);
          // this.userId = response.data.applicationInfo.user_id;
          console.log("candidate id", response.data.applicationInfo.user_id);
          this.dialogShow = true;
        })
        .catch((error) => {
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getApplicantList() {
      //alert(this.shortList)
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
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
  },
};
</script>

