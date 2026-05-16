---
title: "OneTrust Cookie 同意の実装"
upstream_path: /handbook/marketing/digital-experience/engineering/onetrust-cookie-consent/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-08T16:59:33-05:00"
---

## なぜ OneTrust なのか?

Digital Experience チームは、Cookie 同意のツールとして [OneTrust](https://www.onetrust.com/products/cookie-consent/) を使用しています。

この実装は具体的には `about.gitlab.com` で行われていますが、トップレベルの `gitlab.com` ドメインに追加されれば、すべてのサブドメインに伝播します。これにより、いずれかの GitLab ドメインの訪問者は、すべての GitLab ツールにわたって 1 度だけ Cookie の設定を行えるようになります。

## OneTrust ツール

OneTrust 内では、さまざまなコントロールにアクセスできます:

- 各地域における同意・拒否の比率を示すダッシュボード
- すべての Cookie のカテゴライズ（例: Functional vs Performance Cookie）
- GitLab Web サイトの `<head>` に配置すべきテストスクリプトと本番スクリプト
- バナーとモーダルのデザイン（ボタンの色、ロゴ）

OneTrust ツールへのアクセスをリクエストするには、Slack の #mktgops に連絡してください。なお、地域や同意のタイプは法務レビューなしには変更できません。

## UX

モーダルとバナーの見た目は現在 OneTrust 内で管理されています。色やロゴのオプションに加え、Web ページに常時表示するボタン（`about.gitlab.com` フッターの Cookie Settings ボタンなど）の追加方法もあります。あるいは、すべてのページに常時表示できるデフォルトの OneTrust ボタン（左下隅の青いチェックマーク）もあります。

注意: 特定の地域でバナーを表示する必要があり、その地域の Cookie をデフォルトで「オフ」に設定する必要があるという法的要件があります。

UX やその他の設定への変更は、_OneTrust > Cookie Compliance > Scripts > gitlab.com > Publish_ から OneTrust 内で公開する必要があります。変更が反映されるまで最大 4 時間かかることがあります。Publish をクリックした後は、すでに閉じられた Cookie 同意バナーを再度トリガーするオプションもあります。Digital Experience UX チームのレビューなしに、バナーやモーダルのデザインを変更しないでください。

## 実装

OneTrust は、Web ページの `<head>` に `<script>` タグで実装します。同意は他のスクリプトがロードされて Cookie を設定する前に必要なので、他のスクリプトより上に配置します。

### テストスクリプト

OneTrust はステージング環境で使用するテストスクリプトを提供しています:

```js
<script type="text/javascript" src="https://cdn.cookielaw.org/consent/{{ID}}-test/OtAutoBlock.js" >
</script>

<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="{{ID}}-test" >
</script>

<script type="text/javascript">
  function OptanonWrapper() { }
</script>
```

`{{ID}}` は GitLab 固有のドメイン ID に置き換える必要があります（_OneTrust > Cookie Compliance > Scripts > gitlab.com_ で確認できます）。

### 本番スクリプト

ライブページで上記のテストスクリプトの代わりに使用するもの:

```js
<script type="text/javascript" src="https://cdn.cookielaw.org/consent/{{ID}}/OtAutoBlock.js" >
</script>

<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="{{ID}}" >
</script>

<script type="text/javascript">
  function OptanonWrapper() { }
</script>
```

ここでも `{{ID}}` は GitLab 固有のドメイン ID に置き換える必要があります（_OneTrust > Cookie Compliance > Scripts > gitlab.com_ で確認できます）。

### フッターへのボタン追加

ユーザーが Cookie を再設定するためのオプションを常に提供すべきです。これは、OneTrust のデフォルト（すべてのページに浮動する青いチェックマークボタン）を使うか、そのチェックマークを無効にして、以下のようにフッターにリンクを追加することで実現できます:

```html
<button id="ot-sdk-btn" class="ot-sdk-show-settings">
  Cookie Settings
</button>
```

このボタンは、必要に応じてカスタム CSS でスタイル指定できます。
