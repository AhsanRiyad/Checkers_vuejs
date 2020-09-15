<template>
  <div>
    <!-- style="padding-right: 3px; color: white" -->
    <div class="resume-option-tab-containe_signup">
      <div class="resume-option-tab">
        <div @click.stop="()=>$store.commit( 'registerAs' , 'APPLICANTS' )" :class="`${ $store.getters.registerAs == 'APPLICANTS' ?  active_class: className}`">
          <span>
            <v-icon class="v__icon_1">sports_volleyball</v-icon>
          </span> Register as Applicants
        </div>
        <div  @click.stop="()=>$store.commit( 'registerAs' , 'COMPANY' )" :class="`${ $store.getters.registerAs == 'COMPANY' ?  active_class: className}`">
          <span>
            <v-icon class="v__icon_1">person</v-icon>
          </span> Register as Company
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
@import "../../../../sass/job-alart/auth/_tabDesgin.scss";
</style>