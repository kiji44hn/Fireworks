<template>
  <!-- 画像を背景として使用 -->
  <div class="memory-container" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MemoryScene",
  setup() {
    const image = ref("/matsuri-hanabi.png"); // 背景用画像

    onMounted(() => {
      // `HTMLElement`型にキャスト
      const container = document.querySelector(".memory-container") as HTMLElement;
      if (container) {
        container.style.backgroundImage = `url(${image.value})`; // スタイルプロパティにアクセス可能
      }
    });

    return {
      image,
    };
  },
});
</script>

<style scoped>
.memory-container {
  width: 100%; /* 画面幅をいっぱいに */
  height: 100vh; /* 画面高さをいっぱいに */
  background-size: cover; /* 背景を縦横にいっぱい表示 */
  background-position: center; /* 中央に配置 */
  background-repeat: no-repeat; /* 画像を重複表示しない */
}
</style>
