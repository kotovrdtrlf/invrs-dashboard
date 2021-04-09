<template>
  <Button class="p-button-outlined p-button-primary" :label="ticker" />
</template>

<script>
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  props: {
    ticker: String,
  },
};
</script>

<style scoped>
.p-button.p-button-outlined {
  color: var(--accent-color-green);
}

.p-button.p-button-outlined:enabled:hover {
  color: var(--accent-color-green);
}
.p-disabled,
.p-component:disabled {
  opacity: 1;
  background: var(--accent-color-green-transparent);
}
</style>