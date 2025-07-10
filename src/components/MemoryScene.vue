<template>
  <div class="memory-container flex flex-col items-center gap-6 py-6">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      class="memory-image w-60 rounded-lg shadow-lg"
      alt="Memory Image"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "MemoryScene",
  setup() {
    const images = ref(["image1.png", "image2.png", "image3.png"]);

    onMounted(() => {
      gsap.fromTo(
        ".memory-image",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
      );
    });

    return {
      images,
    };
  },
});
</script>
