<template>
  <div class="jobsTab">
    <v-card>
      <!--********** Top card start **************-->
      <v-card flat class="ja__selected_card">
        <div class="top_portion text-right">
          <v-btn class="mr-2" color="primary" v-if="false">
            <v-icon>mdi-magnify</v-icon>
            search cv bank
          </v-btn>
          <v-btn link to="/add-companies" color="success">
            <v-icon>mdi-plus</v-icon>
            Create A Company
          </v-btn>
        </div>
      </v-card>
      <!--********** Top card END **************-->
      <v-container class="tab_contain">
        <v-row align="center">
          <v-col cols="12" md="8">
            <v-tabs v-model="tabs">
              <v-tab>Company List</v-tab>
              <v-tab v-if="false">Drafted companies (12)</v-tab>
              <v-tab v-if="false">Archived companies (12)</v-tab>
            </v-tabs>
          </v-col>
          <!--              <v-col cols="12" md="4" class="text-right">-->
          <!--                <div class="tab-right_side d-flex">-->
          <!--                  -->
          <!--                </div>-->
          <!--              </v-col>-->
          <v-col cols="12" md="4" v-if="false">
            <div class="tab-right_side d-flex">
              <v-btn link to="/add-companies" color="success">
                <v-icon>mdi-plus</v-icon>
                Create A Company
              </v-btn>
              <v-text-field
                  dense
                  class="mx-4"
                  flat
                  hide-details
                  label="Search job by title"
                  append-icon="search"
                  solo-inverted
              ></v-text-field>
              <v-text-field outlined dense  placeholder="Date range" prepend-inner-icon="event" single-line></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <company-posted-list/>
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
  </div>
</template>

<script>
export default {
name: "companiesTab",
  components: {
    CompanyPostedList: () => import('./CompanyTabs/AllCompanyList'),
  },
  data: vm => ({
    tabs: null,
    dates: ['', ''],
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style scoped>

</style>
