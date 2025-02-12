<script>
import colors from "../utils/colors.ts";
import Column from "../utils/getColumm.ts";
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
    borderColor: {
      type: String,
      required: false,
      default: "#0A0B0B",
    },
    span: {
      type: Number,
      required: false,
      default: 1,
    },
    column: {
      type: Column,
    },
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
  grid-row: span v-bind(span);
  grid-column: v-bind(column);

  @media (max-width: 1300px) {
    grid-column: unset;
    grid-row: unset;
  }
}

.card_wrapper,
.card_wrapper__hidden {
  border: 2px solid v-bind(borderColor);
  padding: var(--Padding-m);
  border-radius: 0.375rem;
  opacity: 1;
  height: 100%;
  box-sizing: border-box;
  box-shadow:
    0.6px 0.7px 2.2px rgba(0, 0, 0, 0.024),
    1.4px 1.7px 5.3px rgba(0, 0, 0, 0.032),
    2.6px 3.1px 10px rgba(0, 0, 0, 0.038),
    4.7px 5.6px 17.9px rgba(0, 0, 0, 0.044),
    8.8px 10.4px 33.4px rgba(0, 0, 0, 0.053),
    21px 25px 80px rgba(0, 0, 0, 0.07);

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
