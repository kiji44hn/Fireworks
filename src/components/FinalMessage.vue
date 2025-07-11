<template>
  <div class="final-message">
    <p>あなたの未来に光が満ちますように</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "FinalMessage",
  setup() {
    onMounted(() => {
      gsap.fromTo(
        ".final-message",
        { opacity: 0 },
        { opacity: 1, duration: 10, delay: 1 } // ぼんやり浮かび上がる
      );
    });
  },
});
</script>

<style scoped>
.final-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Noto Serif JP", serif;
  font-size: 2.3rem;
  color: #ffffff;
  opacity: 0; /* 初期状態 */
}
</style>
