<!-- All messages-->
<template>
  <m-card>
    <v-container>
      <v-col>
        <ProfileIcon
          :sender="false"
          :username="item.username"
          :color="item.username.color"
        ></ProfileIcon>

        {{ item.username.name }} {{ item.username.lastName }}
        <v-spacer></v-spacer>
        <span>
          {{ item.message }}
        </span>
      </v-col>
    </v-container>
  </m-card>
</template>
<script>
import ProfileIcon from "./ProfileIcon.vue";
export default {
  components: {
    ProfileIcon,
  },
  props: ["item", "color"],
};
</script>
