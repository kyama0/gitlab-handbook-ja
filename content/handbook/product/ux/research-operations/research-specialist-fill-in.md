---
title: "How to fill in for a UX Research Operations Coordinator"
description: "リクルートを最初から最後まで成功させるために必要な手順を詳述します"
upstream_path: /handbook/product/ux/research-operations/research-specialist-fill-in/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
lastmod: "2026-06-15T07:58:19-05:00"
translated_at: "2026-06-15T14:00:00Z"
translator: claude
stale: false
---

UX Research Operations Coordinator の役割を担う場面があります。このページでは、リクルートを最初から最後まで成功させるために必要な「舞台裏」のすべての手順を詳述します。UX Research Operations Coordinator とどう連携するかに興味がありますか？ その情報は[こちら](/handbook/product/ux/experience-research/recruiting-participants/)で見つけられます。

## プロセス

### ステップ 1 - 自分が慣れて、他の人に伝える

- UX Research Operations Coordinator は、UX Research プロジェクトでカバレッジ Issue を作成し、プロジェクトの優先度、必要な作業、不在中に役立つリソースへのリンクをリストアップします。
- UX Research Operations Coordinator は、あなたが引き継ぐ必要のある進行中のリクルート Issue であなたを @ メンションします。Issue の状況と完了させる必要があることを明確に説明してくれます。
- UX Research Operations Coordinator は、これらの進行中の Issue にあなたを割り当てるので、簡単に追跡できます。
- UX Research Operations Coordinator は、Open Recruitment Projects シートをあなたと共有し、支援が必要なプロジェクトであなたをタグ付けします。
- 今後 X 日間および/または X 週間のリクルートの窓口として、`#product` と `#upstream-studios` の Slack チャネルで自己紹介してください。
  - Slack でリクルートのリクエストを持ち込もうとする人がいたら、[リクルートリクエスト Issue を作成](/handbook/product/ux/experience-research/recruiting-participants/#opening-a-recruitment-request)し、追跡と可視性のためにあなたに割り当てるようリマインドしてください。
  - コメントで引き継ぎを確認したら、Issue があなたに引き継がれたことを彼らにリマインドしてください。
- UX Research Operations Coordinator の代理が複数いる場合は、調整しやすくするために必ず `#research_operations` Slack チャネルに参加してください。
- UX Research Operations Coordinator が連続 7 営業日を超えて不在になる場合、代理を務める人が新しく作成された Issue に自動的に割り当てられるよう、Research Recruiting & Incentive Request Issue Template に MR を作成します。

### ステップ 2 - 新しいリクルートリクエストへの対応

***注: 取ったすべてのアクションとその結果で Issue を更新することを忘れないでください。***

- 希望するタイムラインを評価します。私たちのリクルートの SLA は基準次第で最低 2 週間ですが、リクエストによってはもっと早く満たされるものもあります。
  - 留意点:
    - 「次の数日以内に」ユーザーと話したいと言われた場合は、リクルートに最大 2 週間かかる可能性があることを伝えてください。
    - リクルート基準が具体的であればあるほど（必要な資格が多い、または必要な回答者数が多いほど）、リクルートは難しくなり、時間がかかります。
      - 例: グローバル検索機能を使ったことのあるソフトウェア開発者 5 名を求めるリクエストは、非常に単純で素早くリクルートできます。最近 Ultimate にアップグレードした self-managed の管理者 100 名を求めるリクエストは、より難しく時間がかかります。
- リクルート基準を評価し、彼らが誰をリサーチしようとしているかを完全に理解していることを確認します。あなたにとって曖昧な基準はありますか？
  - たとえば次のように、基準をいくつかの箇条書きに絞り込めるまで質問してください。
    - DevOps エンジニア
    - 自チームの環境構成を担当している
    - 大規模な組織（500 名以上）に所属
    - GitLab ユーザーまたは非 GitLab ユーザー
- Qualtrics のスクリーナーをレビューします
  - 現在の質問が必要なスクリーニング基準を提供するかどうかを確認します。提供しない場合は、リクルート Issue でフィードバックを提供し、スクリーナーが彼らの述べた基準に直接対応するまで編集を提案します。
  - 支援を求めるために UX リサーチャーに連絡することを忘れないでください。彼らは PM および/またはプロダクトデザイナーが Qualtrics でスクリーナーをまとめるのを手助けします。
  - リサーチをリクエストする人が、Qualtrics でスクリーナーを作成し、あなたを contributor として追加する責任を負います。

### ステップ 3 - これらの選択肢から最適なリクルートチャネルを選ぶ

- **[データウェアハウスのコンタクト](/handbook/product/ux/experience-research/recruiting-participants/)**
  - editor アクセスと SQL の知識が必要
  - GitLab SaaS ユーザー情報を含む。
  - サーベイの回答者を特定するために使用可能。
  - GitLab SaaS ユーザーのコンタクトを取得し、その後 Qualtrics で通常のプロセスに従います。
- **Respondent.io:**
  - 短期間での対応や、参加者が必ずしも GitLab ユーザーである必要がない場合に最適。
  - 使い方:
    - Respondent にログインし、リサーチを実施する人のスクリーナーを使ってキャンペーンを構築・開始します。
    - 基準を再確認し、参加者を「失格」にする正しい質問を設定するよう注意してください。たとえば、該当する質問で「Jira」を「必須選択」の回答に設定することで、Jira ユーザーだけを求めると指定できます。これにより、別の回答を選んだ人は自動的に失格になります。これにより、精査する必要のあるスクリーナー回答の量が減り、時間を節約できます。また、非リサーチャーがスタディに参加する資格のある人を簡単に把握できるようにもなります。
- **[UserTesting.com](/handbook/product/ux/experience-research/unmoderated-testing/)**
  - モデレーターなしのユーザビリティテストに適している
  - 彼らのパネルを活用して技術的なユーザーをリクルートできる
- **チームメンバーを使ってリクエストを周知する:**
  - 使い方:
    - #upstream-studios、#product、#whats_happening_at_gitlab などの Slack チャネルに投稿します。簡潔な行動喚起、締め切り、人々に投稿してほしいリンクを含めます。
- **LinkedIn での[ダイレクトアウトリーチ](https://www.youtube.com/watch?v=rc2IX1e2sQ8&feature=youtu.be):**
  - 使い方:
    - 探している基準を検索し、inMail クレジットを使って彼らを招待できます。
    - Recruiter License を持っていない場合は、アクセスリクエストを作成する必要があります。
  - 始め方については、この[動画](https://youtu.be/rc2IX1e2sQ8)をご覧ください
- **マーケティングニュースレター:**
  - ***注: これは SUS のような重要なスタディのために確保してください。***
  - ニュースレターは毎月 10 日と 25 日に送信されます。
  - 使い方:
    - サーベイをニュースレターに含めるリクエストを提出します。こちらが例の [Issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/4087) です。
    - Digital Marketing の[プロジェクト](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues)で `newsletter 2020` を検索し、目標日の Issue を選択します。Issue がまだオープンになっていない場合は、最新の Issue を見つけてコメントし、次のニュースレターへのリクエストについて尋ねます。その Issue を作成した人を必ず @ メンションしてください。
- **Docs サイトのバナー:**
  - 大規模なサーベイを宣伝するために、[Docs サイト](https://docs.gitlab.com/)のバナーを時折使用できます。これは、パネルやデータウェアハウスに限定されてしまうサーベイを素早く満たす軽量な方法です。
  - この方法でサンプリングする際に考慮すべきバイアスがいくつかあります。（Docs サイトを使う人は通常、直面している潜在的な障害に関する情報を探しています。）
  - Docs チームはあなたのリクエストを許可しないことを選べます。通常、これを稼働させるには 1 週間かかります

### ステップ 4 - 参加者への支払い

- 使用するリクルートチャネルによって、参加者への支払い方法は異なります
  - **Respondent.io**
    - Respondent プラットフォーム内でユーザーに支払います。
    - プラットフォームにクレジットがロードされているはずです。「approve」ボタンをクリックして、セッションに参加した人々に支払います。
    - 参加者が「attended」とマークされていないセッションがある場合は、できるだけ早くそうするよう、または no-show だったことを確認するよう、インタビュアーにリマインドしてください。これは、私たちのプラットフォームプロフィールが良好な状態を保てるよう、適時に行うべきです。
  - **Tremendous**
    - この方法は現在、Respondent.io を経由しないすべての UX Research 参加者への支払いに使用されています。
    - プラットフォームへのアクセスは制限されており、代理を務める UX リサーチャーのために AR を作成する必要があるかもしれません。
    - Send Rewards を選択します。
    - インセンティブを処理したいキャンペーンに移動します。
    - 参加者のメールアドレスと名、そして USD でのリワード額を入力します。Tremendous は、参加者の所在地に基づいて、該当するリワードを自動的に提供します。
    - Add Recipient をクリックします。必要に応じて追加する選択肢があり、csv をアップロードすることもできます。
    - 支払い画面に進みます。
    - 支払い画面で Pay with Credit Balance を選択し、process をクリックします。
    - 参加者は当日にインセンティブを受け取るはずですが、処理に最大 48 時間かかる場合があります。

### UX Research Operations Coordinator への引き継ぎ

- やり遂げました！ UX Research Operations Coordinator が復帰し、引き継ぐ準備ができました。
- まだオープンになっているリクルート Issue を UX Research Operations Coordinator に割り当てます。
- コメントで彼らを @ メンションし、Issue の状況とまだ必要な作業について更新を提供します。
- 全員が同じタイムゾーンにいるわけではなく、彼らがあなたより早く業務を開始する可能性があるため、UX Research Operations Coordinator が戻る前日にカバレッジ Issue を更新します。
- 必要に応じて、UX Research Operations Coordinator は、新しいリサーチリクルートリクエストに UX リサーチャーが自動的に割り当てられないようにするための新しい MR を作成します。

## リソース

- [UX リサーチチームの運営方法](/handbook/product/ux/experience-research/how-uxr-team-operates/)
- [リクルートのケーススタディ](/handbook/product/ux/experience-research/recruiting-participants/#recruitment-case-study)
