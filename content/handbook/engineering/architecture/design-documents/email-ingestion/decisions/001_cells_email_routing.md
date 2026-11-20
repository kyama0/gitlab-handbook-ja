---
owning-stage: "~devops::plan"
title: "メール取り込み ADR 001: フリート共通のゲートウェイで Cells のメールをルーティングする"
description: "mail_room をベースにした単一のゲートウェイで Cells 向けのメールを取り込み、宛先のリソースを所有する Cell へ転送します。"
status: implemented
creation-date: "2026-11-12"
authors: [ "@mcelicalderonG" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/email-ingestion/decisions/001_cells_email_routing/
upstream_sha: "e645aac6dc6fbb0b759b92ed32f016aaed5ef4b8"
lastmod: "2026-11-20T12:23:14+01:00"
translated_at: "2026-11-20T21:32:46Z"
translator: claude
stale: false
---

{{< engineering/design-document-header >}}

## 背景 {#context}

Cells では、GitLab.com の共有メールボックスがすべての Cell 向けのメールを受信しますが、宛先のプロジェクトやネームスペースはどの Cell にも存在し得ます。

この設計ドキュメントは、GitLab アプリケーション内の Sidekiq ジョブでメールを取り込むことを提案しています。
Cells では、これらのジョブは Cell 内部で実行され、その Cell 上のリソース宛てのメールしか処理できません。

## 決定 {#decision}

Cells 向けのメールは、Cell 群の前段で動作する単一のメールゲートウェイで取り込みます。ゲートウェイは `mail_room` をベースに構築します。

ゲートウェイは [`gitlab-email_handler`](https://gitlab.com/gitlab-org/ruby/gems/gitlab-email_handler) gem を使って、各メールの宛先をオフラインで識別します。
そして Topology Service に対して、どの Cell がその宛先を所有しているかを問い合わせ、ES256 鍵で署名したうえでメールをその Cell の内部 API へ転送します。

設計の全体像については[Cells: 受信メール](/handbook/engineering/architecture/design-documents/cells/impacted_features/incoming-email/)を参照してください。
このサービスは [`gitlab-org/cells/email-gateway`](https://gitlab.com/gitlab-org/cells/email-gateway) です。
GitLab.com にはまだデプロイされておらず、[作業項目 604170](https://gitlab.com/gitlab-org/gitlab/-/work_items/604170) で追跡されています。

この決定は Cell 間でのメールのルーティングを対象とします。
この設計ドキュメントの残りの部分、たとえばカスタムメール取り込みの目標や Self-Managed インスタンスに関する事項については、この決定の対象外です。

## 影響 {#consequences}

- GitLab.com では引き続き `mail_room` を使ってメールを取り込みます。
- キーのパースは `gitlab-email_handler` gem に集約され、GitLab アプリケーションとゲートウェイの双方がこれを共有します。
- 各 Cell は公開鍵のみを保持するため、Cell が侵害された場合でも他の Cell 向けのメールを偽造できません。
- 1 つのサービスがすべての Cell のメールを処理します。ゲートウェイが停止した場合、復旧するまでメールはメールボックスに滞留します。

## 検討した代替案 {#alternatives-considered}

- この設計ドキュメントが提案しているように、GitLab アプリケーション内の Sidekiq ジョブでメールを取り込む案。
  ジョブは Cell 内部で実行されるため、各 Cell は自分が所有するリソース宛てのメールのみを処理できます。
- Cell ごとにメールボックスを分ける案。
  組織が別の Cell へ移動するたびに、受信用のメールアドレスが変更されてしまいます。
- すべての Cell に `mail_room` を配置し、共有メールボックスを読み取る案。
  すべての Cell がすべてのメールを読み取り、そのうち自分が所有するリソース宛てのメールのみを処理することになります。
