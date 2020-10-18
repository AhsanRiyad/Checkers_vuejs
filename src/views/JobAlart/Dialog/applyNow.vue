<template>
  <div>
    <v-dialog
      v-model="intDialogVisible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="intDialogVisible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Apply</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="intDialogVisible = false">Close</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <div class="jobDetailsMobile">
          <p>
            JobAlert.com only works as a mean of communication between employers
            and job-seekers. JobAlert.com Limited will not be responsible for
            any financial transaction or irregularity/ fraud by the company
            after applying through the jobalert.com website.
          </p>
          <div class="d-flex align-center">
            <v-checkbox
              v-model="termsAndConditions"
              label="I have read the above warning message."
              required
            ></v-checkbox>
            <v-spacer></v-spacer>
          </div>

          <div v-if="termsAndConditions">
            <div class="expectedSalary-job-search">
              <div class="expectedSalary-job-search__title">
                Expected Salary
              </div>
              <div class="expectedSalary-job-search__textinput">
                <v-form ref="expectedSalary" v-on:submit.prevent="applyJob">
                  <v-text-field
                    type="number"
                    :rules="[(v) => !!v || 'required']"
                    v-model="expectedSalary"
                    outlined
                    dense
                    solo
                    placeholder="Salary"
                    @keyup.enter.stop="applyJob"
                  ></v-text-field>
                </v-form>
              </div>
            </div>

            <div class="expectedSalary-job-search__applybutton">
              <div>
                <v-btn
                  class="white--text"
                  color="green"
                  depressed
                  link
                  :disabled="!termsAndConditions"
                  :loading="loadingAppliedJob"
                  @click.stop="applyJob"
                  >Apply</v-btn
                >
              </div>
            </div>
          </div>
        </div>
        <div style="height: 100px"></div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "../../../sass/job-alart/_JobCard.scss";
import axios from "axios";

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

      termsAndConditions: false,
      loadingAppliedJob: false,
      expectedSalary: 0,
    };
  },
  computed: {
    intDialogVisible: {
      get: function () {
        return this.dialogVisible;
      },
      set: function (value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    applyJob(event) {
      if (event) {
        event.preventDefault();
      }
      if (!this.$refs.expectedSalary.validate()) return;

      if (this.$cookies.get("accessToken") == null) {
        this.$router.history.push("/signin");
        // this.$router.push({name: 'Signin', params: {id: '1'}})
        return;
      }

      this.loadingAppliedJob = true;

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios({
        method: "post",
        baseURL: this.$store.state.apiBase,
        url: `jobs/${this.$store.getters.jobDetails.id}/apply`,
        data: {
          expected_salary: this.expectedSalary,
        },
        headers,
      })
        .then((response) => {
          console.log(response);

          if (response.status == 206) {
            this.$router.history.push("/biodata");
            this.$awn.alert("Your resume is not completed");
            return;
          }
          this.intDialogVisible = false;
          this.$awn.success("You have successfully applied!");
        })
        .catch((error) => {
          console.log(error);
          this.$awn.alert("Failed!");

          if (error.response.status == 401) {
            this.$awn.alert("You are not logged in");
            this.$router.history.push("/signin");
          } else if (error.response.status == 404) {
            this.$awn.alert("Your resume is not completed");
            this.$router.history.push("/biodata");
            return;
          }
        })
        .finally(() => {
          this.loadingAppliedJob = false;
        });
    },
  },
};
</script>