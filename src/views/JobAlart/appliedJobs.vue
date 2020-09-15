<template>
  <div class="applied-job">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">Applied Jobs</h1>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="ja__card">
            <!--********** Top card start **************-->
            <v-card flat class="ja__selected_card">
              <v-row>
                <v-col cols="12" lg="3">
                  <v-menu
                      ref="menu1"
                      v-model="menu1"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="computedDateFormatted"
                          label="Date"
                          prepend-icon="event"
                          v-bind="attrs"
                          @blur="date = parseDate(dateFormatted)"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" lg="3">
                  <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="computedDateFormatted"
                          label="Date (read only text field)"
                          persistent-hint
                          prepend-icon="event"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" lg="3" md="3">
                  <v-text-field
                      label="Company Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-select
                      :items="items"
                      label="Status"
                  ></v-select>
                </v-col>
              </v-row>
              <div class="search__btn text-center">
                <v-btn color="success" dark>search</v-btn>
              </div>
            </v-card>
            <!--********** Top card END **************-->
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <p class="jaif">Total Job Found : <span>{{totalJobs}}</span></p>
                </v-col>
                <v-col cols="12" lg="8" v-if="false">
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
            <div style="overflow-x: auto">
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
                <tr v-for="(job, i) in appliedJobs" :key="i">
                  <td><p>{{ i+1 }}</p></td>
                  <td class="col-w">
                    <a>{{ job.job_title }}</a>
                    <p>{{ job.company_name }}</p>
                    <small>Applied On:
                      <v-icon small>mdi-calendar-month</v-icon>
                      <span>{{getHumanDate(job.applied_at)}}</span></small>
                  </td>
                  <td class="exp-c"><p>{{ job.expected_salary }}</p></td>
                  <td class="text-center" v-if="job.summary_view">
                    <v-icon color="green">mdi-check</v-icon>
                  </td>
                  <td class="text-center" v-else>
                    <v-icon color="red">mdi-close</v-icon>
                  </td>
                  <td class="text-center">
                    <v-btn class="interactn c-grey" icon>
                      <v-icon>mdi-account-voice</v-icon>
                    </v-btn>
                    <v-btn class="interactn mr-2 ml-2 c-green" icon>
                      <v-icon>mdi-account-tie-voice-off</v-icon>
                    </v-btn>
                    <v-btn class="interactn c-blue" icon>
                      <v-icon>mdi-handshake-outline</v-icon>
                    </v-btn>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!--********** Job applied table end **************-->
            <!--********** pagination start **************-->
            <div class="pagination">
              <ul class="d-flex pg-list">
                <li>
                  <v-btn text small>
                    <v-icon>mdi-chevron-double-left</v-icon>
                  </v-btn>
                </li>
                <li>
                  <v-btn text small>1</v-btn>
                </li>
                <li>
                  <v-btn text small>2</v-btn>
                </li>
                <li>
                  <v-btn text small>3</v-btn>
                </li>
                <li>
                  <v-btn text small>..12</v-btn>
                </li>
                <li>
                  <v-btn text small>
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
import '../../sass/job-alart/_appliedJobs.scss'
import moment from 'moment';
export default {
  name: "appliedJobs",
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    items: ['viewed', 'Not viewed'],
    appliedJobs: [],
  }),

  computed: {
    totalJobs () {
      return this.appliedJobs && this.appliedJobs.length
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  mounted() {
    this.$store
        .dispatch("callApi", {
          url: "jobs/applied",
          method: "get",
          data: {}
        })
        .then((response) => {
          console.log("job.. data", response.jobs);
          this.appliedJobs = response.jobs
        })
        .catch(() => {
          this.$awn.alert("Failed!");
        })
        .finally(() => {
        });
  },
  methods: {
    getHumanDate : function (date) {
      return moment(date, 'YYYY-MM-DD').format("MMM Do YY");
    },
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