<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="group.color" dark v-bind="attrs" v-on="on">
        {{ label }}
      </v-btn>
    </template>
    <GroupCreate :label="label" :mode="page"></GroupCreate>
  </v-dialog>
</template>

<script>
import axios from "axios";
import GroupCreate from "./GroupCreate.vue";
export default {
  components: { GroupCreate },
  props: ["label"],
  data() {
    return {
      dialog: false,
      autoUpdate: true,
      isUpdating: false,
      snack: false,
      snackColor: "",
      snackText: "",
      valid: false,
      name: "",
      users: [],
      title: "",
      group: {
        name: "My group",
        description: "Description of the group",
        users: [],
        usersAdmin: [],
        color: "#448AD1",
        created_by: "Created by : ",
      },
      nameRules: [
        (v) => !!v || "This field is required",
        (v) => v.length >= 8 || "This field is required",
      ],
    };
  },

  watch: {
    isUpdating(val) {
      if (this.$refs.form.validate() && val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      } else {
        this.isUpdating = false;
      }

      //TODO Update group
    },
  },
  created() {
    if (this.$store.state.user._id) {
      axios
        .get(
          this.$store.state.apiURL + "/user/all/" + this.$store.state.user._id,
          {
            headers: { token: localStorage.getItem("token") },
          }
        )
        .then((res) => {
          this.users = res.data;
        });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    remove(item) {
      const index = this.group.users.indexOf(item);
      if (index >= 0) this.group.users.splice(index, 1);
    },
    async createGroup() {
      if (this.$refs.form.validate()) {
        this.group.usersAdmin.push(this.user);
        this.group.created_by =
          "Created by" + this.user.email + " at " + Date.now();
        console.log(this.group.users);
        try {
          await axios.post(this.$store.state.apiURL + "/group", {
            headers: { token: localStorage.getItem("token") },
            group: this.group,
            user: this.user,
          });
          this.snack = true;
          this.snackColor = "succes";
          this.snackText = "Succesfully created Group";
        } catch (err) {
          console.log(err);
          console.log(err.response);
          this.snack = true;
          this.snackColor = "error";
          this.snackText = "Error has ocured";
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
