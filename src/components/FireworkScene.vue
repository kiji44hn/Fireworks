<template>
  <div class="firework-container relative">
    <!-- 花火の動画 -->
    <video
      ref="videoElement"
      autoplay
      playsinline
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/hanabi.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "FireworkScene",
  setup() {
    const videoElement = ref<HTMLVideoElement | null>(null);

    // コンポーネントの初期処理
    onMounted(() => {
      if (videoElement.value) {
        videoElement.value.currentTime = 0; // 再生位置をリセット
        videoElement.value.play().catch((error) => {
          console.warn("動画再生に失敗しました:", error);
        });
      }
    });

    return {
      videoElement,
    };
  },
});
</script>

<style scoped>
.firework-container {
  width: 100%;
  height: 100vh;
  background: black;
}
</style>
