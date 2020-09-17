<template>
  <div class="mainTemplate_education">
    <optionTab />

    <div class="mainContainer_education">
      <p class="h1Text">Create a Job Alert Resume</p>

      <div class="previewButton">
        <v-btn @click.stop="dialogSwitch = true" color="success" class="previewButton__button">
          <v-icon class="previewButton__button__icon">remove_red_eye</v-icon>Preview
        </v-btn>
      </div>

      <div>
        <p class="pHeader">
          Education (
          <span>*Required Field of Education</span> )
        </p>
        <v-divider></v-divider>

        <p class="header-text">Education</p>

        <div v-for="(n, i) in educations" :key="i">
          <div class="first-div-close-button">
            <div v-if="educations.length > 1" class="closeButton" @click.stop="()=>remove(i)">
              x
              <span class="closeButton__tooltip_text">remove</span>
            </div>
            <div class="ed-row-1">
              <p>Level of Education</p>
              <v-autocomplete
                item-text="title"
                item-value="id"
                v-model="n.exam_id"
                :items="examList"
                outlined
                dense
                background-color="white"
                placeholder="Select Exam"
              ></v-autocomplete>
            </div>
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

          <div class="level-of-education">
            <p>Subject</p>
            <v-text-field
              background-color="white"
              class="mb-0"
              v-model="n.subject"
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
                    v-model="n.start_year"
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
                <v-date-picker v-model="n.start_year" @input="menu = false"></v-date-picker>
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
                    v-model="n.end_year"
                    prepend-inner-icon="event"
                    readonly
                    placeholder="To"
                    backgroundColor="white"
                    outlined
                    dense
                    @keyups="saveData"
                    v-bind="attrs"
                    v-on="on"
                    :disabled="n.currentlyWorking"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="n.end_year" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </div>

            <div class="row-100-6">
              <v-checkbox
                label="I am currently studying here"
                value="A"
                v-model="n.currentlyWorking"
                @change="()=>currentlyWorking(n)"
              ></v-checkbox>
            </div>
          </div>

          <div class="level-of-education">
            <p>Result</p>
            <v-text-field
              background-color="white"
              class="mb-0"
              :rules="[v=>!!v||'required']"
              placeholder="Result"
              v-model="n.result"
              outlined
              dense
            ></v-text-field>
          </div>

          <!--  <div class="row-we-remove" v-if="educations.length > 1">
            <v-btn
              color="error"
              class="ml-5 mb-3 row-we-remove__btn"
              @click.stop="()=>remove(i)"
            >Remove</v-btn>
          </div>-->
        </div>

        <v-divider></v-divider>
        <v-btn class="ml-5" color="primary" @click.stop="()=>addMore()">Add More+</v-btn>
      </div>
      <div class="row-14">
        <div class="item-1">
          <v-btn @click.stop="()=>{ $router.history.push('/biodata') }">Back</v-btn>
        </div>

        <div class="item-2">
          <v-btn :loading="loading" color="#365899" class="white--text" @click.stop="nextBtn">Save</v-btn>
        </div>
      </div>
    </div>
    <resumePreview @close="()=>myDialogClose()" :dialogVisible="dialogSwitch" />

    <!-- loading data  starts-->
    <v-dialog v-model="loadingData" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Loading Data...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- loading data  ends-->
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
    resumePreview: () => import("../Dialog/resumePreview"),
  },
  data: () => {
    return {
      loading: false,
      search: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },

      loadingData: false,

      dialogSwitch: false,
      certifates: [
        {
          name: "",
          validity: "",
        },
      ],

      examList: [],

      educations: [
        {
          id: "",
          exam_id: "",
          subject: "",
          institute: "",
          result: "",
          start_year: "",
          end_year: "",
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
    myDialogClose() {
      this.dialogSwitch = false;
    },
    getData() {
      this.loadingData = true;
      this.$store
        .dispatch("callApi", {
          url: "resume/",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log(response);
          this.examList = response.data.examList;

          this.educations =
            this.R.isNil(response.data.qualification) ||
            this.R.isEmpty(response.data.qualification)
              ? this.educations
              : response.data.qualification.map((n) => {
                  return { ...n, ...{ exam_id: n.exam.id } };
                });

          console.log("educations....", this.educations);
        })
        .finally(() => {
          this.loadingData = false;
        });
    },
    currentlyWorking(n) {
      console.log("working here", n);
      n.end_year = null;
    },

    nextBtn() {
      console.log(this.educations);
      this.loading = true;

      this.$store
        .dispatch("callApi", {
          url: "resume/qualification",
          method: "post",
          data: { qualification: this.educations },
        })
        .then((response) => {
          console.log("resume ... ff ", response);
          this.$awn.success("Updated!");
          this.getData();

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
          this.loading = false;
          //  this.tableLoading = false;
        });
    },
    removeItem(index) {
      console.log(index);
    },
    saveData() {},
    addMore() {
      this.educations.push({
        id: "",
        subject: "",
        institute: "",
        result: "",
        start_year: "",
        end_year: "",
        details: "",
      });
    },
    remove(index) {
      this.educations.splice(index, 1);
    },
  },
  mounted() {
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", "Education");

    this.getData();
  },
};
</script>