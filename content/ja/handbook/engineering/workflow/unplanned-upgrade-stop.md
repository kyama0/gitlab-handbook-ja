---
title: 計画外のアップグレード停止ワークフロー
upstream_path: /handbook/engineering/workflow/unplanned-upgrade-stop/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

計画外のアップグレード停止は、ロールバックと追加のメンテナンス作業を必要とするため、お客様にとって大きな支障をきたします。計画外の停止はインシデントとして扱うべきです。以下のプロセスは、インシデント解決プロセスのさまざまな段階と、対応するチームおよびDRI（Directly Responsible Individuals）が取るべき手順を概説しています。

高レベルのワークフロー:

1. **計画外のアップグレード停止を検出する**: 計画外のアップグレード停止のインスタンスを特定します。
2. **アップグレードバグを解決する**: 修正をバックポートするか、新しい停止を含むようアップグレードパスを更新します。
3. **計画外のアップグレード停止の根本原因分析を実施する**: 停止が発生した理由を理解し、将来のインシデントを防止します。

## 計画外のアップグレード停止とは？

計画外のアップグレード停止は、[アップグレードパス](https://docs.gitlab.com/ee/update/index.html#upgrade-paths)においてこのアップグレード停止の必要性を伝えられなかった場合に発生します。詳細については、[計画外のアップグレード停止とは何か](https://docs.gitlab.com/ee/development/avoiding_required_stops.html)をお読みください。

計画外のアップグレード停止の最も一般的な原因は、データベースマイグレーションのエラーです。例えば、[16.[012] でのマイグレーションエラー](https://gitlab.com/gitlab-org/gitlab/-/issues/423895)。必須停止のその他の一般的な原因は、[必須停止の回避ドキュメント](https://docs.gitlab.com/ee/development/avoiding_required_stops.html#causes-of-required-stops)に記載されています。

### 計画外のアップグレードの深刻度

お客様への影響による計画外のアップグレード停止の深刻度:

1. 新しいアップグレード停止の導入が必要なアップグレードエラー - 修正/バックポートできない - `~"severity::1"` に `~"unplanned-upgrade-stop"` ラベルを付与
   - 例: [16.[012] 計画外のアップグレード停止](https://gitlab.com/gitlab-org/gitlab/-/issues/423895)
2. 新しい必須停止の導入につながらないアップグレードエラー - 修正/バックポートが可能 - `~"severity::1"`
   - 例: [バックポートされた修正を含む 16.10 マイグレーションエラー](https://gitlab.com/gitlab-org/gitlab/-/issues/451760)
3. 新しい必須停止の導入につながらず、お客様への影響が最小限のアップグレードエラー - `~"severity::2"` / `~"severity::3"` / `~"severity::4"`
   - 例: [issue#448948](https://gitlab.com/gitlab-org/gitlab/-/issues/448948#note_1842489335) お客様がバックアップ/リストアを使用して GitLab インスタンスを移行した際にアップグレードエラーが発生したケース

## 計画外のアップグレード停止の検出

_（DRI: サポートチーム、またはイシューを検出したチーム/個人）_

1. エラーに対する [バグテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Bug.md?ref_type=heads) を使用して Issue を作成します（お客様によってまだ作成されていない場合）
1. 簡単な概要・お客様への影響・検出内容を含む[計画外のアップグレード停止 RCA Issue](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/rca_upgrade_stop.md) を作成してください
1. RCA Issue をバグを所有するエンジニアリングチームの PM または EM に割り当ててください
1. [#f_gitlab_upgrades](https://gitlab.enterprise.slack.com/archives/C04FXB5CP08) Slack チャンネルに投稿してください

## 計画外のアップグレード停止の解決

_（DRI: バグを所有するチームのエンジニアリングマネージャー（EM）によって識別される）_

1. EM は深刻度をレビューし、バグ解決の DRI を特定します。
1. DRI はできるだけ早くバグの解決に取り組みます。最優先事項は修正方法を見つけることです。
1. DRI は該当する場合、お客様のブロックを解除するための回避策をバグに更新します。
1. DRI は修正をバックポートできるかどうかを確認します。バックポートが不可能な場合は、Distribution チームと協力してアップグレードパスを更新し、即時解決のために[計画外の停止を遡及的に追加](https://docs.gitlab.com/ee/development/avoiding_required_stops.html#retroactively-adding-required-stops)します。
1. EM は計画外のアップグレード停止 RCA を実施するための DRI を特定します。
1. RCA DRI は根本原因分析を実施し、是正措置を提起します。
1. RCA DRI はテストカバレッジ分析について Test Platform と協力し、是正措置を提起します。
1. EM は RCA の深刻度に対する [GitLab の Priority ラベル](/handbook/product-development/how-we-work/issue-triage/#priority) ガイドラインに従って是正措置に優先順位を付けます。

## メトリクス

根本原因分析の Issue は、計画外のアップグレード停止に関するメトリクスを収集し、
バグの深刻度と影響に対する可視性をもたらすのに役立ちます。アップグレードに関するすべての RCA の一覧は
[`~RCA` と `~upgrades` ラベルが付いた GitLab プロジェクトの Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=all&label_name%5B%5D=RCA&label_name%5B%5D=upgrades&first_page_size=20) で確認できます。

## リンク

- [必須停止の回避](https://docs.gitlab.com/ee/development/avoiding_required_stops.html)
- [必須停止の追加](https://docs.gitlab.com/ee/development/database/required_stops.html)
- [計画済みアップグレード停止 issue#358417](https://gitlab.com/gitlab-org/gitlab/-/issues/358417)
