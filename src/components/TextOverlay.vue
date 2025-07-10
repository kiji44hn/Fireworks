<template>
  <div class="text-overlay">
    <p>願いを込めて</p>
    <p>いつまでも続く風景</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "TextOverlay",
  setup() {
    onMounted(() => {
      gsap.fromTo(
        ".text-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 1 }
      );
    });
  },
});
</script>

<style scoped>
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Noto Serif JP", serif;
  font-size: 2rem;
  color: #ffffff;
}
</style>
