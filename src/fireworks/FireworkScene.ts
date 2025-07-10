import * as THREE from 'three';
import { gsap } from 'gsap';

const FireworkScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(100 * 3); // 100個の粒子
  for (let i = 0; i < positions.length; i++) {
    positions[i] = Math.random() * 2 - 1; // ランダムな位置
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 0.1,
    color: new THREE.Color(Math.random() * 0xffffff),
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  camera.position.z = 5;

  // 打ち上げ
  gsap.to(points.position, { y: 5, duration: 2 });

  // 爆発
  gsap.to(points.scale, {
    x: 2, y: 2, z: 2, duration: 1, delay: 2,
    onComplete: () => {
      scene.remove(points); // 削除処理を実行
      return; // void型として明示的に何も返さない
    },
  });

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};

export default FireworkScene;
