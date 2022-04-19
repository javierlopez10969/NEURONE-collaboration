<template>
  <a>
    <!--Chat -->
    <v-tab-item>
      <v-container>
        <ChatView></ChatView>
      </v-container> </v-tab-item
  ></a>
</template>
<script>
import ChatView from "@/components/Chat/ChatView.vue";
export default {
  components: {
    ChatView,
  },
};
</script>