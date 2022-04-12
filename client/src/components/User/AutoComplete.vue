<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="group.color" dark v-bind="attrs" v-on="on">
        {{ label }}
      </v-btn>
    </template>
    <v-card :color="group.color" dark :loading="isUpdating">
      <template v-slot:progress>
        <v-progress-linear
          color="green lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
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
      <v-form
        ref="form"
        class="form-signin"
        lazy-validation
        @submit.prevent="createGroup"
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

            <v-col cols="12">
              <v-autocomplete
                v-model="group.users"
                :disabled="isUpdating"
                :items="users"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select users to add to the group"
                item-text="name"
                item-value="name"
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
                    <v-avatar left :color="user.color">
                      <span class="white--text text-h5">{{
                        data.item.name[0]
                      }}</span>
                    </v-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content
                      v-text="data.item"
                    ></v-list-item-content>
                  </template>
                  <template v-else>
                    <v-list-item-avatar>
                      <img :src="data.item.avatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="data.item.name"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="data.item.group"
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
            @click="isUpdating = true"
          >
            <v-icon left> mdi-update </v-icon>
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor" right top>
      {{ snackText }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
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
    if (localStorage.getItem("token")) {
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
      const index = this.group.users.indexOf(item.name);
      if (index >= 0) this.group.users.splice(index, 1);
    },
    async createGroup() {
      if (this.$refs.form.validate()) {
        this.group.usersAdmin.push(this.user);
        this.group.created_by =
          "Created by" + this.user.email + " at " + Date.now();
        console.log(this.group.users[0]._id);
        console.log(this.user._id);
        this.group.users.push(this.user);
        try {
          await axios.post(this.$store.state.apiURL + "/group", {
            headers: { token: localStorage.getItem("token") },
            group: this.group,
          });
          this.snack = true;
          this.snackColor = "succes";
          this.snackText = "Succesfully created Group";
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