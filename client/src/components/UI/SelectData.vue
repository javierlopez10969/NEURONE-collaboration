<template>
<div class="custom-select" style="width:200px;">
<select v-if ="mode=='state'" id="myselect" v-model="selectedItem" style="padding: 10px; background-color:paleturquoise; border:none;">
    <option value="">{{label}} </option>
    <option v-for="(item,i) in items" :value="item.name" :key="i" @click="setState(item)" >{{item.name}}</option>
</select>
<select v-if ="mode=='user'" id="myselect" v-model="selectedItem" @change="setState(selectedItem)" style="padding: 10px; background-color:paleturquoise; border:none;">
    <option value="">{{label}} </option>
    <option v-for="(item,i) in items" :value="item._id" :key="i" >{{item.email}}</option>
</select>
</div>
</template>

<script>
export default{
    data() {
        return {
            selectedItem: ""
        }
    },
    methods: {
        setState(item) { 
            if(this.mode=="state"){
                this.$emit('setState', item);
            }
            if(this.mode == 'user'){
                this.$emit('setUser', item);
            }}       
    },
    props : {
        items: {
            type: Array,
            default: () => [
                { _id: 0, name: 'All' },
                { _id: 1, name: 'To do' },
                { _id: 2, name: 'Doing' },
                { _id: 3, name: 'Checking' },
                { _id: 4, name: 'Finished' },

            ],
        },
        label : {
            type: String,
            default: "-- Select state--"
        },
        mode :{
            type: String,
            default: "state"
        }
    },
}
</script>

<style>

</style>