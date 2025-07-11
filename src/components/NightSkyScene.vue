<template>
  <div 
    ref="nightskyContainer"
    class="nightsky-container"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import * as THREE from "three";

export default defineComponent({
  name: "NightSkyScene",
  setup() {
    const nightskyContainer = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      const container = nightskyContainer.value!;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 20; // カメラの調整で星全体を確認しやすく

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // 星々を小さな丸で表現
      const geometry = new THREE.BufferGeometry();
      const particleCount = 1000; // 星の数を増やして密度を高める
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100; // X座標をランダム化
        positions[i * 3 + 1] = Math.random() * -50; // Y座標（下から上へ）
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z座標をランダム化
        sizes[i] = Math.random() * 0.5 + 0.2; // 星をより小さく
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1, // 星の大きさを小さく統一
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // 下から上に移動させるアニメーション
      const animateParticles = () => {
        const positions = geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += 0.05; // ゆっくりと上昇

          // 上端を越えたら下端に戻す
          if (positions[i * 3 + 1] > 50) {
            positions[i * 3] = (Math.random() - 0.5) * 100; // 新たなX座標
            positions[i * 3 + 1] = Math.random() * -50; // 新たなY座標
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // 新たなZ座標
          }
        }
        geometry.attributes.position.needsUpdate = true; // 更新を通知
      };

      // レンダリングループ
      const animate = () => {
        animateParticles(); // 星のアニメーションを適用
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();

      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    });

    return { nightskyContainer };
  },
});
</script>

<style scoped>
.nightsky-container {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, #111, #000); /* 優しい背景色 */
}
</style>
