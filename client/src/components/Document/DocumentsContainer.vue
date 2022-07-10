<template>
  <v-container
    fluid
    style="max-height: 200px; max-width: 400px; overflow: auto"
    ref="container"
  >
    <div v-for="file in files" :key="file._id">
      <p></p>
      <m-card>
        <v-container fluid>
          <v-row no-gutters>
            <v-col>
              <!-- 
            

          <ProfileIcon
            :sender="false"
            :username="bookmark.username"
            :color="bookmark.username.color"
          ></ProfileIcon>

          {{ bookmark.username.name }} {{ bookmark.username.lastName }}
          -->
              <v-spacer></v-spacer>
              {{ file.filename }}

              <button @click="downloadFile(file.filename)">
                <Icon icon="mdi:download" class="small-icon"></Icon>
              </button>
            </v-col>
            <v-col>
              <img
                style="width: 50px; height: 50px"
                :src="apiURL + '/document/image/' + file.filename"
              />
            </v-col>
          </v-row>
        </v-container>
      </m-card>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      files: [],
      image: {},
    };
  },
  computed: {
    apiURL() {
      return this.$store.state.apiURL;
    },
  },
  created() {
    axios.get(this.apiURL + "/document/files").then((res) => {
      this.files = res.data;
      axios
        .get(this.apiURL + "/document/image/" + this.files[0].filename)
        .then((res) => {
          this.image = res.data;
        });
    });
  },
  methods: {
    downloadFile(filename) {
      window.open(this.apiURL + "/document/download/" + filename, "_blank");
    },
  },
};
</script>
