---
title: "マーケティングサイトの承認プロセス"
upstream_path: /handbook/marketing/digital-experience/engineering/marketing-site-approval-process/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-01T15:53:53-04:00"
---

今後、マーケティングサイト（`about.gitlab.com`）に対するすべての変更は、Web サイトに変更をマージする前に承認プロセスに従う必要があります。

### エグゼクティブサマリー

GitLab マーケティングサイトの本番環境への変更について承認プロセスがないことは、現状では誰でもいつでもサイトに変更をライブで反映できるため、ビジネスにリスクをもたらします（リスクの詳細は下記の問題提起で説明）。マーケティングサイトに反映されるあらゆるコントリビューションに対してレビュープロセスを導入します。

### 問題提起

GitLab のマーケティングサイトはここ 2 年間で大幅な変更を経てきました。GitLab マーケティングチームは戦略的なユーザーフローについて協業し、ビジネス指標を推進する具体的なユーザージャーニーに取り組んでいます。そのため、マーケティングサイトへのすべてのコントリビューションが進行中の取り組みをサポートすることを保証するための承認とコントロールが必要です。現在はコントロールも権限も整備されておらず、ビジネスパフォーマンスにリスクをもたらしています。この状況におけるリスクは、アナリティクスデータの破損、ブランドメッセージの一貫性の欠如、SEO ランキングへのネガティブな影響、そして潜在的な法的問題という形で現れる可能性があります。

### 兆候

ピーク時には、GitLab のマーケティングサイトには 3500 以上のページが存在しました。これらのページの多くはほとんどトラフィックを受けず、作成以来更新も削除もされていませんでした。この肥大化の根本原因は、コンテンツがクロスファンクショナルなチームと連携・調整しながら意図を持って追加・修正されることを保証する承認の欠如によるアカウンタビリティの不足だと推察できます。

別の例として、社内の視点では理にかなっているように見えるものの、顧客中心の視点では潜在顧客を混乱させるような、よく似たページが複数存在するケースがあります。例: CI/CD ページ:

1. <https://about.gitlab.com/solutions/continuous-integration/>
1. <https://about.gitlab.com/topics/ci-cd/>
1. <https://about.gitlab.com/resources/ebook-single-app-cicd/>
1. <https://about.gitlab.com/webcast/mastering-ci-cd/>

ページの無秩序な増加の副産物として、Google Analytics から収集するデータの価値を希釈してしまうという意図しない影響が生じています。トラフィックが少なく、潜在顧客にほとんど価値を提供しないページが多数あるため、コアページに集中したデータを得ることが難しくなっています。

codeowners 機能は 2019 年に GitLab で立ち上げられ、この要件は当時の CMO のサポートのもとで認識されていましたが、アクション化されませんでした: https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/4085

### ゴール

コントロールと承認を導入する目的は、GitLab マーケティングサイト（`about.gitlab.com`、ただし `handbook.gitlab.com/*` や `about.gitlab.com/direction/*` を除く）へのすべての変更が、GitLab マーケティングチームの定義された目的をサポートすることを保証することです。プロダクトチームと同様に、適切な人物がすべての MR を本番環境に投入する前に承認する形で運用します。

### 仮説

承認プロセスは、未承認の変更が本番環境にライブ反映されることで進行中のイニシアチブが妨げられるリスクを排除しつつ、マーケティングサイトの一貫性を高めます。また、承認プロセスは可視性と協業を高め、GitLab マーケティングサイトの改善を目指す人々に対して顧客中心かつ協調的な取り組みを提供します。

### 戦略

[GitLab の everyone can contribute ミッション](/handbook/company/mission/#mission)を損なうことは避けたいと考えています。私たちの戦略は、最小限の承認プロセスを実装することです。現在は MR が本番環境に直接ライブ反映されますが、この変更により、コントリビューションは AB テスト提案（Issue）の形をとるか、本番環境にマージされる前に MR がレビューされる形になります。

Digital Experience チームは AB テスト提案用のリポジトリとしてプロジェクトをセットアップしました: https://gitlab.com/gitlab-com/marketing/digital-experience/ab-testing。誰でも AB テスト Issue テンプレート（テンプレート作成中）を使って Issue でコントリビュートできます。

すべてが AB テスト提案である必要はありません。引き続きハンドブックで定義されているように MR を優先します: [すべてはマージリクエストから始まる](/handbook/communication/#everything-starts-with-a-merge-request)。

承認フローは、軽微な変更から大規模な変更まで 4 段階あります。目標は、Buyer Experience リポジトリや www-gitlab-com リポジトリ内の主要マーケティングページに変更がライブ反映される前に、必ず GitLab Digital Experience チームのメンバーが MR をレビューすることです。

#### 承認レベル

1. **Level 01 - 軽微な変更**
    1. ラベル: `dex-approval::1-minor`
    1. *変更タイプの例:* 誤字やコンテンツの変更。
        1. Digital Experience チームの誰でも承認とマージが可能。
        1. Digital Experience チームによって承認されると、MR 作成者がマージできます。
    1. *変更タイプの例:* /customers フィルターが間違った結果を表示している。
        1. Digital Experience チームの誰でも承認とマージが可能。
        1. Digital Experience チームによって承認されると、MR 作成者がマージできます。
1. **Level 02 - 標準的な変更**
    1. ラベル: `dex-approval::2-standard`
    1. *変更タイプの例:* ページ上のコンポーネントの並び替え。
        1. Digital Experience チームが承認すると、Digital Experience チームのメンバーがマージできます。
        1. Digital Experience チームのメンバーは、自分のマネージャーに情報を共有しておくべきです。
        1. Director of Digital Experience とアライメントを取るかどうかはマネージャーの裁量です。
    1. *変更タイプの例:* 新しいページの追加。
        1. Digital Experience のマネージャーが承認とマージが可能。
        1. マネージャーは Director, Digital Experience とアライメントを取るべきです。
1. **Level 03 - ビジネスインパクトのある変更**
    1. ラベル: `dex-approval::3-key-page`
    1. *変更タイプの例:* ナビゲーションの変更
        1. Digital Experience の Director とマネージャーがアライメントを取る必要があります。
        1. Digital Experience のマネージャーが承認とマージが可能。
    1. *変更タイプの例:* トラフィックの主要ドライバーやビジネス目標などへの変更（ホームページ、料金ページ、Why GitLab）。
        1. Director, Digital Experience が承認とマージが可能。
        1. Director, Digital Experience は、すべての主要変更についてマーケティングリーダーシップに情報を共有します。
1. **Level 04 - 法務上の変更**
    1. ラベル: `dex-approval::4-legal`
    1. *変更タイプの例:* 会社情報、取締役会／取締役情報などへのあらゆる変更。
        1. Legal と Director of Digital Experience の承認が必須。
    1. *変更タイプの例:* サインアップワークフローへの変更、または法務関連のフッター／リンクの変更・省略。
        1. Legal と Director of Digital Experience の承認が必須。

MR がレビュー可能な状態になったら、本番環境にマージするには上記の順序で承認が行われる必要があります。

マーケティングサイト（about.gitlab.com から /handbook を除いたもの）のすべてのページがこの新しい承認プロセスの要件の対象となります。

### Step 1: この MR では何が変わりますか?

変更内容を説明し、関連する Issue へリンクしてください。

### Step 2: トリアージのための適切なラベルを追加する

MR には自動的に `dex-approval::2-standard` が適用されますが、上記の[承認レベル](#approval-levels)に基づいて以下のいずれかに更新してください。

1. **dex-approval::1-minor**
1. **dex-approval::2-standard**
1. **dex-approval::3-key-page**
1. **dex-approval::4-legal**

### Step 3: レビューのために適切な人物をタグ付けする

使用したラベルに応じて、この MR の `Reviewer` として以下の人物をタグ付けできます:

1. **Level 1**: [Digital Experience チーム](/handbook/marketing/digital-experience/#groups-metrics--team-members)の任意のメンバー
1. **Level 2**: [Digital Experience チーム](/handbook/marketing/digital-experience/#groups-metrics--team-members)の任意のメンバー
1. **Level 3**: コメントで `@gitlab-com/marketing/digital-experience` をピングします。これは `@gitlab-com/marketing/digital-experience` を使って [Digital Experience リーダーシップチーム](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/group_members?with_inherited_permissions=exclude)をタグ付けし、彼らがレビューできます。迷った場合は、`@mpreuss` をレビュアーとしてタグ付けしてください。
1. **Level 4**: 法務承認が必要です。`@mpreuss` をタグ付けすれば、彼が法務チームを巻き込みます。

サポート関連ページへの変更については、レビューのために `@jcolyer` をタグ付けしてください。
