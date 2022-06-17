<template lang="html">
  <div class='wrapper'>
  <tabs>
    <tab name="Chat" :selected="true">
<ChatView></ChatView>
    </tab>
    <tab name="Pricing">
      <h1>How much we do it for</h1>
    </tab>
    <tab name="Configuration">

    </tab>
  </tabs>
  </div>
</template>

<script>
import Tab from "../UI/TabUI.vue";
import Tabs from "../UI/TabsUI.vue";
import ChatView from "../Chat/ChatView.vue";
export default {
  components: {
    Tab,
    Tabs,
    ChatView,
  },
  data() {
    return {
      tab: null,
      text: "hola",
    };
  },
  computed: {
    group() {
      return this.$store.state.group;
    },
  },
};
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>