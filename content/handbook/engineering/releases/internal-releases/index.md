---
title: 内部リリース
upstream_path: /handbook/engineering/releases/internal-releases/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-10T12:44:21-06:00
translated_at: "2026-06-12T21:15:09Z"
translator: claude
stale: false
---

## 内部リリースポリシー {#internal-release-policy}

> [!IMPORTANT]
> すべての内部リリースには、宣言された[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)
> とリリース後の[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が**必要です**。**これらは任意ではありません**。
>
> 重大なバグ修正に対処する内部リリースには、影響を受ける領域のエンジニアリングチームによって駆動される
> [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks)が**さらに必要です**。

内部リリースは、[パッチリリース](/handbook/engineering/releases/patch-releases/#patch-release-policy)と同じポリシー要件に従います:
重大なバグ修正とセキュリティパッチのみに限定されます。内部リリースには新機能、フィーチャーフラグの変更、
未完成の作業は含まれず、テスト目的に使用することもできません。

オーナーシップ、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)のセクションを参照してください。

内部リリースがセキュリティインシデントまたは他のすでに宣言されたインシデントの結果でない場合は、[インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)しなければなりません。

## 内部リリースの概要 {#internal-release-overview}

内部リリースは、私たちのシングルテナント SaaS インスタンス向けのプライベート GitLab リリースです。Dedicated インスタンス上の
高重大度の Issue（S1 または S2）を是正します:

* GitLab.com と同じくらい迅速かつ効率的に
  （[SLA 駆動](/handbook/security/product-security/vulnerability-management/sla/#vulnerability-management-slas-and-labels)）
* 公開パッチリリースの前に脆弱性を開示することなく
* 公開パッケージにバージョンギャップを導入することなく

内部リリースは、特定の基準に従って実行されます:

* GitLab Dedicated の可用性に影響する S1 または S2 の Issue（バグまたはセキュリティ脆弱性）に対処します。重大度の低い Issue
は、パッチリリースを通じて対処すべきです。
* current minus one（N-1）および current minus two（N-2）の GitLab バージョンを対象とします。
* 公開開示の前に、プライベートチャンネルを通じて修正を提供します。

Dedicated インスタンス上の高重大度の Issue を修正したい場合は、[内部リリースをリクエスト](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?description_template=Internal-Release-Request)し、[GitLab エンジニア向け内部リリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)の手順に従ってください。

### 他のリリースタイプとの関係 {#relationship-to-other-release-types}

内部リリースは[パッチリリース](/handbook/engineering/releases/patch-releases/)と同じプロセスに従いますが、異なる目的を果たします:

* どちらも[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)中に作成された stable ブランチを使用します
* 内部リリースは、公開パッチリリースの *前に* GitLab Dedicated に修正を提供します
* 内部リリースの後、同じ修正がすべての self-managed 顧客向けの次回スケジュールされたパッチリリースに含まれます

### タイムライン {#timeline}

内部リリースには、異なる時間的特性を持つ 2 つのフェーズがあります:

| Phase | Duration | Notes |
|-------|----------|-------|
| **リクエストと承認** | 可変 | Issue の重大度の検証、ステークホルダーの可用性、修正の準備状況に依存します |
| **実行** | 約 8 時間 | 内部リリースリクエストが承認されると、リリースマネージャーはリリースプロセスを完了できます |

リクエストフェーズには以下が含まれます:

* Issue の検出と Dedicated の重大度評価
* ステークホルダーへの通知と整合
* GitLab.com 上での修正の開発と検証
* パイプラインが通過するバックポートの準備

これらの前提条件が満たされて初めて、リリースマネージャーは約 8 時間の実行フェーズを開始できます。

## 内部リリースのプロセス {#internal-release-process}

内部リリースは、初期の特定からデプロイまで、6 つのフェーズを通って進みます。

![internal release overview](/images/engineering/releases/internal-releases/internal-release-overview.jpg)

* [Diagram source - internal](https://docs.google.com/presentation/d/1rI47asPEzIaAGZ6t4rQASv88jnJJ17y55k3yD9IVkVI/edit?usp=sharing)

1. **リクエスト**: 高重大度の Issue が特定され、[内部リリースリクエスト](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?description_template=Internal-Release-Request)
   が開かれます。トリガーは Issue のタイプによって異なります:
   * **セキュリティ脆弱性**: SIRT チームが調査し、その Issue が S1 または S2 であることを確認します。
   * **重大なバグ**: Dedicated チームが、可用性の低下を引き起こす高重大度の Issue を報告します。
2. **準備**: リクエストが承認されると、初期実装ステップが始まり、
   [GitLab Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated)に通知されます。
3. **GitLab.com の是正**: 脆弱性またはバグを担当するチームが、修正を準備して適切な GitLab リポジトリにマージし、
   それが GitLab.com にデプロイされることを確認します。
   セキュリティ脆弱性の場合:
   * リリースマネージャーのみが security リポジトリにマージできます。
   * [PSIRT チーム](/handbook/security/product-security/psirt)が、先に進む前に GitLab.com 上で修正を検証します。
4. **バックポート**: 担当チームが N-1 および N-2 の stable ブランチを対象とするマージリクエストを準備します。
   * エンジニアは、バックポートがレビューされ、グリーンのパイプラインで承認されることを確認します
   * エンジニアは、準備ができたらバックポートを stable ブランチにマージします。
   * セキュリティ脆弱性の場合、リリースマネージャーのみが security リポジトリにマージできます。
5. **リリース**: 内部 CNG イメージと Omnibus パッケージがビルドされ、プレリリースチャンネルにアップロードされます。
6. **最終ステップ**: 内部リリースパッケージを GitLab シングルテナント SaaS インスタンスにロールアウトします。
   * GitLab Dedicated Group に通知されます。
   * [Dedicated の緊急メンテナンス](https://docs.gitlab.com/administration/dedicated/maintenance/#emergency-maintenance)プロセス
     が始まります。
