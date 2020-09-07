<template>
  <div class="login-main-container">
    <div class="login-row-1">
      <div class="login-row-item-1">
        <v-text-field
          solo
          label="Search"
          prepend-inner-icon="search"
          :rules="fieldRulesProp(true, 'others' , 'others')"
          v-model="search"
          @keyup.stop.enter="submit"
        >
          <template v-slot:append-outer>
            <v-btn
              tile
              class="white--text"
              style="height: 50px; margin-top: -13px; margin-left: -8px; background: #365899 "
              @click.stop="submit"
            >Search</v-btn>
          </template>
        </v-text-field>
      </div>
    </div>

    <div class="login-msg">
      <div class="login-msg-row-1">
        <h1 class="text-center">New To JobAlart?</h1>
      </div>
    </div>

    <div class="login-btn">
      <div class="login-btn-row-1" v-if="isLoggedIn">
        <v-btn
          tile
          block
          class="white--text"
          style="background: #365899; height: 50px"
          @click.stop="()=>$router.history.push({ name: 'biodata' })"
        >Manage Resume</v-btn>
      </div>
      <div class="login-btn-row-1" v-else>
        <v-btn
          tile
          block
          class="white--text"
          style="background: #365899; height: 50px"
          @click.stop="()=>$router.history.push({ name: 'Signup' })"
        >Register With Us</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import "../../sass/job-alart/_SearchJob.scss";
import validation from "../../mixins/validation";

export default {
  name: "SearchJob",
  mixins: [validation],
  data: () => {
    return {
      search: "",
    };
  },
  computed: {
    isLoggedIn() {
      if (this.$cookies.get("accessToken") == null) {
        this.$store.commit("isLoggedIn", false);
        return false;
      } else {
        this.$store.commit("isLoggedIn", true);
        return true;
      }
    },
  },
  methods: {
    submit() {
      // console.log("submit clicked");
      if (this.R.isEmpty(this.search)) {
        this.$awn.alert("Field can't be empty");
        return;
      }

      this.$router.push("/search?q=" + this.search);
    },
  },
  mounted() {
    console.log(" accessToken ", this.$cookies.get("accessToken"));
  },
};
</script>