---
title: ハンドブック エスカレーション
upstream_path: /handbook/about/escalation/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T04:59:08Z"
translator: claude
stale: false
---

チームメンバーの役割と責任については、[コンテンツウェブサイトのページ](maintenance.md)をご覧ください。

## はじめに

ハンドブックは、チームメンバーが効果的に業務を遂行できるようにするための重要な要素です。そのため、すべてのチームメンバーに影響を与えるIssueの解決を支援するグループが存在します。

## Issueの報告

一般的なヘルプについては、[ハンドブック編集ページ](editing-handbook/_index.md#need-help)をご覧ください。

業務を停止させるIssueは、Slack の [#handbook-escalation](https://gitlab.slack.com/archives/CVDP3HG5V) チャンネルに報告してください。
それ以外の場合は、関連する[コンテンツサイトリポジトリ](https://gitlab.com/gitlab-com/content-sites/)でIssueを作成し、[#handbook Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)に投稿することを検討してください。

### Issueをエスカレーションするタイミング

Issueのエスカレーションは、以下に関連する場合にのみ行ってください：

1. デフォルトブランチが壊れている場合
1. インフラが壊れている場合
1. 更新作業でIssueが発生している、時間的に敏感なハンドブックの更新

## 「main をグリーンに保つ」グループ

`#handbook-escalation` に投稿しても応答が得られない場合は、[ハンドブック DRI](maintenance.md#team-structure) の勤務時間内であれば ping してください。

DRI が対応できない場合、[「main をグリーンに保つ」グループ](maintenance.md#team-structure)のメンバーが可能な範囲で支援するためにボランティアとして参加しています。チームメンバーのタイムゾーン、Slack プロフィールに記載の勤務時間、および Slack のステータスで不在かどうかを確認してから連絡してください。

また、GitLab のすべてのチームメンバーは [#handbook-escalation](https://gitlab.slack.com/archives/CVDP3HG5V) チャンネルに参加し、サポートするボランティアになることができます。

グループに参加したい場合は、グループのメンバーに追加を依頼してください。同様に、チームメンバーはいつでも GitLab グループを離れることでグループから脱退できます。

### グループへの期待事項

1. [#handbook-escalation](https://gitlab.slack.com/archives/CVDP3HG5V) チャンネルに参加し、ミュートしないようにしてください。
1. Issueが報告された場合：
   1. チームメンバーに応答し、確認中であることを伝えてください。
   1. `#production`、`#incidents-dotcom`、`#is-this-known` を確認して、インフラやその他の問題で既知のIssueがないか確認できます。
   1. 問題を確認できたらできる限り早く更新情報を提供してください。
   1. 必要に応じて `#mr-buddies` や `#handbook` にも更新情報を投稿できます。
   1. Issueが複雑な場合は、問題の再現や解決を支援するために Zoom コールを提案してください。
   1. 問題を解決するか、チームメンバーが自分で解決できるようにフィードバックを提供してください。
   1. 解決できないと判断し、さらなる支援が必要な場合は、以下のいずれかまたはすべてを検討してください：
      1. [「main をグリーンに保つ」グループ](#keep-main-green-group)の別のメンバーに ping する。
      1. [ハンドブック DRI](maintenance.md#team-structure)、またはコードメンテナーグループのメンバーに ping する。
      1. 詳細を記載した[バグIssueを作成する](https://gitlab.com/gitlab-com/content-sites/handbook/-/issues/new)。

### Reliability Engineering にエスカレーションするタイミング

ハンドブックのエスカレーションは、`content-sites` プロジェクトに関連する問題を専門的に扱います。
報告されたIssueが GitLab 製品やハンドブックのインフラに関連している場合は、Reliability Engineering チームにエスカレーションする必要があります。
インシデントを報告するには、インシデント管理ページの指示に従ってください：<https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident>

## よくあるインシデントとヒント

### パイプラインの失敗

ガイダンスと例については、[ハンドブック編集ページ](editing-handbook/_index.md#failing-pipelines)をご覧ください。

### #handbook-escalation での壊れた main アラートの管理

`handbook` リポジトリの `main` ブランチで失敗した CI パイプラインはすべて、自動的に Slack チャンネルに投稿されます。
これらのレポートは調査し、必要に応じて対処する必要があります。

レポートを確認したら、問題の性質、実施した対応を記載したコメントを残し、処理済みであることを示すために ✅ リアクションを追加してください。

何らかの理由で大量の失敗が発生してチャンネルへのスパムが発生している場合は、リポジトリ設定でエラーレポートをオフにすることができます：<https://gitlab.com/gitlab-com/content-sites/handbook/-/settings/integrations>

### スタックしたマージトレイン

マージトレインのステータスを確認するには（チームメンバーが MR がトレインで「スタック」しているように見えると報告している場合に役立ちます）、[このIssueでステータスを確認し、必要であれば回避策を実施してください](https://gitlab.com/gitlab-org/gitlab/-/issues/217908#when-the-merge-train-in-the-www-gitlab-com-project-might-be-stuck)。

回避策の要約：[FIFO リスト](https://gitlab.com/api/v4/projects/7764/merge_trains?scope=active&per_page=100&sort=asc) (`sort=asc` by ID) の最初/最古の MR `iid` がパイプラインを実際に実行していてやがてマージされれば、処理は進んでいます（ただしゆっくりです）。リストの最初の MR が現在パイプラインを実行していない場合は、トレインから削除して再追加してください（末尾に移動します）。

### `about.gitlab.com` のランブック

ハンドブックはもはや `about.gitlab.com` 上にありませんが、[about.gitlab.com のインシデント対応ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/about-gitlab-com.md)の情報の一部が役立つ場合があります。
