---
title: "内部リリース"
upstream_path: /handbook/engineering/releases/internal-releases/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:26:18Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-10T12:44:21-06:00"
---

## 内部リリースポリシー {#internal-release-policy}

> [!IMPORTANT]
> すべての内部リリースには、宣言された[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)とリリース後の[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が **必要** です。**これらは任意ではありません**。
>
> 重大なバグ修正に対処する内部リリースには、影響を受ける領域のエンジニアリングチームが推進する [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) が **追加で必要** です。

内部リリースは、[パッチリリース](/handbook/engineering/releases/patch-releases/#patch-release-policy)と同じポリシー要件に従います。重大なバグ修正とセキュリティパッチのみに限定されます。内部リリースには、新機能、フィーチャーフラグの変更、未完了の作業は含まれず、テスト目的に使用することもできません。

オーナーシップ、例外プロセス、エスカレーション経路を含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)のセクションを参照してください。

内部リリースがセキュリティインシデントまたはすでに宣言された別のインシデントの結果でない場合は、[インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)する必要があります。

## 内部リリースの概要 {#internal-release-overview}

内部リリースは、シングルテナント SaaS インスタンス向けのプライベートな GitLab リリースです。Dedicated インスタンスの深刻度の高い Issue (S1 または S2) を次のように是正します。

* GitLab.com と同じくらい迅速かつ効率的に
  ([SLA 駆動](/handbook/security/product-security/vulnerability-management/sla/#vulnerability-management-slas-and-labels))
* 公開パッチリリースの前に脆弱性を開示することなく
* 公開パッケージにバージョンのギャップを導入することなく

内部リリースは、特定の基準に従って実行されます。

* GitLab Dedicated の可用性に影響を与える S1 または S2 の Issue（バグまたはセキュリティ脆弱性）に対処します。より深刻度の低い Issue はパッチリリースで対処する必要があります。
* 現在のマイナス 1 (N-1) および現在のマイナス 2 (N-2) の GitLab バージョンを対象とします。
* 公開前にプライベートチャンネルを通じて修正を提供します。

Dedicated インスタンスの深刻度の高い Issue を修正したい場合は、[内部リリースをリクエスト](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?description_template=Internal-Release-Request)し、[GitLab エンジニア向け内部リリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md) の手順に従ってください。

### 他のリリースタイプとの関係 {#relationship-to-other-release-types}

内部リリースは[パッチリリース](/handbook/engineering/releases/patch-releases/)と同じプロセスに従いますが、異なる目的を果たします。

* どちらも[月次リリース](/handbook/engineering/releases/monthly-releases/)中に作成された安定版ブランチを使用します
* 内部リリースは、公開パッチリリースの *前に* GitLab Dedicated に修正を提供します
* 内部リリースの後、同じ修正がすべての self-managed のお客様向けの次のスケジュールされたパッチリリースに含まれます

### タイムライン {#timeline}

内部リリースには、異なる時間特性を持つ 2 つのフェーズがあります。

| フェーズ | 期間 | 備考 |
|-------|----------|-------|
| **リクエストと承認** | 可変 | Issue の深刻度の検証、ステークホルダーの空き状況、修正の準備状況によって異なります |
| **実行** | 約 8 時間 | 内部リリースリクエストが承認されると、Release Manager はリリースプロセスを完了できます |

リクエストフェーズには次が含まれます。

* Issue の検出と Dedicated の深刻度の評価
* ステークホルダーへの通知とアラインメント
* GitLab.com での修正の開発と検証
* パイプラインが成功するバックポートの準備

これらの前提条件が満たされた後にのみ、Release Manager は約 8 時間の実行フェーズを開始できます。

## 内部リリースプロセス {#internal-release-process}

内部リリースは、最初の特定からデプロイまで 6 つのフェーズを経て進行します。

![内部リリースの概要](/images/engineering/releases/internal-releases/internal-release-overview.jpg)

* [図のソース - 内部](https://docs.google.com/presentation/d/1rI47asPEzIaAGZ6t4rQASv88jnJJ17y55k3yD9IVkVI/edit?usp=sharing)

1. **リクエスト**: 深刻度の高い Issue が特定され、[内部リリースリクエスト](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?description_template=Internal-Release-Request)がオープンされます。トリガーは Issue のタイプによって異なります。
   * **セキュリティ脆弱性**: SIRT チームが調査し、Issue が S1 または S2 であることを確認します。
   * **重大なバグ**: Dedicated チームが、可用性の低下を引き起こす深刻度の高い Issue を報告します。
2. **準備**: リクエストが承認されると、初期の実装ステップが開始され、[GitLab Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated) に通知されます。
3. **GitLab.com の是正**: 脆弱性またはバグの担当チームが、適切な GitLab リポジトリに修正を準備してマージし、それが GitLab.com にデプロイされることを確認します。
   セキュリティ脆弱性の場合:
   * Release Manager のみがセキュリティリポジトリにマージできます。
   * [PSIRT チーム](/handbook/security/product-security/psirt)は、先に進む前に GitLab.com で修正を検証します。
4. **バックポート**: 担当チームは、N-1 および N-2 の安定版ブランチを対象とするマージリクエストを準備します。
   * エンジニアは、バックポートがレビューされ、パイプラインが成功して承認されていることを確認します
   * エンジニアは、準備が整ったらバックポートを安定版ブランチにマージします。
   * セキュリティ脆弱性の場合、Release Manager のみがセキュリティリポジトリにマージできます。
5. **リリース**: 内部 CNG イメージと Omnibus パッケージがビルドされ、プレリリースチャンネルにアップロードされます。
6. **最終ステップ**: 内部リリースパッケージを GitLab シングルテナント SaaS インスタンスにロールアウトします。
   * GitLab Dedicated Group に通知されます。
   * [Dedicated 緊急メンテナンス](https://docs.gitlab.com/administration/dedicated/maintenance/#emergency-maintenance)プロセスが開始されます。
