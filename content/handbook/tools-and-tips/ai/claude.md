---
title: "Claude.ai のヒント"
upstream_path: /handbook/tools-and-tips/ai/claude/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-12T19:34:05-07:00"
---

[Claude.ai](https://claude.ai/) を使って AI をワークフロー、ツール、プロセスに取り入れ、効率を高める方法を学びましょう。Claude を使うと、コンテンツの執筆、アウトラインやドキュメントの作成、コンテンツの要約、データベースマイグレーションや SQL ステートメントの生成、リファクタリングの推奨など、さまざまな作業ができます。

## アクセス

[claude.ai](https://claude.ai/) を開き、SSO ログインにチームメンバーのメールアドレスを使用します。[Okta](/handbook/security/corporate/end-user-services/okta/) の Claude タイルからもアクセスできます。[利用ガイドラインと FAQ](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#usage-guidelines-and-faqs)（社内）も確認してください。

## 関連リソース

1. [GitLab における AI 活用 イニシアチブ](https://internal.gitlab.com/handbook/company/ai-at-gitlab/)（社内）
   - [GitLab における AI 活用ガイドラインと FAQ](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#usage-guidelines-and-faqs) を確認してください
1. [Claude.ai サポート記事コレクション](https://support.anthropic.com/en/collections/4078531-claude-ai)
1. [Claude のトレーニングデータはどこまで最新ですか？](https://support.anthropic.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data)
1. [`#ai-at-gitlab` Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C085M5071LG) に参加する

## ヒント

> **注** Claude.ai に関する公開ユースケースとヒントのみをドキュメント化し、それ以外は[社内ハンドブック](https://internal.gitlab.com/handbook/company/ai-at-gitlab/) で SAFE に保管してください。

Claude.ai は様々な質問やトピックに回答できます。創造的に、好奇心を持って探求し、最適なチャットプロンプトを反復してみましょう。[GitLab Duo Chat](gitlab-duo.md) も [Anthropic Claude を LLM の 1 つとして利用している](https://docs.gitlab.com/ee/user/gitlab_duo_chat/) ため、似たチャットプロンプトをテストして再利用できます。

### アプリケーションと CLI

1. macOS で Claude アプリケーションを使うには、[Claude for Desktop](https://claude.ai/download) をダウンロードしてください。
1. Anthropic API アクセス
   - Anthropic API キーが必要です。[社内ハンドブック](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#requests-for-anthropic-api-key-use) のガイダンスに従ってください。
1. Anthropic CLI（API アクセスが必要）
   - [Anthropic SDK](https://docs.anthropic.com/en/docs/initial-setup#install-the-sdk) と CLI 用のコミュニティプロジェクト [anthropic-cli](https://github.com/dvcrn/anthropic-cli) について学びましょう

### トークンの上限

> [!note]
> このセクションは [コンテキストウィンドウ](https://docs.anthropic.com/en/docs/build-with-claude/context-windows) におけるトークン上限のヒントを扱います。API のレート制限については [Anthropic のレート制限ドキュメント](https://docs.anthropic.com/en/api/rate-limits#rate-limits) を確認してください。

Claude を使う際にレート制限に達するのを避けるため、以下のヒントに従うことをお勧めします:

- 適切な thinking モードを設定してください。Extended の方が、アップロードと生成コンテンツのコンテキストをより多くサポートしているようです。
- 応答モードを Concise（簡潔）に設定して、Claude の応答長を短くしてください。
- 再プロンプトする前に、前のプロンプトを編集して新しい依頼を含めるようにしてみてください。
- プロンプトでは具体的に依頼してください。3.7 は依頼以上のことを構築しようとする傾向があるので、依頼した変更のみを行うよう、より反復的なアプローチで明示してください。

> [!note]
> 本記事執筆時点では _Claude 3.5 Sonnet_ の方がレート制限が高いため、これで用が足りていて長い会話を必要とする場合は、_Claude 3.7 Sonnet_ のレート制限が引き上げられるまでの間、有力な選択肢になりえます。ただし、3.7 版モデルの改善点は享受できなくなります。

## プロンプトライブラリの例

以下は部門ごとに整理した便利なプロンプトのコレクションで、それぞれのプロンプトに利用例を添えて、チームメンバーが AI アシスタントを効果的に活用できるようにしています。

### Sales 部門

#### 価値提案分析プロンプト

```markdown
Analyze how a company's features address key challenges in the [MARKET SEGMENT] space. Focus on:
1. Pain points solved
2. Feature advantages
3. Customer support benefits
4. Integration capabilities
5. ROI potential
```

**利用例:** 金融サービス業界の見込み客との営業電話の準備時。

#### セールスメールテンプレート生成

```markdown
Generate a personalized sales email to [PROSPECT TYPE] who is currently using [CURRENT SOLUTION].
Include:
- Pain points they might be experiencing
- Specific features that address these pain points
- A clear value proposition
- Soft call-to-action for a demo
Keep the tone professional but conversational and limit to 200 words.
```

**利用例:** 分断されたツールを使用しているヘルスケア企業の開発チームリードに対して、シングルアプリケーションのアプローチによるメリットを訴求する、テーラーメイドのアウトリーチメールを作成するとき。

### Marketing 部門

#### コンテンツブリーフ作成

```markdown
Create a detailed content brief for a [CONTENT TYPE] about [TOPIC] targeted at [AUDIENCE].
Include:
- Proposed title options (3-5)
- Key messages to convey
- SEO keywords to target
- Outline with section headings
- Suggested data points or case studies to include
- Call-to-action recommendations
```

**利用例:** 包括的なブログ投稿を計画するとき。

#### ソーシャルメディアキャンペーンプランナー

```markdown
Develop a 2-week social media campaign promoting [FEATURE/PRODUCT] across LinkedIn and Twitter.
For each platform, create:
- 5 unique post ideas with copy variants (280 chars for Twitter, 700 chars for LinkedIn)
- Hashtag recommendations
- Suggested posting schedule
- Ideas for engagement questions
Focus on highlighting [SPECIFIC BENEFIT] and target [TARGET AUDIENCE].
```

**利用例:** AI 支援機能を宣伝するキャンペーンを作成するとき。

### General & Administrative

#### ポリシードキュメント要約

```markdown
Summarize the following [POLICY/DOCUMENT] into:
1. A one-paragraph executive summary
2. 5-7 bullet points of key takeaways
3. A list of any action items or compliance requirements
4. A simple table showing changes from previous version (if applicable)
```

**利用例:** 四半期のコンプライアンストレーニング前にチームに配布するため、長文の更新済みセキュリティコンプライアンスドキュメントを、簡潔に把握できる形に蒸留するとき。

#### データ分析アシスタント

```markdown
Help analyze this [DATA SET] to identify:
1. Key trends and patterns
2. Anomalies or outliers
3. Correlations between variables
4. Business implications
5. Suggested next steps or areas for deeper investigation

Provide both summary insights and specific data points that support your analysis.
```

**利用例:** ビジネスユーザーが四半期の経費レポートを分析し、部門間の支出パターンを特定し、異常な取引にフラグを立て、リーダーシップ向けにコスト削減の推奨事項を生成するとき。

### Product 部門

#### ユーザーストーリー生成

```markdown
Create detailed user stories for implementing a [FEATURE]. For each user story:
- Follow the format: "As a [USER TYPE], I want to [ACTION] so that [BENEFIT]"
- Include acceptance criteria
- Suggest story points (1, 2, 3, 5, 8)
- Identify potential dependencies
- Tag with appropriate labels (frontend, backend, UX, etc.)
```

**利用例:** 包括的なユーザーストーリーを作成するとき。

#### コード可視化アシスタント

```markdown
Visualize the following code to help understand:
1. Execution flow
2. Function calls and relationships
3. Key dependencies
4. Potential bottlenecks

Present the visualization in [FORMAT] (Mermaid, ASCII art, etc.)

Code:
[PASTE CODE HERE]
```

**利用例:** プロダクトマネージャーと開発者が複雑な機能の実装をより深く理解するため、リファクタリング作業を計画する前に、コード実行パスや依存関係を可視化して連携するとき。

### AI ワークフロープロンプト

#### データセット分析

```markdown
Analyze the attached data file and provide:
1. Summary of key content
2. Important patterns or trends
3. Insights grouped by priority
4. Recommendations based on findings

For [TYPE] data, focus on [SPECIFIC METRICS].
```

**利用例:** 顧客の利用データを分析して機能の採用パターンを特定し、特定のツールに最も活発に関わっているユーザーセグメントを浮き彫りにするとき。

#### コードモダナイゼーションアシスタント

```markdown
Review this legacy code and provide:
1. Explanation of current functionality
2. Modern implementation approach
3. Key improvements in the new version
4. Implementation considerations and challenges

Original code:
[PASTE CODE HERE]
```

**利用例:** レガシーな自動化スクリプトを現在のベストプラクティスに合わせてモダナイズし、チームが依存している必要不可欠な機能を維持しつつ保守性を改善するとき。
