<template>
  <v-container class="mainTemplate">
    <v-row class="mainContainer">
      <v-col cols="12" md="10" lg="10">
        <p class="h1Text">Create a Company</p>
        <div>
          <p>Company Name</p>
          <v-text-field
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Enter Company Name"
              outlined
              dense
          ></v-text-field>
        </div>

        <div>
          <p>Company Address</p>
          <v-textarea
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Enter Company Address"
              outlined
              dense
          ></v-textarea>
        </div>

        <div>
          <p>Company Responsibilities</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Company Email"
                outlined
                dense
                type="email"
            ></v-text-field>
          </div>
        </div>
        <div>
          <p>Company Mobile Number</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Company Mobile Number"
                outlined
                dense
                type="number"
            ></v-text-field>
          </div>
        </div>
        <div>
          <p>Company Location</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Company Location"
                outlined
                dense
            ></v-text-field>
          </div>
        </div>
        <div>
          <p>Company Website</p>
          <div>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Company Website"
                outlined
                dense
            ></v-text-field>
          </div>
        </div>
        <div>
          <p>About Us</p>
          <div>
            <v-textarea
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="About us"
                outlined
                dense
            ></v-textarea>
          </div>
        </div>

        <div class="d-flex">
          <div class="item-1">
            <p>Contact Name</p>
            <div>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Enter Contact Name"
                  outlined
                  dense
              ></v-text-field>
            </div>
          </div>
          <div class="item-2">
            <p>Contact Number</p>
            <div>
              <vue-tel-input-vuetify label="Outlined"
                                     single-line
                                     outlined dense  v-model="phone"></vue-tel-input-vuetify>
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

        <div class="text-right">
          <div class="item-2">
            <v-btn color="#365899" class="white--text">Save</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import validation from "@/mixins/validation";
import '../../../sass/employers/_jobs.scss'

export default {
name: "AddCompanies",
  mixins: [validation],
  data() {
    return {
      phone: null
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

<style scoped>

</style>