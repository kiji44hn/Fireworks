<template>
  <div 
    ref="fireworkContainer"
    class="firework-container w-full h-full bg-gradient-to-b from-gray-900 to-black"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import * as THREE from "three";
import { gsap } from "gsap";

export default defineComponent({
  name: "FireworkScene",
  setup() {
    const fireworkContainer = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      const container = fireworkContainer.value!;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // 花火の粒子設定
      const geometry = new THREE.BufferGeometry();
      const particleCount = 300;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < positions.length; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // GSAPアニメーション
      gsap.to(particles.position, { y: 5, duration: 2 });
      gsap.to(particles.scale, {
        x: 3,
        y: 3,
        z: 3,
        duration: 1,
        delay: 2,
      });

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    });

    return {
      fireworkContainer,
    };
  },
});
</script>