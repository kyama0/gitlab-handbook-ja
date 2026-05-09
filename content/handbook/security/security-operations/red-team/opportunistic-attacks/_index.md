---
title: 機会主義的攻撃
no_list: true
upstream_path: /handbook/security/security-operations/red-team/opportunistic-attacks/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:00:00Z"
translator: claude
stale: false
---

機会主義的攻撃は、[ステルスオペレーション](../stealth-operations.md)よりも自発的なイニシアチブです。事前の承認や通知なしに、いつでも、任意のソース IP アドレスから、GitLab が管理する任意のアセットに対して実施できます。

1 つの重要な違いは、ステルスオペレーションは一般的に特定の敵対者やキャンペーンを中心にモデル化され、特定の脅威に対する私たちの耐性を向上させるためにそれらの戦術を綿密に模倣するということです。一方、機会主義的攻撃は、目標を達成するために何でも使う、創造的かつ執拗な追求です。

例えば、レッドチームのメンバーは、初期アクセスにつながる可能性のある悪用可能なサービスや動作を特定する場合があります。長い正式な計画プロセスの代わりに、その機会に飛びつき、可能な限り完全な攻撃パスを実行します。監査とレポート作成のために、厳格なドキュメンテーションは依然として必要です。

メリットには以下が含まれます:

- GitLab に、管理された環境で現実的な脅威を検知し対応する練習の機会をより多く提供し、防御能力と調査スキルのより速いイテレーションを可能にします。
- セキュリティ上の懸念事項の実際の影響を迅速に実証できます。
- 潜在的な過去の脅威アクター行動を発見するための調査の優先順位付けを支援できます。

脆弱性が発見された場合、私たちはそれらを悪用し、最大の影響を安全に実証するように取り組みます。これには、永続性の確立、権限昇格、その他の一般的な攻撃技術が含まれる場合があります。

即時の対応が必要な場合、[インシデント報告](/handbook/security/#reporting-an-incident)の標準プロセスに従います。広範または再発しているように見える脆弱性については、[脆弱性管理 Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues)内に Issue を作成し、自動スキャン機能を実装します。

私たちはエンゲージメントルール内で[機会主義的攻撃技術](../how-we-operate/rules-of-engagement.md#opportunistic-attack-techniques)の例をリストしています。

## Club Red

Club Red は、GitLab チームメンバーが初期アクセスベクトルの発見と開発を支援し、オプションで実行において私たちと協力できる私たちのプログラムです。

時々、チームメンバーは、彼らが持っている知識に基づいた、クールなハックのアイデアを持って連絡してきます。Club Red は、彼らが私たちと協力してアイデアを開発し、GitLab にとってより大きな全体的なセキュリティ結果を得るための方法を提供することを目指しています。

興味深いアイデアを持つ内部の GitLab チームメンバーであれば、[お問い合わせください](../_index.md#contact-us)。
