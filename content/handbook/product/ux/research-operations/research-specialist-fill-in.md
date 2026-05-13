---
title: "UX Research Operations Coordinator を代理で務める方法"
description: "リクルートを最初から最後まで成功させるために必要な手順を詳述します"
upstream_path: /handbook/product/ux/research-operations/research-specialist-fill-in/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

UX Research Operations Coordinator の役割を担う場面があります。このページでは、リクルートを最初から最後まで成功させるために必要な「舞台裏」のすべての手順を詳述します。UX Research Operations Coordinator とどう連携するかに興味がありますか？ その情報は[こちら](/handbook/product/ux/experience-research/recruiting-participants/) で見つけられます。

## プロセス

### ステップ 1 - 自身が把握し、他者にも伝える

- UX Research Operations Coordinator は、プロジェクトの優先度、完了すべき作業、対応中に役立つリソースへのリンクを記載したカバレッジ Issue を UX Research プロジェクトに作成します。
- UX Research Operations Coordinator は、引き継ぐ必要のある進行中のリクルート Issue であなたを @ メンションします。Issue の状況と完了すべき作業を明確に説明します。
- UX Research Operations Coordinator は、これらの進行中の Issue にあなたをアサインするので、簡単に追跡できます。
- UX Research Operations Coordinator は、Open Recruitment Projects シートも共有し、サポートが必要なプロジェクトであなたをタグ付けします。
- 今後 X 日間および／または週間のリクルート問い合わせ先として、`#product` と `#ux` Slack チャネルで自己紹介します。
  - Slack でリクルートリクエストを上げようとする人がいたら、[リクルートリクエスト Issue を作成](/handbook/product/ux/experience-research/recruiting-participants/#opening-a-recruitment-request) し、追跡と可視性のためにあなたにアサインするよう促します。
  - コメントで引き継ぎを確認したら、Issue があなたに引き継がれたことを彼らに伝えます。
- UX Research Operations Coordinator の代理が複数人いる場合は、調整を容易にするため `#uxr_reops` Slack チャネルに必ず参加してください。
- UX Research Operations Coordinator が連続 7 営業日以上不在になる場合、彼らは Research Recruiting & Incentive Request Issue Template に対する MR を開き、代理を務める人物が新規 Issue に自動アサインされるようにします。

### ステップ 2 - 新規リクルートリクエストへの対応

***注: 行ったアクションとその結果を Issue で常に更新することを忘れないでください。***

- 希望のタイムラインを評価します。リクルートの SLA は条件によって最低 2 週間ですが、リクエストによってはもっと早く対応できる場合もあります。
  - 留意事項:
    - 「次の数日中にユーザーと話したい」と言われた場合、リクルートには最大 2 週間かかる可能性があることを伝えます。
    - リクルート条件が具体的であるほど（資格要件が多い、または必要な応募者数が多いほど）リクルートは難しくなり、時間がかかります。
      - 例: グローバル検索機能を使ったことのある 5 人のソフトウェア開発者を求めるリクエストは非常にシンプルで、素早くリクルートできるでしょう。最近 Ultimate にアップグレードした 100 人の Self-Managed 管理者を求めるリクエストは、より困難で時間がかかるでしょう。
- リクルート条件を評価し、誰を対象にリサーチしたいかを完全に理解できているかを確認します。条件にあいまいな点はありませんか？
  - 条件を以下のような数項目に絞り込めるまで質問します。例:
    - DevOps エンジニア
    - チームの環境構成を担当
    - 大企業（500 人以上）
    - GitLab または非 GitLab ユーザー
- Qualtrics スクリーナーをレビューします
  - 現在の質問が必要なスクリーニング条件を提供するかを判断します。そうでない場合は、リクルート Issue でフィードバックを提供し、スクリーナーが彼らの述べた条件に直接マッピングされるよう編集を提案します。
  - UX リサーチャーに支援を求めることも忘れないでください。彼らは PM および／またはプロダクトデザイナーが Qualtrics でスクリーナーをまとめるのを手伝います。
  - リサーチを依頼する人物が Qualtrics でスクリーナーを作成し、あなたをコントリビューターとして追加する責任があります。

### ステップ 3 - 以下のオプションから最適なリクルートチャネルを選ぶ

- **[Data warehouse の連絡先](/handbook/product/ux/experience-research/recruiting-participants/)**
  - エディタアクセスと SQL の知識が必要
  - GitLab SaaS ユーザー情報を含む。
  - アンケートの回答者を特定するために使用可能。
  - GitLab SaaS ユーザーの連絡先を抽出し、Qualtrics で通常のプロセスに従います。
- **Respondent.io:**
  - 迅速な対応が必要な場合や、参加者が必ずしも GitLab ユーザーである必要がない場合に最適。
  - 使用方法:
    - Respondent にログインし、リサーチを実施する人物のスクリーナーを使用してキャンペーンを構築・開始します。
    - 条件を再確認し、参加者を「失格」にする質問を正しく設定するよう注意してください。たとえば関連する質問で「Jira」を「必須選択」にすることで、Jira ユーザーのみを希望するように指定できます。これにより、他の回答を選んだ人を自動的に失格にします。これによって精査すべきスクリーナー回答の量が減り、時間を節約できます。また、リサーチャー以外の人にも、誰が調査参加資格を持つかが容易にわかります。
- **[UserTesting.com](/handbook/product/ux/experience-research/unmoderated-testing/)**
  - モデレーターなしユーザビリティテストに適する
  - パネルを活用して技術系ユーザーをリクルートできます
- **チームメンバーを活用してリクエストを社内共有:**
  - 使用方法:
    - #ux、#product、#whats_happening_at_gitlab などの Slack チャネルに投稿します。簡潔なコールトゥアクション、締切、投稿してほしいリンクを含めてください。
- **LinkedIn での [直接アウトリーチ](https://www.youtube.com/watch?v=rc2IX1e2sQ8&feature=youtu.be):**
  - 使用方法:
    - 求める条件で検索し、InMail クレジットを使って招待できます。
    - Recruiter ライセンスを持っていない場合、アクセスリクエストを開く必要があります。
  - 始め方は [このビデオ](https://youtu.be/rc2IX1e2sQ8) を参照してください
- **マーケティングニュースレター:**
  - ***注: SUS のような重要なリサーチのために予約してください。***
  - ニュースレターは毎月 10 日と 25 日に送信されます。
  - 使用方法:
    - アンケートをニュースレターに含めるリクエストを提出します。例 [Issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/4087) を参照してください。
    - Digital Marketing [プロジェクト](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues) で `newsletter 2020` を検索し、対象日の Issue を選びます。まだ Issue が開かれていない場合、最新の Issue を見つけ、次のニュースレターへのリクエストを尋ねるコメントをします。Issue を開いた人物を必ず @ メンションしてください。
- **Docs サイトバナー:**
  - [Docs サイト](https://docs.gitlab.com/) のバナーを使って、大規模なアンケートを宣伝することがあります。パネルや Data Warehouse でしか対応できなかったアンケートを素早く満たす軽量な方法です。
  - この方法でサンプリングする場合、考慮すべきバイアスがあります（Docs サイトを使っている人は通常、潜在的な障害に関する情報を探しています）。
  - Docs チームはリクエストを許可しないことを選択できます。通常、稼働まで 1 週間かかります。

### ステップ 4 - 参加者への支払い

- 参加者への支払いは、使用するリクルートチャネルによって異なります
  - **Respondent.io**
    - Respondent プラットフォーム内でユーザーに支払います。
    - プラットフォームには事前にクレジットがロードされているはずです。「approve」ボタンをクリックしてセッションに参加した人々に支払います。
    - 参加者が「attended」とマークされていないセッションがある場合、インタビュアーに早急にマークするか、no-show だったことを確認するよう促してください。これは、私たちのプラットフォームプロファイルの良好な評価を維持するため、迅速に行う必要があります。
  - **Tremendous**
    - この方法は現在、Respondent.io 経由でない全 UX リサーチ参加者への支払いに使用されています。
    - プラットフォームへのアクセスは制限されており、代理の UX リサーチャー向けに AR を開く必要があるかもしれません。
    - Send Rewards を選択します。
    - インセンティブを処理するキャンペーンに移動します。
    - 参加者のメールアドレスと名、USD でのリワード値を入力します。Tremendous は参加者の所在地に基づき、関連するリワードを自動的に提供します。
    - Add Recipient をクリックします。必要に応じてさらに追加することも、csv をアップロードすることもできます。
    - 支払い画面に進みます。
    - 支払い画面で Pay with Credit Balance を選択し、process をクリックします。
    - 参加者は当日中にインセンティブを受け取れるはずですが、処理には最大 48 時間かかる場合があります。

### UX Research Operations Coordinator への引き継ぎ

- お疲れさまでした！ UX Research Operations Coordinator が復帰し、引き継ぐ準備ができました。
- まだ開いているリクルート Issue を UX Research Operations Coordinator にアサインします。
- コメントで彼らを @ し、Issue の状況と残作業の更新を提供します。
- 全員が同じタイムゾーンにいるわけではないため、UX Research Operations Coordinator が復帰する前日にカバレッジ Issue を更新します（彼らがあなたより早く業務を開始する場合があります）。
- 必要に応じて、UX Research Operations Coordinator は、UX リサーチャーが新しいリサーチリクルートリクエストに自動的にアサインされないようにする新しい MR を開きます。

## リソース

- [UX Research チームの運営方法](/handbook/product/ux/experience-research/how-uxr-team-operates/)
- [リクルートケーススタディ](/handbook/product/ux/experience-research/recruiting-participants/#recruitment-case-study)
