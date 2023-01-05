<template>
  <div class="secondary">
    <v-row class="py-8 mx-6 text-center">
      <v-col :cols="columns">
        <v-form ref="form" v-model="formValid" class="mx-auto">
          <v-col cols="12" class="my-2 py-0"><h2>Contact Us</h2></v-col>
          <v-col cols="12" class="my-2 py-0"
            ><p>Drop us your message and we'll get back to you asap</p></v-col
          >
          <v-col cols="12">
            <v-text-field
              v-model="form.name"
              label="Your Name"
              outlined
              hide-details
              color="accent"
              :rules="[() => !!form.name || 'Name is required']"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              label="Email"
              outlined
              hide-details
              color="accent"
              :rules="[
                () => !!form.email || 'Email is required',
                rules.emailrules,
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.phone"
              label="Phone"
              outlined
              type="number"
              hide-details
              color="accent"
              :rules="[
                () => !!form.phone || 'Phone is required',
                rules.validPhone,
                rules.phonelength,
              ]"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Your comments"
              outlined
              hide-details
              color="accent"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn
              :disabled="!this.formValid"
              text
              outlined
              color="accent"
              style="border-color: white"
              class="my-2"
              @click="sendMail"
              >Submit</v-btn
            >
          </v-col>
        </v-form>
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.xs"
        :cols="columns"
        class="desc text-left"
      >
        <v-container fluid>
          <div class="caption text-md-body-1">
            Visiting a hill station requires plenty of detailed planning based
            on the amenity's availability. We will ease your efforts in finding
            suitable cottages for visitors. Our cottages in Kodaikanal are
            classic, premium, and super deluxe cottages. We provide a huge range
            of cottages with different experiences and views. Each of our
            cottages is different and special in its amenities and location. We
            offer everything to make the vacation energizing, such as a private
            kitchen, designed bedrooms, parking, free wi-fi, a caretaker, a play
            area, a travel desk, a doctor on request, home-prepared food, and
            much more. Most of our Kodaikanal cottages offer amazing sights of
            lakes, mountains, and valleys. Our cottages are the best spot to
            enjoy a peaceful vacation with friends and family.
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValid: false,
      form: {},
      rules: {
        validPhone: (value) => !String(value).includes(".") || "Invalid",
        phonelength: (value) => {
          return value?.length == 10 || "Phone number must be 10 digits.";
        },
        emailrules: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email must be valid.";
        },
      },
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xs) return 12;
      return 6;
    },
  },
  methods: {
    sendMail() {
      if (!this.$refs.form.validate()) {
        return;
      }
      localStorage.setItem("user", JSON.stringify(this.form));
      this.sendEmail();
    },
    sendEmail() {
      this.$loadScript("https://smtpjs.com/v3/smtp.js").then(() => {
        window.Email.send({
          SecureToken: "6c71e80d-9c63-4bce-9c58-52cb8b662cfc",
          To: "enquiry@kodaiguide.in",
          From: "service@kodaiguide.in",
          Subject: "Booking Cottage",
          Body: `Hi Team<br/>
          Name: ${this.form.name},<br/>
          Mobile: ${this.form.phone},<br/>
          Email: ${this.form.email},<br/>
          Comments: ${this.form.comments},<br/>
          Thanks<br/>
          Team Kodai Guide`,
        }).then(
          () => {
            this.form = {};
            this.$emit(
              "close",
              "Your message has been submitted!. We will get back you asap!",
              "green"
            );
            setTimeout(() => {
              location.reload();
            }, 500);
          },
          (error) => {
            console.log(error.text, "failed");
          }
        );
      });
    },
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: rgb(255, 255, 255);
}
.custom-placeholer-color input::placeholder {
  color: red !important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: red !important;
}
.desc {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
