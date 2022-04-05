<template>
  <v-container>
    <v-avatar size="40">
      <span class="white--text">{{ user.email[0] }}</span>
    </v-avatar>
    <h4>{{ user.email }}</h4>
    <v-btn href="/editprofile"> edit Profile </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    hover: false,
  }),
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>