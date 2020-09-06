<template>
<div class="jobApplied_online">
  <v-container>
    <v-row justify="center">
      <v-col cols="5" md="5" lg="5">
        <v-card>
          <h1>Submit application online</h1>
          <ul class="online_info_list">
            <li><div class="side_title">Account Name</div> <span>Farzana Kabir</span></li>
            <li><div class="side_title">Company</div> <span>PriyoShop.com Ltd.</span></li>
            <li><div class="side_title">Position Applied</div> <span>Senior Software Engineer</span></li>
            <li><div class="side_title">Your Expected Salary</div> <v-text-field dense outlined placeholder="eg. 50000"/> <small>(Monthly)</small></li>
            <v-divider></v-divider>
            <v-card-actions class="mt-6">
              <v-btn color="success">apply</v-btn>
              <v-btn color="error">close</v-btn>
            </v-card-actions>
          </ul>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import '../../../sass/job-alart/_JobCard.scss'
export default {
  name: "JobOnlineApply"
}
</script>