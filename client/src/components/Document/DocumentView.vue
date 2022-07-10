<template>
  <v-container>
    <FileUploader></FileUploader>
    <ImageContainer :files="files"></ImageContainer>
  </v-container>
</template>
<script>
import FileUploader from "./FileUploader.vue";
import ImageContainer from "./DocumentsContainer.vue";
import axios from "axios";
export default {
  components: {
    FileUploader,
    ImageContainer,
  },
  data() {
    return {
      files: [],
      socket: {},
    };
  },
  computed: {
    apiURL() {
      return this.$store.state.apiURL;
    },
    group() {
      return this.$store.state.group;
    },
  },
  created() {
    this.socket = this.$store.state.socket;
    axios
      .get(this.apiURL + "/document/files/group/" + this.group._id)
      .then((res) => {
        this.files = res.data;
      });
    this.socket.on("document", (file) => {
      this.files.push(file);
    });
  },
};
</script>
