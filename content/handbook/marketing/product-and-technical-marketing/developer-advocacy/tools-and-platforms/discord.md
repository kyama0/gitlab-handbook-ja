---
linkTitle: "Discord"
description: "GitLab Community Discord サーバーへの参加、管理、モデレーションの方法。"
title: "コミュニティ Discord のワークフロー"
upstream_path: "/handbook/marketing/product-and-technical-marketing/developer-advocacy/tools-and-platforms/discord/"
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T21:20:33+02:00"
translated_at: "2026-09-20T01:59:12+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

[GitLab Community Discord](https://discord.gg/gitlab)サーバーは、より広い GitLab コミュニティとつながり、ライブストリームやペアコーディングセッションに参加し、プロジェクトを共有し、他のコミュニティメンバーとコントリビューションについて議論する場です。GitLab に新しく入って始め方を相談したい場合でも、自身の知識を他者と共有したい経験豊富なユーザーでも、リアルタイムでコミュニティとチャットできる場所です。

私たちのコミュニティサーバーでは、次のことができます:

- 他の GitLab ユーザーや開発者とつながる
- GitLab の Issue にコントリビューションし、他の開発者とペアプログラミングを行う
- GitLab を使うコツやベストプラクティスを共有する
- 最新の GitLab ニュースとリリース情報を入手する
- コミュニティ主導のディスカッションやイベントに参加する

誰もがポジティブで歓迎的・インクルーシブな環境で貢献できるようにするため、Discord サーバーのすべてのメンバーは、常に[コミュニティ行動規範](https://about.gitlab.com/community/contribute/code-of-conduct/)を遵守する必要があります。

Developer Advocacy チームが Co-Create & Community engineering の支援を受けて Discord サーバーを管理しています。質問や GitLab チームメンバーロールのリクエストがあれば、`#developer-advocacy` Slack チャンネルでチームにメンションしてください。

## Discord コミュニティ概要 {#discord-community-overview}

私たちのサーバーには、議論のトピックごとに複数のチャンネルがあります。各チャンネルとその役割の概要は次のとおりです。

| チャンネル | 目的 |
| ------ | ------ |
| `#announcements` | スタッフがニュースとお知らせを共有するチャンネル。 |
| `#rules` | サーバー上のすべてのユーザーに適用されるサーバーのルール。 |
| `#general` | 一般的なディスカッションのメインチャンネル。 |
| `#community-help` | サポート質問用のフォーラム形式チャンネル — コミュニティが互いに助け合います。 |
| `#contribute` | GitLab の開発・改善にフォーカスしたコントリビューション議論。 |

ハッカソン、イベント、コミュニティベースのサポート向けにより具体的なチャンネルもあります。

## 望まれていないメッセージとフレンドリクエスト {#unsolicited-messages-and-friend-requests}

コミュニティとチームメンバーの安全を守るため、サーバールール #5 では、質問は公開チャンネルで行うこと、
同意のない一方的なフレンドリクエストや DM を許可しないことを規定しています。
プライベートメッセージを受け取った場合は、ユーザーにこのルールを案内するか、次のレスポンスを使用できます:

```markdown
Please refer to the GitLab Community #rules (https://discord.com/channels/778180511088640070/778194316191465474)
and remember to use public channels instead of direct messages, thanks!

> 5. All questions should be asked in public so that anyone can answer and everyone can learn from the discussion.
> This is a community server with volunteers helping one another.
> Please do not ping specific people to answer your question or send unsolicited friend requests or direct messages without consent.
> See GitLab's communication values to Use Public Channels (https://handbook.gitlab.com/handbook/communication/#use-public-channels)
> and Be Respectful of Others Time (https://handbook.gitlab.com/handbook/communication/#be-respectful-of-others-time).
```

### ツール {#tools}

私たちはコミュニティを管理するために Discord ボットとインテグレーションを利用しています。

| ツール | 目的 |
| ------ | ------ |
| [WickBot](https://wickbot.com/) | モデレーションとセキュリティを支援する Discord ボット。 |
| [NeedleBot](https://needle.gg/) | Discord スレッドを自動的に作成する Discord ボット。 |

カスタム招待リンク `https://discord.gg/gitlab` を維持するため、年額制で 14 個のサーバーブーストを通じて Server Boost Level 3 を維持しています。

## モデレーション {#moderation}

私たちは Discord サーバー上でポジティブな環境を維持することに努めます。これらのモデレーションガイドラインは、すべてのコミュニティメンバーにとってインクルーシブで敬意ある環境を確保するために設計されています。現時点では、GitLab チームメンバーと [GitLab core team](https://about.gitlab.com/community/core-team/)メンバーがモデレーターを務めます。

### モデレーションガイドライン {#moderation-guidelines}

モデレーションの状況はそれぞれ固有であり、ケースバイケースで対応されます。このティアシステムは、状況対応とモデレーターのサポートのための一般的な枠組みを提供することを目的としています。多くの場合、必要なアクションを完遂するには複数のティアが必要となります。たとえば、一時的なタイムアウト（Tier 2）に至ったメッセージは Discord にも報告されるべきです（Tier 0）。

#### Tier 0 — Discord への報告 {#tier-0---report-to-discord}

メッセージが Discord の利用規約またはコミュニティガイドライン（例: 違法コンテンツ、明確な嫌がらせ、ドキシング等）に違反する場合、モデレーターは報告機能を通じて違反を Discord に直接報告すべきです。[コンテンツを Discord に報告する方法](https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord)を参照してください。

##### Tier 1 — 警告とメッセージの削除 {#tier-1---warning-and-message-deletion}

サーバールールの軽微な違反については、モデレーターはそのメッセージを削除し、警告のあったチャンネルに、どのルールに違反したかを説明する公式の説明を残すべきです。同じ説明を、メッセージ削除の理由としてユーザーにプライベートで送ることもできます。状況がエスカレートする恐れがある場合はモデレーターがプライベートに対応してかまいませんが、可能な限り、ルールの執行については透明であることが重要です。

例:

```markdown
Your message was removed for violating the following rule in our [GitLab Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) or GitLab Discord Server:

> (The rule violated)
```

モデレーターはまた、ドキュメンテーション目的で警告に関するノートをメンバーのプロフィールに残すべきです。これがそのコミュニティメンバーの初回違反でない場合は、より重大な対応（例: Tier 2）が推奨されます。

メンバープロフィールにノートをレビュー・追加するには、モデレーターは次のショートカットで Wick Bot を操作できます。

```markdown
- Add note: /notes add (it prompts you for a user and a note)
- List all notes: /notes view
- List all notes for a user: /notes view user<enter> (it'll prompt you for the user)
- View a specific note: /notes view note_id<enter> (it'll prompt you for the note id, which can be found by listing all notes for a user)
```

#### Tier 2 — 一時的なタイムアウト {#tier-2---temporary-timeout}

メッセージが重大な違反（例: 繰り返されるスパム、トローリング、政治的攻撃）の場合や、コミュニティメンバーが公式警告を受けた後もルールを破り続ける場合、モデレーターはタイムアウトを通じて一時的にサーバーとのインタラクションを禁止すべきです。タイムアウトの期間は違反の重大性に応じて調整できます。モデレーターはセカンドオピニオンが必要な場合、モデレーターチームの他のメンバーに支援を求めることも推奨されます。[ユーザーにタイムアウトを設定する方法](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ)を参照してください。

#### Tier 3 — 利用禁止 {#tier-3---ban}

メッセージが深刻な違反（例: ヘイトスピーチ、ハラスメント、脅迫、不適切なコンテンツ）の場合や、メンバーが公式警告および/または一時的タイムアウトの後もコミュニティのルールと健全性を繰り返し侵害している場合、モデレーターは 利用禁止 を検討し、違反を議論するため[行動規範 Issue を起票する](/handbook/marketing/product-and-technical-marketing/developer-advocacy/tools-and-platforms/code-of-conduct-enforcement/)べきです。スパムなど一回限りの違反については Issue を起票する必要はありません。Issue は、エスカレーションやユーザーからの 利用禁止への異議申し立てが発生した場合に備えて、より重大な違反のドキュメンテーションと議論、フォローアップや意思決定の証拠として使用してください。

##### 利用禁止への異議申し立てプロセス {#ban-appeals-process}

GitLab Community Discord メンバーとして、不当なタイムアウトや 利用禁止 を受けたと感じた場合、申し立てを送信できます。申し立てプロセスは次のとおりです。

1. `community@gitlab.com` にメールを送り、申し立てを開始してください。Discord ユーザー名と、なぜ 利用禁止 が不当だと考えるかの説明を含めてください。
1. モデレーションチームは申し立てと関連ドキュメンテーション（例: メンバープロフィールのノートや行動規範 Issue）をレビューします。レビュー後、モデレーションチームは 利用禁止 の維持、期間の短縮、または解除を決定します。
1. 利用禁止 が短縮または解除されてメンバーがサーバーに戻った場合、コミュニティルールのその後の違反は非常に重大に扱われます。

申し立てのレビューにはお時間をいただきますので、お待ちいただきますようお願いします。

### 受け入れがたい行動の報告 {#reporting-unacceptable-behavior}

受け入れがたい行動や悪質な行為を報告するには、Discord の報告機能を使用してください。[コンテンツを Discord に報告する方法](https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord)を参照してください。
