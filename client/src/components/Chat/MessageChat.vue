<!-- All messages-->
<template>
  <m-card>
    <!-- Case is sender is the logged user -->
    <v-container
      fluid
      v-if="item.username === $store.state.user"
      style="text-align: right"
    >
      <v-row no-gutters>
        <v-col> </v-col>
        <v-col>
          <span style="color: blue">
            {{ item.username.name }} {{ item.username.lastName }}
          </span>
          <ProfileIcon
            :username="item.username"
            :sender="true"
            :color="item.username.color"
          ></ProfileIcon>
          <v-spacer></v-spacer>
          {{ item.message }}
        </v-col>
      </v-row>
    </v-container>

    <!-- Case is the receiver -->
    <v-container fluid v-if="item.username !== 'You'">
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
