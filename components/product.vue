<template>
  <div>
    <div v-if="!$vuetify.breakpoint.xs">
      <v-row v-if="index % 2 == 0" class="px-8">
        <v-col xs="12" sm="6" class="leftbox px-4 px-sm-12">
          <h1
            class="text-left font-weight-medium mb-3 title text-sm-h6 text-xl-h4"
          >
            {{ item.title }}
          </h1>
          <div class="font-weight-light caption text-md-subtitle-1 text-xl-h6">
            {{ item.desc }}
          </div>
          <div>
            <span
              v-if="!$vuetify.breakpoint.xs"
              class="primary--text caption clickable"
              @click="$router.push(item.to)"
            >
              Read More...</span
            >
          </div>
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            text
            outlined
            color="primary"
            class="mt-4 mt-sm-4 py-6"
            block
            @click="$router.push(item.to)"
            >Read More</v-btn
          >
        </v-col>
        <v-col xs="12" sm="6">
          <v-container class="primary">
            <v-img
              :src="require(`../assets/home/services/${item.src}.jpg`)"
              :lazy-src="require(`../assets/home/services/${item.src}.jpg`)"
              :height="imageHeight"
              eager
            ></v-img>
          </v-container>
        </v-col>
        <v-divider class="mx-4 mt-6 mt-sm-12 primary"></v-divider>
      </v-row>
      <v-row v-else class="px-8">
        <v-col xs="12" sm="6">
          <v-container class="primary">
            <v-img
              :src="require(`../assets/home/services/${item.src}.jpg`)"
              :lazy-src="require(`../assets/home/services/${item.src}.jpg`)"
              :height="imageHeight"
              eager
            ></v-img>
          </v-container>
        </v-col>
        <v-col xs="12" sm="6" class="leftbox px-4 px-sm-12">
          <h1
            class="text-left font-weight-medium mb-3 title text-sm-h6 text-xl-h4"
          >
            {{ item.title }}
          </h1>
          <div class="font-weight-light caption text-md-subtitle-1 text-xl-h6">
            {{ item.desc }}
          </div>
          <div>
            <span
              v-if="!$vuetify.breakpoint.xs"
              class="primary--text caption clickable"
              @click="$router.push(item.to)"
            >
              Read More...</span
            >
          </div>
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            text
            outlined
            color="primary"
            class="mt-4 mt-sm-4 py-6"
            block
            @click="$router.push(item.to)"
            >Read More</v-btn
          >
        </v-col>

        <v-divider class="mx-4 mt-6 mt-sm-12 primary"></v-divider>
      </v-row>
    </div>
    <div v-else>
      <v-row class="px-8">
        <v-col xs="12" sm="6">
          <v-container class="primary">
            <v-img
              :src="require(`../assets/home/services/${item.src}.jpg`)"
              :lazy-src="require(`../assets/home/services/${item.src}.jpg`)"
              :height="imageHeight"
              eager
            ></v-img>
          </v-container>
        </v-col>
        <v-col xs="12" sm="6" class="leftbox px-4 px-sm-12">
          <h1
            class="text-left font-weight-medium mb-3 title text-sm-h6 text-xl-h4"
          >
            {{ item.title }}
          </h1>
          <div class="font-weight-light caption text-md-subtitle-1 text-xl-h6">
            {{ item.desc }}
          </div>
          <div>
            <span
              v-if="!$vuetify.breakpoint.xs"
              class="primary--text caption clickable"
              @click="$router.push(item.to)"
            >
              Read More...</span
            >
          </div>
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            text
            outlined
            color="primary"
            class="mt-4 mt-sm-4 py-6"
            block
            @click="$router.push(item.to)"
            >Read More</v-btn
          >
          <v-divider class="mx-4 mt-6 mt-sm-12 primary"></v-divider>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200";
        case "sm":
          return "240";
        case "md":
          return "320";
        case "lg":
          return "320";
        case "xl":
          return "320px";
      }
      return "320px";
    },
  },
};
</script>

<style scoped>
.leftbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.clickable {
  cursor: pointer;
}
</style>
