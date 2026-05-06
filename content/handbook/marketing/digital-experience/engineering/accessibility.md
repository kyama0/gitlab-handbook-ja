---
title: アクセシビリティ
description: >-
  Digital Experience チームのアクセシビリティの定義
upstream_path: /handbook/marketing/digital-experience/engineering/accessibility/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-05-01T10:36:34Z"
translator: claude
stale: false
---

## about.gitlab.com 上のアクセシビリティ問題を表面化する

[マーケティングサイトリポジトリへ Issue を作成](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/issues/new?type=ISSUE)し、`dex-category::accessibility` ラベルを追加します。

## アクセシビリティ問題の解決

## 簡易対応（まずはここから）

> [Axe Devtools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) を実行した
>
> Google Lighthouse を実行した

## ブラウザー間のタブ移動に関する注記

異なるブラウザーは、ページ上のインタラクティブな要素（リンク、ボタン、フォーム入力など）をタブ移動する際に異なる動作をします。Chrome および Chromium ベースのブラウザーでは、`tab` キーで次のフォーカス可能な要素へ移動し、`shift + tab` でフォーカス可能な要素を 1 つ前へ戻ります。これはスクリーンリーダーをご利用の方を支援するためです。

Safari はデフォルトではタブナビゲーションを使用しません。ユーザーは Safari の設定に入り、タブナビゲーションを有効にするチェックボックスを有効にする必要があります。Mozilla は Mac OS のオペレーティングシステム設定に忠実なので、こちらも有効にする必要があります。

関連リソース:
https://stackoverflow.com/questions/52783375/anchor-with-href-not-taking-focus-in-safari-even-with-all-accessibility-keyboard
https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox

### タブ移動に関連するアクセシビリティの課題への取り組みのガイダンス

* `tabindex` を適切に設定する: ユーザーが `tab` キーを使用したときに要素がフォーカスを受け取る順序を指定するために `tabindex` 属性を使用できます。

* ARIA ロールを適切に使う: [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) ロールは、ウェブコンテンツを障害のある人にアクセシブルにする方法を提供します。要素のロールを定義するために使用でき、支援技術がそれとどのように対話するかを理解するのに役立ちます。

* 一貫したデザイン: 現在キーボードフォーカスを持っている要素を視覚的に示すように設計してください（例: 色やアウトラインを変える）。この視覚的な手がかりは、支援技術を使用している方だけでなく、_すべてのユーザーに役立ちます_。

## より包括的なテスト

Axe や Google Lighthouse のようなツールには限界があり、私たちにとっては良い出発点に過ぎません。AA 準拠を達成するには、MacOS で [VoiceOver](https://support.apple.com/en-ie/guide/voiceover/vo2682/mac) のようなスクリーンリーダー技術を使用して実際のウェブページでテストすることが必要です。

> 次のアクセシビリティスプレッドシートを実行: [https://docs.google.com/spreadsheets/d/1pCfGv8xHjY39Oeft37pGjgot_lg0_j3cSyty0H9njv8/edit#gid=0](s://docs.google.com/spreadsheets/d/1pCfGv8xHjY39Oeft37pGjgot_lg0_j3cSyty0H9njv8/)

ホームページでアクセシビリティをテストする例: [https://www.youtube.com/watch?v=jtVMFUQLJEE](https://www.youtube.com/watch?v=jtVMFUQLJEE)
