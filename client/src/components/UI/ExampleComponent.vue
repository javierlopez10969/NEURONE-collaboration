
<template>
  <div>hola<Icon icon="mdi-light:home" class="big-icon" /></div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: { Icon },
  data() {
    return {
      text: "hola",
      steps: 3,
      step: undefined,
      selectedItem: 0,
    };
  },
};
</script>
<style lang="stylus">
@import '@/styles/widget.styl';
@import '@/styles/Icon.css';
</style>

