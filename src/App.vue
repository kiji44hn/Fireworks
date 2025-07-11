<template>
  <div class="app-container">
    <!-- 再生ボタン用モーダル -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h1 class="modal-title">
          夜空に咲く光を、あなたと
        </h1>
        <button
          class="start-button"
          @click="startExperience"
        >
          さあ、共に輝こう
        </button>
      </div>
    </div>

    <!-- 順番に表示される各シーン -->
    <div v-else>
      <NightSkyScene v-if="currentScene === 'nightSky'" />
      <FireworkScene v-if="currentScene === 'firework'" />
      <MemoryScene v-if="currentScene === 'memory'" />
      <TextOverlaySceneOne v-if="currentScene === 'textOne'" />
      <TextOverlaySceneTwo v-if="currentScene === 'textTwo'" />
      <FinalMessage v-if="currentScene === 'finalMessage'" />
    </div>

    <audio
      ref="audioElement"
      src="/fireworks.mp3"
      loop
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NightSkyScene from "./components/NightSkyScene.vue";
import FireworkScene from "./components/FireworkScene.vue";
import MemoryScene from "./components/MemoryScene.vue";
import TextOverlaySceneOne from "./components/TextOverlaySceneOne.vue";
import TextOverlaySceneTwo from "./components/TextOverlaySceneTwo.vue";
import FinalMessage from "./components/FinalMessage.vue";

export default defineComponent({
  name: "App",
  components: {
    NightSkyScene,
    FireworkScene,
    MemoryScene,
    TextOverlaySceneOne,
    TextOverlaySceneTwo,
    FinalMessage,
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
      setTimeout(() => (currentScene.value = "memory"), 15000); // 15秒後に祭り
      setTimeout(() => (currentScene.value = "textOne"), 50000); // 50秒後にメッセージ
      setTimeout(() => (currentScene.value = "textTwo"), 65000); // 65秒後に2つ目のメッセージ
      setTimeout(() => (currentScene.value = "finalMessage"), 87000); // 87秒後に最終メッセージ
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
  background: radial-gradient(circle, rgba(30, 30, 30, 0.9), rgba(10, 10, 10, 0.9));
  z-index: 10;
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
}

.modal-title {
  font-size: 24px;
  font-family: "Playfair Display", serif;
  color: #333;
  margin-bottom: 20px;
}

.start-button {
  background: linear-gradient(90deg, rgba(255, 210, 90, 1), rgba(255, 150, 90, 1));
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.start-button:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.35);
}
</style>
