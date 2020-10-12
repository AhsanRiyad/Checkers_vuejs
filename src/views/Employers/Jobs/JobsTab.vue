<template>
  <div class="jobsTab">
    <v-card>
      <!--********** Top card start **************-->
      <v-card flat class="ja__selected_card">
        <div class="top_portion text-right">
          <v-btn class="mr-2" color="primary" v-if="false">
            <v-icon>mdi-magnify</v-icon>
            search cv bank
          </v-btn>
          <v-btn link to="/add-job" color="success">
            <v-icon>mdi-plus</v-icon>
            Create a job
          </v-btn>
        </div>
      </v-card>
      <!--********** Top card END **************-->
      <v-container class="tab_contain">
        <v-row align="center">
          <v-col cols="12" md="8">
            <v-tabs v-model="tabs">
              <v-tab>Posted jobs</v-tab>
              <v-tab>Drafted jobs</v-tab>
              <v-tab>Expired jobs</v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12" md="4" v-if="false">
            <div class="tab-right_side d-flex">
              <v-text-field
                  dense
                  class="mx-4"
                  flat
                  hide-details
                  label="Search job by title"
                  append-icon="search"
                  solo-inverted
              ></v-text-field>
              <v-text-field outlined dense  placeholder="Date range" prepend-inner-icon="event" single-line></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <job-posted-list/>
        </v-tab-item>
        <v-tab-item>
          <drafted-job-list/>
        </v-tab-item>
        <v-tab-item>
          <expired-job-list/>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import '../../../sass/employers/_jobs.scss'

export default {
  name: "JobsTab",
  props: {
    companies: Array,
  },
  components: {
    JobPostedList: () => import('../Jobs/JobsTab/AllJobList'),
    DraftedJobList: () => import('../Jobs/JobsTab/DraftedJobs'),
   ExpiredJobList: () => import('../Jobs/JobsTab/ExpiredJobs'),
  },
  data: vm => ({
        tabs: null,
        dates: ['', ''],
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  computed: {

  },
  created() {
    console.log("all jobs...................", this.$store.getters.allJobs)
  },
  updated() {
    // this.$nextTick(() =>{
    //
    // })
  },
  // watch: {
  //   date (val) {
  //     this.dateFormatted = this.formatDate(this.date)
  //   },
  // },
  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>
