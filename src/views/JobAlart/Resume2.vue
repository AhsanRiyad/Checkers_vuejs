<template >
  <div class="mainTemplate">
    <div class="mainContainer">
      <p class="h1Text">Create a Job Alert Resume</p>

      <p class="pHeader">
        Work Experiences (
        <span>*Required Field of Education</span> )
      </p>

      <v-divider></v-divider>

      <div class="row-1">
        <p>First Name</p>
        <v-text-field
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="Enter your first name"
          outlined
          dense
        ></v-text-field>
      </div>

      <div class="row-2">
        <p>Last Name</p>
        <v-text-field
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="Enter your last name"
          outlined
          dense
        ></v-text-field>
      </div>

      <div class="row-3">
        <p>Company Notice Period</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||'required']"
            placeholder="In days"
            outlined
            dense
          ></v-text-field>
          <p>Days</p>
        </div>
      </div>

      <div class="row-4">
        <p>Objectives</p>
        <div>
          <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
        </div>
      </div>

      <div class="row-5">
        <p>Career Desciriptions</p>
        <div>
          <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
        </div>
      </div>

      <div class="row-6">
        <p>Cover Letter</p>
        <div>
          <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
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
            ></v-text-field>
          </div>
        </div>
      </div>

      <div class="row-11">
        <div class="item-1">
          <p>Date Of Birth</p>
          <div>
            <v-text-field
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Enter your date of birth"
              outlined
              dense
            ></v-text-field>
          </div>
        </div>

        <div class="item-2">
          <p>Gender</p>
          <div>
            <v-text-field
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Enter your gender"
              outlined
              dense
            ></v-text-field>
          </div>
        </div>
      </div>

      <div class="row-12">
        <p>National Identity Number/ Passport Number</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||'required']"
            placeholder="Enter your nid/passport no."
            outlined
            dense
          ></v-text-field>
        </div>
      </div>

      <div class="row-13">
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

      <div class="row-14">
        <div class="item-1">
          <v-btn>Cancel</v-btn>
        </div>

        <div class="item-2">
          <v-btn color="#365899" class="white--text">Next</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "Resume1",
  data: () => {
    return {
      search: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.mainTemplate {
  background: green;
}
.mainContainer {
  background: #efefef;
  justify-content: center;
  width: 50%;
  margin: 20px auto;
}
.h1Text {
  text-align: center;
  margin: 0 20px;
  font-size: 25px;
  color: #2166b6;
}

.pHeader {
  margin: 10px 20px;
  font-size: 15px;
  span {
    color: red;
    font-size: 12px;
  }
}

.row-1 {
  width: 50%;
  margin: 20px 20px 0px 20px;
  p {
    margin: 2px 0;
  }
}

.row-2 {
  width: 50%;
  margin: 0px 20px 0px 20px;
  p {
    margin: 2px 0;
  }
}

.row-3 {
  width: 50%;
  margin: 0px 20px 10px 20px;
  div {
    width: 50%;
    p{
      margin-top: -15px;
    }
  }
  p{
    margin-bottom: 0px;
  }
}

.row-4 {
  margin: 15px 20px;
  p{
    margin-bottom: 5px;
  }
}

.row-5 {
    margin: 15px 20px;
  p{
    margin-bottom: 5px;
  }
}

.row-6 {
    margin: 15px 20px;
  p{
    margin-bottom: 5px;
  }
}

.row-7 {
     margin: 15px 20px;
  p{
    margin-bottom: 5px;
  }
}

.row-8 {
     margin: 15px 20px;
  p{
    margin-bottom: 5px;
  }
}

.row-9,
.row-10,
.row-11,
.row-13 {
  width: 100%;
  display: flex;
  .item-1 {
    flex-grow: 1;
    margin: 0 20px;
  }
  .item-2 {
    flex-grow: 1;
    margin: 0 20px;
  }
}

.row-12 {
  margin: 0 20px;
}

.row-14 {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
  .item-1 {
    flex-grow: 1;
  }
  .item-2 {
    flex-grow: 1;
    text-align: right;
  }
}
</style>