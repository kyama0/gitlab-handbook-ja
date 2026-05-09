---
title: "gitlab.com 上の知的財産"
upstream_path: /handbook/security/security-operations/trustandsafety/intellectual-property-on-gitlab-com/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T16:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 概要

### DMCA - デジタルミレニアム著作権法

GitLab は他者の知的財産権を真剣に受け止めており、ユーザーにも同様の対応を求めています。デジタルミレニアム著作権法 (DMCA) は、著作権侵害の申し立てに対処するためのプロセスを定めています。著作権を所有しているか、著作権者を代理する権限を持つ方が、第三者が GitLab のサービス上または GitLab のサービスを通じて当該素材を侵害しているとして申し立てを行いたい場合は、後述の `DMCA 通知の提出` セクションを参照してください。

### 商標ポリシー

GitLab.com の名前空間は先着順で利用可能です。商標登録に基づいて GitLab.com の名前空間に対する優先権を主張することはできません。たとえば「GreatCompany」という商標を所有していたとしても、すでに「gitlab.com/GreatCompany」という名前空間が登録されている場合、商標所有者にその名前空間が付与されることはありません。

GitLab は、第三者間の複雑な商標紛争を調査、評価、または裁定する立場にはありません。このような場合、権利を侵害していると思われる第三者に直接連絡を取って問題を解決するか、利用可能な法的手段を用いて解決を図ってください。GitLab は有効な法的命令なしにこのような問題に介入することはできません。

GitLab は、第三者に登録された名前空間に関する商標侵害の申し立てについて、以下の両方の基準が満たされている場合に限り、レビューおよび介入を行う場合があります。

1. 関連する商標登録の保有者であることを示す GitLab が満足する証拠を提供すること
1. 関連する名前空間が貴社の商標に関連付けられているかのように他者を誤解させる明らかな意図のもとに、貴社の商標が無断で使用されていることを示す明確な証拠を GitLab が満足する形で提供すること

報告は dmca@gitlab.com に送信できます。GitLab は提供された証拠をレビューし、上記の基準を満たす場合は、適切と判断する措置を講じます。

### 名前空間ポリシー

GitLab.com の名前空間は先着順で利用可能であり、予約することはできません。いかなるブランド、企業、団体、または個人も GitLab.com の名前空間に対する権利を所有しておらず、商標を理由にこれを主張することはできません。「GreatCompany」というブランドを所有していても、「gitlab.com/GreatCompany」という名前空間を所有していることにはなりません。名前空間や商標に関する紛争は当事者間で解決される必要があります。GitLab は、これらの紛争において仲裁者や仲介者として行動することは決してなく、適切な法的命令なしには一切の措置を講じません。

### アカウントとグループの所有権紛争

詳細については [GitLab.com 固有のサポートポリシー](https://support.gitlab.com/hc/en-us/articles/11626493890844-GitLab-com-Specific-Support-Policies#ownership-disputes) を参照してください。

### 名前のスクワッティング (占拠) ポリシー

GitLab 利用規約に基づき、

アカウント名のスクワッティングは GitLab により禁止されています。GitLab のアカウント名は先着順でユーザーに付与されます。したがって、アカウント名は将来の利用のために保持したり非アクティブのまま残したりすることはできません。

GitLab.com サポートチームは、ユーザーが長期間ログインしていない、または名前空間を使用していない場合、その [名前空間](https://docs.gitlab.com/ee/user/group/#namespaces) (ユーザー名またはグループ名) を本ポリシーの対象とみなします。詳細については後述の `名前のスクワッティング` セクションを参照してください。

### DMCA

#### 通知の提出

{{% details summary="DMCA 通知の提出" %}}
著作権所有者として、誰かが貴方の著作権を侵害していると思われる場合、dmca@gitlab.com に DMCA 通知を送信できます。

DMCA 通知は法的文書であるため、GitLab では以下の形式で通知を提出するようお願いしています。

1. 侵害されていると主張する著作物の説明
1. 侵害していると主張し削除またはアクセス無効化を希望する素材の説明、およびその素材の URL またはその他の所在
1. 氏名、肩書き (代理人として行動する場合)、住所、電話番号、メールアドレス
1. 以下の声明: `"I have a good faith belief that the use of the copyrighted material I am complaining of is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)"`
1. 以下の声明: `"The information in this notice is accurate and, under penalty of perjury, I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right that is allegedly infringed"`
1. 著作権所有者または所有者を代理する権限を持つ者の電子的または物理的な署名

dmca@gitlab.com への送信後、自動受領確認メールが届きます。

#### 次に何が起こるか?

- リクエストを受領後、Trust and Safety チームのメンバーが通知を確認・処理します。
- 情報が欠落しているか不正確な通知は処理できません。Trust and Safety チームのメンバーから追加情報を求めて連絡します。
- 必要な情報が提出されたことが確認できれば、リクエストが処理された旨の確認メールがチームから届きます。
  - 連絡がない場合は、フォローアップメールを送って状況を確認していただけます。
- 有効な通知は、報告対象のアカウント所有者に転送され、反対通知の提出または gitlab.com からのコンテンツ削除が可能になります。
- 通知の対象となった GitLab ユーザーは反対通知を提出する権利があります。反対通知が有効と判断された場合、貴方に転送し、さらなる対応をお願いします。
- 反対申し立ての詳細については、本ページの `DMCA 通知への対応` セクションを参照してください。
{{% /details %}}

#### DMCA 通知への対応

{{% details summary="DMCA 反対通知の提出" %}}
通知を行った著作権所有者との合意に至らない場合、コンテンツ所有者は、通知の受領日から 10 営業日以内に dmca@gitlab.com 宛に DMCA 反対通知を提出することができます。
有効な反対申し立てを受領した場合、その通知のコピーを著作権所有者にメールで送信します。

反対申し立ては法的文書であり、DMCA の要件に準拠する必要があり、以下を含む必要があります。

1. 連絡先情報: 氏名、肩書き (代理人として行動する場合)、住所、メールアドレス、電話番号
1. コンテンツの特定: 削除されたかアクセスが制限された素材を合理的に特定する情報
1. 偽証罪に基づく宣誓: `"a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled."` であることの偽証罪に基づく宣誓
1. 管轄権への同意: `consent to the jurisdiction of Federal District Court for the judicial district in which your provided address is located, or if your address is outside of the United States, for any judicial district in which GitLab may be found` する旨の声明
1. 訴訟手続書類の送達への同意: `accept service of process from the person who provided the original notification or an agent of such person` する旨の声明
1. 署名: 著作権所有者または所有者を代理する権限を持つ者の `electronic` または `physical` 署名
{{% /details %}}

{{% details sunmmary="Mitigating Copyright Infringement" %}}

- 貴方の管理下のコンテンツに関して gitlab.com の DMCA 通知を受領した場合
  1. 報告されたコンテンツを gitlab.com から削除することで通知に対応できます。
  1. ご自身のコンテンツが誤って DMCA 削除リクエストの対象となっていると思われる場合は、反対申し立てを提出することで削除リクエストに異議を申し立てる権利があります。
- DMCA 通知に対する **対応または応答が確認できない** 場合
  1. 報告されたコンテンツは非公開化されます。
      - コンテンツの所在によっては、グループ/プロジェクトへのアクセスが制限されることがあります。
      - gitlab.com アカウントへのアクセスも制限されます。
{{% /details %}}

#### 商標侵害

{{% details summary="商標侵害通知の提出" %}}
[商標ポリシー](/handbook/security/security-operations/trustandsafety/intellectual-property-on-gitlab-com/#trademark-policy) に基づく商標侵害報告を提出するには、以下を提供してください。

1. 関連する商標登録の保有者であることを示す証拠 (商標登録証のスキャンコピーや、該当する各国知的財産庁のウェブサイトまたはデータベースに登録された証拠のスクリーンショットなど)。
1. 以下の声明の宣言: 「By submitting this trademark infringement notice, I state that I have a good-faith belief that the reported use, in the manner that I have complained of, is not authorized by the intellectual property rights owner, its agent or the law; that the information contained in this notice is accurate; and, under penalty of perjury, that I am authorized to act on behalf of the owner of the intellectual property rights at issue」。

この情報は dmca@gitlab.com に送信できます。送信後、自動受領確認メールが届きます。
{{% /details %}}

#### 名前のスクワッティング

{{% details summary="休眠中の名前空間の請求" %}}
GitLab.com サポートチームは、ユーザーが長期間ログインしていない、または名前空間を使用していない場合、その [名前空間](https://docs.gitlab.com/ee/user/group/#namespaces) (ユーザー名またはグループ名) を本ポリシーの対象とみなします。

**具体的には、**

ユーザー名前空間は、以下の両方が真の場合、再割り当ての対象となります。

- ユーザーの最終サインインが少なくとも 2 年前であること
- ユーザーがアクティブなプロジェクトの単独所有者でないこと

グループ名前空間は、以下のいずれかが真の場合、再割り当ての対象となります。

- データが存在しない (プロジェクトがない、またはプロジェクトが空である)
- 所有者の最終サインインが少なくとも 2 年前である
- 名前空間にデータが含まれている場合、GitLab サポートは名前空間を再割り当てする前に 2 週間にわたって所有者と連絡を取ろうと試みます。名前空間にデータが含まれず (空またはプロジェクトなし) 、所有者が非アクティブな場合、名前空間は直ちに解放されます。
- 90 日以上前の未確認アカウントに関連付けられた名前空間は、即時解放の対象となります。データを含まず、6 か月以上前に作成されたグループ名前空間も同様に即時解放の対象となります。

アカウントおよびグループの所有権紛争については、名前空間が対象となるかどうかを **GitLab サポート** に問い合わせてください。
{{% /details %}}
