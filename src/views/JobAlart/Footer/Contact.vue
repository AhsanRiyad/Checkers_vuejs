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
      </v-row>
      <div class="d-flex justify-center">
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
            <p></p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import '../../../sass/job-alart/_contact.scss'

export default {
  name: "Contact",
  data: () => ({
    valid: false,
    name: '',
    email: '',
    mobile: '',
    message: '',
    verify: '',
    numberRule: [v => !!v || 'Required'],
    emailRules: [
      v => !!v || 'Required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    rules: {
      required: value => !!value || 'Required.',
    },
  }),
  methods: {
    clearForm() {
      this.name = ''
      this.email = ''
      this.mobile = ''
      this.message = ''
    },
    resetValidation() {
      this.$refs.contactForm.resetValidation()
    },
    submit() {
      if (!this.$refs.contactForm.validate()) return
      // axios calling, actions will be dispatched asynchronously
      this.$store
          .dispatch('callApi', {
            url: '/feedback',
            method: 'post',
            data: {
              name: this.name,
              email: this.email,
              mobile: this.mobile,
              message: this.message,
            },
          })
          .then(() => {
            this.status_text = 'Feedback send'
            this.clearForm()
            this.resetValidation()
          })
          .catch(() => {
            this.status_text = 'Failed to response'
          })
    },
  },
}
</script>
