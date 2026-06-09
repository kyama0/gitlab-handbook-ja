---
title: "内部リリース"
upstream_path: /handbook/engineering/releases/internal-releases/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-09T09:11:01-06:00"
---

## 内部リリースポリシー

> [!IMPORTANT]
> すべての内部リリースには、申告された[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)
> とリリース後の[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が**必要です**。**これらは省略できません**。
>
> 重大なバグ修正に対応する内部リリースには、**さらに**影響を受ける領域のエンジニアリングチームが主導する
> [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) が**必要です**。

内部リリースは[パッチリリース](/handbook/engineering/releases/patch-releases/#patch-release-policy)と同じポリシー要件に従います。重大なバグ修正とセキュリティパッチのみに限定されています。
内部リリースには、新機能、フィーチャーフラグの変更、未完成の作業は含まれず、テスト目的に使用することもできません。

所有権、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)セクションを参照してください。

内部リリースがセキュリティインシデントの結果でない場合、[インシデントを申告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)する必要があります。インシデントには「アウトオブバンド」とマークし、内部リリースの必要性を考慮してS1またはS2の重大度を設定してください。

## 内部リリースの概要

内部リリースは、シングルテナントSaaSインスタンス向けのGitLabのプライベートリリースです。これにより、Dedicatedインスタンスにおける高重大度の問題を以下のように修正できます。

* [SLA主導](/handbook/security/product-security/vulnerability-management/sla/#vulnerability-management-slas-and-labels)でGitLab.comと同様に迅速かつ効率的に
* パブリックパッケージのバージョンスキップなしで
* パブリックパッチリリースの前に脆弱性を開示せずに

内部リリースは特定の基準に従って実施されます。

* GitLab Dedicatedの可用性に影響する[クリティカル (S1)](/handbook/security/product-security/vulnerability-management/sla/#vulnerability-management-slas-and-labels)修正（バグまたはセキュリティ脆弱性）に対応する：
  1. **セキュリティ脆弱性**: SIRTチームが脆弱性を調査し、Issue が高重大度であると判断する。
  2. **クリティカルバグ**: Dedicatedチームがパフォーマンスの低下を引き起こす高重大度の Issue を報告する。
* 現在のバージョンマイナス1（N-1）および現在のバージョンマイナス2（N-2）のGitLabバージョンを対象とする
* 公開開示の前にプライベートチャンネルを通じて修正を提供する

高重大度の Issue を修正して内部リリースを作成するGitLabエンジニアは、[GitLabエンジニア向け内部リリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)の手順に従ってください。

### 他のリリースタイプとの関係

内部リリースは[パッチリリース](/handbook/engineering/releases/patch-releases/)と同じプロセスに従いますが、異なる目的を持ちます。

* どちらも[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)中に作成されたステーブルブランチを使用します
* 内部リリースはパブリックパッチリリースの*前に*GitLab Dedicatedに修正を提供します
* 内部リリースの後、同じ修正がすべてのセルフマネージドユーザー向けの次回スケジュールされたパッチリリースに含まれます

### タイムライン

内部リリースには時間特性の異なる2つのフェーズがあります。

| フェーズ | 期間 | 備考 |
|-------|----------|-------|
| **リクエストと承認** | 可変 | Issue の重大度の検証、ステークホルダーの可用性、修正の準備状況に依存 |
| **実行** | 約8時間 | 承認され修正が準備できたら、リリースマネージャーがリリースプロセスを完了できる |

リクエストフェーズには以下が含まれます。

* Issue の検出とDedicatedの重大度評価
* ステークホルダーへの通知と調整
* GitLab.comでの修正開発と検証
* パッチングパイプラインが通っているバックポートの準備

これらの前提条件が満たされた後にのみ、リリースマネージャーは約8時間の実行フェーズを開始できます。

## 内部リリースプロセス

エンドツーエンドの内部リリースプロセスは以下の段階で構成されています。

![内部リリース概要](/images/engineering/releases/internal-releases/internal-release-overview.jpg)

* [ダイアグラムソース - 社内](https://docs.google.com/presentation/d/1rI47asPEzIaAGZ6t4rQASv88jnJJ17y55k3yD9IVkVI/edit?usp=sharing)

内部リリースには以下のフェーズがあります。

1. **検出**: GitLab Dedicatedの可用性に影響する高重大度の Issue (S1) が特定されます。
   * セキュリティ脆弱性: SIRTチームが脆弱性を調査し、Issue が高重大度であると判断します。
   * クリティカルバグ: Dedicatedチームが使いやすさの低下を引き起こす高重大度の Issue を報告します。

2. **準備**: リリースタスクの Issue が作成され、[GitLab Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated)を含むステークホルダーに通知されるとき、内部リリースプロセスの最初のステップです。

3. **GitLab.comの修正**:
   * 脆弱性/バグに関連するグループが、適切なGitLabリポジトリで修正を準備します。
   * リリースマネージャーがGitLabのデフォルトブランチに修正をマージします。
   * 高重大度の修正がGitLabマルチテナント本番環境（GitLab.com）にデプロイされます。
   * 脆弱性の場合、[PSIRTチーム](/handbook/security/product-security/psirt)がGitLab.comで脆弱性/バグが修正されていることを検証します。

4. **バックポート**: N-1およびN-2のステーブルブランチを対象とするセキュリティマージリクエストが、脆弱性/バグに関連するグループによって準備されます。
   * エンジニアはバックポートがマージ可能な状態にあることを確認します（承認、グリーンパイプラインなど）。
   * バックポートのマージ準備ができたら、リリースマネージャーがそれらをステーブルブランチにマージします。

5. **リリース**: 内部CNGイメージとOmnibusパッケージがビルドされ、プレリリースチャンネルにアップロードされます。

6. **最終ステップ**: 内部リリースパッケージをGitLabシングルテナントSaaSインスタンスにロールアウトします。
   * GitLab Dedicatedグループに通知されます。
   * [Dedicatedの緊急メンテナンス](https://docs.gitlab.com/administration/dedicated/maintenance/#emergency-maintenance)プロセスが開始されます。
