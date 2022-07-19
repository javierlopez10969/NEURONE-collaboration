<template>
  <a>
    <v-card :style="{'background-color' : user.color,'color' : user.textColor}">
      <h1  >Your profile</h1>
      <v-form style ref="form" lazy-validation @submit.prevent="updateUser">
        <v-container fluid>
          <m-text-field
            v-model="user.email"
            required
            :placeholder="'Edit your email'"
            disabled
            id="email"
          >
            <m-floating-label for="email">Email</m-floating-label>
          </m-text-field>
          <!--Create
          <m-button raised type="button" class="rounded-pill">
            Change password</m-button
          >
          -->
          <v-row>
            <v-col>
              <m-text-field
                v-model="user.names"
                required
                :placeholder="'Edit your names'"
                id="names"
              >
                <m-floating-label for="names">Names</m-floating-label>
              </m-text-field>
          <m-text-field
            v-model="user.last_names"
            :placeholder="'Edit your Last Names'"
            id="last_names"
          >
            <m-floating-label for="last_names">Last names</m-floating-label>
          </m-text-field>
          
          <m-text-field
            v-model="user.username"
            :placeholder="'Edit your username'"
            id="username"
          >
            <m-floating-label for="username">Username</m-floating-label>
          </m-text-field>
              
            </v-col>
            <v-row>
              <v-col>
                <h1>Avatar color</h1>
                <form>
                  <label for="favcolor"> Click Here!!</label>
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    v-model="user.color"
                  />
                </form>
              </v-col>
              <v-col>
                <h1>Text color</h1>
                <form>
                  <label for="favcolor"> Click Here!!</label>
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    v-model="user.textColor"
                  />
                </form>
              </v-col>
            </v-row>
          </v-row>
          <v-row>
            <v-btn
              type="submit"
              class="mb-10 mt-3 text-center"
              rounded
              :style="{ 'background-color': 'green' }"
              block
            >
              Save changes
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}
        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </a>
</template>
<script>
import axios from "axios";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    apiURL() {
      return this.$store.state.apiURL;
    },
  },
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    valid: false,
    color: {},
  }),
  created() {
    this.user.color = this.user.color.toLowerCase();
    this.user.textColor = this.user.textColor.toLowerCase();
  },
  methods: {
    updateUser() {
      axios
        .post(this.$store.state.apiURL + "/user/update-user/" + this.user._id, {
          user: this.user,
          headers: { token: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data);
          this.snack = true;
          this.snackText = "User Profile successfully updated!";
          this.snackColor = "green";
        });
    },
  },
};
</script>
