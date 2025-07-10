<template>
  <div class="text-overlay text-center absolute inset-0 flex flex-col items-center justify-center text-white text-2xl opacity-0">
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
