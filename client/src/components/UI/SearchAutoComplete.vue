<template>
<div>
    <h4>Add users</h4>
    <m-chip-set >
    <m-chip v-for="(user, i) in addedUsers"
        :key="i">{{user.email}}
        <button type="button" @click="removeUser(user)">
          <Icon icon="mdi:close" class="dropbtn small-icon"/>
        </button>
        </m-chip>
    </m-chip-set>
    <div class="autocomplete">
     <input v-if="items.length === 0" class="input" :v-model="'No data'" disabled /> 
    <input v-if="items.length > 0" type="text" class="input" v-model="search" @input="onChange" />
    <ul v-show="isOpen" class="autocomplete-results">
      <li
        @click="setResult(result)"
        v-for="(result, i) in results"
        :key="i"
        class="autocomplete-result"
      >
        {{ result.email }}
      </li>
    </ul>
  </div>
</div>

</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
  name: "SearchAutocomplete",
  data() {
    return {
      search: "",
      results: [],
      isOpen: false,
    };
  },
  created() {
    this.results = this.items;
  },
  props: {
    items : {
      type: Array,
      required: false,
      default: () => [],
    },
    addedUsers : {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  methods: {
    filterResults() {
      this.results = this.items.filter(
        (item) => item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
    setResult(result) {
      this.$emit('removeU', result);
      this.$emit('addA', result);
      this.search = "";
      this.isOpen = false;
      this.results = this.items;
    },
    removeUser(user) {
      this.$emit('removeA', user);
      this.$emit('addU', user);
    },
  },
};
</script>

<style>
.input {
  border: 2px solid red;
  border-radius: 4px;
}
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 6em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
