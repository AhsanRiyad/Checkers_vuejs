<template >
  <div class="mainTemplate">

    <optionTab />

    <div class="mainContainer">
      <p class="h1Text">Create a Job Alert Resume</p>

      <div>
        <p class="pHeader">
          Work Experience (
          <span>*Required Field of Education</span> )
        </p>

        <v-divider></v-divider>

        <div v-for="(n, i) in experiences" :key="n.title">
          <v-divider></v-divider>

          <div class="row-1">
            <p>Job Title</p>
            <v-text-field
              background-color="white"
              class="mb-0"
              v-model="n.job_title"
              :rules="[v=>!!v||'required']"
              placeholder="Enter your first name"
              outlined
              dense
            ></v-text-field>
          </div>

          <div class="row-2">
            <p>Job Category</p>
            <v-select
              v-model="n.job_category"
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
                    v-model="n.from_date"
                    prepend-inner-icon="event"
                    readonly
                    placeholder="From"
                    backgroundColor="white"
                    outlined
                    dense
                    @keyups="saveData"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="n.from_date" @input="menu = false"></v-date-picker>
              </v-menu>
            </div>

            <div class="row-100-3">To</div>

            <div class="row-100-4">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="n.to_date"
                    prepend-inner-icon="event"
                    readonly
                    placeholder="To"
                    backgroundColor="white"
                    outlined
                    dense
                    @keyups="saveData"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="n.to_date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </div>

            <div class="row-100-6">
              <v-checkbox label="I am currently working here" value="A"></v-checkbox>
            </div>
          </div>

          <div class="row-we-6">
            <p>Job Description/Job Respsonsibilites</p>
            <div>
              <ckeditor v-model="n.job_description" :editor="editor" :config="editorConfig"></ckeditor>
            </div>
          </div>
          <v-btn color="error" class="ml-5 mb-3" @click.stop="()=>remove(i)">Remove</v-btn>
        </div>
        <v-btn
          class="add_more_btn ml-5"
          color="primary"
          @click.stop="addAnotherExperience"
        >Add More+</v-btn>

        <div class="applicationInfo">Application Information</div>

        <div class="row-we-7">
          <p>Job Level</p>
          <v-select
            background-color="white"
            v-model="applicationInfo.job_level"
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
            v-model="applicationInfo.available_for"
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

      <div class="row-14">
        <div class="item-1">
          <v-btn @click.stop="prevBtn">Previous</v-btn>
        </div>

        <div class="item-2">
          <v-btn color="#365899" class="white--text" @click.stop="nextBtn">Next</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "Biodata",
  components: {
    optionTab: () => import("./tab/optionTab"),
  },
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

      applicationInfo: {
        job_level: "",
        job_categoryId: "",
        available_for: "",
        salary: "",
      },

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,

      experiences: [
        {
          job_title: "",
          job_category: "",
          from_date: "",
          to_date: "",
          company_name: "",
          company_location: "",
          job_description: "",
        },
      ],
    };
  },
  methods: {
    remove(index) {
      this.experiences.splice(index, 1);
    },
    nextBtn() {
      console.log("experiences....", this.experiences);
    },
    addAnotherExperience() {
      this.experiences.push({
        job_title: "",
        job_category: "",
        from_date: "",
        to_date: "",
        company_name: "",
        company_location: "",
        job_description: "",
      });
    },
    addSkill() {
      this.skillArray.push(this.skill);
    },
    saveData() {},
  },
  mounted() {
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", "WorkExperience");
  },
};
</script>

<style scoped lang="scss">
@import "../../../sass/job-alart/_WorkExperience.scss";
@import "../../../sass/job-alart/_Resume.scss";
</style>