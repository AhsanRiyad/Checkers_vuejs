<template>
  <validation-provider
    :vid="vid"
    :rules="rules"
    :name="name || label"
    v-slot="validationContext"
  >
    <b-form-group
      label-cols="4"
      label-size="sm"
      label-align-sm="right"
      :label="label"
      :label-for="id"
    >
      <b-form-input
        :id="id"
        :type="type"
        :class="{
          'border-gray-700': !validationContext.errors[0],
          'border-red-600': validationContext.errors[0],
          'has-value': hasValue
        }"
        :state="getValidationState(validationContext)"
        :aria-describedby="aria_describedby"
        :placeholder="placeholder"
        ref="input"
        v-model="innerValue"
      ></b-form-input>

      <b-form-invalid-feedback :id="aria_describedby">
        {{ validationContext.errors[0] }}
      </b-form-invalid-feedback>

    </b-form-group>
  </validation-provider>
</template>

<script>
export default {
  name: "AlertTextField",
  props: {
    id: {
      type: String,
      default: ""
    },
    vid: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: [Object, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return [
          "url",
          "text",
          "password",
          "tel",
          "search",
          "number",
          "email"
        ].includes(value);
      }
    },
    value: {
      type: null,
      default: ""
    },
    aria_describedby: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    innerValue: ""
  }),
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    }
  },
  computed: {
    hasValue() {
      return !!this.innerValue;
    }
  },
  watch: {
    innerValue(value) {
      this.$emit("input", value);
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
};
</script>

<style scoped></style>
