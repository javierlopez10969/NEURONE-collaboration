<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on"> New Bookmark </v-btn>
    </template>
    <v-card>
      <v-row>
        <v-row class="pa-4" align="center" justify="center">
          <v-col class="text-center">
            <h1 class="text-h5">Create a new Bookmark</h1>
          </v-col>
        </v-row>
      </v-row>
      <v-form
        ref="form"
        class="form-signin"
        lazy-validation
        @submit.prevent="addBookmark"
      >
        <v-container> </v-container>
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
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    addBookmark() {},
  },
};
</script>