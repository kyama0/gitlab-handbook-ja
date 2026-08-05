---
title: "フレーキーテスト"
upstream_path: /handbook/engineering/testing/flaky-tests/
upstream_sha: 1268785362042c88e891d4f2270f8ad87cd6b6ad
translated_at: "2026-08-06T06:38:11+09:00"
translator: claude
stale: false
lastmod: "2026-08-05T01:54:25-04:00"
---

## はじめに

このページでは、フレーキーテストの検出、レポート、および管理のための GitLab の組織的なプロセスについて説明します。フレーキーテストのデバッグと修正に関する技術的なガイダンスについては、[不健全なテスト（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/)を参照してください。隔離手順と構文については、[隔離プロセス（ハンドブック）](../quarantine-process/)および[テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/)を参照してください。

フレーキーテストとは、時折失敗するが、十分にリトライすれば最終的には通過するような、信頼性の低いテストのことです。フレーキーテストは、脆弱なテスト、不安定なテストインフラストラクチャ、または不安定なアプリケーションの結果である可能性があります。私たちは、原因を特定し、品質を向上させてテスト結果への信頼を築くために、不安定さの解消に努めるべきです。

## フレーキーテスト管理が重要な理由

- フレーキーテストはテスト結果を損ない、エンジニアがテスト失敗をフレーキーとして無視するようになります。
- フレーキーテストを通過させようとするための手動リトライや、テスト失敗としてフレーキーテストを調査するために必要な労力は、時間の大きな無駄です。
- 原因を素早く修正するか、テストスイートからテストを削除することでフレーキーテストを管理することで、価値を追加する場所でテスト時間とコストを使用できます。

## トップフレーキーテストファイルのレポート

GitLab はカスタムツールを使用して、CI/CD パイプラインをブロックする最も影響の大きいフレーキーテストファイルを自動的に特定してレポートします。[ci-alerts 自動化](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts)はパイプライン失敗を繰り返し引き起こすテストファイルの Issue を作成し、それらがエンジニアリングマネージャーにトリアージされて解決のために割り当てられます。

**すべてのトップフレーキーテストファイル Issue を表示:** [automation:top-flaky-test-file ラベル](https://gitlab.com/gitlab-org/quality/test-failure-issues/-/work_items?sort=created_date&state=opened&label_name%5B%5D=automation%3Atop-flaky-test-file&not%5Blabel_name%5D%5B%5D=quarantine&not%5Blabel_name%5D%5B%5D=flaky-test%3A%3Afalse-positive&first_page_size=20)

**24 時間を超えてオープンのままになっているトップフレーキーテストファイル Issue:** [GLQL トラッキング Issue](https://gitlab.com/gitlab-org/quality/test-failure-issues/-/work_items/43806)

**24 時間を超えてオープンのままになっているフレーキーテストファイル Issue は、本番インシデントとしてエスカレーションされます。**

### 仕組み

ci-alerts システムは ClickHouse からのテスト失敗データを分析して、パイプラインの安定性に最も高い影響を持つテストファイルを特定します。テストファイルを 3 つのカテゴリに分類します。

1. **フレーキー**: 3 日以上にわたって失敗が広がり、まだアクティブに失敗している（最後の失敗から 3 日以内）
2. **マスターが壊れた**: 大量のインシデント（12 時間以内に 30 件以上で 40% 以上の集中度、または 60 件以上）
3. **不明確**: 分類基準を満たしていない

分類アルゴリズムと設定に関する詳細な情報については、[ci-alerts フレーキーテストレポートドキュメント](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/blob/main/doc/flaky_tests_reporting.md)を参照してください。

### 頻度

トップフレーキーテストの Issue は毎週（日曜日の 10:00 UTC）作成します

### トリアージプロセス

自動化によって作成された Issue は Development Analytics チームによってトリアージされ、責任あるエンジニアリングマネージャーに振り分けられます。完全なトリアージワークフローは[ci-alerts TRIAGE.md](https://gitlab.com/gitlab-org/quality/analytics/ci-alerts/-/blob/main/TRIAGE.md)に文書化されています。

**主なステップ:**

1. 真のフレーキーさを確認するための初期トリアージ
2. EM のメンションとともに責任あるプロダクトグループへの振り分け

### エンジニアリングマネージャーへ

トップフレーキーテストファイルの Issue に割り当てられた場合:

1. **Issue の説明を確認する** - 影響メトリクス、Grafana ダッシュボードリンク、および推奨されるアクションが含まれています
2. **状況を評価する** - Grafana ダッシュボードを使用して失敗パターンを理解します
3. **アクションを取る** - タイムラインのガイダンスについては[緊急度ティアと応答タイムライン](#urgency-tiers-and-response-timelines)を参照してください

テストの隔離に関するガイダンスは、[隔離プロセス（ハンドブック）](../quarantine-process/)および[テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/)を参照してください。

### アサインされた IC へ

エンジニアリングマネージャーは、すぐに対応できる IC にフレーキーテスト Issue をアサインします。IC として対応可能で、自チームの未アサイン Issue を見つけた場合は、すぐに引き受けて開発を開始してください。フレーキーテスト Issue にアサインされたら、現在の作業を中断し、その日のうちにテストを修正することが期待されます。

これらの Issue を直ちに解決するため、失敗したテストを担当する他のメンバーの修正レビューも、現在の作業を中断して行ってください。**これは同期的な作業です。** 関係者に直接連絡し、コードを直ちにレビューして承認を得て、変更をマージします。

修正の作成とマージにはエージェントを最大限活用してください。GitLab プロジェクトで他のすべての開発をブロックしている状況を解消するには、スピードが重要です！

#### ワークフロー

1. フレーキーテスト Issue がステータス **New** でオープンされ、担当する EM にアサインされます。
2. IC が Issue を引き受けるか、EM によってアサインされます。Issue とすべてのサブタスクには直ちに取り組み、現在のマイルストーンに設定して、**In Development** に移動する必要があります。
3. これらの MR のレビューフェーズは非常に短くする必要があります。アサインされた IC は、修正をマージするため、少なくとももう 1 人の開発者と直接、同期的に作業する必要があります。
4. エンジニアの 1 日が終わっても変更が残っている場合、アサインされたエンジニアは、別のタイムゾーンの担当者に作業を引き継ぎ、その担当者がアサインされて作業を継続できるようにする責任があります。これらの Issue と MR を夜間に対応されないまま放置しないでください。
5. テストが他の開発者をブロックしなくなるだけの修正が行われたら、フレーキーテストファイル Issue を **Verification** に移動する必要があります。
6. 失敗がない状態が **3 日間** 続くと、DevEx フレーキーテスト自動化によって Issue がクローズされます。

#### 緊急度ティアと応答タイムライン {#urgency-tiers-and-response-timelines}

チームには、フレーキーテストファイルが特定されてから 24 時間以内に修正を提供することが求められます。24 時間を超えると、Issue は Severity 3 の本番インシデントにエスカレーションされ、インシデント後レビュープロセスが必要になります。

+Severity 3 で X（TBD）時間が経過すると、インシデントは Severity 2 にエスカレーションされます。

これらのタイムラインは、修正できない場合にテストをいつ隔離すべきかのガイドとなります。隔離手順と技術的な実装については、[隔離プロセス（ハンドブック）](../quarantine-process/)および[テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/)を参照してください。

## 追加リソース

- [隔離プロセス（ハンドブック）](../quarantine-process/) - GitLab での隔離されたテストの全体的なプロセス
- [不健全なテスト（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/) - フレーキーテストのデバッグと再現のための技術的なリファレンス
- [テストの隔離（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/quarantining_tests/) - 隔離構文と実装のための技術的なリファレンス
- [フレーキーテストダッシュボード](https://dashboards.devex.gitlab.net/d/ddjwrqc/flaky-tests-overview)
