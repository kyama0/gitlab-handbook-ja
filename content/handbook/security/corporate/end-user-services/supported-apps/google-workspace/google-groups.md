---
title: Google Groups
description: Google Groups の使用および設定ガイド
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/google-workspace/google-groups/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T10:30:13+09:00"
translator: claude
stale: false
lastmod: "2026-07-08T14:46:05-04:00"
---

Google Groups は、メンバーに特定のリソースへのアクセス権を付与したり、メーリングリストとして使用されます。Google Groups はそれ自体がアプリではないため、Okta 経由では利用できませんが、[Google Groups ページ](https://groups.google.com/) に移動することで、所属しているすべてのグループを表示し、グループ設定を管理することができます。

このページは、これまでに受けた最もよくある質問のいくつかへの解決策を提供することを目的としています。より詳細なサポートについては、[公式 Google Groups サポートページ](https://support.google.com/groups/) をご覧ください。

## 目次

- [グループアクセスリクエスト](#group-access-requests)
- [グループ設定](#group-configuration)
  - [グループの役割](#group-roles)
    - [グループオーナー](#group-owners)
    - [グループマネージャー](#group-managers)
    - [グループメンバー](#group-members)
  - [グループ情報](#group-information)
  - [グループアクセス設定](#group-access-settings)
    - [グループに参加できる人](#who-can-join-a-group)
- [追加サポート](#additional-support)

## グループアクセスリクエスト {#group-access-requests}

以下のリクエストには、[こちらの AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=GoogleGroup_Request) を使用できます:

- 新しい Google Group を作成する
- Google Group を更新する
- Google Group を削除する

## グループ設定 {#group-configuration}

EUS が新しいグループを作成したり、既存のグループを変更するには、進める前にいくつかの詳細を知っておく必要があります。

### グループの役割 {#group-roles}

グループを作成する前に、グループの各メンバーに割り当てることができる役割を理解しておくことが重要です。

#### グループオーナー {#group-owners}

グループオーナーは、グループに対して完全な制御を持っています。自由にメンバーを追加・削除でき、さらにグループ自体を削除することもできます。

<div class="w3-panel w3-yellow">
  <h3>重要！</h3>
  <p>承認なしにグループが誤って削除されるのを避けるため、通常はオーナーアクセスを割り当てません。</p>
</div>

#### グループマネージャー {#group-managers}

グループマネージャーは通常、オーナーと同じ権限を持ちますが、グループを削除するオプションはありません。

#### グループメンバー {#group-members}

グループ内の標準的なアクセスレベルです。メンバーは通常、メーリングリストやグループの会話に含まれますが、メンバーを追加または削除することはできません。

### グループ情報 {#group-information}

新しいグループを作成する際、使用したい `Group name` と `Group email` を指定する必要があります。混乱を避けるため、メールアドレスはグループ名に関連したものにする必要があります。

この段階で、グループの説明を追加することもできますが、これはオプションです。

### グループアクセス設定 {#group-access-settings}

このセクションは、グループを誰が見ることができるか、参加できるか、さらには連絡できるかを規定します。ここでの誤った設定は、グループのメールアドレスをインターネットに公開してしまう可能性があります。

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
    <td>会話を表示できる人</td>
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
    <td>メンバーを表示できる人</td>
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

これらの設定は、各グループの詳細な権限を細かく調整します。一般的に、グループが特に社外からのメールを受信する必要がない限り、`External` の権限はチェックしないことを推奨します。\
外部の人にメンバーを表示できるようにすることや、グループメンバー以外がグループメンバーシップに関する変更を承認することはできない点に注意してください。

#### グループに参加できる人 {#who-can-join-a-group}

新しいメンバーを追加するには、以下のオプションがあります

- 組織内の誰でもリクエストできる
  - リクエストにはグループマネージャーの承認が必要
- 組織内の誰でも参加できる
  - 承認は不要
  - これは公開メーリングリストにのみ使用すべきです
- 招待されたユーザーのみ
  - これがデフォルトのオプションです
  - 新しいメンバーは明示的にグループに招待される必要があります

## 追加サポート

Google Groups に関連する追加サポートについては、[メール](malto:it-help@gitlab.com)で直接お問い合わせいただくか、Slack の Compass app（上部検索バーに「Compass」と入力して見つけます）経由で IT にお問い合わせください。
