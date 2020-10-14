<template>
  <div class="contact_form">
    <v-sheet>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5013386320666!2d55.14727611544736!3d25.084885242402756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbd26893ae9%3A0x1247353009206f36!2sMarina%20walk%20garden!5e0!3m2!1sen!2sus!4v1595869823895!5m2!1sen!2sus"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
      />
    </v-sheet>
    <v-container class="mt-10 ">
      <v-row>
        <v-col class="text-center"  cols="12" lg="12">
          <h1>Contact With Us</h1>
        </v-col>
        <v-col cols="12">
          <div class="contact">
            <div class="contact_box">
              <div class="contact_icon">
                <v-icon>mdi-email</v-icon>
              </div>
              <div class="contact_body">
                <h3>Email Address</h3>
                <a href="mailto:info@redspice.ae">
                  <span>info@jobalart.com</span>
                </a>
              </div>
            </div>
            <div class="contact_box">
              <div class="contact_icon">
                <v-icon>mdi-map-marker</v-icon>
              </div>
              <div class="contact_body">
                <h3>Location</h3>
                <p>A-64-00-02-05 – Flamingo Villas Ajman, United Arab Emirates PO Box: 31436</p>
              </div>
            </div>
          </div>
        </v-col>
<!--        <v-col>-->
<!--        <div style="width: 70%; margin: 0 auto">-->
<!--          <p>At Jobalart, we are committed to making the job search process simple and also stress free. Our job search-->
<!--            engine is built with powerful technology that aims to match the right job opportunities with the correct people. To find the latest and also most relevant job openings, only browse by job title, company, city or state. Or become a member to get the first alerts on jobs you will like. Always, ensure to check out the career advice section of the website for other job search tools such as resume samples and also interview tips. So, start searching, and see what we've got. You might just find better.</p>-->
<!--        </div>-->
<!--        </v-col>-->
      </v-row>

    </v-container>
  </div>
</template>

<script>
import '../../../sass/job-alart/_contact.scss'

export default {
  name: "Contact",
}
</script>
