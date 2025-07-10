import * as THREE from "three";
import { useEffect } from "react";
import { gsap } from "gsap";

const FireworkScene = () => {
  useEffect(() => {
    // シーンとカメラの初期化
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000022); // 夜空の背景色

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 粒子のジオメトリとマテリアル
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(300); // 300個の位置データ (100粒子 * x, y, z)

    for (let i = 0; i < positions.length; i++) {
      // ランダムな値を設定しつつ、NaNチェックを追加
      const value = (Math.random() - 0.5) * 10;
      positions[i] = isNaN(value) ? 0 : value; // NaNを0に置き換える
    }

    // 位置データをジオメトリに登録
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // BoundingBoxとBoundingSphereを計算（安全対策）
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    const material = new THREE.PointsMaterial({
      color: 0xffffff, // 初期の白い粒子
      size: 0.2,
      transparent: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // アニメーション: 打ち上げ
    gsap.to(particles.position, { y: 5, duration: 2 });

    // 爆発エフェクト
    gsap.to(particles.scale, { x: 3, y: 3, z: 3, duration: 1, delay: 2 });
    gsap.to(particles.material, {
      opacity: 0,
      duration: 1,
      delay: 2.5,
      onComplete: () => scene.remove(particles),
    });

    // 動的背景の星を追加
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(1000);

    for (let i = 0; i < starPositions.length; i++) {
      const value = (Math.random() - 0.5) * 100;
      starPositions[i] = isNaN(value) ? 0 : value; // NaNをチェックし置き換え
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 明滅効果を追加
    gsap.to(stars.material, {
      opacity: 0.7,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });

    // レンダリングループ
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // ウィンドウリサイズ対応
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // クリーンアップ処理
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null; // このコンポーネントはキャンバスを生成するだけ
};

export default FireworkScene;
