<template>
  <v-container> <HomeForm :title="'Login'"></HomeForm> </v-container>
</template>
<script>
import HomeForm from "@/components/General/HomeForm.vue";
export default {
  components: { HomeForm },
};
</script>