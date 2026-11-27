---
title: 内部リリース
upstream_path: /handbook/engineering/releases/internal-releases/
upstream_sha: "3f489816f1fcde506cae1427b280d744ab382621"
lastmod: "2026-11-27T11:39:46-06:00"
translated_at: "2026-11-28T06:18:54+09:00"
translator: claude
stale: false
---

## 内部リリースポリシー {#internal-release-policy}

> [!IMPORTANT]
> 重大なバグを修正するすべての内部リリースでは、[Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks)
> と[リリース後レビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が必要です。
>
> 重大なセキュリティ脆弱性に対処するすべての内部リリースでは、リリース後の SIRT/PSIRT の振り返りへの参加を強く推奨します。
> [根本原因分析（RCA）](/handbook/security/root-cause-analysis/)は、[リリース後の対応](#post-release)に記載されている場合に必要です。

内部リリースは、[パッチリリース](/handbook/engineering/releases/patch-releases/#patch-release-overview-and-policy)と同じポリシー要件に従います：
重大なバグ修正とセキュリティパッチのみに限定されます。内部リリースには新機能、フィーチャーフラグの変更、
未完成の作業は含まれず、テスト目的に使用することもできません。

オーナーシップ、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)のセクションを参照してください。

## 内部リリースの概要 {#internal-release-overview}

内部リリースは、私たちのシングルテナント SaaS インスタンス向けのプライベート GitLab リリースです。Dedicated インスタンス上の
重大度の高い問題（S1 または S2）を是正します：

* GitLab.com と同じくらい迅速かつ効率的に
  （[SLA 駆動](/handbook/security/product-security/vulnerability-management/sla/#vulnerability-management-slas-and-labels)）
* 公開パッチリリースの前に脆弱性を開示することなく
* 公開パッケージにバージョンギャップを導入することなく

内部リリースは、特定の基準に従って実行されます：

* GitLab Dedicated の可用性に影響する S1 または S2 の問題（バグまたはセキュリティ脆弱性）に対処します。重大度の低い問題
は、パッチリリースを通じて対処すべきです。
* 現在のバージョンマイナス 1（N-1）および現在のバージョンマイナス 2（N-2）の GitLab バージョンを対象とします。
* 公開開示の前に、プライベートチャンネルを通じて修正を提供します。

Dedicated インスタンスで重大度の高い問題を修正する必要がある場合は、[リクエストプロセス](#request-process)
と[GitLab エンジニア向け内部リリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)の手順に従ってください。

### 他のリリースタイプとの関係 {#relationship-to-other-release-types}

内部リリースは[パッチリリース](/handbook/engineering/releases/patch-releases/)と同じプロセスに従いますが、異なる目的を果たします：

* どちらも[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)中に作成されたステーブルブランチを使用します
* 内部リリースは、公開パッチリリースの *前に* GitLab Dedicated に修正を提供します
* 内部リリースの後、同じ修正がすべてのセルフマネージド顧客向けの次回スケジュールされたパッチリリースに含まれます

### タイムライン {#timeline}

内部リリースには、異なる時間的特性を持つ 2 つのフェーズがあります：

| フェーズ | 期間 | 備考 |
|-------|----------|-------|
| **リクエスト** | 可変 | 問題の重大度の確認と修正の準備状況によって異なります |
| **実行** | 約 8 時間 | 内部リリースのリクエスト後、Release Managers がリリースプロセスを完了できます |

リクエストフェーズには以下が含まれます：

* Issue の検出と Dedicated の重大度評価
* GitLab.com 上での修正の開発と検証
* パイプラインが通過するバックポートの準備

これらの前提条件が満たされて初めて、Release Managers は約 8 時間の実行フェーズを開始できます。

## リクエストプロセス {#request-process}

内部リリースは、GitLab Dedicated に影響を及ぼし、次回予定されているパッチリリースまで待てない S1 または S2 のバグやセキュリティ脆弱性に限ります。
Dedicated は GitLab の SaaS 環境であるため、影響する S1 または S2 の問題は必ずパッチで対処し、別途承認を得る必要はありません。

> [!IMPORTANT]
>
> * **重大なバグ修正**には、[Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks)
>   と[リリース後レビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が必要です。
>   どちらも必須です。
> * **重大なセキュリティ脆弱性**では、リリース後の SIRT/PSIRT の振り返りへの参加を強く推奨します。
>   [根本原因分析（RCA）](/handbook/security/root-cause-analysis/)は、[リリース後の対応](#post-release)に記載されている場合に必要です。

### 基準 {#criteria}

以下の条件を**すべて**満たす場合に限り、内部リリースを作成します。

* 問題が Dedicated に影響する **S1 または S2** のバグまたはセキュリティ脆弱性です。
* 修正の対象が GitLab の **N-1 または N-2** のバージョンです。

基準を満たさないリクエストは却下されます。Release Managers も、条件に該当しないリクエストを却下できます。
Customer Success、Sales、その他のチームからのプレッシャーは、内部リリースの根拠にはなりません。

### 内部リリースをリクエストする方法 {#how-to-request-an-internal-release}

1. [担当の Release Managers](/handbook/engineering/releases/release-managers/)に連絡して、どのバージョン（N-1 または N-2）に内部リリースが必要かを伝えてください。
   内部リリースのプロセスで、リクエスト Issue が自動で作成されます。
1. 影響を受ける領域を担当するエンジニアリングチームを特定してください。このチームが、修正と N-1 および N-2 へのバックポートの準備を担う DRI です。
   セキュリティ脆弱性の場合は、Release Managers のみが security リポジトリにマージできます。
1. そのチームの Engineering Manager に連絡し、リクエスト Issue の担当者に指定してください。この Engineering Manager が[リリース後の対応](#post-release)を担当します。
1. Release Managers が Dedicated 向けの内部リリースパッケージをビルドし、提供します。
1. パッケージの提供後、Release Managers が[リリース後の対応](#post-release)の担当者にリクエスト Issue を割り当てます。

### リリース後の対応 {#post-release}

影響を受ける領域を担当するエンジニアリングチームが、リリース後の対応の DRI です。

* **バグ修正**では、バグを検出できなかった理由を調べるために[リリース後レビュー](/handbook/engineering/infrastructure-platforms/incident-review/)を行い、
  [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks)を完了してください。どちらも**必須**です。
* **セキュリティ脆弱性**では、SIRT/PSIRT の振り返り Issue に参加してください（**強く推奨**）。脆弱性が製品機能に関連する場合、
  その脆弱性を持ち込んだチームが [RCA](/handbook/security/root-cause-analysis/)を完了することが**必須**です。例外はありません。
  * アップストリームのサードパーティコードの脆弱性の場合は、利用可能な修正を適用しなかった、サポートが終了した依存関係を使っていたなど、
    GitLab の判断や対応の遅れが脆弱性への露出の一因となった場合に限り、RCA が必須です。それ以外の場合は任意です。

このプロセス外で承認された内部リリースは、リリース安定性と GitLab Dedicated の信頼性を損なう前例を作ります。

## 内部リリースのプロセス {#internal-release-process}

内部リリースは、問題の特定から Dedicated へのパッケージのロールアウトまで、6 つのフェーズで進みます。

![内部リリース概要](/images/engineering/releases/internal-releases/internal-release-overview.jpg)

* [ダイアグラムソース - 社内](https://docs.google.com/presentation/d/1rI47asPEzIaAGZ6t4rQASv88jnJJ17y55k3yD9IVkVI/edit?usp=sharing)

1. **リクエスト**は、重大度の高い問題が特定され、[リクエストプロセス](#request-process)が始まる段階です。内部リリースのプロセスで、
   リリースを追跡するリクエスト Issue が自動で作成されます。開始の条件は、問題の種類によって異なります。
   * **セキュリティ脆弱性**の場合、SIRT チームが調査し、その問題が S1 または S2 であることを確認します。
   * **重大なバグ**の場合、Dedicated チームが、可用性の低下を引き起こす S1 または S2 のバグを報告します。
2. **準備**では、Release Managers が実装の初期手順に着手し、[GitLab Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated)に通知します。
3. **GitLab.com の是正**では、脆弱性またはバグを担当するチームが、修正を準備して適切な GitLab リポジトリにマージし、
   GitLab.com にデプロイされることを確認します。セキュリティ脆弱性の場合は、以下の手順に従います。
   * Release Managers のみが security リポジトリにマージできます。
   * [PSIRT チーム](/handbook/security/product-security/psirt)が、先に進む前に GitLab.com 上で修正を検証します。
4. **バックポート**では、担当チームが N-1 および N-2 のステーブルブランチを対象にバックポートを準備します。
   * エンジニアは、バックポートのパイプラインが成功し、レビューと承認が済んでいることを確認します。
   * エンジニアは、準備ができたらバックポートをステーブルブランチにマージします。
   * セキュリティ脆弱性の場合、Release Managers のみが security リポジトリにマージできます。
5. **リリース**では、Release Managers が内部 CNG イメージと Omnibus パッケージをビルドし、プレリリースチャンネルにアップロードします。
   Dedicated にパッケージを提供した後、Release Managers が[リリース後の対応](#post-release)の担当者にリクエスト Issue を割り当てます。
   * **バグ修正**では、リリース後レビューと FCL を行います。
   * **セキュリティ脆弱性**では、SIRT/PSIRT の振り返りと、必要な場合の RCA が対応項目です。
6. **最終ステップ**では、内部リリースパッケージを GitLab シングルテナント SaaS インスタンスにロールアウトします。
   * パッケージが利用可能になったことを GitLab Dedicated Group に通知します。
   * [Dedicated の緊急メンテナンス](https://docs.gitlab.com/administration/dedicated/maintenance/#emergency-maintenance)プロセスが始まります。
