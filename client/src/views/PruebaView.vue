<script>
import CustomInput from "./CustomInput.vue";

export default {
  name: "PruebaView",
  components: { CustomInput },
  data() {
    return {
      message: "hello",
    };
  },
};
</script>

<template>
  <div><CustomInput v-model="message" /> {{ message }}</div>
</template>