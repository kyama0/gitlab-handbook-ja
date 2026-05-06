---
title: アプリケーションセキュリティテスト - プランニング
upstream_path: /handbook/engineering/development/sec/secure/planning/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## 概要

私たちのステージは `workflow` ラベルを含む[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)プロセスに従っています。このページでは、GitLab の一般的なプロセスに対する調整と追加事項を説明します。競合がある場合はステージのドキュメントを優先してください。

一部のグループは、[Plan](/handbook/product-development/how-we-work/product-development-flow/#build-phase-1-plan)フェーズを[プランニングブレークダウン](#planning-breakdown)と[リファインメント](#refinement)の2つの隣接するステップに分けることを好みます。いずれにせよ、プランニングが完了したら、Issue と Epic は[スケジューリング](#scheduling)の準備が整います。

<span id="planning-breakdown"></span>

### プランニングブレークダウン

Epic と Issue はチームの優先順位付けプロセスに従って選択され、`~workflow::planning breakdown` ラベルが適用されている必要があります。

答えるべき主な質問は次のとおりです。

1. 要件はリクエストの意図を理解するのに十分明確か？
1. 達成すべき作業の範囲を把握しているか？（例: 別チームがメンテナンスするコード）

いずれかの答えが「いいえ」の場合、DRI の理解を向上させるために PM との議論を続けます。

両方の答えが「はい」の場合、DRI は Issue を1つのマイルストーンで完了できるかどうかを見積もります。Epic については、1つのマイルストーンでは完了できないと仮定します。

Issue を1つのマイルストーン内で完了できないと判断された場合、DRI はそれを複数の Issue に分解し、それぞれがマイルストーン内で完了できるようにします。できる限り、Issue は独立した価値の「スライス」（顧客への成果）であり、例えばモックされた UI やアクセス不可能なバックエンド作業にならないようにします。

エンジニアリングのアウトプット:

- 未解決の質問や議論を特定して解決する。
- その Issue が何らかの形で関係する場合、他のチームに通知する。
- 説明文に他チームへの依存関係を記載し、早期コラボレーションを促進するために EM/PM を巻き込む。
- Epic の場合: Epic 内に実装 Issue を作成する。
- すべての Issue に `~workflow::refinement` ラベルを適用する。

<span id="refinement"></span>

### リファインメント

Issue のリファインメントを担当するエンジニアは、Issue がリファインメントと実行に必要な情報を欠いている場合、質問したり異議を唱えたりすることが奨励されます。

エンジニアリングのアウトプット:

- Issue が作業可能な状態であることを確認し、`~workflow::ready for development` ラベルを適用する。
- Issue に正しい[ラベル](https://docs.gitlab.com/development/labels/)、特に[作業タイプ分類ラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)が付いていることを確認する。
- Issue から担当者を外す。

<span id="scheduling"></span>

### スケジューリング

EM はチームの機能・メンテナンス・バグの優先順位に従って、作業のスケジュールに責任を持ちます。

エンジニアリングのアウトプット:

- 正しいマイルストーンを適用する。
- チームがマイルストーンで完了することを約束した Issue に `~Deliverable` ラベルを適用する。

## リファインメントガイドライン

1. 自分自身を Issue に担当者として割り当てる。[バグ](#bug-diagnosis)と[スパイク](#refinement-for-spikes)の違いに注意する。
1. これらのガイドラインで使用する構造を持つ [`Implementation`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Implementation.md?ref_type=heads) Issue テンプレートの使用を検討する。
1. 適切な `~backend` または `~frontend` ラベルが適用または削除されていることを確認する。
1. Issue の完全性を確認する:
    - 必要なデザインが揃っている。
    - 機能が明確に表現されており、動作方法についての決定がある。
    - 技術的な詳細が概説されており、議論が解決されている。
    - 依存関係が明示されている。
    - [フィーチャーフラグが必要かどうか](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/#when-to-use-feature-flags)を判断する。
1. Issue が完全でない場合:
    - Issue を完成させるのに役立てられる関係者をタグ付けし、何が必要かを概説する。EM と PM もタグ付けして、ブロッカーを認識してもらう。
1. Issue を完全に理解する。
    - 実装される内容の最終的な説明で Issue の説明を更新する。
    - Issue の説明に[実装計画](#implementation-plan)を追加する。
    - オプションとして、チームの慣習に従って[検証ステップ](#verification-steps)を追加する。
    - Issue のタイトルが実施される作業に対して正確であることを確認する。
    - 「フォローアップ」作業や、やむを得ずスコープ外になった作業のために新しい Issue を作成する。
    - [作業タイプ分類ラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)を割り当てる（例: `/label ~"feature::enhancement"`）。
1. チームがウェイトを使用している場合は、適切に割り当てる（[バグ](#bug-diagnosis)と[スパイク](#refinement-for-spikes)は除く）。
1. 複雑な Issue の場合は、別のエンジニアにレビューを依頼する。チームではレビューを必要とするウェイトのしきい値を設定している場合がある。
1. `~workflow::ready for development` ラベルを追加し、自分の担当を外す。

リファインメントが完了したら、誰でも Issue の説明を読めば、その Issue が何を解決しようとしているのか、どのように解決するのか、実装の技術的な計画がわかるようにする必要があります。

Issue とその実装を理解するために、すべてのコメントを読む必要がないようにしてください。必要な情報は、唯一の情報源として説明に記載されている必要があります。

<span id="implementation-plan"></span>

### 実装計画

この機能を実装するために更新が必要なコードのステップと部分のリストです。実装計画では、他のチームメンバーやチームに対する責任についても明記する必要があります。

実装計画の目的は、Issue の批判的な分析を促し、DRI がアプリケーションのどの部分に影響するかを考えることです。実装計画により、他のエンジニアが Issue をレビューして、依存関係がある可能性のある部分や見落とされた部分を指摘できるようになります。

実装計画が1つのステップだけになる場合もありますが、実装が単純な場合でも省略すべきではありません。

これにより Issue 間の一貫性が向上し、Issue が適切にリファインされたことが伝わります。

<span id="verification-steps"></span>

### 検証ステップ

別の人が変更を検証できる方法を説明してください。これにより、レビュアーが情報を尋ねる必要がなくなるため、マージリクエストのレビュープロセスが迅速化されます。

また、他の人が検証を行えるようにすることで（`~workflow::verification`）ステップが改善され、Issue が再オープンされる可能性が低下します。

<span id="bug-diagnosis"></span>

### バグ診断

バグをリファインメントする際の以下の違いに注意してください。

1. ガイドラインとして、Issue ごとに1時間以内にとどめる。リファインメントに時間がかかりすぎるバグは、より複雑な問題を示している可能性がある。
1. ウェイトを追加しない。私たちのベロシティは、バグのない新機能を提供する能力を表している。
1. リファインメントの時間制限に達したとき、[実装計画](#implementation-plan)に不確実性があっても問題ない。コード変更がどこに発生すると予想されるか、または診断のさらなるステップを示すだけで十分。

<span id="refinement-for-spikes"></span>

### スパイクのリファインメント

1. ウェイトを追加しない[^1]。
1. Issue に費やす時間をタイムボックス化し、説明に記録する（例: `Time-box: 2d`）。
1. 成果物は通常、今後の Issue で使用される回答または解決策と、フォローアップ Issue である。

[^1]: スパイクはユーザーに直接価値を追加しないため、ベロシティに貢献すべきではない。スパイクによって提供される情報こそが、ユーザーへの直接的な価値を提供するために役立つ。

### セキュリティ Issue のリファインメント

[セキュリティ開発者プロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)は、初めての人には難しく感じることがあります。リファインメントの一環として、「セキュリティ Issue リリースバディ」として機能するボランティアを募集してください。
