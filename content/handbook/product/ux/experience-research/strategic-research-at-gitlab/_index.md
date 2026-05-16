---
title: "GitLab における戦略的調査"
upstream_path: /handbook/product/ux/experience-research/strategic-research-at-gitlab/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

### 戦略的調査とは？

戦略的調査は、長期的な製品の方向性やロードマップに情報を提供するのに役立つ、ユーザーに関する[将来を見据えた](/handbook/product/ux/product-design/ux-roadmaps/#timeframe)質問に答えることに焦点を当てた調査です。この種の調査は、より大きなトピックエリアをよりよく理解するために、1 つまたは複数の関連プロジェクトで構成される場合があります。通常、トピックは複数のステージグループや段階をカバーするほど広範です。したがって、戦略的調査は製品チームや会社全体にとって[影響力が大きい](https://uxdesign.cc/how-to-be-a-more-strategic-55915d8e9ef7)場合があります。

{{< youtube "pYJEiC9Cs-A" >}}

私たちは戦略的調査を以下に使用できます:

- 異なる地域や人々のグループ間でソリューションを適用する方法を理解する。例えば、法的文書をキュレーションする弁護士のような別の業界が、バージョン管理のためにソース管理マネジメントをどのように活用できるかを検討する。
- 現在の問題に対する追加の制約を探求して、より将来に対応できるようにする。例えば、機能でサポートする同時ユーザー数を追加するなど。
- 上流と下流の体験を検討する。例えば、Auto DevOps を使用して GitLab ユーザーが継続的インテグレーションをより簡単に開始できるようにすることで、Verify 体験を強化する。
- 新たな市場トレンドを特定する。例えば、顧客が DevOps を採用する成熟度に関心を示している場合、GitLab が機械学習や AI を使用して人々の成熟度をコーチする方法を発見する。

### GitLab は戦略的調査をどのように考えていますか？

**戦略的調査とは、以下のような調査です:**

- チームや組織の戦略に直接情報を提供するために実施される
- 1 つのステージエリアや機能に特化したものではなく、より広範な調査質問に答えることを目的とする
- [ソリューション検証](/handbook/product/ux/experience-research/solution-validation-and-methods/)よりも[問題検証](/handbook/product/ux/experience-research/problem-validation-and-methods/)とより密接に関連している
- 月次リリースサイクルから独立している
- 長期的な製品ロードマップを最もよくサポートするために、6 ヶ月から 3 年先に焦点を当てている

**そうではないもの:**

- [ソリューション検証](/handbook/product/ux/experience-research/solution-validation-and-methods/)
- 単一のステージグループに特化したもの（ほとんどの場合）
- 特定の Issue／機能に関連する[問題検証](/handbook/product/ux/experience-research/problem-validation-and-methods/)調査

**戦略的調査はどのように見えますか？**

- UX や製品の方向性に情報を提供する
- 製品グループではなく、ユーザージャーニーにまたがる
- 機能性に関する現在の前提を理解し、挑戦することを目指す
- ステージを横断する、または複数ステージのステークホルダーを巻き込む
- 満たされていないニーズを定義する
- ペルソナの追加、洗練、または削除につながる

**戦略的調査はどのように測定されますか？**

- 成功は、プロジェクトレベルでの調査の影響によって測定されます。GitLab で戦略的調査が成熟するにつれて、すべての戦略的調査プロジェクトに適用できる成功の共通の尺度を探します。

**戦略的調査のトピックの例:**

- ステージ使用傾向を理解する
- 顧客の動機、目標、課題、ニーズに関する理解を広げる
- 顧客の最大の IT イニシアチブ／目標を特定する
- GitLab が DevOps 採用の苦痛をどのように克服できるかを理解する
- ステージを横断するユースケースとワークフローについてもっと理解する
- Ops が複数のステージとステージグループにわたって採用を促進できる方法を特定する
- 次の 1 年以内にスケジュールされるクロスステージグループの Issue に接続された[実行可能なインサイト](/handbook/product/ux/experience-research/research-insights/)を作成する

**最近のプロジェクトからの戦略的調査の例:**

1. [Release Manager Persona Addition](https://gitlab.com/gitlab-org/ux-research/-/issues/316)は、[Roles and Personas ページ](/handbook/product/personas/)の更新につながったクロスステージおよびマルチグループの戦略的調査の取り組みの素晴らしい例でした。これは Ops セクション全体にプラスの影響を与え、Ultimate ティアで新しい対象者にリーチするのに役立ちました。
1. [KubeCon Ops Product Direction Survey](https://gitlab.com/gitlab-org/ux-research/-/issues/1740)は、Ops 内の[将来の製品ロードマップ](https://about.gitlab.com/blog/2022/05/31/the-kubecon-summary-from-a-product-perspective/)に情報を提供できた大規模なプロジェクトでした。これは、GitLab ユーザーにとって最も困難な CI/CD ワークフローについて貴重なフィードバックを取得し、ユーザーが理想的なシークレットソリューションについて持っている好みを学習することで行われました。

### 戦略的調査の成果

戦略的調査からの成果は、Issue、ドキュメントへの変更、およびカテゴリ方向ページ（1 年と 3 年のビジョンを含む）への公開された変更で見つけることができます。例えば:

- [GitLab Stage Group 1-year Plans](https://about.gitlab.com/direction/ops/#one-year-plans)
- [GitLab 3-year strategy](https://about.gitlab.com/direction/#3-year-strategy)
- [GitLab's Direction Personas](https://about.gitlab.com/direction/#personas)

### 戦略的調査のためのリソース

- [Developing Research Hypothesis](https://dovetailapp.com/projects/1c8ab3b2-5804-4f33-b2d7-80a7420f36cb)
- [New Persona Template](https://dovetailapp.com/projects/922698a3-e770-45bb-8fe1-6aee240f1df9)
