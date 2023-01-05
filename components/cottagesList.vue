<template>
  <v-card
    v-if="cottages.length"
    max-width="100%"
    class="mx-auto py-0 py-sm-6 secondary"
    outlined
  >
    <v-sheet max-width="1200px" class="mx-auto px-6" color="transparent">
      <v-card-title
        v-if="showtitle"
        class="justify-center headline text-sm-h4 text-xl-h2 font-weight-bold text--darken-3 text-center"
        >Book Your Cottages</v-card-title
      >
      <v-divider
        v-if="showtitle"
        class="mx-4 mb-2 mb-sm-8 mt-0 mt-sm-6 primary"
      ></v-divider>
      <v-row class="my-4 my-sm-0">
        <div class="cottageList mb-0 mx-auto" style="max-height: 2078px">
          <v-col
            cols="12"
            v-for="(cottage, index) in cottages"
            :key="index"
            class="py-0 py-sm-2"
          >
            <cottage-single
              :item="cottage"
              :edit="edit"
              @editItem="editItem"
              @deleteItem="deleteItem"
            ></cottage-single>
          </v-col>
        </div>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
    showtitle: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cottages: [],
    };
  },
  methods: {
    editItem(item) {
      this.$emit("editItem", item);
    },

    deleteItem(id) {
      this.$axios.delete(`api/cottages/${id}`).then(() => this.initialise());
    },
    initialise() {
      this.$axios
        .get("https://kodaiguide.in/cottagelist.json", {
          "content-type": "application/json",
        })
        .then((res) => {
          console.log(res);
          this.cottages = res.data.cottages;
        });
    },
  },
  created() {
    this.initialise();
  },
};
</script>

<style scoped>
.cottageList {
  overflow: auto;
  overflow-x: hidden;
}
</style>
