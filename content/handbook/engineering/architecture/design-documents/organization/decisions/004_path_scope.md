---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 004: Organizationパススコープ'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/004_path_scope/
upstream_sha: 7fadd0122802b16e64b0e88962c637a09d27bd53
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-18T16:55:00+13:00"
---

## コンテキスト

既存の製品では、現在のOrganizationコンテキストを常に特定できるわけではありません。現在のシステムを変更してOrganizationsを適切に名前空間化する必要があります。

## 決定

パスベースのOrganizationスコープを実装することにしました。具体的には、Organizationルートに`o`のプレフィックスを付けます。

`https://gitlab.com/o/my-organization/my-group/my-project/-/issues/1234`

後方互換性を確保するために既存のルートを維持します。

Default OrganizationはOrganizationパススコープ内で表現されません。これにより、Self ManagedやDedicatedのような単一OrganizationインストールはパスNを冗長にしなくて済みます。

RESTおよびGraphQLリクエストは`/api/v4`および`/api/graphql`のままとし、Organizationは`organization-id`パラメーターで指定されます。

## 結果

- 後方互換性を確保するために既存のすべてのルートは維持されます。
- Organizationルートは`/o/`スコープ内に存在します。
- RESTおよびGraphQLルートは現状のままとし、`organization_id`は既存の方法で提供されます。
- `o`はGroupまたはUserには使用できません。
- オンプレミスで`o`が使用されている場合、モデルバリデーションでOrganizationの作成が失敗し、`o`を解放するよう要求されます。
- マッピングの詳細を説明する[デシジョンツリー](https://lucid.app/lucidspark/42a3cb25-7b85-49e2-8539-952df0781e1e/edit?beaconFlowId=C3B5807A2EB70840&invitationId=inv_9908f2a1-446d-4f33-9469-07e8b9ff8c76&page=0_0#)があります。

## 代替案

### セグメンテーションの代替案

Organization識別の代替手段が[包括的なスプレッドシート](https://docs.google.com/document/d/1cssSKFJiy-wm07S5ThyacsOhrlTYJmwU13oLnlroEH4/edit?tab=t.0)に詳細が記載されています。

スプレッドシート内の項目のうち、カスタムサブドメインが次に近い候補でしたが、いくつかの問題がありました。

- この機能をテナントレベルで製品に組み込む必要があります。現在はインスタンスレベルの機能です。
- このスキームは私たちの一部のサービスと互換性がありませんでした。例えば、SSHはホスト名でOrganizationを判断できず、ユーザー名などの別の識別子が必要になります。
- Default Organizationから独自のOrganizationに昇格したOrganizationsは、何らかのハイブリッドドメインアプローチなしでは後方互換性を維持できません。
- 別のホスト名を使用する場合、隣接サービス用のサブドメインを追加する必要があります。
- 他にも多くの懸念点がありました。

### スコーピング識別子

`o/`は入力可能な識別子です。

`o`の他に、チルダ（`~`）記号も検討されました。これはすべてのGitLabサービスと互換性があり、URLスコーピングメカニズムとして多少の歴史的前例があります。しかし、`~`文字は技術に不慣れなユーザーには混乱を招く可能性があり、モバイルデバイスや一部のキーボードでは入力が難しいため却下されました。

`/orgs/`や`/-/organizations/`などの他の選択肢も却下されました。
