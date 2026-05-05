---
title: "CSM Issue トラッキングと OKR"
description: "CSM チームの OKR に関するフィールドガイド"
upstream_path: /handbook/customer-success/csm/csm-okrs/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: '2026-04-26T00:00:00Z'
translator: claude
stale: false
---

詳細については GitLab の [Objective and Key Results (OKRs)](/handbook/company/okrs/) ページをご覧ください。

---

## 目的

このページでは、CSM チームの Issue トラッキング、OKR、および OKR プロセスの概要を説明します。

OKR はビジネスとの継続的な戦略的整合性を提供する必要があります。私たちの Big Rocks は年間 OKR であり、四半期ごとの OKR がそれらに貢献します。

GitLab.com（Epic/Issue）は私たちが行っている作業を追跡するのに最適な場所です！目標は、アイデアを提出し、それを優先順位付け・合意したうえで、チームを核となる重点分野への取り組みに集中させ、成果を上げるための合理的な方法です。すべてに同時に取り組むことはできないため、誰もがアイデアを提出してコラボレーションできるよう権限を与えながら、実際の作業はコアな優先事項に集中させることを目指しています。

また、このプロセスは GitLab の機能を活用して、私たち自身が日常業務において顧客の立場を体験するドッグフーディングの実践をリードするものです。チームは、以下の成果を達成する可能性について進捗状況の更新を提供し、コミュニケーションを取るための単一のプロセスを持つ必要があります:

- リーダーシップがチームをまたいで作業を容易に追跡できる

- チームレベルの体制で進捗と支援が必要な箇所を確認できる

- マネージャーが個別チームメンバーの内部作業の状況を改善した形で 1:1 でサポートできる

私たちのすべての作業と同様に、CS チーム内での作業を追跡するプロセスの開発はイテレーティブであるため、このページをブックマークして、プロセスが洗練されるにつれて頻繁に確認することをお勧めします。

## 用語

- **Objective:** ミッション

- **Key Results:** 動きと行動の指標

- **Initiatives:** Key Results を目標達成に近づける方向に動かすと仮定する活動

## なぜ今これを行うことが重要なのか？

- チームのワークロードと優先事項の可視性の向上

- アイデア提出とレビュープロセスの合理化

- 進捗追跡とボトルネック特定能力の強化

- 戦略的優先事項との作業の整合性の改善

- チーム内の透明性とコラボレーションの向上

- GitLab のレポート機能を通じたデータ駆動型意思決定

## 原則

OKR はインクルーシブ（セグメント、地域など）であるべきであり、私たちの[非同期コントリビューションへのバイアス](/handbook/values/#bias-towards-asynchronous-communication)に強く傾倒する必要があります。

### Objectives

- アウトプットよりアウトカム

- インスピレーショナルかつアスピレーショナル

- 重複する Objective を避ける

- ビジネスと整合している

### Key Results

- 測定可能

- 標準フォーマット: `<動詞> <指標> を <x> から <y> へ`

- 先行指標と遅行指標

- 1 つの OKR あたり 3〜5 つの Key Results まで

## これは GitLab とその顧客にどのような影響を与えるか？

これは GitLab とその顧客の両方に重要な影響をもたらします:

### GitLab にとって

- GitLab 自身のプロジェクト管理ツールの有効性を実証する

- CS AMER チームの内部効率と生産性を向上させる

- 横断的なコラボレーションと透明性を強化する

- 製品改善のための実際のユースケースとフィードバックを提供する

- 会社の「ドッグフーディング」の哲学を強化する

### 顧客にとって

- より迅速で効率的な顧客サポートにつながる

- プロジェクト管理における GitLab 使用例の身近な例を提供する

- 内部フィードバックに基づく機能改善の可能性がある

- 自社製品の使用と改善への GitLab のコミットメントを示す

## データモデル

- **Issue:** 実施するアイデアまたはプロジェクトを表す。Issue は活動の四半期を超えるべきではない。四半期を超える場合は、複数の Issue に分解する必要がある。

- **Labels:** 追加のレポート属性を追跡し、ワークフローの状態を管理するために使用する

- **Epic:** Issue を CS の戦略的 Objective / 柱に結びつける/紐付けるもの

- **Milestone:** 作業を計画・完了させる予定の財務四半期を示す。マイルストーンは OKR と非 OKR のイニシアティブの両方を追跡するために使用する。OKR は CSMERM 内の OKR プロジェクトで定義し、非 OKR のイニシアティブはすべて該当チームのサブグループで定義する。

## プロセス

### GLQL トラッキングテーブル

以前のイテレーションでは作業追跡に Issue ボードを使用していましたが、現在チームは [CSMERM ウィキ](https://gitlab.com/gitlab-com/customer-success/csmerm/okrs/-/wikis/home) 内の GLQL トラッカーを使用しています。

### OKR の提案

### アイデア提出

- チームメンバーは Issue に適したサブグループとプロジェクトを選択する。これらは地域とロールで整理されており、これらの横断的なコラボレーションのためのサブグループが 1 つある。どのプロジェクトで Issue を開くか不明な場合は、チームの地域とロールをデフォルトとするか（例: AMER の CSM は `AMER CS` サブグループと `CSM` プロジェクトを選択する）、マネージャーにガイダンスを求める。

- チームメンバーは `CS-Status::Proposed` スコープラベルを使用して新しい Issue を作成する。

- 一貫した情報収集のために以下の Issue テンプレートを使用する。テンプレートには以下を含める必要がある:

  - 30 秒エレベーターピッチ

  - なぜ今これを行うことが重要なのか？OKR に起因しているか？

  - これは GitLab とその顧客にどのような影響を与えるか？

  - 完了するためのチームメンバーとリソースのサポートは？

  - 推定工数と ETA

## オーナーシップとリソーシング

- 優先順位付けが完了したら、プロジェクトに CS マネージャーを DRI として割り当てる

- CS マネージャーを DRI として使用することで、CS リーダーシップチーム全体で可視性が確保され、さらなるリソーシング/優先順位付けの議論においてワークロードを適切に代表できる

- CS マネージャーに加えて、少なくとも 1 名のシニア/スタッフ CSx チームメンバーが議論を主導するために割り当てられ、少なくとも 1 名の追加 CSx チームメンバーが取り組みをサポートする必要がある。Issue をクローズまで推進する 2 名以上のチームメンバーを特定できない場合は、CS マネージャーと再調整して、これが現在の優先事項かどうか、または追加のチームメンバーが利用可能になるまで待つべきかどうかを話し合う。

## レビューと優先順位付け

- `CS-Status::Proposed` の Issue をレビューするための定期的なマネジメントチームミーティング

- ラベリングシステムを使用して Issue を分類・優先順位付け（以下のラベリングシステムセクションにリンクすること）

- Mgr CS を DRI として含める

- 2 名の CSx（少なくとも 1 名はスタッフ/シニア）を特定して Issue を管理する

- レビュー後に `CS-Status::Proposed` ラベルを削除する

## ワークロード管理

- Mgr CS が決定した即時対応アイテムには `CS-Priority::Top-5` ラベルを使用する（Big Rock または OKR に紐付いている場合も含む）

- `CS-Priority::High` の Issue は Mgr CS が決定した現在のスプリント/作業サイクルに割り当てる

- ワークフローの可視化に GitLab ボードを活用する

- 上記で言及した [GLQL トラッカー](https://gitlab.com/gitlab-com/customer-success/csmerm/okrs/-/wikis/home) をダッシュボードとして参照する

## バックログ管理

- 優先度の低い Issue はバックログに残す

- 定期的なバックログのレビューと再優先順位付け

- 将来のスプリント計画にマイルストーンを使用する

## 進捗追跡

- Issue に時間追跡を実装する

- 障害があり、リーダーシップの支援が必要な Issue には `CS-Status::Concern` スコープラベルを使用する

- 期待どおりに進んでいる Issue には `CS-Status::On Track` スコープラベルを使用する

- 一時的に停止している Issue には `CS-Status::On Hold` スコープラベルを使用する

## トリアージボットポリシー

トリアージボットはポリシーを使用して、どのアイテムに対してどのアクションを実行するかを決定します。

各ポリシーには、リソースセットに対するルールが含まれています。これらのルールは、何を実行するか、何を実際に行うかを詳述した配列内に含まれています。トリアージボットのフィールドは以下のとおりです:

| 欠落フィールド | 例 |
| ------------- | ---- |
| GitLab 部門 | `Customer Success` |
| Issue 担当者 | @csmname  |
| CS-Priority ラベル | ~"CS-Priority::Top-5"  |
| CS-Team ラベル | ~"CS-Team::CSM"   |
| CS-Status ラベル  | ~"CS-Status::On Track"   |
| CS-Region ラベル  | ~"CS-Region::AMER"   |
| OKR/Initiative ラベル  | ~"OKR"  |
| LT スポンサーシップラベル  | ~"CSLT::CS DIR NAME"  |
| マイルストーン  | ~FYXXQX CS OKR |
| XLT DRI ラベル  | ~"CSXLT::MGR CS NAME"  |

## 完了とレビュー

作業が完了したら、Issue に `CS-Status::Ready for Review` ラベルを付けて、完了して CS マネージャーと必要に応じて外部ステークホルダーによる最終レビューが必要であることを示します。

- `CS-Status::Ready for Review` のタグ付けの前に、振り返りを実施し、Issue に要約した教訓を提供する。学んだ教訓または達成した目標があることで、完了した作業を共有・称えることができる。

- レビュー後、それ以上のアクションが不要であれば、完了した Issue をボード上で「Done」に移動する。

## ラベリングシステム

各 Issue には、上記のトリアージボットポリシーを満たすためのラベルとフィールド値が必要です。以下は、追跡スキーマで使用される各ラベルの定義の表です。

| カテゴリ | ラベル | 定義 |
| ------------- | ---- | -------------------------------------------------------- |
| GitLab 部門 | `Customer Success` | グローバル OKR 追跡のために関連する GitLab 部門を Customer Success として定義する |
| OKR/Initiative | `OKR` または `Initiative` | GitLab 全体で OKR と非 OKR のイニシアティブをそれぞれ追跡するための必須ラベル |
| CS-Status | `CS-Status::On Track` | Issue は期待どおりに進んでいる |
| CS-Status | `CS-Status::Watchpoint` | Issue は遅れており、DRI チーム間で目標タイムラインの再調整が必要 |
| CS-Status | `CS-Status::Concern` | Issue には期限までの完了を危うくする重大な障害があり、リーダーシップの支援が必要 |
| CS-Status | `CS-Status::Proposed` | Issue は CS リーダーシップに提案されたが、まだ承認されていない |
| CS-Status | `CS-Status::Not Started` | Issue は特定されたが、作業はまだ開始されていない |
| CS-Status | `CS-Status::On Hold` | Issue は一時的に停止している |
| CS-Status | `CS-Status::Closed Success` | Issue は正常に完了した |
| CS-Status | `CS-Status::Closed Not A Priority` | Issue は優先事項ではないと判断されてクローズされた |
| CS-Status | `CS-Status::Ready for Review` | Issue の作業が完了し、リーダーシップからのサインオフを待っている |
| CS-Priority | `CS-Priority::Top-5` | CS リーダーシップが追跡しているトップ 5 の OKR |
| CS-Priority | `CS-Priority::High` | CS チームの目標と指標に大きな影響を与える OKR またはイニシアティブ |
| CS-Priority | `CS-Priority::Medium` | CS チームの目標と指標に中程度の影響を与える OKR またはイニシアティブ |
| CS-Priority | `CS-Priority::Low` | 有益だが重要ではない「あれば望ましい」OKR またはイニシアティブ |
| CS-Region | `CS-Region::Global` | 組織全体の目標 |
| CS-Region | `CS-Region::AMER` | AMER 固有の目標 |
| CS-Region | `CS-Region::EMEA` | EMEA 固有の目標 |
| CS-Region | `CS-Region::APAC` | APAC 固有の目標 |
| CS-Team | `CS-Team::CSM` | Customer Success Manager チーム |
| CS-Team | `CS-Team::CSA` | Customer Success Architect チーム |
| CS-Team | `CS-Team::On Demand (CSE)` | Customer Success Engineer チーム |
| CS-Team | `CS-Team::RM` | Renewal Manager チーム |
| CS-Team | `CS-Team::Tech-Touch` | Tech-Touch (デジタルエクスペリエンス) チーム |
| CS-Team | `CS-Team:: Onboarding` | オンボーディングチーム |
| LT スポンサーシップ | `CSLT::[Name]` | OKR またはイニシアティブをスポンサーしている CS ディレクター以上 |
| XLT DRI | `CSXLT::[Name]` | OKR またはイニシアティブの DRI である CS マネージャー |
| XLT DRI | `CSXLT::N/A` | CS ディレクター以上が CS マネージャーではなく DRI の場合に使用 |

## OKR スケジュール

CSM OKR のタイムラインは以下のとおりです:

| 四半期開始 | タスク |
| ------------- | ---- |
| 4 週間前 | VP がリーダーシップチームとトップゴールを共有してフィードバックを求める |
| 4 週間前 | リーダーシップチームが来四半期の目標の草案を共同で作成し、DRI に合意する |
| 4 週間前 | リーダーシップチームが現在の OKR ステータスを確認する |
| 2 週間前 | リーダーシップチームの 50 分間のドラフトレビューミーティング。その後、OKR を GitLab に入力し、リンクを #csm-updates Slack チャンネルで共有する |
| 2 週間前 | リーダーシップチームがそれぞれのチームと議論し、OKR を磨き上げる |
| 1 週間前 | クロージングセレモニーと前回の OKR の振り返り |
| 0  | OKR をアクティブに更新する |

### 追加リソース

[プロセスの短いチュートリアル](https://drive.google.com/file/d/1eBFqOgBgCJBf-aMPWL2ILyonEj_dYCx3/view)
