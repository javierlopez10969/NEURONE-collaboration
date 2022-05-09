<template>
  <div>
    <v-menu offset-y>
      <template #activator="{ on: onMenu }">
        <v-tooltip bottom>
          <template #activator="{ on: onTooltip }">
            <v-btn v-on="{ ...onMenu, ...onTooltip }" icon>
              <v-badge color="green" overlap>
                <v-icon large> mdi-bell </v-icon>
              </v-badge>
            </v-btn>
          </template>

          <span>Notificaciones</span>
        </v-tooltip>
      </template>
      <v-fab-transition origin="center center" v-if="logged === true">
        <WidgetCard></WidgetCard>
      </v-fab-transition>

      <v-fade-transition v-else>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto secondary"
        ></v-card>
      </v-fade-transition>
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