<template >
  <div>
    <p class="pHeader">
      Biodata (
      <span>*Required Field of Education</span> )
    </p>

    <v-divider></v-divider>

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
            :rules="[v=>!!v||'required']"
            placeholder="Enter your first name"
            outlined
            dense
            v-model="biodata.fullName"
            @keyups="saveData"
          ></v-text-field>
        </div>

        <div class="biodata-notice-period">
          <p>Company Notice Period</p>
          <div>
            <v-text-field
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||true]"
              placeholder="In month"
              outlined
              type="number"
              dense
              @keyups="saveData"
              v-model="biodata.noticePeriod"
            ></v-text-field>
            <p>Days</p>
          </div>
        </div>
      </div>

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
          v-model="biodata.careerDescription"
          :editor="editor"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </div>

    <div class="row-6">
      <p>Cover Letter</p>
      <div>
        <ckeditor
          @input="saveData"
          v-model="biodata.coverLetter"
          :editor="editor"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </div>

    <div class="row-7">
      <p>Personal Details</p>
    </div>

    <div class="row-8">
      <p>Address</p>
      <div>
        <v-text-field
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||true]"
          placeholder="Enter your address"
          outlined
          dense
          @keyup="saveData"
          v-model="biodata.address"
        ></v-text-field>
      </div>
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
          :rules="[v=>!!v||'email is required']"
          placeholder="Enter your address"
          outlined
          dense
          @keyup="saveData"
          v-model="biodata.contactEmail"
        ></v-text-field>
      </div>
    </div>

    <div class="row-9">
      <div class="item-1">
        <p>City</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||true]"
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
            :rules="[v=>!!v||true]"
            placeholder="Enter your post code"
            outlined
            dense
            @keyups="saveData"
            v-model="biodata.zipPostCode"
          ></v-text-field>
        </div>
      </div>
    </div>

    <div class="row-10">
      <div class="item-1">
        <p>Country</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||true]"
            placeholder="Enter your country"
            outlined
            dense
            @keyups="saveData"
            v-model="biodata.countryId"
          ></v-text-field>
        </div>
      </div>

      <div class="item-2">
        <p>Nationality</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||true]"
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
                v-model="biodata.dateOfBirth"
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
            <v-date-picker v-model="biodata.dateOfBirth" @input="menu = false"></v-date-picker>
          </v-menu>
        </div>
      </div>

      <div class="item-2">
        <p>Gender</p>
        <div>
          <v-select
            v-model="biodata.gender "
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||true]"
            placeholder="Enter your gender"
            outlined
            :items="['Male', 'Female', 'Common' ,'Not Decided']"
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
          v-model="biodata.identityNumber"
          class="mb-0"
          :rules="[v=>!!v||true]"
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
          <vue-tel-input
            @validate="validate"
            @input="saveData"
            @focus="focus"
            v-model="biodata.mobileNumber"
            :required="true"
            :validCharactersOnly="true"
            :inputClasses="vTelInput"
          ></vue-tel-input>
          <small v-if="biodata.mobileNumber == ''" class="required">mobile number is required</small>
        </div>
      </div>

      <div class="item-2">
        <p>Optional Number</p>
        <div>
          <vue-tel-input
            v-model="biodata.anotherMobileNumber"
            @validate="validate"
            @input="saveData"
            :required="true"
            :validCharactersOnly="true"
            inputClasses="vTelInput"
          ></vue-tel-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../../sass/job-alart/_Biodata.scss";

export default {
  name: "Biodata",
  data: () => {
    return {
      date: "",
      menu: "",

      photo: null,

      imageUrl: "",

      biodata: {
        fullName: "",
        contactEmail: "",
        address: "",
        city: "",
        zipPostCode: "",
        countryId: "",
        nationality: "",
        dateOfBirth: "",
        gender: "",
        identityNumber: "",
        countryCodeMain: "",
        mobileNumber: "",
        countryCodeAnother: "",
        anotherMobileNumber: "",
        objectives: "",
        photo: "",
        careerDescription: "",
        coverLetter: "",
        noticePeriod: "",
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
    validate({ number, isValid, country }) {
      console.log(number);
      console.log(isValid);
      console.log(country);
      console.log("validating...");
      return true;
    },
    focus() {
      console.log("clicked focus.....");
      if (this.biodata.mobileNumber == "") this.vTelInput = "vTelInput_error";
      else this.vTelInput = "vTelInput";
    },
    submit() {
      console.log("biodate ", this.biodata);
    },
    saveData() {
      if (
        !this.R.isEmpty(this.biodata.mobileNumber) &&
        !this.R.isEmpty(this.biodata.fullName) &&
        !this.R.isEmpty(this.biodata.contactEmail)
      )
        this.$store.commit("resumeNextbtn", false);
      else this.$store.commit("resumeNextbtn", true);

      if (this.biodata.mobileNumber == "") this.vTelInput = "vTelInput_error";
      else this.vTelInput = "vTelInput";

      this.$store.commit("biodata", this.biodata);
      console.log("biodada... ", this.$store.getters.biodata);
    },
    uploadPhoto() {
      console.log(this.photo);

      // if(this.photo.size > 2048) return;
      this.imageUploadLoading = true;

      let data = new FormData();
      data.append("image", this.photo);
      data.append("id", "1");

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
  mounted() {
    this.$store.commit("resumePrevbtn", true);
    this.$store.commit("resumeNextbtn", true);
    this.$store.commit("componentName", "Biodata");
  },
};
</script>

<style scoped lang="scss">
</style>