---
title: "Workspaces ADR 005: コンテナのユーザー/グループ ID の明示的な定義"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/005_explicitly_set_user_group_id_of_containers/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

[002: ワークスペースのコンピュートとストレージのプロビジョニング](./002_provision_compute_and_storage.md) で Kubernetes を使用することを決定しました。

Kubernetes 上で複数の信頼できないワークスペースを安全に実行する方法が必要です。

## 決定

十分な注意のもと、Kubernetes Pod が実行される [セキュリティコンテキスト](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) を明示的に設定することにしました。
これにより権限昇格を防ぎます。

詳細は [こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/391856#note_1284825444) をご覧ください。

## 結果

プロジェクトを init コンテナとしてクローンするため、クローンされたファイルには特定のユーザー/グループ ID がオーナーとして設定されています。
ユーザーが適切なファイル権限でワークスペース内のファイルにアクセスできるようにするには、すべてのコンテナがプロジェクトをクローンする init コンテナと同じユーザー/グループ ID で実行される必要があります。

ワークスペースを実行するユーザーの Linux ユーザー/グループ ID を明示的に設定するため、ワークスペースの作成に使用されるコンテナイメージは、任意のユーザー ID でコンテナイメージを実行する際のプラクティスに従う必要があります。つまり、コンテナビルド時にコンテナが実行されるユーザー/グループ ID について何も仮定せず、ビルド時にそれに応じてファイル権限を付与する必要があります。

詳細は [こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/396300#note_1375061754) をご覧ください。

## 代替案

他の代替案は検討しませんでした。
