<template>
  <div class="app-container">
    <!-- 再生ボタン用モーダル -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h1 class="text-lg font-bold mb-4">ようこそ、KAの錬金工房へ</h1>
        <button
          @click="startExperience"
          class="start-button px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
        >
          体験を始める
        </button>
      </div>
    </div>

    <!-- 順番に表示される各シーン -->
    <div v-else>
      <NightSkyScene v-if="currentScene === 'nightSky'" />
      <FireworkScene v-if="currentScene === 'firework'" />
      <MemoryScene v-if="currentScene === 'memory'" />
      <TextOverlay v-if="currentScene === 'textOverlay'" />
    </div>

    <audio 
      ref="audioElement"
      src="/harunoyokan.mp3"
      loop
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NightSkyScene from "./components/NightSkyScene.vue";
import FireworkScene from "./components/FireworkScene.vue";
import MemoryScene from "./components/MemoryScene.vue";
import TextOverlay from "./components/TextOverlay.vue";

export default defineComponent({
  name: "App",
  components: {
    NightSkyScene,
    FireworkScene,
    MemoryScene,
    TextOverlay,
  },
  setup() {
    const showModal = ref(true);
    const currentScene = ref("nightSky");
    const audioElement = ref<HTMLAudioElement | null>(null);

    const startExperience = () => {
      showModal.value = false;

      // 音楽再生
      if (audioElement.value) {
        audioElement.value.play().catch((error) => {
          console.error("音楽の再生中にエラーが発生しました:", error);
        });
      }

      // シーン切り替えロジック
      setTimeout(() => (currentScene.value = "firework"), 10000); // 10秒後に花火
      setTimeout(() => (currentScene.value = "memory"), 20000); // 20秒後に祭り
      setTimeout(() => (currentScene.value = "textOverlay"), 30000); // 30秒後にメッセージ
    };

    return {
      showModal,
      currentScene,
      audioElement,
      startExperience,
    };
  },
});
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  background: #000;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.start-button {
  cursor: pointer;
  font-size: 16px;
}
</style>
