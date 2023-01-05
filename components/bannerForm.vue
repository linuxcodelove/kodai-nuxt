<template>
  <div>
    <div v-if="!$vuetify.breakpoint.xs && !this.userData">
      <v-form ref="form" v-model="formValid" class="mx-1 mx-sm-16">
        <v-row class="mx-0 mx-sm-16 my-0 pa-0 white">
          <v-col cols="2" class="pa-0"
            ><v-text-field
              v-model="form.name"
              label="Name"
              hide-details
              solo
              color="accent"
              light
              flat
              :rules="[() => !!form.name || 'Name is required']"
            ></v-text-field>
          </v-col>

          <v-col cols="2" class="pa-0">
            <v-text-field
              v-model="form.startDate"
              label="Start Date"
              readonly
              hide-details
              color="accent"
              light
              flat
              solo
              :rules="[() => !!form.startDate || 'Start Date is required']"
              @click="(startDateDialog = true), $emit('nocycle')"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="pa-0">
            <v-text-field
              :disabled="!form.startDate"
              v-model="form.endDate"
              label="End Date"
              readonly
              hide-details
              color="accent"
              light
              flat
              solo
              :rules="[() => !!form.endDate || 'End Date is required']"
              @click="(endDateDialog = true), $emit('nocycle')"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="pa-0">
            <v-text-field
              v-model="form.adults"
              label="Adults"
              type="number"
              light
              flat
              solo
              hide-details
              color="accent"
              :rules="[() => !!form.adults || 'Adults is required']"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2" class="pa-0">
            <v-text-field
              v-model="form.phone"
              label="Phone"
              light
              flat
              solo
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
          <v-col cols="2" class="pa-0">
            <v-text-field
              v-model="form.email"
              label="Email"
              light
              flat
              solo
              hide-details
              color="accent"
              :rules="[
                () => !!form.email || 'Email is required',
                rules.emailrules,
              ]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex justify-center my-2 my-sm-4">
          <v-btn
            class="py-2 px-2 py-sm-4 px-sm-5 primary greycol--text text--darken-2 font-weight-bold"
            small
            @click="save"
            >Book Now</v-btn
          >
        </div>
      </v-form>
    </div>
    <booking-dialog v-if="dialog" @close="saveData"></booking-dialog>
    <v-dialog
      ref="dialogStartDate"
      v-model="startDateDialog"
      persistent
      width="290px"
    >
      <v-date-picker
        v-model="form.startDate"
        color="primary"
        :return-value.sync="form.startDate"
        :min="new Date().toISOString()"
        ><v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="(startDateDialog = false), $emit('cycle')"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.dialogStartDate.save(form.endDate), $emit('cycle')"
        >
          OK
        </v-btn></v-date-picker
      >
    </v-dialog>
    <v-dialog
      ref="dialogEndDate"
      v-model="endDateDialog"
      persistent
      width="290px"
    >
      <v-date-picker
        :min="getEndDate()"
        v-model="form.endDate"
        color="primary"
        :return-value.sync="form.endDate"
        ><v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="(endDateDialog = false), $emit('cycle')"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.dialogEndDate.save(form.endDate), $emit('cycle')"
        >
          OK
        </v-btn></v-date-picker
      >
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValid: false,
      form: {},
      startDateMenu: false,
      endDateMenu: false,
      startDateDialog: false,
      endDateDialog: false,
      dialog: false,
      step: 1,
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
    userData() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    getEndDate() {
      if (this.form.startDate > this.form.endDate) {
        this.form.endDate = null;
        return;
      }
      return this.form.startDate;
    },
    save() {
      if (!this.formValid) {
        this.$emit("close");
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
          Date: ${this.form.startDate} to ${this.form.endDate},<br/>
          No. of Adults: ${this.form.adults},<br/>
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
    saveData(msg) {
      this.dialog = false;
      this.$emit("snackbar", msg, "green");
    },
  },
};
</script>

<style scoped>
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
