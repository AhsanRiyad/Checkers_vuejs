<template>
  <div class="employersPanel">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-tabs v-model="tabs"
              background-color="indigo"
              dark
          >
            <v-tab>
             Jobs
            </v-tab>
            <v-tab>
              Companies
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <employers-jobs/>
            </v-tab-item>
            <v-tab-item>

            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
name: "EmployersPanel",
  components: {
    EmployersJobs: () => import('./Jobs/JobsTab'),
  },
  data: () => {
    return {
      tabs: null,
    }
}
}
</script>

<style scoped>

</style>