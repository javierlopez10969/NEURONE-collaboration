<template>
  <div>
    <m-tab-bar>
      <m-tab-scroller>
        <m-tab active> Home </m-tab>
        <m-tab> Like me </m-tab>
        <m-tab> About me </m-tab>
      </m-tab-scroller>
      <m-tab-indicator active> Hola </m-tab-indicator>
    </m-tab-bar>
  </div>
</template>

<script>
export default {
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