<template>
  <v-container fluid class="primary py-6 py-sm-12 px-12">
    <div class="mb-0 mb-sm-4">
      <h2
        v-if="subtitle"
        class="headline text-sm-h4 font-weight-bold text-center greycol--text text--lighten-1"
      >
        {{ title }}
      </h2>
      <h2
        v-else
        class="headline text-sm-h4 font-weight-bold pb-4 text-center greycol--text text--lighten-1"
      >
        {{ title }}
      </h2>

      <span class="font-weight-medium white--text caption" style="opacity: 0">
        {{ subtitle }}
      </span>
    </div>
    <div
      class="font-weight-medium mx-auto subtitle text-sm-h6 mb-4 grey--text text--darken-3"
      :class="{ width: $vuetify.breakpoint.smAndUp }"
    >
      {{ desc }}
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "300";
        case "sm":
          return "400";
        case "md":
          return "500";
        case "lg":
          return "600";
        case "xl":
          return "720";
      }
      return "720";
    },
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200";
        case "sm":
          return "260";
        case "md":
          return "320";
        case "lg":
          return "400";
        case "xl":
          return "480";
      }
      return "320";
    },
  },
};
</script>

<style scoped>
.textright {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.width {
  width: 720px;
  max-width: 720px;
}
</style>
