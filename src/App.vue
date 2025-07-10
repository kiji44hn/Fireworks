<template>
  <div id="app">
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

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  position: relative;
}
</style>
