<template>
  <div>
    <!-- style="padding-right: 3px; color: white" -->
    <div class="resume-option-tab-container">
      <div class="resume-option-tab">
        <div
          @click.stop="()=>{ $router.history.push('/biodata') }"
          :class="`${ $store.getters.componentName == 'Biodata' ?  active_class: className}`"
        >
          <span>
            <v-icon class="v__icon_1">person</v-icon>
          </span> Biodata
        </div>
        <div
          :class="`${ $store.getters.componentName == 'WorkExperience' ?  active_class: className}`"
          @click.stop="()=>{ $router.history.push('/work-experience') }"
        >
          <span>
            <v-icon class="v__icon_1">sports_volleyball</v-icon>
          </span> Experience
        </div>
        <div
          @click.stop="()=>{ $router.history.push('/education') }"
          :class="`${ $store.getters.componentName == 'Education' ?  active_class: className}`"
        >
          <span>
            <v-icon class="v__icon_1">school</v-icon>
          </span> Education
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../../sass/job-alart/ResumeLayout/_tabDesgin.scss";

export default {
  props: ["active"],
  data() {
    return {
      active_class: "resume-option-tab__active resume-option-tab__item",
      className: "resume-option-tab__item",
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>