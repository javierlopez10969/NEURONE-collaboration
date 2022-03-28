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
      message: "",
      chat: [],
      socket: {},
      username: "You",
      type: false,
      numUsers: 0,
      valid: false,
      messageRules: [(v) => !!v || "Message can't be empty"],
    };
  },
  mounted() {
    var Socket = io("http://localhost:3000");
    Socket.on("connect", () => {
      console.log(`You connected with id : ${Socket.id}`);
    });
    Socket.on("message", (msg) => {
      this.chat.push(msg);
    });
    //Login
    //Add new user to the chat rooom

    this.socket = Socket;
  },
  methods: {
    sendMessage() {
      if (this.message != "") {
        this.socket.emit("message", this.message);
        this.chat.push({ username: this.username, message: this.message });
        this.message = "";
      }
    },
    typing() {
      //Emit typing
      this.type = "true";
    },
  },
};
</script>

<template>
  <v-container>
    <h1>Register as {{ username }}</h1>
    <MessagesChat :chat.sync="chat"></MessagesChat>
    <vue-typer text="Someone is writting..."></vue-typer>
    <v-form ref="form" v-model="valid" lazy-validation @submit="sendMessage">
      <v-footer padless absolute>
        <v-container>
          <v-row>
            <v-text-field
              @change="typing"
              v-model="message"
              label="Send a Message"
              placeholder="Aa"
              outlined
              required
            ></v-text-field>
            <v-btn depressed color="primary" type="submit"> Send </v-btn>
          </v-row>
        </v-container>
        <v-col class="text-center" cols="12"> </v-col>
      </v-footer>
    </v-form>
  </v-container>
</template>

