<template>
  <div>
    <v-dialog
      v-model="intDialogVisible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="intDialogVisible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Preview</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="intDialogVisible = false">Close</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <h1>Job details</h1>

        <div style="height: 100px"></div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "../../../sass/job-alart/dialog/_dialogDesign.scss";
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    // defaultResume: () => import("../ResumeLayout/default"),
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  computed: {
    intDialogVisible: {
      get: function () {
        return this.dialogVisible;
      },
      set: function (value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>