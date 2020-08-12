<template >
  <div class="mainTemplate">
    <div class="mainContainer">
      <h1 class="h1Text">Create a Job Alert Resume</h1>
      

      <p>Biodata</p>

       <v-divider></v-divider>
    
        <p>First Name</p>
        

    </div>
  </div>
</template>
<script>
export default {
  name: "Resume1",
  data: () => {
    return {
      search: "",
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.mainTemplate {
  background: green;
}
.mainContainer {
  background: #efefef;
  justify-content: center;
  width: 60%;
  margin: auto;
}
.h1Text{
    text-align: center;
}
</style>