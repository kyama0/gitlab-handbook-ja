---
title: "Workspaces ADR 016: ワークスペース内で sudo コマンドを実行できるようにする"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/016_allow_users_to_run_sudo_commands/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

開発環境では、実行時に依存関係をインストール・設定・使用するために sudo 権限が必要なことがよくあります。現在、sudo 権限でコマンドを実行することはできません。

特権昇格を引き起こすことなく、ユーザーが安全に sudo を使用できるようにする必要があります。

## 決定事項

Kubernetes は Pod 内のコンテナ中でコンテナを安全に実行する方法を提供していません。Kubernetes には [User Namespaces](https://kubernetes.io/docs/concepts/workloads/pods/user-namespaces/) のような機能がありますが、本稿執筆時点では一般提供されていません。そのため、多くのユーザーが含まれると思われるマネージド Kubernetes サービスを使用している顧客は、この機能が Kubernetes のフィーチャーフラグの後ろにあるため使用できません。

Kubernetes 上に構築された既存のツールを活用して、ユーザーがコンテナ内で安全に sudo 権限でコマンドを実行できるようにすることを決定しました。これらの既存ツールには [Sysbox](https://github.com/nestybox/sysbox) と [Kata Containers](https://github.com/kata-containers/kata-containers) が含まれます。また、User Namespaces のサポートも追加することにしました。

詳細は[こちら](https://gitlab.com/groups/gitlab-org/-/epics/13983)をご参照ください。

## 影響

ユーザーが sudo 権限でコマンドを安全に実行できる方法を提供しなければ、ローカル開発環境の代替を目指す Workspaces の価値提案を損なうことになります。

Sysbox と Kata Containers を活用することは、機能面でサードパーティツールに依存することを意味します。

コンテナ内で安全に昇格した権限を提供することは難しく困難な問題であり、多大な投資が必要となるためこれは許容範囲です。たとえ実現しても、顧客が設定しなければならない Kubernetes 上のカスタムツールになります。そのようなカスタムツールのメンテナンスコストは非常に高くなります。

## 代替案

[KubeVirt の使用を検討しましたが、採用しないことにしました](https://gitlab.com/gitlab-org/gitlab/-/issues/456947)。KubeVirt は Custom Resources を使用して Kubernetes と統合されており、私たちの Kubernetes との統合モデルには合わないためです。
