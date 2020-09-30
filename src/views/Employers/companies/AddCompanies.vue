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
                :rules="[v=>!!v||'required']"
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
                <div class="biodata-image-input">
                  <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Choose a photo"
                    prepend-icon="perm_media"
                    label="Company Logo"
                    :loading="imageUploadLoading"
                    v-model="photo"
                  ></v-file-input>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12" lg="6" md="6">
              <p>Company Branch Name</p>
              <div>
                <v-text-field
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Company Branch Name"
                  outlined
                  dense
                  v-model="company.branch_name"
                  type="text"
                ></v-text-field>
              </div>
            </v-col>
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
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <p>Company Size</p>
              <div>
                <v-select
                  :menu-props="{ maxHeight: '400' }"
                  label="Select Company Size"
                  persistent-hint
                  item-text="company_name"
                  :items="companySize"
                  :rules="[v=>!!v||'required']"
                  item-value="id"
                  dense
                  outlined
                  v-model="company.company_size"
                  background-color="white"
                ></v-select>
              </div>
            </v-col>

            <v-col cols="12" md="6" lg="6">
              <p>Company Contact Number</p>
              <vue-tel-input-vuetify
                outlined
                dense
                single-line
                v-model="company.company_mobile_number"
                :rules="[v=>!!v||'required']"
                @validate="validate"
                :required="true"
                background-color="white"
                :validCharactersOnly="true"
                inputClasses="vTelInput"
                type="number"
              ></vue-tel-input-vuetify>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <p>Company Email</p>
              <v-text-field
                :rules="[v=>!!v||'required']"
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
              <p>Trade licence</p>
              <v-text-field
                :rules="[v=>!!v||'required']"
                background-color="white"
                class="mb-0"
                placeholder="Enter Trade License"
                outlined
                dense
                type="text"
                v-model="company.trade_license"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <p>Company Address</p>
              <v-text-field
                :rules="[v=>!!v||'required']"
                v-model="company.company_address"
                background-color="white"
                class="mb-0"
                placeholder="Enter Company Address"
                outlined
                dense
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <p>Company Location</p>
              <v-text-field
                :rules="[v=>!!v||'required']"
                v-model="company.company_location"
                background-color="white"
                class="mb-0"
                placeholder="Enter Company Location"
                outlined
                dense
                type="text"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12" lg="12">
              <p>About Your Company</p>
              <div>
                <v-textarea
                  :rules="[v=>!!v||'required']"
                  v-model="company.about_us"
                  background-color="white"
                  class="mb-0"
                  hint="max 300 words"
                  placeholder="Write About Your Company"
                  outlined
                  dense
                ></v-textarea>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12" lg="12" class="text-center">
              <h2 class="text-capitalize">contact person's details</h2>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <p>Contact Person Name</p>
              <div>
                <v-text-field
                  v-model="company.contact_name"
                  :rules="[v=>!!v||'required']"
                  background-color="white"
                  class="mb-0"
                  placeholder="Enter Contact person"
                  outlined
                  dense
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
                  :rules="[v=>!!v||'required']"
                  v-model="company.designation"
                  type="text"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <p>Contact Person Number</p>
              <div>
                <vue-tel-input-vuetify
                  outlined
                  dense
                  single-line
                  v-model="company.phone_number"
                  :rules="[v=>!!v||'required']"
                  @validate="validate"
                  :required="true"
                  background-color="white"
                  :validCharactersOnly="true"
                  inputClasses="vTelInput"
                  type="number"
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
      companyId: "",
      photo: null,
      companyLogo: "",
      company: {
        company_name: "",
        company_address: "",
        company_email: "",
        company_mobile_number: "",
        company_logo: "",
        company_location: "",
        branch_name: "",
        about_us: "",
        trade_license: "",
        company_size: "",
        company_website: "",
        contact_name: "",
        phone_number: "",
      },
      companySize: ["Small", "Medium", "Large"],
    };
  },
  methods: {
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    validate({ number, isValid, country }) {
      console.log(number);
      console.log(isValid);
      console.log(country);
      console.log("validating...");
      return true;
    },
    // focus() {
    //   console.log("clicked focus.....");
    //   if (this.company.company_mobile_number == "") this.vTelInput = "vTelInput_error";
    //   else this.vTelInput = "vTelInput";
    // },
    submit() {
      if (!this.$refs.form.validate()) return;

      this.$store
        .dispatch("callApi", {
          url: "companies/new",
          method: "post",
          data: this.company,
        })
        .then((response) => {
          console.log("company create response..", response);
          this.companyId = response.company.id;
          this.$awn.success("Updated!");
          this.uploadPhoto();
          /* setTimeout(() => {
            this.$router.push({ name: "CompanyList" });
          }, 1000); */
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
    updateLogo() {
      this.$store
        .dispatch("callApi", {
          url: `companies/${this.companyId}/company-logo`,
          method: "put",
          data: { company_logo: this.companyLogo },
        })
        .then((response) => {
          console.log(response);
          this.$awn.success("Logo Updated!");
          /* setTimeout(() => {
            this.$router.push({ name: "CompanyList" });
          }, 1000); */
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
    uploadPhoto() {
      console.log(this.photo);

      // if(this.photo.size > 2048) return;
      this.imageUploadLoading = true;

      let data = new FormData();
      data.append("image", this.photo);
      data.append("id", this.companyId);

      this.$store
        .dispatch("upload", {
          url: "company-logo",
          method: "post",
          data,
        })
        .then((response) => {
          console.log("file upload response...", response);
          this.companyLogo = response;
          this.updateLogo();
          // this.imageUrl = "https://cdn.vuetifyjs.com/images/cards/server-room.jpg";
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
        })
        .catch(() => {
          this.$awn.alert("Failed! Email/Password doesn't match");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          //  this.tableLoading = false;
          this.imageUploadLoading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>
