<template>
  <v-card :loading="loading" class="mt-3" id="MainCard">
    <div class="container-1">
      <div class="title">
        <h1 class="ml-6">Search Results</h1>
      </div>

      <div class="filter">
        <div>
          <v-select   :items="['hi' , 'hellow']"  label="Filled style"></v-select>
        </div>
        <div>
          <v-select  :items="['hi' , 'hellow']"  label="Filled style"></v-select>
        </div>
        <div>
          <v-select  :items="['hi' , 'hellow']"  label="Filled style"></v-select>
        </div>
        <div>
          <v-select  :items="['hi' , 'hellow']"  label="Filled style"></v-select>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import "../../sass/job-alart/_JobCard.scss";

export default {
  name: "JobCard",
  data: () => {
    return {
      Jobs: [],
      loading: false,
      pageNo: 1,
      ShowAlertMsg: false,

      JobDescription: {
        jobTitle: "PHP developer",
        companyName: "PHP",
        country: "Bangladesh",
        education: "CSE",
        jobLocation: "Bangladesh, India",
        jobResponsibilities: "Web site development",
        skillQualificationRequirement: "CSE, EEE, IT",
        typeInText: "Remote",
        maxSalaryRange: "20000",
      },
    };
  },
  methods: {
    saveDetails(n) {
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
          console.log("job list....", response);
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