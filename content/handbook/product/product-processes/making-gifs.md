---
title: "GIF の作成"
upstream_path: /handbook/product/product-processes/making-gifs/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-11T23:51:39+00:00"
---

アニメーション GIF は、画像だけでは足りない機能をマーケティング目的で見せたり、機能をより詳細に説明したりするのに素晴らしい手段です。このページには、GIF を作成するプロセス全体に関するすべての情報が記載されています。

## 一般

> GIF フォーマットが人気なのは、どこでも動作し、面倒な UI がないからです。— [Kornel](https://kornel.ski/efficient-gifs#sec44)

GIF はある理由であちこちで使われていますが、上記の参照記事でも読めるように、コストが高いものでもあります。コストが高いというのは、GIF はすぐに大きなファイルになり、読み込みに時間がかかるという意味です。ファイルサイズと品質の境界線を歩く素晴らしい見た目の GIF を作成するには、いくつかのステップを考慮する必要があります。

## クイック＆イージー

「クイック＆イージー」のプロセスは、パフォーマンスがそれほど重要でない日常用途向けです。GIF を作成する最も効率的な方法です。

### ステップ 1

必要なものだけを表示します。すべてを含める必要はありません。これは単一のバグ／機能のひと垣間です。記録領域を小さく、専用に保ってください。

### ステップ 2

すぐに GIF を出力する専用アプリを使用します。[ツール - オールインワン](#all-in-one) を参照してください。

## エキスパート {#expert}

「エキスパート」のプロセスは、パフォーマンスが重要なケース向けです。少し時間がかかりますが、重要なブログ投稿、非常に大きな GIF、極めて詳細な GIF などの状況では報われます。

### ステップ 1 {#step-1}

必要なものだけを表示します。すべてを含める必要はありません。これは単一のバグ／機能のひと垣間です。記録領域を小さく、専用に保ってください。

### ステップ 2

> 私の GIF はすべて動画から始まります。— [Andy Orsow](https://web.archive.org/web/20241224005349/https://www.invisionapp.com/inside-design/7-tips-for-designing-awesome-gifs/)

プロフェッショナルな GIF を作成したいなら、動画ファイルから始めるとよいでしょう。これにより、必要に応じて出力を専門的にコントロールできます（例: モーションブラーは追加のプロらしさを加えられます）。動画ファイルはほとんどの場合、スクリーン録画ソフトから作成されます。詳細は [ツールセクション](#tools) を参照してください。

### ステップ 3

表示される色の量を減らします。これは事前に正確に何を撮影するかを考えるか、出力 GIF の出力色数を制限することで実現できます（[gifify](#gifify-cli) のオプションを参照）。結果が要件に合っているか確認しましょう。

もう一つのステップは、すべてのフレームを手動で検索して重複フレームを削除することです。これについての詳細は [こちら](https://web.archive.org/web/20241224005349/https://www.invisionapp.com/inside-design/7-tips-for-designing-awesome-gifs/) を参照してください。この追加ステップには多くの時間がかかる場合があります。何事にも言えることですが、「必要な場合にのみ使用してください」。

### ステップ 4

最低 15 fps を目指し、「compress」「speed」「resolution」設定で結果が十分に良いか確認してください。

## ツール {#tools}

画面録画や GIF 作成のためのツールには多くの異なるものがあります。使い慣れたツールを使ってください。ただし、覚えておいてください: 「ファイルサイズと品質の境界線を歩く素晴らしい見た目の GIF を作成するためには、[エキスパートのプロセス](#expert) の各ステップを一定程度コントロールできることが望ましいです」。

### オールインワン {#all-in-one}

このセクションではいくつかの点が重要です:

- スクリーン領域のサポート（画面の一部から GIF を作成できる機能）
- カーソルサポート（GIF にカーソルを含める機能）
- FPS サポート（出力 GIF のフレーム/秒を制御する機能。インタラクションの詳細を見せたい場合に重要）
- GIF のローカル保存（サーバーへのアップロードはあくまでオプションであるべき）

#### Gifox (macOS)

[Gifox](https://gifox.app/) はここでの絶対的なベストオプションです。有料アプリですが、合理的な価格（$14.99）です。すべての機能、ショートカット、そしてそれ以上をサポートしています。

その他言及に値するもの:

- [Kap](https://getkap.co/)（無料・オープンソース！）
- [Giphy capture](https://apps.apple.com/us/app/giphy-capture-the-gif-maker/id668208984?mt=12)（無料で素晴らしいオプション！）
- [Licecap](https://www.cockos.com/licecap/)（無料だが出力オプションが限定的、色が悪くなることもある）
- [ScreenToGif](https://www.screentogif.com/)（Windows、無料・オープンソース、強力なエディタ付き）

#### FFCast + FFmpeg (Linux)

[FFCast](https://github.com/ropery/FFcast) は、ffmpeg をラップしてスクリーン領域を録画またはキャプチャするコマンドラインツールです。オプションで gifify にパイプできます。

### スクリーン録画

#### Shift-Command-5 (macOS)

macOS Mojave 以降では、[Shift-Command (⌘)-5](https://support.apple.com/en-us/102618) を押して画面全体または画面の一部を録画するコントロールを表示できます。

#### QuickTime (macOS)

すべての Mac で QuickTime はすでにインストールされています。便利なスクリーン録画オプションを備えており、*編集* メニューには基本的なトリミングと分割機能まであります！[動画ファイル](#step-1) を作成するのに最適です。

その他言及に値するもの:

- [Screeny](https://apps.apple.com/us/app/screeny/id440991524?mt=12)（現時点では無料）
- [Gif Brewery](https://gifdb.com/blog/gifbrewery.html)（無料ではない）
- [ffscreencast](https://github.com/cytopia/ffscreencast)（CLI ツール、画面全体のみキャプチャ）
- [CloudApp](https://zight.com/)（無料、有料オプションあり）

#### Camstudio (Windows)

[Camstudio](https://camstudio.org/) は無料ツールです。まだテストされていません……

#### FFCast + FFmpeg (Linux)

[FFCast](https://github.com/ropery/FFcast) は、ffmpeg をラップしてスクリーン領域を録画またはキャプチャするコマンドラインツールです。オプションで gifify にパイプできます。

### 動画から GIF への変換

#### Gifify (CLI)

[Gifify](https://github.com/vvo/gifify) はコマンドラインツールで、動画ファイルを GIF に変換するための最も完全なオプションセットを提供します。最も制御の効く、おそらく最高の無料ツールです。

コマンド例:

`gifify input.mov -o output.gif --resize 960:-1 --compress 0 --colors 50 --speed 1.05 --fps 15`

その他言及に値するもの:

- [Drop to Gif](https://mortenjust.github.io/droptogif/)（macOS で GUI で変換するだけの素晴らしい無料オープンソースオプション！）
- [Screengif](https://github.com/dergachev/screengif)（gifify と類似の CLI）
- [Gif Brewery](https://gifdb.com/blog/gifbrewery.html)（macOS、無料ではない）

#### 動画をオンラインで GIF に変換

- [EZGif](https://ezgif.com/video-to-gif)（かなり良い結果といくつかの設定オプションを提供）
- [Giphy Gifmaker](https://giphy.com/create/gifmaker)（アカウントがあれば GIF を非公開にできます。そうでなければ「あなたのすべての GIF は GIPHY のもの」）
- [imgur Video to GIF](https://imgur.com/gallery/how-to-use-imgur-video-to-gif-tool-N1j3YAD)（何百もの人気の動画サイトから GIF を作成。Download を使って GIF または .gifv 形式のリンクを取得）

### スクリーンショットから GIF への変換

png ファイルの一連のスクリーンショットがある場合、[ImageMagick](/handbook/tools-and-tips/#imagemagick) を使って Gif ファイルに変換できます。ImageMagick は [画像のリサイズ](/handbook/tools-and-tips/#resizing-images) も可能です。

```console
convert -delay 50 -loop 0 *.png output.gif
```

Gif ファイルをソーシャルメディアにアップロードする際は、ソース画像の解像度が 2048x2048 より小さいことを確認してください。

### Gif のリサイズ

ソーシャルメディアへのアップロードやブログ投稿への統合のために、Gif の解像度やファイルサイズをリサイズする必要があるかもしれません。Gifsicle は 1 ステップで Gif のリサイズをサポートします。以下の例では Gif の幅を 2000px に変更します:

```console
gifsicle --resize 2000x original.gif > original_resized.gif
```

## 関連リンク

- [Product ハンドブック](/handbook/product/)
