<template>
  <div style="float: left; height: 270px; width: 270px">
    <div v-show="view == 'normal'">
      <m-button
        raised
        style="color: black; background-color: white"
        @click="view = 'form'"
      >
        New Bookmark
      </m-button>
      <p></p>
      <BookmarkContainer :bookmarks="bookmarks" />
    </div>
    <v-container v-show="view == 'form'">
      <m-button
        raised
        style="color: black; background-color: white"
        @click="view = 'normal'"
      >
        Back
      </m-button>
      <v-form ref="form" @submit.prevent="addBookMark">
        <m-button
          type="submit"
          raised
          style="color: white; background-color: green"
        >
          Add Bookmark
        </m-button>
        <v-col cols="8">
          <m-text-field
            v-model="bookmark.URL"
            label="URL"
            placeholder="www.mywebsite.com"
            id="URL"
          >
            <m-floating-label for="textfield">URL</m-floating-label>
          </m-text-field>
          <p></p>
          <m-text-field
            v-model="bookmark.pageTitle"
            placeholder="My website"
            id="URL"
          >
            <m-floating-label for="textfield">Page Title</m-floating-label>
          </m-text-field>
          <p></p>
          <m-text-field
            v-model="bookmark.notes"
            placeholder="This website talks about my website"
            id="URL"
          >
            <m-floating-label for="textfield">Notes</m-floating-label>
          </m-text-field>
        </v-col>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import BookmarkContainer from "./BookmarkContainer.vue";
export default {
  components: { BookmarkContainer },
  name: "BookmarkPage",
  computed: {
    user() {
      return this.$store.state.user;
    },
    group() {
      return this.$store.state.group;
    },
  },
  data() {
    return {
      //View of the page
      view: "normal",
      //Socket for connection
      socket: {},
      //All messages
      bookmarks: [],
      bookmark: {
        URL: "",
        notes: "",
        pageTitle: "",
      },
      //Online user,
      onlineUsers: [],
      step: 1,
    };
  },
  created() {
    this.socket = this.$store.state.socket;
    axios
      .get(
        this.$store.state.apiURL +
          "/bookmark/group/" +
          this.$store.state.group._id
      )
      .then((res) => {
        this.bookmarks = res.data;
        this.bookmarks.reverse();
      });
  },
  mounted() {
    //LISTENERS OF THE SOCKET
    //Send a message
    this.socket.on("bookmark", (bkmrk) => {
      this.bookmarks.unshift(bkmrk);
    });
  },
  methods: {
    addBookMark() {
      if (this.$refs.form.validate()) {
        var bookmark = {
          URL: this.bookmark.URL,
          notes: this.bookmark.notes,
          pageTitle: this.bookmark.pageTitle,
          user: this.user,
        };
        axios
          .post(this.$store.state.apiURL + "/bookmark/send-bookmark", {
            bookmark,
            group: this.group._id,
          })
          .then((res) => {
            this.$store.commit("setSnack", {
              color: "green",
              text: "Bookmark sent",
            });
            this.view = "normal";
            console.log(res.status);
          })
          .catch((error) => {
            console.log(error.response.data);
            this.$store.commit("setSnack", {
              color: "red",
              text: "Put the required data in the fields",
            });
          });
      }
    },
  },
};
</script>
