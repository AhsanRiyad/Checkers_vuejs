<template>
  <div class="posted__list">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card flat class="ja__card pt-0">
            <div class="Fixed-Job-Details">
              <div>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">dfgdfgdfg</v-list-item-title>
                    <!-- <v-list-item-subtitle> {{ JobDescription.companyName }} || {{ JobDescription.typeInText }} </v-list-item-subtitle> -->
                    <p>dfgdfgdfgf</p>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                      @click="showModal = true"
                      dark
                      v-on="on"
                      class="applyNow"
                      color="primary"
                  >Apply Now</v-btn>
                  <job-alert-modal persistent v-if="showModal">
                    <div class="d-flex align-center" slot="header">
                      <h1 class="warning-text">Warning Message</h1>
                      <v-spacer></v-spacer>
                      <v-btn @click="showModal = false" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </div>
                    <div slot="body">
                      <p>
                        JobAlert.com only works as a mean of communication between employers and job-seekers.
                        JobAlert.com Limited will not be responsible for any financial transaction or irregularity/ fraud by
                        the company after applying through the jobalert.com website.
                      </p>
                      <div class="d-flex align-center">
                        <v-checkbox label="I have read the above warning message." required></v-checkbox>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="text--white"
                            color="green"
                            depressed
                            link
                            to="/jobonlineapply"
                        >Apply</v-btn>
                      </div>
                    </div>
                  </job-alert-modal>
                </v-card-actions>

                <v-divider class="divider"></v-divider>

                <div >
                  <h4>Location</h4>
                  <p>dfgdfgf</p>

                  <h4>Descriptions</h4>
                  <p>dfgjdfg</p>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import "../../../../sass/job-alart/_JobCard.scss";
export default {
name: "JobSummary",
  components: {
    JobAlertModal: () => import("../../../../components/Modal"),
  },
  data () {
  return{
    showModal: false,
  }
  }
}
</script>

<style scoped>

</style>