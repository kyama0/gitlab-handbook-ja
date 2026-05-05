---
stage: enablement
group: Tenant Scale
title: 'Cells: ダイアグラム'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/diagrams/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
---

Cells で使用されるダイアグラムは [draw.io](https://app.diagrams.net/) で作成されています。

## 既存ダイアグラムの編集

`.drawio.png` または `.drawio.svg` ファイルを **draw.io** に直接読み込みます。draw.io は以下の方法で使用できます:

- 推奨: [VS Code の draw.io 統合](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) を使用する。
- 良い: MacOS では `brew install drawio` でインストールするか、[draw.io デスクトップ](https://github.com/jgraph/drawio-desktop/releases) をダウンロードする。
- 良い: Linux では [draw.io デスクトップ](https://github.com/jgraph/drawio-desktop/releases) をダウンロードしてインストールする。
- 非推奨: [draw.io ウェブサイト](https://app.diagrams.net/) を使用してファイルを読み込みおよび保存する。

## ダイアグラムの作成

ファイルからダイアグラムを作成するには:

1. 既存のファイルをコピーしてリネームします。拡張子が `.drawio.png` または `.drawio.svg` であることを確認してください。
1. ダイアグラムを編集します。
1. ファイルを保存します。
1. `pngquant -f --ext .png *.drawio.png` を使用して画像を最適化し、サイズを 2〜3 倍削減します。

[draw.io デスクトップ](https://github.com/jgraph/drawio-desktop/releases) を使用してゼロからダイアグラムを作成するには:

1. **File > New > Create new diagram** で **Blank diagram** を選択します。
1. **File > Save As** で **Editable Bitmap .png** を選択し、`.drawio.png` 拡張子で保存します。
1. 画像品質を向上させるために、**File > Properties** で **Zoom** を **200%** に設定します。
1. 新しいズーム設定でファイルを保存するには、**File > Save** を選択します。
1. `pngquant -f --ext .png *.drawio.png` を使用して画像を最適化し、サイズを 2〜3 倍削減します。

**File > Export** 機能は使用しないでください。ダイアグラムは簡単に編集できるよう `.png` に埋め込む必要があります。
