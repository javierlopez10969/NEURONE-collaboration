<template>
  <v-container>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <span class="white--text">{{ user.email[0] }}</span>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user.name }} {{ user.lastName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
    letter() {
      return this.user[0];
    },
  },
};
</script>