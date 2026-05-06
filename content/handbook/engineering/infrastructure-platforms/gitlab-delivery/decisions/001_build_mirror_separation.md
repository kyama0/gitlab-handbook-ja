---
title: "Delivery ADR 001: 新コンポーネントはdev.gitlab.orgではなくセキュリティミラーを使用する"
owning-stage: "~group::release-and-deploy"
toc_hide: true
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/decisions/001_build_mirror_separation/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## 背景

GitLab はhistorically、専用の独立した GitLab インスタンス（[dev.gitlab.org](https://dev.gitlab.org)）からリリースアーティファクトをビルドして公開してきました。これにより GitLab.com とは区別されたコントロールプレーン境界が確保され、GitLab.com の障害時にはフォールバックとして機能していました。

GitLab がよりモジュール化されたリリースアーキテクチャへと移行するにあたり、新しいサービスがこの独立したインスタンスを引き続き使用しなければならないのか、あるいは GitLab.com 上のセキュリティミラーを代わりに使用できるのかという問いが生じました。議論の全容は [gitlab-com/gl-infra/delivery#21976](https://gitlab.com/gitlab-com/gl-infra/delivery/-/work_items/21976) に記録されています。

核心的なコンプライアンス上の問いは、SOC 2・FedRAMP・SLSA および関連フレームワークがビルド用に独立した GitLab インスタンスを要求するのか、それともビルドインフラと本番環境の間の論理的分離を要求するのか、という点でした。

Security および Compliance（[@madlake](https://gitlab.com/madlake)・[@jhebden](https://gitlab.com/jhebden)）との協議の結果：

- いかなるコンプライアンスフレームワークも独立した GitLab インスタンスを義務付けていません。要件はソフトウェアのビルド場所と本番環境での実行場所の間の**論理的分離**です。
- GitLab CI ランナーは GitLab.com のアプリケーションサーバーとは別のコンピュートインフラ上で実行されます。この専用ランナーフリートがコンプライアンス上の「ビルドインフラ」を構成します。
- セキュリティミラーは、Canonical プロジェクトとは独立して監査可能な独自のアクセス制限モデルで運営されています。そこからトリガーされたビルドはそのコンテキストにスコープされます。
- この組み合わせ——本番環境外の専用ランナーがアクセス制御されたセキュリティミラーからトリガーされる——は、SOC 2（CC8.1、CC6.1、CC6.6）、FedRAMP、および SLSA L2+ の論理的分離要件を満たします。

## 決定

**新しいモジュール型サービスおよびコンポーネントは dev.gitlab.org を使用する必要はありません。** これらは GitLab.com 上のセキュリティミラーから、専用 CI ランナーフリートを使用してリリースアーティファクトをビルドおよび公開します。

dev.gitlab.org を使用する既存のプロセスは変更なく継続し、より広範なリリースアーキテクチャの進化に合わせて段階的に移行されます。この決定は既存プロセスに影響しません。

## 結果

- 新しいコンポーネントはよりシンプルでメンテナンス負荷の低いビルドパスを持ちます。新しいサービスには dev.gitlab.org へのリポジトリミラーリングは不要です。
- ビルドインフラと本番環境の間の論理的分離が維持され、監査可能です。
- 既存の dev.gitlab.org のツールおよびプロセスは影響を受けません。移行は段階的であり、コンプライアンス上の要件ではありません。
- GitLab.com 障害が GitLab ビルドをブロックする「鶏と卵」の可用性懸念は、dev.gitlab.org 上の既存プロセスにとって引き続き考慮事項です。新しいモジュール型コンポーネントについては、このリスクは各サービスチームが受け入れます。後日これが不適切と判断された場合、現在と同様に第三のミラーを作成し続けることもあります。
- 監査スコープ内のインスタンス数が減るため、監視対象の範囲が縮小されます。
