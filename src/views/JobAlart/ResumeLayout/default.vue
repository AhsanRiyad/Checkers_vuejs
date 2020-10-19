<template>
  <div class="rd-main-card">
    <div class="default-resume-main-card">
      <!-- section-1 starts -->
      <div class="defaultResume-title">
        <div class="dr-main-text-div">
          <v-btn
            @click.stop="downloadResume"
            :disabled="loading"
            :loading="loading"
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
          <v-avatar size="130">
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
        <div
          class="resume_gap"
          v-html="this.resume.payload.biodata.objectives"
        ></div>
      </div>
      <!-- section-2 ends -->

      <!-- section-3 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Career Description:</p>
        <div
          class="resume_gap"
          v-html="this.resume.payload.biodata.career_description"
        ></div>
      </div>
      <!-- section-3 ends -->

      <!-- section-4 starts -->
      <div class="dr-career-objective">
        <p class="dr-title-all">Employement History:</p>

        <p class="resume_gap years-of-experience">
          Total year of experiences: {{ getExperience }}
        </p>
      </div>
      <!-- section-4 ends -->

      <!-- section-6 starts -->
      <div class="dr-academic-certificate">
        <p class="dr-title-all">Work Experiences:</p>

        <!--     <div class="dr-academic-c-heading">
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
        </div> -->

        <div
          class="work_exp"
          v-for="n in this.resume.payload.experiences"
          :key="n.id"
        >
          <div class="exp_list">
            <p><b>Designation </b> : {{ n.job_title }}</p>
            <p><b> Compnay Name </b> : {{ n.company_name }}</p>
            <p><b> Compnay Location </b> : {{ n.company_location }}</p>
            <p>
              <b> Duration </b> :
              {{
                n.from_date + " to " + R.isNil(n.to_date)
                  ? "Currently Working Here"
                  : n.to_date
              }}
            </p>
            <p>
              <b> Job Description </b> :
              <span v-html="n.job_description"></span>
            </p>
          </div>
        </div>
      </div>
      <!-- section-6 ends -->

      <!-- section-5 starts -->
      <div class="dr-academic-qualification">
        <p class="dr-title-all mt-0">Academic Qualification:</p>
        <div style="overflow-x: scroll;">
          <table class="resume_table resume_gap">
            <thead>
            <tr>
              <th>Title</th>
              <th style="width: 45%">Institution name</th>
              <th>Field of study</th>
              <th class="text-center">End Year</th>
              <th>Result</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="n in this.resume.payload.qualification" :key="n.id">
              <td><p>{{ n.exam.title }}</p></td>
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
      </div>
      <!-- section-5 ends -->

      <!-- section-7 starts -->
      <div class="dr-skills">
        <p class="dr-title-all">Skills:</p>
        <p class="resume_gap">{{ this.resume.payload.skills.name }}</p>
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
            : {{ this.resume.payload.applicationInfo.job_level }}
          </div>
        </div>

        <div class="dr-application-info">
          <div class="dr-application-info-1">Avalable For</div>
          <div class="dr-application-info-2">
            : {{ this.resume.payload.applicationInfo.available_for }}
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
          : {{ this.resume.payload.biodata.address }}
        </div>
      </div>

      <div class="dr-application-info">
        <div class="dr-application-info-1">City</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.city }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Zip/Post Code</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.zip_post_code }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Country</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.country_id.country_name }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Nationality</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.nationality }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Date Of Birth</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.date_of_birth }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">Gender</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.gender }}
        </div>
      </div>
      <div class="dr-application-info">
        <div class="dr-application-info-1">NID/ Passpot Number</div>
        <div class="dr-application-info-2">
          : {{ this.resume.payload.biodata.identity_number }}
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
    return {
      loading: false
    };
  },
  methods: {
    downloadResume() {
      this.loading = true
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
          this.loading = false
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
    getExperience() {
     /*  let years = "0",
        months = "0";
      if (this.resume.payload.userTotalExperiences.years > 1) {
        years = this.resume.payload.userTotalExperiences.years + " " + "years ";
      } else {
        years = this.resume.payload.userTotalExperiences.years + " " + "year ";
      }

      if (this.resume.payload.userTotalExperiences.months > 1) {
        years = this.resume.payload.userTotalExperiences.months + " months";
      } else {
        years = this.resume.payload.userTotalExperiences.months + " month";
      } */
      let years = "0";
      if (this.resume.payload.userTotalExperiences.years > 1) {
        years = this.resume.payload.userTotalExperiences.years + " " + "years ";
      } else {
        years = this.resume.payload.userTotalExperiences.years + " " + "year ";
      }
      let months = "0";
      if (this.resume.payload.userTotalExperiences.months > 1) {
        months = this.resume.payload.userTotalExperiences.months + " " + "months ";
      } else {
        months = this.resume.payload.userTotalExperiences.months + " " + "month ";
      }
      // return years + " " + months;
      return years + months;
    },
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
