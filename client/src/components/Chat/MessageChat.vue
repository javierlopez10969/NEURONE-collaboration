<!-- All messages-->
<template>
  <v-card :color="color">
    <!-- Case is sender -->
    <v-container fluid v-if="item.username == 'You'" style="text-align: right">
      <v-row no-gutters>
        <v-col> </v-col>
        <v-col>
          <span class="blue--text">
            {{ item.username }}
          </span>
          <ProfileIcon
            :username="item.username"
            :sender="true"
            :color="'indigo'"
          ></ProfileIcon>
          <v-spacer></v-spacer>
          {{ item.message }}
        </v-col>
      </v-row>
    </v-container>

    <!-- Case is the receiver -->
    <v-container fluid v-else>
      <v-col>
        <ProfileIcon
          :sender="false"
          :username="item.username"
          :color="'red'"
        ></ProfileIcon>

        {{ item.username }}
        <v-spacer></v-spacer>
        <span class="red--text">
          {{ item.message }}
        </span>
      </v-col>
    </v-container>
  </v-card>
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
