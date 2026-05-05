---
title: "サイクルタイムを改善する"
description: "より早い市場投入と短いサイクルタイムは、あらゆる業界の開発チームが直面する大きな課題です。"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/it-groups/build/cycle-time/
upstream_sha: ce0ccdac3443c7d547631da8cba8f3148892a0c3
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---
## 概要

より早い市場投入と短いサイクルタイムは、あらゆる業界の開発チームが直面する大きな課題です。

### 1- サイクルタイム - ビジネス需要に対する IT の応答性を向上させる

1. 私（VP Apps）はどんな課題に直面しているか？
   1. **競争力を維持するために必要な、新しい機能、機能拡張、バグ修正、パッチを提供するというビジネスからの需要を満たすこと**。すべての作業を行う能力が不足しており、常にどの作業に取り組むかを優先順位付けしなければなりません。ビジネスは私たちが遅すぎる、十分速く対応できないと考えています。**彼らはすべてを欲しがり、今すぐ欲しがっています。** 彼らは私たちのプロジェクトが単に高すぎると考えています。
   1. **制約とボトルネック** が、プロジェクトの競合を生み出し、プロジェクトのフローが停止してキーリソース（環境、SME など）を待つ事態を引き起こしています。
   1. **官僚主義（チーム間の手動の引き継ぎとプロセス）が私たちを遅くし**、コードを出荷するという「本当の仕事」をすることを妨げます。
   1. **品質 - 私たちは欠陥の修正、インシデント対応（サポート）に追われ**、技術的負債を返済できません。

1. 今日それはどう見えるか（直面する問題）？
   1. **不満なビジネスリーダー、不満な顧客**
   1. チームが互いにコラボレーションできないことによる **手戻りと生産性の損失**
   1. 実装を待っている **高優先度のビジネス機能のバックログ**

1. ビジネスへの負の結果は何か？
   1. **失われた収益と機会** - 変化する市場ニーズに素早く反応できない
   1. **コストとスケジュールの超過**
   1. **技術的負債の蓄積** - 例: 未解決の脆弱性と欠陥

1. 魔法の杖が今日それを解決するなら、どう見えるか？
   1. **顧客ニーズを満たすビジネス需要が素早く提供される**
   1. チームがコラボレーションし、**競合なく** 提供する
   1. **ビジネス需要のバックログが、ビジネスパートナー / 顧客にとって、管理可能で許容できる**。

1. ビジネスへのポジティブな結果は何か？
   1. **より早い応答時間** と **変化する市場に提供する能力**
   1. **時間と予算どおり** に提供されるプロジェクト
   1. 開発者が欠陥の修正よりも **新機能の提供** に多くの時間を使う

1. これを実現するためにどんな能力が必要か？
   1. 開発プロジェクト / チームに、新しい要件を取り込み、コーディング、テスト、提供して、バックログを増やすことなくビジネス需要を満たす **能力** がある。
   1. **すべてのチーム（dev、test、security、ops）が同じプロジェクト成果物について、共通のビューで同時に協力して作業する** 能力
   1. すべての SDLC 能力が連携 - 異なるツールを縫い合わせる必要なく、開発者の時間を機能の提供に集中できる

1. 成功はどう測るか（メトリクス）
   1. **サイクルタイム**（新機能がリクエストされてから提供されるまでの時間）
   1. 遅延 / 停滞しているプロジェクトの数の削減
   1. ツールチェーンの統合と保守 **対** 新機能の開発に費やされた **エンジニア時間** の数

1. GitLab はどう問題解決を支援するか？
   1. **統合プロジェクト管理、SCM、堅牢な自動化** により、開発チームは Issue からコード、テストへ素早く移動できます。GitLab の CI/CD により、チームは各変更を素早くテストし、コンテナと Kubernetes を使ってその変更をテスト環境に移動できます。
   1. **チーム間の統合コラボレーションと組み込みワークフロー**
   1. **SDLC 全体のための単一アプリケーション** - 9 種類以上のツールカテゴリーを統合する必要なし

1. なぜ私たちは競合より優れているのか？
   1. **GitLab だけが、チームのコラボレーション、共有、ソフトウェア提供を可能にする、単一アプリケーションとして提供される完全な DevOps プラットフォームです。**
   1. GitLab はセルフマネージド Git 市場で 2/3 の市場シェアを持っています
   1. GitLab は業界をリードする CI ソリューションである（Forrester による）だけでなく、私たちの CI はプロジェクト管理、ソースコード管理、テストと密に結合しています。

1. これを証明する証拠ポイントは何か？
   1. 顧客事例 / ケーススタディ
      1. [Ticketmaster - 週次リリースに加速](https://about.gitlab.com/blog/2017/06/07/continuous-integration-ticketmaster/)
      1. [Axway での 26 倍速い DevOps サイクル](https://about.gitlab.com/customers/axway/)
      1. [Paessler AG が Jenkins から GitLab に移行し、リリース数を 4 倍に](https://about.gitlab.com/customers/paessler/)

   1. アナリストレポート
      1. Forrester は GitLab を The Forrester Wave™: Continuous Integration Tools, Q3 2017 レポートで Continuous Integration のリーダーと評価しました。
      1. Forrester は GitLab を、エンドツーエンドの DevOps 能力に加えて VSM 能力で Strong Performer と評価しました。
      1. Gartner Peer Reviews - Customer's Choice（Applications release orchestration）
      1. IDC は GitLab を 2018 年の Agile Code Development Technologies のトップ 3 イノベーターとして認めました。

   1. 業界アワード
      1. G2 Crowd LEADER: https://www.g2.com/products/gitlab/reviews
      1. Axosoft: GitLab は GitHub と肩を並べる成長を見せている！GitLab は 4 つランクを上げ、初めて GitHub を抜いた。

   1. その他の資料？
      1. https://about.gitlab.com/why-gitlab/
      1. ホワイトペーパー: SCALED CONTINUOUS INTEGRATION & DELIVERY https://page.gitlab.com/rs/194-VVC-221/images/gitlab-scaled-ci-cd-whitepaper.pdf
      1. GitLab and Agile Project Management
      1. https://about.gitlab.com/topics/devops/reduce-devops-costs/
      1. What is DevOps
      1. Starting and Scaling DevOps https://about.gitlab.com/enterprise/
      1. ホワイトペーパー: Plan ステージについて（現在デザイン中で、できるだけ早く公開予定）
