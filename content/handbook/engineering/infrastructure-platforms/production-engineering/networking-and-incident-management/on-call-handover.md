---
title: "オンコールハンドオーバー"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/on-call-handover/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:14:34Z"
translator: claude
stale: false
---

## オンコールハンドオーバー

[on-call-handovers](https://gitlab.com/gitlab-com/gl-infra/on-call-handovers/issues) プロジェクトには、各 SRE のオンコールシフトに対応する Issue が含まれています。交代するEOC（Engineer on Call）は `handover` Issue テンプレートを使ってシフト中の活動を記録し、次のEOCにアサインします。`#production` チャンネルで `/sre-oncall [handover]` Slack コマンドを使うことでもこのプロセスを簡略化できます。このコマンドは新しい Issue を自動的に作成し、交代前後のEOCのハンドル、未解決・解決済みのインシデント、解消済みアラートなどの情報をあらかじめ記入してくれます。

SRE のオンコールシフト終了時には、注目すべきイベントやインシデントなどについての必須サマリーコメントを [Weekly Reliability (SRE) Team Newsletter](https://gitlab.com/gitlab-com/gl-infra/reliability-reports/-/issues/?label_name%5B%5D=Reliability-Team-Newsletter) にコメントとして **必ず** 投稿してください。現時点でこのサマリーの書式は規定されていませんが、EOC は [このスレッド](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/12323#note_487947960) を参考にすることができます。特定のシフトで特に重要と判断される情報は週ごとに異なり、交代するEOCの裁量に委ねられています。注目すべきインシデントとインシデント中に取られた手順、および次のシフトに引き継がれる可能性が高いこと・再発しそうなことを含めるようにしてください。

週に一度、プロダクションチームはオンコールシフト交代のためのハンドオーバーミーティングを開催します。このミーティングは任意参加ですが、交代する両方のEOC、インシデントマネージャー、および GitLab.com の運用に興味のある方はぜひ参加することを勧めます。

このミーティングは gitlab.com の運用を引き継ぎ、gitlab.com に関連する運用上の問題を議論するために使われます。現在のオンコールレポートの短いレビュー、[oncall](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=oncall) ラベルのついた未解決 Issue、サイトでのユーザー向けエラー、および次のオンコールチームへの優先事項について取り上げます。

チームリードも招待されており、担当サービスに関する特定の問題や注目してほしい事項がある場合は参加してください。

### ミーティング前

現在のオンコール担当者がレポートリンクと議論すべき項目をドキュメントに更新します。

### ミーティング中

* 「GitLab Oncall Handover」ドキュメントの項目を議論します。
* 現在の [オンコール Issue レポート](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=closed&label_name[]=oncall%20report) の7日間グラフをレビューします。
* [未解決のオンコール Issue](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=oncall) をすべて次のオンコールチームにアサインします。

### ミーティング後

現在のオンコール担当者がレポート Issue をクローズします。
