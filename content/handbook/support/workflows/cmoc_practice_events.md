---
title: CMOC練習イベント
category: On-call
description: "Support EngineeringのCMOC四半期練習イベントの概要と運営方法を提供します"
upstream_path: /handbook/support/workflows/cmoc_practice_events/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
---

## CMOC練習イベント

Support Engineeringでは、四半期ごとにグローバルにCMOCインシデントの練習イベントを実施することを目指しています。各イベント（リージョンごとに1回）の正確な日時は、CMOCに事前には知らされません。これは、実際のイベントが予期せず発生する性質を再現するためです。

### 目的

練習イベントは、CMOCの責務に関連するアクティビティとプロセスを練習する機会を提供します。これは合格・不合格を判定するテストではなく、経験を積むためのチーム演習であり、プロセスとドキュメントをイテレーションする機会です。

### 成果

- Status.io のようなツールに慣れることで、実際の緊急時にコミュニケーションのボトルネックにならないようにする
- CMOCプロセスへの慣れと、実際のイベントでの自信の向上
- インシデントルーム、Slack #incidents-dotcom チャンネル、およびインシデント中にIncident Manager・EOC・CMOC間でコミュニケーションがどのように形式化されるかへの慣れ
- 振り返りを行い、友好的な聴衆からライブのフィードバックを得る機会

### 参加者

- マネージャーまたはシニアサポートエンジニアが **Incident Manager** の役割（適切な場合はEOCも）を果たし、練習イベントとシナリオを進行します
- **記録係**（別のマネージャーまたはシニアエンジニア）が、イベント中に特定された学び、改善点、ドキュメントやプロセスのギャップを記録します
- ローテーションに登録されている **CMOC** が、実際のインシデントであるかのように参加します（実際のインシデントや忙しいインシデントルームのプレッシャーはありません！）

### 練習イベントのツール、成果物、リファレンス

- 練習イベントの [Issueテンプレート](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/CMOC%20Practice%20Event.md)
- status.io の練習環境 - [status.io test](https://app.status.io/statuspage/5b36dc6502d06804c08349f7)
- [イベントフィードバックテンプレート](https://docs.google.com/document/d/1jMMpnwyfmQXI0uRoqk4AyvpwI75PevjyjeHOKNl1PPs/edit#heading=h.c2zm35l7tdgg) - 四半期イベントのコーディネーターが各四半期の新しいバージョンを作成
- [スクリプトライブラリ](https://docs.google.com/document/d/1vz64G0KUVnDwyUbqNsk12VuakU_IkeEfZtBBGFNrLtM/edit#heading=h.1acgctaxu9mf) - Support Manager（および練習イベントでIncident Manager役を担うSE）に限定された機密情報
- [CMOCワークフロー](/handbook/support/workflows/cmoc_workflows) ハンドブックページ
- [インシデントの役割と責任](/handbook/engineering/infrastructure-platforms/incident-management/#incident-response-roles) ハンドブックページ

### 方法: 四半期練習イベントを作成・調整する

**前提**: 四半期のコーディネーターとして DRI が割り当てられていること。コーディネーターは以下を完了する（または完了のために委任する）必要があります。

- まず、[テンプレート](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/CMOC%20Practice%20Event.md) から新しい練習イベントIssueを作成します

テンプレートには、作成すべき他の成果物とイベントのスケジュール方法に関する手順が含まれています。
