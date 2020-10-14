<template>
  <div class="posted__list" style="padding: 0 50px 30px 50px !important;">
    <v-card flat class="ja__card pt-0">
      <div class="applicant-Job-Details">
        <div v-if="jobs">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ jobs.job_title }}</v-list-item-title>
              <v-list-item-subtitle> {{ jobs.company_name }} || {{ jobs.type_in_text }} || <span v-if="jobs.is_lived" class="green--text">Lived</span>
                <span v-else-if="jobs.is_expired" class="red--text">Expired</span>
                <span v-else class="blue--text">Pending</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <h3 class="font-weight-bold">Category: <span>{{jobs.job_category[0].name}}</span></h3>
          </v-list-item>
          <v-divider></v-divider>
          <div class="job_desc">
            <div class="job_location">
              <h4>Location</h4>
              <p><span>{{ jobs.job_location }}</span>, <span>{{ jobs.city }}</span>, <span>{{jobs.country}}</span></p>
            </div>
            <div class="job_description mt-3">
              <h4>Descriptions</h4>
              <p v-html="jobs.job_description"></p>
            </div>
            <div class="job_responsibilities mt-3">
              <h4>Responsibilities</h4>
              <div v-for="jobres in jobs.job_responsibilities" :key="jobres.id">
                <p v-html="jobres.text"></p>
              </div>
            </div>
            <div class="edu_req mt-3">
              <h4>Educational Requirements</h4>
              <div v-for="edu in jobs.job_education_req" :key="edu.id"><p v-html="edu.degre_title"></p></div>
            </div>
            <div class="edu_req mt-3">
              <h4>Skills</h4>
              <div v-for="(skill, i) in jobs.skills" :key="skill.id">
                <ul>
                  <li>{{i+1}}. <span class="ml-1">{{skill.title}}</span></li>
                </ul>
              </div>
            </div>
            <div class="job_description mt-3">
              <h4>Salary</h4>
              <p v-if="jobs.negotiable">Negotiable</p>
              <p v-else><span class="mr-1">{{jobs.currency_code}}</span><span>{{jobs.min_salary_range}}</span> - <span>{{jobs.max_salary_range}}</span></p>
            </div>
            <div class="job_faci mt-4">
              <h4>Job Facilities</h4>
              <div v-for="fac in jobs.job_facilities" :key="fac.id"><p v-html="fac.text"></p></div>
            </div>
            <div class="job_faci mt-3 text-center">
              <h2>Read Before Apply</h2>
              <div style="width: 60%; margin: 0 auto;" v-if="jobs.apply_instruction"><p v-html="jobs.apply_instruction"></p></div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>

</template>

<script>
import "../../../../sass/job-alart/_JobCard.scss";

export default {
  name: "JobPreview",
  props: {
    jobs: Object,
  },
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style scoped>

</style>
