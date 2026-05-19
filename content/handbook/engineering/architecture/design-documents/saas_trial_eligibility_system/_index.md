---
title: "SaaS トライアル資格システム"
status: implemented
creation-date: "2025-01-24"
authors: [ "@dstull" ]
dris: [ "@p_cordero", "@courtmeddaugh", "@dstull", "@qzhaogitlab" ]
owning-stage: "~devops::growth"
participating-stages: ["~devops::growth", "~devops::fulfillment" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/saas_trial_eligibility_system/
upstream_sha: 4b2a1defc6e0116cecb1f346d7dc1d679e674d3f
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

{{< engineering/design-document-header >}}


## まとめ

この設計ドキュメントは、GitLab SaaS 向けの新しいトライアル資格システムの実装計画を概説しています。
このシステムは、さまざまな内部ビジネス条件に従ってユーザーがネームスペースでのみトライアルを開始できるようにすることで
トライアル管理を改善し、トライアルシステムの悪用を防止し、GitLab 側からのトライアル資格チェックのための
効率的なキャッシングメカニズムを実装することを目的としています。
GitLab はさまざまなシナリオでトライアル資格システムを活用します:

- UI 全体の CTA（行動喚起）。
- トライアルの資格があるユーザーが所有するネームスペースの UI 内での一覧表示。
- UI からのネームスペースでのトライアル申し込み。

## 動機

現在、GitLab はデータベースレベルのクエリを使用してトライアルの資格をチェックしています。
これをトリガーした最近のビジネスによる資格要件の追加は
https://gitlab.com/gitlab-org/gitlab/-/issues/500359 で短期的に解決されました。
しかし、これらのクエリはますます複雑になっており、CustomersDot ですでに定義されているロジックの
単なる複製になっています。
この Issue はネームスペースのトライアル資格の SSOT（信頼できる唯一の情報源）として CustomersDot に頼る
必要性が高まっていることを浮き彫りにしました。
CustomersDot はすでに資格条件を定義しており、それを SSOT として使用する方向に移行したいと思います。
これにより、この SSOT メカニズムを構築してトライアル資格スペースでの長期的なビジネスニーズの拡張を
可能にするソリューションを実装し、GitLab を変換して CustomersDot がその SSOT になるよう使用できます。

参考 Epic: https://gitlab.com/groups/gitlab-org/-/epics/16169

### 目標

- GitLab からのトライアル資格チェックのための堅牢で正確なシステムを実装する。
- トライアル資格ルールの容易な拡張を可能にする。

### スコープ外

- セルフマネージドソリューション。
- Duo Pro/Duo Enterprise アドオンのみのトライアル。https://gitlab.com/gitlab-org/gitlab/-/issues/507859#note_2364566118 を参照。

## 提案

新しいトライアル資格システムは以下のコンポーネントで構成されます:

1. CustomersDot API エンドポイント: ネームスペースのトライアル資格をチェックするための CustomersDot システムの新しいエンドポイント。
2. キャッシングメカニズム: ネームスペースのトライアル資格情報を保存するために GitLab にキャッシングを実装する。
3. トライアル申し込みプロセス: 新しい資格基準を使用するよう既存のプロセスを更新する。
4. キャッシュ無効化: 必要に応じてキャッシュを無効化するメカニズムを実装する。

## 設計と実装の詳細

<!--
This section should contain enough information that the specifics of your
change are understandable.
-->

### 1. CustomersDot API エンドポイント

ネームスペースのトライアル履歴をチェックするための CDOT の新しい API エンドポイントを作成します。https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/11481

1. エンドポイントはネームスペース ID のリストを入力として受け入れる必要があります。
2. 各リクエストに対して、エンドポイントは以下を返す必要があります:
    - そのタイプに適格なネームスペース ID を持つ `trial_type`。
3. レスポンスは GitLab による簡単な解析のための標準化されたフォーマット（例: JSON）である必要があります。

```json
{
  "namespaces": {
    "1": ["ultimate_with_gitlab_duo_enterprise","ultimate_on_premium_with_gitlab_duo_enterprise"],
    "2": ["ultimate_with_gitlab_duo_enterprise","ultimate_on_premium_with_gitlab_duo_enterprise"],
    "3": ["ultimate_with_gitlab_duo_enterprise"]
  },
  "success": true
}
```

### 2. キャッシングメカニズム

- その情報に対して CustomersDot への呼び出し後に、ネームスペースのトライアル資格情報を保存するためのキャッシングシステムを GitLab に実装する。
- 既存の GitLab アーキテクチャとの一貫性のためにキャッシングバックエンドとして Redis を使用する。
- パフォーマンスとデータの鮮度のバランスを保つために TTL でトライアル資格情報をキャッシュする。
  - GitLab のデフォルト設定である8時間で問題ないはずです。

### 3. トライアル申し込みプロセス

- 新しい資格基準をチェックするよう トライアル申し込みプロセスを更新する。
- CustomersDot API 呼び出しとキャッシングメカニズムをプロセスに統合する。

### 4. キャッシュ無効化

- データの一貫性を確保するためのキャッシュ無効化メカニズムを実装する。
- プラン更新後や新しいトライアルの申し込み後など、関連するネームスペースデータが変更された場合にキャッシュを無効化する。

## パフォーマンスの考慮事項

- キャッシングメカニズムにより、CustomersDot API への負荷が大幅に削減されます。
- キャッシングにより、GUI の応答時間は GitLab データベースからデータをクエリする現在のソリューションと比較して著しく増加しないはずです。
- データの鮮度とシステムパフォーマンスのバランスを保つためにキャッシュの TTL と無効化戦略を最適化する。

## スケーラビリティの考慮事項

- キャッシングシステムは、この追加使用について GitLab.com スケールを処理できるよう設計される必要があります。

## 欠点

- トライアル資格チェックプロセスの複雑さが増す。
- キャッシュの無効化が適切に処理されない場合の不整合の可能性。
- CustomersDot API 呼び出しとチェックのために GitLab 側からのトライアル資格の問題のトラブルシューティングにかかる時間がわずかに増加する可能性がある。
- 開発環境でのトライアルフローのテストには、CustomersDot API を呼び出す領域のテストにより多くのセットアップが必要になる場合がある。
  現在はデータベースにデータを作成するだけです。おそらく Redis（キャッシュ）にデータを入力することで同じことができます。

## 代替ソリューション

- 現在の GitLab データベースクエリを使用して何もしない。
  - トライアル資格ルールの複雑さが増しているため、また CustomersDot と GitLab 間でこれらのルールが重複しているため却下。
- GitLab に CustomersDot ではなく直接トライアル履歴を保存する。
  - 既存のシステムとの一貫性の必要性と潜在的なデータ重複のため却下。
- キャッシングを実装しない。
  - CustomersDot への頻繁な API 呼び出しによる潜在的なパフォーマンスの問題のため却下。
