<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card style="border-radius: 8px" class="pa-4">
        <v-form ref="form" v-model="formValid" class="mx-auto">
          <v-row class="white--text mx-6 text-center">
            <v-col cols="12" class="mt-0 mb-2 pb-0">
              <h2>Book Your Dates</h2>
            </v-col>
            <v-col cols="12" class="my-0 py-0"
              ><p>Drop us your message and we'll get back to you asap</p></v-col
            >
            <v-col cols="12" class="white--text"
              ><v-text-field
                v-model="form.name"
                label="Your Name"
                outlined
                hide-details
                :dense="isMobile"
                color="accent"
                :rules="[() => !!form.name || 'Name is required']"
              ></v-text-field
            ></v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-dialog
                    ref="dialogStartDate"
                    v-model="startDateDialog"
                    :return-value.sync="form.startDate"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.startDate"
                        label="Start Date"
                        append-icon="mdi-calendar"
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        :dense="isMobile"
                        color="accent"
                        :rules="[
                          () => !!form.startDate || 'Start Date is required',
                        ]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.startDate"
                      color="primary"
                      :min="new Date().toISOString()"
                      ><v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="startDateDialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialogStartDate.save(form.startDate)"
                      >
                        OK
                      </v-btn></v-date-picker
                    >
                  </v-dialog>
                </v-col>
                <v-col cols="6">
                  <v-dialog
                    ref="dialogEndDate"
                    v-model="endDateDialog"
                    :return-value.sync="form.endDate"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :disabled="!form.startDate"
                        v-model="form.endDate"
                        label="End Date"
                        append-icon="mdi-calendar"
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                        hide-details
                        :dense="isMobile"
                        color="accent"
                        :rules="[
                          () => !!form.endDate || 'End Date is required',
                        ]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.endDate"
                      color="primary"
                      :min="getEndDate()"
                      ><v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="endDateDialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialogEndDate.save(form.endDate)"
                      >
                        OK
                      </v-btn></v-date-picker
                    >
                  </v-dialog>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="form.adults"
                    label="No. of Adults"
                    type="number"
                    outlined
                    hide-details
                    :dense="isMobile"
                    color="accent"
                    :rules="[() => !!form.adults || 'Adults is required']"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="form.children"
                    label="No. of Children"
                    type="number"
                    outlined
                    hide-details
                    :dense="isMobile"
                    color="accent"
                    :rules="[() => !!form.children || 'Children is required']"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.phone"
                label="Phone"
                outlined
                type="number"
                hide-details
                :dense="isMobile"
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
              <v-text-field
                v-model="form.email"
                label="Email"
                outlined
                hide-details
                :dense="isMobile"
                color="accent"
                :rules="[
                  () => !!form.email || 'Email is required',
                  rules.emailrules,
                ]"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.comments"
                label="Your comments"
                outlined
                hide-details
                :dense="isMobile"
                color="accent"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              style="border-radius: 8px"
              @click.prevent="save"
              :disabled="!formValid"
              type="submit"
              value="Send"
              >Submit</v-btn
            >
            <v-btn style="border-radius: 8px" @click="$emit('close')"
              >Cancel</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    cottage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      form: {},
      formValid: false,
      startDateMenu: false,
      endDateMenu: false,
      startDateDialog: false,
      endDateDialog: false,
      dialog: true,
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
    isMobile() {
      if (this.$vuetify.breakpoint.xs) return true;
      return false;
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
          Date: ${this.form.startDate} to ${this.form.endDate},<br/>
          No. of Adults: ${this.form.adults},<br/>
          No. of Children: ${this.form.children},<br/>
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

<style></style>
