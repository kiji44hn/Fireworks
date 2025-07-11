<template>
  <div class="firework-container relative">
    <video 
      autoplay
      loop
      playsinline 
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source
        src="/hanabi.mp4"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FireworkScene",
});
</script>

<style scoped>
.firework-container {
  width: 100%;
  height: 100vh;
}
</style>
