---
title: "週次の非同期アップデート"
description: "週次の非同期 Issue アップデートをどのように運用するかのプロセスを定義します"
upstream_path: /handbook/engineering/ai/ai-coding/how-we-work/async-updates/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

私たちは、明確なコミュニケーション、進捗の効果的な追跡、そしてチーム全体の透明性を維持するため、週次の非同期ステータスアップデートを実践しています。このプロセスは、構造化されたコミュニケーションを通じてコラボレーションを促進し、結果を生み出し、効率を高めるという、私たちのコアバリューに沿ったものです。

### 実施タイミングと頻度

- チームメンバーは毎週水曜日にアップデートを投稿します
- アサインされているすべての Issue についてアップデートが必要です
- 複数の Issue に取り組んでいる場合は、複数のアップデートが必要になる場合があります

### テンプレート

アップデートに使用するテンプレートは以下のとおりです。

```markdown
## Async Status Update yyyy-mm-dd

- **Progress & Status**: _What progress have you made? What's the current state?_
- **Next Steps**: _What are your planned next actions?_
- **Blockers**: _Are you blocked or need assistance with this?_
- **How confident are you that this will make it to the current milestone?**
    - [ ] Not confident
    - [ ] Slightly confident
    - [ ] Very confident

_Remember to update the workflow label!_

/cc @mnohr @jordanjanes
```

エンジニアリングマネージャー、プロダクトマネージャー、コラボレーション中のチームメンバーには必ずメンションを付けてください。

### ベストプラクティス

- アップデートは具体的かつ簡潔に書きます
- たとえ暫定的なものであっても、必ず次のステップを含めます
- ブロッカーは早めに共有します。重大化するまで待たないでください
- 読みやすさのため、テンプレートは一貫して利用します
- 関連する Issue やドキュメントへのリンクを適宜記載します
