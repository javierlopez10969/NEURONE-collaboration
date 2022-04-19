<template>
  <v-card width="500px" class="mx-auto mt-5 rounded-lg" elevation="12">
    <v-container class="pa-7">
      <v-card-title class="justify-center">
        <p class="text-h4 text--primary">{{ title }}</p>
      </v-card-title>
      <v-form
        v-if="title == 'Register'"
        ref="form"
        class="form-signin"
        lazy-validation
        @submit.prevent="userLogin"
      >
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          type="email"
          :prepend-icon="`mdi-email`"
          label="Email"
          required
          :placeholder="'name.lastname@email.web'"
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          type="password"
          label="Password"
          required
          :prepend-icon="'mdi-key'"
          :rules="passwordRules"
        ></v-text-field>
        <v-btn
          type="submit"
          class="mb-10 mt-3 text-center"
          rounded
          color="secondary"
          light
          block
        >
          Login
        </v-btn>
      </v-form>
      <v-form
        v-if="title == 'Login'"
        ref="form"
        class="form-signin"
        lazy-validation
        @submit.prevent="userLogin"
      >
        <v-text-field
          label="Email*"
          v-model="user.email"
          :rules="emailRules"
          :prepend-icon="`mdi-email`"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          type="password"
          label="Password"
          required
          :prepend-icon="'mdi-key'"
          :rules="passwordRules"
        ></v-text-field>
        <v-btn
          type="submit"
          class="mb-10 mt-3 text-center"
          rounded
          color="secondary"
          light
          block
        >
          Login
        </v-btn>
      </v-form>
    </v-container>
    <v-snackbar v-model="snack" top right :timeout="3000" :color="snackColor">
      {{ snackText }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  props: ["title"],
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    valid: false,
    user: {
      email: "",
      password: "",
    },
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Password is required",
    ],
    emailRules: [
      (v) => !!v || "The email is required",
      (v) => /.+@.+\..+/.test(v) || "Invalid email",
    ],
  }),
  methods: {
    async userLogin() {
      if (this.$refs.form.validate()) {
        try {
          var res = await axios.post(
            "http://localhost:3000/api/user/login",
            this.user
          );
          localStorage.setItem("token", res.data.token);
          this.$store.commit("updateUser", res.data.user);
          this.snack = true;
          this.snackColor = "succes";
          this.snackText = "Succesfully Login";
          this.$router.go("/home");
        } catch (err) {
          console.log(err);
          console.log(err.response);
          this.snack = true;
          this.snackColor = "error";
          this.snackText = "User or password wrong";
        }
      } else {
        this.snack = true;
        this.snackColor = "error";
        this.snackText = "Put the required data";
      }
    },
  },
};
</script>