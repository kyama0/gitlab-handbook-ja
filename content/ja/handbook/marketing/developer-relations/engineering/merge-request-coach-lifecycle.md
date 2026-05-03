---
title: "マージリクエストコーチのライフサイクル"
upstream_path: /handbook/marketing/developer-relations/engineering/merge-request-coach-lifecycle/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## マージリクエストコーチへの応募

- `mr_coach_onboarding` テンプレート (下のスクリーンショットを参照) を使用して、[新しい Issue](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/new?issue_template=mr_coach_onboarding) を作成します。
- Issue テンプレートのプレースホルダーをあなたの情報で埋めます。
- Issue を自分自身にアサインします。
- その新しい Issue の手順を進めます。

![mr_coach_onboarding Issue テンプレートを選択する方法を示す新しい Issue ダイアログ](/images/marketing/developer-relations/contributor-success/new_mr_coach_onboarding_issue.png)

## 円満な辞退

マージリクエストコーチとしての活動を続けることが難しくなった場合は、残りのコーチのキャパシティが同じままになるよう、あなたの代わりとなる別の GitLab チームメンバーを特定する必要があります。辞退する準備ができたら、以下を行う必要があります:

1. `#mr-coaching` Slack チャンネルでアナウンスします。
1. `team.yml` ファイルを更新して "Merge Request Coach" を削除します。
1. `@gitlab-org/coaches` グループから自分自身を削除します。

## 参考資料/リソース

1. [マージリクエストコーチの責任](/job-description-library/expert/merge-request-coach#responsibilities)
1. [マージリクエストコーチのコラボレーションガイドライン](/job-description-library/expert/merge-request-coach#collaboration-guidelines)
1. [コミュニティ Discord チャンネル](https://discord.gg/gitlab): まだ参加していない場合は、ぜひご参加ください！

## 現在のマージリクエストコーチ

GitLab には現在 {{< department-member-count "Merge Request Coach" >}} 人のマージリクエストコーチがいます:

{{< department-members "Merge Request Coach" >}}
