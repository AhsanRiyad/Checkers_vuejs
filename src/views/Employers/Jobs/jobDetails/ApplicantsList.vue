<template>
  <div class="applicant__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job applied table start **************-->
            <div style="overflow-x: auto !important;">
              <table>
                <tbody>
                <v-dialog v-model="loadingApplicant" hide-overlay persistent width="300">
                  <v-card color="primary" dark>
                    <v-card-text>
                      Loading Data...
                      <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <tr v-if="!applicant.length">
                  <td class="text-center" style="color: #0d47a1; font-size: 25px">No One Applied in this job</td>
                </tr>
                <tr v-for="app in applicant" :key="app.id">
                  <td class="text-center"><p class="font-weight-bold"></p></td>
                  <td style="width: 10%" v-for="photo in app.biodata" :key="photo.id">
                    <v-avatar size="85">
                      <img :src=" $store.getters.imageUrl + photo.photo"
                           :alt="photo.full_name">
                    </v-avatar>
                  </td>
                  <td>
                    <div v-for="bio in app.biodata" :key="bio.id">
                      <p class="mb-4">
                        <a
                            :loading="dialogShowing" @click="showApplicantResume(bio.userId)"
                            style="font-size: 20px; text-transform: capitalize">{{
                            bio.full_name
                          }} </a><span class="age_outline font-weight-bold"> Age: {{ bio.age }}</span></p>
                      <p>{{ bio.address }}</p>
                    </div>
                    <div v-for="qua in app.qualification" :key="qua.id">
                      <p>{{ qua.institute }}</p>
                      <p><span>{{ qua.exam_title }}</span> in <span>{{ qua.subject }}</span></p>
                    </div>
                  </td>
                  <td>
                    <div v-for="(ex) in app.experiences" :key="ex.id">
                      <p class="font-weight-bold">{{ ex.company_name }}</p>
                      <p>{{ ex.job_title }}</p>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <p><span class="mr-2"><v-icon small>mdi-briefcase</v-icon></span><span>{{
                        app.total_experice.years
                      }} <span class="font-weight-bold ml-1 mr-1">Years</span> {{ app.total_experice.months }} <span
                          class="font-weight-bold ml-1 mr-1">Month</span> {{ app.total_experice.days }} <span
                          class="font-weight-bold ml-1 mr-1">Days</span></span></p>
                    <div v-for="apear in app.job_appliers" :key="apear.id">
                      <p><span class="mr-2">{{ apear.currency_code }}</span>{{ apear.expected_salary }}</p>
                      <p><span class="mr-2 font-weight-bold">Applied On: </span><span>{{
                          getHumanDate(apear.created_at)
                        }}</span></p>
                    </div>
                  </td>
                  <td class="action text-center">
                    <v-btn class="interactn c-grey" color="success" icon>
                      <i class="material-icons">check</i>
                    </v-btn>
                    <v-btn class="interactn  mr-2 ml-1 mr-1 c-green" color="error" icon>
                      <i class="material-icons">close</i>
                    </v-btn>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!--********** Job applied table end **************-->
            <!-- job apply modal starts-->
            <v-dialog v-model="dialogShowing" width="900">
              <applicant-resume-modal  v-show="dialogShowing" :applicantInfo="applicntInfo" :skills="skills" :exmas="exams" :qualifications="qualification" :experiences="experiences" :applicantResume="applicantsResume"
                                      :applicant-biodata="applicantBiodata"/>
            </v-dialog>

            <!-- job apply modal ends-->
            <!--********** pagination start **************-->
            <div class="pagination">
              <ul class="d-flex pg-list">
                <li>
                  <v-btn class="pg-btn" small text>
                    <v-icon>mdi-chevron-double-left</v-icon>
                  </v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>1</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>2</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>3</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>..124</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>
                    <v-icon>mdi-chevron-double-right</v-icon>
                  </v-btn>
                </li>
              </ul>
            </div>
            <!--********** pagination end **************-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../../../../sass/employers/_jobs.scss"
import "../../../../sass/job-alart/ResumeLayout/_default.scss";
import moment from "moment";

export default {
  name: "ApplicantsList",
  components: {
    ApplicantResumeModal: () => import("../jobDetails/ApplicantResume"),
  },
  props: {
    applicant: Array,
    experience: Array,
    biodata: Array,
    qualification: Array,
    jobAppliers: Array,
    totalExp: Object,
    length: Number,
    pageNo: Number,
    // jobId: String,
    jobResponsibilities: Array,
    loadingApplicant: Boolean,
  },
  data: () => {
    return {
      loading: false,
      dialogShowing: false,
      applicantsResume: {},
      experiences: [],
      skills: {},
      qualifications: [],
      userId: '',
      applicantBiodata: {},
      exams: {},
      applicntInfo: {}
    }
  },
  created() {
    console.log('jobsssssssssssssssssssssss id ', this.jobId)
  },
  methods: {
    getHumanDate: function (date) {
      return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
    },
    showApplicantResume(userId) {
      console.log("User id", userId)
      this.dialogShowing = true
      this.loading = true
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      this.$store
          .dispatch("callApi", {
            url: "resume/" + userId,
            method: "get",
            headers,
            data: {},
          })
          .then((response) => {
            console.log("Resume", response);
            this.applicantResume = response.data;
            this.applicantBiodata = response.data.biodata;
            this.skills = response.data.skills
            this.experiences = response.data.experiences
            this.qualifications = response.data.qualification
            this.userId = response.data.applicationInfo.user_id

            console.log("bio", response.data.biodata)
            console.log("skills", response.data.skills)
            console.log("experiencess", response.data.experiences)
            console.log("qualifications", response.data.qualification)
            for(let i = 0; i<this.qualifications.length; i++){
              this.exams = response.data.qualification[i].exam
              console.log("examss", this.exams)
            }
            this.applicntInfo = response.data.applicationInfo
            console.log("applicants info", response.data.applicationInfo)

            // setTimeout({
            // }, 1000)
            // this.dialog = true
          })
          .catch((error) => {
            this.$awn.alert("Failed");
            console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
          })
          .finally(() => {
            this.loading = false

          });
    },

  }
}
</script>

