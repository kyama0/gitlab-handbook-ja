---
title: "バックエンド言語"
description: "新しい GitLab バックエンドコードでは Rust を第 1 の選択肢、Go を全面的にサポートされる第 2 の選択肢とします。Ruby と Python は新しい作業には推奨されません。"
upstream_path: /handbook/engineering/architecture/abstractions/candidate/backend_languages/
upstream_sha: f656f02435661ffa63fe51e9b75469265e9ed794
translated_at: "2026-11-05T21:10:02.037116+00:00"
lastmod: "2026-11-05T10:43:29+01:00"
stale: false
translator: codex
---


## ステータス {#status}

**候補** - 承認を検討中

## オーナー {#owner}

[割り当て予定]

## 説明 {#description}

このページは、GitLab サービスでデフォルトとするバックエンド言語と、
既存コードを言語間で移行する方法を定めます。GitLab.com、Dedicated、
Self-Managed に出荷するサービス、ライブラリ、
パフォーマンスが重要なコンポーネントに適用されます。

**新しいバックエンドコードでは Rust を第 1 の選択肢、Go を第 2 の選択肢とします。** Go は
全面的にサポートされています。Ruby と Python はすでに稼働している場所では引き続きサポートされますが、
新しい作業には推奨されません。新しい作業で Rust 以外を選ぶ場合は、
その理由を設計文書または意思決定記録に記載する必要があります。

| 言語 | 位置付け | 使用対象 |
|----------|----------|---------|
| **Rust** | 第 1 の選択肢 | 新しいサービス、新しいライブラリ、パフォーマンスが重要なコードの書き直し |
| **Go** | 第 2 の選択肢、全面的にサポート | 既存の Go サービスとその拡張、Rust が要件を満たさない新しい作業 |
| **Ruby** | 非推奨、モノリスのみ | Rails モノリス内の既存のプロダクトコード |
| **Python** | 非推奨、個別に判断 | AI や ML など、Python エコシステムに依存するサービス |

## 主要抽象化とすべき理由 {#why-this-should-be-a-key-abstraction}

1. **予測可能なパフォーマンス**: バックエンドコードは、CPU バウンドか I/O バウンドかにかかわらず、
   負荷がかかった状態でもレイテンシーとメモリ使用量を予測可能に保ち、
   処理するトラフィックに対して CPU とメモリの消費を少なくすべきです。これは、
   すべてのセルとすべての Self-Managed インスタンスで稼働するサービスにとって重要です。
   バックプレッシャー、コネクションプーリング、タイムアウトはどの言語でも重要ですが、
   ガベージコレクターがあると、生存ヒープと割り当て率が大きくなるにつれて、停止時間とメモリのオーバーヘッドが増加します。
   キャッシュ、プロキシ、多数の接続を保持するサービスは、
   I/O バウンドでもこの影響を受けます。Rust にはガベージコレクターがなく、
   メモリが不要になり次第解放します。
   [本番環境の事例](#why-rust-and-not-go)を参照してください。
2. **段階的な書き直し**: 既存のアプリケーションは、
   一度に大規模に書き直すのではなく、少しずつ新しい言語に移行すべきです。Rust 自体にはランタイムがないため、
   まず Ruby や Python のネイティブ拡張を Rust に置き換え、
   アプリケーションの残りの部分を別途切り替えられます。
3. **長期にわたる正しさ**: コンポーネントはそれを作ったチームよりも長く存続するため、
   コードは担当者が変わっても正しさを保つべきです。Rust コンパイラーは、
   それがなければ本番環境で表面化するメモリ、並行処理、型のエラーを検出します。
   AI エージェントが書くコードの割合が増えるほど、この点が重要になります。
   コンパイラーは生成コードに対する決定的なガードレールとなり、型システムによって
   不正な状態を表現できなくすることで、実行時ではなく
   ビルド時に誤りを検出できます。
4. **デフォルトを 1 つにする**: チームはプロジェクトごとに言語の選択を議論し直すべきではなく、
   LabKit、CI テンプレート、セキュリティツールなどのツールは、
   少数のランタイムに注力すべきです。第 1 と第 2 の選択肢を 1 つずつにすることで、
   対象を少なく保てます。
5. **プラットフォームのサポート**: 新しいサービスでは、ログ、メトリクス、トレーシング、
   デプロイの機能をプラットフォームから利用できるべきです。
   [Theseus](https://theseus.gitlab.net/overview/) は Go と Rust をサポートし、
   [LabBench](https://gitlab.com/gitlab-org/lab-bench/bench) は両方のランタイムのひな形を生成して
   ビルドします。また、
   [`labkit-rs`](https://gitlab.com/gitlab-org/rust/labkit-rs) は LabKit Go と通信形式に互換性があるため、
   Rust と Go のサービスはダッシュボードとトレースを共有できます。現時点では Go のほうが
   サポートは充実しています。[長期計画](#long-term-plan)では、
   `labkit-rs` の機能を同等に揃え、Rust で構築するサービスが増えるにつれて
   Rust のサポートも拡充します。

### Go ではなく Rust を選ぶ理由 {#why-rust-and-not-go}

Go は有効な選択肢であり、多くのサービスで適切に機能します。このページは
長期的な方向性を定めるものです。両方の言語が要件を満たす場合は、
パフォーマンスがより優れ、より予測可能で、既存のコードと
組み合わせやすい言語を選びます。それが Rust です。

Go を選ぶ一般的な理由は、ネットワーク処理や I/O バウンドの作業です。そのような作業でも、
レイテンシーとメモリ使用量の予測可能性は重要であり、
[Tokio](https://tokio.rs/) を基盤とする Rust の非同期エコシステムには、その用途での実績があります。Go は既存の Go サービスや、
Rust が要件を満たさない新しい作業において、引き続き全面的にサポートされる
第 2 の選択肢です。`labkit-rs` の機能不足は理由に含まれません。
[長期計画](#long-term-plan)を参照してください。

本番環境の事例:

- [Discord、Read States サービス](https://discord.com/blog/why-discord-is-switching-from-go-to-rust):
  Go のガベージコレクターが大きなインメモリキャッシュを走査し、
  2 分ごとにレイテンシーのスパイクが発生していました。Rust で書き直すことで、スパイクがなくなりました。
- [Grab、Counter Service](https://engineering.grab.com/counter-service-how-we-rewrote-it-in-rust):
  Go が同じ負荷で 20 コアを使用していたのに対し、Rust で書き直したものは約 4.5 コアを使用し、
  p99 レイテンシーは同程度で、インフラコストを約 70% 削減しました。
- [Cloudflare、Pingora](https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/):
  NGINX を置き換えた Rust 製の HTTP プロキシで、同じトラフィックに対して CPU 使用量を約 70%、
  メモリ使用量を 67% 削減しています。

## ユースケース {#use-cases}

### Rust {#rust}

次の用途では Rust を使用します:

- Theseus 上に構築する新しいサービスやモジュール化された機能
- LabKit レベルのコンポーネントを含む新しい共有ライブラリ
- モノリスから抽出するホットパス。Ruby のネイティブ拡張として、または
  独立したサービスとして実装します
- パーサー、ルーター、プロキシ、データパイプラインなど、
  レイテンシー、メモリ、安全性に厳しい要件があるコンポーネント
- 以下の Go、Ruby、Python のセクションで扱っていない、
  その他の新しいバックエンドコード

### Go {#go}

Go は引き続き全面的にサポートされます。LabKit Go、
[Go サービステンプレート](https://gitlab.com/gitlab-com/gl-infra/common-template-copier)、
CI ツール、[Go ガイドライン](https://docs.gitlab.com/development/go_guide/)は
引き続き保守されます。Go は新しい作業では第 2 の選択肢です。次の用途で Go を使用します:

- Gitaly、Workhorse、GitLab Runner、GitLab Shell、
  GitLab Pages、Container Registry、GitLab Agent for Kubernetes などの既存の Go サービス
- 既存の Go コードベース内の新しいコンポーネント
- Go エコシステムが標準となっている Kubernetes の Operator やコントローラー。
  理由を文書化する必要があります
- Rust が要件を満たさない新しい作業。理由を文書化する必要があります。
  `labkit-rs` の機能不足は理由に含まれません。
  [長期計画](#long-term-plan)を参照してください

正常に動作している Go サービスを Rust で書き直す計画はありません。
Go では対処できない、測定で確認されたパフォーマンスや信頼性の問題が
コンポーネントにある場合に限り、書き直してください。

### Ruby {#ruby}

Ruby は引き続き Rails モノリスの言語ですが、モノリスの外部に置ける新しい
コードには推奨されません。Ruby は次の用途にのみ使用します:

- モノリス内のプロダクト機能、API、バックグラウンドジョブ
- モノリスでのみ使用する Gem

パフォーマンスや長期利用の観点で重要な場合は、Ruby コードを Rust で書き直します:

- **パフォーマンス**: 解析、レンダリング、シリアライズ、差分処理、スキャンなど、
  CPU バウンドまたはメモリ使用量が多く、コストが測定されているコード
- **長期利用**: モノリスからモジュール化されたサービスへ抽出するコード、
  または何年も存続することを想定したプラットフォームコンポーネント

測定でボトルネックと確認されておらず、抽出の候補でもない Ruby コードは
書き直さないでください。

### Python {#python}

Python は推奨されず、個別の判断で認められます。Rust を優先し、
Python を選ぶ場合は、次のような理由を設計文書または意思決定記録に記載する必要があります:

- AI や ML のフレームワークなど、Python 専用ライブラリへの依存
- [AI Gateway](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist) や Duo Workflow Service などの、
  既存の Python サービスの拡張

[Python ガイドライン](https://docs.gitlab.com/development/python_guide/)に従ってください。
Theseus はまだ Python サービスをサポートしていないため、Python サービスでは
ビルド、デプロイ、オブザーバビリティを独自に整える必要があります。

## 使用すべきでない用途 {#do-not-use-for}

- **Rust**: 既存の Go サービス内に Rust コンポーネントを新設しないでください。
  境界がライブラリまたはプロセスである場合を除き、1 つのサービスで使用する言語は 1 つにします
- **Go**: Rust が要件を満たす新しい独立したサービスでは、Go を選ばないでください
- **Ruby**: モノリス外の新しいサービスを Ruby で構築しないでください
- **Python**: Rust が要件を満たす場合は、Python を選ばないでください
- **その他の言語**: Architecture Board の承認なしに、新しいバックエンド言語を導入しないでください。
  [#principal_plus_engineers](https://gitlab.enterprise.slack.com/archives/C08DSJLMYV8)で
  議論を始めてください

## 長期計画 {#long-term-plan}

1. **LabKit の同等性**: `labkit-rs` の機能を LabKit Go と同等に揃え、
   Rust サービスでも Go サービスと同じログ、メトリクス、トレーシング、プラットフォーム
   統合を利用できるようにします。`labkit-rs` の機能不足は、
   Go を選ぶ理由にはなりません。代わりに `labkit-rs` で不足を補い、新しいサービスが増えるたびに
   `labkit-rs` が成熟するようにしてください。
2. **モノリス内の Rust**: Rails モノリスの測定で確認されたホットパスを
   Rust で書き直します。[GitLab Rails Decomposition のトラック 4](https://gitlab.com/groups/gitlab-org/-/epics/24073)では、
   次のような候補を追跡しています:
   - Markdown のレンダリング。すでに `gitlab-glfm-markdown` を通じて Rust で実行されています
   - 差分とジョブログの処理。CPU バウンドで、メモリ使用量が多い処理です
   - Ruby のグローバル VM ロックによって制限される Sidekiq ワークロード。Rust の
     並行処理によってボトルネックを解消できます
3. **Theseus 上の Rust**: Theseus と LabBench の Rust ランタイムを、
   サービステンプレート、CI テンプレート、セキュリティツールを含め、Go と同等に保ちます。

## 統合のガイダンス {#integration-guidance}

### 新しいサービスの場合 {#for-new-services}

1. **Rust をデフォルトにする**: `bench assembly create --runtime rust` でひな形を生成するか、
   [`rust-service-template`](https://gitlab.com/gitlab-org/rust/rust-service-template)から始めます
2. **LabKit を使用する**: ログ、メトリクス、トレーシングには `labkit-rs` を使用します
3. **別の言語を選ぶ場合**: Rust が要件を満たさない理由を、
   設計文書または意思決定記録に残します
4. **すべての環境に出荷する**: Theseus の[コア契約](https://theseus.gitlab.net/explanation/core-contract/)に従い、
   同じ成果物が GitLab.com、Dedicated、Self-Managed で動作するようにします

### Ruby を Rust で書き直す場合 {#for-rewriting-ruby-in-rust}

1. **先に測定する**: 書き直す前に、本番データでコストを示します
2. **境界を選ぶ**:
   - プロセス内のホットパス: `prometheus-client-mmap` のパターンに従い、
     [`rb_sys`](https://github.com/oxidize-rb/rb-sys) で構築する
     Rust のネイティブ拡張
   - 抽出したドメイン: Theseus 上の Rust サービス
3. **動作を同一に保つ**: 既存の Ruby のスペックを Rust 実装に対して実行し、
   フィーチャーフラグの背後でロールアウトします

## 関連する主要抽象化 {#related-key-abstractions}

- **gRPC, REST** - あらゆる言語のサービス間で使う通信プロトコル
- **OpenTelemetry** - すべての言語で LabKit を通じて構成するトレーシング
- [**Sidekiq**](sidekiq/) - モノリス内のバックグラウンド処理

## サポートとリソース {#support-and-resources}

- [Theseus ドキュメント](https://theseus.gitlab.net/overview/)と
  [LabKit](https://theseus.gitlab.net/platform/components/labkit/)
- [`labkit-rs`](https://gitlab.com/gitlab-org/rust/labkit-rs) と
  [`rust-service-template`](https://gitlab.com/gitlab-org/rust/rust-service-template)
- [`bench` CLI](https://gitlab.com/gitlab-org/lab-bench/bench)
- [Go の標準とスタイルガイドライン](https://docs.gitlab.com/development/go_guide/)
- [Ruby スタイルガイド](https://docs.gitlab.com/development/backend/ruby_style_guide/)
- [Python ガイドライン](https://docs.gitlab.com/development/python_guide/)
