<template>
  <div class="posted__list" :companies="companies">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <!--********** Job activities start **************-->
            <div class="jobActivity">
              <v-row>
                <v-col cols="12" lg="4">
                  <h2 class="jaif">Total Companies: <span>{{ totalCompanies }}</span></h2>
                </v-col>
              </v-row>
            </div>
            <!--********** Job activities end **************-->
            <!--********** Job applied table start **************-->
            <div style="overflow-x: auto !important;">
              <table>
                <thead>
                <tr class="panel-heading">
                  <th>Sl</th>
                  <th style=" width:45%;">Company Name</th>
                  <th>
                    <v-icon>mdi-bell-ring</v-icon>
                    Company Status
                  </th>
                  <th class="text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(comp, i) in companies" :key="i">
                  <td><p>{{ i + 1 }}</p></td>
                  <td>
                    <a class="text-capitalize" @click="goToCompanyDetails(comp.id)">{{ comp.company_name }}</a>
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
                               v-on="on" class="interactn ml-2 c-green" icon>
                          <v-icon>mdi-view-list</v-icon>
                        </v-btn>
                      </template>
                      <span>View Job List</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="goToJobAdd()"
                               class="interactn  mr-2 ml-2 c-blue"
                               v-bind="attrs"
                               v-on="on"
                               icon
                        >
                          <v-icon>mdi-briefcase-upload</v-icon>
                        </v-btn>
                      </template>
                      <span>Job Post</span>
                    </v-tooltip>
                    <v-tooltip top>
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
            <!--********** pagination start **************-->
            <div class="pagination">
              <v-pagination v-model="pageNo" :length="length"></v-pagination>
            </div>
            <!--********** pagination end **************-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompanyList",
  data: () => {
    return {
      companies: [],
      length: 0,
      loading: true,
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
            this.loading = false
            setTimeout(() => {

            }, 3000)
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
