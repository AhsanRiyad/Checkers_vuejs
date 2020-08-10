<template>
  <v-card :loading="loading" class="mt-3" id="MainCard">
    <v-container>
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

      <v-row v-for="n in Jobs" :key="n.id">
        <v-col>
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
              <v-btn text color="deep-purple accent-4">Apply Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "JobCard",
  data: () => {
    return {
      Jobs: [],
      loading: false,
      pageNo: 1,
      ShowAlertMsg: false,
    };
  },
  methods: {
    onScroll() {
      // console.log(e);
      /* console.log(window);
      let MainCard = document.getElementById("MainCard");
      console.log('in the main card');
      console.log(window.scrollY);
      console.log(MainCard);
      console.log("scorlling"); */

      let pageNo = window.scrollY/2400;
      let isInt =  Number.isInteger( (window.scrollY/2400) );
      // console.log('is int check,' , isInt);
      // console.log( 'scroll result ' ,  (window.scrollY/2400) ) ;

      if ( isInt && this.pageNo < pageNo+1 ) {
        // console.log("call second api");
        this.pageNo = pageNo+1;
        this.getData();
      }
    },
    getData() {
      this.loading = true;

this.$store
        .dispatch("callApi", {
          url: 'search',
          method: 'get',
          params:{
            q: this.$route.query.q,
            page: this.pageNo
          }
        })
        .then((response) => {
          // console.log(response);
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