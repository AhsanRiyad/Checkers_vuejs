<template>
  <div class="posted__list">
    <v-card flat class="ja__card pa-lg-6 pa-md-6">
      <!--********** Job activities start **************-->
      <div class="jobActivity">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="jaif">Total Companies: <span>{{ totalCompanies }}</span></h2>
          </v-col>
          <v-col cols="12" lg="8" class="text-right">
            <v-btn class="job_create_btn" link to="/add-companies" color="success">
              <v-icon>mdi-plus</v-icon>
              Create a Company
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <!--********** Job activities end **************-->
      <!--********** Job applied table start **************-->
      <div v-if="!companies.length" class="text-center not-available">
        <h1>Company is not Available</h1>
      </div>
      <div v-else style="overflow-x: auto !important;">
        <table class="ja_table">
          <thead>
          <tr class="panel-heading">
            <th>Sl</th>
            <th style=" width:45%;">Company Name</th>
            <th>Company Status</th>
            <th class="text-center">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(comp, i) in companies" :key="i">
            <td><p>{{ i + 1 }}</p></td>
            <td>
              <p class="text-capitalize">{{ comp.company_name }}</p>
            </td>
            <td v-if="comp.is_verified"><span class="green--text">Verified</span></td>
            <td v-else><span class="red--text">Not Verified</span></td>
            <td class="action text-center">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click.stop="editCompany(comp.id)" v-bind="attrs"
                         v-on="on" class="interactn c-grey" icon>
                    <v-icon>mdi-square-edit-outline</v-icon>
                  </v-btn>
                </template>
                <span>Edit The Company</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" @click="goToJobsList(comp.id)"
                         v-on="on" class="interactn ml-lg-2 mb-sm-1 mt-sm-1 ml-md-2 c-green" icon>
                    <v-icon>mdi-view-list</v-icon>
                  </v-btn>
                </template>
                <span>View Job List</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="goToJobAdd()"
                         class="interactn  mr-lg-2 ml-lg-2 mr-md-2 ml-md-2 c-blue"
                         v-bind="attrs"
                         v-on="on"
                         icon
                  >
                    <v-icon>mdi-briefcase-upload</v-icon>
                  </v-btn>
                </template>
                <span>Job Post</span>
              </v-tooltip>
              <v-tooltip v-if="false" top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      class="interactn  c-blue"
                      v-bind="attrs"
                      v-on="on"
                      icon
                  >
                    <v-icon>mdi-shield-check</v-icon>
                  </v-btn>
                </template>
                <span>Request For Company Verification</span>
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
      <!-- loadingData data  starts-->
      <v-dialog v-model="loadingData" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Loading Data...
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- loadingData data  ends-->
      <!--********** Job applied table end **************-->

    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import "../../../sass/employers/_jobs.scss"

export default {
  name: "CompanyList",
  data: () => {
    return {
      companies: [],
      length: 0,
      loadingData: true,
      jobId: '',
      pageNo: 1
    }
  },
  mounted() {
    this.getCompanies()
  },
  computed: {
    totalCompanies() {
      return this.companies && this.companies.length
    },
  },
  methods: {
    getCompanies() {
      this.loadingData = true
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        method: "get",
        baseURL: this.$store.state.apiBase,
        url: `companies/`,
        data: {},
        headers,
      })
          .then((response) => {
            console.log("companies", response.data.data);
            this.companies = response.data.data
            this.loadingData = false
          })
          .catch(() => {
            this.$awn.alert("Failed!");
          })
    },
    editCompany: function (id) {
      this.$router.push({name: 'AddCompanies', params: {id: id}})
    },
    goToJobAdd() {
      this.$router.push({name: 'AddJobs'})
    },
    goToJobsList(jobId) {
      this.$router.push({name: 'PostedJobList', params: {id: jobId}})
    },
  }
}
</script>

<style scoped>

</style>
