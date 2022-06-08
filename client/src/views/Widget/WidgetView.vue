<template>
  <v-container>
    <WidgetBtn></WidgetBtn>
    <WidgetBtn2></WidgetBtn2>
    <WidgetBtn3></WidgetBtn3>>
  </v-container>
</template>
<script>
import WidgetBtn from "@/components/Widget/WidgetBtn";
import WidgetBtn2 from "@/components/WidgetBtn";
import WidgetBtn3 from "@/components/CurrentWeather";
export default {
  components: {
    WidgetBtn,
    WidgetBtn2,
    WidgetBtn3,
  },
};
</script>