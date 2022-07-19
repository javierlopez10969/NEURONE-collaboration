<template>
  <v-avatar :color="user.color" size="40">
    <span :style="{color: user.textColor}">{{ user.email[0] }}</span>
  </v-avatar>
</template>

<script>
export default {
  props: ["user"],
  data: () => ({
    hover: false,
  }),
};
</script>
