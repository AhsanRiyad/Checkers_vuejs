<template>
  <div class="getalert">
    <!-- Header Component -->
    <Header></Header>
    <!-- Header Component -->

    <main class="site-content">
      <div class="container">
        <div class="header_title">
          <h4>Create a Free Job Alert</h4>
        </div>

        <div class="row">
          <div class="col-md-7">
            <!-- Vee validate validation observer component which wraps bootstrap vue form -->
            <validation-observer ref="observer" v-slot="{ handleSubmit }">
              <!-- Get Alert form uses Bootstrap vue form -->
              <b-form
                class="create_alert_form"
                v-if="show"
                @submit.stop.prevent="handleSubmit(onSubmit)"
              >

                <AlertTextField
                  type="text"
                  id="input-0"
                  v-model="form.keywords"
                  :rules="{ required: true }"
                  label="Keywords"
                  name="Keywords"
                  aria_describedby="input-0-live-feedback"
                  placeholder="Skills, Designation, Roles, Companies"
                />

                <AlertTextField
                  type="text"
                  id="input-1"
                  v-model="form.name"
                  :rules="{ required: true, min: 3 }"
                  label="Full Name"
                  name="Name"
                  aria_describedby="input-1-live-feedback"
                  placeholder="Enter Your Full Name"
                />

                <AlertTextField
                  vid="email"
                  type="email"
                  id="input-2"
                  v-model="form.email"
                  :rules="{ required: true, email: true }"
                  label="Email ID"
                  name="Email"
                  aria_describedby="input-2-live-feedback"
                  placeholder="Enter your Email ID where you recognize this Job Alert"
                />

                <AlertTextField
                  type="text"
                  id="input-3"
                  v-model="form.alertName"
                  :rules="{ required: true, min: 3 }"
                  label="Name Your Job Alert"
                  name="Alert Name"
                  aria_describedby="input-3-live-feedback"
                  placeholder="Your Job Alert Enter a name that will help you recognize this job Alert"
                />

                <AlertTextField
                  type="text"
                  id="input-4"
                  v-model="form.location"
                  label="Location"
                  name="Location"
                  aria_describedby="input-4-live-feedback"
                  placeholder="Enter the cities you want to work in"
                />

                <validation-provider
                  name="Experience"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    label-cols="4"
                    label-size="sm"
                    label-align-sm="right"
                    label="Work Experience"
                    label-for="input-5"
                  >
                    <b-form-select
                      id="input-5"
                      name="work experience"
                      v-model="form.years"
                      :options='[{ value: null, text: "Select in year" }, { value: 1, text: "1 year" }, { value: 2, text: "2 year" }, { value: 3, text: "3 year" }]'
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-5-live-feedback"
                    ></b-form-select>

                    <b-form-invalid-feedback id="input-5-live-feedback">
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

                <AlertTextField
                  type="text"
                  id="input-6"
                  v-model="form.salary"
                  :rules="{ required: true, numeric: true }"
                  label="Expected Salary( In $ )"
                  name="Salary"
                  aria_describedby="input-6-live-feedback"
                  placeholder="Min"
                />

                <validation-provider
                  name="Job Level"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    label-cols="4"
                    label-size="sm"
                    label-align-sm="right"
                    label="Job level"
                    label-for="input-7"
                  >
                    <b-form-select
                      id="input-7"
                      name="job level"
                      v-model="form.jobLevel"
                      :options='[{ value: null, text: "Select Your Job Level" }, { value: "Entry", text: "Entry Level" }, { value: "Mid", text: "Mid Level" }, { value: "High", text: "High Level" }]'
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-7-live-feedback"
                    ></b-form-select>

                    <b-form-invalid-feedback id="input-7-live-feedback">
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

                <AlertTextField
                  type="text"
                  id="input-8"
                  v-model="form.industry"
                  label="Industry"
                  name="Industry"
                  aria_describedby="input-8-live-feedback"
                  placeholder="Enter your Industry type"
                />

                  <validation-provider
                          name="Job Level"
                          :rules="{ required: true }"
                          v-slot="validationContext"
                  >
                      <b-form-group
                              label-cols="4"
                              label-size="sm"
                              label-align-sm="right"
                              label="Job Category"
                              label-for="input-9"
                      >
                          <b-form-select
                                  id="input-9"
                                  name="Job Category"
                                  v-model="form.jobCategory"
                                  :options="[{value: null, text: 'Select Job Category'}, {value: 'Civil', text: 'Civil'}, {value: 'Teaching', text: 'Teaching'}, {value: 'IT_Computer', text: 'IT Computer'}]"
                                  :state="getValidationState(validationContext)"
                                  aria-describedby="input-9-live-feedback"
                          ></b-form-select>

                          <b-form-invalid-feedback id="input-9-live-feedback">
                              {{ validationContext.errors[0] }}
                          </b-form-invalid-feedback>
                      </b-form-group>
                  </validation-provider>

                <AlertTextField
                  type="text"
                  id="input-10"
                  v-model="form.jobRole"
                  label="Job Role"
                  name="Job Role"
                  aria_describedby="input-10-live-feedback"
                  placeholder="Type or Select the desired role where you want to work"
                />

                <validation-provider
                  name="terms"
                  :rules="{ required: { allowFalse: false } }"
                  v-slot="validationContext"
                >
                  <b-form-group id="input-group-11">
                    <b-form-checkbox
                      class="col-md-8 offset-md-4"
                      id="checkbox-1"
                      v-model="form.termsConditions"
                      :state="getValidationState(validationContext)"
                      name="checkbox-1"
                    >
                      Also send me jobs closely related my search terms
                    </b-form-checkbox>

                    <b-form-invalid-feedback id="input-7-live-feedback">
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

                <div class="row">
                  <div class="col text-right">
                    <b-button type="submit">CREATE A JOB ALERT</b-button>
                  </div>
                </div>

              </b-form>
              <!-- End of get Alert Bootstrap vue form -->

                <div v-else class="form-alert-success">
                    <!--<span @click="show = !show" class="alert-message-close">×</span>-->
                    <div class="form-alert-success-text">
                        Your Job Alert has been created successfully!
                    </div>
                    <b-button
                            @click="show = !show"
                            variant="success"
                    >
                        Create another Job Alert
                    </b-button>
                </div>
            </validation-observer>
            <!-- end of  Vee validate validation observer component -->
          </div>

          <div class="col-md-4 offset-md-1 note_group">
            <h3>
              Why should you create a free job alert?
            </h3>

            <div class="note">
              <p>*Get relevant jobs directly in your inbox</p>
              <p>*Stay updated with latest opportunities</p>
              <p>*Be the First one to apply</p>
              <p>*Create up to 5 personalized job alerts</p>
            </div>
          </div>

        </div>
      </div>
    </main>

    <!-- Footer component -->
    <Footer></Footer>
    <!-- Footer Component -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertTextField from "../components/AlertTextField";
import axios from "axios";

export default {
  name: "getAlert",
  components: { AlertTextField, Footer, Header },
  data() {
    return {
        form: {
            keywords: "",
            name: "",
            email: "",
            alertName: "",
            location: "",
            years: null,
            salary: "",
            jobLevel: null,
            industry: "",
            jobCategory: null,
            jobRole: "",
            termsConditions: []
        },
        show: true,
        info: "",
        errored: false,
        loading: true,
    };
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    onSubmit() {
        let formData = {
                keywords: this.form.keywords,
                name: this.form.name,
                email: this.form.email,
                alertName: this.form.alertName,
                location: this.form.location,
                years: this.form.years,
                salary: Number(this.form.salary),
                jobLevel: {
                    id: 1,
                    name: this.form.jobLevel
                },
                industry: this.form.industry,
                jobCategory: {
                    id: 1,
                    name: this.form.jobCategory
                },
                jobRole: {
                    id: 1,
                    name: this.form.jobRole
                },
                termsConditions: this.form.termsConditions[0],
            };
        console.log(JSON.stringify(formData));

        axios({
            method: 'post',
            url: 'http://13.58.205.236:8080/jobs/alert/new',
            data: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.onReset();
    },

    onReset() {
      // Reset our form values
        this.form = {
            keywords: "",
            name: "",
            email: "",
            alertName: "",
            location: "",
            years: null,
            salary: "",
            jobLevel: null,
            industry: "",
            jobCategory: null,
            jobRole: "",
            termsConditions: []
        };

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>

<style lang="scss" scoped>

    .form-alert-success {
        padding: 100px 20px;
        position: relative;
        text-align: center;
        .alert-message-close{
            color: red;
            font-size: 50px;
            cursor: pointer;
            display: inline-block;
            position: absolute;
            top: 30px;
            right: 20px;
        }
        .form-alert-success-text{
            color: green;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 30px;
        }
    }
  .note_group,
  .create_alert_form {
    padding: 50px 0;
  }
    #input-6{
        position: relative;
        &:before{
            content: "$";
            position: absolute;
            top: 5px;
            left: 0;
        }
    }
  .header_title {
    background: #365898;
    height: 40px;
  }
  .header_title h4 {
    color: #fff;
    text-align: center;
    padding-top: 9px;
    font-size: 18px;
  }
  button {
    background: #213d7c;
    transition: all 0.4s ease;
    &:hover {
      background: #213d7c;
      opacity: 0.8;
    }
  }

  .note_group {
    h3 {
      font-weight: 700;
      font-size: 26px;
      margin: 0 0 30px;
    }
  }
</style>
