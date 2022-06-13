<template>
  <v-container>
    <WidgetBtn></WidgetBtn>
    <WidgetBtn2></WidgetBtn2>
  </v-container>
</template>
<script>
import WidgetBtn from "@/components/Widget/WidgetBtn";
import WidgetBtn2 from "@/components/WidgetBtn";
export default {
  components: {
    WidgetBtn,
    WidgetBtn2,
  },
};
</script>