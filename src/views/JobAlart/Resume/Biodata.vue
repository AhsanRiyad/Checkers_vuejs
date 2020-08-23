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

          </div>

          <div class="biodata-notice-period">

          </div>

        </div>

        <div class="biodata-second">

        </div>

    </div>




    <div class="row-1">
      <p>Name</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Enter your first name"
        outlined
        dense
        v-model="biodata.fullName"
        @change="saveData"
      ></v-text-field>
    </div>

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

    <div class="row-3">
      <p>Company Notice Period</p>
      <div>
        <v-text-field
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="In month"
          outlined
          type="number"
          dense
          @change="saveData"
          v-model="biodata.noticePeriod"
        ></v-text-field>
        <p>Days</p>
      </div>
    </div>

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
          :rules="[v=>!!v||'required']"
          placeholder="Enter your address"
          outlined
          dense
          @change="saveData"
          v-model="biodata.address"
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
            :rules="[v=>!!v||'required']"
            placeholder="Enter your city"
            outlined
            dense
            @change="saveData"
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
            :rules="[v=>!!v||'required']"
            placeholder="Enter your post code"
            outlined
            dense
            @change="saveData"
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
            :rules="[v=>!!v||'required']"
            placeholder="Enter your country"
            outlined
            dense
            @change="saveData"
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
            :rules="[v=>!!v||'required']"
            placeholder="Enter your nationality"
            outlined
            dense
            @change="saveData"
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
                @change="saveData"
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
            :rules="[v=>!!v||'required']"
            placeholder="Enter your gender"
            outlined
            :items="['Male', 'Female', 'Common' ,'Not Decided']"
            dense
            @change="saveData"
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
          :rules="[v=>!!v||'required']"
          placeholder="Enter your nid/passport no."
          outlined
          dense
          @change="saveData"
        ></v-text-field>
      </div>
    </div>

    <div class="row-13">
      <div class="item-1">
        <p>Mobile Number</p>
        <div>
          <vue-tel-input
            @validate="validate"
            @input="saveData"
            v-model="biodata.mobileNumber"
            :required="true"
            :validCharactersOnly="true"
            inputClasses="vTelInput"
          ></vue-tel-input>
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
            :inputClasses="vTelInput"
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

      biodata: {},

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
    submit() {
      console.log("biodate ", this.biodata);
    },
    saveData() {
      // this.$store.commit('resumeNextbtn' , false);
      this.$store.commit("biodata", this.biodata);
      console.log("biodada... ", this.$store.getters.biodata);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
</style>