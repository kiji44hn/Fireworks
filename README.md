# Fireworks 🌌🎆

## プロジェクト概要
**Fireworks**は、日本の夏祭りの懐かしさと美しさをテーマにしたインタラクティブなデジタル体験です。夜空を彩る花火、静寂を感じる夜空、そして夏祭りの賑やかな情景を組み合わせることで、人々の心に響くひとときを提供します。

視覚的な芸術と感動的な音楽を融合させ、訪れる人々の心に刻まれる特別な物語を描き出します。

---

## 主な機能と特徴
- 🌌 **トップ**: あなたの体験がここからスタート。
- 🌠 **夜空のシーン**: 静かな夜空に散りばめられた星々が広がり、穏やかな雰囲気を作り出します。
- 🎇 **花火のシーン**: 大輪の花火が打ち上がり、夜空を鮮やかに彩るダイナミックなアニメーション。
- 🎎 **祭りのシーン**: 夏祭りの情景が、虫の音や川の流れと共に懐かしい風情を感じさせます。
- ✨ **メッセージのシーン**: メッセージが浮かび上がる演出で、最後に心温まるメッセージが表示されます。

---

## プレビュー画像
### 夜空のシーン
![Top](./path/to/preview-top.png)

### 夜空のシーン
![NightSkyScene](./path/to/preview-night-sky.png)

### 花火のシーン
![FireworkScene](./path/to/preview-fireworks.png)

### 夏祭りの情景
![MemoryScene](./path/to/preview-memory.png)

### メッセージシーン
![MessageScene1](./path/to/preview-message1.png)
![MessageScene2](./path/to/preview-message2.png)
![MessageScene3](./path/to/preview-message3.png)

---

## 使用技術
- **Vue.js**: コンポーネントベースのフレームワークで、動的なインターフェースを構築。
- **Three.js**: WebGLを活用した星や花火のリアルな表現。
- **GSAP**: スムーズなアニメーションを実現。
- **Tailwind CSS**: モダンでレスポンシブなデザインを提供。

---

## サウンドデザイン
- **音楽素材**:
  - 懐かしい風情 (和風・アジア): [甘茶の音楽工房](https://amachamusic.chagasi.com/)
  - 虫の音: [Springin](https://springin.org/)
  - 祭りの音: [Tairaya Komori](https://sound.jp/tairaya/)
  - 小川の流れ: [Tairaya Komori](https://sound.jp/tairaya/)

これらの音源を組み合わせることで、視覚と聴覚の調和を追求しました。

---

## インストールと使用方法
1. **リポジトリをクローン**:
```bash
git clone https://github.com/kiji44hn/Fireworks.git
```

## 必要な依存関係をインストール
プロジェクトディレクトリに移動し、依存関係をインストールします：

```bash
cd Fireworks
npm install
```

## ローカルサーバーで起動
ブラウザでhttp://localhost:3000にアクセスし、体験を楽しみましょう！:
```bash
npm run dev
```

## プロダクションビルド
本番環境用に最適化されたファイルをビルドします：

```bash
npm run build
```

## 📁 ディレクトリ構造

```
Fireworks/
├── blender/              # モデリング用ファイル
├── public/               # 静的ファイル
├── src/                  # ソースコード
│   ├── assets/           # 画像やアイコン
│   ├── components/       # Vueコンポーネント
├── videos/               # 動画ファイル/Premiere Proプロジェクトファイル
├── package.json          # プロジェクト設定と依存関係
└── vue.config.js        # Vue-Cli設定
```

## ✨ 特徴的なコンポーネント

- NightSkyScene.vue: 
- FireworkScene.vue: 
- MemoryScene.vue: 
- TextOverlaySceneOne.vue: 
- TextOverlaySceneTwo.vue: 
- FinalMessage.vue: 

## 経験と学び
このプロジェクトを通じて以下のスキルを強化しました:

- デザインと感性: テーマの調和を目指した視覚的設計。
- 技術的チャレンジ: Three.jsとGSAPによるダイナミックな表現の実現。
- 感動的な演出: 音楽とアニメーションによるユーザー体験の追求。

## クレジット

```
音楽: 甘茶の音楽工房 Springin Tairaya Komori
デザインと開発: あなた自身の情熱とスキルがこのプロジェクトの成功を支えました。👏
```

## 🖋️ 著者情報

- 名前: KA
- テーマ: 花火と祭りの体験演出
- **連絡先**: [kiji44hn](https://github.com/kiji44hn)

## 📜 ライセンス
このプロジェクトは [MIT License](./LICENSE) のもとで公開されています。

## メッセージ
「夜空に咲いた一瞬の光が、あなたの心に暖かい記憶を残しますように。」 このプロジェクトが、多くの人々に感動を届けられるよう願っています。 制作に込めた思いが、見る人々の心に光を届けますように。🌌✨