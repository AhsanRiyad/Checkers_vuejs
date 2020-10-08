<template >
  <div class="mainTemplate_biodata">
    <optionTab />

    <div class="mainContainer_biodata">
      <div class="biodata__flex-container">
        <div>
          <p class="h1Text">Create a Job Alert Resume</p>

          <div class="previewButton">
            <v-btn
              @click.stop="previewButton"
              color="success"
              class="previewButton__button"
            >
              <v-icon class="previewButton__button__icon">remove_red_eye</v-icon
              >Preview
            </v-btn>
          </div>

          <div>
            <p class="pHeader">
              Biodata (
              <span>*Required Field of Biodata</span> )
            </p>

            <v-divider></v-divider>

            <v-form ref="form">
              <div class="biodata-image">
                <div class="biodata-first">
                  <div class="biodata-name">
                    <p>
                      Name
                      <span class="required">*</span>
                    </p>
                    <v-text-field
                      background-color="white"
                      class="mb-0"
                      :rules="[(v) => !!v || 'required']"
                      placeholder="Enter your first name"
                      outlined
                      dense
                      v-model="biodata.full_name"
                      @keyups="saveData"
                    ></v-text-field>
                  </div>

                  <div class="biodata-notice-period">
                    <p>Company Notice Period</p>
                    <div>
                      <v-text-field
                        background-color="white"
                        class="mb-0"
                        :rules="[
                          (v) => !!v || 'required',
                          (v) => v > 0 || 'cant not be negative',
                        ]"
                        placeholder="In month"
                        outlined
                        type="number"
                        dense
                        @keyups="saveData"
                        v-model="biodata.notice_period"
                      ></v-text-field>
                    </div>
                  </div>
                </div>

                <div class="biodata-second">
                  <div class="biodata-image-display">
                    <v-avatar class="profile" color="grey" size="164">
                      <v-img
                        :src="$store.getters.imageUrl + imageUrl"
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
                      :loading="imageUploadLoading"
                      @change="uploadPhoto"
                      v-model="photo"
                    ></v-file-input>
                  </div>
                </div>
              </div>

              <!-- <div class="row-1"></div> -->

              <!--     <div class="row-2">
              <p>Last Name</p>
              <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter your last name"
                outlined
                dense
              ></v-text-field>
              </div>-->

              <!-- <div class="row-3"></div> -->

              <div class="row-4">
                <p>Objectives</p>
                <div>
                  <ckeditor
                    v-model="biodata.objectives"
                    :isValid="true"
                    :editor="editor"
                    :config="editorConfig"
                    @input="saveData"
                  ></ckeditor>
                </div>
              </div>

              <div class="row-5">
                <p>Career Desciriptions</p>
                <div>
                  <ckeditor
                    @input="saveData"
                    v-model="biodata.career_description"
                    :editor="editor"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>

              <div class="row-7">
                <p>Personal Details</p>
              </div>

              <div class="row-8">
                <p>
                  Email
                  <span class="required">*</span>
                </p>
                <div>
                  <v-text-field
                    background-color="white"
                    class="mb-0"
                    placeholder="Enter your address"
                    outlined
                    dense
                    :rules="fieldRulesProp(false, 'email', 'email')"
                    @keyup="saveData"
                    v-model="biodata.contact_email"
                  ></v-text-field>
                </div>
              </div>

              <div class="row-8">
                <p>Address</p>
                <div>
                  <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[(v) => !!v || true]"
                    placeholder="Enter your address"
                    outlined
                    dense
                    @keyup="saveData"
                    v-model="biodata.address"
                  ></v-text-field>
                </div>
              </div>

              <div class="row-10">
                <div class="item-1">
                  <p>
                    Country
                    <span class="required">*</span>
                  </p>
                  <div>
                    <v-autocomplete
                      item-text="country_name"
                      item-value="id"
                      v-model="biodata.country_id"
                      :items="countries"
                      outlined
                      dense
                      background-color="white"
                      placeholder="Select Country"
                    ></v-autocomplete>
                  </div>
                </div>

                <div class="row-9">
                  <div class="item-1">
                    <p>
                      City
                      <span class="required">*</span>
                    </p>
                    <div>
                      <v-text-field
                        background-color="white"
                        class="mb-0"
                        :rules="[(v) => !!v || true]"
                        placeholder="Enter your city"
                        outlined
                        dense
                        @keyups="saveData"
                        v-model="biodata.city"
                      ></v-text-field>
                    </div>
                  </div>

                  <div class="item-2">
                    <p>Zip/Post Code</p>
                    <div>
                      <v-text-field
                        background-color="white"
                        class="mb-0"
                        :rules="[(v) => !!v || true]"
                        placeholder="Enter your post code"
                        outlined
                        dense
                        @keyups="saveData"
                        v-model="biodata.zip_post_code"
                      ></v-text-field>
                    </div>
                  </div>
                </div>

                <div class="item-2">
                  <p>Nationality</p>
                  <div>
                    <v-text-field
                      background-color="white"
                      class="mb-0"
                      :rules="[(v) => !!v || true]"
                      placeholder="Enter your nationality"
                      outlined
                      dense
                      @keyups="saveData"
                      v-model="biodata.nationality"
                    ></v-text-field>
                  </div>
                </div>
              </div>

              <div class="row-11">
                <div class="item-1">
                  <p>Date Of Birth</p>
                  <div>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="biodata.date_of_birth"
                          prepend-inner-icon="event"
                          readonly
                          placeholder="Enter Date of Birth"
                          backgroundColor="white"
                          outlined
                          dense
                          @keyups="saveData"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="biodata.date_of_birth"
                        @input="menu = false"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                </div>

                <div class="item-2">
                  <p>Gender</p>
                  <div>
                    <v-select
                      v-model="biodata.gender"
                      background-color="white"
                      class="mb-0"
                      :rules="[(v) => !!v || true]"
                      placeholder="Enter your gender"
                      outlined
                      :items="['Male', 'Female', 'Common', 'Not Decided']"
                      dense
                      @keyups="saveData"
                    ></v-select>
                  </div>
                </div>
              </div>

              <div class="row-12">
                <p>National Identity Number/ Passport Number</p>
                <div>
                  <v-text-field
                    background-color="white"
                    v-model="biodata.identity_number"
                    class="mb-0"
                    :rules="[(v) => !!v || true]"
                    placeholder="Enter your nid/passport no."
                    outlined
                    dense
                    @keyups="saveData"
                  ></v-text-field>
                </div>
              </div>

              <div class="row-13">
                <div class="item-1">
                  <p>
                    Mobile Number
                    <span class="required">*</span>
                  </p>
                  <div>
                    <vue-tel-input-vuetify
                      outlined
                      dense
                      single-line
                      @validate="validate"
                      @input="saveData"
                      @focus="focus"
                      v-model="biodata.mobile_number"
                      :rules="[(v) => !!v || 'required']"
                      :validCharactersOnly="true"
                      :inputClasses="vTelInput"
                      background-color="white"
                    ></vue-tel-input-vuetify>
                    <!-- <small v-if="biodata.mobile_number == ''" class="required">mobile number is required</small> -->
                  </div>
                </div>

                <div class="item-2">
                  <p>Optional Number</p>
                  <div>
                    <vue-tel-input-vuetify
                      outlined
                      dense
                      single-line
                      v-model="biodata.anothermobile_number"
                      @validate="validate"
                      @input="saveData"
                      :required="true"
                      background-color="white"
                      :validCharactersOnly="true"
                      inputClasses="vTelInput"
                    ></vue-tel-input-vuetify>
                  </div>
                </div>
              </div>
            </v-form>
          </div>

          <div class="row-14">
            <div class="item-1">
              <v-btn
                @click.stop="
                  () => {
                    $router.history.push('/');
                  }
                "
                >Back</v-btn
              >
            </div>

            <div class="item-2">
              <v-btn
                :loading="loading"
                color="#365899"
                class="white--text"
                @click.stop="nextBtn"
                >Save</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <resumePreview
      @close="() => myDialogClose()"
      :dialogVisible="dialogSwitch"
    />

    <!-- loading data  starts-->
    <v-dialog v-model="loadingData" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Loading Data...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- loading data  ends-->
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import validation from "../../../mixins/validation";
// import { eventBus } from '@/main';
// import axios from 'axios';
export default {
  name: "Biodata",
  mixins: [validation],
  components: {
    optionTab: () => import("./tab/optionTab"),
    resumePreview: () => import("../Dialog/resumePreview"),
  },
  data: () => {
    return {
      date: "",
      menu: "",
      loadingData: false,
      dialogSwitch: false,

      loading: false,

      photo: null,

      countries: [],

      imageUrl: "",

      biodata: {
        full_name: "",
        contact_email: "",
        address: "",
        city: "",
        zip_post_code: "",
        country_id: "",
        nationality: "",
        date_of_birth: "",
        gender: "",
        identity_number: "",
        mobile_number: "",
        another_mobile_number: "",
        objectives: "",
        photo: "",
        career_description: "",
        cover_letter: "",
        notice_period: "",
      },

      imageUploadLoading: false,

      // rules: [
      //   (value) =>
      //     !value ||
      //     value.size < 2000000 ||
      //     "Avatar size should be less than 2 MB!",
      // ],

      rules: [() => true],

      vTelInput: "vTelInput",

      search: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },
    };
  },
  methods: {
    getData() {
      this.loadingData = true;

      this.$store
        .dispatch("callApi", {
          url: "resume/",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("resume.. data", response);
          // eventBus.$emit( "fillData" , response.data );
          this.countries = response.data.countryList;
          this.biodata = { ...this.biodata, ...response.data.biodata };
          this.imageUrl = this.biodata.photo;
          console.log("this is biodata info... ", this.biodata);
          this.$store.commit("biodata", this.biodata);
          console.log("this is  ", this.$store.getters.biodata);
          this.$store.commit("resume", response.data);

          console.log("resume data...", this.$store.getters.resume);

          //  this.$refs.form.reset();
          //  saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
        })
        .catch(() => {
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loadingData = false;
          //  this.tableLoading = false;
        });
    },
    myDialogClose() {
      this.dialogSwitch = false;
    },
    nextBtn() {
      console.log("next btn clicked");
      //  if(!this.$refs.form.validate()) return;

      this.loading = true;

      let data = {};
      data = this.R.pick(
        [
          "full_name",
          "contact_email",
          "address",
          "city",
          "zip_post_code",
          "country_id",
          "nationality",
          "date_of_birth",
          "gender",
          "identity_number",
          "mobile_number",
          "another_mobile_number",
          "objectives",
          "photo",
          "career_description",
          "cover_letter",
          "notice_period",
          "another_mobile_number",
        ],
        this.$store.getters.biodata
      );
      data = {
        ...data,
        ...{
          country_id:
            this.R.isNil(data.country_id.id) ||
            this.R.isEmpty(data.country_id.id)
              ? ""
              : data.country_id.id,
        },
      };
      console.log(data);

      this.$store
        .dispatch("callApi", {
          url: "resume/biodata",
          method: "post",
          data,
        })
        .then((response) => {
          console.log("resume ... ff ", response);
          this.getData();
          this.$awn.success("Updated!");

          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
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
    validate({ number, isValid, country }) {
      console.log(number);
      console.log(isValid);
      console.log(country);
      console.log("validating...");
      return true;
    },
    focus() {
      console.log("clicked focus.....");
      if (this.biodata.mobile_number == "") this.vTelInput = "vTelInput_error";
      else this.vTelInput = "vTelInput";
    },

    submit() {
      console.log("biodate ", this.biodata);
    },
    saveData() {
      if (
        !this.R.isEmpty(this.biodata.mobile_number) &&
        !this.R.isEmpty(this.biodata.full_name) &&
        !this.R.isEmpty(this.biodata.contact_email)
      )
        this.$store.commit("resumeNextbtn", false);
      else this.$store.commit("resumeNextbtn", true);

      if (this.biodata.mobile_number == "") this.vTelInput = "vTelInput_error";
      else this.vTelInput = "vTelInput";

      /*  let biodata =  this.R.pick(['full_name', 'contact_email', 'address', 'city', 'zip_post_code', 'country_id', 'nationality', 'date_of_birth', 'gender', 'identity_number', 'mobile_number', 'another_mobile_number', 'objectives', 'photo', 'career_description', 'cover_letter', 'notice_period'], this.biodata);
       */

      this.$store.commit("biodata", this.biodata);
      console.log("biodada... ", this.$store.getters.biodata);
    },
    previewButton() {
      // this.dialogSwitch = true;
      if (
        this.R.isNil(this.$store.getters.resume.payload.biodata) ||
        this.R.isEmpty(this.$store.getters.resume.payload.biodata) ||
        this.R.isNil(this.$store.getters.resume.payload.experiences) ||
        this.R.isEmpty(this.$store.getters.resume.payload.experiences) ||
        this.R.isNil(this.$store.getters.resume.payload.qualification) ||
        this.R.isEmpty(this.$store.getters.resume.payload.qualification)
      ) {
        this.$awn.alert("Sorry, Your resume is not complete!");
        return;
      }
      this.dialogSwitch = true;
    },

    uploadPhoto() {
      console.log(this.photo);

      // if(this.photo.size > 2048) return;
      this.imageUploadLoading = true;

      let data = new FormData();
      data.append("image", this.photo);
      data.append("id", this.$cookies.get("_id"));

      this.$store
        .dispatch("upload", {
          url: "profile-photo",
          method: "post",
          data,
        })
        .then((response) => {
          console.log("file upload response...", response);

          // this.imageUrl = "https://cdn.vuetifyjs.com/images/cards/server-room.jpg";
          this.imageUrl = response;
          this.biodata.photo = response;
          this.saveData();
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
  created() {},
  mounted() {
    this.$store.commit("resumePrevbtn", true);
    this.$store.commit("resumeNextbtn", true);
    this.$store.commit("componentName", "Biodata");
    this.getData();
  },
};
</script>

<style scoped lang="scss">
@import "../../../sass/job-alart/_Biodata.scss";
@import "../../../sass/job-alart/_Resume.scss";
</style>
