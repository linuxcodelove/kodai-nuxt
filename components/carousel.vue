<template>
  <div>
    <v-carousel
      continuous
      hide-delimiters
      interval="4000"
      :height="imageHeight"
      show-arrows-on-hover
      :cycle="cycle"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`../assets/home/carousel/${item.src}.jpg`)"
        :lazy-src="require(`../assets/home/carousel/${item.src}.jpg`)"
        @mouseover="cycle = false"
        @mouseleave="cycle = true"
        class="carouselform"
      >
        <v-container fill-height fluid class="d-flex justify-center align-end">
          <banner-form @close="snackbarMessage"></banner-form>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-snackbar v-model="snackbar" timeout="2000" :color="color" top right>
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
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
      this.message = msg || "Please fill up All Fields or Invalid data";
      this.color = color || "red";
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.word {
  font-family: "EBGaramond", Arial, Helvetica, sans-serif;
}
.carouselform {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
}

::v-deep .v-snack__wrapper {
  min-width: 0px;
}
</style>
