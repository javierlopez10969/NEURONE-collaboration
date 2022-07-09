<!-- All messages-->
<template>
  <m-card>
    <!-- Case is sender is the logged user -->
    <v-container>
      <v-row no-gutters>
        <v-col>
          <ProfileIcon
            :sender="false"
            :username="bookmark.username"
            :color="bookmark.username.color"
          ></ProfileIcon>

          {{ bookmark.username.name }} {{ bookmark.username.lastName }}
          <v-spacer></v-spacer>
          <span> Bookmark : {{ bookmark.URL }} </span>
          <span> Title : {{ bookmark.pageTitle }} </span>
          <span> Notes : {{ bookmark.notes }} </span>
        </v-col>
      </v-row>
    </v-container>
  </m-card>
</template>
<script>
import ProfileIcon from "../Chat/ProfileIcon.vue";
export default {
  components: {
    ProfileIcon,
  },
  props: ["color", "bookmark"],
};
</script>
