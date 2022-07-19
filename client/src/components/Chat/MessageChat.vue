<!-- All messages-->
<template>
  <m-card>
    <v-container>
      <v-col>
        <button type="button" class="toolt1p" >
        <ProfileIcon
          :sender="false"
          :user="item.user"
          :color="item.user.color"
        ></ProfileIcon>
          <span class="toolt1ptext">{{item.user.email}}</span>
        </button>

      <a v-if="item.user.username">
        {{ item.user.username}} 
      </a>
      <a v-else>
          {{ item.user.email}}
      </a>
        <v-spacer></v-spacer>
        <span :style="{color : item.user.textColor}">
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
