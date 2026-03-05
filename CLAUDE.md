# CLAUDE.md

## プロジェクト概要

Satoki Ohashi のポートフォリオサイト。React + TypeScript で構築し、GitHub Pages でホスティング。

URL: https://yuki-1184.github.io/my_webpage

## 技術スタック

- **フレームワーク**: React 18 + TypeScript 4
- **UIライブラリ**: Chakra UI v2
- **スタイリング**: styled-components v5, Framer Motion v6
- **ルーティング**: React Router DOM v6
- **ビルドツール**: Create React App (react-scripts 5)
- **デプロイ**: GitHub Pages (gh-pages)
- **コード品質**: ESLint + Prettier

## ディレクトリ構成

```
src/
  components/   # 再利用可能なコンポーネント
  pages/        # ページコンポーネント
  constants/    # 定数・データ定義（プロジェクト一覧など）
  data/         # アイコン・ロゴデータ
  css/          # CSSファイル
  styles/       # グローバルスタイル
  Images/       # 画像・SVGアセット
public/         # 静的ファイル
```

## よく使うコマンド

```bash
npm start          # 開発サーバー起動 (localhost:3000)
npm run build      # 本番ビルド
npm run deploy     # GitHub Pages へデプロイ (build → gh-pages)
npm run format     # Prettier でコード整形
npm run format:check  # フォーマットチェックのみ
```

## コーディング規約

- コンポーネントは関数コンポーネント + TypeScript で記述
- スタイルは Chakra UI を優先し、必要に応じて styled-components を使用
- Prettier の設定は `.prettierrc.json` に従う
- ESLint の設定は `.eslintrc.js` に従う
