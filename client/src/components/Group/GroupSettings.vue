<template>
  <v-card :color="group.color" dark>
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
          placeholder="My Group"
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
          placeholder="My Group"
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
          <v-autocomplete
            v-model="group.users"
            :disabled="isUpdating"
            :items="users"
            filled
            chips
            color="blue-grey lighten-2"
            label="Select users to add to the group"
            multiple
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
              >
                <v-avatar left :color="data.item.color">
                  <span class="white--text text-h5">{{
                    data.item.name[0]
                  }}</span>
                </v-avatar>
                {{ data.item.email }}
              </v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-avatar left :color="data.item.color">
                  <span class="white--text text-h5">{{
                    data.item.name[0]
                  }}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-html="data.item.email"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="data.item.name + ' ' + data.item.lastName"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
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
          :loading="isUpdating"
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
export default {
  props: ["groupR", "mode"],
  methods: {
    remove(item) {
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
      .get(apiURL, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.group = res.data.group;
      });
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
};
</script>
