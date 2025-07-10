<template>
  <div class="w-screen h-screen bg-black overflow-hidden relative">
    <FireworkScene />
    <MemoryScene />
    <TextOverlay />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FireworkScene from "./components/FireworkScene.vue";
import MemoryScene from "./components/MemoryScene.vue";
import TextOverlay from "./components/TextOverlay.vue";

export default defineComponent({
  name: "App",
  components: {
      FireworkScene,
      MemoryScene,
      TextOverlay,
    },
});
</script>