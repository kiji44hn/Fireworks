import React from "react";
import "./App.css";

// 3つのコンポーネントをインポート
import FireworkScene from "./components/FireworkScene";
import MemoryScene from "./components/MemoryScene";
import TextOverlay from "./components/TextOverlay";

function App() {
  return (
    <div className="App">
      {/* 花火シーン */}
      <FireworkScene />

      {/* 思い出シーン */}
      <MemoryScene />

      {/* 詩的なテキストオーバーレイ */}
      <TextOverlay />
    </div>
  );
}

export default App;
