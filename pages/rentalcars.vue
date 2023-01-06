<template>
  <div>
    <loader v-if="!isLoaded"></loader>
    <banner
      img="rentalcars/carrental"
      title=""
      subtitle=""
      description=""
      :book="true"
    ></banner>
    <who-we-are
      title="Our Services"
      desc="We have exhaustive list of vehicles available for rent in kodaikanal. We arrange Inner City, Outer City, One way and Round trip travel services in and around kodaikanal. Our tour packages includes Stay arrangements, rental vehicles for site seeing, activities such as Trekking, Jeep Safari, Jungle Ride, Off Roading, Camp fire with music, Cycling, Boating and Horse riding. We offers various packages for Honey Moon Couples, Family Vacation, Group Stay and Solo Travelers. "
    ></who-we-are>
    <v-container fluid class="pt-4 pt-sm-8 my-0">
      <h2 class="text-center text-h5 text-sm-h4 text-xl-h3">
        Our Site Seeing Packages
      </h2>
      <v-row class="my-2 my-sm-6 mx-2">
        <v-col :cols="columns" v-for="img in images" :key="img">
          <v-card class="secondary">
            <v-img
              :src="require(`../assets/rentalcars/packages/${img}.jpg`)"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-0">
      <h2 class="text-center text-h5 text-sm-h4 text-xl-h3">
        Camping Packages
      </h2>
      <v-row class="my-2 my-sm-6 mx-2">
        <v-col>
          <v-card class="secondary">
            <v-img
              :src="
                require(`../assets/rentalcars/packages/camping/camping.jpg`)
              "
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-0">
      <h2 class="text-center text-h5 text-sm-h4 text-xl-h3">Couple Packages</h2>
      <v-row class="my-2 my-sm-6 mx-2">
        <v-col :cols="columns" v-for="n in 3" :key="n">
          <v-card class="secondary">
            <v-img
              :src="require(`../assets/rentalcars/packages/couple/${n}.jpg`)"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pb-4 pb-sm-8">
      <h2 class="text-center text-h5 text-sm-h4 text-xl-h3">
        Group Stay Packages
      </h2>
      <v-row class="my-2 my-sm-6 mx-2">
        <v-col>
          <v-card class="secondary">
            <v-img
              :src="require(`../assets/rentalcars/packages/group/group1.jpg`)"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rental Cars",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We have exhaustive list of vehicles available for rent in kodaikanal. We arrange Inner City, Outer City, One way and Round trip travel services in and around kodaikanal. Our tour packages includes Stay arrangements, rental vehicles for site seeing, activities such as Trekking, Jeep Safari, Jungle Ride, Off Roading, Camp fire with music, Cycling, Boating and Horse riding. We offers various packages for Honey Moon Couples, Family Vacation, Group Stay and Solo Travelers",
        },
      ],
    };
  },
  data() {
    return {
      images: ["village", "picnic", "valley"],
      isLoaded: false,
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xs) return 12;
      return 4;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  },
};
</script>

<style></style>
