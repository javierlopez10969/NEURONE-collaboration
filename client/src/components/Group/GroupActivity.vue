<template>
  <v-container>
    <v-row> Users : {{ activity.users }} </v-row>
    <v-row> Messages : {{ activity.messages }}</v-row>
    <v-row> Bookmarks : {{ activity.bookmarks }}</v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activity: "",
    };
  },
  created() {
    axios
      .get(this.$store.state.apiURL + "/activity/" + this.group._id)
      .then((response) => {
        this.activity = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    group() {
      return this.$store.state.group;
    },
  },
};
</script>
