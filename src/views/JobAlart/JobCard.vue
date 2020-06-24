<template>
  <v-card :loading="loading" class="mt-3" id="MainCard">
    <v-container>
      <v-row>
        <h1 class="ml-6">Search Results</h1>
      </v-row>

    

     <v-alert
      prominent
      type="error"
      v-if="ShowAlertMsg"
    >
      <v-row align="center">
        <v-col class="grow">No Jobs Available with this keyword</v-col>
        <v-col class="shrink">
          <v-btn router to="/" >Search Again</v-btn>
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
    onScroll(e) {
      console.log(e);
      /* console.log(window);
      let MainCard = document.getElementById("MainCard");
      console.log('in the main card');
      console.log(window.scrollY);
      console.log(MainCard);
      console.log("scorlling"); */

      if (window.scrollY >= 2400) {
        console.log("call second api");
        // this.pageNo = 2;

        // this.getData();
      }
    },
    getData() {
      this.loading = true;
      let headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      };

      this.$axios
        .get(
          "http://13.58.205.236:8080/search?q=" +
            this.$route.query.q +
            "&page=" +
            this.pageNo,
          {},
          headers
        )
        .then(
          function(response) {
            console.log(response.data.jobs.result);
            this.Jobs = [...this.Jobs, ...response.data.jobs.result];
          }.bind(this)
        )
        .catch(function() {}.bind(this))
        .finally(
          function() {
            this.loading = false;
            if(this.Jobs.length === 0) this.ShowAlertMsg = true;
          }.bind(this)
        );
    }
  },
  mounted() {
    this.pageNo = 1;
    window.addEventListener("scroll", this.onScroll);
    this.getData();
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>