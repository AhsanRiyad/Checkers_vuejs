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
name: "FAQSeekers",
  data: () => {
    return {
      faq: [
        {heading:'1. What is Jobalart?', text:'Jobalart is the biggest and also prominent career management website in UAE. It has started its venture since July 2020 with the goal to facilitate the job seekers to manage their career more professionally. This website always helps employers to manage many of these tasks associated recruitment procedure more efficiently and also permit them to save time plus money.'},
        {heading:'2. How can I submit my resume?', text:'The procedure of submitting your resume at Jobalart is moderately very simple. Just click the Create New Account link or Post Resume option at home page. The JobAlart.com website may guide you to submit your resume through 5 consecutive steps.'},
        {heading:'3. How can I edit my resume?', text:'a.Sign in to your ‘Jobalart’ account using your User ID & Password.' +
              'b. After successful sign in, click Edit Resume option.' +
              'c. Now, choose any part of your resume to edit.' +
              'd. After updating information click on save button.'},
        {heading:'4.	Does it cost to post my resume?', text:'No, it’s absolutely free and also you do not have to pay any cost to submit your resume at JobAlart.com.'},
        {heading:'5. What is User ID/Password?', text:'The User ID/Password is your sign in credential to your Jobalart\'s account. With the User ID/Password, you may sign in to Jobalart account for managing your resume.'},
        {heading:'6. If I lost my User ID how can I retrieve that?', text:'To retrieve your lost/forgotten User ID follow the steps:\n' +
              '\n' +
              '•\tClick on "Forgot User ID/Password?" below your sign in option.\n' +
              '•\tA new window will appear; here you will get three options (User ID, Password and User ID & Password) to select. Select the User ID and submit it.\n' +
              '•\tNow, type the e-mail address or mobile number which you have provided while creating your Jobalart account.\n' +
              '•\tYou will get an option that shows your name and User ID, select the option and submit it.\n' +
              '•\tAfter that provide your date of birth to verify your account.\n' +
              '•\tYour User ID has been sent to your e-mail address or mobile number.\n'},
        // {heading:'7. Is it possible to change company name, if yes then how?', text:'No, once you have created an account on JobAlart.com using a definite company name then you cannot change or edit it.'},
        // {heading:'8. If I view applicant\'s CV, will that be counted as viewing CV Bank CV as well? ', text:'No, viewing applicant\'s CV and viewing CV bank CV are 2(two) different features. So viewing one will not be counted as viewing other.'},
      ],
    }
  },
}
</script>

<style scoped>

</style>
