<template>
  <v-container class="mainTemplate">
    <v-form ref="form">
      <v-row class="mainContainer">
        <v-col cols="12" md="11" lg="11">
          <p class="h1Text">Create a Company</p>
          <div>
            <p>Company Name</p>
            <v-text-field
              background-color="white"
              class="mb-0"
              placeholder="Enter Company Name"
              outlined
              dense
              v-model="company.company_name"
            ></v-text-field>
          </div>

          <div>
            <p>Company Address</p>
            <v-textarea
              background-color="white"
              class="mb-0"
              placeholder="Enter Company Address"
              outlined
              dense
              v-model="company.company_address"
            ></v-textarea>
          </div>

          <div>
            <p>Company Responsibilities</p>
            <div>
              <v-text-field
                background-color="white"
                class="mb-0"
                placeholder="Enter Company Email"
                outlined
                dense
                v-model="company.company_email"
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
                placeholder="Enter Company Mobile Number"
                outlined
                dense
                type="number"
                v-model="company.phone_number"
              ></v-text-field>
            </div>
          </div>
          <div>
            <p>Company Location</p>
            <div>
              <v-text-field
                v-model="company.company_location"
                background-color="white"
                class="mb-0"
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
                placeholder="Enter Company Website"
                outlined
                v-model="company.company_website"
                dense
              ></v-text-field>
            </div>
          </div>
          <div>
            <p>About Us</p>
            <div>
              <v-textarea
                v-model="company.about_us"
                background-color="white"
                class="mb-0"
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
                  v-model="company.contact_name"
                  class="mb-0"
                  placeholder="Enter Contact Name"
                  outlined
                  dense
                ></v-text-field>
              </div>
            </div>
            <div class="item-2">
              <p>Contact Number</p>
              <div>
                <vue-tel-input-vuetify
                  v-model="company.company_mobile_number"
                  label="Outlined"
                  single-line
                  outlined
                  dense
                ></vue-tel-input-vuetify>
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
                  placeholder="Enter your country"
                  outlined
                  dense
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="text-right">
            <div class="item-2">
              <v-btn color="#365899" class="white--text" @click.stop="submit">Save</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import validation from "@/mixins/validation";
import "../../../sass/employers/_jobs.scss";

export default {
  name: "AddCompanies",
  mixins: [validation],
  data() {
    return {
      phone: null,
      company: {},
    };
  },
  methods: {
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    submit() {
      if (!this.$refs.form.validate()) return;

      this.$store
        .dispatch("callApi", {
          url: "companies/new",
          method: "post",
          data: {
            company: this.company,
          },
        })
        .then((response) => {
          console.log(response);
          this.$awn.success("Updated!");

          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  this.items = response.data;
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;
          //  this.tableLoading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>