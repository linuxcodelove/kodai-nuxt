<template>
  <div>
    <loader v-if="!isLoaded"></loader>
    <carousel :items="items"></carousel>
    <who-we-are
      title="What We Do?"
      subtitle="as a Kodaikanal Travel Planner"
      desc="Kodaikanal is the city of authenticity where real fun and adventure are at
      the door step. As a Kodaikanal Tripadvisor we offer tourism and investment
      related services regarding travel arrangements, stay, food, live guidance
      in assisting to visit top site seeing spots in kodaikanal. We also provide
      investment and construction related services in kodaikanal to make your
      dreams come with unimaginable returns."
    ></who-we-are>
    <our-services></our-services>
    <div class="secondary">
      <h1
        class="text-center justify-center headline text-sm-h5 text-lg-h4 text-xl-h3 font-weight-bold text--darken-3 pb-0 pb-sm-2"
        style="text-decoration: underLine; text-decoration-color: white"
      >
        Our Cottages
      </h1>
      <cottages-list :showtitle="false"></cottages-list>
    </div>

    <comments></comments>
    <customFooter></customFooter>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      items: [
        {
          src: "banner1",
        },
        {
          src: "banner2",
        },
        {
          src: "banner3",
        },
        {
          src: "banner4",
        },
      ],
      isLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
  },
};
</script>
