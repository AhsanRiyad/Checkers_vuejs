<template>
  <v-container class="jobsTab">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="10">
        <v-card>
          <!--********** Top card start **************-->
          <v-card flat class="ja__selected_card">
            <div class="top_portion text-right">
              <p></p>
              <v-btn color="primary">
                <v-icon>mdi-magnify</v-icon>
                search cv bank
              </v-btn>
              <v-btn link to="/add-job" color="success">
                <v-icon>mdi-plus</v-icon>
                Post a new job
              </v-btn>
            </div>
          </v-card>
          <!--********** Top card END **************-->
          <v-container class="tab_contain">
            <v-row align="center">
              <v-col cols="12" md="8">
                <v-tabs v-model="tabs">
                  <v-tab>Applicants (12)</v-tab>
                  <v-tab>Job Summary</v-tab>
                  <v-tab>Job Preview</v-tab>
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
              <job-posted-list/>
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
  data: () => {
    return {
      tabs: null,
    }
  }
}
</script>