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
                <div class="jd_status"><v-icon>description</v-icon><span>Stand Out</span></div>
              </li>
              <li class="jd_list">
                <p class="jd_title">published on</p>
                <div class="jd_status"><v-icon>calendar_today</v-icon><span>05 September 2020</span></div>
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
                  <v-text-field outlined dense v-model="dateRangeText" placeholder="Date range" prepend-inner-icon="event" single-line></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <applicant-list/>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-title class="headline">An awesome title</v-card-title>
                <v-card-text>
                  <p>
                    Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis,
                    purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent
                    congue erat at massa.
                  </p>

                  <p>
                    Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
                    sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue,
                    ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis
                    magna.
                  </p>

                  <p class="mb-0">
                    Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis
                    urna.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-title class="headline">An even better title</v-card-title>
                <v-card-text>
                  <p>
                    Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc
                    et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus
                    arcu quis ante.
                  </p>

                  <p class="mb-0">
                    Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt
                    eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                  </p>
                </v-card-text>
              </v-card>
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
 },
  data: () => {
    return {
      tabs: null,
    }
  }
}
</script>