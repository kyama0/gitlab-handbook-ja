---
title: "セキュリティチームメンバーとしての GitLab 製品への貢献"
upstream_path: /handbook/security/contributing-to-gitlab-the-product/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-07-09T00:48:53+00:00"
---

## Product Security のコード貢献

セキュリティエンジニアは、通常 GitLab のエンジニアリングチームの主題専門家 (SME) およびアドバイザーとして活動します。セキュリティエンジニアは、多層防御策や新しいセキュリティ機能のように、GitLab 製品により大きな貢献をしたい場合があります。

他のコントリビューターと同様に、[Contributor and Development Docs](https://docs.gitlab.com/ee/development/) に従い、特に Issue ワークフロー、マージリクエストワークフロー、スタイルガイド、テスト基準に注意を払ってください。

セキュリティエンジニアは、最終的に Development 部門のチームと協力し、その作業を引き継いでもらう必要があります。そのチームが、貢献の優先順位付け、レビュー、ロールアウト、エラーバジェット、保守を担当します。セキュリティエンジニアは、できるだけ早く Issue または Epic を作成し、所有候補のチームをラベル付けすることが理想的です。チームは実装やアーキテクチャの決定に情報を提供したり、貢献に影響する可能性のある既存または今後の作業を強調したり、貢献のレビュー容量を計画できます。

チームに容量や支援する意思がない場合でも、セキュリティエンジニアの作業は継続できます。誰でも貢献できます。

セキュリティエンジニアからの新機能や拡張のリクエストは、["Requesting something to be scheduled"](/handbook/engineering/workflow/#requesting-something-to-be-scheduled) のプロセスに従ってください。

これは、トリアージとパッチ適用のための別プロセスがあるセキュリティ脆弱性の対処や依存関係の更新には適用されません。

## 外部からのコード貢献

外部から貢献されたコードに対し、特にコード機能に以下のいずれかが含まれる場合に、セキュリティレビューを実施するプロセスを設けています。

- 認証情報/トークンの処理
- 認証情報/トークンの保存
- 権限昇格のロジック
- 認可ロジック
- ユーザー/アカウントのアクセス制御
- 認証メカニズム

セキュリティチームは Community Outreach チームと協力し、関連する場合にセキュリティレビューが実施されることを保証します。貢献の詳細については、[Contribute to GitLab](https://about.gitlab.com/community/contribute/) ページを参照してください。

## パッケージ署名{#package-signing}

当社が出荷するパッケージは、[GitLab ドキュメント](https://docs.gitlab.com/ee/administration/package_information/signed_packages.html) に記載されているとおり、GPG キーで署名されています。鍵ペアを安全な方法で作成・保管するプロセスは、[runbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/packaging/manage-package-signing-keys.md) に記載されています。Distribution チームがパッケージ署名キーの更新を担当します。GitLab における鍵の場所とアクセスに固有の詳細については、Google Drive 上の社内向け Google ドキュメント "Package Signing Keys at GitLab" を参照してください。
