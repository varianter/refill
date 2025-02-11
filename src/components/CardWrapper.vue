<script>
import colors from "../utils/colors.ts";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
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
  <div class="relative">
    <div :id="`card${id}`" class="card_wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.relative {
  position: relative;
}

.card_wrapper,
.card_wrapper__hidden {
  border: 2px solid v-bind(borderColor);
  padding: var(--Padding-m);
  border-radius: 0.375rem;
  opacity: 1;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: end;

  transition: all 0.4s;
}

.card_wrapper {
  opacity: 1;
  position: relative;
}

.card_wrapper__hidden {
  opacity: 0;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}
</style>
