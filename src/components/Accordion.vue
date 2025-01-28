<script>
import { ref } from "vue";
import Divider from "./Divider.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    Divider,
  },
  setup(props) {
    const isOpen = ref(true);
    const accordionId = `accordion${props.id}`;
    const sectionId = `section${props.id}`;

    const returnTitleClass = () => {
      return isOpen.value ? "title title_open" : "title";
    };

    const returnAccordionClass = () => {
      return isOpen.value ? "accordion_open" : "accordion_closed";
    };

    const handleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      accordionId,
      sectionId,
      returnTitleClass,
      returnAccordionClass,
      handleOpen,
    };
  },
};
</script>

<template>
  <div class="accordion">
    <div class="accordion__heading">
      <h2>
        <button :class="returnTitleClass()" @click="handleOpen" type="button" :aria-expanded="isOpen"
          :aria-controls="sectionId" :id="accordionId">
          {{ title }}
        </button>
      </h2>
      <p class="accordion__time">{{ startTime }}-{{ endTime }}</p>
    </div>
    <Divider />
    <div :class="returnAccordionClass()" :id="sectionId" :aria-labelledby="accordionId">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.accordion {
  max-width: 1410px;
  width: 100%;
  margin: auto;
}

.accordion__heading {
  padding: var(--Padding-m) var(--Padding-s) 0 var(--Padding-s);
}

.title {
  width: 100%;
  padding: 0;
  border: none;
  background-color: inherit;
  color: var(--text-primary);
  font-size: var(--Font-size-H5);

  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
}

.title::after {
  display: inline-block;
  -webkit-mask: url("/assets/icons/caretDown.svg") no-repeat center;
  -webkit-mask-size: cover;
  mask: url("/assets/icons/caretDown.svg") no-repeat center;
  mask-size: cover;

  width: 24px;
  height: 24px;
  content: "";

  background-color: white;

  transition: rotate 0.3s;
}

.title_open::after {
  rotate: -180deg;
}

.accordion__time {
  font-size: var(--Font-size-Body-Small);
  line-height: var(--Line-height-Body-Small);
  font-weight: 300;
}

.accordion_open {
  height: fit-content;
  width: 100%;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accordion_closed {
  display: none;
}
</style>
