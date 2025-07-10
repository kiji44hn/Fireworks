import React, { useEffect } from "react";
import { gsap } from "gsap";

const TextOverlay = () => {
  useEffect(() => {
    // GSAPによるフェードインアニメーション
    gsap.to(".text-overlay", { opacity: 1, duration: 2, delay: 1 });
  }, []);

  return (
    <div className="text-overlay-container flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="text-overlay opacity-0 text-center font-serif text-2xl sm:text-3xl text-gray-200 p-4">
        <p>願いを込めて</p>
        <p>いつまでも続く風景</p>
      </div>
    </div>
  );
};

export default TextOverlay;
