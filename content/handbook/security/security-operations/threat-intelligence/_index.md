---
title: 脅威インテリジェンスチーム
upstream_path: /handbook/security/security-operations/threat-intelligence/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T16:00:00Z"
translator: claude
stale: false
---

## 脅威インテリジェンスへのエンゲージ

緊急のセキュリティリクエストについては、Slack コマンド `/security` を使用して [セキュリティチームをエンゲージ](/handbook/security/security-operations/sirt/engaging-security-on-call/) してください。

その他の事項については、以下の方法で脅威インテリジェンスに連絡できます。

- 一般的な議論のために Slack チャンネル `#security_discuss` で `@threat-intelligence` をタグ付けする。
- 一般的なリクエストのために Slack チャンネル `#security_help` で `@threat-intelligence` をタグ付けする。
- 公式かつ明確に定義されたリクエストには [RFI プロセス](#requests-for-information-rfi) に従う。

## 私たちのビジョン

GitLab に対し、業界全体での透明性とコラボレーションの新たな基準を打ち立てつつ、私たちの会社と顧客を守るためのインテリジェンス主導の意思決定を可能にすること。

## 私たちのミッションステートメント

私たちのミッションは、GitLab がセキュリティに関する情報に基づいたプロアクティブな意思決定を行えるよう、実用可能なインテリジェンスを提供することです。

私たちは、GitLab にとって最も関連性の高いリスクを特定することに重点を置いて脅威の状況を監視します。これらのリスクを分析し、関連する脅威アクターを追跡し、業界の同業者との関係を構築します。これらのつながりにより、他では入手できない、タイムリーで独自の洞察にアクセスできるようになります。私たちは、組織にとって最も関連性の高い情報を抽出することに重点を置き、即時のアクションを推奨する明確で簡潔なレポートを提供します。

警戒を怠らず、ターゲットを絞ったインテリジェンスを共有することで、GitLab が課題を予測し、迅速に行動し、お客様とプラットフォームを保護できるよう努めています。

## チーム

脅威インテリジェンスチームは、Security Operations 内のシニアマネージャーに直属する 1 名の専任エンジニアで構成されています。

## 提供しているサービス

### セキュリティオペレーション支援

脅威インテリジェンスエンジニアは、SIRT やその他のセキュリティチームと密接に連携し、日々のセキュリティオペレーションに重ねる形で専門的な知見を提供します。これには、脅威ハンティング、マルウェア解析、ログ分析、脅威アクター帰属を通じて、進行中の調査やインシデントへの支援が含まれます。これらの作業の多くは、正式なリクエストではなく、Slack でのチームディスカッション、オープンケース、進行中のインシデントによって駆動されます。

S1 インシデントの支援は、常に他のすべての作業より優先されます。

### 脅威インテリジェンスレポート

レポートは、急速に出現する脅威に対応してアドホックに提供され、特定の脅威アクター、キャンペーン、または脆弱性に焦点を当てます。これらのレポートは、GitLab がお客様と組織を守るための迅速な意思決定を支援します。継続的な注意が必要なテーマについては、必要に応じてローリングサマリーが作成されることがあります。

すべてのレポートは GitLab.com 上で記述されており、コラボレーションと推奨事項への直接リンクが可能です。レポートには一貫して以下が含まれます。

- 取り上げる各トピックに対処するための明確に定義された次のステップを含む、リンクされた Issue
- 取り上げる各脅威について以下の質問に回答すること
  - これは GitLab にとってどの程度関連があるか?
  - GitLab は今日、この脅威に対処する準備がどの程度できているか?
  - GitLab はこの脅威により適切に対応するためにどのようなステップを踏んでいるか?

推奨事項は時間的制約があり重要なものが多く、以下のような活動に活用されます。

- セキュリティコントロールおよび検知能力の迅速なイテレーション
- 脅威ハンティング
- セキュリティコミュニケーション
- パープルチームのフラッシュオペレーション

レポートは [Flash Report テンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/threat-intelligence-public/resources/threat-intelligence-templates/-/blob/main/.gitlab/issue_templates/flash_report.md?ref_type=heads) を使用します。

### 情報リクエスト (RFI) {#requests-for-information-rfi}

RFI を使用すると、GitLab チームメンバーは脅威の分析やインテリジェンスに基づく意思決定について私たちに支援を依頼できます。チームメンバーは [RFI テンプレートを使ってトラッカーで Issue を作成する](https://gitlab.com/gitlab-com/gl-security/security-operations/threat-intelligence/threat-intelligence-issue-tracker/-/issues/new) ことができます。

RFI が価値を提供できる例は次のとおりです。

- 進行中のセキュリティインシデントおよびサードパーティ侵害への露出の調査
- プロダクトのセキュリティ機能や機能性に関する意思決定
- GitLab のセキュリティ判断に関する脅威に基づくコミュニケーションのドラフト支援
- サードパーティベンダーおよび製品の評価

情報リクエストには [このテンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/threat-intelligence-public/resources/threat-intelligence-templates/-/blob/main/.gitlab/issue_templates/rfi.md?ref_type=heads) を使用します。

## 成功の測定方法

GitLab.com の Issue とカスタムラベルを使用して、以下のメトリクスを追跡します。

### 現在のメトリクス

- 採用率: インテリジェンス主導の推奨事項が受け入れられ実装される度合いを測定します。
- RFI 満足度: RFI が要求者のニーズに応える実用可能な情報を提供しているかを測定します。

### メトリクスラベル

**推奨事項分類ラベル:**

- 検知とアラート (`TIRec::Detection`)
- セキュリティコントロール (`TIRec::Control`)
- プロセスと手順 (`TIRec::Process`)
- パープルチームオペレーション (`TIRec::PurpleTeamOp`)

**推奨事項アウトカムラベル:**

- 完全採用、クローズ (`RecOutcome::Adopted`)
- 部分採用、クローズ (`RecOutcome::PartiallyAdopted`)
- 不採用、クローズ (`RecOutcome::NotAdopted`)

**RFI 満足度ラベル:**

- RFI が実用可能な情報を提供した (`TIRFI::Satisfied`)
- RFI が部分的に実用可能な情報を提供した (`TIRFI::PartiallySatisfied`)
- RFI が実用可能な情報を提供しなかった (`TIRFI::NotSatisfied`)

## 追加リソース

- [脅威インテリジェンステンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/threat-intelligence-public/resources/threat-intelligence-templates): レポート、RFI 等のための公開テンプレートリポジトリ。
- [年次脅威インテリジェンスレポート](https://gitlab.com/gitlab-com/gl-security/security-operations/threat-intelligence/threat-intelligence-resources/awesome-annual-security-reports): 公開されている年次脅威インテリジェンスレポートの内部ミラー — チームメンバーは更新通知に登録できます。
