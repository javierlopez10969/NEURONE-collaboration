<template>
  <div>
    <v-form
      lazy-validation
      ref="form"
      class="form-signin"
      @submit.prevent="userLogin"
    >
      <label class="form-label">Email</label>
      <input
        v-model="user.email"
        type="email"
        class="form-control"
        aria-describedby="passwordHelpBlock"
      />
      <label class="form-label">Password</label>
      <input
        v-model="user.password"
        type="password"
        id="inputPassword5"
        class="form-control"
        aria-describedby="passwordHelpBlock"
      />

      <button type="submit" class="btn btn-primary">Login</button>
      <v-snackbar v-model="snack" top right :timeout="3000" :color="snackColor">
        {{ snackText }}
        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-form>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

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
          this.$store.commit("setToken", res.data.token);
          this.$store.commit("updateUser", res.data.user);
          this.snack = true;
          this.snackColor = "succes";
          this.snackText = "Succesfully Login";
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