<template >
  <div class="mainTemplate">
    <div class="mainContainer">
      <p class="h1Text">Create a Job Alert Resume</p>

      <!-- <Biodata /> -->

      <component :is="nameOfComponent" />

      <div class="row-14">
        <div class="item-1">
          <v-btn @click.stop="nameOfComponent='Biodata'">Cancel</v-btn>
        </div>

        <div class="item-2">
          <v-btn
            color="#365899"
            class="white--text"
            @click.stop="nameOfComponent='Education'"
          >Next</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import WorkExperience from "./WorkExperience.vue";
import Biodata from "./Biodata.vue";
import Education from "./Education.vue";
import "../../../sass/job-alart/_Resume.scss"

export default {
  name: "Resume",
  components: { Biodata, WorkExperience, Education },
  data: () => {
    return {
      nameOfComponent: 'Biodata',

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
