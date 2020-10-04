<template>
  <div>
    <v-dialog
      v-model="intDialogVisible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar class="white--text" color="#365899">
          <v-btn icon @click="intDialogVisible = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Preview</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="intDialogVisible = false" class="white--text"
              >Close</v-btn
            >
          </v-toolbar-items>
        </v-toolbar>

        <div>
          <div outlined class="jobDetailsMobile">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{
                  JobDescription.job_title
                }}</v-list-item-title>
                <!-- <v-list-item-subtitle> {{ JobDescription.companyName }} || {{ JobDescription.typeInText }} </v-list-item-subtitle> -->
                <p>
                  {{ JobDescription.company_name }} ||
                  {{ JobDescription.type_in_text }}
                </p>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn
                @click="dialogSwitch = true"
                class="applyNow white--text"
                color="primary"
                v-bind:disabled="isApplied"
                >Apply Now</v-btn
              >
            </v-card-actions>

            <v-divider class="divider"></v-divider>

            <div :style="JobDescriptionStyle">
              <h4>Location</h4>
              <p>{{ JobDescription.city }}</p>

              <h4>Descriptions</h4>
              <div v-html="JobDescription.job_description" />

              <h4>Responsibilities</h4>
              <div v-for="n in JobDescription.job_responsibilities" :key="n.id">
                <div v-html="n.text" />
              </div>

              <h4>Facilities</h4>
              <div v-for="n in JobDescription.job_facilities" :key="n.id">
                <div v-html="n.text" />
              </div>

              <h4>Educational Requirements</h4>
              <div v-for="n in JobDescription.job_education_req" :key="n.id">
                <div v-html="n.degre_title" />
              </div>

              <h4>Skill Requirements</h4>
              <div v-for="(n, i) in JobDescription.skills" :key="n.id">
                <div>{{ i + 1 }} . {{ n.title }}</div>
              </div>

              <h4>Salary Range</h4>
              <div>
                {{ JobDescription.currency_code }}
                {{ JobDescription.min_salary_range }} -
                {{ JobDescription.max_salary_range }}
              </div>
            </div>
          </div>
        </div>

        <div style="height: 100px"></div>
      </v-card>
    </v-dialog>

    <ApplyNow @close="() => myDialogClose()" :dialogVisible="dialogSwitch" />
  </div>
</template>

<script>
import "../../../sass/job-alart/_JobCard.scss";
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ApplyNow: () => import("./applyNow"),
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      dialogSwitch: false,
    };
  },
  computed: {
    JobDescription() {
      return this.$store.getters.jobDetails;
    },
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
    myDialogClose() {
      this.dialogSwitch = false;
    },
  },
};
</script>