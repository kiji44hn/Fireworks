import React, { useEffect } from "react";
import { gsap } from "gsap";

const MemoryScene = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // 画像が順番にスライドしながらフェードイン
    timeline.fromTo(
      ".memory-image",
      { opacity: 0, y: 50, scale: 0.8 }, // 初期: 透明で下に少し縮小
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3 } // アニメーション効果
    );
  }, []);

  return (
    <div className="memory-container flex flex-col items-center space-y-6">
      <img src="image1.png" alt="Memory 1" className="memory-image" />
      <img src="image2.png" alt="Memory 2" className="memory-image" />
      <img src="image3.png" alt="Memory 3" className="memory-image" />
    </div>
  );
};

export default MemoryScene;
