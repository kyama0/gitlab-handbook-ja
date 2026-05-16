---
title: 開発における必須承認
upstream_path: /handbook/engineering/development/required-approvals/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

## 概要

私たちは、先に進む前に追加の承認が必要となる特定のシナリオを識別しています。GitLab では[硬直性より自由と責任](/handbook/values/#freedom-and-responsibility-over-rigidity)を重視していますが、以下の[承認が必要な例](#examples-requiring-approval)のセクションでは、実装を進める前に承認プロセスを経る必要がある意思決定を概説しています。

<span id="approval-process"></span>

### 承認プロセス

承認が必要な各セクションには、考慮事項のセクションがあります。考慮事項セクションのすべての質問に「はい」と答えた場合は、実装を進める前に提案の承認を得る必要があります。承認プロセスの手順:

* 設計提案を記載した Issue を提出する
* CEO とすべてのフェローエンジニアに Issue を公開する
  * `~"CEO Interest"` ラベルを付ける
* CEO と 1 人のフェローエンジニアからの承認を得る必要がある
* 最初の手順で作成した Issue を使って、承認を得るための調整を行う

### 承認が必要な例 {#examples-requiring-approval}

#### 独立したデータベースの提案

[コンテナレジストリのデータベーススキーマ定義](https://gitlab.com/gitlab-org/gitlab/-/issues/207147)に関する議論から学んだように、データを独自のデータベースに分離することが合理的な場合があります。次のセクションでは、考慮すべきデータポイントと、独立したデータベースの作成承認を得るための手順を説明します。

##### 考慮事項

* この機能は完全に独立したコードベースで記述されていますか？再びコンテナレジストリの例を使うと、これは Go で記述されており、メインの GitLab Rails アプリケーションとは独立しています。
  * コードベースが完全に独立しており、そのコードベースだけがデータをクエリする場合にのみ、独立したデータベースを使用してください。たとえば、[Analytics Instrumentation](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/27730) は Rails コードベースがそれに触れているため、適合しません。
* この機能は大量の書き込み負荷を発生させますか？書き込みはレプリカでスケールできる読み取りよりもスケールが難しいです。
* この機能はメイン Rails データベースへのアクセスを必要としませんか？たとえば、データがメイン Rails データベースから完全に分離されており、データベース間でデータを共有する必要がない場合です。
* サポートする必要がある既存の API はありますか？たとえば、コンテナレジストリには、タグ取得などに既存の GitLab Rails アプリケーションで使用している完全な API セット（https://docs.docker.com/registry/）があります。

#### マイクロサービス作成の提案

[マイクロサービスの問題点](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/strategy/#the-trouble-with-microservices)は GitLab にとって新しいトピックではありません。2 つのターボを持つフライホイールというビジネス戦略のもと、私たちはデフォルトで GitLab を[単一アプリケーション](/handbook/product/categories/gitlab-the-product/single-application/)として提供しています。ただし、スケールで問題を解決するために適切なアーキテクチャ（この場合はマイクロサービス）を採用することは反対しません。マイクロサービス作成の提案を[承認](#approval-process)のために提出する際は、以下の考慮事項を必ず含めてください。

##### 考慮事項

* 私たちの方向性が [SaaS ファースト](https://about.gitlab.com/direction/#saas-first)であることを踏まえ、この変更は SaaS ファーストの提供をどのように改善しますか？
  * これらの改善は今後どのように測定できますか？
* これはセルフマネージドの顧客にどのような影響を与えますか？
* この問題は現在のモノリシック環境で解決できますか？
* 継続的なデプロイの考慮事項は提案に記載されていますか？
