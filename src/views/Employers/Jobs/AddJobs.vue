<template>
  <v-container >
    <v-row class="text-md-center text-center white--text banner">
      <v-col md="12">Create a Free Job Alert</v-col>
    </v-row>

    <v-form ref="form">
      <v-row class="text-md-center white--text">
        <!-- form part -->

        <v-col offset-md="2" md="4" cols="12" order="2" order-md="1">
          <v-row>
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Keywords</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  outlined
                  placeholder="Skill, Designation, Roles, Companies"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Full Name</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'name' , 'name')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Enter Your Full Name"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Email</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'email' , 'email')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Enter Your Email Id"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Name Your Job Alert</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Enter Job Type Name"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Location</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Enter Your Desired Location"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Work Experience</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Work Experience In Years"
                  type="number"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Expected Salary (In $)</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Min"
                  type="number"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Job Level</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-select
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  item-value="id"
                  item-text="name"
                  outlined
                  :items="itemsJobLevel"
                  label="Select Job Level"
                  dense
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Industry</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-text-field
                  v-model="formData.industry"
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  class="textField"
                  outlined
                  placeholder="Enter Your Industry Type"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="formRow">
            <v-col md="4" cols="4">
              <v-subheader class="black--text">Job Category</v-subheader>
            </v-col>
            <v-col md="8" cols="8">
              <v-select
                  v-model="formData.jobCategory"
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  item-value="id"
                  item-text="name"
                  outlined
                  :items="itemsJobCategory"
                  label="Select Job Category"
                  dense
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="formRow" justify-md="end">
            <v-col md="2" class="d-none d-sm-none">
              <v-subheader class="black--text"></v-subheader>
            </v-col>
            <v-col md="9" cols="12">
              <v-checkbox label="Also send me jobs closely related my search terms" required></v-checkbox>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col md="4" class="d-none d-sm-none">
              <v-subheader class="black--text"></v-subheader>
            </v-col>
            <v-col md="8" cols="12" class="text-md-right">
              <v-btn color="primary" block justify="end" @click.stop="submit">CREATE JOB ALERT</v-btn>
            </v-col>
          </v-row>
        </v-col>

        <!-- form ends -->

        <v-col
            order="1"
            order-md="2"
            cols="12"
            md="4"
            offset-md="0"
            class="text-md-left black--text ml-md-12"
        >
          <h1 class="black--text">Why should you create a free job alert?</h1>
          <p>*Get relevant jobs directly in your inbox</p>
          <p>*Stay updated with latest opportunities</p>
          <p>*Create up to 5 personalized job alerts</p>
          <p>*Be the First one to apply</p>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "AddJobs"
}
</script>

<style scoped>

</style>