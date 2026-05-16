---
title: "Corporate Contributor 向け互換性ガイド: プロジェクトのライセンス要件をナビゲートする"
upstream_path: /handbook/marketing/developer-relations/programs/cocreate/license-compatibility-guide/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T19:48:12+00:00"
---

## 貢献に関するライセンス契約の概要

| 貢献の種類 | 貢献者 | 適用される契約 |
|----------------------|-------------------|-------------------|
| MIT ライセンスのコード | 個人 | DCO（Developer Certificate of Origin） |
| MIT ライセンスのコード | 法人 | DCO（Developer Certificate of Origin） |
| EE ディレクトリのコード | 個人 | 個人 CLA |
| EE ディレクトリのコード | 法人 | Corporate CLA |

## Co-Create のライセンスに関する考え方

**理解すべきポイント**:

- Co-Create エンゲージメント中に、チームが貢献を始める前に事前承認プロセスは不要です
- コントリビューターは、貢献を提出することで、適用される契約（DCO または CLA）を自動的に受諾します
- どの契約が適用されるかは、コードの場所によって決まります（MIT ライセンス = DCO、EE ディレクトリ = CLA）

**包括的な CLA を必要とする法人向け**:

- 一部の組織は、法人を代表して貢献する権限を持つ者を管理するため、法人を代表してなされるすべての貢献を統括する包括的な Corporate CLA を締結したい場合があります。
- このような場合、GitLab はオプションの包括的 Corporate CLA を提供しています

## 法人による貢献の管理

Co-Create に参加する組織には、2 つの道があります。

1. **標準の貢献パス**:
   - 従業員は GitLab のコードへの貢献をすぐに開始できます
   - 貢献することで、適用されるライセンス契約を自動的に受諾します
   - 事前承認や正式なセットアップは不要です

2. **正式な CLA 管理（オプション）**:
   - 明示的なコントリビューター管理を必要とする組織向け
   - cla_managers@gitlab.com に連絡して、正式な Corporate CLA プロセスを開始
   - GitLab が gitlab.com/gitlab-corporate-cla/[your-company] に専用グループを作成
   - あなたの組織は、認定コントリビューターを管理する管理者を指名

**平均タイムライン**: 初回連絡から完全な承認まで 2〜3 週間

## よくある質問

貢献、所有権、ライセンスに関するよくある質問への回答については、[DCO & CLA ページのよくある質問](https://about.gitlab.com/community/contribute/dco-cla/#frequently-asked-questions) をご覧ください。

## 始め方

法務プロセスを迅速化するために以下を行ってください。

1. このページと [GitLab DCO & CLA](https://about.gitlab.com/community/contribute/dco-cla/) を法務チームと共有する
2. cla_managers@gitlab.com に連絡して Corporate CLA プロセスを開始
3. 各コントリビューターの GitLab ユーザー名を含む、認定された貢献のリストを準備

## 連絡先情報

法務に関する質問: cla_managers@gitlab.com
Co-Create プログラムに関する質問: contributors@gitlab.com
