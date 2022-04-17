<template>
  <v-container>
    <v-list>
      <v-list-item class="px-2">
        <v-avatar :color="user.color">
          <span class="white--text text-h5">{{ letter }}</span>
        </v-avatar>
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    hover: false,
  }),
  props: ["user"],
  computed: {
    letter() {
      return "You";
    },
  },
};
</script>