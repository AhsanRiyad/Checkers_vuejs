<template >
  <div class="mainTemplate">
    <div class="mainContainer">
      <p class="h1Text">Create a Job Alert Resume</p>

      <!-- <Biodata /> -->

      <component :is="nameOfComponent" />

      <div class="row-14">
        <div class="item-1">
          <v-btn @click.stop="prevBtn">Cancel</v-btn>
        </div>

        <div class="item-2">
          <v-btn
            color="#365899"
            class="white--text"
            @click.stop="nextBtn"
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
import Award from "./Award.vue";
import "../../../sass/job-alart/_Resume.scss"

export default {
  name: "Resume",
  components: { Biodata, WorkExperience, Education, Award },
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

      pageList: ['Biodata' , 'WorkExperience' , 'Education' , 'Award'],
      index: 0,

    };
  },
  methods: {
    nextBtn(){
      if(this.index >= 3) return;
      this.nameOfComponent = this.pageList[++this.index]
    },
    prevBtn(){
      if(this.index >= 0) return;
      this.nameOfComponent = this.pageList[--this.index]

    }

  },
};
</script>
