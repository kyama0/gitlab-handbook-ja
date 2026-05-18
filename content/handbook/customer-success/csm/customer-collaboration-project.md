---
title: "CSM としての顧客コラボレーションプロジェクトの活用"
description: "Customer Success Manager が顧客データ、リクエスト、コラボレーションを管理するための顧客コラボレーションプロジェクトのベストプラクティスとセットアップガイド。"
upstream_path: /handbook/customer-success/csm/customer-collaboration-project/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: '2026-04-26T00:00:00Z'
translator: claude
stale: false
lastmod: "2026-02-23T20:55:06-06:00"
---

追加の CSM 関連ハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/) をご覧ください。

---

## 顧客コラボレーションプロジェクト

顧客コラボレーションプロジェクトは、ドッグフーディングの手段を通じて顧客と GitLab のコラボレーションとパートナーシップを促進します。関係するすべての当事者に透明性と説明責任を提供します。さらに、チームがドキュメントを継続的に交換し、チーム内の変更を追跡できるようにします。顧客コラボレーションプロジェクトは、通常、見込み顧客が Proof of Value（価値実証）が必要な段階に近づいたときに使用されます。

### 顧客コラボレーションプロジェクトの場所

顧客コラボレーションプロジェクトは、GitLab-com のサブグループ [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management) に配置されており、Sales と Customer Success チームのメンバーが顧客および見込み顧客とコラボレーションするためのプロジェクトを作成できます。

アクセスは GitLab.com の [timtams グループ (ID: 3174702)](https://gitlab.com/groups/timtams) のメンバーに付与されます。

プロジェクトはさらに地域ごとのサブグループに整理されています:

- [Western North America](https://gitlab.com/gitlab-com/account-management/western-north-america)
- [Eastern North America](https://gitlab.com/gitlab-com/account-management/eastern-north-america)
- [EMEA - Europe, the Middle East and Africa](https://gitlab.com/gitlab-com/account-management/emea)
- [APAC - Asia & Pacific Accounts](https://gitlab.com/gitlab-com/account-management/apac)
- [Commercial - Commercial Account Management](https://gitlab.com/gitlab-com/account-management/commercial)
- [Public-Sector](https://gitlab.com/gitlab-com/account-management/public-sector)

### 顧客コラボレーションプロジェクトのユースケース

- 顧客コラボレーションプロジェクトを包括するグループには、他の特別なプロジェクト（Proof of Value、バリューストリームアセスメント、顧客での異なるサブスクリプション）または自動化のための [Group アクセストークン](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html)（API キー）のためのスペースがあります。
- [アジェンダ Issue テンプレート](https://gitlab.com/gitlab-com/account-management/templates/collaboration/-/blob/master/.gitlab/issue_templates/Meeting%20Agenda.md) または[グループレベル](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/tree/master/.gitlab/issue_templates)で、ケイデンスやその他の顧客との会議のためのアジェンダ Issue。
- [@ メンション](https://docs.gitlab.com/ee/user/discussions/#mentions) で他の GitLab メンバーとコラボレーションしながら、顧客とのイニシアティブに関する会話を行う。
- [@ メンション](https://docs.gitlab.com/ee/user/discussions/#mentions) で GitLab コントリビューターに参加してもらい、イネーブルメントセッションの非同期計画を行う。
- [振り返り Issue 作成](https://gitlab.com/gitlab-org/async-retrospectives)を使った非同期レトロスペクティブ。
- デモや POV などを追跡する SA（ソリューションアーキテクト）の活動。
- アーキテクチャダイアグラムと履歴（git 履歴）。
- ガバナンスのための完全な履歴（git 履歴）を持つ、[Zendesk サポート](https://about.gitlab.com/support/managing-support-contacts/#managing-contacts)の[共有組織](https://about.gitlab.com/support/managing-support-contacts/#shared-organizations)の顧客によって管理されたメンバーのリスト。
- [TAM Issue トラッカー](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/tam-issue-tracking) 製品機能リクエストの追跡。
- 製品チームとのインタラクションと[顧客 Issue の優先順位付け](/handbook/product/product-processes/customer-issues-prioritization-framework/)。
- Issue 作成のための[パブリックページ](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/tree/master/public)。
- 顧客コラボレーションプロジェクトでロールを持たない顧客の他のユーザーが Issue を作成できるようにするための [ServiceDesk 機能](https://docs.gitlab.com/ee/user/project/service_desk/)。CSM は顧客に、コラボレーションプロジェクトは製品サポートとトラブルシューティングの問い合わせには使用されていないことを通知する必要があります。
- [LFS 用のコラボレーションプロジェクトの設定](https://docs.gitlab.com/ee/user/project/settings/index.html#configure-project-visibility-features-and-permissions)を使って、顧客から GitLab へ PDF、CSV で Service ping メトリクス、グラフィックス、利用状況メトリクスガイドを共有する。
- [LFS 用のコラボレーションプロジェクトの設定](https://docs.gitlab.com/ee/user/project/settings/index.html#configure-project-visibility-features-and-permissions)を使って、EBR やその他のミーティング録画を保存する。
- ミーティング議事録の保管。
- [GitLab サポートチーム](/handbook/support/)とそのアーキテクチャダイアグラムアプリが[インフラストラクチャダイアグラム](/handbook/support/workflows/looking_up_customer_technical_details/#architecture-diagram-and-customer-success-project)にアクセスできるようにする。
- GitLab の探索。顧客に Ultimate ティアのネームスペースへのアクセスを許可することで、顧客自身のインスタンスではアクセスできない使用方法を探索するのに役立ちます。また、Issue/Epic/ボードの使い方に触れ、これらの機能の使用を拡大することへの興味を引き出す可能性があります。
- [ワークフロー状態](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels-examples)としての[スコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)を使った Issue ボード。
- 以下の提供:
  - トレーニング推奨事項。
  - 重要なリンクとリソース。
- プリセールスアセットのユースケースは、このハンドブックページ「[Solutions Architecture コラボレーションプロジェクト](/handbook/solutions-architects/processes/collaboration-project/)」に記載されています。

### Customer Success Manager のための顧客コラボレーションプロジェクトのセットアップ

プロジェクトは可視性レベルをプライベートに設定して作成する必要があります。

#### プリセールスから顧客を受け取った場合の手順

1. コラボレーションプロジェクトがプリセールスで使用されていたかを SA または SAE に確認する。使用されていた場合は [account-management/pre-sales](https://gitlab.com/gitlab-com/account-management/pre-sales) にあるはずです。
2. 移行前に Issue を削除したいかを SAE と SA に確認する。
3. プロジェクトが存在する場合、[gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[セグメント] に顧客名のサブグループを作成する。
4. 既存のコラボレーションプロジェクトに移動する。
5. Settings > General > Advanced Settings を展開 > Transfer Project を選択し、プロジェクトを [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[セグメント]/[顧客グループ] に移動する。

#### 顧客コラボレーションプロジェクトが存在しない場合の手順

顧客コラボレーションプロジェクトテンプレートには、顧客とのコラボレーションプロジェクトを進めるために必要な Issue、ラベル、マイルストーン、ドキュメント、情報があらかじめ用意されています。

顧客のチームをプロジェクトに参加させ、顧客の成功と GitLab との関係のイネーブルメントに向けて共同作業を開始する必要があります。

1. 適切なサブグループ [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[セグメント] に顧客名のサブグループを作成する（可視性レベルはプライベートにする）。
2. このサブグループ [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[セグメント]/[顧客グループ] に移動する。
3. 「新しいプロジェクトを作成」をクリックする
4. 「テンプレートから作成」をクリックする
5. 上部のフィルター（例: Built-in、Instance、Group）で「Group」を選択する
6. [顧客コラボレーションプロジェクトテンプレート](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template) の隣の「テンプレートを使用」をクリックする
7. 新しいプロジェクトの名前の先頭に顧客名を付ける
8. 新しいプロジェクトの設定に移動し、プロジェクトアバターを顧客のロゴに変更する
9. [README](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/blob/master/README.md) ファイルに記入する — [角括弧] で囲まれたテキストがあるすべての箇所を適切な顧客情報に置き換えていることを確認する
   1. 重要: この README は顧客向けです。各セクションを徹底的に記入し、顧客のニーズと要件を深く理解していることを示す顧客向けの言葉を使用してください。
10. 顧客のチームを「Developer」ロールで顧客コラボレーションプロジェクトの直接メンバーとして招待する
11. 顧客のチームメンバーの一部が「Maintainer」ロールを持つべきかどうかを顧客と話し合い、ユーザーを自分たちで管理できるようにする。
12. プロジェクトと適用可能なすべてのラベルの新しい Issue を購読する。
13. コラボレーションプロジェクト内の機能リクエストとアジェンダの Issue テンプレートを調整する。その他の [Issue テンプレートはグループレベルにある](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/tree/master/.gitlab/issue_templates)。
14. 顧客にコラボレーションプロジェクトを紹介する。

#### 別の CSM から顧客を受け取った場合の手順

1. [README](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/blob/master/README.md) ファイルの内容を更新する。
2. プロジェクトの直接メンバーと設定を確認する。
3. プロジェクトと適用可能なすべてのラベルの新しい Issue を購読する。

#### 顧客コラボレーションプロジェクトの一般的なアクション

1. 顧客が Issue を開いた場合などに通知を受け取るために、[顧客コラボレーションプロジェクトの通知レベル](https://docs.gitlab.com/ee/user/profile/notifications.html#change-level-of-project-notifications)を[「Watching」または「Custom」](https://docs.gitlab.com/ee/user/profile/notifications.html#notification-levels)に設定する。
