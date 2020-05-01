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
          <div class="col-md-8">

            <!-- Vee validate validation observer component which wraps bootstrap vue form -->
            <validation-observer
                ref="observer"
                v-slot="{ handleSubmit }"
            >

              <!-- Get Alert form uses Bootstarp vue form -->
              <b-form
                  class="create_alert_form"
                  @submit="onSubmit"
                  @reset="onReset"
                  v-if="show"
                  @submit.stop.prevent="handleSubmit(onSubmit)"
              >

                <validation-provider
                    name="Name"
                    :rules="{ required: true, min: 3 }"
                    v-slot="validationContext"
                >
                  <b-form-group
                      label-cols="4"
                      label-cols-lg="3"
                      label-size="sm"
                      label-align-sm="right"
                      label="Keywords"
                      label-for="input-1"
                      id="input-group-1"
                      description=""
                  >

                    <b-form-input
                        id="input-1"
                        v-model="form.keywords"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-2-live-feedback"
                        type="text"
                        required
                        placeholder="Skills, Designation, Roles, Companies"
                    ></b-form-input>

                    <b-form-invalid-feedback id="input-2-live-feedback">
                      Key skills should not blank
                    </b-form-invalid-feedback>

                  </b-form-group>
                </validation-provider>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-2"
                    label="Full Name"
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Enter Your Full Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-3"
                    label="Email ID "
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Enter your Email ID where you recognize this Job Alert"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-4"
                    label="Name Your Job Alert"
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Your Job Alert Enter a name that will help you recognize this job Alert"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-5"
                    label="Location"
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Enter the cities you want to work in"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-6"
                    label="Work Exprience"
                    label-for="input-3"
                >
                  <div class="input-group" style="width: 69.5%">
                    <b-form-select
                        id="input-3"
                        v-model="form.years"
                        :options="years"
                        required
                    ></b-form-select>
                    <label style="margin: 8px 10px; color:#355899">Years</label>
                    <label style="margin: 8px 10px; color: #355899"
                    >Expected Salary</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="form.salary"
                        required
                        placeholder="MIN"
                        style="border-radius: 0px"
                    />
                  </div>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-7"
                    label="Level"
                    label-for="input-3"
                >
                  <div class="input-group" style="width: 69.5%">
                    <b-form-select
                        id="input-3"
                        v-model="form.level"
                        :options="level"
                        required
                    ></b-form-select>
                  </div>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-8"
                    label="Industry"
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Enter the Cities you want to work in "
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-9"
                    label="Job Category"
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Type or Select the desired Category where you want to work"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label-size="sm"
                    label-align-sm="right"
                    id="input-group-10"
                    label="Role"
                    label-for="input-2"
                >
                  <b-form-input
                      id="input-2"
                      v-model="form.location"
                      required
                      placeholder="Type or Select the desired role where you want to work"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-11">
                  <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox
                        value="that"
                        style="color:#355899; font-size: 16px"
                    >
                      Also send me jobs closely related my search terms
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>

                <div class="row">
                  <div class="col text-center">
                    <b-button type="submit" style="background: #213D7C"
                    >CREATE A JOB ALERT</b-button
                    >
                  </div>
                </div>
              </b-form>
              <!-- End of get Alert Bootstarp vue form -->

            </validation-observer>
            <!-- end of  Vee validate validation observer component -->

          </div>

          <div class="col-md-4 note_group">
            <h5 style="color: black; font-weight: bold">
              Why should you create a free job alert?
            </h5>

            <div class="note">
              <p class="ab">Get relevant jobs directly in your inbox</p>
              <p class="a">Stay updated with latest opportunities</p>
              <p class="a">Be the First one to apply</p>
              <p class="a">Create up to 5 personalized job alerts</p>
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
export default {
  name: "getAlert",
  components: { Footer, Header },
  data() {
    return {
      form: {
        keywords: "",
        email: "",
        name: "",
        years: null,
        checked: []
      },
      years: [
        { text: "Select One", value: null },
        "One",
        "Two",
        "Three",
        "Four"
      ],
      level: [
        { text: "Select One", value: null },
        "Entry Level",
        "Mid Level",
        "High Level"
      ],
      show: true,
        info: '',
    };
  },
  methods: {

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));

    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.$refs.observer.reset();
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss">
.note_group,
.create_alert_form {
  padding: 50px 0;
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
.sub_button {
  position: center;
}
.note p {
  position: relative;
  margin-right: 15px;
}
.note p:before {
  position: unset;
  content: "*";
  color: red;
  right: -10px;
  top: 0;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #eeeeee;
  opacity: 1; /* Firefox */
  font-size: 12px;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #eeeeee;
}

#input-1,
#input-2,
#input-4,
#input-5,
#input-6,
#input-7,
#input-8 {
  background: #eeeeee1a;
  border: 1.5px solid #bfbfbf61;
  border-radius: 0px;
  width: 400px;
}

#input-3 {
  width: 150px;
  border-radius: 0px;
}
#input-group-1__BV_label_,
#input-group-2__BV_label_,
#input-group-3__BV_label_,
#input-group-4__BV_label_,
#input-group-5__BV_label_,
#input-group-6__BV_label_,
#input-group-7__BV_label_,
#input-group-8__BV_label_ {
  font-size: 16px;
  font-weight: 500;
  color: #355899;
}
.custom-control-inline {
  margin-right: -0.3rem;
}
</style>
