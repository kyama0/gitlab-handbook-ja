---
title: インシデントロール - インシデント対応者
upstream_path: /handbook/engineering/infrastructure-platforms/incident-management/roles/incident-responder/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T12:25:37-06:00"
---

1. **インシデント対応者として、シフト期間中の最優先事項は GitLab.com の安定性です。**
2. 低下または障害の原因が不明な場合、**インシデント対応者が最初に行うべきアクション**は、何らかの変更を元に戻せるかどうかを評価することです。許可を求めることなく、また躊躇することなく、最近変更されたアプリケーションのフィーチャーフラグをトグル（以前の状態に戻す）することは常に適切です。次のステップは、変更リクエストをレビューしてアプリケーションロールバックの適格性基準を検証することです。
3. 現在の EOC が誰かについての SSOT（唯一の情報源）は、incident.io の [GitLab.com Production EOC](https://app.incident.io/gitlab/on-call/schedules/01K5YWAGZ7YCQGAG7ATQ9XQWHW) スケジュールです。
    1. SRE はスケジュールされたシフトに参加できない場合、カバレッジを手配する責任があります。リクエストを行うには、カバレッジが必要な日時を示すメッセージを `#eoc-general` Slack チャンネルに送信します。あるいは incident.io の「request cover」機能を使用します。カバレッジが見つからない場合は、[EOC コーディネーター](/handbook/engineering/infrastructure-platforms/incident-management/#engineer-on-call-coordinator)に連絡して支援を求めます。
4. incident.io にルーティングされたアラートは 15 分以内に確認応答が必要です。そうでなければオンコールインシデントマネージャーにエスカレーションされます。
    1. incident.io でエスカレーションを作成するアラートは、[`#incidents-dotcom-triage`](https://gitlab.slack.com/archives/alerts) にトリアージインシデントを自動的に作成します。
       1. 真のインシデントと判断された場合は、チャンネルに参加して「Accept it」を選択することでトリアージインシデントを承認します。
       1. 同じインシデントに対して複数のページ/トリアージインシデントが作成された場合は、プライマリインシデントにマージします。ただし、インシデントの解決が優先されます。インシデントを対応中に関連するトリアージインシデントがマージされる代わりに自動クローズされても問題ありません。
       1. アクションが取られずアラートが解消された場合、トリアージインシデントは自動的に却下されます。
    1. [`#alerts`](https://gitlab.slack.com/archives/alerts) および [`#feed_alerts-general`](https://gitlab.slack.com/archives/feed_alerts-general) のアラートマネージャーアラートは、環境の健全性に関する重要な情報源であり、勤務時間中は監視する必要があります。
    1. incident.io のアラートノイズが高すぎる場合、EOC としてのあなたのタスクは、システムを修正するかアラートを変更することでそのノイズを解消することです。
    1. アラートを変更する場合は、変更の理由を説明し、変更が発生したことを次の EOC に通知する責任があります。
    1. 各イベント（複数の関連ページがある場合がある）は `production` トラッカーで Issue を生成する必要があります。詳細については[プロダクションキューの使用](/handbook/engineering/infrastructure-platforms/production/#implementation)を参照してください。
5. アラートシステム外のソースが問題を報告しており、アラートを受信していない場合でも、調査を行う責任があります。[低重大度インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)して、そこから調査してください。
    1. 低重大度（[S3/S4](/handbook/engineering/infrastructure-platforms/incident-management/#severities)）インシデント（および Issue）は手間がかからず、同じ問題を経験している他の人にとっても経験を共有する手段となります。
    2. **「アラートなし」は「問題なし」と同じではありません**
6. GitLab.com は複雑なシステムです。根本的な問題やその原因を十分に理解できなくても構いません。ただし、その場合はインシデント対応者として[IMOC にページ](/handbook/engineering/infrastructure-platforms/incident-management/#how-to-engage-response-teams)して適切な専門知識を持つチームメンバーを見つけてください。支援を要請することは責任を放棄することを意味しません。
7. [S1/S2](/handbook/engineering/infrastructure-platforms/incident-management/#severities) [インシデントが宣言](/handbook/engineering/infrastructure-platforms/incident-management/#report-an-incident-via-slack)されたら、直ちにインシデントの Zoom ルームに参加してください。Zoom リンクは関連するインシデントチャンネルのブックマークに記載されています。
    1. GitLab は非同期での作業を行いますが、インシデントは同期的な対応を必要とします。私たちの集合的な目標は 99.95% 以上の高可用性であり、これはインシデント中にコミュニケーションが行われる必要がある時間スケールが時間や日単位ではなく、秒と分単位で測られることを意味します。
8. GitLab.com のインシデントは「インフラの問題」ではないことを念頭に置いてください。会社全体の問題であり、インシデント対応者として、あなたは会社を代表して対応をリードしています。
    1. 情報やサポートが必要な場合は、エンジニアリングチームと協力してください。合理的な時間内に必要な応答が得られない場合は、IMOC を通じてエスカレーションしてください。
    2. インシデント対応者として、サポートできる可能性がある人に Zoom コールに参加するよう要求し、Slack に調査結果を投稿してインシデントタイムラインにメッセージを固定（📌）することを確認してください。
    3. EOC はインシデント中に**顧客コールに参加することが期待されていません**。技術的な問題の解決に集中してください。
    4. EOC はエスカレーションを正当化する必要なく、いつでも任意の理由で Infrastructure リーダーシップの経路を通じてエスカレーションできます。
9. incident.io でエスカレーションを確認応答することは、それに取り組んでいることを意味します。この確認をさらに強化するために、できるだけ早くインシデントの Zoom に参加することを Slack に投稿してください。
10. _好奇心を持ってください_。_警戒してください_。何かがおかしいと感じたら、さらに調査してください。
