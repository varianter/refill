<script>
export default {
  props: {
    maxWidth: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: false,
      default: "398px",
    },
  },
};
</script>
<template>
  <div class="card_wrapper">
    <slot />
  </div>
</template>

<style lang="css">
.card_wrapper {
  max-width: v-bind(maxWidth);
  width: 100%;
  max-height: 398px;
  height: v-bind(height);
  padding: var(--Padding-m);
  background-color: var(--background-primary);
  border-radius: 0.375rem;
}
</style>
