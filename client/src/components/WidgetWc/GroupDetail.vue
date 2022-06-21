<template>
  <m-button theming="secondary-bg" unelevated> Secondary-Button </m-button>
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