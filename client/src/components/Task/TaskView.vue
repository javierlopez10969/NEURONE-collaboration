<template>
  <div style="float: left; height: 270px; width: 270px">
    <a v-show="view == 'normal'">
      <v-col>
        <v-row>
          <m-button
            raised
            style="color: black; background-color: white"
            @click="view = 'form'"
          >
            New Task
          </m-button>

          <Select v-on:setState="setState" />
        </v-row>
      </v-col>

      <p></p>
      <Container :tasks.sync="tasks" />
    </a>
    <v-container v-show="view == 'form'">
      <v-form ref="form" @submit.prevent="sendTask">
        <m-button
          raised
          type="button"
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
          Create Task
        </m-button>
        <v-row>
          <v-col cols="8">
            <m-text-field
              v-model="task.title"
              label="Task Name"
              placeholder="Create the tasks module"
              id="name"
            >
              <m-floating-label for="name">Title</m-floating-label>
            </m-text-field>
          </v-col>
          <v-col cols="4">
            <Select
              :label="'-- Select user--'"
              :mode="'user'"
              :items="group.users"
              v-on:setUser="setUser"
              required
            />
          </v-col>
        </v-row>

        <v-col cols="10">
          <m-text-field
            v-model="task.description"
            label="Task Description"
            placeholder="Description"
            id="description"
            textarea
          >
            <m-floating-label for="description">Description</m-floating-label>
          </m-text-field>
        </v-col>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import Select from "../UI/SelectData.vue";
import Container from "./TaskContainer.vue";
import axios from "axios";
export default {
  name: "TaskView",
  components: {
    Container,
    Select,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    group() {
      return this.$store.state.group;
    },
    apiURL() {
      return this.$store.state.apiURL;
    },
  },
  data() {
    return {
      //View of the page
      view: "normal",
      //Socket for connection
      socket: {},
      //All tasks
      tasks: [],
      state: "All",
      //Task
      task: {
        title: "",
        description: "",
        asigned_to: "",
        creator: "",
        state: "To do",
      },
      messageRules: [(v) => !!v || "Message can't be empty"],
    };
  },
  created() {
    this.socket = this.$store.state.socket;
    axios
      .get(this.$store.state.apiURL + "/task/group/" + this.group._id)
      .then((res) => {
        this.tasks = res.data;
      });
  },
  mounted() {
    this.socket.on("task", (task) => {
      this.tasks.push(task);
    });
  },
  methods: {
    setUser(item) {
      this.task.asigned_to = item;
    },
    setState(item) {
      this.state = item;
      //Update the tasks
      axios
        .get(this.apiURL + "/task/group/" + this.group._id + "/" + this.state)
        .then((res) => {
          console.log(res.data);
          //this.tasks = res.data;
        });
    },
    async sendTask() {
      console.log(this.task.title.length);
      console.log(this.task.description.length);
      console.log(this.task.asigned_to);
      if (
        this.task.title.length >= 5 &&
        this.task.description.length >= 15 &&
        this.task.asigned_to != ""
      ) {
        try {
          var res = await axios.post(this.apiURL + "/task/send-task", {
            task: this.task,
            group: this.group._id,
            user: this.user,
          });
          console.log(res.data);
          this.view = "normal";
        } catch (err) {
          console.log(err);
          console.log(err.response);
        }
        console.log("New task added");
      } else {
        this.$store.commit("setSnack", {
          color: "red",
          text: "Put the required data in the fields",
        });
      }
    },
  },
};
</script>
