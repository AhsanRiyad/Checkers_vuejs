<template >
  <div class="mainTemplate">
    <div class="mainContainer">
      <p class="h1Text">Create a Job Alert Resume</p>

      <!-- <Biodata /> -->

      <component :is="nameOfComponent" />

      <div class="row-14">
        <div class="item-1">
          <v-btn @click.stop="nameOfComponent='Biodata'">Cancel</v-btn>
        </div>

        <div class="item-2">
          <v-btn
            color="#365899"
            class="white--text"
            @click.stop="nameOfComponent='WorkExperience'"
          >Next</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Biodata from "./Biodata.vue";
import WorkExperience from "./WorkExperience.vue";

export default {
  name: "Resume1",
  components: { Biodata, WorkExperience },
  data: () => {
    return {

      nameOfComponent: 'Biodata',
      

      search: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
        height: 500,
      },
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
  width: 50%;
  margin: 20px auto;
}
.h1Text {
  text-align: center;
  margin: 0 20px;
  font-size: 25px;
  color: #2166b6;
}

.pHeader {
  margin: 10px 20px;
  font-size: 15px;
  span {
    color: red;
    font-size: 12px;
  }
}

.row-1 {
  width: 50%;
  margin: 20px 20px 0px 20px;
  p {
    margin: 2px 0;
  }
}

.row-2 {
  width: 50%;
  margin: 0px 20px 0px 20px;
  p {
    margin: 2px 0;
  }
}

.row-3 {
  width: 50%;
  margin: 0px 20px 10px 20px;
  div {
    width: 50%;
    p {
      margin-top: -15px;
    }
  }
  p {
    margin-bottom: 0px;
  }
}

.row-4 {
  margin: 15px 20px;
  p {
    margin-bottom: 5px;
  }
}

.row-5 {
  margin: 15px 20px;
  p {
    margin-bottom: 5px;
  }
}

.row-6 {
  margin: 15px 20px;
  p {
    margin-bottom: 5px;
  }
}

.row-7 {
  margin: 15px 20px;
  p {
    margin-bottom: 5px;
  }
}

.row-8 {
  margin: 15px 20px;
  p {
    margin-bottom: 5px;
  }
}

.row-9,
.row-10,
.row-11,
.row-13 {
  width: 100%;
  display: flex;
  .item-1 {
    flex-grow: 1;
    margin: 0 20px;
  }
  .item-2 {
    flex-grow: 1;
    margin: 0 20px;
  }
}

.row-12 {
  margin: 0 20px;
}

.row-14 {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
  .item-1 {
    flex-grow: 1;
  }
  .item-2 {
    flex-grow: 1;
    text-align: right;
  }
}
</style>