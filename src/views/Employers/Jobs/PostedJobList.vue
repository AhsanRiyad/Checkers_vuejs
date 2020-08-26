<template>
  <div class="posted__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card">
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <p class="jaif">Total Job Found : <span>23</span></p>
                </v-col>
                <v-col cols="12" lg="8">
                  <ul class="d-flex ja__info justify-end">
                    <li class="ja_tinfo d-flex align-center">
                      <v-icon class="light__grey">mdi-account-tie-voice-off</v-icon>
                      <p>not connected: <span>1</span></p>
                    </li>
                    <li class="ja_tinfo d-flex align-center">
                      <v-icon class="green">mdi-account-voice</v-icon>
                      <p>connected: <span>1</span></p>
                    </li>
                    <li class="ja_tinfo d-flex align-center">
                      <v-icon class="blue">mdi-handshake-outline</v-icon>
                      <p>hired: <span>1</span></p>
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </div>
            <!--********** Job activities end **************-->
            <!--********** Job applied table start **************-->
            <table>
              <thead>
              <tr class="panel-heading">
                <th>Sl</th>
                <th style=" width:42%;">Job Title</th>
                <th>Expected Salary</th>
                <th class="text-center">Viewed (by Employer)</th>
                <th class="text-center">Employer's interaction</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(job, i) in postedJobs" :key="i">
                <td><p>{{ job.id }}</p></td>
                <td>
                  <a>{{ job.role }}</a>
                  <p>{{ job.companyName }}</p>
                  <small>Applied On:
                    <v-icon>mdi-calendar-month</v-icon>
                    <span>{{ job.appliedOn }}</span></small>
                </td>
                <td><p>{{ job.expectedSalary }}</p></td>
                <td class="text-center" v-if="job.viewed">
                  <v-icon color="green">mdi-check</v-icon>
                </td>
                <td class="text-center" v-else>
                  <v-icon color="red">mdi-close</v-icon>
                </td>
                <td class="text-center">
                  <v-btn class="interactn c-grey" icon>
                    <v-icon>mdi-account-voice</v-icon>
                  </v-btn>
                  <v-btn class="interactn c-green" icon>
                    <v-icon>mdi-account-tie-voice-off</v-icon>
                  </v-btn>
                  <v-btn class="interactn c-blue" icon>
                    <v-icon>mdi-handshake-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
              </tbody>
            </table>
            <!--********** Job applied table end **************-->
            <!--********** pagination start **************-->
            <div class="pagination">
              <ul class="d-flex pg-list">
                <li>
                  <v-btn class="pg-btn" small text>
                    <v-icon>mdi-chevron-double-left</v-icon>
                  </v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>1</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>2</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>3</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>..12</v-btn>
                </li>
                <li>
                  <v-btn class="pg-btn" small text>
                    <v-icon>mdi-chevron-double-right</v-icon>
                  </v-btn>
                </li>
              </ul>
            </div>
            <!--********** pagination end **************-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
name: "PostedJobList",
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    items: ['viewed', 'Not viewed'],
    postedJobs: [
      {
        id: 1,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        appliedOn: '4 Aug 2019',
        expectedSalary: '30000',
        viewed: true
      },
      {
        id: 2,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        appliedOn: '4 Aug 2019',
        expectedSalary: '30000',
        viewed: false
      },
      {
        id: 3,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        appliedOn: '4 Aug 2019',
        expectedSalary: '30000',
        viewed: true
      },
      {
        id: 4,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        appliedOn: '4 Aug 2019',
        expectedSalary: '30000',
        viewed: false
      },
      {
        id: 5,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        appliedOn: '4 Aug 2019',
        expectedSalary: '30000',
        viewed: false
      }
    ]
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>