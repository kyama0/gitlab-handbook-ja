---
title: "ドメインモジュールをパッケージに変換する"
status: proposed
creation-date: "2023-09-29"
authors: [ "@fabiopitino" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/packages_extraction/
upstream_sha: 7970b7fb241c268e1af118c106ab79642da33ed0
translated_at: "2026-04-27T13:58:39Z"
translator: claude
stale: false
---

既存のコードをモジュール化にリファクタリングする一般的な手順は以下のとおりです:

1. 同じ [境界付けられたコンテキスト](bounded_contexts.md) に関連するすべてのクラスとモジュールに同じ名前空間を使用します。

   - **なぜ?** コードベースに存在するドメインについてある程度理解していないと、計画を立てることが難しいです。
     誰もが理解できるよう適切に名前空間化されたコードは、モジュール化の前提条件でもあります。
   - ドメインがすでに適切に名前空間化されており、類似または関連する名前空間が存在しない場合は、次のステップに直接進めます。
1. Packwerk パッケージのために Rails 開発環境を準備します。これは **一度きりのステップ** であり、時間の経過とともに改善が加わることがあります。

   - [この PoC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129254/diffs#note_1512982957) で示されているように、Rails 自動ローダーが Packwerk のディレクトリ構造で動作するようにします。
   - CI のマージリクエストで [Danger-Packwerk](https://github.com/rubyatscale/danger-packwerk) を実行します。
   - Packwerk のチェックを Lefthook の pre-commit または pre-push で実行することも検討します。
1. ファイルを Packwerk パッケージに移動します。

   - Packwerk パッケージを作成し、ファイルをパッケージに段階的に移動することで構成されます。
   - Packwerk パッケージ内では、`app/` または `lib/` のどちらにあっても定数が正しく自動ロードされます。
   - このフェーズでは、ドメインコードがパッケージディレクトリと Rails ディレクトリ構造の間で分割されることがあります。
     **ここは素早く進める必要があります**。
1. パッケージが [依存関係を明示的に宣言](https://github.com/Shopify/packwerk/blob/main/USAGE.md#enforcing-dependency-boundary) し、他のパッケージの [公開インターフェイス](https://github.com/rubyatscale/packwerk-extensions#privacy-checker) にのみ依存するよう要求することで、名前空間の境界を強制します。

   - **なぜ?** それまではプライバシーを強制していないため、すべての定数がパブリックです。既存のファイルを境界を強制せずにパッケージに移動することで、Packwerk のプライバシー違反に気を取られることなく、名前空間をパッケージにラップすることに集中できます。その後プライバシーを強制することで、様々な定数とドメイン間の結合についての理解が深まります。
   - これにより、どの定数をパブリックにする必要があるか（他のパッケージで使用されている）と、どの定数をプライベートのままにできるか（カプセル化の恩恵を受ける）がわかります。Packwerk の記録された違反（RuboCop の TODO と同様）を使用して、時間をかけてコードをリファクタリングします。
   - 全体的なアーキテクチャでどこに位置するかを確認するために、依存関係グラフを更新できます。
1. Packwerk の記録された違反を解消するためのリファクタリングに取り組みます。**これは長期的なフェーズ** であり、ドメインの DRI が時間をかけて育てていく必要があります。Packwerk の失敗と依存関係の図を使用してモジュール設計に影響を与えます。

   - クラスがパブリックではなくプライベートであるべきかどうかを再検討し、より良いインターフェイスを作成します。
   - 別のパッケージと結合度が高すぎる場合は定数を別のパッケージに移動します。
   - お互いに結合度が高すぎる場合はパッケージを統合します。

Rails アプリケーションに Packwerk が設定されると（上記のステップ 2）、新興のドメインを直接 Packwerk パッケージとして実装でき、即座に分離と明確なインターフェイスの恩恵を受けられます。
