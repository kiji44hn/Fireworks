<template>
  <div class="memory-container">
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
    const images = ref(["/matsuri-hanabi.png"]);

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

<style scoped>
.memory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}
.memory-image {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
