<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <ConnectedUsers :users.sync="onlineUsers"></ConnectedUsers>
      </v-col>
    </v-row>
    <v-col>
      <v-form @submit.prevent="sendMessage">
        <v-text-field
          outlined
          filled
          auto-grow
          v-model="message"
          label="Send a Message"
          placeholder="Aa"
        ></v-text-field>
        <v-btn depressed color="primary" type="submit"> Send </v-btn>
        <vue-typer
          v-if="someoneTyping"
          text="Someone is writting..."
        ></vue-typer>
      </v-form>
    </v-col>
    <Container :chat.sync="chat"></Container>
    <v-snackbar v-model="snack" top right :timeout="3000" :color="snackColor">
      {{ snackText }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Container from "./ChatContainer.vue";
import ConnectedUsers from "./ConnectedUsers.vue";
import { VueTyper } from "vue-typer";
import axios from "axios";
export default {
  name: "ChatPage",
  components: {
    Container,
    VueTyper,
    ConnectedUsers,
  },
  computed: {
    user() {
      return this.$store.state.user;
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
      chat: [],
      //Message
      message: "",
      //Online user,
      onlineUsers: [],
      //Typing process
      isTyping: false,
      someoneTyping: false,
      lastTypingTime: new Date(),
      TYPING_TIMER_LENGTH: 400,
      messageRules: [(v) => !!v || "Message can't be empty"],
    };
  },
  created() {
    this.socket = this.$store.state.socket;
  },
  mounted() {
    //LISTENERS OF THE SOCKET
    //Send a message
    this.socket.on("message", (msg) => {
      this.chat.push(msg);
    });
    // Whenever the server emits 'typing', show the typing message
    this.socket.on("typing", (data) => {
      console.log(data);
      this.someoneTyping = true;
    });
    this.socket.on("login", (data) => {
      this.usernameSocket = data.username;
    });

    // Whenever the server emits 'stop typing', kill the typing message
    this.socket.on("stop typing", (data) => {
      console.log(data);
      this.someoneTyping = false;
    });
    //Add new user to the chat room
    this.socket.on("online users", (users) => {
      this.onlineUsers = users;
    });
    //disconnect of the chat room
  },
  watch: {
    // whenever question changes, this function will run
    message() {
      this.updateTyping();
    },
  },
  methods: {
    sendMessage() {
      if (this.message != "") {
        var message = {
          message: this.message,
          username: this.$store.state.user,
        };
        axios
          .post(this.$store.state.apiURL + "/message/send-message", {
            message,
            group: this.$route.params.id,
          })
          .then((res) => {
            console.log(res.data);
            this.message = "";
          });
        /**
           * 
        this.socket.emit("message", this.message);
        this.chat.push({ username: this.username, message: this.message });
        this.message = "";
           */
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