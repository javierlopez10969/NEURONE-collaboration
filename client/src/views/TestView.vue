<script>
import MessagesChat from "../components/Chat/ChatContainer.vue";

export default {
  components: { MessagesChat },
  data() {
    return {
      message: "hello",
    };
  },
};
</script>

<template>
  <div><MessagesChat /></div>
</template>