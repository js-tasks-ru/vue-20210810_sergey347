<template>
  <div class="toast" :class="classByType">
    <ui-icon class="toast__icon" :icon="localIcon" />
    <span>{{ toastMessage }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'UiToaster',
  components: { UiIcon },
  props: {
    toastType: {
      tye: String,
      default: null,
    },
    toastIcon: {
      type: String,
      default: null,
    },
    toastMessage: {
      type: String,
      default: null,
    },
  },
  computed: {
    classByType() {
      switch (this.toastType) {
        case 'success':
          return 'toast_success';
        case 'error':
          return 'toast_error';
        default:
          return '';
      }
    },
    localType() {
      return this.toastType;
    },
    localIcon() {
      return this.toastIcon;
    },
    localMessage() {
      return this.toastMessage;
    },
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
