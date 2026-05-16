---
title: "GitLab Omnibus-Adjacent Kubernetes ADR 003: Omnibus は Kubernetes サービス公開方法に依存しない"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/003_omnibus_agnostic_k8s_service_exposure/
upstream_sha: a27a2f7fbaedbd4b422d73ed991c16ee9a112ca9
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-27T14:54:26-04:00"
---

## コンテキスト

Omnibus NGINX は、隣接する Kubernetes クラスターで実行されている高度なコンポーネントへのすべての外部トラフィックのエントリポイントとして機能します。リバースプロキシ設定を生成するために、Omnibus はそのトラフィックをどこに転送するかを知る必要があります。

ベータ PoC の際に、Omnibus NGINX がサービスの公開方法に関係なく Kubernetes サービスにプロキシできることを検証しました。LoadBalancer パターン（インクラスターロードバランサーの IP へのプロキシ）と NodePort パターンの両方をテストし、Omnibus オートメーションへの変更なしに両方が機能することを確認しました。すべての場合において、Omnibus はプロキシするアドレスのみを必要としました。

これにより、より広い原則が確認されました。Kubernetes サービスを Omnibus から到達可能にするメカニズムは、ユーザーが制御する関心事です。異なるユーザーは異なる有効なソリューションに到達します:

- **同一 VM の ClusterIP**: Kubernetes クラスターが Omnibus と同じ VM で実行される場合、ホストは NodePort や LoadBalancer なしに ClusterIP サービスに直接到達できることがあります。
- **NodePort**: ユーザーが `127.0.0.1`（同一 VM）または特定のインターフェース（別の VM）にバインドされた NodePort を介してサービスを公開します。
- **LoadBalancer**: ユーザーが Kubernetes ディストリビューション組み込みのコントローラーまたは外部のロードバランサーを介してロードバランサーをプロビジョニングし、Omnibus がその IP にプロキシします。

単一の正しい公開メカニズムはありません。それぞれ、ユーザーのインフラ、選択した Kubernetes ディストリビューション、意図する移行パスに応じた有効なトレードオフがあります。

さらに、ユーザーはすべての高度なコンポーネントを単一の共有イングレスアドレスで公開するか、各コンポーネントを独自の個別アドレス（例えばサービスごとに個別の NodePort）で公開するかを選択できます。設定モデルは両方に対応する必要があります。

## 決定事項

Omnibus は Kubernetes サービスの公開方法に依存しない必要があります。OAK クックブックはユーザーが提供したアドレス（IP、ホスト名、または `IP:port`）を受け入れ、NGINX リバースプロキシ設定を生成する際にそれを使用します。Omnibus は Kubernetes クラスター内部でそのアドレスが何を表しているかに制約を課しません。

### 設定モデル

設定は `oak` クックブックの名前空間に存在します。グローバルアドレスがすべてのコンポーネントのデフォルトとして機能します。コンポーネントごとのオーバーライドにより、コンポーネントが個別に公開されている場合（例えば、各コンポーネントが独自の NodePort を持つ場合）にユーザーが個別のアドレスを指定できます:

```ruby
# グローバルアドレス — 上書きされない限りすべてのコンポーネントに使用される。
# 共有イングレス/LB IP、ClusterIP（同一 VM）、または到達可能な任意のアドレスで可能。
oak['address'] = "10.43.25.7"

# コンポーネントごとのオーバーライド — コンポーネントが独自のアドレスで公開される場合に使用。
oak['components']['openbao']['address'] = "127.0.0.1:32080"
```

各コンポーネントの解決順序:

1. `oak['components']['<component>']['address']` — 設定されている場合、これが優先されます。
2. `oak['address']` — 明示的なアドレスなしにすべてのコンポーネントのフォールバックとして使用されます。

Omnibus は設定が必要な各コンポーネントに対して少なくとも一方が解決可能であることを要求します。特定のコンポーネントに対してどちらも設定されていない場合、`gitlab-ctl reconfigure` は明確なエラーメッセージで失敗する必要があります。

## 結果

- **ユーザーの柔軟性**: ユーザーはすべてのコンポーネントで単一のイングレスアドレスを共有するか、コンポーネントごとに個別のアドレスを使用できます。Omnibus オートメーションへの構造的変更なしに両方のパターンがサポートされます。
- **責任の明確な境界**: Kubernetes サービスの公開方法はすべてユーザーの責任です。ドキュメントには一般的なパターン（ClusterIP、NodePort、LoadBalancer）とそのトレードオフを特定のアプローチを義務付けずに記述する必要があります。
- **Omnibus ロジックの簡素化**: Omnibus はサービスアドレスを検出するために Kubernetes API をクエリまたは内省する必要はありません。設定は明示的かつ決定論的です。
- **移行パス**: 同一 VM セットアップ（ClusterIP）のユーザーは、`gitlab.rb` のアドレスを更新して `gitlab-ctl reconfigure` を実行することで、別の VM セットアップ（LoadBalancer または NodePort）に移行できます。Omnibus オートメーションへの構造的変更は必要ありません。
- **ADR-001 との一貫性**: アドレス設定を明示的に保つことで、GitLab が Kubernetes プラットフォームまたはその内部ネットワークトポロジーに対して責任を負わないことが強化されます。
