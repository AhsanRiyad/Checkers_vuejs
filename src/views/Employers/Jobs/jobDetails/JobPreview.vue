<template>
  <v-container class="jp">
    <v-row>
      <v-col cols="12">
        <v-card class="ja__card">
          <div class="chart_top d-flex justify-space-between align-center">
            <div class="ch_left">
              <p class="title text-capitalize">overall summary of the hiring process</p>
            </div>
            <div class="ch_right d-flex align-center">
              <p class="text-capitalize">recruitment status: <span class="font-weight-bold">processing</span></p>
              <v-btn depressed class="text-capitalize mr-3 ml-3">
                <v-icon small>mdi-google-analytics</v-icon>
                job analytics
              </v-btn>
              <v-btn depressed class="text-capitalize">
                <v-icon small>mdi-printer</v-icon>
              </v-btn>
            </div>
          </div>
          <!-- statistics start -->
          <div class="jp_summary_cards d-flex justify-space-between">
            <v-card>
              <v-card-title class="text-capitalize">total applicants</v-card-title>
              <div class="card_bottom d-flex justify-space-between align-center">
                <h1 class="font-weight-bold">992</h1>
                <v-icon>mdi-account-group</v-icon>
              </div>
            </v-card>
            <v-card>
              <v-card-title class="text-capitalize">recruitment steps</v-card-title>
              <div class="card_bottom d-flex justify-space-between align-center">
                <h1 class="font-weight-bold">992</h1>
                <v-icon>mdi-printer</v-icon>
              </div>
            </v-card>
            <v-card>
              <v-card-title class="text-capitalize">total schedules</v-card-title>
              <div class="card_bottom d-flex justify-space-between align-center">
                <h1 class="font-weight-bold">992</h1>
                <v-icon>mdi-calendar-month</v-icon>
              </div>
            </v-card>
            <v-card>
              <v-card-title class="text-capitalize">total invitations</v-card-title>
              <div class="card_bottom d-flex justify-space-between align-center">
                <h1 class="font-weight-bold">992</h1>
                <v-icon>mdi-email-newsletter</v-icon>
              </div>
            </v-card>
            <v-card>
              <v-card-title class="text-capitalize">hired</v-card-title>
              <div class="card_bottom d-flex justify-space-between align-center">
                <h1 class="font-weight-bold">992</h1>
                <v-icon>mdi-account-check</v-icon>
              </div>
            </v-card>
          </div>
          <!-- statistics end -->
          <!--chart start-->
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <pie-chart/>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <bar-chart/>
            </v-col>
          </v-row>
          <!--chart end-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import PieChart from "@/components/chart/PieChart";
import BarChart from "@/components/chart/BarChart";
export default {
  name: "JobPreview",
  components: {BarChart, PieChart},
}
</script>

<style scoped>

</style>