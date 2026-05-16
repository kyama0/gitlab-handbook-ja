---
title: インシデントロール - インシデントリード
upstream_path: /handbook/engineering/infrastructure-platforms/incident-management/roles/incident-lead/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-02T07:33:04-05:00"
---

## インシデントリードの責任

### インシデント中

1. インシデント Slack チャンネルで `/incident update` を使用して定期的なステータスアップデートを投稿する責任があります。これらのアップデートはインシデントの現在の顧客への影響と、インシデントを緩和するために取っているアクションを要約する必要があります。これはインシデントタイムラインの最も重要なセクションです。ステータスページのアップデートに参照されるため、より広いコミュニティが理解できるインシデントと影響の要約を提供する必要があります。
2. インシデント Issue に必要なフィールドが全て適用されていることを確認します。設定されていない場合は、インシデント Slack チャンネルから `/incident field` コマンドを使用して設定してください。
3. [データ分類](/handbook/engineering/infrastructure-platforms/incident-management/#incident-data-classification)に基づいてインシデント Issue が適切に制限されていることを確認します。Issue を機密にするには `/incident field` を使用して `Keep GitLab Issue Confidential` を `true` に設定してください。
4. インシデントリードは、インシデントサマリーがインシデントの全ての主要側面を説明する有用な情報で記入されるまで、インシデントの即時作業が完了したとは見なすべきではありません。
5. インシデントの `post-incident` タブのタイムラインセクションが顧客への影響の開始と終了を正確かつ完全に記録していることを確認します。
6. `/incident summary` の `causes` セクションを更新することでインシデントの説明に根本原因が明確かつ平易に記述されていることを確認します。または、絵文字リアクションを使用して内部ステータスアップデートとして共有することもできます。`:pushpin:` でリアクションすると GitLab インシデント Issue にパブリックコメントが投稿され、`:star:` でリアクションすると GitLab インシデント Issue に内部コメントが追加されます。
7. 全てのフォローアップ項目が適切に文書化され、可能な限り初期オーナーを割り当てることを確認します。
8. コミュニケーションリードから要請された場合に顧客とのやり取りに対応できるようにします。[コミュニケーションリード - 顧客コール管理](communications-lead.html#customer-call-management)を参照してください。

### インシデント後

1. 1 営業日以内に自動作成されたフォローアップ Issue をレビューします。インシデントチャンネルに貼り付けられた Issue は自動的にフォローアップとしてリンクされるため、これらの一部は有効なフォローアップ項目でない可能性があります。
2. 各フォローアップ Issue にインシデントから適切なコンテキストがあることを確認します。
3. フォローアップ Issue を[フォローアップ Issue プロジェクト](https://gitlab.com/gitlab-com/gl-infra/incident-follow-ups/-/issues)から、責任チームの正しいプロジェクトに移動します（通常は `gitlab-org/gitlab` または `production-engineering` になります）。
4. チームやグループなどの適切なラベルをフォローアップ Issue に適用します。
5. インシデントリードはコメントをレビューし、インシデントの重大度に関わらず、Issue の説明に[是正措置](/handbook/engineering/infrastructure-platforms/incident-management/#corrective-actions)が追加されていることを確認する必要があります。
6. 全ての Severity 1 および Severity 2 インシデントについて、[非同期インシデントレビューを開始](/handbook/engineering/infrastructure-platforms/incident-review/#incident-review-process)し、根本原因を所有するチームのエンジニアリングマネージャーに[Feature Change Lock プロセス](/handbook/engineering/#feature-change-locks)を開始する必要があるかもしれないことを通知します。

## S1 / S2 インシデントの特別対応

ページングされた際、IMOC は Sev1 または Sev2 インシデント中に以下の責任を持ち、インシデントが宣言されたら直ちにこれらのタスクに取り組む必要があります:

1. **明確な Severity 1 の影響としてトリアージおよび確認されたインシデントの場合:**
    1. Slack で `/incident escalate` と入力して Infrastructure リーダーシップに通知します。`On-call teams` ドロップダウンメニューで `dotcom leadership escalation` を選択し、`Notification Message` に適切なメッセージを入力します。この通知は 24/7 行う必要があります。
    2. サービスの深刻な障害が発生している大規模な停止の場合、IMOC は Infrastructure リーダーシップと連携して、複数の並行した復旧作業を調整・管理するためにシニアメンバーをインシデントに参加させるべきかどうかを確認する必要があります。これは、複数の並行した復旧作業を調整する責任者がサービスをオンラインに戻すために必要なことについてより深い理解を持つことを確保するためです。
2. コード変更に関連する問題が潜在的な原因として特定され、ロールバックや緊急デプロイを検討する必要がある場合は、Slack ハンドル `release-managers` を使用してリリースマネジメントチームの参加を検討します。
3. [コミュニケーションリード](/handbook/engineering/infrastructure-platforms/incident-management/#communications-lead-responsibilities)によって必要な公開コミュニケーションが正確かつタイムリーに行われることを確認します。[早期かつ頻繁にインシデントを宣言する](/handbook/engineering/infrastructure-platforms/incident-management/#report-an-incident-via-slack)という指針があるため、顧客ステータスアップデートを承認する前にインシデント対応者と顧客への影響を確認することに注意してください。
4. 必要に応じて、[InfraDev エスカレーションプロセス](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/)を使用して開発部門に参加するようインシデント対応者を支援します。
5. 該当する場合、[ビジネス継続性活動](/handbook/business-technology/entapps-documentation/policies/gitlab-business-continuity-plan/)とインシデント対応を調整します。
6. IMOC の新しいメンバーとして最初の重大な Severity 1 または 2 インシデントの後、エンジニアオンコール、コミュニケーションマネージャーオンコール、および（任意で）その他の主要参加者とフィードバックのコーヒーチャットをスケジュールして、関与についての実用的なフィードバックを受け取ります。

IMOC は上記の全項目の DRI ですが、インシデントに関わるインシデントリード、インシデント対応者、またはその他のメンバーのサポートのもとで行うことが期待されています。インシデントがスケジュールされたシフトを超えて続く場合、IMOC は次の IMOC メンバーへの引き継ぎを担当します。

IMOC はページングされない限り、これらのタスクに関わることはありません。これが全ての Sev1 および Sev2 インシデントでデフォルトでページングされる理由です。その他の状況では、[IMOC にページ](/handbook/engineering/infrastructure-platforms/incident-management/#how-to-engage-response-teams)して参加させてください。

### Infrastructure リーダーシップへのページング

Infrastructure リーダーシップに直接ページングするには、`/inc escalate` を実行して `Oncall Teams` ドロップダウンメニューから `dotcom leadership escalation` を選択します。

### Infrastructure Liaison へのページング

確認された Severity 1 インシデント中、IMOC は Infrastructure Liaison にページングします。

Infrastructure Liaison に直接ページングするには、`/pd trigger` を実行して影響を受けたサービスとして `Infrastructure Liaison` を選択します。
