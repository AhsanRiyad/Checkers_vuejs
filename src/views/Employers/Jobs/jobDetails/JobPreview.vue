<template>
  <div class="posted__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <div class="Fixed-Job-Details">
              <div v-if="jobs">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ jobs.job_title }}</v-list-item-title>
                    <v-list-item-subtitle> {{ jobs.company_name }} || {{ jobs.type_in_text }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <div class="job_desc">
                  <div class="job_location">
                    <h4>Location</h4>
                    <p><span>{{ jobs.job_location }}</span>, <span>{{ jobs.city }}</span></p>
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
                  <div class="job_faci mt-3">
                    <h4>Job Facilities</h4>
                    <div v-for="fac in jobs.job_facilities" :key="fac.id"><p v-html="fac.text"></p></div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
