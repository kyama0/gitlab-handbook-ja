---
title: "バイパスポリシー"
description: "このポリシーは GitLab.com のレート制限に関するものです。セルフマネージドおよび Dedicated については管理者にお問い合わせください。"
upstream_path: /handbook/engineering/infrastructure-platforms/rate-limiting/bypass-policy/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T03:12:43Z"
translator: claude
stale: false
---

## GitLab.com のバイパスポリシー

[公開されているレート制限](https://docs.gitlab.com/user/gitlab_com/#rate-limits-on-gitlabcom)はすべての顧客とユーザーに例外なく適用されます。レート制限のバイパスはいかなる理由においても付与されません。

この厳格なポリシーの理由は、問題が発生した際にすべての顧客をできる限りサポートしたいと考えていますが、GitLab.com では、すべての顧客とユーザーを保護するためにインスタンス全体の信頼性と安定性を優先しなければならないからです。1 人の顧客でもレート制限をバイパスできるようにすることは、高深刻度の本番インシデント（GitLab.com がすべてのユーザーに利用できなくなるなど）が発生する高リスクな状況を生み出します。これが、いかなる状況においてもバイパスが付与されない理由です。

レート制限に達している場合、以下の軽減策を検討することをお勧めします:

- レート制限に達し始めた理由を特定します。（[トラブルシューティングガイド](/handbook/engineering/infrastructure-platforms/rate-limiting/troubleshooting/)）
- 自動化パイプラインの実行をずらします。
- 失敗した認証試みに対して指数バックオフとリトライを実装します。
- [GitLab のレート制限ドキュメント](https://docs.gitlab.com/user/gitlab_com/#rate-limits-on-gitlabcom)を確認して、適用されている具体的な制限を理解します。
  - 達しているレート制限に基づいてバックオフ戦略を追加できます。
