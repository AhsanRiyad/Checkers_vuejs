<template >
  <div class="mainTemplate_we">
    <optionTab />

    <div class="mainContainer_we">
      <p class="h1Text">Create a Job Alert Resume</p>

      <div>
        <p class="pHeader">
          Work Experience (
          <span>*Required Field of Experience</span> )
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
            <p>Choose your preferable area</p>
            <v-autocomplete
              item-text="name"
              item-value="id"
              v-model="n.job_categroy"
              :items="job_category"
              outlined
              dense
              multiple
              background-color="white"
              placeholder="Select Categroy"
            ></v-autocomplete>
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

          <div class="row-we-remove" v-if="experiences.length > 1">
            <v-btn
              color="error"
              class="ml-5 mb-3 row-we-remove__btn"
              @click.stop="()=>remove(i)"
            >Remove</v-btn>
          </div>
        </div>
        <v-btn
          :disabled="R.isEmpty(experiences[experiences.length-1].job_title) "
          class="add_more_btn ml-5"
          color="primary"
          @click.stop="addAnotherExperience"
        >Add More+</v-btn>

        <div class="applicationInfo">Application Information</div>

        <div class="row-we-7">
          <p>Job Level</p>
          <v-autocomplete
            item-text="value"
            item-value="key"
            v-model="applicationInfo.job_level"
            :items="job_level"
            outlined
            dense
            background-color="white"
            placeholder="Select Country"
          ></v-autocomplete>
        </div>

        <div class="row-we-af">
          <p>Available For</p>

          <v-autocomplete
            v-model="applicationInfo.available_for"
            class="mb-0 skill-add-text-field"
            :items="['Part Time', 'Full Time']"
            outlined
            dense
            background-color="white"
            placeholder="Select Country"
          ></v-autocomplete>
        </div>

        <div class="row-we-7">
          <p>Job Category</p>
          <v-autocomplete
            item-text="name"
            item-value="id"
            v-model="applicationInfo.job_categroy_id"
            :items="job_category"
            outlined
            dense
            multiple
            background-color="white"
            placeholder="Select Categroy"
          ></v-autocomplete>
        </div>

        <div class="row-we-skills">
          <p class="we-skills-title">Skills</p>

          <!--  <v-badge
            bordered
            color="error"
            content="6"
            v-for="(v , i) in skillArray"
            :key="i"
          >
            <div class="we-skills-box">
              {{ v }}
              <span>remove</span>
            </div>
          </v-badge>-->

          <div class="skill_badge we-skills-box" v-for="(v , i) in skillArray" :key="i">
            {{ v.title }}
            <div class="skill_badge_close" @click.stop="()=>removeSkill(i)">x</div>
          </div>

          <v-autocomplete
            item-text="title"
            item-value="id"
            class="mb-0 skill-add-text-field"
            v-model="skill_id"
            :items="skill_list"
            outlined
            dense
            return-object
            background-color="white"
            placeholder="Select Skill"
          ></v-autocomplete>

          <v-btn color="#00adef" class="white--text" @click.stop="addSkill">Add Skill</v-btn>
        </div>
      </div>

      <div class="row-14">
        <div class="item-1">
          <v-btn @click.stop="()=>{ $router.history.push('/biodata') }">Back</v-btn>
        </div>

        <div class="item-2">
          <v-btn color="#365899" class="white--text" @click.stop="nextBtn">Save</v-btn>
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
      skillArray: [],
      skill: "",
      skill_list: [],

      job_category: [],

      job_level: [],
      job_categroy: [],
      applicationInfo: {
        id: "",
        job_level: "",
        job_category_id: "",
        available_for: "",
        salary: "",
      },

      skill_id: "",

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
    removeSkill(index) {
      this.skillArray.splice(index, 1);
    },
    remove(index) {
      this.experiences.splice(index, 1);
    },
    nextBtn() {
      console.log("experiences....", this.experiences);
      console.log("applicationInfo....", this.applicationInfo);
      console.log("skillArray....", this.skillArray);
      let skill = "";


      

      this.skillArray.forEach((n) => (skill = skill + n.id + ","));
      console.log(skill);

      let data = {
        experiences: this.experiences,
        applicationInfo: this.applicationInfo,
        skills: skill,
      };

      console.log(data);

      this.$store
        .dispatch("callApi", {
          url: "resume/experiences",
          method: "post",
          data,
        })
        .then((response) => {
          console.log("resume.. data", response);
          // eventBus.$emit( "fillData" , response.data );

          this.$awn.success("Failed!");

          //  this.$refs.form.reset();
          //  saves the items from the database in the table
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
    addAnotherExperience() {
      this.experiences.push({
        id: "",
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
      if (this.R.isEmpty(this.skill_id)) return;

      if (this.skillArray.some((n) => n.id == this.skill_id.id)) return;

      this.skillArray.push(this.skill_id);
    },
    saveData() {},
  },
  mounted() {
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", "WorkExperience");

    this.$store
      .dispatch("callApi", {
        url: "resume/",
        method: "get",
        data: {},
      })
      .then((response) => {
        console.log("resume.. data", response);
        // eventBus.$emit( "fillData" , response.data );
        this.skill_list = response.data.skillList;

        //  this.$refs.form.reset();
        //  saves the items from the database in the table
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

    this.$store
      .dispatch("callApi", {
        url: "jobs-category/",
        method: "get",
        data: {},
      })
      .then((response) => {
        console.log("job category..... ", response);
        // eventBus.$emit( "fillData" , response.data );
        this.job_category = response.data;

        //  this.$refs.form.reset();
        //  saves the items from the database in the table
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

    this.$store
      .dispatch("callApi", {
        url: "/jobs/expertize-label/",
        method: "get",
        data: {},
      })
      .then((response) => {
        console.log("job label ", response);
        // eventBus.$emit( "fillData" , response.data );
        this.job_level = response.data;

        //  this.$refs.form.reset();
        //  saves the items from the database in the table
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
};
</script>

<style scoped lang="scss">
@import "../../../sass/job-alart/_WorkExperience.scss";
@import "../../../sass/job-alart/_Resume.scss";
</style>