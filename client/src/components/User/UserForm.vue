<template>
  <a>
    <v-card>
      <h1 class="text-center whit--text">Your profile</h1>
      <v-form ref="form" lazy-validation @submit.prevent="updateUser">
        <v-container fluid>
          <v-text-field
            :prepend-icon="`mdi-email`"
            label="Email"
            disabled
            v-model="user.email"
            :placeholder="'name.lastname@email.web'"
          ></v-text-field>

          <v-btn href="/change-password"> Change password</v-btn>

          <v-row>
            <v-col>
              <v-text-field
                label="Name"
                required
                v-model="user.name"
                :prepend-icon="'mdi-user'"
              ></v-text-field>
              <v-text-field
                label="Last Name"
                required
                v-model="user.lastName"
                :prepend-icon="'mdi-user'"
              ></v-text-field>
              <v-text-field
                label="Phone"
                required
                v-model="user.phone"
                :prepend-icon="'mdi-user'"
              ></v-text-field>
            </v-col>
            <v-col>
              <h1>Avatar color</h1>
              <v-color-picker
                dot-size="25"
                hide-inputs
                hide-mode-switch
                mode="hexa"
                swatches-max-height="200"
                v-model="user.color"
              ></v-color-picker>
            </v-col>
          </v-row>

          <v-btn
            type="submit"
            class="mb-10 mt-3 text-center"
            rounded
            color="green"
            dark
            block
          >
            Save changes
          </v-btn>
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
    snack: true,
  }),
  methods: {
    updateUser() {
      this.$axios
        .get(this.$store.state.apiURL + "/update-user/" + this.user._id, {
          user: this.user,
          headers: { token: localStorage.getItem("token") },
        })
        .then((res) => {
          this.user = res.data.user;
          this.$store.commit("updateUser", res.data.user);
        });
    },
  },
};
</script>