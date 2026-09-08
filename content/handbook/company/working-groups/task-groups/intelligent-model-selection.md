---
title: "インテリジェントなモデル選択"
description: "GitLab Duo にインテリジェントなモデル選択を導入するタスクグループ。GitLab がすべての Duo 機能でタスクごとに最適なモデルを選択する仕組みを、まず Duo Developer フローで実証します。"
upstream_path: /handbook/company/working-groups/task-groups/intelligent-model-selection/
upstream_sha: "401db1960414fc91f11d1a68caf048b4d9aec1be"
lastmod: "2026-09-08T19:46:21+02:00"
translated_at: "2026-09-08T21:08:18+00:00"
stale: false
translator: codex
---

## 属性

| プロパティ        | 値                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日    | 2026-08-31                                                                                                                               |
| 目標終了日 | 2026-10-09（[GitLab 19.5](https://gitlab.com/groups/gitlab-org/-/milestones/139) の終了日）                                               |
| Slack           | [#intelligent-model-selection-working-group](https://gitlab.slack.com/archives/C0BN1LBMBU6)（社内からのみアクセス可能）     |
| 同期ミーティングのメモ      | [Google Doc](https://docs.google.com/document/d/1LZ81H8tfsHXIQzF3uUs9lPHPp1Mc3Jjiqlfvbv6aR-0)（社内からのみアクセス可能）   |
| メインのエピック       | [Duo Agent Platform と Duo 機能のためのインテリジェントなモデル選択](https://gitlab.com/groups/gitlab-org/-/epics/22485)                   |

## 背景

管理者とグループオーナーは、すでに[モデル選択](https://docs.gitlab.com/administration/gitlab_duo/model_selection/)を通じて各 GitLab Duo 機能が使用するモデルを選択できます。この選択は固定的であり、その機能が行うすべてのリクエストを選択されたモデルが処理します。Duo Agent Platform のようなエージェント型の機能には、これは適していません。1 つのフローには単純なステップ（ファイルの読み取り、簡単な検索）と複雑な複数ステップの推論が混在していますが、現在は各ステップが実際に何を必要としているかに関係なく、同じ大規模モデルがすべてを処理しています。

インテリジェントなモデル選択により、GitLab はタスクごとに最適なモデルを選択できます。単純なタスクはより小さく高速なモデルに、複雑なタスクはより大きなモデルに振り分けます。エンドユーザーはモデル選択について考えることなく適切なデフォルトを利用でき、複雑な作業の品質を維持しながらコストとレイテンシーを削減できます。[GitHub Copilot の自動モデル選択](https://docs.github.com/en/copilot/concepts/models/auto-model-selection)が、この動作に最も近い業界の参考例です。

### 目標

単一のフローでルーティングすることが目標ではありません。目指すのは、すべての Duo 機能が実行中のタスクに最適なモデルを選択することです。安全に実現するには、まず対象範囲を明確に絞った 1 つのフローで仕組みを実証する必要があるため、作業は 2 つのフェーズで計画しています。

1. **基盤整備。** 既存の「GitLab default model」オプションを、モデルではなくポリシーとして位置付け直します。デフォルトモデルの管理、負荷分散、インテリジェントなモデルルーティングなど、GitLab が顧客に代わって最適化するすべてを、1 つの「GitLab managed」設定でカバーします。Duo Developer フローを独立した機能設定に分離し、専用のモデルセレクターを設けることで、ルーティングの作業を検証する対象を小さく明確な範囲に絞ります（[フェーズ 1 のエピック](https://gitlab.com/groups/gitlab-org/-/epics/23227)、機密）。
2. **Duo Developer 向けの小規模モデルと大規模モデル間のルーティング。** 代表的な Duo Developer タスク群を用いて評価を実行し、候補となる小規模モデルと大規模モデルの品質、レイテンシー、コストのベースラインを確立したうえで、それらのベースラインに基づくルーティングを実装します（[フェーズ 2 のエピック](https://gitlab.com/groups/gitlab-org/-/epics/23228)、機密）。ルーティング層の設計は[アーキテクチャ決定記録](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items/2707)に記録されています。ルーティングは「GitLab managed」設定を対象とするフィーチャーフラグの背後でリリースするため、結果が悪化した場合は迅速にロールバックできます。

## 終了基準

1. 「GitLab default model」オプションが「GitLab managed」ポリシー設定として位置付け直され、Duo Developer に専用のモデルセレクターを備えた独立した機能設定があること（フェーズ 1）。
2. 代表的な Duo Developer タスク群について、候補となる小規模モデルと大規模モデルの評価ベースラインが存在し、候補の変更時に評価を再実行できること（フェーズ 2）。
3. Duo Developer 向けの小規模モデルと大規模モデル間のルーティングがフィーチャーフラグの背後で利用可能であり、評価した品質が大規模モデルのベースラインと同等で、コスト削減が測定されていること（フェーズ 2）。

## 長期的なビジョン

私たちは、将来的にさらに最適化したい項目があると考えています。このタスクグループが実施を約束するものではないため、上記のフェーズではなく、ここに記録します。

- Duo Developer で実証した評価とリリースのプロセスを再利用し、残りの Duo 機能にもインテリジェントなモデル選択を拡張すること。
- グループオーナーと管理者がルーティングで選択可能なモデル群を制限できる、モデルの許可リストを設けること。
- ヒューリスティックなルーティングをタスクの難易度を分類するモデルに置き換える、LLM ベースのルーター。
- エンドユーザーにモデル選択をどのように表示するかについて、UI をさらにカスタマイズすること。

## 役割と責任

| タスクグループの役割 | 担当者                                                   | 役職                                     |
| --------------- | -------------------------------------------------------- | ----------------------------------------- |
| DRI             | [Julie Huang](https://gitlab.com/julie_huang)            | Senior Fullstack Engineer, AI Engineering |
| メンバー          | [Alejandro Rodríguez](https://gitlab.com/alejandro)      | Staff Backend Engineer, AI Engineering    |
| メンバー          | [Manoj M J](https://gitlab.com/manojmj)                  | Staff Backend Engineer, AI Engineering    |
| メンバー          | [Nathan Weinshenker](https://gitlab.com/nateweinshenker) | Backend Engineer, AI Engineering          |
| メンバー          | [Newvick Lee](https://gitlab.com/nlee8)                  | Backend Engineer, AI Engineering          |
