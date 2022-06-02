<template>
  <v-container>
    <WidgetBtn></WidgetBtn>
    <CalculatorComponent></CalculatorComponent>
  </v-container>
</template>
<script>
import WidgetBtn from "@/components/Widget/WidgetBtn";
import CalculatorComponent from "@/components/CalculatorComponent";
export default {
  components: {
    WidgetBtn,
    CalculatorComponent,
  },
};
</script>