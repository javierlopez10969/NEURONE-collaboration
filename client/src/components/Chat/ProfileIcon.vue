<template>
  <v-avatar :color="username.color" size="40">
    <span style="color: white">{{ username.email[0] }}</span>
  </v-avatar>
</template>

<script>
export default {
  props: ["username"],
  data: () => ({
    hover: false,
  }),
};
</script>
