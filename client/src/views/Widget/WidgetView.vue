<template>
  <v-container>
    <WidgetBtn2 :msg="'hola'"></WidgetBtn2>
  </v-container>
</template>
<script>
import WidgetBtn2 from "@/components/WidgetBtn";
export default {
  components: {
    WidgetBtn2,
  },
};
</script>