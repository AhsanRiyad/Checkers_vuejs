<template>
  <div class="aboutUs-main-container">
    <div class="banner">
      <img src="../../../assets/banner.webp" alt="">
      <div class="content-header">
        <h1>FAQ</h1>
      </div>
    </div>
    <v-container class="aboutUs-main-container__main">
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(fa,i) in faq"
              :key="i"
          >
            <v-expansion-panel-header style="font-size: 22px; font-weight: bold">{{fa.heading}}</v-expansion-panel-header>
            <v-expansion-panel-content>
            {{fa.text}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import '../../../sass/job-alart/_aboutUs.scss'
export default {
name: "FAQCompany",
  data: () => {
    return {
      faq: [
        {heading:'1. Is it possible to extend time period of a live job?', text:'It depends on what type of corporate user you are. If you are a CM (Corporate Member), then you can extend time period of your live job as per your corporate membership nature. Otherwise, you can extend or shorten your live job within default 30 days.'},
        {heading:'2. What are the conditions for reposting a job?', text:'If you want to repost a job within 7 (seven) days of expiration, you have to change the job title. But from after that, there is no such obligation.'},
        {heading:'3. How many jobs I can keep as draft?', text:'You can keep unlimited number of jobs as drafted job.'},
        {heading:'4. Am I able to edit any of my live job?', text:'Yes, you can edit any of your live job. Go to the “Edit” option under “Actions” tab.'},
        {heading:'5. What are the fields I can edit of a live job?', text:'You can edit all the fields of a live job except Job Title and Job Category.'},
        {heading:'6. What do pending and “Publish Later” mean?', text:'When a job is in “pending” status, it means that your job is waiting for approval of JobAlart.com team. You can check the status of your pending job from support.'},
        {heading:'7. Is it possible to change company name, if yes then how?', text:'No, once you have created an account on JobAlart.com using a definite company name then you cannot change or edit it.'},
        {heading:'8. If I view applicant\'s CV, will that be counted as viewing CV Bank CV as well? ', text:'No, viewing applicant\'s CV and viewing CV bank CV are 2(two) different features. So viewing one will not be counted as viewing other.'},
      ],
    }
  },
}
</script>

<style scoped>

</style>
