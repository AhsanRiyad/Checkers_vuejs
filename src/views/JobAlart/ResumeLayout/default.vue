<template>
  <div class="rd-main-card">
    <div class="default-resume-main-card">
      <!-- section-1 starts -->
      <div class="defaultResume-title">
        <div class="dr-main-text-div">
          <v-btn
            @click.stop="downloadResume"
            small
            color="success"
            style="margin-bottom: 20px"
            >Download</v-btn
          >
          <p class="defaultResume-title-text">
            {{ this.resume.payload.biodata.full_name }}
          </p>
          <p>Mobile: {{ this.resume.payload.biodata.mobile_number }}</p>
          <p>Email: {{ this.resume.payload.biodata.contact_email }}</p>
        </div>

        <div class="dr-title-photo">
          <v-avatar size="150">
            <img
              :src="
                this.$store.getters.imageUrl + this.resume.payload.biodata.photo
              "
              alt="John"
            />
          </v-avatar>
        </div>
      </div>
      <!-- section-1 ends -->

      <!-- section-2 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Objective:</p>
        <div v-html="this.resume.payload.biodata.objectives"></div>
      </div>
      <!-- section-2 ends -->

      <!-- section-3 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Description:</p>
        <div v-html="this.resume.payload.biodata.career_description"></div>
      </div>
      <!-- section-3 ends -->

      <!-- section-4 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Employement History:</p>

        <p class="years-of-experience">
          Total year of experiences:
          {{ this.resume.payload.userTotalExperiences.years }} Year(s) {{ this.resume.payload.userTotalExperiences.months }} Month(s) {{ this.resume.payload.userTotalExperiences.days }} Day(s)
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

        <div
          class="dr-academic-c-info"
          v-for="n in this.resume.payload.experiences"
          :key="n.id"
        >
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

        <div
          class="dr-academic-q-info"
          v-for="n in this.resume.payload.qualification"
          :key="n.id"
        >
          <div class="dr-academic-q-heading-item">
            <p v-text="n.exam.title"></p>
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
        <p>{{ this.resume.payload.skills.name }}</p>
      </div>
      <!-- section-7 ends -->

      <!-- section-8 starts -->
      <div class="appInfo-title">
        <p class="dr-title-all">Application Information:</p>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">Looking For</div>
        <div class="dr-application-info-2 text-capitalize">
          : {{ this.resume.payload.applicationInfo.job_level }}
        </div>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">Avalable For</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.applicationInfo.available_for }}
        </div>
      </div>
      <!-- section-8 ends -->

      <!-- section-9 starts -->
      <div class="appInfo-title">
        <p class="dr-title-all">Personal Details:</p>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">Address</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.address }}
        </div>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">City</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.city }}
        </div>
      </div>

      <!-- section-9 ends -->
    </div>
  </div>
</template>

<script>
import "../../../sass/job-alart/ResumeLayout/_default.scss";
// import { saveAs } from "file-saver";
export default {
  name: "DefaultResume",
  data() {
    return {};
  },
  methods: {
    downloadResume() {
      console.log("download resume");
      //file download
      this.$store
        .dispatch("callApi", {
          url: `resume/applicant/${this.resume.payload.applicationInfo.user_id}`,
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("login image", response.file);
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
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "file.pdf"); //or any other extension
          link.setAttribute("target", "_blank"); //or any other extension
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // delete link;

          // window.open(url, "_blank");
          //download/openf file in new tab
          /*           let url = `http://3.17.234.251/jobsresume/resumes/public/${
            response.file
          }?access_token=${this.$cookies.get("accessToken")}`;
          let redirectWindow = window.open(url, "_blank");
          redirectWindow.location; */
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
  },
  computed: {
    resume() {
      return this.$store.getters.resume;
    },
  },
  mounted() {
    console.log(
      "resume default ..... in the design",
      // this.resume.payload.applicationInfo,
        this.resume.payload.userTotalExperiences
    );
  },
};
</script>
