<template>
  <v-card height="500" width="350" outlined>
    <CustomTabs></CustomTabs>
  </v-card>
</template>

<script>
import CustomTabs from "@/components/UI/CustomTabs";
export default {
  components: { CustomTabs },
};
</script>

<style lang="stylus">
@import '@/styles/widget.styl';
@import '@/styles/Icon.css';
</style>
