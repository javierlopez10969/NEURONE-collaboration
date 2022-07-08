<template>
  <div>
    Users : {{ activity.users }}
    <p></p>
    Messages : {{ activity.messages }}
    <p></p>
    Messages : {{ activity.bookmarks }}
    <p></p>
  </div>
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
