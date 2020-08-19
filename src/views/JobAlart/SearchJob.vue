<template>
  <div >
    <v-container
      fluid
      class="container-1"
    >
      <v-row cols="12" justify="center">
        <v-col cols="10" md="5">
          <v-row>
            <v-text-field solo label="Search" prepend-inner-icon="search" v-model="search" @keyup.enter="submit">
              <template v-slot:append-outer>
                <v-btn
                  tile
                  class="white--text"
                  style="height: 50px; margin-top: -13px; margin-left: -8px; background: #365899 "
                  @click.stop="submit"
                >Search</v-btn>
              </template>
            </v-text-field>
          </v-row>
        </v-col>
      </v-row>

      <v-row cols="12" justify="center">
        <v-col cols="10" md="5">
          <h1 class="text-center">New To JobAlart?</h1>
        </v-col>
      </v-row>

      <v-row cols="12" justify="center">
        <v-col cols="10" md="5">
          <v-row cols="12">
            <v-col>
              <v-btn
                tile
                block
                class="white--text"
                style="background: #365899; height: 50px"
              >Register With Us</v-btn>
            </v-col>
            <v-col>
              <v-btn
                tile
                block
                class="white--text"
                style="background: #365899; height: 50px"
                @click.stop="()=>$router.history.push({ name: 'resume' })"
              >Manage Resume</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
<script>
import "../../sass/job-alart/_SearchJob.scss"
export default {
  name: "SearchJob",
  data:()=>{
      return {
          search: '',
      }
  },
  methods: {
    submit() {
      // console.log("submit clicked");
      this.$router.push("/search?q="+this.search);
    }
  }
};
</script>