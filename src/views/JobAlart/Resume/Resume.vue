<template >
  <div class="mainTemplate">
    <div class="mainContainer">
      <p class="h1Text">Create a Job Alert Resume</p>

      <!-- <Biodata /> -->

      <component :is="nameOfComponent" />

      <div class="row-14">
        <div class="item-1">
          <v-btn :disabled="prevBtnStatus" @click.stop="prevBtn">Previous</v-btn>
        </div>

        <div class="item-2">
          <v-btn
            :disabled="nextBtnStatus"
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
import "../../../sass/job-alart/_Resume.scss";

export default {
  name: "Resume",
  components: { Biodata, WorkExperience, Education, Award },
  data: () => {
    return {
      nameOfComponent: "Biodata",

      search: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },

      pageList: ["Biodata", "WorkExperience", "Education", "Award"],
      index: 0,
    };
  },
  computed: {
    nextBtnStatus() {
      if (this.$store.getters.resumeNextbtn) return true;
      else return false;
    },
    prevBtnStatus() {
      if (this.$store.getters.resumePrevbtn) return true;
      else return false;
    },
  },
  methods: {
    nextBtn() {
      let data = {},
        url = "/";
      if (this.$store.getters.componentName == "Biodata") {
        data = this.$store.getters.biodata;
        url = "resume/biodata";
      } else if (this.$store.getters.componentName == "WorkExperience") {
        data = this.$store.getters.workExperience;
        url = "resume/experiences";
      } else if (this.$store.getters.componentName == "Education") {
        data = this.$store.getters.qualification;
        url = "resume/qualification";
      } else if (this.$store.getters.componentName == "Education") {
        data = this.$store.getters.award;
        url = "resume/award";
      }

      this.$store
        .dispatch("callApi", {
          url,
          method: "post",
          data,
        })
        .then((response) => {
          console.log("resume ... ", response);

          if (this.index >= 3) return;
          this.nameOfComponent = this.pageList[++this.index];

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
          //  this.tableLoading = false;
        });
    },
    prevBtn() {
      if (this.index <= 0) return;
      this.nameOfComponent = this.pageList[--this.index];
    },
  },
};
</script>