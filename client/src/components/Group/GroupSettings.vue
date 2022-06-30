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

    <v-form
      ref="form"
      class="form-signin"
      lazy-validation
      @submit.prevent="updateData"
    >
      <v-container>
        <v-row
          ><v-col cols="12" md="6">
            <v-text-field
              v-model="group.name"
              :disabled="isUpdating"
              :rules="nameRules"
              filled
              required
              color="blue-grey lighten-2"
              label="Name of the group"
            ></v-text-field>
            <v-text-field
              v-model="group.description"
              :disabled="isUpdating"
              :rules="nameRules"
              filled
              required
              color="blue-grey lighten-2"
              label="Description"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <h1>Choose a Color {{ group.color }}</h1>
            <v-color-picker
              dot-size="25"
              hide-inputs
              hide-mode-switch
              :disabled="isUpdating"
              mode="hexa"
              swatches-max-height="200"
              v-model="group.color"
            ></v-color-picker>
          </v-col>
          <v-col v-for="(module, index) in group.modules" v-bind:key="index">
            <m-checkbox
              v-if="module.title != 'Settings'"
              v-model="module.active"
              :label="`${module.title}`"
            />
            <label for="checkbox2"> {{ module.title }}</label>
          </v-col>
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
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
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
          this.$store.commit("setSnack", {
            color: "green",
            text: "Group updated successfully",
          });
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
  data: () => ({
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
      textColor: "",
      created_by: "",
    },
    nameRules: [
      (v) => !!v || "This field is required",
      (v) => v.length >= 8 || "This field is required",
    ],
  }),
  created() {
    let apiURL = "";
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
  },
};
</script>