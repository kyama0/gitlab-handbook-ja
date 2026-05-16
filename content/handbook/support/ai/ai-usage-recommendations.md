---
title: "AI 利用の推奨事項"
description: LLM ツールからより良い結果を得るための提案
upstream_path: /handbook/support/ai/ai-usage-recommendations/
upstream_sha: cf317047d2c9678524c0db59ab7ed8c050713245
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-23T16:57:14-07:00"
---

AI ツールは、ツールに何をどのように依頼するかによって、有用性の異なる結果を返すことがあります。このガイドは、サポートエンジニアがトラブルシューティング、リサーチ、顧客との対話に LLM を使用する際に、より効果的な結果を得るための戦略を提供します。

## LLM との会話の仕方

リサーチを行う際は、できるだけ事実に基づき、率直に伝えます。二者択一の質問や確認といった近道の機会を提供してはいけません。どんな種類の答えが必要かを考え、それを念頭に置いてリクエストを組み立てましょう。

具体的なデータ（ログメッセージなど）を含めて LLM にコンテキストを与えることができます。これらのデータはモデルに処理のための追加コンテキストを提供します。LLM には Issue の説明は必要ないかもしれません。ログのスニペットを渡すだけでディスカッションを開始するのに十分です。

## オープンクエスチョン対クローズドクエスチョン

具体的な答えを得ることを目的とした質問は、自由形式の質問よりも効果的なことがあります。これにより、より有用になりそうな方向にマシンを誘導することを試みます。

## ゴールを明示する

ゴールや具体的な質問と、貼り付けたログスニペットを組み合わせることで、問題空間を制約し、すべてを軌道に乗せておくのに役立ちます。

## 例

良い例:

- "Show me where authentication is handled in the API controllers"
- "This GitLab CI job fails with 'executor not found'. Here's the .gitlab-ci.yml and the runner config. Tell me what you think." \[paste configs]
- "What do you think of this Sidekiq log? \[paste error]"

悪い例:

- "Is this error caused by SSL or DNS? \[paste error]"
- "This exception was thrown while a pipeline was running. Why did the pipeline cause the exception? \[paste error]"
- "Was this issue caused by a misconfiguration or a bug? \[paste error]"

## LLM を当てにしない

LLM は数字や数学が苦手です。LLM が数学を行ったり、数字同士の関係を理解したりする能力を当てにしないでください。

## 注意すべきこと

LLM は日付について簡単に混乱します。期待よりも古いバージョンを提案したり、「リリースされていない」のでバージョンが無効だと提案したりすることがあります。これは*相対的な*日付にも当てはまります。「昨年リリース」されたものは、そうでないかもしれません。

モデルは、ドキュメント、API エンドポイント、バージョン、その他ほぼ何でも自信ありげに提案することがあります。常に提案の事実を検証してください。これは API や CLI のオプションで特に巧妙になることがあります。

## ヒューマン・イン・ザ・ループ

AI には趣味も判断力もありません。タスクを前進させるために必要なデータを集めるツールとして使用しつつ、ソース資料から検証してください。

- AI は要約、言い換え、ランク付け、ブレインストーミングができます。
- あなたが決定し、検証し、実験し、コミュニケーションを取ります。

---

## LLM によるトラブルシューティング

LLM はさまざまな方法でデバッグに使用できます。エージェント型ツールはデバッグプロセスのさまざまな段階で摩擦を減らすために使用できます — たとえば、簡略化された YAML や、エクスプロイトスキャナーをトリガーするコードの作成などです。これらのツールを使用するときは、ZenDesk データは ORANGE ですが、添付ファイルは RED であることを認識してください。すべての LLM ツールが RED データに承認されているわけではありません。

これらの例では、ユーザーから収集したログ、構成、スニペットを入力として使用してデバッグを進めます。

### 最小限の再現プロジェクトとパイプラインを構築する

最小限のプロジェクト構成をドラフトします。

良い使い方:

- "From this `.gitlab-ci.yml`, remove everything unrelated to the job and produce the smallest pipeline that should still reproduce the error."  
  \[paste `.gitlab-ci.yml` and job log]
- "From this summary, build a simplified `.gitlab-ci.yml` to reproduce the issue and commit to this project.  
  \[paste ticket summary]

### セキュリティスキャナーをデバッグするためのコード生成

LLM はデバッグに必要なコードスニペットを作成できます。脆弱なコードをテスト用に作成できれば、スキャナーの失敗を再現することが容易になります。

例:

- "Write a program that would be vulnerable to CVE-123-456 and commit to this project so I can debug a security scanner"
- "Create a small `docker-compose.yml` and vulnerable dependency list that should produce at least one dependency-scanning finding for `openssl`."

### デバッグ用の偽のシークレットの生成

LLM はシークレットがどのように見えるかを知っています。デバッグ用のシークレット例を依頼してください。

例:

- "Can you generate me a fake GitLab API key for secret detection?"
- "Generate an example key that matches the Anthropic key format"

### ログとエラーの解釈

貼り付けたログやスタックトレースに対する第二の目として AI を扱ってください。

例:

- "Tell me what you see in this stack trace. Do you have any suggestions?"  
  \[paste stack trace + version]
- "Please review these logs. Tell me what you think."  
  \[paste selected job logs]

注目すべき点を強調するかもしれないログの初回パスをここで使用します。

---

## 顧客コミュニケーション

LLM はあなたのメモをより会話的なテキストに変えるのに役立つかもしれませんが、最終的な権威ではありません。生成されたものは正確性とトーンを慎重にレビューしてください。

アイデア:

- 箇条書きの分析からドラフトリプライへ移行する。
- 技術的内容を変えずにトーンを調整する（より簡潔に、より共感的に、専門用語を減らして）。
- 代替の言い回しを提案する
- テキストをレビューさせて編集を提案させる

良い使い方:

- "Here are my notes for an update. Write a concise, professional reply that a GitLab Senior Support Engineer would send. Don't add any new claims."  
  \[paste your own bullet points / outline]

- "Review this explanation and let me know what you think; would a new GitLab admin understand it?"  
  \[paste your draft]

- "Shorten this update by about 30% while preserving the key actions, results, and next steps."  
  \[paste your draft]

ガードレール:

- 送信前にすべての技術的な記述を検証する。
- 自分の分析を先に提供せずに「顧客に何を伝えるべきか？」と尋ねないこと。

---

## 意思決定者ではなくデバッグパートナーとしての AI

LLM は構造化された思考を支援するために使用できます。チケットに関連する質問をしたり、データをテスト可能な仮説に整理したり、調査を進める間にあなたの推論に挑戦したりできます。

パターン:

- テストプランへの批評を依頼する
- 分析でデータが欠けていないか検証する

良い使い方:

- "Here is the situation, my current hypothesis, and the steps I've taken. Act as a critical peer reviewer: evaluate what assumptions I'm making and if there is more data I need to gather for validation?"  
  \[paste case summary]

- "Given this job log and my notes, suggest some possible root causes and suggest ways to test each root cause."  
  \[paste log + notes]

- "Here's an error. What data do we need to gather to understand this error? Please don't draw any conclusions yet."  
  \[paste symptom summary]

---

## 構成、フィーチャーフラグ、環境の比較

LLM は「違いを見つける」種類の問題、たとえば構成ファイル間の構成の違いがある場合に優れています。

良い使い方:

- "Compare these two `gitlab.rb` files: one from a working environment, one from a failing one. Highlight only the differences that are plausibly related to Sidekiq performance."  
  \[paste config A]  
  \[paste config B]

- "Here is a `.gitlab-ci.yml` and my repro `.gitlab-ci.yml`. List which differences could explain why the repro does _not_ fail in the same way."  
  \[paste both files]

- "Given these two sets of feature flag settings (customer vs. GitLab.com default), identify flags that are plausibly related to the reported behavior."  
  \[paste redacted feature flag dumps]

---

## 自分のために長いスレッド、チケット、ログを要約する

エージェントはデータの要約に優れています。これは Glean のチケット要約ボットから〜まで多岐にわたります

良い使い方:

- "Summarize this Zendesk ticket thread into: (1) customer's current understanding, (2) what we've already tried, (3) open questions, and (4) potential next steps. Do not propose new technical facts; just reorganize what's there."  
  \[paste ticket thread or key excerpts]

- "Summarize this issue discussion into a one-paragraph status update plus a bullet list of remaining blockers."  
  \[paste issue comments] or ask Duo from the issue

---

## テストケースとエッジ条件のブレインストーミング

テストプロジェクトで Issue を再現できない場合、エッジケースのアイデアや追加のテストケースの提案について AI を使用します。

良い使い方:

- "Given this minimal repro project and the bug I'm seeing give me some options for test cases and/or extra jobs to understand the scope of the issue."  
  \[describe repro + symptoms]

- "I fixed this issue by changing the job definition; could that have any downstream effects I should be aware of for the user?"
  \[paste MR description]

---

## 例のコマンドとスクリプトの構築

スクリプトおよび/またはコマンドは AI で生成できます。これらはユーザーに提供する前にテストする必要があります。

良い使い方:

- "Write a Python API script that walks all projects in a group and turns off this feature"  
  \[paste details]

- "Build an example API query to check variables for a pipeline"  
  \[paste steps]
