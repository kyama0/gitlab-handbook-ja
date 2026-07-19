---
title: よくある質問
description: Customer Support Systems のよくある質問
upstream_path: "/handbook/eta/css/faqs/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

## アクセス関連

### Customer Support Systems が所有するものへのアクセスが必要な場合はどうすればよいですか？

Security の[Access Management Standards](https://internal.gitlab.com/handbook/security/policies_and_standards/access-management-standard/)に従い、私たちは[最小権限の原則](https://csrc.nist.gov/glossary/term/least_privilege)を守っています。そのため、各リクエストをケースごとにレビューします。

プロセスを開始するには、[Individual Bulk Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) Issue を作成してください。マネージャーの承認後、`@jcolyer` と `@dtragjasi` に割り当ててください。状況をレビューし、最適な進め方を決定します。

## チーム関連

### Customer Support Systems のさまざまなコンポーネントの状態をすぐに確認するにはどうすればよいですか？

[ステータスページ](https://statuspage.incident.io/cust-support-ops/main)を使用して、コンポーネントの状態を確認できます。

## Zendesk 関連

### Zendesk の使用中に問題が発生した場合、Zendesk に直接連絡できますか？

まず Customer Support Systems チームに連絡してください。チャンネルで質問し、@support-ops にタグを付けて問題を相談してください。私たちが問題の解決を支援できる可能性は高いです。対応できず Zendesk サポートに直接連絡する必要がある場合は、Customer Support Systems が対応するのが最善です。

### Zendesk が世界的に停止した場合はどうなりますか？

Zendesk はサービスに Pods を使用しているため、インターネットが世界規模で影響を受けた場合にのみ停止します。これにより、ある地域でダウンタイムが発生しても、サービスが円滑に稼働するようにしながら Zendesk は迅速に軽減できます。ただし、Zendesk へのアクセスに引き続き問題がある場合は、Customer Support Systems チームに連絡してください。Zendesk が世界的に停止した場合、メールサポートの選択肢があります（使用の詳細は必要に応じて決定します）。

### 利用できる災害復旧計画はありますか？

Zendesk は、十分な注意を払ってバックアップサーバーにデータを保持しています。これにより、必要なときにデータを復元できます。これらのバックアップは、Zendesk 側の問題で Zendesk が障害を起こした場合に Zendesk を復元するために利用されます。

また、Customer Support Systems チームは、トリガー、自動化、ビュー、マクロ、フォーム、フィールド、条件などをすべて文書化し、すべてをゼロから作成する手間を省いています。

### Zendesk 使用時にアスペクト比が崩れる場合

次のような形で発生する可能性があります。

- グループを使用する前に表示されるタブが 1 つだけになる
- 不自然な空白が表示される

正確な原因はまだ判明していませんが、Zendesk で使用される間隔とグループ化は、モニターのアスペクト比と画面サイズに依存します。この問題が発生した場合、拡大してから縮小する（または縮小してから拡大する）ことで解決することが多いと分かっています。ハードリフレッシュ（Ctrl+Shift+R / Cmd+Shift+R）でも問題を解消できる場合があります。

上記がすべて機能しない場合は、ログアウトし、キャッシュと Cookie を消去してから再度ログインすることを推奨します。
