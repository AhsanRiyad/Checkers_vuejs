<template>
  <div class="rd-main-card">
    <div class="default-resume-main-card applicant_resume">
      <div class="top-section d-flex justify-space-between align-center">
        <div class="action_btn">
          <v-btn
            @click.stop="applicantShortListed"
            small
            class="ml-1 mr-1"
            :color="is_shortlisted ? 'success' : 'error'"
            >{{ is_shortlisted ? "Shortlisted" : "Not Shortlisted" }}</v-btn
          >
          <!--           <v-btn small class="ml-1 mr-1" color="primary">Not shortlisted</v-btn>-->
          <v-btn
            @click.stop.prevent="(dialog = true), (dialogShowing = false)"
            small
            class="ml-1 mr-1"
            color="primary"
            >Interview Call</v-btn
          >
          <v-btn
            @click.stop="downloadResume"
            small
            class="ml-1 mr-1"
            color="success"
            >Download Resume</v-btn
          >
        </div>
        <div class="close_btn">
          <v-btn small icon @click.stop.prevent="dialogShowing = false"
            ><v-icon class="grey--text text--darken-4">mdi-close</v-icon></v-btn
          >
        </div>
      </div>
      <!-- section-1 starts -->
      <div class="defaultResume-title">
        <div class="dr-main-text-div">
          <p class="defaultResume-title-text">
            {{ getResume.biodata.full_name }}
          </p>
          <p>Mobile: {{ getResume.biodata.mobile_number }}</p>
          <p>Email: {{ getResume.biodata.contact_email }}</p>
        </div>

        <div class="dr-title-photo">
          <v-avatar size="150">
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
        <div v-html="getResume.biodata.objectives"></div>
      </div>
      <!-- section-2 ends -->

      <!-- section-3 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Description:</p>
        <div v-html="getResume.biodata.career_description"></div>
      </div>
      <!-- section-3 ends -->

      <!-- section-4 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Employement History:</p>

        <p class="years-of-experience">
          Total year of experiences:
          {{ this.R.isNil(getResume.years) ? 0 : getResume.years }}
        </p>
      </div>
      <!-- section-4 ends -->

      <!-- section-6 starts -->
      <div class="dr-academic-certificate">
        <p class="dr-title-all">Work Experiences:</p>

        <div class="dr-academic-c-heading">
          <div class="dr-academic-c-heading-item">
            <p class="table-title-dr">Job Title</p>
          </div>
          <div class="dr-academic-c-heading-item">
            <p class="table-title-dr">Company Name</p>
          </div>
          <div class="dr-academic-c-heading-item">
            <p class="table-title-dr">Company Location</p>
          </div>
          <div class="dr-academic-c-heading-item">
            <p class="table-title-dr">Duration</p>
          </div>
        </div>

        <div class="dr-academic-c-info" v-for="n in getResume.experiences" :key="n.id">
          <div class="dr-academic-c-heading-item">
            <p>{{ n.job_title }}</p>
          </div>
          <div class="dr-academic-c-heading-item">
            <p>{{ n.company_name }}</p>
          </div>
          <div class="dr-academic-c-heading-item">
            <p>{{ n.company_location }}</p>
          </div>
          <div class="dr-academic-c-heading-item">
            <p>{{ n.from_date + " to " + n.to_date }}</p>
          </div>
        </div>
      </div>
      <!-- section-6 ends -->

      <!-- section-5 starts -->
      <div class="dr-academic-qualification">
        <p class="dr-title-all">Academic Qualification:</p>

        <div class="dr-academic-q-heading">
          <div class="dr-academic-q-heading-item">
            <p class="table-title-dr">Title</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p class="table-title-dr">Institution name</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p class="table-title-dr">Field of study</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p class="table-title-dr">End Year</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p class="table-title-dr">Result</p>
          </div>
        </div>

        <div class="dr-academic-q-info" v-for="n in applicantResume.qualification" :key="n.id">
          <div class="dr-academic-q-heading-item">
            <p>{{n.exam.title}}</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p v-text="n.institute"></p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p>{{ n.subject }}</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p>{{ n.end_year }}</p>
          </div>
          <div class="dr-academic-q-heading-item">
            <p>{{ n.result }}</p>
          </div>
        </div>
      </div>
      <!-- section-5 ends -->

      <!-- section-7 starts -->
      <div class="dr-skills">
        <p class="dr-title-all">Skills:</p>
        <p>{{ getResume.skills.name }}</p>
      </div>
      <!-- section-7 ends -->

      <!-- section-8 starts -->
      <div class="appInfo-title">
        <p class="dr-title-all">Application Information:</p>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">Looking For</div>
        <!--        <div class="dr-application-info-2" :key="applicntInfo.id" >: {{ applicntInfo.job_category_title }}</div>-->
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">Available For</div>
        <!--        <div class="dr-application-info-2" v-if="applicntInfo.available_for">: {{ applicntInfo.available_for }}</div>-->
      </div>
      <!-- section-8 ends -->

      <!-- section-9 starts -->
      <div class="appInfo-title">
        <p class="dr-title-all">Personal Details:</p>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">Address</div>
        <div class="dr-application-info-2">
          : {{ getResume.biodata.address }}
        </div>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">City</div>
        <div class="dr-application-info-2">: {{ getResume.biodata.city }}</div>
      </div>

      <!-- section-9 ends -->
    </div>
    <v-dialog v-model="dialog" absolute max-width="400" persistent>
      <div>
        <template>
          <v-card class="mx-auto" style="max-width: 500px">
            <v-toolbar color="deep-purple accent-4" cards dark flat>
              <v-btn icon>
                <v-icon @click.stop.prevent="dialog = false"
                  >mdi-arrow-left</v-icon
                >
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
                color="deep-purple"
                label="Email address"
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
                color="deep-purple"
                label="Interview Message"
                hint="Description must be 160 characters or less"
                rows="4"
              ></v-textarea>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text @click="$refs.form.reset()"> Clear </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :loading="isLoading"
                @click="applicantInterviewCall"
                class="white--text"
                color="deep-purple accent-4"
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
  },
  data() {
    return {
      agreement: false,
      bio:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      dialog: false,
      company_email: "",
      interview_message: "",
      form: false,
      isLoading: false,
      isShortlisted: true,
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
    getResume() {
      return this.$store.getters.resume.payload;
    },
    is_shortlisted() {
      return this.applicantResume.short_listed;
    },
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
            let url = `http://3.17.234.251/jobsresume/resumes/public/${
                response.file
            }?access_token=${this.$cookies.get("accessToken")}`;
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "file.pdf"); //or any other extension
            link.setAttribute("target", "_blank"); //or any other extension
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch(() => {
            this.$awn.alert("Failed! Email/Password doesn't match");
            // this.$awn.alert("Failed");
          })
          .finally(() => {
            this.loading = false;
            //  this.tableLoading = false;
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
          this.isShortlisted = response.short_list;
          this.$awn.success("Updated Successfully!");
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        });
    },
    applicantInterviewCall(event) {
      if (!this.$refs.form.validate()) return;
      if (event) {
        event.preventDefault();
      }
      this.dialogShowing = false;
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
          this.dialog = true;
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
        });
    },
  },
};
</script>
<style>
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
