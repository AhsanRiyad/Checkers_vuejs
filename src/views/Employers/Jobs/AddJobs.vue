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
        </v-col>

        <!-- form ends -->
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import validation from "@/mixins/validation";

export default {
  name: "AddJobs",
  mixins: [validation],
  data() {
    return {

    };
  },
  methods: {
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    submit() {
      if (!this.$refs.form.validate()) return;
    },
  },
}
</script>