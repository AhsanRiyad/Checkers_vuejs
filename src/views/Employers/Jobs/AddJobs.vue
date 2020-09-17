<template>
  <v-container class="mainTemplate">
    <v-row class="mainContainer">
      <v-col cols="12" md="11" lg="11">
        <p class="h1Text">Create a Job</p>
        <v-form ref="form">
          <div>
            <p>Job Title</p>
            <v-text-field
                background-color="white"
                class="mb-0"
                :rules="[v=>!!v||'required']"
                placeholder="Enter Job Title"
                outlined
                dense
            ></v-text-field>
          </div>

          <div>
            <p>Job Description</p>
            <ckeditor
                :isValid="true"
                :editor="editor"
                :config="editorConfig"
            ></ckeditor>
          </div>

          <div class="d-flex">
            <div>
              <p>Job Facilities Title</p>
              <div class="skill_badge we-skills-box" v-for="(i) in jobFacilitiesArr" :key="i">
                <div v-if="jobFacilitiesArr.length > 1" class="skill_badge_close" @click.stop="()=>remove(i)">x <span
                    class="closeButton__tooltip_text">remove</span></div>
                <div class="d-flex">
                  <v-text-field
                      background-color="white"
                      class="mb-0"
                      :rules="[v =>!!v||'required']"
                      placeholder="Enter Job Facilities"
                      v-model="jobs.job_facilities.title"
                      outlined
                      dense
                  ></v-text-field>

                </div>
              </div>
            </div>
            <div>
              <p>Job Facilities Text</p>
              <div class="skill_badge we-skills-box" v-for="(i) in jobResArr" :key="i">
                <div v-if="jobResArr.length > 1" class="skill_badge_close" @click.stop="()=>remove(i)">x <span
                    class="closeButton__tooltip_text">remove</span></div>
                <div class="d-flex">
                  <v-text-field
                      background-color="white"
                      class="mb-0"
                      :rules="[v =>!!v||'required']"
                      placeholder="Enter Job Facilities"
                      v-model="jobs.job_facilities.title"
                      outlined
                      dense
                  ></v-text-field>

                </div>
              </div>
            </div>
            <!--    :disabled="R.isEmpty(job_responsibilities[job_responsibilities.length-1].job_title) "-->
            <v-btn

                class="add_more_btn ml-5"
                color="primary"
                @click.stop="addJobFacilities"
            >Add More+
            </v-btn>
          </div>
          <div>
            <p>Job Responsibilities</p>
            <div>
              <div class="skill_badge we-skills-box" v-for="(v , i) in jobResArr" :key="i">
                <div v-if="jobResArr.length > 1" class="skill_badge_close" @click.stop="()=>remove(i)">x <span
                    class="closeButton__tooltip_text">remove</span></div>
                <div class="d-flex">
                  <v-textarea
                      background-color="white"
                      class="mb-0"
                      :rules="[v=>!!v||'required']"
                      placeholder="Enter Job Responsibilities"
                      v-model="v.job_responsibilities"
                      outlined
                      dense
                  ></v-textarea>

                </div>
              </div>
            </div>
            <!--    :disabled="R.isEmpty(job_responsibilities[job_responsibilities.length-1].job_title) "-->
            <v-btn

                class="add_more_btn ml-5"
                color="primary"
                @click.stop="addJobResponsibilities"
            >Add More+
            </v-btn>
          </div>
          <div>
            <p>Job Responsibilities</p>
            <div>
              <div class="skill_badge we-skills-box" v-for="(v , i) in jobResArr" :key="i">
                <div v-if="jobResArr.length > 1" class="skill_badge_close" @click.stop="()=>remove(i)">x <span
                    class="closeButton__tooltip_text">remove</span></div>
                <div class="d-flex">
                  <v-textarea
                      background-color="white"
                      class="mb-0"
                      :rules="[v=>!!v||'required']"
                      placeholder="Enter Job Responsibilities"
                      v-model="v.job_responsibilities"
                      outlined
                      dense
                  ></v-textarea>

                </div>
              </div>
            </div>
            <!--    :disabled="R.isEmpty(job_responsibilities[job_responsibilities.length-1].job_title) "-->
            <v-btn

                class="add_more_btn ml-5"
                color="primary"
                @click.stop="addJobResponsibilities"
            >Add More+
            </v-btn>
          </div>
          <div>
            <p>Job Location</p>
            <div>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Enter Job Location"
                  outlined
                  dense
              ></v-text-field>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <div>
              <p>Job Type</p>
              <div>
                <v-select
                    :menu-props="{ maxHeight: '400' }"
                    label="Select Job Type"
                    hint="Pick Job Type"
                    persistent-hint
                    :items="types"
                    :rules="[v=>!!v||'required']"
                    dense
                    outlined
                    background-color="white"
                ></v-select>
              </div>
            </div>
            <div>
              <p>Job Category</p>
              <div>
                <v-select
                    item-text="name"
                    item-value="id"
                    :items="categories"
                    label="Select Job Category"
                    v-model="jobs.job_category.name"
                    dense
                    outlined
                    hint="Pick Job Category"
                    persistent-hint
                    background-color="white"
                    :rules="[v=>!!v||'required']"
                ></v-select>
              </div>
            </div>
            <div class="item-1">
              <p>Country</p>
              <div>
                <v-select
                    item-text="country_name"
                    item-value="id"
                    :items="countries"
                    label="Select"
                    v-model="jobs.country"
                    :rules="[v=>!!v||'required']"
                    dense
                    outlined
                    hint="Pick Country"
                    persistent-hint
                    background-color="white"
                ></v-select>
              </div>
            </div>
          </div>

          <div>
            <p>Company Details</p>
          </div>

          <div class="d-flex justify-space-between">
            <div>
              <p>Location</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="Enter Company Location"
                    outlined
                    dense
                ></v-text-field>
              </div>
            </div>
            <div class="item-1">
              <p>City</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="Enter your city"
                    outlined
                    dense
                ></v-text-field>
              </div>
            </div>

          </div>
          <div class="d-flex justify-space-between">
            <div class="item-2" style="width: 50%;">
              <p>Minimum Salary Range</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="Enter Minimum Salary Range"
                    outlined
                    dense
                    type="number"
                    v-model="jobs.min_salary_range"
                ></v-text-field>
              </div>
            </div>
            <div class="item-2" style="width: 50%;">
              <p>Maximum Salary Range</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="Enter Maximum Salary Range"
                    outlined
                    dense
                    type="number"
                    v-model="jobs.max_salary_range"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="item-1">
            <p>Skills</p>
            <div>
              <v-select
                  item-text="title"
                  item-value="id"
                  :items="skills"
                  placeholder="Select skills"
                  v-model="jobs.skills.title"
                  :rules="[v=>!!v||'required']"
                  dense
                  outlined
                  multiple
                  return-object
                  background-color="white"
              ></v-select>
            </div>
          </div>
          <div class="text-right">
            <div class="item-2">
              <v-btn color="#365899" class="white--text" :loading="loading" @click.stop="saveJob">Save</v-btn>
            </div>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import '../../../sass/employers/_jobs.scss'
import validation from "@/mixins/validation";

export default {
  name: "AddJobs",
  mixins: [validation],
  data() {
    return {
      loading: false,
      phone: null,
      countries: [],
      types: ['Part-time job', 'Full time job', 'Time flexible', 'Remote'],
      jobs: {
        job_title: '',
        job_description: '',
        type: '',
        company_id: '',
        company_name: '',
        job_location: "",
        country: '',
        city: '',
        min_salary_range: '',
        max_salary_range: '',
        job_category: [
          {id: '', name: ''}
        ],
        job_educational_req: [
          {id: '', degre_title: ''}
        ],
        job_facilities: [
          {title: '', text: ''}
        ],
        job_responsibilities: [],
        skills: [{title: ''}]
      },
      categories: [],
      skills: [],
      jobFacilitiesArr: [],
      jobResArr: [
        {id: '', text: '', is_additional: false}
      ],
      jobResId: "",
      job_responsibilities: '',
      job_facilities: {
        title: '',
        text: ''
      },
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },

    };
  },
  mounted() {
    this.$store
        .dispatch("callApi", {
          url: "resume/skill/lists/",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("skills..... ", response);
          this.skills = response;
        })
    this.$store
        .dispatch("callApi", {
          url: "resume/",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("countries..... ", response);
          // eventBus.$emit( "fillData" , response.data );
          this.countries = response.data.countryList;
        })
    this.$store
        .dispatch("callApi", {
          url: "jobs-category/",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("job category..... ", response);
          // eventBus.$emit( "fillData" , response.data );
          this.categories = response.data;
        })
  },
  methods: {
    saveJob() {
      this.loading = true;
      this.$store
          .dispatch("callApi", {
            url: "jobs/",
            method: "post",
            data: this.jobs,
          })
          .then((response) => {
            console.log("jobs post done ", response);
            this.$awn.success("Saved!");
          })
          .catch(() => {
            this.$awn.alert("Failed!");
          })
          .finally(() => {
            this.loading = false;
          });
    },
    addJobFacilities(){
      this.jobFacilitiesArr.push(this.job_facilities)
      this.job_facilities.text = ''
      this.job_facilities.title = ''
    },
    addJobResponsibilities() {
      this.jobResArr.push(this.job_responsibilities)
      this.job_responsibilities = ""
    },
    remove(index) {
      this.jobResArr.splice(index, 1);
      // this.jobResArr.splice(index, 1);
    },
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
    submit() {
      if (!this.$refs.form.validate()) return;
    },
  },
}
</script>