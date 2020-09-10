<template>
  <v-container class="mainTemplate">
    <v-row class="mainContainer">
      <v-col cols="12" md="10" lg="10">
        <p class="h1Text">Create a Job</p>
        <div>
          <p>Job Title</p>
          <v-text-field
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Enter Job Title"
              outlined
              dense
          ></v-text-field>
        </div>

        <div>
          <p>Job Description</p>
          <v-textarea
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Enter Job Description"
              outlined
              dense
          ></v-textarea>
        </div>

        <div>
          <p>Job Responsibilities</p>
          <div>
            <v-textarea
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Job Responsibilities"
                outlined
                dense
            ></v-textarea>
          </div>
        </div>
        <div>
          <p>Job Location</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Job Location"
                outlined
                dense
            ></v-text-field>
          </div>
        </div>
        <div>
          <p>Job Type</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Job Types"
                outlined
                dense
            ></v-text-field>
          </div>
        </div>

        <div>
          <p>Company Details</p>
        </div>

        <div>
          <p>Address</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter your address"
                outlined
                dense
            ></v-text-field>
          </div>
        </div>

        <div>
          <div class="item-1">
            <p>City</p>
            <div>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Enter your city"
                  outlined
                  dense
              ></v-text-field>
            </div>
          </div>

          <div class="item-2">
            <p>Zip/Post Code</p>
            <div>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Enter your post code"
                  outlined
                  dense
              ></v-text-field>
            </div>
          </div>
        </div>

        <div>
          <div class="item-1">
            <p>Country</p>
            <div>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Enter your country"
                  outlined
                  dense
              ></v-text-field>
            </div>
          </div>
        </div>

        <div>
          <div class="item-1">
            <p>Mobile Number</p>
            <div>
              <vue-tel-input
                  inputClasses="vTelInput"
              ></vue-tel-input>
            </div>
          </div>

          <div class="item-2">
            <p>Optional Number</p>
            <div>
              <vue-tel-input
                  inputClasses="vTelInput"
              >

              </vue-tel-input>
            </div>
          </div>
        </div>

        <div>
          <div class="item-1">
            <v-btn>Cancel</v-btn>
          </div>

          <div class="item-2">
            <v-btn color="#365899" class="white--text">Next</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import '../../../sass/employers/_jobs.scss'
import validation from "@/mixins/validation";

export default {
  name: "AddJobs",
  mixins: [validation],
  data() {
    return {

    };
  },
  methods: {
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    submit() {
      if (!this.$refs.form.validate()) return;
    },
  },
}
</script>