<template>
  <v-container class="mainTemplate">
    <v-form ref="form">
      <v-row class="mainContainer">
        <v-col cols="12" md="11" lg="11">
          <p class="h1Text">Create a Company</p>
          <v-row align="center">
            <v-col cols="12" md="8" lg="8">
              <p>Company Name</p>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Company Name"
                  outlined
                  dense
                  v-model="company.company_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4" md="4" class="text-center">
              <div class="biodata-second">
                <div class="biodata-image-display">
                  <v-avatar class="profile" color="grey" size="164" tile>
                    <v-img
                        :src=" $store.getters.imageUrl + imageUrl"
                        lazy-src="../../../assets/balgownie-avatar.jpg"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        max-width="500"
                        max-height="300"
                    ></v-img>
                  </v-avatar>
                </div>

                <div class="biodata-image-input">
                  <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Choose a photo"
                      prepend-icon="perm_media"
                      label="Avatar"
                      :loading="imageUploadLoading"
                      @change="uploadPhoto"
                      v-model="photo"
                  ></v-file-input>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="4" md="4">
              <p>Company Size</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    placeholder="Enter Company Size"
                    outlined
                    dense
                    v-model="company.company_size"
                    type="email"
                ></v-text-field>
                </div>
            </v-col>
            <v-col cols="12" lg="4" md="4">
              <p>Designation</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    placeholder="Enter Designation"
                    outlined
                    dense
                    v-model="company.designation"
                    type="email"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <p>Company Contact Number</p>
              <vue-tel-input-vuetify
                  outlined
                  dense
                  single-line
                  v-model="company.company_mobile_number"
                  @validate="validate"
                  :required="true"
                  background-color="white"
                  :validCharactersOnly="true"
                  inputClasses="vTelInput"
              ></vue-tel-input-vuetify>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <p>Company Email</p>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Company Email"
                  outlined
                  dense
                  v-model="company.company_email"
                  type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <p>Company licence</p>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Company License"
                  outlined
                  dense
                  type="text"
                  v-model="company.trade_license"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <p>Company Website</p>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Company License"
                  outlined
                  dense
                  type="text"
                  v-model="company.company_website"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <p>Company Location</p>
              <v-text-field
                  v-model="company.company_location"
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Company Location"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
          </v-row>

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

          <v-row>
            <v-col cols="12" md="6" lg="6">
              <p>Contact Name</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    placeholder="Enter your country"
                    outlined
                    dense
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <p>Contact Number</p>
              <div>
                <vue-tel-input-vuetify
                    outlined
                    dense
                    single-line
                    v-model="company.phone_number"
                    @validate="validate"
                    :required="true"
                    background-color="white"
                    :validCharactersOnly="true"
                    inputClasses="vTelInput"
                ></vue-tel-input-vuetify>
              </div>
            </v-col>
          </v-row>

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