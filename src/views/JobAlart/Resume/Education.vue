<template>
  <div class="mainTemplate_education">
    <optionTab />

    <div class="mainContainer_education">
      <p class="h1Text">Create a Job Alert Resume</p>
      <div>
        <p class="pHeader">
          Education (
          <span>*Required Field of Education</span> )
        </p>
        <v-divider></v-divider>

        <p class="header-text">Education</p>

        <div v-for="(n, i) in qualification" :key="i">
          <div class="ed-row-1">
            <p>Level of Education</p>
            <v-select
              background-color="white"
              :rules="[v=>!!v||'required']"
              placeholder="Level Of Education" outlined
              :items="['hi', 'hellow']"
              dense
            ></v-select>
          </div>

          <div class="level-of-education">
            <p>Institue Name</p>
            <v-text-field
              background-color="white"
              class="mb-0"
              v-model="n.institute"
              :rules="[v=>!!v||'required']"
              placeholder="Institute Name"
              outlined
              dense
            ></v-text-field>
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
                    v-model="n.startYear"
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
                <v-date-picker v-model="n.startYear" @input="menu = false"></v-date-picker>
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
                    v-model="n.endYear"
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
                <v-date-picker v-model="n.endYear" @input="menu2 = false"></v-date-picker>
              </v-menu>
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

          <div class="row-we-remove">
            <v-btn
              color="error"
              class="ml-5 mb-3 row-we-remove__btn"
              @click.stop="()=>remove(i)"
            >Remove</v-btn>
          </div>
        </div>

        <v-divider></v-divider>
        <v-btn class="ml-5" color="primary" @click.stop="()=>addMore()">Add More+</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../sass/job-alart/_Education.scss";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../../sass/job-alart/_Resume.scss";
export default {
  name: "Education",
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

      certifates: [
        {
          name: "",
          validity: "",
        },
      ],

      qualification: [
        {
          examId: "",
          subject: "",
          institute: "",
          result: "",
          startYear: "",
          endYear: "",
          details: "",
        },
      ],

      trainings: [{}],

      certificate_validity: "",

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    };
  },
  methods: {
    removeItem(index) {
      console.log(index);
    },
    saveData() {},
    addMore() {
      this.qualification.push({
        subject: "",
        institute: "",
        result: "",
        startYear: "",
        endYear: "",
        details: "",
      });
    },
    remove(index) {
      this.qualification.splice(index, 1);
    },
  },
  mounted() {
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", "Education");
  },
};
</script>