<template>
  <div style="background-color: white; ">
    <v-container>
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
                    v-model="formData.job_category_id"
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
                    v-model="formData.full_name"
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
                    v-model="formData.name_of_alerted_job"
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
                    v-model="formData.work_experience"
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
                    v-model="formData.expected_salary"
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
                    v-model="formData.job_label_id"
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
              <v-col md="8" cols="12" class="text-md-right" v-if="jobAlertId">
                <v-btn
                    class="white--text"
                    color="green"
                    @click.stop="updateJobAlert()"
                >Update</v-btn
                >
              </v-col>
              <v-col v-else md="8" cols="12" class="text-md-right">
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
  </div>
</template>

<script>
import validation from "../../../mixins/validation"
import axios from "axios";

export default {
  name: "LandingPage",
  mixins: [validation],
  components: {},
  data() {
    return {
      drawer: true,
      loading: false,
      items: [
        ["mdi-email", "Inbox"],
        ["mdi-account-supervisor-circle", "Supervisors"],
        ["mdi-clock-start", "Clock-in"],
      ],
      itemsJobLevel: ["Beginner", "Mid"],
      itemsJobCategory: ["Marketing", "Software Engineer"],
      jobAlertId: '',
      //formData
      formData: {},
    };
  },
  created() {
    this.jobAlertId = this.$route.params.id;

    if (this.$route.params.id) {
      this.jobAlertId = this.$route.params.id;
      this.loading = true;
      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios({
        baseURL: this.$store.state.apiBase,
        url: `job-alerts/` + this.$route.params.id,
        method: "get",
        data: {},
        headers,
      })
          .then((response) => {
            console.log("job alert per id", response.data.data);
            this.formData = response.data.data;
            this.loading = false;
          })
          .catch((error) => {
            this.$awn.alert(error.response.status);
            this.loading = false;
          });
    } else {
      this.jobAlertId = null;
    }
  },
  methods: {
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    clearForm: function () {
      this.formData = {}
      this.$refs.form.reset()
    },
    submit() {
      if (!this.$refs.form.validate()) {
        this.$awn.alert("Sorry! Your form is not complete!");
        return;
      }

      console.log(this.formData);
      if (this.jobAlertId) {
        this.loading = true;
        this.$store
            .dispatch("callApi", {
              url: `job-alerts/${this.jobAlertId}/edit`,
              method: "put",
              data: this.formData,
            })
            .then((response) => {
              console.log("company Updated response..", response);
              this.jobAlertId = response.data.id;
              this.$awn.success("Updated!");
              setTimeout(() => {
                this.$router.history.push({name: "AlertList"});
              }, 1000);
            });
      } else {
        this.$store
            .dispatch("callApi", {
              url: "job-alerts/new",
              method: "post",
              data: this.formData,
            })
            .then((response) => {
              console.log("alert post", response);
              this.$awn.success("Successful");
              this.clearForm()
            })
            .catch(() => {
              this.$awn.alert("Failed");
            })
            .finally(() => {
              //  this.tableLoading = false;
            });
      }

    },
    updateJobAlert() {
      if (this.jobAlertId) {
        this.$store
            .dispatch("callApi", {
              url: `job-alerts/${this.jobAlertId}/edit`,
              method: "put",
              data: this.formData,
            })
            .then((response) => {
              console.log("Job Alert Update response..", response);
              this.$awn.success("Updated Successfully!");
              this.clearForm()
              setTimeout(() => {
                this.$router.history.push({name: "AlertList"});
              }, 1000);
            })
            .catch(() => {
              this.$awn.alert("Failed!");
              //   this.$awn.alert("Failed");
            });
      }
    }
  },
  mounted() {
    this.$store
        .dispatch("callApi", {
          url: "job-alerts/new",
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
