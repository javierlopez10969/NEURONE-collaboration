<!-- Body of the messages-->
<template>
  <div>
    <v-container
      style="height: 400px; overflow: auto"
      id="container"
      ref="container"
    >
      <!-- Messages -->
      <div
        v-for="item in chat"
        :key="item.username"
        :class="[
          'flex-row align-right',
          item.username == 'You' ? 'justify-end' : null,
        ]"
      >
        <a v-if="item.username == 'You'">
          <MessageChat :item="item" :color="'blue lighten-4'"></MessageChat
        ></a>
        <a v-else>
          <MessageChat :item="item" :color="'purple lighten-4'"></MessageChat
        ></a>
      </div>
    </v-container>
  </div>
</template>

<script>
import MessageChat from "./MessageChat.vue";
export default {
  props: ["chat"],
  components: {
    MessageChat,
  },
  updated() {
    //Scroll to the bottom
    this.scrollToBottom();
  },
  methods: {
    //Put the message in the bottom
    scrollToBottom() {
      const container = this.$refs.container;
      container.scrollTop = container.scrollHeight;
    },
  },
};
</script>