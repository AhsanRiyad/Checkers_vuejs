<template>
  <div class="aboutUs-main-container">
    <div class="banner">
      <img src="../../../assets/banner.webp" alt="">
      <div class="content-header">
        <h1>Terms & Condition</h1>
      </div>
    </div>
    <v-container class="aboutUs-main-container__main">
      <v-row justify="center">
        <v-col>
          <p>Welcome to Jobalart! <br>
            These terms and conditions outline the rules and regulations for the use of Company Name's Website, located
            at Website.com.
            <br>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Website
            Name if you do not agree to take all of the terms and conditions stated on this page.
            <br>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
            all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to
            the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
            “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer,
            acceptance and consideration of payment necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision
            of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use
            of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are
            taken as interchangeable and therefore as referring to same.
          </p>
          <div class="terms" v-for="(term, i) in terms" :key="i">
            <h1>{{ term.heading }}</h1>
            <p>{{ term.text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import '../../../sass/job-alart/_aboutUs.scss'

export default {
  name: "Terms&Condition",
  data: () => {
    return {
      terms: [
        {
          heading: 'Cookies',
          text: 'We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Company Name\'s Privacy Policy.\n' +
              'Most interactive websites use cookies to let us retrieve the user\'s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.\n'
        },
        {
          heading: '2. What are the conditions for reposting a job?',
          text: 'Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.',
          must: [
            {list: 'Republish material from Website Name'},
            {list: 'Sell, rent or sub-license material from Website Name'},
            {list: 'Reproduce, duplicate or copy material from Website Name'},
            {list: 'Redistribute content from Website Name'},
          ],
          warrant: [
            {warrantText:''}
          ]
        },
        {
          heading: '3. How many jobs I can keep as draft?',
          text: 'You can keep unlimited number of jobs as drafted job.'
        },
        {
          heading: '4. Am I able to edit any of my live job?',
          text: 'Yes, you can edit any of your live job. Go to the “Edit” option under “Actions” tab.'
        },
        {
          heading: '5. What are the fields I can edit of a live job?',
          text: 'You can edit all the fields of a live job except Job Title and Job Category.'
        },
        {
          heading: '6. What do pending and “Publish Later” mean?',
          text: 'When a job is in “pending” status, it means that your job is waiting for approval of JobAlart.com team. You can check the status of your pending job from support.'
        },
        {
          heading: '7. Is it possible to change company name, if yes then how?',
          text: 'No, once you have created an account on JobAlart.com using a definite company name then you cannot change or edit it.'
        },
        {
          heading: '8. If I view applicant\'s CV, will that be counted as viewing CV Bank CV as well? ',
          text: 'No, viewing applicant\'s CV and viewing CV bank CV are 2(two) different features. So viewing one will not be counted as viewing other.'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
