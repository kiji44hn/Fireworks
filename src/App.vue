<template>
  <div 
    id="app"
    class="w-screen h-screen bg-black overflow-hidden relative"
  >
    <!-- FireworkSceneのアニメーションなし表示 -->
    <FireworkScene />
    
    <!-- MemorySceneのアニメーション付き表示 -->
    <SceneWrapper>
      <MemoryScene />
    </SceneWrapper>
    
    <!-- TextOverlayのアニメーション付き表示 -->
    <SceneWrapper>
      <TextOverlay />
    </SceneWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FireworkScene from "./components/FireworkScene.vue";
import MemoryScene from "./components/MemoryScene.vue";
import TextOverlay from "./components/TextOverlay.vue";
import SceneWrapper from "./components/SceneWrapper.vue"; // SceneWrapperを追加インポート

export default defineComponent({
  name: "App",
  components: {
    FireworkScene,
    MemoryScene,
    TextOverlay,
    SceneWrapper, // SceneWrapperを登録
  },
});
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  position: relative; /* シーンを重ねるために必要 */
}
</style>
