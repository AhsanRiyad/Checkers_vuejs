<template>
  <v-container class="jobsDetails">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="10">
        <v-card>
          <!--********** Top card start **************-->
          <div class="top_section_card">
            <div class="ja_left_card">
              <h1 class="job_title">software engineer (PHP)</h1>
            </div>
            <div class="ja_right_card">
              <v-btn class="text--white" color="blue-grey">
                <v-icon>launch</v-icon>
                edit
              </v-btn>
              <v-btn class="ml-2 mr-2" color="secondary">
                <v-icon>reply</v-icon>
                repost
              </v-btn>
              <v-btn color="primary">
                <v-icon>share</v-icon>
                share
              </v-btn>
            </div>
          </div>
          <div class="jd_section_card">
            <ul class="d-flex jd_border jd_left_card">
              <li class="jd_list">
                <p class="jd_title">job status</p>
                <div class="jd_status"><span>expired</span></div>
              </li>
              <li class="jd_list">
                <p class="jd_title">job type</p>
                <div class="jd_status">
                  <v-icon size="20">description</v-icon>
                  <span>Stand Out</span></div>
              </li>
              <li class="jd_list">
                <p class="jd_title">published on</p>
                <div class="jd_status">
                  <v-icon size="20">calendar_today</v-icon>
                  <span>05 September 2020</span></div>
              </li>
            </ul>
            <ul class="d-flex jd_border jd_right_card">
              <li class="jd_list">
                <v-icon>search</v-icon>
                <p class="jd_title">search views</p>
                <div class="jd_status">9,392</div>
              </li>
              <li class="jd_list">
                <v-icon>mdi-file-document-outline</v-icon>
                <p class="jd_title">detailed views</p>
                <div class="jd_status">2346</div>
              </li>
              <li class="jd_list">
                <v-icon>mdi-file-multiple-outline</v-icon>
                <p class="jd_title">application</p>
                <div class="jd_status">35</div>
              </li>
            </ul>
          </div>
          <!--********** Top card END **************-->
          <v-container class="tab_contain">
            <v-row align="center">
              <v-col cols="12" md="8">
                <v-tabs v-model="tabs">
                  <v-tab class="job_tab">Applicants (12)</v-tab>
                  <v-tab class="job_tab">Job Summary</v-tab>
                  <v-tab class="job_tab">Job Preview</v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="12" md="4">
                <div class="tab-right_side d-flex">
                  <v-text-field
                      dense
                      class="mx-4"
                      flat
                      hide-details
                      label="Search job by title"
                      append-icon="search"
                      solo-inverted
                  ></v-text-field>
                  <v-text-field outlined dense v-model="dateRangeText" placeholder="Date range"
                                prepend-inner-icon="event" single-line></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <applicant-list/>
            </v-tab-item>
            <v-tab-item>
              <job-preview/>
            </v-tab-item>
            <v-tab-item>
              <job-summary/>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JobDetails",
  components: {
    ApplicantList: () => import('../Jobs/jobDetails/ApplicantsList'),
    JobPreview: () => import('../Jobs/jobDetails/JobPreview'),
    JobSummary: () => import('../Jobs/jobDetails/JobSummary'),
  },
  data: () => {
    return {
      tabs: null,
    }
  }
}
</script>