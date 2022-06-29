<template>
  <v-container fluid>
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-btn dark @click="step = 2"> New Bookmark </v-btn>
      </v-window-item>

      <v-window-item :value="2">
        <v-form @submit.prevent="addBookMark">
          <v-btn dark @click="step = 1"> Back </v-btn>
          <v-btn type="submit"> Add Bookmark </v-btn>
          <v-col cols="8">
            <v-text-field
              outlined
              filled
              auto-grow
              v-model="bookmark.URL"
              label="URL"
              placeholder="Aa"
            ></v-text-field>
            <v-text-field
              outlined
              filled
              auto-grow
              v-model="bookmark.pageTitle"
              label="Page Title"
              placeholder="Aa"
            ></v-text-field>
            <v-text-field
              outlined
              filled
              auto-grow
              v-model="bookmark.notes"
              label="Notes"
              placeholder="Aa"
            ></v-text-field>
          </v-col>
        </v-form>
      </v-window-item>
    </v-window>
    <BookmarkContainer :bookmarks = "bookmarks"/>
  </v-container>
</template>

<script>
import axios from "axios";
import BookmarkContainer from "./BookmarkContainer.vue"
export default {
  components:{BookmarkContainer},
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
      .get(this.$store.state.apiURL + "/bookmark/group/" + this.$store.state.group._id)
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
  watch: {
    // whenever question changes, this function will run
    message() {
      this.updateTyping();
    },
  },
  methods: {
    addBookMark() {
      if (this.bookmark.URL != "") {
        var message = {
          message: this.message,
          username: this.$store.state.user,
        };
        axios
          .post(this.$store.state.apiURL + "/message/send-message", {
            message,
            group: this.group._id,
          })
          .then((res) => {
            console.log(res.data);
            this.message = "";
          });
      } else {
        this.snack = true;
        this.snackText = "Put some text pls";
        this.snackColor = "red";
      }
    },
    updateTyping() {
      //TODO : put if is connected or not
      if (this.isTyping === false) {
        this.isTyping = true;
        this.socket.emit("typing");
        console.log("typing");
      }
      this.lastTypingTime = new Date().getTime();

      setTimeout(() => {
        const typingTimer = new Date().getTime();
        const timeDiff = typingTimer - this.lastTypingTime;
        if (timeDiff >= this.TYPING_TIMER_LENGTH && this.isTyping) {
          this.socket.emit("stop typing");
          this.isTyping = false;
        }
      }, this.TYPING_TIMER_LENGTH);
    },
  },
};
</script>