<template>
  <div style="backgroundColor: white; ">
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
                  v-model="formData.keywords"
                  :rules="fieldRulesProp(true, 'others' , 'others')"
                  dense
                  outlined
                  placeholder="Skill, Designation, Roles, Companies"
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


            <v-row class="formRow">
              <v-col md="4" cols="4">
                <v-subheader class="black--text">Full Name</v-subheader>
              </v-col>
              <v-col md="8" cols="8">
                <v-text-field
                  v-model="formData.fullName"
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
                  v-model="formData.email"
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
                  v-model="formData.NameOfAlertedJob"
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
                  v-model="formData.location"
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
                  v-model="formData.workExperience"
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
                  v-model="formData.expectedSlary"
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
                  v-model="formData.jobLabelId"
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
  </div>
</template>

<script>
import validation from "../../mixins/validation"
export default {
  name: "LandingPage",
  mixins: [validation],
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

      //formData
      formData: {},
    };
  },
  methods: {
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    submit() {
      if (!this.$refs.form.validate()){
        this.$awn.alert("Sorry! Your form is not complete!");
        return;
      }

      console.log(this.formData);

      this.$store
        .dispatch("callApi", {
          url: "job-alerts/new",
          method: "post",
          data: this.formData,
        })
        .then((response) => {
          console.log("alert post", response);
          this.$awn.success("Successful");
        })
        .catch(() => {
            this.$awn.alert("Failed");
        })
        .finally(() => {
          //  this.tableLoading = false;
        });
    },
  },
  mounted() {
    this.$store
      .dispatch("callApi", {
        url:"job-alerts/new",
        method: "get",
      })
      .then((response) => {
        console.log(response);
        


        this.itemsJobLevel = response.data.allActiveLabel;
        this.itemsJobCategory = response.data.allCategory;

        // this.$refs.form.reset();
        //saves the items from the database in the table
        //  console.log(response);
        //  this.items = response.data;
      })
      .catch(() => {
        //   this.$awn.alert("Failed");
      })
      .finally(() => {
        //  this.tableLoading = false;
      });
  },
};
</script>

<style scoped lang="scss">
.banner {
  background-color: #365899;
}

.formRow {
  margin-top: -20px;
}
</style>