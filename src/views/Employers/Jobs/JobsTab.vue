<template>
  <v-container class="jobsTab">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="10">
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
                Post a new job
              </v-btn>
            </div>
          </v-card>
          <!--********** Top card END **************-->
         <v-container class="tab_contain">
           <v-row align="center">
             <v-col cols="12" md="8">
               <v-tabs v-model="tabs">
                 <v-tab>Posted jobs ({{totalJobs}})</v-tab>
                 <v-tab>Drafted jobs (12)</v-tab>
                 <v-tab>Archived jobs (12)</v-tab>
               </v-tabs>
             </v-col>
             <v-col cols="12" md="4">
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
              <v-card flat>
                <v-card-title class="headline">An even better title</v-card-title>
                <v-card-text>
                  <p>
                    Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc
                    et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus
                    arcu quis ante.
                  </p>

                  <p class="mb-0">
                    Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt
                    eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import '../../../sass/employers/_jobs.scss'

export default {
  name: "JobsTab",
  props: {
    allJobs: Array,
    draftedJobs: Array,
    companies: Array,
    totalJobs: Function
  },
  components: {
    JobPostedList: () => import('../Jobs/JobsTab/AllJobList'),
    DraftedJobList: () => import('../Jobs/JobsTab/DraftedJobs'),
  },
  data: vm => ({
        tabs: null,
        dates: ['', ''],
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  computed: {
    // computedDateFormatted () {
    //   return this.formatDate(this.dates.join(' ~ '))
    // },
    // dateRangeText() {
    //   return this.dates.join(' ~ ')
    // },
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
