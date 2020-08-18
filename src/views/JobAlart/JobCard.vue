<template>
  <div>
    <div class="searchText">
      <h1>Search Result</h1>
    </div>

    <div class="filter">
      <div class="filter-item-1">
        <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
      </div>
      <div class="filter-item-2">
        <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
      </div>
      <div class="filter-item-3">
        <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
      </div>
      <div class="filter-item-4">
        <v-select dense :items="['hi' , 'hellow']" filled label="Filled style"></v-select>
      </div>
    </div>

    <div class="clearFix"></div>

    <div class="searchResults">
      <v-card class="mx-auto searchResults-text" v-for="n in Jobs" :key="n.id">
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
    </div>

    <div class="clearFix"></div>

    <div class="Fixed-Job-Details" >
      <div :style="jobDetails" v-if="!loading">
        <div outlined :style="firstContainer">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ JobDescription.jobTitle }}</v-list-item-title>
              <!-- <v-list-item-subtitle> {{ JobDescription.companyName }} || {{ JobDescription.typeInText }} </v-list-item-subtitle> -->
              <p>{{ JobDescription.companyName }} || {{ JobDescription.typeInText }}</p>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn class="applyNow" color="primary">Apply Now</v-btn>
          </v-card-actions>

          <v-divider class="divider"></v-divider>

          <div :style="JobDescriptionStyle">
            <h4>Location</h4>
            <p>{{ JobDescription.jobLocation }}</p>

            <h4>Responsibilities</h4>
            <p>{{ JobDescription.jobResponsibilities }}</p>

            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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

      //style for search
      jobDetails: {
        // display: "none",
        width: "35%",
        right: "21%",
        top: "225px",
        position: "fixed",
        // height: "100%",
        transition: "top 0.1s",
      },

      JobDescriptionStyle: {
        paddingLeft: "10px",
        paddingRight: "20px",
        marginTop: "20px",
        height: "calc( 100vh - 400px )",
        overflowY: "auto",
        // overflowY: "visible",
      },

      firstContainer: {
        background: "white",
        // height: "calc( 100% - 190px )",
        // overflowY: "auto",
      },
    };
  },
  methods: {
    saveDetails(n) {
      console.log("dd", n);
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

      console.log("window ... ", window);

      console.log("window inner height", window.innerHeight);
      console.log("scrol top", document.body.scrollTop);
      console.log("offset height", document.body.offsetHeight);
      console.log("addition ", window.innerHeight + window.scrollY);

      // this.JobDescriptionStyle.height = "calc( 100% - 300px )";
      // this.JobDescriptionStyle.height = "calc( 100vh - 300px )";
      // this.JobDescriptionStyle.height = "200px";

      if (window.scrollY > 217) {
        this.jobDetails.top = "20px";
        this.JobDescriptionStyle.height = "calc( 100vh - 250px )";
      } else {
        this.jobDetails.top = "225px";
        // this.JobDescriptionStyle.height = " calc( 100vh - 190px ) ";
      }

      if (
        document.body.offsetHeight - (window.innerHeight + window.scrollY) <
        210
      ) {
        this.JobDescriptionStyle.height = " calc( 100vh - 550px ) ";
      }

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
          this.JobDescription = this.Jobs[0];
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