<template>
  <div 
    id="app"
    class="w-screen h-screen bg-black overflow-hidden relative"
  >
    <!-- 星空 -->
    <SceneWrapper v-if="currentScene === 'nightSky'">
      <NightSkyScene />
    </SceneWrapper>
    
    <!-- 花火 -->
    <SceneWrapper v-if="currentScene === 'firework'">
      <FireworkScene />
    </SceneWrapper>
    
    <!-- 祭り画像 -->
    <SceneWrapper v-if="currentScene === 'memory'">
      <MemoryScene />
    </SceneWrapper>
    
    <!-- メッセージ -->
    <SceneWrapper v-if="currentScene === 'textOverlay'">
      <TextOverlay />
    </SceneWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import NightSkyScene from "./components/NightSkyScene.vue";
import FireworkScene from "./components/FireworkScene.vue";
import MemoryScene from "./components/MemoryScene.vue";
import TextOverlay from "./components/TextOverlay.vue";
import SceneWrapper from "./components/SceneWrapper.vue";

export default defineComponent({
  name: "App",
  components: {
    NightSkyScene,
    FireworkScene,
    MemoryScene,
    TextOverlay,
    SceneWrapper,
  },
  setup() {
    const currentScene = ref("nightSky");

    onMounted(() => {
      // シーン切り替えのタイミング制御
      setTimeout(() => currentScene.value = "firework", 5000); // 星空 → 花火
      setTimeout(() => currentScene.value = "memory", 10000); // 花火 → 祭り画像
      setTimeout(() => currentScene.value = "textOverlay", 15000); // 祭り画像 → メッセージ
    });

    return {
      currentScene,
    };
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
