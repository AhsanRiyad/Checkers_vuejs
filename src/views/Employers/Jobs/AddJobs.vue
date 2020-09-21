<template>
  <v-container class="mainTemplate">
    <v-row class="mainContainer">
      <v-col cols="12" md="11" lg="11">
        <p class="h1Text">Create a Job</p>
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <p>Job Title</p>
              <v-text-field
                  v-model="jobs.job_title"
                  background-color="white"
                  class="mb-0"
                  :rules="[v=>!!v||'required']"
                  placeholder="Enter Job Title"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <p>Job Type</p>
              <div>
                <v-select
                    :menu-props="{ maxHeight: '400' }"
                    label="Select Job Type"
                    hint="Pick Job Type"
                    persistent-hint
                    item-text="type_in_text"
                    :items="types"
                    :rules="[v=>!!v||'required']"
                    dense
                    outlined
                    item-value="type"
                    v-model="jobs.type"
                    background-color="white"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <p>Job Category</p>
              <div>
                <v-select
                    item-text="name"
                    item-value="id"
                    :items="categories"
                    label="Select Job Category"
                    v-model="jobs.job_category[0].id"
                    dense
                    outlined
                    hint="Pick Job Category"
                    persistent-hint
                    background-color="white"
                    :rules="[v=>!!v||'required']"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" lg="4">
              <p>Country</p>
              <div>
                <v-select
                    item-text="country_name"
                    :items="countries"
                    label="Select Country"
                    v-model="jobs.country"
                    :rules="[v=>!!v||'required']"
                    dense
                    outlined
                    hint="Pick Country"
                    persistent-hint
                    background-color="white"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <p>Job Location</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="Enter Job Location"
                    outlined
                    dense
                    v-model="jobs.job_location"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4">
              <p>City</p>
              <div>
                <v-text-field
                    background-color="white"
                    class="mb-0"
                    :rules="[v=>!!v||'required']"
                    placeholder="Enter your city"
                    outlined
                    dense
                    v-model="jobs.city"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="12">
              <p>Skills</p>
              <div>
                <v-select
                    item-text="title"
                    item-value="id"
                    :items="skills"
                    placeholder="Select skills"
                    v-model="jobs.skills "
                    :rules="[v=>!!v||'required']"
                    dense
                    outlined
                    multiple
                    return-object
                    background-color="white"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="12">
              <p>Job Description</p>
              <ckeditor
                  v-model="jobs.job_description"
                  :isValid="true"
                  :editor="editor"
                  :config="editorConfig"
              ></ckeditor>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="12" md="12">
              <p>Job Responsibilities</p>
              <ckeditor
                  :isValid="true"
                  :editor="editor"
                  :config="editorConfig"
                  v-model="jobs.job_responsibilities[0].text"
              ></ckeditor>
            </v-col>
          </v-row>
          <v-row align="center" class="">
            <v-col cols="12" md="12">
              <div class="job_fac_text">
                <p>Job Facilities</p>
                <ckeditor
                    :isValid="true"
                    :editor="editor"
                    :config="editorConfig"
                    v-model="jobs.job_facilities[0].text"
                ></ckeditor>
              </div>
              <!--              <div class="skill_badge we-skills-box" v-for="(i) in jobFacilitiesArr" :key="i">-->
              <!--                <div v-if="jobFacilitiesArr.length > 1" class="skill_badge_close" @click.stop="()=>remove(i)">x <span-->
              <!--                    class="closeButton__tooltip_text">remove</span></div>-->
              <!--              </div>-->
            </v-col>
            <!--    :disabled="R.isEmpty(job_responsibilities[job_responsibilities.length-1].job_title) "-->
          </v-row>
          <v-row align="center" v-for="(edu, i) in jobs.job_education_req" :key="i">
            <v-col cols="12" md="10">
              <p>Job Educational Requirements</p>
              <v-text-field
                  background-color="white"
                  class="mb-0"
                  :rules="[v =>!!v||'required']"
                  placeholder="Enter Job Educational Requirements"
                  v-model="edu.degre_title"
                  outlined
                  dense
              ></v-text-field>
              <!--              <div class="skill_badge we-skills-box" v-for="(i) in jobFacilitiesArr" :key="i">-->
              <!--                <div v-if="jobFacilitiesArr.length > 1" class="skill_badge_close" @click.stop="()=>remove(i)">x <span-->
              <!--                    class="closeButton__tooltip_text">remove</span></div>-->
              <!--              </div>-->
            </v-col>
            <!--    :disabled="R.isEmpty(job_responsibilities[job_responsibilities.length-1].job_title) "-->
            <v-col cols="12" md="2" lg="2">
              <v-btn class="add_more_btn mt-3 mr-2"
                     color="error" @click="remove(i)" v-show="i || ( !i && jobs.job_education_req.length > 1)">
                <v-icon small>mdi-close</v-icon>
              </v-btn>
              <v-btn
                  v-show="i == jobs.job_education_req.length-1"
                  class="add_more_btn mt-3"
                  color="primary"
                  @click.stop="addJobEduReq"
              >
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="5" lg="5">
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
            </v-col>
            <v-col cols="12" md="5" lg="5">
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
            </v-col>
            <v-col cols="12" md="2" lg="2">
              <p>Currency Code</p>
              <div>
                <v-select
                    item-text="name"
                    :menu-props="{ maxHeight: '400' }"
                    label="Select Currency"
                    item-value="curr_data"
                    persistent-hint
                    :items="currency"
                    :rules="[v=>!!v||'required']"
                    dense
                    single-line
                    outlined
                    v-model="jobs.currency_code"
                    background-color="white"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <p>Company Name</p>
              <div>
                <v-select
                    :menu-props="{ maxHeight: '400' }"
                    label="Select Company"
                    persistent-hint
                    item-text="company_name"
                    :items="companies"
                    :rules="[v=>!!v||'required']"
                    item-value="id"
                    dense
                    outlined
                    v-model="jobs.company_id"
                    background-color="white"
                ></v-select>
              </div>
            </v-col>
          </v-row>

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
      categories: [],
      skills: [],
      countries: [],
      companies: [],
      currency: [],
      types: [],
      jobs: {
        type: '',
        type_in_text: '',
        job_title: '',
        job_description: '',
        company_id: '',
        company_name: '',
        job_location: "",
        country: '',
        city: '',
        min_salary_range: '',
        max_salary_range: '',
        currency_code: '',
        job_category: [{id: ''}],
        job_facilities: [{text: ''}],
        job_responsibilities: [{text: ''}],
        job_education_req: [
          {degre_title: ''}
        ],
        skills: []
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
          url: "jobs-type",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("types..... ", response);
          this.types = response.types;
        })
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
          url: "job-currency-code",
          method: "get",
          data: {},
        })
        .then((response) => {
          let data = JSON.parse(JSON.stringify(response));
          for (let item in data) {
            this.currency.push({curr_data: item, name: data[item]})
          }
          console.log("json currency", this.currency)
        })
    this.$store
        .dispatch("callApi", {
          url: "companies/",
          method: "get",
          data: {},
        })
        .then((response) => {
          console.log("companies..... ", response);
          // eventBus.$emit( "fillData" , response.data );
          this.companies = response.data;
          console.log("company new", this.companies)
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
    // categoryName(selected) {
    //   this.jobs.company_name = selected
    //   console.log("category name", selected)
    clearForm() {
      this.job_title = ''
      this.job_description = ''
      this.type = ''
      this.type_in_text = ''
      this.company_id = ''
      this.company_name = ''
      this.job_location = ""
      this.country = ''
      this.city = ''
      this.min_salary_range = ''
      this.max_salary_range = ''
      this.currency_code = ''
      this.job_category = []
      this.job_facilities = []
      this.job_responsibilities = []
      this.job_education_req = []
      this.skills = []
    },
    // },
    saveJob() {
      if (!this.$refs.form.validate()) return;
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
            setTimeout( ()=> {
              this.$router.history.push({name: "EmployersPanel", params: {id: this.jobs.company_id}})
            }, 1000);
          })
          .catch(() => {
            this.$awn.alert("Failed!");
          })
          .finally(() => {
            this.loading = false;
          });
    },
    addJobEduReq() {
      this.jobs.job_education_req.push({degre_title: ''})
    },
    remove(index) {
      this.jobs.job_education_req.splice(index, 1);
    },
    customValidateEditorData() {
      if (!this.jobs.job_responsibilities || this.jobs.job_responsibilities === "") {
        const error = {
          field: "jobs job_", //name of ckeditor
          msg: "the jobs job_ is required.",
          scope: "save-post-form", //data-vv-scope of form
        };
        this.$refs.form.validate().errors.add(error);
        return false;
      }
      return true;
    },
    validationRule(fieldName) {
      console.log(fieldName);
      return [(v) => !!v || fieldName + " is required"];
    },
  },
}
</script>