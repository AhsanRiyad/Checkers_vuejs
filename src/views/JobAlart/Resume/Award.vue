<template>
  <div>
    <p class="pHeader">
      Award (
      <span>*Required Field of Education</span> )
    </p>

    <v-divider></v-divider>

    <div class="award-1">
      <p>Award Title</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Enter your first name"
        outlined
        dense
      ></v-text-field>
    </div>

    <div class="award-details">
      <p>Award Details</p>
      <div>
        <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
      </div>
    </div>

    <div class="award-add-more-button">
      <v-btn color="primary">Add More +</v-btn>
    </div>

    <div class="military-service-title">Military Services</div>

    <div class="millitary-service-country">
      <p>Country</p>
      <v-select
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Enter your last name"
        outlined
        :items="['hi', 'hellow']"
        dense
      ></v-select>
    </div>

    <div class="row-11">
      <div class="item-1">
        <p>Military Branch</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||'required']"
            placeholder="Enter your Military Branch"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>

      <div class="item-2">
        <p>Military Branch</p>
        <div>
          <v-text-field
            background-color="white"
            class="mb-0"
            :rules="[v=>!!v||'required']"
            placeholder="Enter your Military Branch"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
    </div>

    <div class="award-details">
      <p>Military Description</p>
      <div>
        <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
      </div>
    </div>

    <div class="award-details">
      <p>Commendations</p>
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

    <div class="award-add-more-button">
      <v-btn color="primary">Add More +</v-btn>
    </div>

    <!-- military service started -->
    <div class="military-service-title">Additional Group</div>

    <div class="award-1">
      <p>Additional Group Title</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Enter your first name"
        outlined
        dense
      ></v-text-field>
    </div>

    <div class="award-details">
      <p>Commendations</p>
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

    <div class="award-add-more-button">
      <v-btn color="primary">Add More +</v-btn>
    </div>
  </div>
</template>
<script>
import "../../../sass/job-alart/_Award.scss";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "Award",
  data: () => {
    return {
      search: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },
      skillArray: ["java script", "nodejs", "php", "laravel"],
      skill: "",
    };
  },
  mounted() {
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", "Award");
  },
};
</script>