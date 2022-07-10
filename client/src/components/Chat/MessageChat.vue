<!-- All messages-->
<template>
  <m-card>
    <v-container>
      <v-col>
        <ProfileIcon
          :sender="false"
          :user="item.user"
          :color="item.user.color"
        ></ProfileIcon>

        {{ item.user.name }} {{ item.user.lastName }}
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
