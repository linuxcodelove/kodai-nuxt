<template>
  <div>
    <v-card max-width="100%" class="mx-auto py-2 py-sm-6 secondary" outlined>
      <v-sheet max-width="1200px" class="mx-auto px-6" color="transparent">
        <v-card-title
          class="justify-center headline text-sm-h4 text-xl-h2 font-weight-bold text--darken-3 text-center"
          >Our Services</v-card-title
        >
        <v-divider class="mx-4 my-2 my-sm-8 primary"></v-divider>
        <v-row class="mb-4 mb-sm-2">
          <v-col
            cols="12"
            v-for="(service, index) in services"
            :key="service.title"
            class="mt-2 my-sm-6"
          >
            <product :item="service" :index="index"></product>
          </v-col>
        </v-row>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      services: [
        {
          src: "resorts",
          title: "Resorts & Cottages",
          to: "/cottages",
          desc: "Our cottages and stay arrangements in kodaikanal will make you to feel the delight of being at home with more luxurious and safe, We provide various types of stays such as Individual cottages, Service apartments, Villa’s, Home stays, Tent stays, Wood houses, Tree houses, Forest bungalows, Star category resorts and Hotel rooms. Please view our 100+ cottages and resorts to book your space.",
        },
        {
          src: "rental_cars",
          title: "Rental Cars & Tour Packages",
          to: "/rentalcars",
          desc: "We have exhaustive list of vehicles available for rent in kodaikanal. We arrange Inner City, Outer City, One way and Round trip travel services in and around kodaikanal. Our tour packages includes Stay arrangements, rental vehicles for site seeing, activities such as Trekking, Jeep Safari, Jungle Ride, Off Roading, Camp fire with music, Cycling, Boating and Horse riding. We offers various packages for Honey Moon Couples, Family Vacation, Group Stay and Solo Travelers. ",
        },
        {
          src: "investment",
          title: "Investment Opportunities",
          to: "",
          desc: "Imagine waking up to a scenic view of hills while taking in a breath of fresh air every morning. Well, having a property in Kodaikanal can make this dream come true in means Buying/Building property in Kodaiknal. We also help you to get your property registered for home stay or resorts which make your property yielding very high return. ",
        },
      ],
      ourCottages: [],
    };
  },
  created() {
    this.ourCottages = Array.from(
      { length: 21 },
      (_item, index) => `${index + 1}`
    );
  },
};
</script>

<style></style>
