<template>
  <v-container fluid>
    <div v-show="view == 'normal'">
      <m-button
        raised
        style="color: black; background-color: white"
        @click="view = 'form'"
      >
        New Bookmark
      </m-button>
      <BookmarkContainer :bookmarks="bookmarks" />
    </div>
    <v-container v-show="view == 'form'">
      <v-form ref="form" @submit.prevent="addBookMark">
        <m-button
          raised
          style="color: black; background-color: white"
          @click="view = 'normal'"
        >
          Back
        </m-button>
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
  </v-container>
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
      snack: false,
      snackColor: "",
      snackText: "",
      //Username data
      username: "You",
      usernameSocket: "",
      view: "normal",
      userProfile: {},
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
      });
  },
  mounted() {
    //LISTENERS OF THE SOCKET
    //Send a message
    this.socket.on("bookmark", (bkmrk) => {
      this.bookmarks.push(bkmrk);
    });
    this.socket.on("login", (data) => {
      this.usernameSocket = data.username;
    });
  },
  methods: {
    addBookMark() {
      if (this.$refs.form.validate()) {
        var bookmark = {
          message: this.message,
          username: this.$store.state.user,
        };
        axios
          .post(this.$store.state.apiURL + "/bookmark/send-bookmark", {
            bookmark,
            group: this.group._id,
          })
          .then((res) => {
            console.log(res.data);
            this.view = "normal";
          });
      } else {
        alert("please put the required data");
      }
    },
  },
};
</script>
