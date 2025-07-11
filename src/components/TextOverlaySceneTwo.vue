<template>
  <div class="text-overlay">
    <p>いつまでも続く風景</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "TextOverlaySceneTwo",
  setup() {
    onMounted(() => {
      gsap.fromTo(
        ".text-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 10, delay: 1 } // 同様にぼんやり表示
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
  opacity: 0;
}
</style>
