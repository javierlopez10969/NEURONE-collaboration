<template lang="html">
  <div class='wrapper'>
  <tabs>
    <tab name="Services" :selected="true">
      <h1>What we do</h1>
    </tab>
    <tab name="Pricing">
      <h1>How much we do it for</h1>
    </tab>
    <tab name="About Us">
      <h1>Why we do it</h1>
    </tab>
  </tabs>
  </div>
</template>

<script>
import Tab from "../UI/TabUI.vue";
import Tabs from "../UI/TabsUI.vue";
export default {
  components: {
    Tab,
    Tabs,
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