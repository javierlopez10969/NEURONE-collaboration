<template>
  <v-badge
    bordered
    bottom
    color="deep-purple accent-4"
    dot
    offset-x="10"
    offset-y="10"
  >
    <v-avatar :color="color" size="40">
      <span class="white--text">{{ username[0] }}</span>
    </v-avatar>
  </v-badge>
</template>

<script>
export default {
  props: ["username", "color", "sender", "place", "badge-color"],
  data: () => ({
    hover: false,
  }),
};
</script>