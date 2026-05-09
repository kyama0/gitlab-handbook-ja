---
title: Trust & Safety チーム
description: "GitLab.com Trust & Safety チームの概要"
upstream_path: /handbook/security/security-operations/trustandsafety/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T03:09:44Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

Trust and SafetyチームはGitLabのセキュリティチームのサブ部門であり、GitLab Inc の [Security](/handbook/security) における [Security Operations](/handbook/security/security-operations) サブ部門の一部を構成します。[GitLab.comでの不正利用 (Abuse)](/handbook/security/security-operations/trustandsafety/abuse-on-gitlab-com/) の緩和を任務としています。

## ミッション

私たちのミッションは、ユーザーの信頼の構築と維持を支援し、GitLabプラットフォームを安全で害のないものに保ち、誰もが貢献できるようにすることです。

私たちはこれを、ケア、保護、プライバシーへの敬意の文化を構築することで達成することを目指しています。「悪い」ものを止めると同時に、「良い」ものを可能にすることを目指しています。

## ビジョン

GitLab Trust and Safetyに対する私たちのビジョンは、業務において正確性とスケールの両方を達成できるチームとツールを構築することです。

私たちは、自分たちのインターネットの片隅をもう少し安全にすると同時に、外部の不正利用の検出と報告を支援することで、可能な限り最高のインターネット市民でありたいと考えています。

## 私たちの責任

- ユーザーが生成した [GitLab.comでの不正利用](/handbook/security/security-operations/trustandsafety/abuse-on-gitlab-com/) を検出する
- GitLab.comでの不正利用活動について報告されたアカウントを確認する
- [利用規約](https://about.gitlab.com/terms/) に違反するGitLab.com上のユーザー生成コンテンツを削除する
- GitLab.com上の悪意のあるユーザー生成活動を緩和する
- アカウント復活リクエストを確認する
- [DMCA](/handbook/legal/dmca/) (デジタルミレニアム著作権法) および商標侵害通知を確認する
- GitLab.comに影響を及ぼす悪意のある活動を関連サービスプロバイダーに報告する

### <i class="fas fa-users" id="biz-tech-icons"></i> チーム

<table>
<thead>
<tr>
<th>担当者</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>Matt Coons</td>
<td><a href="/job-description-library/security/trust-and-safety">Trust and Safety Functional Leader</a></td>
</tr>
<tr>
<tr>
<td>Joanna Rubi</td>
<td><a href="/job-description-library/security/trust-and-safety">Security Engineer, Trust & Safety</a></td>
</tr>
<tr>
<td>Shawn Sichak</td>
<td><a href="/job-description-library/security/trust-and-safety">Security Engineer, Trust & Safety</a></td>
</tr>
<tr>
<td>Westley van den Berg</td>
<td><a href="/job-description-library/security/trust-and-safety">Security Analyst, Trust & Safety</a></td>
</tr>
<tr>
<td>Ruby Nealon</td>
<td><a href="/job-description-library/security/trust-and-safety">Security Engineer, Trust & Safety</a></td>
</tr>
<tr>
</tbody>
</table>

---

### 不正利用の報告

- **不正利用** 活動を報告するには、[GitLab.comでの不正利用ページ](/handbook/security/security-operations/trustandsafety/abuse-on-gitlab-com/) を参照してください。
- 著作権および商標侵害については、[GitLab.com上の知的財産ページ](/handbook/security/security-operations/trustandsafety/intellectual-property-on-gitlab-com/) を参照してください。
- よくある質問については、[FAQページ](faq/) を参照してください。

### GitLab Trust and Safetyチームとの協働

- 現在の不正利用防止および緩和戦略について議論し、改善する可能性のある [オープンソースプログラムパートナー](https://about.gitlab.com/solutions/open-source/partners/)、[Premium](https://about.gitlab.com/pricing/premium/) および [Ultimate](https://about.gitlab.com/pricing/ultimate/) のお客様は、`abuse@gitlab.com` までご連絡ください。最も適切な情報を提供できるよう、現在経験している不正利用問題に関する関連情報を含めてください。

- 不正利用の防止/緩和機能のリクエストや提案は、提供されたテンプレートからプロジェクトの [機能提案 (Feature Proposal)](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issue%5Bmilestone_id%5D=) Issueで作成し、`~Abuse Prevention` ラベルを追加してください。

機能提案は以下に対して提出できます。

- [GitLab.com](https://gitlab.com/gitlab-com)、
- GitLab [CE](https://about.gitlab.com/install/?version=ce) および;
- GitLab [EE](https://about.gitlab.com/install/);

`@gitlab-com/gl-security/security-operations/trust-and-safety` および `@gitlab-org/modelops/anti-abuse` をタグ付けしてGitLab Issueをレビューしてもらえます。

### GitLabチームメンバーがTrust and Safetyに連絡する方法

- Slack: チームのSlackハンドル `@trust-and-safety` を使用して `#abuse` チャンネルで連絡
- 緊急ではない問い合わせは、[Operations Tracker](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations) でIssueを作成するか、Issueで私たち (`@gitlab-com/gl-security/security-operations/trust-and-safety`) をタグ付けし、`#abuse` Slackチャンネルで通知してください。
- Trust and Safetyチームの即時対応が必要な `URGENT` Issueについては、`/security` Slackスラッシュコマンドを使用してください。このコマンドは `Trust and Safety Escalation Workflow` をトリガーし、フォームを使用してインシデントの登録を要求します。フォームではインシデントに関する質問が表示され、Trust and Safetyチームが重大度と優先度を自動的に判断するのに役立ちます。割り当てられるラベルによって、Trust and Safetyのオンコール担当者にページングされます。
  - `URGENT` Trust and Safety Issueとは、ユーザーが生成した不正利用のうち以下のものとして定義されます:
    - *`GitLab.com` および/またはその機能のサービス低下や停止を引き起こす、または引き起こす可能性が高いもの。*
    - *会社に重大な法的、財務的、または評判上の損害または責任を引き起こす可能性のある、`GitLab.com` 上のもの。*

### GitLabチームメンバー以外の方

- GitLabのメンバーでない方は、不正利用を報告するために `report Abuse` ボタンを使用してください。
- より詳細な不正利用報告は abuse@gitlab.com に送信できます。

## <i class="fas fa-book" id="biz-tech-icons"></i> Abuse DIY

ご自身のGitLabインスタンスを運用しており、ご自身のインスタンスにおける不正利用管理のためのコツやヒントを探している場合は、詳細についてDIYページを参照してください。

- [Do It Yourself](/handbook/security/security-operations/trustandsafety/diy/)
