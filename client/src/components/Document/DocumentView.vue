<template>
  <v-container>
    <FileUploader></FileUploader>
    <ImageContainer></ImageContainer>
  </v-container>
</template>
<script>
import FileUploader from "./FileUploader.vue";
import ImageContainer from "./DocumentsContainer.vue";
export default {
  components: {
    FileUploader,
    ImageContainer,
  },
};
</script>
