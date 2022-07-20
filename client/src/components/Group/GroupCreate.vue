<template>
  <v-card :color="group.color" dark>
    <v-row>
      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center">
          <h1 class="text-h5">
            {{ label }}
          </h1>
          <h3 class="text-h5">
            {{ name }}
          </h3>
          <span class="grey--text text--lighten-1">{{ title }}</span>
        </v-col>
      </v-row>
    </v-row>
    <v-form ref="form" class="form-signin" @submit.prevent="createGroup">
      <v-container>
        <v-row
          ><v-col cols="12" md="6">
            <m-text-field
              v-model="group.name"
              :rules="nameRules"
              required
              placeholder="My Group"
              id="nameGroup"
            >
              <m-floating-label for="nameGroup"
                >Name of the Group</m-floating-label
              >
            </m-text-field>
            <m-text-field
              v-model="group.description"
              :rules="nameRules"
              required
              placeholder="My Group"
              id="nameGroup"
            >
              <m-floating-label for="nameGroup">Description</m-floating-label>
            </m-text-field>
          </v-col>
          <v-col >
            <h1>Choose a Color {{ group.color }}</h1>
                <form>
                  <label for="favcolor"> Click Here!!</label>
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    v-model="group.color"
                  />
                </form>
          </v-col>

        <v-col cols="12">
          <AutoComplete :items="users" :addedUsers="group.users" 
          v-on:removeU="removeU" v-on:addA="addA"
          v-on:removeA="removeA" v-on:addU="addU"
           ></AutoComplete>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-grey darken-3" depressed type="submit">
          <v-icon left> mdi-update </v-icon>
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
import axios from "axios";
import AutoComplete from "@/components/UI/SearchAutoComplete.vue";
export default {
  components : {
    AutoComplete
  },
  props: { mode: String, label: String },
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
        name: "",
        description: "",
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
  created() {
    if (this.$store.state.user._id) {
      axios
        .get(
          //Get all user except the current user
          this.$store.state.apiURL + "/user/all/" + this.$store.state.user._id,)
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
    addU(item){
      this.users.push(item);
    },
    removeU(item) {
      const index = this.users.indexOf(item);
      if (index >= 0) this.users.splice(index, 1);
    },
    addA(item){
      this.group.users.push(item);
    },
    removeA(item) {
      const index = this.group.users.indexOf(item);
      if (index >= 0) this.group.users.splice(index, 1);
    },
    async createGroup() {
      console.log("Group name : " + this.group.name);
      if (this.$refs.form.validate() && this.group.name.length >= 4) {
        this.group.usersAdmin.push(this.user);
        this.group.created_by =
          "Created by" + this.user.email + " at " + Date.now();
        console.log(this.group.users);
        try {
          await axios.post(this.$store.state.apiURL + "/group", {
            headers: {
              token: localStorage.getItem("token"),
              auth_token: localStorage.getItem("auth_token"),
            },
            group: this.group,
            user: this.user,
          });
          this.$store.commit("setSnack", {
            color: "green",
            text: "Group created successfully, refresh to see it",
          });
        location.reload();
        } catch (err) {
          console.log(err);
          console.log(err.response);
          this.snack = true;
          this.$store.commit("setSnack", {
            color: "red",
            text: "Error creating group",
          });
        }
      } else {
        if(this.group.name.length < 4){
        this.$store.commit("setSnack", {
          color: "red",
          text: "The name must be greater than 4 characters",
        });
        }else{
        this.$store.commit("setSnack", {
          color: "red",
          text: "Put the required fields",
        });
        }
      }
    },
  },
};
</script>
