<template >
  <div>
    <p class="pHeader">
      Work Experience (
      <span>*Required Field of Education</span> )
    </p>

    <v-divider></v-divider>

    <div class="row-1">
      <p>Job Title</p>
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
      <p>Job Category</p>
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

    <div class="row-we-6">
      <p>Job Description/Job Responsibilites</p>
      <div>
        <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
      </div>
    </div>

    <div class="applicationInfo">Application Information</div>

    <div class="row-we-7">
      <p>Job Level</p>
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

    <div class="row-we-af">
      <p>Available For</p>
      <v-text-field
        background-color="white"
        class="mb-0"
        :rules="[v=>!!v||'required']"
        placeholder="Enter your first name"
        outlined
        dense
      ></v-text-field>
    </div>

    <div class="row-we-7">
      <p>Job Category</p>
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

    <div class="row-we-skills">
      <p class="we-skills-title">Skills</p>

      <v-badge
        bordered
        color="error"
        icon="mdi-lock"
        overlap
        v-for="(v , i) in skillArray"
        :key="i"
      >
        <div class="we-skills-box">
          {{ v }}
          <span>remove</span>
        </div>
      </v-badge>

      <v-text-field
        v-model="skill"
        background-color="white"
        class="mb-0 skill-add-text-field"
        :rules="[v=>!!v||'required']"
        placeholder="Enter your skill"
        outlined
        dense
        @keyup.enter="addSkill"
      ></v-text-field>

      <v-btn color="#00adef" class="white--text" @click.stop="addSkill">Add Skill</v-btn>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "Biodata",
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
  methods: {
    addSkill() {
      this.skillArray.push(this.skill);
    },
  },
  mounted(){
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", 'WorkExperience');

  }
};
</script>

<style scoped lang="scss">
@import "../../../sass/job-alart/_WorkExperience.scss";
</style>