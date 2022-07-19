<template>
  <v-card :color="group.color">
    <v-row>
      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center">
          <h1 class="text-h5">
            {{ group.name }}
          </h1>
          <h3 class="text-h5">
            {{ name }}
          </h3>
          <span class="grey--text text--lighten-1">{{ title }}</span>
        </v-col>
      </v-row>
    </v-row>

    <v-form ref="form" lazy-validation @submit.prevent="updateData">
      <v-container>
        <m-text-field
          v-model="group.name"
          :rules="nameRules"
          required
          placeholder="Edit the name of your group"
          full-width
          id="nameGroup"
        >
          <m-floating-label for="nameGroup">Name of the Group</m-floating-label>
        </m-text-field>
        <m-text-field
          v-model="group.description"
          :rules="nameRules"
          required
          full-width
          placeholder="Edit the description of your group"
          id="description"
        >
          <m-floating-label for="description"> Description</m-floating-label>
        </m-text-field>
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

        <v-row>
          <v-col v-for="(module, index) in group.modules" v-bind:key="index">
            <div v-if="module.title != 'Settings'">
              <m-checkbox v-model="module.active" :label="`${module.title}`" />
              <label for="checkbox2"> {{ module.title }}</label>
            </div>
          </v-col>
        </v-row>

        <v-col cols="12">
          <AutoComplete :items="users" :addedUsers="group.users" 
          v-on:removeU="removeU" v-on:addA="addA"
          v-on:removeA="removeA" v-on:addU="addU"
          ></AutoComplete>
        </v-col>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <m-button
          type="button"
          raised
          @click="isDialogOpen = true"
          style="background-color: red; color: white"
          >Delete</m-button
        >
        <m-dialog v-model="isDialogOpen" @closed="onDialogClosed">
          <m-typo-headline :level="5" slot="header"
            >Delete the group</m-typo-headline
          >
          <m-typo-body :level="1" slot="body"
            >Are you sure to delete the group?</m-typo-body
          >
          <m-button
            type="button"
            class="mdc-dialog__button"
            data-mdc-dialog-action="No"
            slot="cancelButton"
          >
            Cancel
          </m-button>
          <m-button
            class="mdc-dialog__button"
            type="button"
            data-mdc-dialog-action="Yes"
            slot="acceptButton"
          >
            OK
          </m-button>
        </m-dialog>
        <v-btn
          color="blue-grey darken-3"
          depressed
          type="submit"
        >
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
  props: ["groupR", "mode"],
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
    async updateData() {
      if (this.$refs.form.validate()) {
        try {
          await axios.put(
            this.$store.state.apiURL + "/group/" + this.group._id,
            {
              headers: { token: localStorage.getItem("token") },
              group: this.group,
            }
          );
          this.$store.commit("updateGroup", this.group);
          this.$store.commit("setSnack", {
            color: "green",
            text: "Group updated successfully",
          });
        } catch (err) {
          console.log(err);
          console.log(err.response);
          this.$store.commit("setSnack", {
            color: "red",
            text: "Error updating group",
          });
        }
      } else {
        this.$store.commit("setSnack", {
          color: "red",
          text: "Please fill all the required fields",
        });
      }
    },
    async onDialogClosed(value) {
      console.log(value);
      if (value.action == "Yes") {
        try {
          await axios.delete(
            this.$store.state.apiURL + "/group/" + this.group._id,
            {
              headers: { token: localStorage.getItem("token") },
              group: this.group,
            }
          );
          this.$store.commit("setSnack", {
            color: "green",
            text: "Group deleted successfully",
          });
          this.$router.go();
        } catch (err) {
          console.log(err);
          console.log(err.response);
          this.$store.commit("setSnack", {
            color: "red",
            text: "Error updating group",
          });
        }
      }
    },
  },
  data: () => ({
    dialog: false,
    autoUpdate: true,
    isUpdating: false,
    delete: false,
    valid: false,
    isDialogOpen: false,
    name: "",
    users: [],
    title: "",
    group: {
      name: "",
      description: "",
      users: [],
      usersAdmin: [],
      color: "#448AD1",
      textColor: "",
      created_by: "",
    },
    nameRules: [
      (v) => !!v || "This field is required",
      (v) => v.length >= 8 || "This field is required",
    ],
  }),
  computed: {
    colors: {
      // getter
      get() {
        return { hex: this.group.color };
      },
      // setter
      set(newValue) {
        this.group.color = newValue.hex;
        newValue;
      },
    },
  },
  created() {
    let apiURL = "";
    this.group.color = this.group.color.toLowerCase();
    //If mode widget
    if (this.mode == "widget") {
      apiURL = `http://localhost:3000/api/group/${this.groupR._id}`;
    }
    //If mode window
    else {
      apiURL = `http://localhost:3000/api/group/${this.$route.params.id}`;
    }
    axios
      .get(apiURL)
      .then((res) => {
        this.group = res.data.group;
        var users = this.group.users;
        let actualUsers = users.map(user => ({ 
          _id: user._id,
        }));
        console.log(actualUsers)
        axios
          .post(
            this.$store.state.apiURL + "/user/group/",{
              actualUsers : actualUsers
            }
          )
          .then((res) => {
            this.users = res.data;
          });
      });


  },
};
</script>
