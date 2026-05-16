---
title: Security 部門ドッグフーディングプログラム
upstream_path: /handbook/security/security-division-dogfooding/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T14:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-20T14:58:12+00:00"
---

## はじめにと目的

Security 部門は、GitLab を会社として、また GitLab をプラットフォームとして安全に保つ上で重要な役割を果たします。その使命を追求する中で、部門はすべての顧客のためにプラットフォームを改善するため、可能な限り GitLab を使用すること（[「ドッグフーディング」](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)）にコミットしています。

このドッグフーディングプログラムは、GitLab プラットフォームの機能に関連する Product Management と Security の間のコラボレーションの有効性と効率性を向上させることを目的としています。

これまで、Security 部門内のドッグフーディングは正式なプログラムを通じて処理されておらず、ドッグフーディング活動の成功を制限してきた可能性があります。

これまでの課題には以下が含まれます:

1. Security 部門から発生した機能リクエストや GitLab の発明・革新がどのように優先順位付けされるべきかについてのフレームワークがない。これにより、いくつかの機能リクエストが無期限に延期されたり、内部で使用される複数のカスタムビルドツールが作成されたりしました。これらは GitLab ユーザーが他の方法で利益を得られる可能性のある機能を表しています。
1. プロダクトリーダーシップが Security 部門の現在の採用、課題、要望を理解するための戦略的または役員レベルの視点がない。
1. バグ、十分に伝達されていない破壊的変更、その他の因果要因によるセキュリティプロセスの破損。
1. プロダクトに貢献したいセキュリティチームメンバーが、ツールをプロダクトの一部として構築するために必要な品質と技術標準にコードを適応させるためのサポートと構造の不足。
1. GitLab に質の高いコードを効果的に貢献する方法について割り当てられた学習トラックがないため、Security 部門メンバーからの貢献が限定的。

### 望ましい成果

これらの成果はすべて Security 部門の文脈におけるものです。対応するハンドブックページが作成された際にリンクを追加します。

1. GitLab の誰もが以下を理解できる:
    1. GitLab プラットフォームのうちどれだけが部門で使用されているか。
    1. 部門でどの機能が完全に、部分的に、またはまったく使用されていないか。

1. Product Management が以下を理解できる:
    1. 部門の運用要件を満たさないために使用されていない（部分的または完全に）機能
    1. Security にとって最も重要かつ重大な機能リクエスト
    1. 重要なセキュリティ活動が依存している特定のプラットフォーム機能
    1. 新しいまたは更新された機能に関して部門の任意のサブセットからフィードバックを得る方法
    1. 部門がプロダクトに貢献する予定のもの

1. Security 部門内の誰もが以下を理解できる:
    1. 部門を代表して機能拡張をリクエストする方法とそのリクエストをフォローアップする方法。
    1. Product Management および Product Security Engineering に効果的なフィードバックを提供する方法。
    1. プラットフォームに質の高いコードコントリビューションを返す方法。
    1. 部門で使用されているカスタムツールとその根拠

### プログラムリーダーシップとステークホルダー

**プログラム DRI**: TBD

**プログラムマネージャー**: TBD

**Security 部門の連絡先**

- VP, Product Security: [Julie Davila](https://gitlab.com/juliedavila)
- Distinguished Security Architect: [Philippe Lafoucrière](https://gitlab.com/plafoucriere)
- Manager, Product Security Engineering: [Andrew Kelly](https://gitlab.com/ankelly)
- Principal Security Engineer: [Dominic Couture](https://gitlab.com/dcouture)

**Product Management の連絡先**

TBD

## 現在のドッグフーディングのステータス

FY25Q2 時点で、私たちは [現在の GitLab 機能の利用状況を評価](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues/1761) し、Product チームと Security チーム間のコミュニケーションを強化し、Security チームがカスタムツールではなく GitLab プロダクトを使用する方向への移行、およびプロダクト開発への貢献を追跡するための [メトリクスを開発](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/63) しています。

## コミュニケーションサイクル

1. ドッグフーディングのステータスレポート: 四半期ごとの非同期更新
1. PM への重大なエスカレーション: ?
1. PM から Security への評価依頼

## 主要なプロセス

### Security ペルソナの管理

GitLab は、さまざまな種類の GitLab ユーザー、そのニーズ、および GitLab プロダクトとの関わり方を説明する [公式ペルソナリスト](/handbook/product/personas/) を維持しています。Security 部門は、これらのペルソナのいくつかを通じて代表されています。Security 部門のチームメンバーが特定の機能や機能性をプロダクトに統合することをリクエストする際、新しいペルソナを作成するか、既存のペルソナを変更することが適切かどうかを判断する評価が実施されます。

### ドッグフーディング評価の方法論

#### プロダクトステージと情報階層との整合

ドッグフーディングデータのプレゼンテーション層の構成は、出力の有効性を最大化するように行われるべきです。この目的のため、情報は通常、GitLab 全体で既に普及しているメンタルモデルを模倣するフィードバックループを促進するために、プロダクトステージに整合する形で提示されます。

実用主義が他を指示しない限り、ドッグフーディング分析の出力はプロダクトステージごとに整理されるべきです。

#### 使用されている、部分的に使用されている、未使用の機能の文書化

使用されている

1. 現在の満足度
1. 望まれる改善

部分的

1. 制限による部分的使用
1. 内部キャパシティによる部分的使用

未使用

1. 制限による
1. 認知度の不足
1. 計画されているがまだ着手されていない

### 望ましいプロダクト機能の管理 {#management-of-desired-product-capabilities}

1. 機能リクエスト
    1. ユーザーストーリーの作成
    1. 必要性の重要度の確立
    1. 外部顧客への関連性
1. ビルドかバイかの検討
    1. PM を待つ
    1. Product Security Engineering に委任する
    1. 構築のために契約者を雇用する
    1. 外部から購入する

### 内製ツールの管理 {#management-of-in-house-tooling}

Security 部門のチームは、カスタムの内製ツールを作成するのではなく、プロダクトに貢献することを目指すべきです。

GitLab プロダクトの外でカスタムツールを作成する決定が下された場合:

1. README にカスタムツールを構築する理由と決定を文書化する
    1. 適用可能な場合、ツールを廃止するために必要な GitLab 機能の最小セットを文書化する
        1. Issue へのリンクを含め、欠けているものについては新しい Issue を作成する
    1. それ以外の場合、カスタムツールが GitLab のビジョンに合わない理由とプロダクトの一部として構築しようとしていない理由を文書化する
1. カスタムツールの維持に責任を持つチームの明確なオーナーシップを特定し文書化する

#### 内製ツールの段階的な廃止

新しい機能がプロダクトに追加されると、要件を部分的にしか満たさない場合があります。それでも、可能な限りカスタムコードとロジックを削除しようとすべきです。

これの例には以下が含まれる場合があります:

- Secrets Push Protection 機能が完全に利用可能になったときに、シークレット監視ツールからのコミット監視を削除する
- [inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/) で YAML ファイルを使用したプロジェクトのカスタム分類を、[複数のラベルを割り当てる](https://gitlab.com/groups/gitlab-org/-/epics/13294) ことができるようになったときに [Compliance Frameworks](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html) ラベルに置き換える
- [gem-checker](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/gem-checker) で API が安定したときに inventory ではなく [Dependencies API](https://docs.gitlab.com/ee/api/dependencies.html) を使用する

各状況において、カスタムツールはまだ使用されていますが、より多くのプロダクトをドッグフードし、問題があればチームに早期にフィードバックを提供できます。

### GitLab プラットフォームに依存する重要なセキュリティ活動の管理

1. 破壊的変更の評価
1. 導入された重大な欠陥／バグのエスカレーション

### 更新または新たに導入されたプラットフォーム機能の評価および評価

1. 新しい GitLab 機能の発見
    1. Product のステークホルダーとの継続的なコミュニケーション
    1. マイナーおよびメジャーバージョンの月次リリースブログ投稿のレビューによる潜在的な新しい有益な機能の特定
1. [望ましいプロダクト機能の管理](#management-of-desired-product-capabilities) プロセスで特定された部門の現在のニーズと新しい機能を比較する
1. 新しい情報を [内製ツールの管理](#management-of-in-house-tooling) プロセスにループバックする
