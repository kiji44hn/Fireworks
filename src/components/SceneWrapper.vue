<template>
  <transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot v-if="isVisible" />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "SceneWrapper",
  setup() {
    const isVisible = ref(true); // シーンの表示切り替え

    const beforeEnter = (el: Element) => {
      gsap.set(el, { opacity: 0 }); // 初期状態
    };

    const enter = (el: Element, done: () => void) => {
      gsap.to(el, { opacity: 1, duration: 0.5, onComplete: done }); // フェードイン
    };

    const leave = (el: Element, done: () => void) => {
      gsap.to(el, { opacity: 0, duration: 0.5, onComplete: done }); // フェードアウト
    };

    return { isVisible, beforeEnter, enter, leave };
  },
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease; /* スムーズなフェード効果 */
}
</style>
