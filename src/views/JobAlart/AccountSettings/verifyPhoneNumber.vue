<template>
  <div class="verify">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">Verify your phone number</h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="ja__card">
            <v-form ref="form">
              <v-col>
                <p class="ma-0">Verification code sent to +880 1850-699118. Enter the code you received below.</p>
              </v-col>
              <v-col cols="12" md="8" class="col-2 mb-0 pb-0">
                <p class="mb-1">Verification Code</p>
                <v-text-field
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="code"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
              <div class="ja__button">
                <v-btn color="#365899" class="white--text ma-2" @click.stop="submit">save</v-btn>
                <v-btn color="#365899" class="white--text ma-2" link to="/account-settings">cancel changes</v-btn>
              </div>
              <v-col>
                <p class="ma-0">Didn't receive your code? <span>Resend code</span></p>
                <p class="ma-0">Send to a different phone number.</p>
              </v-col>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
name: "verifyPhoneNumber",
  methods: {
    submit(){
      this.$refs.form.validate();
    }
  }
}
</script>
