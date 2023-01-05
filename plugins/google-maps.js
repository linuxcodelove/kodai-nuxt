import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRl5G4F_-d_uHkNzLG4Kq8pAS9DwZeb4o",
    libraries: "places",
  },
});
