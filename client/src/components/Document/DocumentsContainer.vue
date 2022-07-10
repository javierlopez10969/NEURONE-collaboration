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
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
  computed: {
    apiURL() {
      return this.$store.state.apiURL;
    },
    group() {
      return this.$store.state.group;
    },
  },
  props: ["files"],
  methods: {
    downloadFile(filename) {
      window.open(this.apiURL + "/document/download/" + filename, "_blank");
    },
  },
};
</script>
