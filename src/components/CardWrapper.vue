<script>
import colors from "../utils/colors.ts";
export default {
  props: {
    height: {
      type: String,
      required: false,
      default: "398px",
    },
    borderColor: String,
    required: false,
    default: "#0A0B0B",
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
  border: 2px solid v-bind(borderColor);
  padding: var(--Padding-m);
  border-radius: 0.375rem;

  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>
