<template>
  <v-container>
    <v-col v-if="users.length > 3">
      <v-avatar color="warning lighten-2" size="67"></v-avatar>
    </v-col>
    <v-col v-else>
      <v-avatar
        v-for="(user, index) in users"
        :key="index"
        :color="'#' + user.color"
        size="67"
      >
        <span class="white--text">{{ user.username }}</span>
      </v-avatar>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: ["users"],
};
</script>