<template>
<div class="applied-job">
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center ja__headline">Applied Jobs</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="ja__card">
          <v-card flat class="ja__selected_card">
            <v-col cols="12" md="3">
              <v-text-field></v-text-field>
            </v-col>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import '../../sass/job-alart/_appliedJobs.scss'
export default {
name: "appliedJobs"
}
</script>