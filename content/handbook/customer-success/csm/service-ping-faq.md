---
title: "Service Ping よくある質問"
upstream_path: /handbook/customer-success/csm/service-ping-faq/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:39:45Z"
translator: claude
stale: false
lastmod: "2025-05-07T11:28:34+00:00"
---

CSM 関連のハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/)をご覧ください。

---

## Service Ping とは

Service Ping は、セルフマネージドインスタンスの顧客分析を生成し、GitLab が顧客と協力して価値実現を加速し、投資対効果（ROI）目標を達成し、GitLab ソリューションでビジネス成果を実現できるようにします。具体的には、製品採用を理解するために GitLab に役立ちます:

1. 採用がビジネス成果（目標、タイムラインなど）に沿っていることを確認する
1. 業界およびベストプラクティスの推奨事項のための使用状況を把握する
1. 以下に基づいてソリューションの価値を最大化する機能や機能をお勧めする:
   - 採用のギャップ
   - 活用できる新機能や機能
1. 計画から監視までの Concurrent DevOps の採用概要を提供するユーザーコホートと GitLab DevOps スコアを有効にする
1. 時間の経過に伴う使用状況と採用を追跡する

各メトリクスの定義については、[Service Ping メトリクスディクショナリ](https://metrics.gitlab.com)をご参照ください。

[Customer Success が Service Ping を使用する他の方法へのリンク](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/)

## Service Ping は私にどのように役立ちますか？

Service Ping は、GitLab のチームの使用状況に関するインサイトを提供し、インスタンス全体のアウトプット、成熟度、改善の可能性のある領域を理解できるようにします。これらの主要なプラットフォーム使用メトリクスを理解することで、共同でイネーブルメントと成長計画のロードマップを戦略的に立案できます。

- Service Ping をアクティブにすることのメリットとして、GitLab により GitLab インストールのユーザーのアクティビティを経時的に分析できます。
- Service Ping をアクティブにすることのメリットとして、GitLab は DevOps スコアを提供します。これにより、計画から監視までの Concurrent DevOps の採用についてインスタンス全体の概要を把握できます。
- Customer Success Manager と連携する際に、より質の高いプロアクティブなガイダンスを受けられます。
- GitLab への投資から最大限の価値を引き出す方法についてのインサイトとアドバイスを受けられます。
- 類似する他の組織（匿名化）との比較を示すレポートを取得し、DevOps プロセスの改善方法に関する具体的なアドバイスと推奨事項を受けられます。

## よくある質問と懸念事項

### 1. Service Ping 経由で送信される情報は何ですか？

GitLab はサービス Ping を通じてセルフマネージドの GitLab インスタンス（Community Edition と Enterprise Edition）から製品使用データを収集します。[こちらでサンプルを確認できます](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/#example-service-ping-payload)。詳細については [GitLab プライバシーポリシー](https://about.gitlab.com/privacy/)をご参照ください。

### 2. ベンダーにデータを送信しないことが会社のセキュリティポリシーです

GitLab はお客様のセキュリティコントロールと満たす必要のある規制要件を理解するためにご協力できます。「アウトバウンドデータ転送」やセキュリティ境界を越えるデータに関する同様の懸念について、リスクを軽減するいくつかのソリューションを見てきました。セキュリティ/コンプライアンス/プライバシー組織の特定のチームメンバーから追加のインサイトを提供できますか？ご懸念を理解しており、各セキュリティチームとの通話を通じてお客様が抱える問題を解決するお手伝いをいたします。通話前に、GitLab はお客様が持つ特定のコンプライアンス要件のご提供をリクエストします。

### 3. GitLab に送信する前に確認できるように、このデータを手動で共有する方法はありますか？

はい、この情報を手動で抽出して GitLab に送信する前に確認することができます。手順は以下の通りです:

1. 管理者として GitLab インスタンスにログインする
1. ホームページのトップナビゲーションバーの「レンチ」をクリックしてインターフェイスの管理セクションに移動する
1. 左のナビゲーションパネルで「設定」にカーソルを合わせ「メトリクスとプロファイリング」をクリックする
1. メトリクスとプロファイリングページが表示されたら、「使用統計」セクションまでスクロールして右側の「展開する」ボタンをクリックする
1. 「ペイロードのプレビュー」ボタンをクリックする
1. 許可されている場合に GitLab インスタンスから gitlab.com に送信されるデータの JSON 形式の出力がポップアップに表示される
1. この情報をテキストファイルにコピー＆ペーストし、暗号化して GitLab に送信するか、組織の gitlab.com 上に安全にホストされている顧客コラボレーションに SSH/HTTPS 経由でアップロードする

### 4. 顧客はデータを視覚化できますか？

はい。GitLab は Service Ping データにアクセスして視覚化するための複数の方法を提供しています:

- **REST API を通じた手動アクセス**:  
  [GitLab の REST API](https://docs.gitlab.com/ee/api/usage_data.html#export-service-ping-data) を通じて Service Ping データを手動でエクスポートできます。これにより、生のペイロードを直接検査できます。

- **GitLab Service Ping ダッシュボード**:  
  GitLab Customer Success は専用の [Service Ping ダッシュボード](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/service-ping-dashboard)を開発しました。これにより、GitLab Pages サイトを通じて過去の Service Ping メトリクスを追跡・視覚化できます。ダッシュボードは以下を行います:
  - API 経由で Service Ping データを取得する。
  - 経時的な過去のデータを保存する。
  - インタラクティブなグラフを生成する。
  - GitLab CI/CD を通じて週次で更新する。
  - メトリクスを分類し、簡単な探索のための検索/オートコンプリートを含む。
  - メトリクスの説明、トレンド、メタデータを自動的に表示する。
  
  このツールにより、顧客は採用トレンドへの深いインサイトを得て、主要な DevOps メトリクスを経時的に監視し、ステークホルダー向けのビジュアルレポートを準備できます。

### 5. ペイロードの内容が変更されていないことをどのように確認できますか？

ドキュメントには GitLab に送り返されるすべての使用統計とコンテンツが記載されています。製品アナリティクスを変更/更新する際、管理パネルで正確な JSON ペイロードを確認できます。ペイロードを確認するには: 管理エリア > 設定 > メトリクスとプロファイリングに移動し、使用統計セクションを展開して、ペイロードのプレビューボタンをクリックします。

### 6. 最初にセキュリティチームの承認が必要です

データを検査して、セキュリティチームに確認してもらうことができます。セキュリティチームは（ELK スタック経由で）GitLab が新しいリリースでセキュリティポリシーに違反していないか継続的に監視できます。このデータを内部の ELK スタックに転送し、GitLab Customer Success Manager に送信する前にサニタイズすることをお勧めします。セキュリティチームが確認・承認できれば、このプロセスを完全に自動化してお客様の手間を省くことができます。

### 7. ネットワークが隔離されており、使用状況をネットワーク外に送信する方法がありません

お客様の組織のネットワークセキュリティポリシーと制限を尊重しており、インターネット経由で Service Ping を送信することが実現不可能または技術的に不可能な状況があることを理解しています。Service Ping がファイアウォール、ロードバランサー、またはプロキシによってブロックされている場合は、Service Ping ペイロードを GitLab に送信できるようにするために[ネットワーク設定の変更](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#network-configuration)を検討してください。

Service Ping データの共有に価値を見出しているが、技術的に直接行うことができない場合、GitLab は特定のデータを必要に応じてサニタイズできるよう、データを手動で共有するための手順をご提供できます。

### 8. Service Ping を無効にするにはどうすればよいですか？

**無料のセルフマネージドインスタンス（CE および EE エディション）**: この機能を無効にしたい場合は、管理パネルの設定ページに移動して Service Ping チェックボックスをオフにしてください。

**有料のセルフマネージドインスタンス（EE エディション）**: 管理パネルの Service Ping チェックボックスをオフにすることで、Service Ping を部分的に無効にできます。ただし、サブスクリプションと顧客成功サービスに関連する特定の Service Ping メトリクスは、サポートまたは営業担当者を通じてのみ無効にできます。詳細については[顧客製品使用情報](/handbook/legal/privacy/customer-product-usage-information/#service-ping-formerly-known-as-usage-ping)をご参照ください。

ペイロードは管理エリアの「/admin/application_settings/metrics_and_profiling」の使用統計セクションで確認し、「ペイロードを表示」ボタンを押すことで確認できます。

製品ドキュメント: Service Ping を無効にする

**重要なドキュメントリンク**

1. [Service Ping の管理設定](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#service-ping)
1. [収集される使用統計](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#usage-statistics-collected)
1. [ネットワーク設定](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#network-configuration)
1. [REST API 経由で Service Ping にアクセスする](https://docs.gitlab.com/ee/api/usage_data.html#export-service-ping-data)
