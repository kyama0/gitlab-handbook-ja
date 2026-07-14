---
title: "Theseus ADR 004：GitLab.com はコンポーネントごとに独立してデプロイし、Self-Managed はバンドルリリースを使用する"
owning-stage: ""
description: "GitLab.com SAAS は Release Framework を介してコンポーネントごとの独立デプロイへ段階的に移行し、Self-Managed は設計上、月次のバンドルメタパッケージを維持する決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/004_independent_vs_bundled_releases/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
lastmod: "2026-06-30T17:42:08+02:00"
translated_at: "2026-07-14T07:42:19+09:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 状態

**提案中。**

## コンテキスト

現在、GitLab.com は、
多数のコンポーネントの変更を含む単一のメタパッケージをリリースしています。
GitLab.com を運用する SRE が求めているのは、その逆です。
独立したロールバック、
コンポーネントごとのリリース頻度、
変更ごとの小さな影響範囲です。

Self-Managed の顧客は、
独自のスケジュールと
独自の変更管理プロセスで、GitLab インストール環境を運用しています。
顧客が求めているのは、月次のバンドルリリースです。
アップグレード 1 回、バージョン 1 つ、リリースノート 1 組です。
追跡すべきコンポーネントのバージョンが N 個になることは機能ではなく、負担です。

[Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/)は、
両方のモデルを実現することを目指しています。

## 決定

**GitLab.com SAAS** は、Release Framework を介した
コンポーネントごとの独立デプロイへ移行します。
移行は段階的に行います。
Artifact Registry から始め、Rails モノリスを最後に、
コンポーネントを 1 つずつオンボーディングします。
モノリスのオンボーディングが完了するまで、
GitLab.com はその他すべてのフォールバックとしてトレイン形式のリリース頻度を維持します。

**GitLab Cells** は GitLab.com SAAS と同じリリースモデルに従い、
Release Framework を介してコンポーネントごとに独立してデプロイしますが、
デプロイメカニズムには Instrumentor を使用します。

**Self-Managed** は、月次のバンドルメタパッケージを維持します。
コンポーネントをリリースバージョンに固定し、
無期限にまとめてリリースします。

**GitLab Dedicated** は特殊なケースです。
デプロイには新しいロールアウトアーキテクチャ
（[Argo Rollouts](https://argoproj.github.io/rollouts/)を使用する可能性があります）を使いますが、
更新はメンテナンスウィンドウ中にまとめて行います。

## 結果

### メリット

1. GitLab.com で独立したロールバックが可能になります。
1. Self-Managed は運用のシンプルさを維持できます。

### デメリット

1. **2 つのリリースモデルを無期限に並行して維持します。**
   ツール、ドキュメント、リリースノート、CI は、どれも二重の形態に対応します。
1. **コンポーネントは両方の形態で動作する必要があります。**
   GitLab.com で独立してリリースされるコンポーネントは、
   Self-Managed ではバンドルの一部としてもリリースされ、
   両方でバージョンの互換性を維持する必要があります。

## 参考資料

- [セクション 7.3 — GitLab.com メタパッケージの移行](../#73-open-tensions) —
  この ADR が解決する緊張関係。
- [Release Framework 設計ドキュメント](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) —
  GitLab.com でコンポーネントごとのデプロイを可能にする仕組み。
- [セクション 5.5 — デプロイ：Fairway と Release Framework](../#55-deployment--fairway-and-the-release-framework) —
  プラットフォームとの統合ポイント。
- [Argo Rollouts](https://argoproj.github.io/rollouts/) —
  GitLab Dedicated の、バンドルされつつモダンな経路で使用するロールアウト機構の候補。
