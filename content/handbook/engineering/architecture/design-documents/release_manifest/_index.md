---
title: "GitLab リリースマニフェスト"
description: "GitLab リリースマニフェストは、特定の上位 GitLab バージョンと互換性がある GitLab のモジュール式コンポーネントのバージョンに関する構造化データを提供します"
status: ongoing
creation-date: "2026-08-07"
owning-stage: "~devops::gitlab delivery"
authors: ["@siddharthkannan", "@rpereira2", "@jennykim-gitlab" ]
dris: ["@skarbek"]
coaches: ["@nolith", "@skarbek"]
toc_hide: false
upstream_path: /handbook/engineering/architecture/design-documents/release_manifest/
upstream_sha: 7a4e62958b31234a80d386bf4b7c8dd855df2cb8
lastmod: "2026-09-08T18:17:26-04:00"
translated_at: "2026-09-10T11:03:04+00:00"
translator: codex
stale: false
---

## 概要 {#summary}

GitLab リリースマニフェストは、特定の上位 GitLab バージョンと互換性がある GitLab のモジュール式コンポーネントのバージョンに関する構造化データを提供します。この情報は、[GitLab Orbit](/handbook/engineering/architecture/design-documents/orbit/) や [Artifact Registry](/handbook/engineering/architecture/design-documents/artifact_registry/) などのモジュール式コンポーネントを含む GitLab 環境を提供することを目的とした、社内外のインストールツールで使用されることを想定しています。リリースマニフェストは、（モジュール式コンポーネントを含む）GitLab の初回インストールと、GitLab を自動的にアップグレードする際の体験を簡素化することに特に重点を置いて構築されています。

## ゴール、非ゴール、前提条件 {#goals-non-goals-and-assumptions}

### ゴール {#goals}

1. GitLab バージョンと互換性があるモジュール式コンポーネントのバージョンを伝える
1. モジュール式コンポーネントのリリースサイクルが、GitLab の現在のリリーススケジュールに左右されないようにする
1. GitLab インストールの大部分を変更せずに、単一のモジュール式コンポーネントをアップグレードできるようにする
1. リリースマニフェストを構造化し、機械可読にする
1. GitLab バージョンの公開後は、リリースマニフェストを不変にする

### 非ゴール {#non-goals}

1. [Managed versioning](https://gitlab-org.gitlab.io/release/docs/components/managed-versioning/#components-under-managed-versioning) を置き換える
1. GitLab Rails コードベース内の `*_VERSION` ファイル（[GITLAB_KAS_VERSION](https://gitlab.com/gitlab-org/gitlab/-/blob/master/GITLAB_KAS_VERSION?ref_type=heads)、[GITALY_SERVER_VERSION](https://gitlab.com/gitlab-org/gitlab/-/blob/master/GITALY_SERVER_VERSION?ref_type=heads) など）を置き換える
1. モジュール式コンポーネントのバイナリ、Docker イメージ、Helm チャートをビルドしたり、既存の GitLab Helm チャート、CNG イメージ、Omnibus パッケージにバンドルしたりする

### 前提条件 {#assumptions}

1. モジュール式コンポーネントはセマンティックバージョニングに従い、[Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) を使用してセマンティックリリースを生成する
1. モジュール式コンポーネントは、バイナリ、コンテナイメージ、Helm チャートなどの独自のビルドアーティファクトをビルドする
1. モジュール式コンポーネントは、それぞれのペースでリリースにタグを付けて公開する

## 現在の状態 {#present-state}

各 GitLab バージョンは、Rails コードベース以外にも多くのコンポーネントで構成されています。これらのコンポーネントのバージョンを保存するために一般的に使用されている方法は、**Rails コードベースに `*_VERSION` ファイルを追加することです。**この方法は現在、Gitaly、KAS、Pages、Shell、Zoekt、OpenBao などで使用されています。

このバージョンファイルはさまざまな方法で更新されます。[OpenBao](https://gitlab.com/gitlab-org/gitlab/-/commits/master/GITLAB_OPENBAO_VERSION?ref_type=heads) では手動、[Zoekt](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/239781) では Renovate Bot を使用して更新されます。また、[リリースツール](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/245784)を使用する更新は、[Managed Versioning](https://gitlab-org.gitlab.io/release/docs/components/managed-versioning/#components-under-managed-versioning) の対象コンポーネント（Gitaly と KAS）で行われます。

[Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) を使用して独自のリポジトリからビルド、リリースされる新しいモジュール式コンポーネントが、数十個の規模で急速に追加されると予想しています。このシナリオでは、新しいモジュール式コンポーネントごとに Rails コードベースへ `*_VERSION` ファイルを導入し、保守することは現実的ではなくなります。リリースマニフェストは、[Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) が提供する標準化を基盤として、バージョン管理を簡素化することを提案します。

## 提案するソリューション {#proposed-solution}

リリースマニフェストは、GitLab リリースが公開されるたびに、**各モジュール式コンポーネントの互換バージョンのスナップショットを取得**し、ほかのツールが利用できるよう機械可読形式で保存します。特定の GitLab バージョンから、その GitLab バージョンで動作するすべてのモジュール式コンポーネントの互換バージョンへのマッピングを提供します。

``` mermaid
flowchart LR
    MCR[Modular Component - Release published] -->|Component entry updated in the Mutable catalog| RMMut[(Mutable Catalog)]

    GRS[GitLab Release Schedule] -->|GitLab monthly or weekly scheduled release published| GRP[GitLab Release Published]

    GRP ==> |Release manifest frozen for the current milestone| RMMut
    GRP ==> |Release manifest initialized for the next milestone| RMMut

    subgraph RM[Release Manifest]
        direction TD
        RMMut

        RMMut ==>|Release manifest frozen for the current milestone| RMImmut[(Immutable Record)]

        RMImmut
    end

    linkStyle 2 stroke:red
    linkStyle 3 stroke:blue
    linkStyle 4 stroke:red
```

これには、次の 2 つが含まれます。

1. 将来の GitLab リリースに対応する互換バージョンの**可変カタログ**: このカタログは [Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) 内の CI ジョブを使用して自動的に更新されるため、モジュール式コンポーネントを開発するチームの介入は必要ありません。Release Framework ではコンポーネントがセマンティックバージョニングに従う必要があるため、すべての Release Framework コンポーネントがデフォルトで可変カタログに含まれます。
1. 過去の GitLab リリースに対応する互換バージョンの**不変レコード**: GitLab リリースがユーザーに公開されると、そのリリースのカタログエントリが不変ストアにコピーされます。これは、将来の任意の時点でこのバージョンをインストールしようとするすべてのツールの参照情報となります。

## データモデル {#data-model}

{{% alert %}}
以下のデータモデルは [JSON Schema](https://gitlab.com/gitlab-org/release/manifests/schema/-/blob/main/json-schemas/release-manifest.schema.json) として公開されています。両方のマニフェストプロジェクトで、CI によりすべてのファイルをこのスキーマに照らして検証します。プロジェクトについては[保存先](#storage)を参照してください。
{{% /alert %}}

### 可変カタログ {#mutable-catalog}

今後の GitLab リリース 19.5.0 に対応する [`artifact-registry`](https://gitlab.com/gitlab-com/gl-infra/infra-mgmt/-/blob/f3439969fdf44ddc0d76fcd197a9c5787897e379/data/projects/release-platform/repos.yaml#L137) のリリースマニフェストエントリは、ファイル `19/5/0/artifact-registry.json` 内に置かれます。文字列 `artifact-registry` は、[Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) 内でのモジュールの ID です。リリースマニフェストでは、これを識別子として使用します。

エントリの内容は次の形式になります。

``` json
{
  "version": "1.275.1",
  "sha": "6cdaf83c809b7d02c794d5db2dea9e101c662ac7",
  "ref": "v1.275.1",
  "source": {
    "url": "https://gitlab.com/gitlab-org/ops/artifact-registry"
  }
}
```

同様に、[`knowledge-graph`](https://gitlab.com/gitlab-com/gl-infra/infra-mgmt/-/blob/f3439969fdf44ddc0d76fcd197a9c5787897e379/data/projects/release-platform/repos.yaml#L213)（GitLab Orbit）のエントリは、ファイル `19/5/0/knowledge-graph.json` 内に置かれ、次の内容になります。

``` json
{
  "version": "0.95.3",
  "sha": "51aab3662a8764f47616acefdff8163312bd2bc6",
  "ref": "v0.95.3",
  "source": {
    "url": "https://gitlab.com/gitlab-org/orbit/knowledge-graph"
  }
}
```

このようなエントリは、[コンポーネント](https://gitlab.com/gitlab-com/gl-infra/infra-mgmt/-/blob/main/data/projects/release-platform/repos.yaml)のうち、[Release Framework](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/release-platform/) を使用して管理されるすべてのものに存在します。

可変カタログは、モジュール式コンポーネントのバージョンがユーザーに公開された**後にのみ**更新されます。これにより、モジュール式コンポーネントチームは、コンポーネントのバージョンを包括的な GitLab バージョンに含めるタイミングを制御できます。

### 不変レコード {#immutable-record}

リリース 19.5.0 がユーザーに公開されると、複数のコンポーネントのバージョン情報を単一のファイル `19/5/0.json` に統合します。このファイルの内容は次の形式に従います。

``` json
{
  "version": "19.5.0",
  "modules": {
    "artifact-registry": {
      "version": "1.275.1",
      "sha": "6cdaf83c809b7d02c794d5db2dea9e101c662ac7",
      "ref": "v1.275.1",
      "source": {
        "url": "https://gitlab.com/gitlab-org/ops/artifact-registry"
      }
    },
    "knowledge-graph": {
      "version": "0.95.3",
      "sha": "51aab3662a8764f47616acefdff8163312bd2bc6",
      "ref": "v0.95.3",
      "source": {
        "url": "https://gitlab.com/gitlab-org/orbit/knowledge-graph"
      }
    }
  }
}

```

## 保存先 {#storage}

リリースマニフェストは、`gitlab-org/release/manifests` 配下の 3 つの専用プロジェクトに置かれています。モジュールの作成者と利用者は、ここから確認してください。

| プロジェクト | 内容 | 可視性 |
| --- | --- | --- |
| [`manifests/unreleased`](https://gitlab.com/gitlab-org/release/manifests/unreleased) | 可変カタログ。コンポーネントごとに 1 ファイルを `{major}/{minor}/{patch}/{module-id}.json` に保存します | 非公開。社内の利用者は Delivery: Release and Deploy チームに、Reporter ロールでのグループ共有を依頼します |
| [`manifests/released`](https://gitlab.com/gitlab-org/release/manifests/released) | 不変レコード。公開済み GitLab リリースごとに 1 ファイルを `{major}/{minor}/{patch}.json` に保存します | 公開 |
| [`manifests/schema`](https://gitlab.com/gitlab-org/release/manifests/schema) | 両方の層で検証に使用する [JSON Schema](https://gitlab.com/gitlab-org/release/manifests/schema/-/blob/main/json-schemas/release-manifest.schema.json) | 公開 |

どちらのデータプロジェクトでも、人が `main` に直接プッシュすることはありません。`main` のプッシュ許可リストには、リリース自動化ボットだけが登録されています。人が行う変更はマージリクエストを経由する必要があり、そこで CI チェックによって取り込みの可否を判定します。両プロジェクトとも、すべてのファイルをスキーマに照らして検証します。さらに、レコードのプロジェクトでは既存のレコードファイルを変更するマージリクエストを失敗させることで、「公開後は不変」というゴール（[ゴール](#goals)を参照）を慣例ではなく仕組みで強制します。意図的な訂正は引き続き可能です。その場合は `record-change-approved` ラベルが必要で、ラベルがあればジョブは成功し、変更したファイル名を示す監査コメントを投稿します。

### エントリの書き込み方法 {#how-entries-are-written}

リリースマニフェストへの書き込みは、別々の 2 つのイベントによって、それぞれ異なるプロジェクトに対して行われます。

**モジュールのバージョンが公開されるとき。** [release-tools](https://gitlab.com/gitlab-org/release-tools) が、今後公開予定の GitLab バージョンごとに、そのモジュールのエントリを[可変カタログ](https://gitlab.com/gitlab-org/release/manifests/unreleased)に追加します。書き込みは GitLab のリリースを待たず、他のモジュールにも影響しません。これにより、モジュールのリリースサイクルを GitLab のリリーススケジュールから独立させます（[ゴール](#goals)を参照）。

**GitLab のバージョンが公開されるとき。** release-tools が、そのバージョンのカタログエントリを[不変レコード](https://gitlab.com/gitlab-org/release/manifests/released)の 1 つのファイルに固定し、同じエントリを次のバージョンのカタログに引き継ぎます。それ以降、その固定されたファイルが当該 GitLab バージョンの参照情報となり、変更されることはありません。

エントリを引き継ぐことで、モジュールが再び公開されるまで、最後に公開されたバージョンをカタログ内に保持します。リリース頻度の低いモジュールも後のレコードに引き続き含まれ、サイクル中にモジュールが公開された場合は、そのエントリが置き換わります。

## 関連ドキュメント {#related-documents}

1. [GitLab R&D Summit 2026 - Release Manifest Demo（GitLab Delivery）- Google Slides](https://docs.google.com/presentation/d/1jLXML2-2vIdtJ9TflasVgZtaoAs02WFS4M5oQ8c9dg4/edit?slide=id.g12b319f6181_0_0#slide=id.g12b319f6181_0_0)
1. デモで使用したリポジトリとコンテンツ。[保存先](#storage)に示した本番プロジェクトに置き換えられています
   1. [可変カタログ](https://gitlab.com/gitlab-org/release/demo-release-manifests/unreleased/-/blob/main/19/0/5/gitaly.json)
   1. [不変レコード](https://gitlab.com/gitlab-org/release/demo-release-manifests/released/-/blob/main/releases/19/1/1.json)
1. [実装の詳細とコンポーネントの変更](https://gitlab.com/groups/gitlab-com/gl-infra/software-delivery/-/work_items/39#note_3587819537)
