<template>
  <div class="applicantShortListed__list">
    <v-card flat class="ja__card pt-0">
      <!--********** Job applied table start **************-->
      <div style="overflow-x: auto !important">
        <table>
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
            <td
                class="text-center"
                style="color: #0d47a1; font-size: 25px"
            >
              No One Applied in this job
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
                      :loading="dialogShowing"
                      @click="showApplicantResume(bio.userId)"
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
                        <span class="mr-2"
                        ><v-icon small>mdi-briefcase</v-icon></span
                        ><span
              >{{ app.total_experice.years }}
                          <span class="font-weight-bold ml-1 mr-1">Years</span>
                          {{ app.total_experice.months }}
                          <span class="font-weight-bold ml-1 mr-1">Month</span>
                          {{ app.total_experice.days }}
                          <span class="font-weight-bold ml-1 mr-1"
                          >Days</span
                          ></span
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
      <v-dialog v-model="dialogShowing" width="900">
        <applicant-resume-modal
            :user-id="userId"
            v-show="dialogShowing"
            :applicantShortListedInfo="applicntInfo"
            :skills="skills"
            :exmas="exams"
            :qualifications="qualification"
            :experiences="experiences"
            :applicantShortListedResume="applicantResume"
            :applicantShortListed-biodata="applicantBiodata"
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
export default {
  name: "ShortListed",
  components: {
    ApplicantResumeModal: () => import("../jobDetails/ApplicantResume"),
  },
  props: {
    applicantResume: Object,
    applicantBiodata: Object,
    skills: Object,
    qualifications: Array,
    experiences: Array,
    applicntInfo: Object,
    exams: Object,
    userId: String,
    dialogShowing: Boolean,
  },
  data: () =>{
    return{
      applicantShortListed: [],
      shortList: 1,
      pageNo: 1,
      jobs:{},
      jobId: '',
      candidateId: '',
      loadingApplicant: true
    }
  },
  created() {
    this.getApplicantList()
  },
  methods: {
    showApplicantResume(candidateId) {
      console.log("User id", candidateId);
      //alert(candidateId)
      this.$store.commit("candidateId_resume", this.candidateId);
      this.dialogShowing = true;
      this.loading = true;
      this.$store
          .dispatch("callApi", {
            url: "resume/" + candidateId,
            method: "get",
            params: { job_id: this.$store.getters.job },
            data: {},
          })
          .then((response) => {
            console.log("Resume...fra", response);
            this.applicantResume = response.data;
            this.applicantBiodata = response.data.biodata;
            this.skills = response.data.skills;
            this.experiences = response.data.experiences;
            this.qualifications = response.data.qualification;
            // this.$store.commit("resume", response.data);
            //
            // console.log(" resume console output... ", this.$store.getters.resume);

            this.candidateId = response.data.applicationInfo.user_id;
            console.log("candidate id", response.data.applicationInfo.user_id)
            // this.shortListed = response.data.applicationInfo

            // console.log("bio", response.data.biodata);
            // console.log("skills", response.data.skills);
            // console.log("experiencess", response.data.experiences);
            // console.log("qualifications", response.data.qualification);
            for (let i = 0; i < this.qualifications.length; i++) {
              this.exams = response.data.qualification[i].exam;
              console.log("examss", this.exams);
            }
            this.applicntInfo = response.data.applicationInfo;
            // console.log("applicants info", response.data.applicationInfo);

            // setTimeout({
            // }, 1000)
            // this.dialog = true
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
            this.$store.commit("job", this.jobId);
            console.log("job id", this.jobId);
            // for (let i = 0; i < this.applicantShortListed.length; i++) {
            //   // console.log("qualification index object", this.applicantShortListed[i]) // returns [Object object]
            //   // console.log("qualification", this.applicantShortListed[i].qualification) // returns undefined
            //   // console.log("adagsgvfgsdff", this.jobAppliers) // returns undefined
            //   // console.log("experience", this.experience) // returns undefined
            //   // console.log("biodata", this.biodata) // returns undefined
            //   // console.log("total exp", this.totalExp) // returns undefined
            //   this.qualification = this.applicantShortListed[i].qualification;
            //   this.biodata = this.applicantShortListed[i].biodata;
            //   for (let z = 0; z < this.biodata.length; z++) {
            //     this.imageUrl = this.biodata[z].photo;
            //     console.log("Image Url", this.imageUrl);
            //   }
            //   this.experience = this.applicantShortListed[i].experiences;
            //   this.jobAppliers = this.applicantShortListed[i].job_appliers;
            //   this.totalExp = this.applicantShortListed[i].total_experice;
            // }
            // for (let j = 0; j < this.jobs.length; j++) {
            //   console.log("Job Responsibilities", this.jobs[j]);
            // }

            // this.jobId =this.postedJobs[3]

            // this.orders.find(({ id }) => id === this.orderId)
            // this.jobId = this.postedJobs.find((job_id) => job_id.id === id);
            // this.job_status = response.data.items.job_status
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
            if (this.postedJobs.length === 0) this.ShowAlertMsg = true;
          });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
  }
}
</script>

