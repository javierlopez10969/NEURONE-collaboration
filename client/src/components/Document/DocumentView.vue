<template>
  <v-container>
    <h1>Upload a File</h1>
    <FileUploader></FileUploader>
  </v-container>
</template>
<script>
import FileUploader from "./FileUploader.vue";
export default {
  components: {
    FileUploader,
  },
};
</script>
