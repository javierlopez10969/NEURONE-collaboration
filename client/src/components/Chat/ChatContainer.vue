<!-- Body of the messages-->
<template>
  <div
    style="float: left; height: 250px; width: 320px; overflow-y: auto"
    ref="container"
  >
    <!-- Messages -->
    <div
      v-for="(item, index) in chat"
      :key="index"
      :class="[
        'flex-row align-right',
        item.username == 'You' ? 'justify-end' : null,
      ]"
    >
      <a v-if="item.username === 'system'"
        ><div v-bind:class="item.color + '--text text-center'">
          <h1>{{ item.message }}</h1>
        </div>
      </a>
      <a v-if="item.username !== 'system'">
        <MessageChat :item="item" :color="'purple lighten-4'"></MessageChat
      ></a>
      <p></p>
    </div>
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
