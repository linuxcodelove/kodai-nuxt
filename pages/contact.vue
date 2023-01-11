<template>
  <div>
    <loader v-if="!isLoaded"></loader>
    <banner img="contact" title="" subtitle=""></banner>
    <div class="accent">
      <v-container>
        <div class="grey--text text--darken-3 my-4 mb-8 mb-md-8">
          <v-row>
            <v-col cols="12 px-12" class="py-4 py-sm-6 py-md-8 py-lg-12">
              <div
                class="body text-lg-h6 text-xl-h4 font-weight-regular grey--text text--darken-3"
              >
                Treat yourself to an overnight stay somewhere special. It's your
                chance to discover Kodaikanal and all it has to offer. We
                provide various types of stays such as Individual cottages,
                Service apartments, Villa's, Home stays, Tent stays, Wood
                houses, Tree houses, Forest bungalows, Star category resorts and
                Hotel rooms. Please view our 100+ cottages and resorts to book
                your space.
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <contact-form @close="snackbarMessage"></contact-form>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :position="center"
        label="Kodaikanal Trip Advisor"
      ></GmapMarker>
    </GmapMap>

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
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Treat yourself to an overnight stay somewhere special. It's your chance to discover Kodaikanal and all it has to offer. We provide various types of stays such as Individual cottages, Service apartments, Villa's, Home stays, Tent stays, Wood houses, Tree houses, Forest bungalows, Star category resorts and Hotel rooms. Please view our 100+ cottages and resorts to book your space.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.kodaiguide.in/contact",
        },
      ],
    };
  },
  data() {
    return {
      center: { lat: 10.239457, lng: 77.498056 },
      isLoaded: false,
      snackbar: false,
      message: "",
      color: "red",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
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
