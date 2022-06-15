<template>
  <v-card height="400" width="350" outlined>
    <!--Multiples views-->
    <!--Main-->
    <!--If user is not logged-->
    <div v-if="user == null">
      <Form></Form>
    </div>
    <div v-else>
      Welcome
      {{ user.email }}

      <CustomTabs></CustomTabs>
    </div>
  </v-card>
</template>

<script>
import CustomTabs from "@/components/UI/CustomTabs";
import Form from "@/components/UI/FormUI";
export default {
  components: { CustomTabs, Form },
  data() {
    return { selectedView: 0 };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="stylus">
@import '@/styles/widget.styl';
@import '@/styles/Icon.css';
</style>
