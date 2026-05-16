---
title: "インフラエスカレーション"
upstream_path: /handbook/customer-success/csm/escalations/infrastructure/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:47:38Z"
translator: claude
stale: false
lastmod: "2025-12-15T11:32:24-06:00"
---

## インシデント管理のためのインフラエンジニアリングチームプロセス

インフラインシデントが発生した場合のロール・責任、コミュニケーション、ワークフローの決定的な記録については、インフラの[インシデント管理ハンドブックページ](/handbook/engineering/infrastructure-platforms/incident-management/)を参照してください。

## インフラインシデントに関する顧客コミュニケーション

`~severity::1`/`~severity::2` として宣言されたインシデントについては、[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が必要です。インシデントレビューはインシデント Issue 内で非同期に作成され、そのワークフローは[プロダクションインシデントボード](https://gitlab.com/gitlab-com/gl-infra/production/-/boards/1717012?label_name[]=incident)で追跡されます。インシデントレビュープロセスの詳細については、インフラの[インシデントレビュープロセス](/handbook/engineering/infrastructure-platforms/incident-review/)を参照してください。CSM は SaaS インシデントのアップデートを SaaS 週次ミーティングを確認することでセルフサービスで入手できます。そのアジェンダと、トピックが記載されていない場合の CSM 向け追加手順については、[ここのインフラハンドブックセクション](/handbook/engineering/infrastructure-platforms/incident-review/)をご覧ください。

カスタマーサクセスは、インシデント Issue を唯一の情報源（SSOT）として使用し、CSM とその顧客がアップデートのために Issue を参照するよう促します。これは、重複した情報が古くなることを防ぐことを目的としています。

インシデント Issue が機密の場合、CSM は https://status.gitlab.com で CMOC によって共有されたものなど、公開されているコミュニケーションを活用する必要があります。

インシデントの解決直後に、インシデント Issue 内でインシデントレビューを作成するための非同期作業が開始されます。7 営業日以内にインシデントレビューが完了し、対応に最後に割り当てられたインシデントマネージャーが適切なラベルを付けて、毎週火曜日に開催されインフラの[同期レビューミーティング](/handbook/engineering/infrastructure-platforms/incident-review/)のアジェンダに追加し、GitLab チームミーティングカレンダーに公開する責任があります。

CSM が自分の顧客が影響を受けたと考える根拠がある S1/S2 インシデントについては、CSM がプロアクティブに顧客に連絡し、顧客への影響の有無と程度、および次のステップを把握することを強くお勧めします。ほとんどの顧客にとって、プラットフォーム通知やインシデント Issue のアップデートに加えて、プロアクティブな CSM コミュニケーションで十分です。

### すべての顧客に影響するインシデント

上位 ARR 顧客やインシデントにより大幅な影響を受けた顧客については、顧客向けの[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が顧客またはCSM/GitLab リーダーシップによってリクエストされる場合があります。この顧客向けレビューは、インシデントが週次レビュー中に内部でレビューされた後にのみ進めるべきです。CSM はインシデントマネージャーと連携してタイムラインを明確にし、顧客向けミーティングを調整します。顧客が GitLab チームとの RCA を求めた場合、または CSM が必要と感じる場合は、CSM は次のステップについて CSM マネージャーと協力します。効率性のために、これらのミーティングは最小限に抑えるよう努めます。

CSM または CSM マネジメントが、顧客向けのエグゼクティブサマリーが必要と判断した場合は、CSM マネジメントにこのサマリーのリクエストを行います。CSM マネジメントはインフラマネジメントと協力してサマリーを作成し、影響を受けた顧客に送付するためにすべての CSM が利用できるようにします。

### 1 つまたは少数の顧客に影響するインシデント

インシデントが単一または少数の顧客に影響を与える場合、該当する CSM は火曜日の同期レビューミーティングに参加して貢献し、顧客の次のステップを決定することができます。

上記のいずれかのシナリオで、インシデントが顧客エスカレーションの必要性を生じさせた場合、CSM は[定義されたエスカレーションプロセス](/handbook/customer-success/csm/escalations/#definitions-of-severity-levels)に従います。
