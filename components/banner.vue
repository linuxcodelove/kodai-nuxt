<template>
  <v-container fill-height fluid pa-0 ma-0>
    <v-card color="transparent" width="100%" elevation="12" tile dark>
      <v-img
        :height="imageHeight"
        :src="require(`../assets/${img}.jpg`)"
        width="100%"
        dark
      >
        <v-container fill-height fluid class="d-flex justify-center align-end">
          <banner-form @close="snackbarMessage"></banner-form>
        </v-container>
      </v-img>
    </v-card>
    <v-snackbar v-model="snackbar" timeout="2000" :color="color" top right>
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    subDesc: {
      type: String,
      default: "",
    },
    book: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cycle: true,
      snackbar: false,
      message: "",
      color: "red",
    };
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220";
        case "sm":
          return "400";
        case "md":
          return "500";
        case "lg":
          return "600";
        case "xl":
          return "800";
      }
      return "800";
    },
  },
  methods: {
    snackbarMessage(msg, color) {
      this.snackbar = true;
      this.message = msg || "Please fill up All Fields or Invalid data";
      this.color = color || "red";
    },
  },
};
</script>

<style></style>
