<template>
  <div>
    <v-container>
      <v-row class="text-md-center white--text banner">
        <v-col cols="12">Create a Free Job Alert</v-col>
      </v-row>

      <v-row class="text-md-center white--text">
        <!-- form part -->
        <v-col offset-md="2" cols="4">
          <v-row>
            <v-col cols="4">
              <v-subheader class="black--text">Keywords</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Skill, Designation, Roles, Companies"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Full Name</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Enter Your Full Name"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Email</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Enter Your Email Id"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Name Your Job Alert</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Enter Job Type Name"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Location</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Enter Your Desired Location"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Work Experience</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Work Experience In Years" type="number"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Expected Salary (In $)</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Min" type="number"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Job Level</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select solo :items="itemsJobLevel" label="Select Job Level" dense></v-select>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Industry</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field solo placeholder="Enter Your Industry Type"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col cols="4">
              <v-subheader class="black--text">Job Category</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select solo :items="itemsJobCategory" label="Select Job Category" dense></v-select>
            </v-col>
          </v-row>

          <v-row class="formRow" justify-md="end" >
            <v-col cols="2">
              <v-subheader class="black--text"></v-subheader>
            </v-col>
            <v-col cols="9"  >
              <v-checkbox label="Also send me jobs closely related my search terms" required></v-checkbox>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="4">
              <v-subheader class="black--text"></v-subheader>
            </v-col>
            <v-col cols="8" class="text-md-right">
              <v-btn color="primary" justify="end">CREATE JOB ALERT</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <!-- form ends -->



        <v-col cols="4" offset-md="0" class="text-md-left black--text ml-md-12">
          <h1 class="black--text">Why should you create a free job alert?</h1>
          <p>*Get relevant jobs directly in your inbox</p>
          <p>*Stay updated with latest opportunities</p>
          <p>*Create up to 5 personalized job alerts</p>
          <p>*Be the First one to apply</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        ["mdi-email", "Inbox"],
        ["mdi-account-supervisor-circle", "Supervisors"],
        ["mdi-clock-start", "Clock-in"],
      ],
      itemsJobLevel: ["Beginner", "Mid"],
      itemsJobCategory: ["Marketing", "Software Engineer"],
    };
  },
};
</script>


<style scoped lang="scss">
.banner {
  background-color: #365899;
}

.formRow {
  margin-top: -40px;
}
</style>