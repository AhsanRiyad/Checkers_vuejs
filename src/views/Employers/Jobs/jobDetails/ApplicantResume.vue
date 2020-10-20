<template>
  <div class="rd-main-card">
    <div class="default-resume-main-card applicant_resume">
      <div class="top-section d-flex justify-space-between align-center">
        <div class="action_btn">
          <v-btn
            :loading="loadingShortListBtn"
            :disabled="loadingShortListBtn"
            @click.stop="applicantShortListed"
            small
            class="ml-1 mr-1"
            :color="getResume.short_listed ? 'error' : 'success'"
            >{{ getResume.short_listed ? "Remove from shortlist" : "Shortlisted" }}
          </v-btn>
          <!--           <v-btn small class="ml-1 mr-1" color="primary">Not shortlisted</v-btn>-->
          <v-btn
            @click.stop="dialog = true"
            small
            class="ml-1 mr-1"
            color="primary"
            >Interview Call
          </v-btn>
          <v-btn
            :loading="loadingResume"
            :disabled="loadingResume"
            @click.stop="downloadResume"
            small
            class="ml-1 mr-1"
            color="success"
            >Download Resume
          </v-btn>
        </div>
        <div class="close_btn">
          <v-btn small icon @click.stop.prevent="$emit('closeD')">
            <v-icon class="grey--text text--darken-4">mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
      <!-- section-1 starts -->
      <div class="defaultResume-title">
        <div class="dr-main-text-div mt-5">
          <p class="defaultResume-title-text">
            {{ getResume.biodata.full_name }}
          </p>
          <!--          <p>Mobile: {{ getResume.biodata.mobile_number }}</p>-->
          <p>Email: {{ getResume.biodata.contact_email }}</p>
        </div>

        <div class="dr-title-photo mt-5">
          <v-avatar class="applicant_img">
            <img
              :src="this.$store.getters.imageUrl + getResume.biodata.photo"
              alt="John"
            />
          </v-avatar>
        </div>
      </div>
      <!-- section-1 ends -->

      <!-- section-2 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Objective:</p>
        <div class="resume_gap" v-html="getResume.biodata.objectives"></div>
      </div>
      <!-- section-2 ends -->

      <!-- section-3 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Description:</p>
        <div
          class="resume_gap"
          v-html="getResume.biodata.career_description"
        ></div>
      </div>
      <!-- section-3 ends -->

      <!-- section-4 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Employement History:</p>

        <p class="resume_gap years-of-experience">
          Total year of experiences:
          <span class="font-weight-regular">{{ getExperience }}</span>
        </p>
      </div>
      <!-- section-4 ends -->

      <!-- section-6 starts -->
      <div class="dr-academic-certificate">
        <p class="dr-title-all">Work Experiences:</p>

        <!--        <div class="dr-academic-c-heading">-->
        <!--          <div class="dr-academic-c-heading-item">-->
        <!--            <p class="table-title-dr">Job Title</p>-->
        <!--          </div>-->
        <!--          <div class="dr-academic-c-heading-item">-->
        <!--            <p class="table-title-dr">Company Name</p>-->
        <!--          </div>-->
        <!--          <div class="dr-academic-c-heading-item">-->
        <!--            <p class="table-title-dr">Company Location</p>-->
        <!--          </div>-->
        <!--          <div class="dr-academic-c-heading-item">-->
        <!--            <p class="table-title-dr">Duration</p>-->
        <!--          </div>-->
        <!--        </div>-->

        <div class="work_exp" v-for="n in getResume.experiences" :key="n.id">
          <div class="exp_list">
            <p><b>Designation </b> : {{ n.job_title }}</p>
            <p><b> Compnay Name </b> : {{ n.company_name }}</p>
            <p><b> Compnay Location </b> : {{ n.company_location }}</p>
            <p><b> Duration </b> : {{ n.from_date + " to " + n.to_date }}</p>
            <p>
              <b> Job Description </b> :
              <span v-html="n.job_description"></span>
            </p>
          </div>
        </div>
      </div>
      <!-- section-6 ends -->

      <!-- section-5 starts -->
      <div class="dr-academic-qualification mt-0">
        <p class="dr-title-all mt-0">Academic Qualification:</p>
        <table class="resume_table resume_gap">
          <thead>
            <tr>
              <th>Title</th>
              <th style="width: 45%">Institution name</th>
              <th>Field of study</th>
              <th>End Year</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in getResume.qualification" :key="n.id">
              <td>
                <p>{{ n.exam.title }}</p>
              </td>
              <td>
                <p v-text="n.institute"></p>
              </td>
              <td>
                <p>{{ n.subject }}</p>
              </td>
              <td>
                <p>{{ n.end_year }}</p>
              </td>
              <td class="action">
                <p>{{ n.result }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- section-5 ends -->

      <!-- section-7 starts -->
      <div class="dr-skills">
        <p class="dr-title-all">Skills:</p>
        <p class="resume_gap">{{ getResume.skills.name }}</p>
      </div>
      <!-- section-7 ends -->

      <!-- section-8 starts -->
      <div class="appInfo-title">
        <p class="dr-title-all">Application Information:</p>
      </div>

      <div class="resume_gap">
        <div class="dr-application-info">
          <div class="dr-application-info-1">Looking For</div>
          <div class="dr-application-info-2 text-capitalize">
            : {{ getResume.applicationInfo.job_level }}
          </div>
        </div>

        <div class="dr-application-info">
          <div class="dr-application-info-1">Available For</div>
          <div class="dr-application-info-2">
            : {{ getResume.applicationInfo.available_for }}
          </div>
        </div>
      </div>
      <!-- section-8 ends -->

      <!-- section-9 starts -->
      <div class="appInfo-title">
        <p class="dr-title-all">Personal Details:</p>
      </div>

      <div class="dr-application-info resume_gap">
        <div class="dr-application-info-1">Address</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.address }}
        </div>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">City</div>
        <div class="dr-application-info-2">: {{ getResume.biodata.city }}</div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Zip/Post Code</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.zip_post_code }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Country</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.country_id.country_name }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Nationality</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.nationality }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Date Of Birth</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.date_of_birth }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Gender</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.gender }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">NID/ Passpot Number</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.identity_number }}
        </div>
      </div>

      <!-- section-9 ends -->
    </div>
    <v-dialog v-model="dialog" absolute max-width="400" persistent>
      <div>
        <template>
          <v-card class="mx-auto" style="max-width: 500px">
            <v-toolbar color="#365899" cards dark flat>
              <v-btn icon>
                <v-icon @click.stop.prevent="dialog = false"
                  >mdi-arrow-left
                </v-icon>
              </v-btn>
              <v-card-title class="title font-weight-regular">
                Interview Call Info
              </v-card-title>
            </v-toolbar>
            <v-form ref="form" class="pa-4 pt-6">
              <v-text-field
                v-model="company_email"
                :rules="[rules.email]"
                filled
                color="#365899"
                label="Enter Email to get candidate resume"
                type="email"
              ></v-text-field>
              <v-textarea
                v-model="interview_message"
                auto-grow
                filled
                :rules="[
                  (v) =>
                    (v || '').length <= 160 ||
                    'Description must be 160 characters or less',
                  rules.required,
                ]"
                color="#365899"
                label="Interview Message"
                hint="Description must be 160 characters or less"
                rows="4"
              ></v-textarea>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text @click="$refs.form.reset()"> Clear</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :loading="loading"
                :disabled="loading"
                @click="applicantInterviewCall"
                class="white--text"
                color="#365899"
                depressed
              >
                interview call
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import axios from "axios";

export default {
  name: "ApplicantResume",
  // components: {
  //   InterviewCallModal: () => import("../../../../components/Modal"),
  // },
  props: {
    applicantResume: Object,
    applicantBiodata: Object,
    skills: Object,
    experiences: Array,
    applicntInfo: Object,
    exams: Object,
    userId: String,
    dialogShowing: Boolean,
    dialogShow: Boolean,
  },
  data() {
    return {
      agreement: false,
      bio:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      dialog: false,
      company_email: "",
      interview_message:
        "Dear Candidate,\n" +
        "\n" +
        "You are invited to attend an interview session with us on 3rd July at 5:00 pm.",
      form: false,
      loading: false,
      loadingResume: false,
      loadingShortListBtn: false,
      // isShortlisted: true,
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
        required: (v) =>
          !!v ||
          "This field is required & Description must be 160 characters or less",
      },
    };
  },
  mounted() {
    console.log("job id in app resume ", this.$store.getters.job);
    console.log("applicant biodata.... ", this.applicantBiodata);
    this.appResume();
  },
  updated() {
    this.$nextTick(() => {
      console.log("applicant biodata.... ", this.applicantResume);
      console.log("resume applicant ", this.$store.getters.resume.payload);
      console.log("User id... applicant...reusme...", this.userId);
    });
  },
  computed: {
    getExperience() {
      let years = "0";
      if (this.getResume.userTotalExperiences.years > 1) {
        years = this.getResume.userTotalExperiences.years + " " + "years ";
      } else {
        years = this.getResume.userTotalExperiences.years + " " + "year ";
      }
      let months = "0";
      if (this.getResume.userTotalExperiences.months > 1) {
        months = this.getResume.userTotalExperiences.months + " " + "months ";
      } else {
        months = this.getResume.userTotalExperiences.months + " " + "month ";
      }
      return years + months;
    },
    getResume() {
      return this.$store.getters.resume.payload;
    },
    // is_shortlisted() {
    //   return this.applicantResume.short_listed;
    // },
    dialogVisible: {
      get: function () {
        return this.dialogShowing;
      },
      set: function (value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    downloadResume() {
      this.loadingResume = true;
      console.log("download resume");
      //file download
      this.$store
        .dispatch("callApi", {
          url: `resume/applicant/${this.userId}/${this.$store.getters.job}`,
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("login image", response.file);
          let fn = response.file;
          this.loading = false;
          let url = `http://3.17.234.251/jobsresume/resumes/public/${
            response.file
          }?access_token=${this.$cookies.get("accessToken")}`;
          // saveAs(url, "resume.pdf");

          /* fetch(url, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + this.$cookies.get("accessToken"),
            },
          }).then(function (t) {
            return t.blob().then((b) => {
              var a = document.createElement("a");
              a.href = URL.createObjectURL(b);
              a.setAttribute("download", "resume.pdf");
              a.click();
            });
          }); */
          // this.$refs.form.reset();
          // saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
          /* const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "file.pdf"); //or any other extension
          link.setAttribute("target", "_blank"); //or any other extension
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); */
          // delete link;

          axios({
            url,
            method: "GET",
            responseType: "blob",
          }).then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement("a");

            fileLink.href = fileURL;
            var lastIndexOfSlash = fn.lastIndexOf("/");
            fileLink.setAttribute(
              "download",
              fn.substring(lastIndexOfSlash + 1, fn.length)
            );
            document.body.appendChild(fileLink);

            fileLink.click();
          });
        })
        .catch(() => {
          this.$awn.alert("Failed! Email/Password doesn't match");
          // this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loadingResume = false;
        });
    },
    appResume() {
      console.log("User id... applicant...reusme...", this.userId);
      console.log("Job id", this.$store.getters.job);
      // this.dialogShowing = true;
      // this.loading = true;
      this.$store
        .dispatch("callApi", {
          url: "resume/" + this.userId,
          method: "get",
          params: { job_id: this.$store.getters.job },
          data: {},
        })
        .then((response) => {
          console.log("Resume... applicant resume...", response);
        })
        .catch((error) => {
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          // this.loading = false;
        });
    },
    applicantShortListed(event) {
      this.loadingShortListBtn = true;
      if (event) {
        event.preventDefault();
      }
      // this.$store.commit("jobId");
      // let appliedJobId = this.$store.state.jobId.id
      console.log("jobssssss ideeeeeeeee", this.$store.state);
      this.$store
        .dispatch("callApi", {
          url: `jobs/${this.$store.getters.job}/${this.userId}/shortlist`,
          method: "put",
          data: {},
        })
        .then((response) => {
          console.log("applicant shortlisted response..", response);
          // this.companyId = response.company.id;

          let n = { ...this.getResume, short_listed: response.short_list };
          this.$store.commit("resume", n);
          console.log("short listed response .... ", n);

          // this.isShortlisted = response.short_list;
          this.$awn.success("Updated Successfully!");
          eventBus.$emit("updateApplicantList");
          this.loadingShortListBtn = false;
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loadingShortListBtn = false;
        });
    },
    applicantInterviewCall(event) {
      this.loading = true;
      if (!this.$refs.form.validate()) return;
      if (event) {
        event.preventDefault();
      }

      this.$store
        .dispatch("callApi", {
          url: `jobs/${this.$store.getters.job}/${this.userId}/interview-call`,
          method: "put",
          data: {
            company_email: this.company_email,
            interview_message: this.interview_message,
          },
        })
        .then((response) => {
          console.log("applicant shortlisted response..", response);
          // this.companyId = response.company.id;
          this.$awn.success("Updated Successfully!");
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          this.dialog = false;
          this.loading = false;
        });
    },
  },
};
</script>
<style lang="scss">
.applicant_img {
  height: 130px !important;
  min-width: 130px !important;
  width: 130px !important;
  @media (max-width: 540px) {
    height: 60px !important;
    min-width: 60px !important;
    width: 60px !important;
  }
}

.top-section {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff !important;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  padding: 20px;
  width: 100%;
  margin: 0 auto;
}

.applicant_resume {
  width: 100% !important;
  margin: 0 auto;
}
</style>
