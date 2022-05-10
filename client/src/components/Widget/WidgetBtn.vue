<template>
  <div>
    <v-menu
      transition="fab-transition"
      origin="center center"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      bottom
    >
      <template #activator="{ on: onMenu }">
        <v-tooltip bottom>
          <template #activator="{ on: onTooltip }">
            <v-btn v-on="{ ...onMenu, ...onTooltip }" icon>
              <v-badge color="green" overlap>
                <v-icon large> mdi-bell </v-icon>
              </v-badge>
            </v-btn>
          </template>

          <span>Collaboration </span>
        </v-tooltip>
      </template>
      <WidgetCard></WidgetCard>
      <a origin="center center" v-if="logged === true"> </a>

      <a v-else>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto secondary"
        ></v-card>
      </a>
    </v-menu>
  </div>
</template>
<script>
import WidgetCard from "./WidgetCard.vue";
export default {
  components: {
    WidgetCard,
  },
  data: () => ({
    expand: false,
    menu: false,
  }),
  computed: {
    logged() {
      if (this.$store.state.user != "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>