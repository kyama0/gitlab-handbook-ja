---
title: Google Groups
description: Google Groups の利用および設定ガイド
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/google-workspace/google-groups/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

Google Groups は、メンバーに特定リソースへのアクセスを付与するため、またはメーリングリストとして使用します。Google Groups はアプリ自体ではないため Okta からは利用できませんが、[Google Groups ページ](https://groups.google.com/)に移動して、自分がメンバーであるすべてのグループを確認し、グループ設定を管理できます。

このページは、よく寄せられる質問の一部に対する解決策を提供することを目的としています。より詳細なサポートについては、[公式 Google Groups サポートページ](https://support.google.com/groups/)を参照してください。

## 目次

- [グループアクセスリクエスト](#group-access-requests)
- [グループ設定](#group-configuration)
  - [グループロール](#group-roles)
    - [グループオーナー](#group-owners)
    - [グループマネージャー](#group-managers)
    - [グループメンバー](#group-members)
  - [グループ情報](#group-information)
  - [グループアクセス設定](#group-access-settings)
    - [グループに参加できる人](#who-can-join-a-group)
- [追加サポート](#additional-support)

## グループアクセスリクエスト

次のリクエストには、[この AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=GoogleGroup_Request)を使用できます:

- 新しい Google Group の作成
- Google Group の更新
- Google Group の削除

## グループ設定

EUS が新しいグループを作成する、または既存グループを変更するには、作業を進める前に多くの詳細を知る必要があります。

### グループロール

グループを作成する前に、グループの各メンバーに割り当てられるロールを理解することが重要です。

#### グループオーナー

グループオーナーはグループを完全に制御できます。メンバーを自由に追加・削除でき、グループ自体を削除することもできます。

<div class="w3-panel w3-yellow">
  <h3>重要！</h3>
  <p>承認なしにグループが誤って削除されることを避けるため、通常はオーナーアクセスを割り当てません。</p>
</div>

#### グループマネージャー

グループマネージャーは通常、グループを削除するオプションを除き、オーナーと同じ権限を持ちます。

#### グループメンバー

グループ内の標準アクセスレベルです。メンバーは通常、メーリングリストとグループ会話に含まれますが、メンバーを追加または削除することはできません。

### グループ情報

新しいグループを作成する際は、使用する `Group name` と `Group email` を指定する必要があります。混乱を避けるため、メールアドレスはグループ名に関連するものにしてください。

この段階でグループの説明を追加することもできますが、任意です。

### グループアクセス設定

このセクションでは、誰がグループを閲覧、参加、さらには連絡できるかを決定します。ここでの設定ミスにより、グループのメールアドレスがインターネットに公開される可能性があります。

<html>
<head>
<style>
table, td {
  border: 1px solid grey;
  border-collapse: collapse;
}
</style>
</head>

<body>

<h3>アクセス設定</h3>

<table style="display: inline-block;">
  <tr>
    <td></td>
    <td>グループオーナー</td>
    <td>グループマネージャー</td>
    <td>グループメンバー</td>
    <td>組織全体</td>
    <td>外部</td>
  </tr>
  <tr>
    <td>グループオーナーに連絡できる人</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>会話を閲覧できる人</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  <tr>
    <td>投稿できる人</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>メンバーを閲覧できる人</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>メンバーを管理できる人<br>
    （追加、招待、承認）</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

</body>
</html>

これらの設定は、各グループの詳細な権限を微調整します。一般に、グループが社外からメールを受信する必要がある場合を除き、`External` の権限にチェックを入れることはおすすめしません。\
外部の人がメンバーを閲覧できるようにすること、またはグループ以外のメンバーがグループメンバーシップに関する変更を承認することを有効にすることはできない点に注意してください。

#### グループに参加できる人

新しいメンバーを追加するには、次のオプションがあります

- 組織内の誰でもリクエスト可能
  - すべてのリクエストにはグループマネージャーの承認が必要です
- 組織内の誰でも参加可能
  - 承認は不要
  - これは公開メーリングリストにのみ使用してください
- 招待されたユーザーのみ
  - これはデフォルトのオプションです
  - 新しいメンバーは明示的にグループへ招待される必要があります

## 追加サポート

Google Groups に関する追加のサポートについては、[メール](malto:it-help@gitlab.com)で直接お問い合わせいただくか、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）から IT に連絡してください。
