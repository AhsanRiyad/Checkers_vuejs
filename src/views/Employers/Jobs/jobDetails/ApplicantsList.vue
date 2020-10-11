<template>
  <div class="applicant__list">
    <v-card flat class="ja__card pt-0">
      <!--********** Job applied table start **************-->
      <div style="overflow-x: auto !important">
        <table>
          <tbody>
            <v-dialog
              v-model="loadingApplicant"
              hide-overlay
              persistent
              width="300"
            >
              <v-card color="primary" dark>
                <v-card-text>
                  Loading Data...
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
            <tr v-if="!applicant.length">
              <td class="text-center" style="color: #0d47a1; font-size: 25px">
                No One Applied in this job
              </td>
            </tr>
            <tr v-for="app in applicant" :key="app.id">
              <td class="text-center">
                <p class="font-weight-bold"></p>
              </td>
              <td
                style="width: 10%"
                v-for="photo in app.biodata"
                :key="photo.id"
              >
                <v-avatar size="85">
                  <img
                    :src="$store.getters.imageUrl + photo.photo"
                    :alt="photo.full_name"
                  />
                </v-avatar>
              </td>
              <td>
                <div v-for="bio in app.biodata" :key="bio.id">
                  <p class="mb-4">
                    <a
                      :loading="dialogShowing"
                      @click.stop="() => showApplicantResume(bio.userId)"
                      style="font-size: 20px; text-transform: capitalize"
                      >{{ bio.full_name }} </a
                    ><span class="age_outline font-weight-bold">
                      Age: {{ bio.age }}</span
                    >
                  </p>
                  <p>{{ bio.address }}</p>
                </div>
                <div v-for="qua in app.qualification" :key="qua.id">
                  <p>{{ qua.institute }}</p>
                  <p>
                    <span>{{ qua.exam_title }}</span> in
                    <span>{{ qua.subject }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div v-for="ex in app.experiences" :key="ex.id">
                  <p class="font-weight-bold">{{ ex.company_name }}</p>
                  <p>{{ ex.job_title }}</p>
                </div>
              </td>
              <td></td>
              <td>
                <p>
                  <span class="mr-2"><v-icon small>mdi-briefcase</v-icon></span
                  ><span
                    >{{ app.total_experice.years }}
                    <span class="font-weight-bold ml-1 mr-1">Years</span>
                    {{ app.total_experice.months }}
                    <span class="font-weight-bold ml-1 mr-1">Month</span>
                    {{ app.total_experice.days }}
                    <span class="font-weight-bold ml-1 mr-1">Days</span></span
                  >
                </p>
                <div v-for="apear in app.job_appliers" :key="apear.id">
                  <p>
                    <span class="mr-2">{{ apear.currency_code }}</span
                    >{{ apear.expected_salary }}
                  </p>
                  <p>
                    <span class="mr-2 font-weight-bold">Applied On: </span
                    ><span>{{ getHumanDate(apear.created_at) }}</span>
                  </p>
                </div>
              </td>
              <td
                class="action text-center"
                v-for="apear in app.job_appliers"
                :key="apear.id"
              >
                <v-btn
                  class="interactn c-green"
                  v-if="apear.short_listed"
                  color="success"
                  icon
                >
                  <i class="material-icons">check</i>
                </v-btn>
                <v-btn
                  v-else
                  class="interactn mr-2 ml-1 mr-1 c-red"
                  color="error"
                  icon
                  style="border: 1px solid red !important"
                >
                  <i class="material-icons">close</i>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--********** Job applied table end **************-->
      <!-- job apply modal starts-->
      <v-dialog v-model="dialogShowing" width="900">
        <applicant-resume-modal
          :user-id="userId"
          :dialogShowing="dialogShowing"
          :applicant-resume="applicantResume"
        />
      </v-dialog>

      <!-- job apply modal ends-->
    </v-card>
  </div>
</template>

<script>
import "../../../../sass/employers/_jobs.scss";
import "../../../../sass/job-alart/ResumeLayout/_default.scss";
import moment from "moment";

export default {
  name: "ApplicantsList",
  components: {
    ApplicantResumeModal: () => import("../jobDetails/ApplicantResume"),
  },
  props: {
    applicant: Array,
    experience: Array,
    biodata: Array,
    qualification: Array,
    jobAppliers: Array,
    totalExp: Object,
    jobResponsibilities: Array,
    loadingApplicant: Boolean,
  },
  data: () => {
    return {
      loading: false,
      dialogShowing: false,
      applicantResume: {},
      userId: "",
      jobId: "",
      shortListed: "",
    };
  },
  created() {},
  mounted() {
    console.log("job id in app resume ", this.$store.getters.job);
  },
  methods: {
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("MMM Do YY");
    },
    showApplicantResume(userId) {
      console.log("User id", userId);
      this.$store.commit("userId_resume", userId);
      this.dialogShowing = true;
      this.loading = true;
      this.$store
        .dispatch("callApi", {
          url: "resume/" + userId,
          method: "get",
          params: { job_id: this.$store.getters.job },
          data: {},
        })
        .then((response) => {
          console.log("Resume...fra", response);
          this.$store.commit("resume", response.data);

          console.log(" resume console output... ", this.$store.getters.resume);

          this.userId = response.data.applicationInfo.user_id;
          this.applicntInfo = response.data.applicationInfo;
          // console.log("applicants info", response.data.applicationInfo);

          // setTimeout({
          // }, 1000)
          // this.dialog = true
        })
        .catch((error) => {
          this.$awn.alert("Failed");
          console.log("errorrrrrrrrrrrrrrrrrrrr..", error.response);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

