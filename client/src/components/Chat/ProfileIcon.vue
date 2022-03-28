<template>
  <v-badge
    :value="hover"
    color="deep-purple accent-4"
    :content="username"
    left
    transition="slide-x-transition"
  >
    <v-hover v-model="hover">
      <v-avatar :color="color" size="36">
        <span class="white--text">{{ username[0] }}</span>
      </v-avatar>
    </v-hover>
  </v-badge>
</template>

<script>
export default {
  props: ["username", "color", "sender"],
  data: () => ({
    hover: false,
  }),
};
</script>