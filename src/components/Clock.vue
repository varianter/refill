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
      validator: (value) => ["days", "hours", "minutes"].includes(value),
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
      } else if (this.format === "hours") {
        return this.remainingTime.hours;
      } else if (this.format === "minutes") {
        return this.remainingTime.minutes;
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
      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      return { days, hours, minutes };
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
