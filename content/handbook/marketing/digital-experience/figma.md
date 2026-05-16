---
title: "Figma プロセス"
description: "このページの目的は、Figma に関するガイドラインを提示することです。"
upstream_path: /handbook/marketing/digital-experience/figma/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

このページの目的は、GitLab マーケティングチーム向けに Figma プロセスのガイドラインを提示することです。このページは、Figma でデザインを作成する人、Figma でデザインをレビューする人、Figma ファイルを受け取るエンジニアを対象としています。このページは Figma 入門ではありません。

## ファイル命名規則

**Figma マスタープロジェクト名:**

* `親ページ / 子ページ（ない場合は空欄）`
  * *`Solutions / DevSecOps`*
  * *`Pricing Page`*

**マスタープロジェクトファイル:**

* `親ページ / 子ページ / タイプまたはフェーズ / バージョン`
  * *`Solutions / DevSecOps / Wireframes / 1.0`*
  * *`Solutions / DevSecOps / Design / 1.0`*
  * *`Pricing Page / Mock / 1.0`*

**Figma ファイルページ:**

* ページ名は短く明確であるべきです
* エンジニアリングへの引き渡し準備が整ったページには、船のアイコンを付けるべきです:
  * 🚢 PAGE NAME 🚢

例: この例では、エンジニアリング準備が完了したページが上部に 🚢 アイコン付きでラベル付けされ、区切り線で他の作業中ページと分けられています。

![ヘッドレス CMS の図](/images/handbook/growth-marketing/figma-page-naming.png)

### バージョニング

* MVC（例: 1.0、1.1、1.2、2.0）を ENG の更新に合わせる

## READ:ME

適切な場合に READ:ME フレームを追加します。READ:ME を追加する理由には次のようなものがあります:

1. 明確化のために追加の根拠が必要であり、不要なフィードバックループを減らすため
1. 視覚的に表現できない機能の概要を示すため
1. 長い Issue や MR スレッドで行われた重要な意思決定を一覧化するため
1. 必要に応じて重要な Issue やドキュメントへリンクするため

[READ:ME テンプレート >](https://www.figma.com/file/9GzJNLpyzlFmiimnmEfyt7/README-Templates?node-id=0%3A1)

## フィードバックループ

* 可能な限り Issue や MR でフィードバックを残してください。
* 必要に応じて Figma フレームへリンクしてください（"link to selected frame" にチェック）
* Figma のコメント機能は適宜使用してください。「これはドキュメント化が必要な重要な質問なのか、それとも『この位置揃えがずれているけど意図的?』のような小さな手早い指摘なのか?」と自問してください。
* 別のユーザーが既存ファイル内のフレームを編集したい場合、編集するのではなく、既存のアートボードを複製（コピー＆ペースト）してください。これにより、後でロールバックしたり、以前のイテレーションのコンポーネントを再利用したい場合に備えて、さまざまなイテレーションを保持できます。

---
