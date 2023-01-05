<template>
  <div>
    <v-menu
      min-width="300"
      :max-width="width"
      top
      v-model="menu"
      :close-on-click="false"
      :close-on-content-click="false"
      :nudge-top="60"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn
            v-model="fab"
            v-on="on"
            color="green darken-1"
            @click="
              fab = !fab;
              menu = false;
            "
            dark
            fixed
            bottom
            right
            fab
          >
            <v-icon v-if="!fab">mdi-whatsapp</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-list dark class="chat-header py-0">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Contact Us</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                small
                icon
                @click="
                  fab = !fab;
                  menu = false;
                "
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-container class="chat-background">
          <v-layout row wrap class="my-1">
            <v-flex class="text-xs-right" xs12 mx-4>
              <v-chip class="chip-chat grey--text text--darken-3 pa-4"
                >Hello, how can we help you?
              </v-chip>
            </v-flex>
            <v-row class="mx-4 px-0 mt-1">
              <v-col cols="11" class="mx-0 px-0">
                <v-text-field
                  single-line
                  class="my-input"
                  v-model="text"
                  outlined
                  dense
                  rounded
                  hide-details
                  light
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="mx-0 px-0">
                <v-btn
                  medium
                  class="teal--text"
                  icon
                  @click="
                    fab = !fab;
                    menu = false;
                  "
                  :href="apilink"
                  target="_blank"
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      phone: "+918754236533",
      text: "",
      apilink: "",
    };
  },
  computed: {
    width() {
      if (this.$vuetify.breakpoint.xs) return "240";
      return "300";
    },
  },
  watch: {
    text() {
      this.apilink = "http://";
      this.apilink += this.isMobile() ? "api" : "web";
      this.apilink +=
        ".whatsapp.com/send?phone=" +
        this.phone +
        "&text=" +
        encodeURI(this.text);
    },
  },
  created: function () {
    this.apilink = "http://";
    this.apilink += this.isMobile() ? "api" : "web";
    this.apilink +=
      ".whatsapp.com/send?phone=" + this.phone + "&text=" + encodeURI("Hello!");
  },
  methods: {
    isMobile() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm)
        return true;
      return false;
    },
  },
};
</script>

<style scoped>
.my-input .v-input .v-input__slot {
  border-radius: 100px !important;
}
.chat-background {
  background-color: #ece5dd !important;
}
.chat-header {
  background-color: #075e54 !important;
}
.chip-chat {
  background-color: #dcf8c6 !important;
}
.v-text-field--outlined >>> fieldset {
  border-color: rgb(0, 0, 0);
  color: black;
}
</style>
