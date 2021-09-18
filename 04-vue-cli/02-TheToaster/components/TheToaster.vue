<template>
  <div class="toasts">
    <div v-for="(item, index) in items" :key="item.toastType + index">
      <ui-toaster :class-type="item.classType" :toast-icon="item.toastIcon" :toast-message="item.toastMessage" />
    </div>
  </div>
</template>

<script>
import UiToaster from './UiToaster';

const SUCCESS_DELAY = 5000;
const ERROR__DELAY = 2000;

export default {
  name: 'TheToaster',

  components: { UiToaster },
  data() {
    return {
      items: [],
      successProps: {
        toastType: 'success',
        classType: 'toast_success',
        toastIcon: 'check-circle',
      },
      errorProps: {
        toastType: 'error',
        classType: 'toast_error',
        toastIcon: 'alert-circle',
      },
    };
  },
  methods: {
    removeThisItem(itemId) {
      const index = this.items.indexOf(this.items.filter((it) => it.id === itemId)[0]);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    success(message) {
      const id = Date.now();
      this.items.push({
        id: id,
        ...this.successProps,
        toastMessage: message,
      });
      setTimeout(this.removeThisItem, SUCCESS_DELAY, id);
    },
    error(message) {
      const id = Date.now();
      this.items.push({
        id: id,
        ...this.errorProps,
        toastMessage: message,
      });
      setTimeout(this.removeThisItem, ERROR__DELAY, id);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
