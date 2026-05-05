---
title: "GitLab Omnibus-Adjacent Kubernetes ADR 001: Kubernetes ディストリビューションをパッケージ化または承認しない"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/001_dont_package_or_bless_kubernetes_distros/
upstream_sha: a27a2f7fbaedbd4b422d73ed991c16ee9a112ca9
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

Omnibus-Adjacent Kubernetes は、Omnibus と並行して実行される Kubernetes ディストリビューションを前提としています。1 つの可能性として、Omnibus 内に Kubernetes をパッケージ化する、または Kubernetes を含む別のメタパッケージを公開して、Kubernetes のシームレスなインストールと Omnibus クックブックによる完全なオートメーションをサポートするという方法が考えられます。

## 決定事項

Omnibus 内に Kubernetes ディストリビューションを組み込まず、いかなる形式でもパッケージ化せず、ドキュメントで特定のディストリビューションを推奨しません。

Kubernetes をバンドルすることで、GitLab は事実上 Kubernetes ディストリビューターになります。
これにより、Kubernetes のアップグレードのテスト、さまざまな深刻度のセキュリティパッチの適用、異なるデプロイ環境での互換性の確保など、継続的なメンテナンス責任が生じます。
これらの要件を満たすには、Kubernetes の専門知識を持つスタッフと、Product Security への大きな依存が必要になります。
さらに、組み込み Kubernetes の主要候補は FIPS 認証を提供しておらず、これは重大な懸念事項となります。

Kubernetes はプラットフォームであり、仮想化プロバイダー（AWS、GCP、VMware、ProxMox）がプラットフォームであるのと同様です。
GitLab はお客様がインスタンスを運用するプラットフォームに対して責任を負ったことがありません。
これは Omnibus GitLab においても同様で、このパッケージが動作する物理または仮想マシンに対して私たちは責任を負いません。
したがって、Kubernetes に関しても同じ姿勢を維持します。

## 結果

ユーザーは使用したいディストリビューションを自由に選択できますが、Kubernetes インスタンスを完全に維持する責任を負います。インストールとアップグレードはユーザー自身が行う責任があります。

GitLab が提供するのは、設定された際に Omnibus によって起動されたサービスと隣接する Kubernetes クラスター内で実行されるサービスとの安全な相互接続を可能にする Omnibus 設定のセットです。
