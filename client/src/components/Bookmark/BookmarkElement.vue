<!-- All messages-->
<template>
  <m-card>
    <!-- Case is sender is the logged user -->
    <v-container>
      <v-row no-gutters>
        <v-col>
          <button type="button" class="toolt1p" >
          <ProfileIcon
            :sender="false"
            :user="bookmark.user"
            :color="bookmark.user.color"
          ></ProfileIcon>
          <span class="toolt1ptext">{{bookmark.user.email}}</span>
        </button>
               <a v-if="bookmark.user.username">
        {{ bookmark.user.username}} 
      </a>
      <a v-else>
          {{ bookmark.user.email}}
      </a> 
          <v-spacer></v-spacer>
          <span>
             Bookmark : <a :href="'https://' + bookmark.URL"> {{bookmark.URL}} </a>
          </span>
          <span> Title : {{ bookmark.pageTitle }} </span>
          <p></p>
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
