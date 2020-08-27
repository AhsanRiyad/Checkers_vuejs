<template>
  <div class="posted__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <p class="jaif">Total Job: <span>23</span></p>
                </v-col>
              </v-row>
            </div>
            <!--********** Job activities end **************-->
            <!--********** Job applied table start **************-->
            <table>
              <thead>
              <tr class="panel-heading">
                <th>Sl</th>
                <th style=" width:35%;">Job Title</th>
                <th><v-icon>mdi-bell-ring</v-icon>Job Status</th>
                <th>
                  <v-icon>mdi-file-multiple-outline</v-icon>
                  Application
                </th>
                <th class="text-center">
                  <v-icon>mdi-account-group</v-icon>
                  Matched
                </th>
                <th class="text-center">
                  <v-icon>mdi-format-list-bulleted</v-icon>
                  Short-listed
                </th>
                <th class="text-center">
                  <v-icon>mdi-eye</v-icon>
                  View Status
                </th>
                <th class="text-center">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(job, i) in postedJobs" :key="i">
                <td><p>{{ job.id }}</p></td>
                <td>
                  <a>{{ job.role }}</a>
                  <p>Published On:<span>{{ job.publishedOn }}</span></p>
                  <p>Deadline:<span>{{ job.deadline }}</span> <span><a href="">change</a></span></p>
                </td>
                <td><v-switch
                    v-model="job.jobStatus"
                    color="success"
                    value="success"
                    hide-details
                ></v-switch></td>
                <td >{{ job.applications }}</td>
                <td class="text-center">{{job.matched}}</td>
                <td class="text-center">{{job.shortlisted}}</td>
                <td class="text-center">{{job.views}} | {{job.applications}}</td>
                <td class="action text-center">
                  <v-btn class="interactn c-grey" icon>
                    <v-icon>mdi-square-edit-outline</v-icon>
                  </v-btn>
                  <v-btn class="interactn  mr-2 ml-2 c-green" icon>
                    <v-icon>mdi-backup-restore</v-icon>
                  </v-btn>
                  <v-btn class="interactn c-blue" icon>
                    <v-icon>mdi-chart-line-stacked</v-icon>
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
        publishedOn: '4 Aug 2019',
        deadline: '4 Aug 2019',
        expectedSalary: '30000',
        jobStatus: true
        ,
        applications: 300,
        matched: 50,
        shortlisted: 3,
        views: 73
      },
      {
        id: 2,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        publishedOn: '4 Aug 2019',
        deadline: '4 Aug 2019',
        expectedSalary: '30000',
        jobStatus: true,
        applications: 300,
        matched: 50,
        shortlisted: 3,
        views: 73
      },
      {
        id: 3,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        publishedOn: '4 Aug 2019',
        deadline: '4 Aug 2019',
        expectedSalary: '30000',
        jobStatus: true,
        applications: 300,
        matched: 50,
        shortlisted: 3,
        views: 73
      },
      {
        id: 4,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        publishedOn: '4 Aug 2019',
        deadline: '4 Aug 2019',
        expectedSalary: '30000',
        jobStatus: false,
        applications: 300,
        matched: 50,
        shortlisted: 3,
        views: 73
      },
      {
        id: 5,
        role: 'Software Developer - Front End Engineer',
        companyName: 'One One and Co. Limited',
        publishedOn: '4 Aug 2019',
        deadline: '4 Aug 2019',
        expectedSalary: '30000',
        jobStatus: false,
        applications: 300,
        matched: 50,
        shortlisted: 3,
        views: 73
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