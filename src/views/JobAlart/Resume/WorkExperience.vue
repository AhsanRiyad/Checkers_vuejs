<template >
  <div class="mainTemplate_we" style="margin-bottom: 40px">
    <optionTab />

    <div class="mainContainer_we">
      <p class="h1Text">Create a Job Alert Resume</p>

      <div class="previewButton">
        <v-btn
          @click.stop="previewButton"
          color="success"
          class="previewButton__button"
        >
          <v-icon class="previewButton__button__icon">remove_red_eye</v-icon
          >Preview
        </v-btn>
      </div>

      <v-form ref="form">
        <div>
          <p class="pHeader">
            Work Experience (
            <span>*Required Field of Experience</span> )
          </p>

          <v-divider></v-divider>

          <div v-for="(n, i) in experiences" :key="n.title">
            <v-divider></v-divider>

            <div class="first-div-close-button">
              <div
                v-if="experiences.length > 1"
                class="closeButton"
                @click.stop="() => remove(i)"
              >
                x
                <span class="closeButton__tooltip_text">remove</span>
              </div>
              <div class="row-1">
                <p>Designation</p>
                <v-text-field
                  background-color="white"
                  class="mb-0"
                  v-model="n.job_title"
                  :rules="[(v) => !!v || 'required']"
                  placeholder="Enter your designation"
                  outlined
                  dense
                ></v-text-field>
              </div>
            </div>

            <div class="row-9">
              <div class="item-1">
                <p>
                  Company Name
                  <span class="required">*</span>
                </p>
                <div>
                  <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[(v) => !!v || true]"
                    placeholder="Enter company name"
                    outlined
                    dense
                    @keyups="saveData"
                    v-model="n.company_name"
                  ></v-text-field>
                </div>
              </div>

              <div class="item-2">
                <p>Company Location</p>
                <div>
                  <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[(v) => !!v || true]"
                    placeholder="Enter company location"
                    outlined
                    dense
                    v-model="n.company_location"
                    @keyups="saveData"
                  ></v-text-field>
                </div>
              </div>
            </div>

            <div class="row-100">
              <div class="row-100-title">
                <p>Time Period</p>
              </div>

              <div class="row-100-1">
                <v-menu
                  v-model="n.menu1"
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
                  <v-date-picker
                    v-model="n.from_date"
                    @input="n.menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </div>

              <div class="row-100-3">To</div>

              <div class="row-100-4">
                <v-menu
                  v-model="n.menu2"
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
                      :disabled="n.currentlyWorking"
                      @keyups="saveData"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="n.to_date"
                    @input="n.menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>

              <div class="row-100-6">
                <v-checkbox
                  v-model="n.currentlyWorking"
                  label="I am currently working here"
                  @click="() => currentlyWorking(n)"
                ></v-checkbox>
              </div>
            </div>

            <div class="row-we-6">
              <p>Job Description/Job Respsonsibilites</p>
              <div>
                <ckeditor
                  v-model="n.job_description"
                  :editor="editor"
                  :config="editorConfig"
                ></ckeditor>
              </div>
            </div>

            <!-- <div class="row-we-remove" v-if="experiences.length > 1">
              <v-btn
                color="error"
                class="ml-5 mb-3 row-we-remove__btn"
                @click.stop="()=>remove(i)"
              >Remove</v-btn>
            </div>-->
          </div>
          <v-btn
            :disabled="R.isEmpty(experiences[experiences.length - 1].job_title)"
            class="add_more_btn ml-5"
            color="primary"
            @click.stop="addAnotherExperience"
            >Add More+</v-btn
          >

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
              placeholder="Job Level"
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
              placeholder="Available For"
            ></v-autocomplete>
          </div>

          <div class="row-we-7">
            <p>Preferable Area</p>
            <v-autocomplete
              item-text="name"
              item-value="id"
              v-model="job_categroy_id"
              :items="job_category"
              outlined
              dense
              multiple
              return-object
              background-color="white"
              placeholder="Preferable Area"
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

            <div
              class="skill_badge we-skills-box"
              v-for="(v, i) in skillArray"
              :key="i"
            >
              {{ v.title }}
              <div class="skill_badge_close" @click.stop="() => removeSkill(i)">
                x
              </div>
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

            <v-btn color="#00adef" class="white--text" @click.stop="addSkill"
              >Add Skill</v-btn
            >
          </div>
        </div>

        <div class="row-14">
          <div class="item-1">
            <v-btn
              @click.stop="
                () => {
                  $router.history.push('/biodata');
                }
              "
              >Back</v-btn
            >
          </div>

          <div class="item-2">
            <v-btn
              color="#365899"
              class="white--text"
              :loading="loading"
              @click.stop="nextBtn"
              >Save</v-btn
            >
          </div>
        </div>
      </v-form>
    </div>
    <resumePreview
      @close="() => myDialogClose()"
      :dialogVisible="dialogSwitch"
    />

    <!-- loading data  starts-->
    <v-dialog v-model="loadingData" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Loading Data...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- loading data  ends-->
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
export default {
  name: "Biodata",
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

      resume: {},

      loadingData: false,

      dialogSwitch: false,
      skillArray: [],
      skill: "",
      skill_list: [],

      job_category: [],

      job_level: [],
      job_categroy: [],
      applicationInfo: {
        id: "",
        job_level: "",
        job_category_id: [],
        available_for: "",
        salary: "",
      },

      skill_id: "",
      job_categroy_id: "",
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,

      experiences: [
        {
          id: "",
          job_title: "",
          job_category: "",
          from_date: "",
          to_date: "",
          menu1: false,
          menu2: false,
          company_name: "",
          company_location: "",
          job_description: "",
        },
      ],
    };
  },
  methods: {
    myDialogClose() {
      this.dialogSwitch = false;
    },
    getData() {
      this.loadingData = true;

      const headers = {
        Authorization: "Bearer " + this.$cookies.get("accessToken"),
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      axios({
        url: "jobs-category/",
        method: "get",
        data: {},
        headers,
        baseURL: this.$store.state.apiBase,
      })
        .then((response) => {
          console.log("job category..... ", response);
          // eventBus.$emit( "fillData" , response.data );
          this.job_category = response.data.data;

          //  this.$refs.form.reset();
          //  saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;

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
              console.log("failed 4");
              // this.$awn.alert("Failed!");
              //   this.$awn.alert("Failed");
            })
            .finally(() => {
              //  this.tableLoading = false;
            });

          this.$store
            .dispatch("callApi", {
              url: "resume/",
              method: "get",
              data: {},
            })
            .then((response) => {
              console.log("resume.. data", response);
              // eventBus.$emit( "fillData" , response.data );

              this.resume = response.data;

              this.skill_list = response.data.skillList;

              this.applicationInfo = this.R.isNil(response.data.applicationInfo)
                ? this.applicationInfo
                : response.data.applicationInfo;
              this.experiences = this.R.isEmpty(response.data.experiences)
                ? this.experiences
                : response.data.experiences;

              this.job_categroy_id = this.R.split(
                ",",
                this.applicationInfo.job_category_id
              );
              this.job_categroy_id = this._.compact(this.job_categroy_id);

              this.job_categroy_id = this.job_categroy_id.map((n) => {
                return {
                  id: n,
                };
              });

              this.job_categroy_id = this.job_category.filter((n) => {
                return this.job_categroy_id.some((m) => m.id == n.id);
              });

              console.log("filtering the result", this.job_categroy_id);

              /* console.log(
                " mergin values.... ",
                this.R.mergeAll(this.applicationInfo.job_category_id)
              );

              console.log(
                "concate ",
                this.R.concat(
                  this.applicationInfo.job_category_id,
                  this.applicationInfo.job_category_title
                )
              ); */

              // console.log("job category....", abc);

              this.applicationInfo = { ...this.applicationInfo };

              console.log("application in mounted...", this.applicationInfo);

              console.log("skill id ....", response.data.skills);

              if (
                !this.R.isNil(response.data.skills) ||
                !this.R.isEmpty(response.data.skills)
              ) {
                console.log("skill id list....", response.data.skills);
                this.skillArray = response.data.skills.id;
                // console.log("skill 1", response.data.skills);
                console.log("skill 1", this.skillArray);

                this.skillArray = this.R.map(
                  this.R.trim,
                  this.R.split(",", this.skillArray)
                );
                // this.skillArray = this.R.split(",", this.skillArray);
                console.log("skill 2", this.skillArray);
                this.skillArray = this._.compact(this.skillArray);
                console.log("skill 3", this.skillArray);

                this.skillArray = this.skillArray.map((n) => {
                  return {
                    id: n,
                  };
                });
                console.log("skill 4", this.skillArray);

                this.skillArray = this.skill_list.filter((n) => {
                  return this.skillArray.some((m) => m.id == n.id);
                });
                console.log("skill 5", this.skillArray);
                console.log("skill compact .... ", this.skillArray);
                //  this.$refs.form.reset();
                //  saves the items from the database in the table
                //  console.log(response);
                //  this.items = response.data;
              }
            })
            .catch(() => {
              console.log("failed 1");
              this.$awn.alert("Failed!");
              //   this.$awn.alert("Failed");
            })
            .finally(() => {
              //  this.tableLoading = false;

              if (
                this.R.isNil(this.resume.biodata) ||
                this.R.isEmpty(this.resume.biodata)
              ) {
                this.$awn.alert("Your biodata is not complete");
                this.$router.history.push("/biodata");
              }

              this.loadingData = false;
            });
        })
        .catch((error) => {
          console.log("error status code... ", error.response.status);
          if (error.response.status == 401) {
            axios({
              method: "get",
              baseURL: this.$store.state.apiBase,
              url: `users/new-access-token`,
              params: {
                access_token: this.$cookies.get("accessToken"),
                ip: this.$store.getters.userIp,
              },
              headers,
            })
              .then((response) => {
                console.log("this is refresh token.....", response);
                this.$cookies.set("accessToken", response.data.access_token);
                this.getData();
              })
              .catch((error) => {
                this.$awn.alert("Failed!");
                this.$router.history.push("/signin");
                console.log(error);
              })
              .finally(() => {});
          }
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          //  this.tableLoading = false;
        });
    },
    currentlyWorking(n) {
      console.log("currently working...", n);
      n.to_date = null;
    },

    removeSkill(index) {
      this.skillArray.splice(index, 1);
    },
    remove(index) {
      this.experiences.splice(index, 1);
    },
    nextBtn() {
      if (!this.$refs.form.validate()) {
        this.$awn.alert("Your form is not completed");
        return;
      }

      console.log("experiences....", this.experiences);
      this.loading = true;
      this.experiences = this.experiences.filter((n) => {
        return {
          id: n.id,
          job_title: n.job_title,
          job_category: n.job_category,
          from_date: n.from_date,
          to_date: n.to_date,
          company_name: n.company_name,
          company_location: n.company_location,
          job_description: n.job_description,
        };
      });

      console.log("applicationInfo....", this.applicationInfo);
      console.log("skillArray....", this.skillArray);

      this.loading = true;

      let skill_id = "";
      let skill_title = "";
      let job_category_id = "";
      let job_category_title = "";

      let n_ex = {};

      console.log("n_exx.....", n_ex);

      let category_id_keeper = this.job_categroy_id;

      /*  this.R.forEachObjIndexed((v, k) => {
        if (k === "job_categroy_id" && this.R.type(v) === "Array") {
          console.log("inside......");
          category_id_keeper = v;
        }
        console.log("k", k);
        console.log("v", v);
      }, this.applicationInfo); */

      console.log("id keeper ", category_id_keeper);

      this.skillArray.forEach((n) => (skill_id = skill_id + n.id + ","));
      this.skillArray.forEach(
        (n) => (skill_title = skill_title + n.title + ",")
      );
      category_id_keeper.forEach(
        (n) => (job_category_id = job_category_id + n.id + ",")
      );
      category_id_keeper.forEach(
        (n) => (job_category_title = job_category_title + n.name + ",")
      );

      let applI = this._.omitBy(this.applicationInfo, this._.isArray);

      let data = {
        experiences: this.experiences,
        applicationInfo: {
          ...applI,
          ...{
            job_category_id: job_category_id,
            job_category_title: job_category_title,
          },
        },
        skills: {
          skill_id,
          skill_title,
        },
      };
      console.log("final data.....", data);

      this.$store
        .dispatch("callApi", {
          url: "resume/experiences",
          method: "post",
          data,
        })
        .then((response) => {
          console.log("resume ... ff ", response);
          this.$awn.success("Updated!");
          setTimeout(() => {
            this.$router.history.push("/education");
          }, 1000);
          // this.$refs.form.reset();
          //saves the items from the database in the table
          //  console.log(response);
          //  this.items = response.data;
        })
        .catch(() => {
          console.log("failed 3");
          this.$awn.alert("Failed!");
          //   this.$awn.alert("Failed");
        })
        .finally(() => {
          this.loading = false;

          //  this.tableLoading = false;
        });
    },
    addAnotherExperience() {
      this.experiences.push({
        id: "",
        job_title: "",
        from_date: "",
        to_date: "",
        company_name: "",
        company_location: "",
        job_description: "",
      });
    },
    previewButton() {
      // this.dialogSwitch = true;
      if (
        this.R.isNil(this.$store.getters.resume.payload.biodata) ||
        this.R.isEmpty(this.$store.getters.resume.payload.biodata) ||
        this.R.isNil(this.$store.getters.resume.payload.experiences) ||
        this.R.isEmpty(this.$store.getters.resume.payload.experiences) ||
        this.R.isNil(this.$store.getters.resume.payload.qualification) ||
        this.R.isEmpty(this.$store.getters.resume.payload.qualification)
      ) {
        this.$awn.alert("Sorry, Your resume is not complete!");
        return;
      }
      this.dialogSwitch = true;
    },
    addSkill() {
      console.log("skill id", this.skill_id);
      // console.log("skill arrat", this.skillArray);
      if (this.R.isEmpty(this.skill_id)) return;

      if (this.R.isEmpty(this.skillArray) || this.R.isNil(this.skillArray)) {
        this.skillArray = [];
        this.skillArray.push(this.skill_id);
        return;
      } else {
        if (this.skillArray.some((n) => n.id == this.skill_id.id)) {
          this.$awn.alert("Already Added in the list");
          return;
        } else {
          this.skillArray.push(this.skill_id);
        }
      }
    },
    saveData() {},
  },
  mounted() {
    this.$store.commit("resumePrevbtn", false);
    this.$store.commit("componentName", "WorkExperience");

    this.getData();
  },
};
</script>

<style scoped lang="scss">
@import "../../../sass/job-alart/_WorkExperience.scss";
@import "../../../sass/job-alart/_Resume.scss";
</style>
