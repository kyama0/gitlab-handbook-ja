---
title: "GitLab における戦略的リサーチ"
upstream_path: /handbook/upstream-studios/experience-research/strategic-research-at-gitlab/
upstream_sha: 7032d681eb34b7baa363eb97119170b35beb5d76
lastmod: "2026-07-23T12:35:46-03:00"
translated_at: "2026-07-24T06:08:04+09:00"
translator: codex
stale: false
---

### 戦略的リサーチとは {#what-is-strategic-research}

戦略的リサーチは、長期的なプロダクトの方向性とロードマップに情報を与える、ユーザーに関する[将来志向の](/handbook/upstream-studios/product-design/ux-themes/#timeframe)質問に答えることに焦点を当てます。この種のリサーチは、より大きなトピック領域を理解するために、つながりのある 1 つ以上のプロジェクトで構成されることがあります。通常、トピックは複数のステージグループおよび / またはステージをカバーするほど広範です。そのため、戦略的リサーチは、プロダクトチームと会社全体に[大きなインパクト](https://uxdesign.cc/how-to-be-a-more-strategic-55915d8e9ef7)を与えることができます。

{{< youtube "pYJEiC9Cs-A" >}}

戦略的リサーチは次のために使用できます:

- 異なる地域または人々のグループに、ソリューションをどのように適用するかを理解する。例えば、法的文書を管理する弁護士のような別の業界が、バージョン管理にソースコントロール管理をどのように活用できるかを考えます。
- 現在の問題に対する追加の制約を探り、より将来性のあるものにする。例えば、機能でサポートすべき同時ユーザー数を追加します。
- 上流と下流の体験を考慮する。例えば、Auto DevOps を使用して GitLab ユーザーが Continuous Integration をより簡単に開始できるよう支援することで、Verify の体験を強化します。
- 新たに生まれる市場トレンドを特定する。例えば、顧客が DevOps 導入の成熟度への関心を示している場合、GitLab が Machine Learning または AI を使用して、人々の成熟度をどのようにコーチできるかを明らかにします。

### GitLab は戦略的リサーチをどのように考えるか {#how-does-gitlab-think-about-strategic-research}

**戦略的リサーチとは、次のようなリサーチです:**

- チームおよび / または組織の戦略に直接情報を与えるために実施する
- 単一のステージ領域または機能に限定されない、より広範なリサーチ質問に答えることを目指す
- [Problem Validation](/handbook/upstream-studios/experience-research/problem-validation-and-methods/)に、[Solution Validation](/handbook/upstream-studios/experience-research/solution-validation-and-methods/)よりも密接に結び付く
- 月次リリースサイクルから独立している
- 長期的なプロダクトロードマップを最適に支援するため、6 ヶ月から 3 年先に焦点を当てる

**該当しないもの:**

- [Solution Validation](/handbook/upstream-studios/experience-research/solution-validation-and-methods/)
- （ほとんどの場合）単一のステージグループに限定されるもの
- 特定の Issue / 機能に結び付く[Problem Validation](/handbook/upstream-studios/experience-research/problem-validation-and-methods/)リサーチ

**戦略的リサーチはどのようなものか?**

- UX および / またはプロダクトの方向性に情報を与える
- プロダクトグループではなく、ユーザージャーニーにまたがる
- 機能のあり方に関する現在の仮定を理解し、問い直そうとする
- ステージ横断または複数ステージのステークホルダーを関与させる
- 満たされていないニーズを定義する
- ペルソナの追加、洗練、または削除につながる

**戦略的リサーチはどのように測定されるか?**

- 成功は、プロジェクトレベルでリサーチのインパクトによって測定します。GitLab で戦略的リサーチが成熟するにつれ、すべての戦略的リサーチプロジェクトに適用できる共通の成功指標を探します。

**戦略的リサーチトピックの例:**

- ステージ利用トレンドを理解する
- 顧客の動機、目標、課題、ニーズへの理解を広げる
- 顧客の最大の IT イニシアチブ / 目標を特定する
- GitLab が DevOps 導入のペインをどのように克服できるかを理解する
- ステージ横断のユースケースとワークフローについてさらに理解する
- Ops が複数のステージとステージグループにわたって導入を促進できる方法を特定する
- ステージ横断のグループ Issue につながる [Actionable Insights](/handbook/upstream-studios/experience-research/research-insights/)を作成し、次の 1 年以内にスケジュールする

**最近のプロジェクトにおける戦略的リサーチの例:**

1. [Release Manager Persona Addition](https://gitlab.com/gitlab-org/ux-research/-/issues/316)は、[Roles and Personas ページ](/handbook/product/personas/)の更新につながった、ステージ横断かつ複数グループにまたがる戦略的リサーチの優れた例です。これは Ops Section 全体にプラスの影響を与え、Ultimate ティアで新しいオーディエンスに到達する助けとなりました。
1. [KubeCon Ops Product Direction Survey](https://gitlab.com/gitlab-org/ux-research/-/issues/1740)は、Ops 内の[将来のプロダクトロードマップ](https://about.gitlab.com/blog/2022/05/31/the-kubecon-summary-from-a-product-perspective/)に情報を与えられた大規模なプロジェクトです。これは、GitLab ユーザーにとってどの CI/CD ワークフローが最も困難であるかについて貴重なフィードバックを得て、理想的なシークレットソリューションについてユーザーが考えている好みを学ぶことで実現しました。

### 戦略的リサーチの成果物 {#strategic-research-outputs}

Strategic Research の成果物は、Issue、文書に加えた変更、次のようなカテゴリ方向性ページ（1 年および 3 年のビジョンを含む）への公開済みの変更で確認できます:

- [GitLab ステージグループの 1 年計画](https://about.gitlab.com/direction/ops/#one-year-plans)
- [GitLab の 3 年戦略](https://about.gitlab.com/direction/#3-year-strategy)
- [GitLab の Direction ペルソナ](https://about.gitlab.com/direction/#personas)

### 戦略的リサーチのリソース {#resources-for-strategic-research}

- [リサーチ仮説の開発](https://dovetailapp.com/projects/1c8ab3b2-5804-4f33-b2d7-80a7420f36cb)
- [新しいペルソナテンプレート](https://dovetailapp.com/projects/922698a3-e770-45bb-8fe1-6aee240f1df9)
