<template>
  <v-card :loading="loading" class="mt-3" id="MainCard">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-row>
            <h1 class="ml-6">Search Results</h1>
          </v-row>

          <v-alert prominent type="error" v-if="ShowAlertMsg">
            <v-row align="center">
              <v-col class="grow">No Jobs Available with this keyword</v-col>
              <v-col class="shrink">
                <v-btn router to="/">Search Again</v-btn>
              </v-col>
            </v-row>
          </v-alert>

          <v-row>
            <v-col class="d-flex" cols="12" md="3">
              <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" md="3">
              <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" md="3">
              <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" md="3">
              <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-row v-for="n in Jobs" :key="n.id">
                <v-col cols="12">
                  <v-card class="mx-auto">
                    <v-card-text>
                      <h2 style="color: green" class="mb-2" v-text="n.jobTitle"></h2>
                      <h4 v-text="n.companyName"></h4>
                      <p class="text--primary">
                        <v-icon>location_on</v-icon>
                        {{ n.jobLocation }}
                      </p>
                      <p class="text--primary">
                        <v-icon>school</v-icon>
                        {{ n.education }}
                      </p>
                      <p class="text--primary">
                        <v-icon>payment</v-icon>
                        {{ n.minSalaryRange }} to {{ n.maxSalaryRange }}
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="deep-purple accent-4" @click.stop="()=>saveDetails(n)">Details</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="6">
              <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ JobDescription.jobTitle }}</v-list-item-title>
                    <!-- <v-list-item-subtitle> {{ JobDescription.companyName }} || {{ JobDescription.typeInText }} </v-list-item-subtitle> -->
                    <p> {{ JobDescription.companyName }} || {{ JobDescription.typeInText }}</p>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn color="primary">Apply Now</v-btn>
                </v-card-actions>

                <div class="JobDescription">

                  <h4>Location </h4>
                  <p>
                     {{ JobDescription.jobLocation }}
                  </p>

                  <h4>Responsibilities </h4>
                  <p>
                     {{ JobDescription.jobResponsibilities }}
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import "../../sass/job-alart/_JobCard.scss"

export default {
  name: "JobCard",
  data: () => {
    return {
      Jobs: [],
      loading: false,
      pageNo: 1,
      ShowAlertMsg: false,


      JobDescription:{
        jobTitle: "PHP developer",
        companyName: "PHP",
        country: "Bangladesh",
        education: "CSE",
        jobLocation: "Bangladesh, India",
        jobResponsibilities: "Web site development",
        skillQualificationRequirement: "CSE, EEE, IT",
        typeInText: "Remote",
        maxSalaryRange: "20000",
      }

    };
  },
  methods: {
    saveDetails(n){
      this.JobDescription = n;
    },
    onScroll() {
      // console.log(e);
      /* console.log(window);
      let MainCard = document.getElementById("MainCard");
      console.log('in the main card');
      console.log(window.scrollY);
      console.log(MainCard);
      console.log("scorlling"); */

      let pageNo = window.scrollY / 2400;
      let isInt = Number.isInteger(window.scrollY / 2400);
      // console.log('is int check,' , isInt);
      // console.log( 'scroll result ' ,  (window.scrollY/2400) ) ;

      if (isInt && this.pageNo < pageNo + 1) {
        // console.log("call second api");
        this.pageNo = pageNo + 1;
        this.getData();
      }
    },
    getData() {
      this.loading = true;

      this.$store
        .dispatch("callApi", {
          url: "search",
          method: "get",
          params: {
            q: this.$route.query.q,
            page: this.pageNo,
          },
        })
        .then((response) => {
          console.log('job list....', response);
          this.Jobs = [...this.Jobs, ...response.jobs.result];
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
        })
        .catch(() => {
          this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          if (this.Jobs.length === 0) this.ShowAlertMsg = true;

          //  this.tableLoading = false;
        });
    },
  },
  mounted() {
    this.pageNo = 1;
    window.addEventListener("scroll", this.onScroll);
    this.getData();
  },
  destroyed: function () {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>