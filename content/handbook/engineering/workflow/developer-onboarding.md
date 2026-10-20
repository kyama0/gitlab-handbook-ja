---
title: "開発者オンボーディング"
description: "これから GitLab の開発者になります！ここでは開発を始めるために必要なすべてのものを見つけることができます。"
upstream_path: "/handbook/engineering/workflow/developer-onboarding/"
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
translated_at: "2026-10-20T10:43:24Z"
translator: claude
stale: false
lastmod: "2026-10-20T12:23:13+02:00"
---

これから GitLab の開発者になります！
始める前に[ハンドブック](/handbook/)を必ず確認し、GitLab での作業スタイルを把握してください。以下では開発を始めるために必要なすべてのものを見つけることができます。
不足しているものがあれば追加してください（GitLab のすべてのことと同様に）！

## GitLab 環境

私たちには複数の [GitLab 環境](/handbook/engineering/infrastructure-platforms/environments/)があります。

それらのインスタンスでは、<kbd>p</kbd> を押してから <kbd>b</kbd> を押して（本番環境でも）[パフォーマンスバー](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html)を有効にしてください。

次に、GitLab.com での[本番 Canary の使用と有効化の方法](/handbook/engineering/infrastructure-platforms/environments/canary-stage/)をお読みください。

## GitLab 開発を始める

開発を始めるには、[Caproni for GitLab](https://gitlab-org.gitlab.io/caproni/gitlab/)の手順に従ってください。

## GitLab リポジトリ

GitLab は多くのサブプロジェクトで構成されています。GitLab リポジトリのキュレーション済みリストは [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)ページで確認できます。

ほぼすべてのリポジトリは GitLab.com と dev.gitlab.org の両方で利用可能です。可用性のために dev.gitlab.org にもミラーリングし、歴史的な理由から [GitHub](https://github.com/gitlabhq) にもミラーリングしています。

すべての Issue は GitLab.com で登録する必要があります。

## インフラストラクチャ

インフラストラクチャに関連するすべては、[インフラストラクチャハンドブック](/handbook/engineering/infrastructure/)を確認してください。
特に[プロダクションアーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)はオンボーディングに役立ちます。

何らかの理由で VPS が必要な場合は、DigitalOcean でセットアップするのが最も簡単です。別の開発者にアクセスを依頼してください。

## GitLab 開発の基本

### ワークフロー

ハンドブックの[エンジニアリングワークフロードキュメント](/handbook/engineering/workflow/)を参照し、[開発者ドキュメント](https://docs.gitlab.com/ee/development/)をお読みください。

### セキュリティ

セキュリティ Issue に取り組む前に[開発者セキュリティドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md)をお読みください。

### 品質 {#quality}

GitLab の強みの 1 つはソフトウェアの高い品質です。これを達成するために、コントリビュートされるすべてのソースコードに要件を設けています。すべての要件は[コントリビューションガイド](https://about.gitlab.com/community/contribute/)に記載されています。必ず読んで従ってください。

### 依存関係

GitLab は様々な Linux ディストリビューションと macOS で Omnibus パッケージまたはソースからインストールできます。移植性を維持するために、余分な依存関係の追加やエキゾチックなデータベース拡張の使用を避ける必要があります。アプリケーションコードの変更と新しい依存関係の追加の間で選択するたびに、メンテナンスとセットアップが容易なため前者を優先すべきです。それでも GitLab に新しい依存関係を持ち込む必要がある場合は、別の開発者または CTO にアドバイスを求めてください。

### コードの提出

GitLab では、すべてのコードはマージ可能になる前にレビュープロセスを経る必要があります。変更のためのマージリクエストを必ず提出してください。
マージリクエストの準備ができたら、[チームの他のメンバー](/handbook/engineering/workflow/code-review/)に割り当てる必要があります。
この人はあなたのコードをレビューしてマージする責任を負います。
オプションとして、コメントを書いて別の開発者に助けやレビューをリクエストすることもできます。
マージリクエストが割り当てられていない場合、おそらく無視されて不必要な遅延が生じます。

複数日にわたって 1 つのタスクに取り組んでからマージリクエストを提出しないでください。
最大のタスクでも小さなタスクに分割できます。
機能の各部分のマージリクエストを提出するようにしてください。
これは毎週複数のマージリクエストが期待されることを意味します。
小さなマージリクエストは良いフィードバックを受ける可能性が高く、より早くマージされます。

変更が非常に軽微でない限り、または同じバージョンで導入されたバグを修正する場合を除き、[`Changelog` Git コミットトレーラー](https://docs.gitlab.com/ee/development/changelog.html)を使用してチェンジログエントリを作成してください。
名前を記載するのはボランティアコントリビューターの貢献を称えるためだけなので、エントリに自分の名前を含めないでください。

### GitLab EE での作業（開発者ライセンス） {#working-on-gitlab-ee-developer-licenses}

Premium および Ultimate 機能のロックを解除するには、有効なサブスクリプションが必要です。

GitLab チームメンバーは[これらの手順](/handbook/support/internal-support/#unlock-premiumultimate-features-on-self-managed--gdk-for-team-members)に従ってサブスクリプションを取得または更新できます。

より広いコミュニティメンバーは [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/community-contributors-workflows#contributing-to-the-gitlab-enterprise-edition-ee)に連絡してください。

### Ruby Gems

[Ruby gems の開発ガイドライン](https://docs.gitlab.com/ee/development/gems.html)に従ってください。

## より広いコミュニティへの参加

- [Merge Request Coach](/job-description-library/expert/merge-request-coach/)になる
- [コミュニティ Discord](https://discord.gg/gitlab)に参加する
- チームが[コミュニティオフィスアワー](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#community-office-hours)を開催することを奨励する
- Slack の `#developer-relations-engineering` で [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering)に連絡する
- あなたの活動にコミュニティを巻き込む
- 公開で会話する
- チームの Issue をトリアージし、特に[ハッカソン](https://about.gitlab.com/community/hackathon/)に向けて、該当する Issue に `quick win` ラベルを付ける
- [コミュニティフォーク](https://gitlab.com/gitlab-community)を使用する
- チームメンバーおよび/またはコミュニティと[ライブストリーミング](/handbook/marketing/marketing-operations/youtube/#public-or-private-streaming)と[ペアリングセッション](/handbook/marketing/developer-relations/engineering/community-pairing-sessions/)を検討する
- [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube チャンネルのミーティングを録画する（ハンドブック情報は[こちら](/handbook/marketing/marketing-operations/youtube/)）
- コミュニティメンバーからのリクエストを擁護して社内で懸念点を提起する
- X/Twitter や LinkedIn などのチャンネルでコミュニティメンバーとオフラインでつながる

## 関連リンク

- [エンジニアリングハンドブック](/handbook/engineering/)
- [エンジニアリングワークフロー](/handbook/engineering/workflow/)
- [プロダクトハンドブック](/handbook/product/)
