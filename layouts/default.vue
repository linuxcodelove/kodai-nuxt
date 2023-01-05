<template>
  <v-app>
    <v-app-bar app color="secondary" elevation="24">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click="showDrawer = true"
      ></v-app-bar-nav-icon>
      <div class="px-4 font-weight-medium red--text">
        <strong class="font-weight-black text-h6 white--text"
          >KODAIKANAL</strong
        >
        TRIPADVISOR
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isSmallerDevice">
        <v-btn text>HOME</v-btn>
        <v-btn text>COTTAGES</v-btn>
        <v-btn text>RENTAL CARS</v-btn>
        <v-btn text>REAL ESTATE</v-btn>
        <v-btn text>ABOUT</v-btn>
        <v-btn text>CONTACT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="showDrawer" class="primary" dark fixed>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title class="grey--text text--darken-2"
              >HOME</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="grey--text text--darken-2"
              >COTTAGES</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="grey--text text--darken-2"
              >RENTAL CARS</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="grey--text text--darken-2"
              >REAL ESTATE</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="grey--text text--darken-2"
              >ABOUT</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="grey--text text--darken-2"
              >CONTACT</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <chat-with-us></chat-with-us>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      showDrawer: false,
    };
  },
  computed: {
    isSmallerDevice() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
