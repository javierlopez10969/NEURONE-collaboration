<script>
import { io } from "socket.io-client";
import MessagesChat from "../components/Chat/ChatContainer.vue";
import { VueTyper } from "vue-typer";

export default {
  name: "ChatPage",
  components: {
    MessagesChat,
    VueTyper,
  },
  data() {
    return {
      //Username data
      username: "You",
      //Socket for connection
      socket: {},
      //All messages
      chat: [],
      //Message
      message: "",
      //Typing process
      isTyping: false,
      someoneTyping: false,
      lastTypingTime: new Date(),
      TYPING_TIMER_LENGTH: 400,
      messageRules: [(v) => !!v || "Message can't be empty"],
    };
  },
  created() {
    var Socket = io("http://localhost:3000");
    Socket.on("connect", () => {
      console.log(`You connected with id : ${Socket.id}`);
    });
    this.socket = Socket;
  },
  mounted() {
    this.socket.on("message", (msg) => {
      this.chat.push(msg);
    });
    //Login
    //Add new user to the chat rooom
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
        console.log(this.isTyping);
        this.socket.emit("typing");
      } else {
        console.log("wacha");
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
    <h1>Register as {{ username }} {{ isTyping }}</h1>
    <MessagesChat :chat.sync="chat"></MessagesChat>
    <vue-typer v-if="someoneTyping" text="Someone is writting..."></vue-typer>
    <v-form ref="form" @submit="sendMessage">
      <v-footer padless absolute>
        <v-container>
          <v-row>
            <v-textarea
              filled
              auto-grow
              v-model="message"
              label="Send a Message"
              placeholder="Aa"
              outlined
            ></v-textarea>
            <v-btn depressed color="primary" type="submit"> Send </v-btn>
          </v-row>
        </v-container>
        <v-col class="text-center" cols="12"> </v-col>
      </v-footer>
    </v-form>
  </v-container>
</template>

