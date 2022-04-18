<template>
  <a>
    <a v-if="users.length > 3">
      <v-avatar color="warning lighten-2" size="67"></v-avatar>
    </a>
    <a v-else>
      <v-avatar
        v-for="(user, index) in users"
        :key="index"
        :color="'#' + user.color"
        size="67"
      >
        <span class="white--text">{{ user.username }}</span>
      </v-avatar>
    </a>
  </a>
</template>

<script>
export default {
  props: ["users"],
};
</script>