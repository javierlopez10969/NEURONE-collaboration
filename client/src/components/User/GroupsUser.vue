<!--Component who shows all -->
<template>
  <v-container>
    <v-col>
      <div
        v-for="(item, index) in groups"
        :key="index"
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="400">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                    center
                  "
                  :color="item.color"
                  style="height: 100%"
                >
                  {{ item.color }}
                </v-card>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                :color="item.color"
                class="white--text"
                fab
                large
                right
                top
                :to="{ name: 'group', params: { id: item._id } }"
              >
                <v-icon>mdi-account-group</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text text-h6 mb-2">Group</div>
              <h3 class="text-h4 font-weight-lightmb-2" :color="item.color">
                {{ item.name }}
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                {{ item.description }}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>
    </v-col>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    groups: [],
    show: false,
    hover: false,
  }),
  created() {
    axios
      .get(
        this.$store.state.apiURL + "/group/user/" + this.$store.state.user._id,
        {
          headers: { token: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        this.groups = res.data;
      });
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>