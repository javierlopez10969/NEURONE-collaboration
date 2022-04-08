<script>
import { io } from "socket.io-client";
import MessagesChat from "../components/Chat/ChatContainer.vue";
import ConnectedUsers from "../components/Chat/ConnectedUsers.vue";
import { VueTyper } from "vue-typer";

export default {
  name: "ChatPage",
  components: {
    MessagesChat,
    VueTyper,
    ConnectedUsers,
  },
  data() {
    return {
      //Username data
      username: "You",
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
    //initial connection to the server
    var Socket = io("http://localhost:3000");
    Socket.on("connect", () => {
      console.log(`You connected with id : ${Socket.id}`);
    });
    Socket.emit("login");

    this.socket = Socket;
    this.socket.on("login", (user) => {
      this.userProfile = user;
    });
    //Add new user to the chat room
    this.socket.on("online users", (users) => {
      this.onlineUsers = users;
    });
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

    // Whenever the server emits 'stop typing', kill the typing message
    this.socket.on("stop typing", (data) => {
      console.log(data);
      this.someoneTyping = false;
    });
    this.socket.on("login", (user) => {
      this.userProfile = user;
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
        this.socket.emit("message", this.message);
        this.chat.push({ username: this.username, message: this.message });
        this.message = "";
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

<template>
  <v-container fluid>
    <v-row>
      <h1>Register as {{ userProfile.username }}</h1>

      <v-col>
        <ConnectedUsers :users.sync="onlineUsers"></ConnectedUsers>
      </v-col>
    </v-row>
    <MessagesChat :chat.sync="chat"></MessagesChat>
    <vue-typer v-if="someoneTyping" text="Someone is writting..."></vue-typer>
    <v-form ref="form" @submit.prevent="sendMessage">
      <v-footer padless absolute>
        <v-container>
          <v-row>
            <v-text-field
              outlined
              filled
              auto-grow
              v-model="message"
              label="Send a Message"
              placeholder="Aa"
            ></v-text-field>
            <v-btn depressed color="primary" type="submit"> Send </v-btn>
          </v-row>
        </v-container>
        <v-col class="text-center" cols="12"> </v-col>
      </v-footer>
    </v-form>
  </v-container>
</template>

