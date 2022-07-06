<template>
  <div>
    {{ activity }}
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
      .get(this.$store.state.apiURL + "/activity" + this.group._id)
      .then((response) => {
        this.group = response.data.data;
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
