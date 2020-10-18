<template>
  <div class="posted__list">
    <v-card flat class="ja__card pa-lg-6 pa-md-6">
      <!--********** Job activities start **************-->
      <div class="jobActivity">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="jaif">Total Alerts: <span>{{ totalAlerts }}</span></h2>
          </v-col>
          <v-col cols="12" lg="8" class="text-right">
            <v-btn class="job_create_btn" link to="/create-alert" color="success">
              <v-icon>mdi-plus</v-icon>
              Create a Alerts
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <!--********** Job activities end **************-->
      <!--********** Job applied table start **************-->
      <div v-if="!alerts.length" class="text-center not-available">
        <h1>Alerts are not Available</h1>
      </div>
      <div v-else style="overflow-x: auto !important;">
        <table class="ja_table">
          <thead>
          <tr class="panel-heading">
            <th>Sl</th>
            <th style=" width:45%;">Name</th>
            <th>Title</th>
            <th>Category Name</th>
            <th class="text-center">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(alrt, i) in alerts" :key="i">
            <td><p>{{ i + 1 }}</p></td>
            <td>
              <p class="text-capitalize">{{ alrt.name_of_alerted_job }}</p>
            </td>
            <td> <p class="text-capitalize">{{ alrt.keywords }}</p></td>
            <td> <p class="text-capitalize">{{ alrt.job_category_name }}</p></td>
            <td class="action text-center">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click.stop="editJobAlert(alrt.id)" v-bind="attrs"
                         v-on="on" class="interactn c-grey" icon>
                    <v-icon>mdi-square-edit-outline</v-icon>
                  </v-btn>
                </template>
                <span>Edit The Company</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" @click="notificationAlert(alrt.id)"
                         v-on="on" class="interactn ml-lg-2 mb-sm-1 mt-sm-1 ml-md-2 c-green" icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Delete Job Alert</span>
              </v-tooltip>
            </td>
          </tr>
          </tbody>
        </table>
        <!--********** pagination start **************-->
        <div class="pagination">
          <v-pagination v-model="pageNo" :length="length"></v-pagination>
        </div>
        <!--********** pagination end **************-->
      </div>
      <!-- loading data  starts-->
      <v-dialog v-model="loading" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Loading Data...
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- loading data  ends-->


      <!--********** Job applied table end **************-->

    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "AlertList",
  data: () => {
    return {
      alerts: [],
      length: 0,
      loading: true,
      jobAlertId: '',
      pageNo: 1,
    }
  },
  mounted() {
    this.getJobAlerts()
  },
  computed: {
    totalAlerts() {
      return this.alerts && this.alerts.length
    },
  },
  methods: {
    getJobAlerts() {
      this.loading = true
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        method: "get",
        baseURL: this.$store.state.apiBase,
        url: `job-alerts/`,
        data: {},
        headers,
      })
          .then((response) => {
            console.log("alerts", response);
            this.alerts = response.data.data
            this.loading = false
          })
          .catch(() => {
            this.$awn.alert("Failed!");
          })
    },
    editJobAlert: function (id) {
      this.$router.push({name: 'CreateAlert', params: {id: id}})
    },
    notificationAlert(jobAlertId){
      let onOk = () => {this.deleteJobAlert(jobAlertId)};
      let onCancel = () => {this.$awn.info('You pressed Cancel')};
      this.$awn.confirm(
          'Are you sure?',
          onOk,
          onCancel,
          {
            labels: {
              confirm: 'Dangerous action'
            }
          }
      )
    },
    deleteJobAlert(jobAlertId){
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        method: "delete",
        baseURL: this.$store.state.apiBase,
        url: `job-alerts/` + jobAlertId,
        data: {},
        headers,
      })
          .then((response) => {
            console.log("job alert delete response..", response);
            this.$awn.success("Deleted Successfully!");
            this.dialog = false
            this.getJobAlerts()
          })
          .catch(() => {
            this.$awn.alert("Failed!");
            //   this.$awn.alert("Failed");
          })
    },
    goToJobAlert() {
      this.$router.push({name: 'CreateAlert'})
    },
  }
}
</script>

<style scoped>

</style>
