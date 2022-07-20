<template>
  <div
    style="float: left; height: 250px; width: 400px; overflow-y: auto"
    ref="container"
  >
    <!-- Tasks -->
    <div
      v-for="(task, index) in tasks"
      :key="index"
    >
        <Task :task="task" ></Task>
      <p></p>
    </div>
  </div>
</template>

<script>
import Task from "./TaskElement.vue";
export default{
components: {
Task,
},
props:["tasks"],
      updated() {
    //Scroll to the bottom
    this.scrollToBottom();
  },
  methods: {
    //Put the message in the bottom
    scrollToBottom() {
      const container = this.$refs.container;
      container.scrollTop = container.scrollHeight;
    },
  },
}
</script>