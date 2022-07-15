<template>
  <div>
    <v-form
      lazy-validation
      ref="form"
      class="form-signin"
      @submit.prevent="userLogin"
    >
      <m-text-field v-model="user.email" type="email" id="textfield">
        <m-floating-label for="textfield">Email</m-floating-label>
        <m-line-ripple slot="bottomLine" />
      </m-text-field>
      <p></p>
      <m-text-field v-model="user.password" type="password" id="textfield">
        <m-floating-label for="textfield">Password</m-floating-label>
        <m-line-ripple slot="bottomLine" />
      </m-text-field>
      <p></p>
      <div class="text-center">
        <m-button
          raised
          style="color: white; background-color: blue"
          type="submit"
          >Login</m-button
        >
      </div>
    </v-form>
  </div>
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
          this.$store.commit("setToken", res.data.token);
          this.$store.commit("updateUser", res.data.user);
          this.$store.commit("setSnack", {
            color: "green",
            text: "Successfully Login",
          });
          //Get the groups
          axios
            .get(
              this.$store.state.apiURL +
                "/group/user/" +
                this.$store.state.user._id,
              {
                headers: { token: localStorage.getItem("token") },
              }
            )
            .then((res) => {
              this.$store.commit("updateGroups", res.data);
              this.$store.commit("socketConnection");
            });
        } catch (err) {
          console.log(err);
          console.log(err.response);
          this.$store.commit("setSnack", {
            color: "red",
            text: "Error",
          });
        }
      } else {
        this.snack = true;
        this.$store.commit("setSnack", {
          color: "red",
          text: "Error",
        });
      }
    },
  },
};
</script>
