<template>
  <div>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="fields">
        <input type="file" ref="file" @change="onSelect" />
      </div>
      <m-button raised class="rounded-pill">Upload file</m-button>

      <div class="message">
        <h5>{{ message }}</h5>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FileUpload",
  data() {
    return {
      file: "",
      message: "",
    };
  },
  computed: {
    apiURL() {
      return this.$store.state.apiURL;
    },
    user() {
      return this.$store.state.user;
    },
    group() {
      return this.$store.state.group;
    },
  },
  methods: {
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async onSubmit() {
      if (this.file) {
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("user", this.user._id);
        formData.append("group", this.group._id);
        try {
          await axios.post(this.apiURL + "/document/upload", formData);
          this.$store.commit("setSnack", {
            color: "green",
            text: "File uploaded successfully",
          });
        } catch (err) {
          console.log(err);
          this.message = err.response.data.error;
          this.$store.commit("setSnack", {
            color: "red",
            text: "Error uploading file",
          });
        }
      } else {
        this.$store.commit("setSnack", {
          color: "red",
          text: "No file selected",
        });
      }
    },
  },
};
</script>
