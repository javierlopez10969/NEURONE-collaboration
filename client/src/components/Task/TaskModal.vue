<template>
<m-button raised @click="isDialogOpen=true">Dialog</m-button>
<m-dialog
  v-model="isDialogOpen"
  @closed="onDialogClosed">
  <m-typo-headline :level="5" slot="header">Header</m-typo-headline>
  <m-typo-body :level="1" slot="body">Body</m-typo-body>
  <m-button 
    class="mdc-dialog__button"
    data-mdc-dialog-action="Cancel"
    slot="cancelButton">
    Cancel
  </m-button>
  <m-button
    class="mdc-dialog__button"
    data-mdc-dialog-action="OK"
    slot="acceptButton">
    OK
  </m-button>
</m-dialog>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpen: false,
    };
  },
  methods: {
    onDialogClosed() {
      this.isDialogOpen = false;
    },
  },
};
</script>