<template>
  <div>
    <loader v-if="!isLoaded"></loader>
    <banner img="about" subtitle=""></banner>
    <what-we-do></what-we-do>
    <booking-form @close="snackbarMessage"></booking-form>
    <custom-footer></custom-footer>
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
  data() {
    return {
      isLoaded: false,
      snackbar: false,
      message: "",
      color: "red",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
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

<style></style>
