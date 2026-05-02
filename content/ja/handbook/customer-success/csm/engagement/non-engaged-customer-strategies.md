---
title: "エンゲージメントのない顧客への戦略"
upstream_path: /handbook/customer-success/csm/engagement/non-engaged-customer-strategies/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:47:38Z"
translator: claude
stale: false
---

Gainsight には、エンゲージメントのない顧客向けのプレイブックが含まれており、以下の場合に*自動的に*トリガーされます:

- 顧客が 60 日以上エンゲージメント（通話またはミーティングのログがない）なく、かつ優先度 1 または 2 の顧客である場合
- 顧客が 90 日以上開かれたままのオンボーディング CTA を持っている場合

このプレイブックは、「リスク」CTA タイプで手動で開くこともできます。

プレイブックには以下のステップが含まれています:

## プレイブック

1. SAE/AE とアウトリーチ戦略について同期する
   - CSM が日常的なコンタクトに連絡
   - SAE がバイヤー/インフルエンサー/関係のあるその他の人物に連絡
   - SDR が私たちの関係の外にいるコンタクトに連絡
1. 説得力のあるメッセージを作成する: 顧客の目標を見直し、顧客がなぜ私たちとエンゲージすべきかについてのメッセージングを作成します。以下を検討してください:
   1. 顧客が別のプラットフォームから移行していることがわかっている場合は、トレーニングと有効化を提供する
   1. 顧客が xxx に興味があることがわかっている場合は、新機能 yyy を紹介するアウトリーチを行う
   1. サポートチケットを確認し、価値を提供するために進行中の会話を活用する
1. ステップ 2 でエンゲージメントがない場合はトリアージ Issue を作成する **(優先度 1 かつエンゲージメントなし > 90 日の場合はエスカレーションが必須)**
   1. [トリアージ Issue 経由でエスカレーション](/handbook/customer-success/csm/health-score-triage/#gitlab-account-triage-project): この時点で、エンゲージメント戦略の追跡はトリアージ Issue で行います。この Issue で、より上位の GitLab リソース（顧客の規模に応じて CSM マネージャーと相談してレベルを決定）をループインし、さらに 1 ヶ月間応答がない場合に顧客側の誰かに連絡してもらいます。メールを作成し、その GitLab 上位リソースに利用可能なビジネス目標に関するコンテキストを提供してください。

## 検討すべき追加戦略

### 確認すべき情報源のリスト

- SFDC アクティビティ履歴 → 顧客のプロジェクトや技術的なニーズに関するメール返信を探し、実装できたかどうか、質問があるかどうかを尋ねるメールをそれらのコンタクトに返信する。
- Zendesk チケット
- LinkedIn プロスペクティング（Sales Navigator があればベスト）。このプロセス、適切な役割の見つけ方、コンタクトのベストプラクティスについて説明が必要です。
- 既知の GitLab ユーザー名で Issue のアクティビティを確認。実装したか、回避策を見つけたかどうかをフォローアップしてみる。
- Google ドキュメントのミーティングノート - ポジティブなビジネス成果（PBO）、必須機能、またはテックスタックについての言及を探す。
- 以前の Chorus ミーティングを確認し、人々と成功したかどうかを尋ねる理由を見つけ、支援できる方法を確認するためのミーティングを依頼する。
- SDR にプロスペクティングを依頼し、ミーティングや返信について SAE/AE/SA/CSM にアラートを出してもらう。CSM が SDR に関連トピックについてのポインターを提供する。
- 通常とは異なる場合は、ライセンスアプリまたは SFDC の経済的バイヤーに連絡する
- 規模が大きければ、ネットワーキング/紹介をエグゼクティブグループやボードに依頼する
- 買収、レイオフ、製品ローンチなどの主要なイベントについてニュース検索を実施する

### エグゼクティブアウトリーチ

#### メールテンプレート

##### サンプルメール 1

Hi [XXX],

I hope this finds you well. As an introduction, my name is [YYY], and I lead the global customer success management (CSM) team here at GitLab.

I wanted to get in touch to see how your experience with GitLab has been over the past year, and to connect on how we can partner to further enable your teams on GitLab. You have available to you a number of workshops and enablement sessions on DevOps best practices that your CSM can facilitate - we are finding our customers are reaching maturity and finding value faster as a result of engaging their broader teams in these sessions.

How would a 30-minute call over the next couple of weeks work to connect on progress to date and look at how we can support you and your team moving forward?

Best,

[YYY]

##### サンプルメール 2

Hello [XXX],

My name is [YYY], and I am the director of global customer success management (CSM) team at GitLab.

I wanted to touch base to see how your usage of GitLab is going and what your experience has been over the past [ZZZ] months. I understand your primary business driver is {a} which will help you achieve {b}. Your CSM can help enable your teams to drive this successfully across your organization.

We would love to have a call with you to work together to plan your continued success, and discuss any questions or concerns you may have.

Thank you, and we look forward to building our partnership with you!

Best,

[YYY]

### 追加項目

- 日中の異なる時間帯や曜日にアウトリーチする
- 1〜2 週間ごとに段階的な方法でアウトリーチを継続する
- コールから得られるメリットを強調する（自分ではなく相手に焦点を当てる）
- CSM の価値を示す。例えば、興味を持ちそうな新しい GitLab 機能を共有し、GitLab の使い方についてもっと知ることでさらに関連する機能を共有できることを伝える
- 相手があまり作業しなくて済むように、実行可能で具体的なことを提示する（例えば「お時間はいつがよろしいですか？」ではなく「木曜日の 2 時はいかがでしょうか？」と尋ねる）
- コールをスケジュールして、来るかどうか確認する（思った以上に機能します 🤷）
