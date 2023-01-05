<template>
  <v-container>
    <v-carousel hide-delimiters height="400" show-arrows-on-hover>
      <div v-for="(comment, i) in comments" :key="`comment${i}`">
        <v-carousel-item>
          <v-row class="flex-nowrap mx-0 px-0">
            <v-col cols="12">
              <v-card
                height="400"
                class="rounded-sm mx-12 px-6 comments caption text-sm-body-1"
                color="transparent"
              >
                <h2
                  class="headline text-sm-h4 font-weight-bold text-center grey--text text--lighten-1 pb-6 pb-sm-10 pb-md-12"
                >
                  What People Tell About Us
                </h2>
                <v-avatar size="80" class="mb-8">
                  <v-img
                    :src="require(`../assets/home/comments/${comment.img}.jpg`)"
                  ></v-img>
                </v-avatar>
                "{{ comment.comment }}"
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </div>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          img: "comment1",
          comment:
            "The best trip advisors! Had a great and memorable experience in kodaikanal! From room bookings to sightseeing and all other facilities we needed through out the trip, this team really did a great job especially Rameeze bro! He was so humble, gentle and responsible throughout the trip! Thank you team!",
        },
        {
          img: "comment2",
          comment:
            "They are really best! Even in this COVID situation those people provide as every help as they can and specially wanna thanks rameez rahuman bro without him this trip cannot be the best. If any one wanna visit kodaikanal for the first time and wanna best experience this people will for sure make it best ❤",
        },
        {
          img: "comment3",
          comment:
            "Homestay was extremely good. There was a cook in the stay who prepared tasty food. This was another best thing. But food delivery wasn't provided as agreed.",
        },
        {
          img: "comment4",
          comment:
            "Super and Unforgettable memories....entha corona time la kuda nalla help pannanga.....oru trip ku vantha travelers mari avanga guide pannala nalla frnd mari pathukitanga...thank you so much bro ❤",
        },
        {
          img: "comment5",
          comment:
            "We had a great time over all ... Services and facilities are good.. best recommended travel planner for kodai.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
