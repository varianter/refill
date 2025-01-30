<script>
export default {
  props: {
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
  max-height: 398px;
  height: v-bind(height);
  box-shadow:
    0.6px 0.7px 2.2px rgba(0, 0, 0, 0.024),
    1.4px 1.7px 5.3px rgba(0, 0, 0, 0.032),
    2.6px 3.1px 10px rgba(0, 0, 0, 0.038),
    4.7px 5.6px 17.9px rgba(0, 0, 0, 0.044),
    8.8px 10.4px 33.4px rgba(0, 0, 0, 0.053),
    21px 25px 80px rgba(0, 0, 0, 0.07);
  padding: var(--Padding-m);
  background-color: var(--background-primary);
  border-radius: 0.375rem;
}
</style>
