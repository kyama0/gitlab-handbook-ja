---
title: "ワークショップ貢献ガイドライン"
description: "Demo Architecture でサポートされる独自コンテンツを貢献する方法のガイダンス"
upstream_path: /handbook/solutions-architects/center-of-excellence/workshop-contribution-guidelines/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## ワークショップ貢献ガイドライン

### チームの貢献

すべてのチームメンバーは、自分のプリセールスまたはポストセールスのワークショップを COE チームのインフラでサポートしてもらえるよう貢献することを推奨されます。そうすることで、ワークショップが Learn Labs に追加され、自分や組織内の他のセールスチームがイベントをシームレスに繰り返し実施できるようになります。コンテンツを貢献すると、他者があなたの作業を活用でき、できれば貢献を返してくれます。当社は様々なタイプのコンテンツを受け入れています。

### ガイドライン

1. **広範な適用性**: コンテンツは単一の顧客に固有のものであってはなりません。地域に関係なく、どの顧客にも繰り返し利用でき関連するものでなければなりません。ターゲット業種に特化したコンテンツも受け入れ、推奨しますが、他の人がそれを業種以外の顧客に使う可能性もあることを念頭に置いてください。AI のような特定のトピックに焦点を当てた複数のワークショップを提案することは許容されますが、自分のコンテンツが既存のワークショップと重複していないか、デューデリジェンスを行ってください。既存のワークショップコンテンツはすべて [Demo Architect Portal](https://cloud.gitlabdap.com/) で表示でき、[Learn Labs sample projects](https://gitlab.com/gitlab-learn-labs/sample-projects) に保管されています。

2. **セットアップ手順**: ワークショップで追加のリソースセットアップ (例: クラスターの接続) が必要な場合は、明確なセットアップ手順を含めてください。

3. **スタイルガイドライン**:
   - すべてのハンズオン手順を Markdown で書き、顧客向けの Issue として追加されることを想定してください。
   - 顧客がクリックする必要があるものには **bold** を使ってください。
   - 顧客が確認する必要があるものには *italics* を使ってください。
   - すべての Issue の先頭にタイトルと `[[_TOC_]]` を含めてください。
   - 準備手順は 0 から番号付けしてください。それ以外の場合は手順 1 から始めてください。
   - 可能な限りコードをコピー可能にしてください。例:

     &#96;&#96;&#96;plaintext

        How to enable experimental and beta AI features for GitLab Duo?

     &#96;&#96;&#96;

     参加者に手順を書き出させることは、しばしば問題につながります。
   - 可能な限り関連ドキュメントへのリンクを設定してください。例:
     > [Docs for GitLab Discussion Summary](https://docs.gitlab.com/ee/user/discussions/index.html#summarize-issue-discussions-with-duo-chat)
   - 大規模なコード変更の場合は、Issue ごとに「完成」ブランチを提供してください。例えば、演習の目的が DAG を示すことなら、「finished DAG」というブランチをプロジェクトに用意してください。[例](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing/-/tree/DAG?ref_type=heads)
   - ガイダンスとしてこの[サンプルファイル](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing/-/blob/main/Courses/Workshops/Duo_Enterprise/1_Modern_Development_With_GitLab_AI.md?ref_type=heads)を参照してください。

4. **避けるべきこと**:
   - 可能な限り GitLab プラットフォーム内に留まってください。これにはローカル IDE ではなく Web IDE の使用も含まれます。顧客に別の IDE や他のツールのダウンロードを要求すると、ファイアウォール、バージョン管理、セキュリティの問題につながる可能性があります。
   - [実験的または初期開発機能](https://docs.gitlab.com/development/documentation/experiment_beta/)は、予期しない停止や頻繁な変更がある可能性があるため避けてください。含めなければならない場合は、手順内で明確に注意喚起してください。
   - ワークショップの長さに注意してください。3 時間に近づく場合は、コンテンツを分割することを検討してください。
   - スライドとコンテンツの両方でアクセシビリティを優先してください。色覚異常の方が問題なく見られるように高コントラストを確保してください。
   - 現在、トップレベルグループオーナーのデモはサポートしていません。参加者はサブグループのオーナーになりますが、トップレベルグループへのアクセスは一切ないものと想定してください。

### 期待されること

[Demo Architect Portal](https://cloud.gitlabdap.com/) からワークショップコンテンツを貢献していただくと、COE チームがレビューし、磨き上げてインフラに追加するために協力します。私たちが技術的なセットアップを担当するので、あなたは魅力的なワークショップの提供に集中できます。

貢献によって、セールス組織全体にとって価値あるリソースの構築を手助けすることになります。インパクトのある再利用可能なワークショップコンテンツを作るための協力に感謝します。貢献プロセス中に質問があれば、ぜひ [COE Demo Architecture チーム](https://gitlab.enterprise.slack.com/archives/C05E9EG6M5W) までガイダンスを求めてください。
