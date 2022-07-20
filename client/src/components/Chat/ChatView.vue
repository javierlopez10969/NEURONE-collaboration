<template>
  <v-container fluid>
    <ConnectedUsers :users.sync="onlineUsers"></ConnectedUsers>
    <div>
      <Container :chat.sync="chat"></Container>
      <vue-typer v-if="someoneTyping" text="Someone is writting..."></vue-typer>
    </div>
    <p></p>
    <v-spacer></v-spacer>
    <v-form @submit.prevent="sendMessage">
      <m-text-field v-model="message" placeholder="Aa" id="message">
        <m-floating-label for="message">Send a message</m-floating-label>
      </m-text-field>
      <m-button type="submit"></m-button>
    </v-form>
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
    group() {
      return this.$store.state.group;
    },
  },
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      usernameSocket: "",
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
    axios
      .get(this.$store.state.apiURL + "/message/group/" + this.group._id)
      .then((res) => {
        this.chat = res.data;
        this.message = "";
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
    async sendMessage() {
      if (this.message != "") {
        var message = {
          message: this.message,
          user: this.$store.state.user,
        };

        console.log("message: ", message);
        try {
          var res = await axios.post(
            this.$store.state.apiURL + "/message/send-message",
            {
              message,
              group: this.group._id,
            }
          );
          console.log(res.data);
          this.message = "";
        } catch (err) {
          console.log(err);
          console.log(err.response);
        }
        console.log("message sent");
      } else {
        this.$store.commit("setSnack", {
          color: "green",
          text: "Put the required data in the fields",
        });
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
