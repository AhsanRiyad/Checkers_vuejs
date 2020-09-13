<template>
  <div class="change_email">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center ja__headline">Please enter your email:</h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="ja__card">
            <v-form ref="form">
              <v-col cols="12" md="8" class="col-1 mb-n4 pb-0">
                <p class="mb-1">New email address</p>
                <v-text-field
                  :rules="[v=>!!v||'required']"
                  class="mb-0 pb-0 mb-0"
                  placeholder="Email"
                  outlined
                  dense
                ></v-text-field>
              </v-col>

              <div class="ja__button">
                <v-btn color="#00204e" class="white--text ma-2" @click.stop="submit">save</v-btn>
                <v-btn
                  color="#00204e"
                  class="white--text ma-2"
                  link
                  to="/account-settings"
                >cancel changes</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../../../sass/job-alart/_accountSettings.scss";

export default {
  name: "changeEmail",
  methods: {
    submit() {
      this.$refs.form.validate();
    },
  },
};
</script>