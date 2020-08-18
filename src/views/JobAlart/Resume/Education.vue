<template>
  <div>
    <p class="pHeader">
      Work Experience (
      <span>*Required Field of Education</span> )
    </p>
    <v-divider></v-divider>

    <div class="ed-row-1">
      <p>Level of Education</p>
      <v-select
        background-color="white"
        :rules="[v=>!!v||'required']"
        placeholder="Level Of Education"
        outlined
        :items="['hi', 'hellow']"
        dense
      ></v-select>
    </div>

    <div class="level-of-education">
      <p>Institue Name</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Institute Name"
        outlined
        dense
      ></v-text-field>
    </div>

    <div class="level-of-education">
      <p>Field Study</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Field Study"
        outlined
        dense
      ></v-text-field>
    </div>

    <div class="row-4">
      <p>Objectives</p>
      <div>
        <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
      </div>
    </div>

        <div class="row-100">
      <div class="row-100-title">
        <p>Time Period</p>
      </div>

      <div class="row-100-1">
        <v-select
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="Year"
          outlined
          :items="['hi', 'hellow']"
          dense
        ></v-select>
      </div>

      <div class="row-100-2">
        <v-select
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="Month"
          outlined
          :items="['hi', 'hellow']"
          dense
        ></v-select>
      </div>

      <div class="row-100-3">To</div>

      <div class="row-100-4">
        <v-select
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="Year"
          outlined
          :items="['hi', 'hellow']"
          dense
        ></v-select>
      </div>

      <div class="row-100-5">
        <v-select
          background-color="white"
          class="mb-0"
          :rules="[v=>!!v||'required']"
          placeholder="Month"
          outlined
          :items="['hi', 'hellow']"
          dense
        ></v-select>
      </div>

      <div class="row-100-6">
        <v-checkbox label="I am currently working here" value="A"></v-checkbox>
      </div>
    </div>


       <div class="level-of-education">
      <p>Result</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Result"
        outlined
        dense
      ></v-text-field>
    </div>

  </div>
</template>

<script>
import "../../../sass/job-alart/_Education.scss";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
    name: "Education",
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

};
</script>