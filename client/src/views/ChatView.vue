<script>
import { io } from "socket.io-client";

export default {
  name: "ChatPage",
  data() {
    return {
      message: "",
      items: [{ message: "Foo" }, { message: "Bar" }],
      socket: {},
    };
  },
  mounted() {
    var Socket = io("http://localhost:3000");
    Socket.on("connect", () => {
      console.log(`You connected with id : ${Socket.id}`);
    });
    Socket.on("message", (msg) => {
      console.log(msg);
      this.items.push({ message: msg });
    });
    this.socket = Socket;
  },
  methods: {
    sendMessage() {
      this.socket.emit("message", this.message);
      this.message = "";
    },
    typing() {},
  },
};
</script>

<template>
  <v-form @submit="sendMessage">
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>

    <v-footer padless absolute>
      <v-container>
        <v-row>
          <v-text-field
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
</template>