<template>
  <v-list>
    <IconProfile></IconProfile>
    <v-list-item link href="#">
      <v-list-item-icon>
        <v-icon color="white" small>mdi-lightbulb</v-icon>
      </v-list-item-icon>
      <v-list-item-title class="title">Blue</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
import IconProfile from "./IconProfile";
export default {
  components: { IconProfile },
};
</script>