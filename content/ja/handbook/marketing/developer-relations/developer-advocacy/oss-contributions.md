---
title: "OSS への貢献"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/oss-contributions/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## OSS への貢献

デベロッパーアドボカシーチームはオープンソースを信じており、模範を示すことを目指して GitLab と OSS エコシステムに貢献しています。私たちのワークショップ、コミュニティアクティビティ、プロジェクトは[プロジェクト概要](/handbook/marketing/developer-relations/developer-advocacy/projects/)に文書化されています。

### デベロッパーアドボケイトがメンテナンスするプロジェクト

私たちは [Developer Advocacy グループ](https://gitlab.com/gitlab-da) でプロジェクトを整理しています。いくつかの例を紹介します:

* [Docker Hub Limit Monitoring](https://about.gitlab.com/blog/2020/11/18/docker-hub-rate-limit-monitoring/)
  * [Prometheus 用 Exporter](https://gitlab.com/gitlab-da/docker-hub-limit-exporter)
  * [Monitoring Plugin](https://gitlab.com/gitlab-da/check-docker-hub-limit)
* [CI/CD API Lint Git Hook](https://gitlab.com/gitlab-da/ci-cd-api-lint-hook)
* [Go Excusegen](https://gitlab.com/gitlab-da/go-excusegen)

### 貢献例

#### GitLab

* CI Monitoring webcast から派生した [GitLab CI/CD Pipeline Efficiency ドキュメント](https://docs.gitlab.com/ee/ci/pipelines/pipeline_efficiency.html)
* [CI/CD Templates: Support the default branch, shift to main](https://gitlab.com/gitlab-org/gitlab/-/issues/324131)

#### Prometheus

* [GitLab CI Pipeline Exporter](https://github.com/mvisonneau/gitlab-ci-pipelines-exporter)
  * [API リクエスト](https://gitlab.com/gitlab-org/gitlab/-/issues/327919#note_555854856)に関する支援
  * [Michael の貢献](https://github.com/mvisonneau/gitlab-ci-pipelines-exporter/pulls?q=is%3Apr+author%3Adnsmichi)

#### HashiCorp Waypoint

* ドキュメント
  * [GitLab CI/CD インテグレーション PR](https://github.com/hashicorp/waypoint/pull/492)
* ブログ記事
  * [How to use HashiCorp Waypoint to deploy with GitLab CI/CD](https://about.gitlab.com/blog/2020/10/15/use-waypoint-to-deploy-with-gitlab-cicd/)
* GitLab インテグレーション
  * [Waypoint Images](https://gitlab.com/gitlab-org/waypoint-images)
  * [CI/CD テンプレート](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/45314)
* デモ
  * [Waypoint AWS ECS の例](https://gitlab.com/brendan-demo/waypoint)
* コミュニティ
  * [5. everyonecancontribute cafe](https://everyonecancontribute.cafe/post/2020-10-21-cafe-5-hashicorp-waypoint/)

## 貢献の定義

貢献は「コードだけではない」ものであり、しばしば測定が難しいものです。私たちのチームは小さなサブセットから始め、このセクションを時間とともに更新するようにしています。

* ソースコード
* ドキュメント
* チュートリアルやブログ記事
* ワークショップやトレーニング
* Issue ディスカッション、バグ解決、機能の設計/アーキテクチャの提案
* パッケージとリリースの配布
* コミュニティフォーラムとソーシャルメディアでの支援

### リソースと時間の確保

デベロッパーアドボケイトには、毎週オープンソース貢献のための時間を見つけることが奨励されています。

### 測定

私たちは、提出された Issue、MR/PR、コミット URL の形式で、可能な限り測定することを目指しています。

### 貢献領域

決定したり、一度の貢献をプロジェクトでの継続的な関与にすること、将来的にメンテナを助ける道を切り開くことは難しいかもしれません。最初のイテレーションとして、適格なプロジェクトの要件を定義します:

* 日常的に使用する (例: CLI ツール)
* あなたとあなたの環境を助ける (例: カレンダーアプリ)
* エコシステムに利益をもたらし、プロセスを容易にする

私たちは経験が最も豊富な言語とフレームワークに注力します: Golang、C/C++、JS、Ruby、.NET など。
