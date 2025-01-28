<template>
  <span class="clock">{{ formattedTime }}</span>
</template>

<script>
export default {
  props: {
    targetTime: {
      type: [String, Number, Date],
      required: true,
    },
    format: {
      type: String,
      default: "hours",
      validator: (value) => ["days", "hours"].includes(value),
    },
  },
  data() {
    return {
      remainingTime: this.calculateRemainingTime(),
    };
  },
  computed: {
    formattedTime() {
      if (this.format === "days") {
        return this.remainingTime.days;
      } else {
        return this.remainingTime.hours;
      }
    },
  },
  methods: {
    calculateRemainingTime() {
      const now = new Date();
      const target = new Date(this.targetTime);
      const difference = target - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      return { days, hours };
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.remainingTime = this.calculateRemainingTime();
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="css">
.clock {
  font-size: var(--Font-size-H2);
  line-height: var(--Line-height-H2);
  padding: 1.5rem 0.75rem;
}
</style>
