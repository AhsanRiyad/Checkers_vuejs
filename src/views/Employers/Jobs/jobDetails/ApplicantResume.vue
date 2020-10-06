<template>
  <div class="rd-main-card">
    <div class="default-resume-main-card applicant_resume">
      <div class="top-section d-flex justify-space-between align-center">
        <div class="action_btn">
          <v-btn
            @click.stop="applicantShortListed"
            small
            class="ml-1 mr-1"
            color="primary"
            >shortlisted</v-btn
          >
          <v-btn small class="ml-1 mr-1" color="primary">Not shortlisted</v-btn>
          <v-btn
            @click="applicantInterviewCall"
            small
            class="ml-1 mr-1"
            color="primary"
            >Interview Call</v-btn
          >
        </div>
        <div class="close_btn">
          <v-btn icon @click="dialogShowing = false"
            ><v-icon class="grey--text text--darken-4">mdi-close</v-icon></v-btn
          >
        </div>
      </div>
      <!-- section-1 starts -->
      <div class="defaultResume-title">
        <div class="dr-main-text-div">
          <p class="defaultResume-title-text">
            {{ applicantBiodata.full_name }}
          </p>
          <p>Mobile: {{ applicantBiodata.mobile_number }}</p>
          <p>Email: {{ applicantBiodata.contact_email }}</p>
        </div>

        <div class="dr-title-photo">
          <v-avatar size="150">
            <img
              :src="this.$store.getters.imageUrl + applicantBiodata.photo"
              alt="John"
            />
          </v-avatar>
        </div>
      </div>
      <!-- section-1 ends -->

      <!-- section-2 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Objective:</p>
        <div v-html="applicantBiodata.objectives"></div>
      </div>
      <!-- section-2 ends -->

      <!-- section-3 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Description:</p>
        <div v-html="applicantBiodata.career_description"></div>
      </div>
      <!-- section-3 ends -->

      <!-- section-4 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Employement History:</p>

        <p class="years-of-experience">
          Total year of experiences: {{ applicantResume.years }}
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

        <div class="dr-academic-c-info" v-for="n in experiences" :key="n.id">
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

        <div class="dr-academic-q-info" v-for="n in qualifications" :key="n.id">
          <div class="dr-academic-q-heading-item">
            <!--            <p v-if="exams">{{exams.title}}</p>-->
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
        <p>{{ skills.name }}</p>
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
          : {{ applicantBiodata.address }}
        </div>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">City</div>
        <div class="dr-application-info-2">: {{ applicantBiodata.city }}</div>
      </div>

      <!-- section-9 ends -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicantResume",
  props: {
    applicantResume: Object,
    applicantBiodata: Object,
    skills: Object,
    qualifications: Array,
    experiences: Array,
    applicntInfo: Object,
    userId: String,
    jobId: String,
    exams: Object,
    dialogShowing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
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
  mounted() {
    console.log("job id in app resume ", this.$store.getters.job);
  },
  methods: {
    applicantShortListed(event) {
      if (event) {
        event.preventDefault();
      }
      this.$store
        .dispatch("callApi", {
          url: `jobs/${this.$store.getters.job}/${this.userId}/shortlist`,
          method: "put",
          data: {},
        })
        .then((response) => {
          console.log("applicant shortlisted response..", response);
          // this.companyId = response.company.id;
          this.$awn.success("Updated Successfully!");
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        });
    },
    applicantInterviewCall(event) {
      if (event) {
        event.preventDefault();
      }
      this.$store
        .dispatch("callApi", {
          url: `jobs/${this.$store.getters.job}/${this.userId}/interview-call`,
          method: "put",
          data: {},
        })
        .then((response) => {
          console.log("applicant shortlisted response..", response);
          // this.companyId = response.company.id;
          this.$awn.success("Updated Successfully!");
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
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
