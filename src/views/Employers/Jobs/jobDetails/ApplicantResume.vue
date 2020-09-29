<template>
  <div class="rd-main-card">
    {{biodata}}
<!--    <div class="default-resume-main-card" v-if="biodata">-->
<!--      &lt;!&ndash; section-1 starts &ndash;&gt;-->
<!--      <div class="defaultResume-title">-->
<!--        <div class="dr-main-text-div">-->
<!--          <p class="defaultResume-title-text">{{ biodata.full_name }}</p>-->
<!--          <p>Mobile: {{ biodata.mobile_number }}</p>-->
<!--          <p>Email: {{ biodata.contact_email }}</p>-->
<!--        </div>-->

<!--        <div class="dr-title-photo">-->
<!--          <v-avatar size="150">-->
<!--            <img-->
<!--                :src=" this.$store.getters.imageUrl + biodata.photo"-->
<!--                alt="John"-->
<!--            />-->
<!--          </v-avatar>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-1 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-2 starts &ndash;&gt;-->
<!--      <div class="dr-career-objective">-->
<!--        <p class="dr-title-all">Career Objective:</p>-->
<!--        <div v-html="biodata.objectives"></div>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-2 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-3 starts &ndash;&gt;-->
<!--      <div class="dr-career-objective">-->
<!--        <p class="dr-title-all">Career Description:</p>-->
<!--        <div v-html="biodata.career_description"></div>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-3 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-4 starts &ndash;&gt;-->
<!--      <div class="dr-career-objective">-->
<!--        <p class="dr-title-all">Employement History:</p>-->

<!--&lt;!&ndash;        <p&ndash;&gt;-->
<!--&lt;!&ndash;            class="years-of-experience"&ndash;&gt;-->
<!--&lt;!&ndash;        >Total year of experiences: {{ userTotalExperiences.years }} Years {{ userTotalExperiences.months }} Months {{ userTotalExperiences.days }} Days</p>&ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; section-4 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-6 starts &ndash;&gt;-->
<!--      <div class="dr-academic-certificate">-->
<!--        <p class="dr-title-all">Work Experiences:</p>-->

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

<!--        <div class="dr-academic-c-info" v-for="n in experiences" :key="n.id">-->
<!--          <div class="dr-academic-c-heading-item">-->
<!--            <p>{{ n.job_title }}</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-c-heading-item">-->
<!--            <p>{{ n.company_name }}</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-c-heading-item">-->
<!--            <p>{{ n.company_location }}</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-c-heading-item">-->
<!--            <p>{{ n.from_date + " to " + n.to_date }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-6 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-5 starts &ndash;&gt;-->
<!--      <div class="dr-academic-qualification">-->
<!--        <p class="dr-title-all">Academic Qualification:</p>-->

<!--        <div class="dr-academic-q-heading">-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p class="table-title-dr">Title</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p class="table-title-dr">Institution name</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p class="table-title-dr">Field of study</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p class="table-title-dr">End Year</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p class="table-title-dr">Result</p>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="dr-academic-q-info" v-for="n in qualification" :key="n.id">-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p v-text="n.exam.title"></p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p v-text="n.institute"></p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p>{{ n.subject }}</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p>{{ n.end_year }}</p>-->
<!--          </div>-->
<!--          <div class="dr-academic-q-heading-item">-->
<!--            <p>{{ n.result }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-5 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-7 starts &ndash;&gt;-->
<!--      <div class="dr-skills">-->
<!--        <p class="dr-title-all">Skills:</p>-->
<!--        <p>{{ skills.name }}</p>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-7 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-8 starts &ndash;&gt;-->
<!--      <div class="appInfo-title">-->
<!--        <p class="dr-title-all">Application Information:</p>-->
<!--      </div>-->

<!--      <div class="dr-application-info">-->
<!--        <div class="dr-application-info-1">Looking For</div>-->
<!--        <div-->
<!--            class="dr-application-info-2"-->
<!--        >: {{ applicationInfo.job_categroy_title }}</div>-->
<!--      </div>-->

<!--      <div class="dr-application-info">-->
<!--        <div class="dr-application-info-1">Available For</div>-->
<!--        <div class="dr-application-info-2">: {{ applicationInfo.available_for }}</div>-->
<!--      </div>-->
<!--      &lt;!&ndash; section-8 ends &ndash;&gt;-->

<!--      &lt;!&ndash; section-9 starts &ndash;&gt;-->
<!--      <div class="appInfo-title">-->
<!--        <p class="dr-title-all">Personal Details:</p>-->
<!--      </div>-->

<!--      <div class="dr-application-info">-->
<!--        <div class="dr-application-info-1">Address</div>-->
<!--        <div class="dr-application-info-2">: {{ biodata.address }}</div>-->
<!--      </div>-->

<!--      <div class="dr-application-info">-->
<!--        <div class="dr-application-info-1">City</div>-->
<!--        <div class="dr-application-info-2">: {{ biodata.city }}</div>-->
<!--      </div>-->

<!--      &lt;!&ndash; section-9 ends &ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script>
import "../../../../sass/job-alart/ResumeLayout/_default.scss";
export default {
name: "ApplicantResume",
  data(){
  return{
    applicantsResume: {},
    biodata: {},
    imageUrl: ''
  }
  },
  created() {
    this.resume()
  },
  methods: {
    resume() {
      this.$store
          .dispatch("callApi", {
            url: "resume/" + this.$route.params.id,
            method: "get",
            data: {},
          })
          .then((response) => {
            this.applicantsResume = response.data.data;
            this.biodata = { ...this.biodata, ...response.data.data.biodata };
            this.imageUrl = this.biodata.photo;
            console.log("this is biodata info... ", this.biodata);
            this.$store.commit("biodata", this.biodata);
            console.log("Resume for applicant", this.applicantsResume);
          })
          .catch((error) => {
            this.$awn.alert("Failed");
            console.log(error);
          })


    },
  },
  mounted() {
    console.log("resume default ..... in the design", this.resume.payload);
  },
}
</script>

<style scoped>

</style>
