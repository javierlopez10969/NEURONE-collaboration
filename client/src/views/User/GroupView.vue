<template>
  <v-container>
    <GroupDetail :group="group"></GroupDetail>
  </v-container>
</template>

<script>
import axios from "axios";
import GroupDetail from "@/components/Group/GroupDetail";
export default {
  components: {
    GroupDetail,
  },
  data: () => ({
    group: {},
  }),
  created() {
    let apiURL = `http://localhost:3000/api/group/${this.$route.params.id}`;
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