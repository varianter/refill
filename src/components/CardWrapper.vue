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
  border: 1px solid v-bind(borderColor, "#0A0B0B");
  padding: var(--Padding-m);
  border-radius: 0.375rem;
}
</style>
