<!-- All messages-->
<template>
  <m-card>
    <v-container>
        <h1>'{{task.title}}' </h1>
        <a v-if="task.creator._id == user._id || task.asigned_to._id == user._id ">  </a>
        <m-typo-subheading :level="1">Description : </m-typo-subheading>
        <h2> {{task.description}}</h2>
        <h3 :style="{'color' : color}"> State : {{task.state}}</h3>
        <h4 :style="{color: task.asigned_to.textColor }"> Asigned to : {{task.asigned_to.email}}</h4>
        <h4 :style="{color: task.creator.textColor }"> Created by : {{task.creator.email}}</h4>
    </v-container>
  </m-card>
</template>
<script>
export default {
  props: ["task"],
  data () {
    return {
      color: 'gray',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    if(this.task.state=='To do'){
        this.color = 'gray';
    }
    if(this.task.state=='Finished'){
        this.color = 'green';
    }
  },
};
</script>
