---
title: "契約、バックグラウンドスクリーニング、試用期間、PIAA"
description: "GitLab の契約情報および関連する手順。"
upstream_path: /handbook/people-group/contracts-probation-periods/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T22:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## 契約テンプレート

GitLab のチームメンバー契約テンプレートは、GitLab 内のみで（参照用に）アクセス可能です[（こちら）](https://internal.gitlab.com/handbook/people-group/people-operations/people-operations/employment_contracts/#employment-agreements)。すべての GitLab チームメンバー契約の DRI は People Operations チームです。契約への変更はすべて People Operations チームに依頼する必要があり、Senior Director of Legal, Employment による承認が必要です。

## 契約テンプレートの変更を提案するためのプロセス

契約は定期的に監査および更新されます。提案されたすべての変更は、現在の [Global Employment Contract Audit Issue](https://gitlab.com/gitlab-com/people-group/people-operations/General/-/blob/master/.gitlab/issue_templates/global-employment-contract-audit.md) に追加する必要があります。契約テンプレートのいずれかに**即時**変更が必要な場合は、以下のプロセスに従ってください:

1. Contract Update Issue を作成する - テンプレートは[こちら](https://gitlab.com/gitlab-com/people-group/people-operations/General/-/blob/master/.gitlab/issue_templates/Contract-Update-Add.md)で見つかります。
1. 関連する契約テンプレートを開きます。元の編集可能な Google ドキュメントに自動的にリダイレクトされます。
1. ドキュメントの編集権限がある場合、ドキュメントビューを「提案」モード（右上隅）に変更します。編集権限がない場合は、ドキュメントにコメントすることも、People Operations チームメンバーに連絡して、契約に提案を追加して承認を得る支援を依頼することもできます。
1. 行われた編集は、契約への提案として行われます。
1. 必要な変更を行ったら、関連する変更を確認および承認するため、Senior Manager, People Operations および Director of Legal, Employment にタグを付けてください。
1. 変更が承認されたら、Greenhouse 内の契約を更新するため Candidate Experience Specialist チームに通知することが重要です。

**必要な承認なしに契約への変更や編集を行ってはなりません。**

Senior Manager, Global Enablement は、すべての Greenhouse トークンが正しいかどうかをレビューします

1. 現在のトークンセットは[こちら](https://drive.google.com/file/d/1rq4qTV5WYABDLMaAx76UqmjNwb008qVw/view?usp=sharing)を参照してください
1. 該当する場合、契約のトークンを更新します
1. Greenhouse ですべてのトークンが利用可能かどうかをレビューします（そのためには管理者アクセスが必要です）:
    - Greenhouse にログイン > クリック: Settings (Gear Icon) > Offer Templates > クリック: Upload New > Template Name: Country Name (OTE or no OTE) > `All Offices`、`All Departments`、`All Employment Types` がすべて選択されていることを確認 > 契約テンプレートを .doc ファイルとしてのみアップロード > Save Template
    - Test をクリック > すべてのトークンに青いチェックマークがあり、トークンが有効であることを確認します
1. 既に使用されている契約を更新する場合（まったく新しい法人ではない）、Greenhouse から契約の古いバージョンを削除する必要があります。
1. テストだけで最終的な法的承認がまだ必要な場合は、アップロードした契約を再度削除します

## 発行済み雇用契約のエラーの修正

1. エラーに気付いた場合は、Associate Manager, Candidate Experience に連絡してください。
1. Associate Manager, Candidate Experience は、Candidate Experience Specialist（理想的には、すでに発行された契約を作成した同じ人物）に契約の修正を割り当てます。
1. 変更が給与関連の場合、Candidate Experience Specialist は total-rewards@ gitlab.com および uspayroll@ gitlab.com または nonuspayroll@ gitlab.com に通知します。
1. Candidate Experience Specialist は、上記のテンプレートを使用して新しい修正契約を作成し、次の文を追加します: "This agreement is effective {Hire date} and supersedes the employment agreement dated {date of erroneous agreement}."
    - テンプレートのコピーを作成し、Google ドライブの[作業ドキュメントフォルダー](https://drive.google.com/drive/folders/0B4eFM43gu7VPNUlKZEFtNGtSRk0?resourcekey=0-_qX_2OXbs71yJa3HZy0TAQ)に保存して編集します
1. Candidate Experience Specialist は、修正の理由を説明する[Cover Letter](https://docs.google.com/document/d/1MygLnlmXs2KIUsQZ6jcENVoy4jDeuqij3XV3wQy11VY/edit)を作成します。
    - テンプレートのコピーを作成し、Google ドライブの作業ドキュメントフォルダーに保存して編集します
1. 新しい契約とカバーレターが作成されたら、Candidate Experience Specialist に監査を依頼します。
1. 監査済みの作成された文書と、修正に関する追加の詳細をリーガルにレビューのために送信します。
1. リーガルによる承認後、DocuSign でカバーレターと新しい契約をステージングし、最初に [Company signatory](/handbook/hiring) に、続いてチームメンバーに署名のために送信します。
1. 署名された文書をチームメンバーの Workday の文書フォルダーにアップロードします。
1. 必要に応じて、チームメンバーの Workday プロファイルに必要な更新を行い、Total Rewards (total-rewards@ gitlab.com) および Payroll (uspayroll@ gitlab.com または nonuspayroll@ gitlab.com) に変更を通知するメールを送信します。

## 職務変更レター

GitLab でチームメンバーが役職を変更し、承認が Greenhouse を通じて行われる場合、Job Change Letter のプロセスは CES 契約プロセス ハンドブックページの [Job Change Letter](/handbook/hiring) セクションに記載されています。
GitLab でチームメンバーが役職を変更し、承認が Workday を通じて行われる場合、Job Change Letter のプロセスは Promotions & Transfers ハンドブックページの [Job Change Letter](/handbook/people-group/promotions-transfers/#job-change-letter) セクションに記載されています。

[Relocation](/handbook/people-group/relocation/) などのその他の場合、People Operations チームメンバーは、Relocation ハンドブックページの [Relocation within the Same Country](/handbook/people-group/relocation/#once-approved) セクションに記載されているパラメーターに従って [Relocation letter](/handbook/people-group/relocation/#once-approved) を作成します。

### Job Change Letter Inc から Fed への法人変更

連邦法人から Inc、または Inc から連邦法人に変更する米国のチームメンバーには、職務変更レターを作成する必要があります。適切なレターテンプレートに以下の文言を追加してください:

- GitLab is pleased to inform you that you are receiving a [transfer OR promotion] to [GitLab Inc OR GitLab Federal, LLC] as {{JOB_TITLE}} effective as of {{START_DATE}}.

### バックグラウンドスクリーニング {#background-screenings}

GitLab は、チームメンバー、資産、顧客関係、情報が保護されるよう、適切な管理を使用しています。これらのリスクを軽減するため、GitLab は、現地法で許可される範囲内で、対象となる将来のチームメンバー、および該当する場合は現在のチームメンバーのバックグラウンド情報を取得しレビューします。

GitLab は現在、Sterling Talent Solutions（現在 First Advantage に移行中）と契約してバックグラウンドスクリーニングを提供しています。GitLab のポジションに検討されているすべての候補者について、過去 5 年間の雇用履歴および/または直近の 3 つの雇用主が、適用される現地法に従って検証されます（適用される現地法で雇用履歴のレビューを少ない年数および/または雇用主に制限している場合、GitLab は現地法に従います）。また、Office of Foreign Asset Control's Specially Designated Nationals and Blocked Persons List を含む（ただしこれらに限定されない）さまざまな拒否当事者リストに対するスクリーニングが実施されます。犯罪記録のレビューが可能な管轄区域では、犯罪記録が要求されます。追加のスクリーニングには、該当する場合、現地法に従って、デジタルまたは文書ベースの身元確認、米国保健福祉省 Office of Inspector General's List of Excluded Individuals/Entities に対する検索、および/またはポジションに関連する場合の金融関連犯罪のスクリーニングおよびクレジットチェックが含まれる場合があります。GitLab は、現地法で許可される場合、返却されたバックグラウンド情報を使用して、雇用に関する決定を行うことがあります。条件付きオファーが行われるまで、現地法が明示的にそれ以外を要求しない限り、バックグラウンドスクリーニングは実施されません。

候補者は、GitLab のオンボーディング前にバックグラウンドスクリーニングを完了する必要があります。バックグラウンドスクリーニングが候補者の雇用開始前に完了するようすべての必要な措置が講じられ、候補者の開始日はこの要件を満たすために調整される場合があります。自然災害、公衆衛生上の緊急事態、重大な障害、その他の予測不可能な状況のような、バックグラウンド情報へのアクセスに影響を与える緊急事態など、GitLab の制御を超える状況は、この要件に対する例外となる場合があります。すべての例外は個別ベースでレビューされます。GitLab は、例外により候補者がバックグラウンドスクリーニングが完了する前にオンボーディングする必要がある場合、各バックグラウンドスクリーニングが完了し満足できるものであることを確認します。

GitLab は現在、オンボーディング/採用前の要件を超えて、現在のチームメンバーの後続のバックグラウンドスクリーニングまたは再スクリーニングを義務付けていません。現在のチームメンバーは、特定の顧客と作業するよう要求された場合、追加のバックグラウンドスクリーニングを選択できます。

Candidate Experience Specialist は、候補者向けのすべてのバックグラウンドスクリーニングを[開始](/handbook/hiring)します。Senior Background Check Specialist は、現在のチームメンバー向けの該当する遡及バックグラウンドスクリーニングまたは要求された強化バックグラウンドスクリーニングを開始します。

追加の支援や質問については、`backgroundchecks@gitlab.com` の Senior Background Check Specialist にお問い合わせいただくか、[HelpLab](https://helplab.gitlab.systems/esc?id=emp_taxonomy_topic&topic_id=1f5cb781478c069067429ee0026d4392) でリクエストを送信してください。

#### 業務委託者、随時労働者、一時的サービスプロバイダー

業務委託者、随時労働者、および/または一時的サービスプロバイダーが [orange または red データ](security/data-classification-standard/#standard) にアクセスする必要があり、および/または GitLab ラップトップを使用する必要がある場合、ベンダーが承認済みの[サブプロセッサ](/privacy/subprocessors/)であるか、有効な [Third Party Risk Management](security/security-assurance/security-risk/third-party-risk-management/) レビューを持っている場合を除き、バックグラウンドスクリーニングが完了または検証されます。GitLab は、現地法に従ってこれらのバックグラウンドスクリーニングを完了し、最低限、犯罪記録情報（または現地の同等物）が要求されます。ただし、GitLab は[上記](people-group/contracts-probation-periods/#background-screenings)に記載されている類似の基準もレビューする場合があります。GitLab は、内部で完了する前に、まずベンダーから完了したバックグラウンドスクリーニングの証明をリクエストします。業務委託者、随時労働者、および/または一時的サービスプロバイダーは、オンボーディングおよび/または GitLab でのアクセスをプロビジョニングする前に、完了したバックグラウンドスクリーニングを持つか、完了したバックグラウンドスクリーニングの証明を提供する必要があります。

#### 開示と承認

候補者（および該当する場合は現在のチームメンバー）は、バックグラウンドスクリーニング申請書に記入するためのメールを受け取ります。申請では、個人情報と職業情報が求められます。申請プロセスには、バックグラウンドスクリーニングを受ける個人の権利を説明する開示および同意フォームへの署名が含まれます。申請プロセスは、完了に 15 分以内かかるよう設計されています。

候補者は、以前の雇用主の名前、住所、保持していた職位、雇用開始日と終了日、マネージャーの名前、連絡先情報を収集する必要があります。マネージャーの連絡先の詳細の代わりに、人事担当者の詳細を入力できます。場合によって、法律で許可されている場合、Sterling（現在 First Advantage に移行中）が、以前の雇用の証拠として機能する追加の文書を取得するために候補者に連絡することがあります。雇用の証拠は、通常、税申告書（W2 など）、給与明細、LLC 文書、公式の会社登録などのさまざまな方法で提供できます。特定の状況では、Senior Background Check Specialist が追加の文書のために候補者および/またはチームメンバーに連絡することもあります。

バックグラウンドスクリーニングは、透明性の追加メカニズムとして機能し、クライアントとの信頼の構築を支援します。

#### 候補者およびチームメンバーのレビュー基準

バックグラウンドスクリーニングのレビューは、候補者の管轄区域の適用される法律に従って、Senior Background Check Specialist が実施します。Senior Background Check Specialist は、まず雇用に関する省略、不正確さ、および/または不一致についてレポートをレビューします。これには、雇用日、雇用主の名前、および/または保持していた職位が含まれますが、これらに限定されません。レポートに雇用に関連する不一致が含まれている場合、Senior Background Check Specialist は不一致の調査と判定に必要な措置を講じます。Senior Background Check Specialist は、必要に応じて、レポートを Legal Employment チームにエスカレートすることがあります。バックグラウンドスクリーニングレポートの雇用検証部分に基づく雇用の決定は、犯罪記録情報のレビューが行われる前に確定されます。

犯罪記録情報が提供されている場合、適用される現地法に従って判定されます。一般的に、現地法に従い、犯罪記録は、有罪判決が、能力と誠実さをもって職務を遂行する申請者の能力と直接関連しているかどうかを判断するためにレビューされ、GitLab チームメンバー、顧客、ベンダー、および/または全体的なビジネスの安全および/またはセキュリティも考慮されます。決定は、職務に関連し、ビジネス上の必要性と一致するように行われます。判定プロセスでは逮捕記録は考慮されず、適用される現地法によりレビューが禁止されている犯罪有罪判決情報も考慮されません。

## 試用期間 {#probation-period}

GitLab に入社する際、一部のチームメンバー（所在地に依存。各所在地の詳細については以下の表を参照）は、1〜9 ヶ月の試用期間が設けられます。各国における契約は、許容される最大の試用期間を持つことが一般的な慣行です。別の国への異動または契約変更の場合、チームメンバーが GitLab での継続勤務（GitLab での在職期間が中断されていない）を有し、元の所在地または契約の試用期間をすでに通過している場合、新しい所在地または契約の試用期間を通過する必要はありません。
オンボーディングプロセスにおいて、試用期間ステータスは Workday に追加されます。

People Operations チームは、社内で試用期間プロセスを管理する責任を負います（チームメンバーとの連絡、マネージャー、試用期間完了の確認、Workday の更新）。場合によっては、People Operations チームは、コンプライアンスとイテレーションを確保するため、グローバル規模で外部の法律顧問との関係も管理する責任があります。

試用期間を早期に終了する例外リクエストが行われた場合、これはチームメンバーのマネージャーによって skip-level および People Business Partner/Team Member Relations Specialist にメールでエスカレートされる必要があります。次に、リスク、パフォーマンス、リクエストの全体的な理由を評価します。さらにリーガルへのエスカレーションが必要となる場合があり、進め方の決定も行います。承認の期待値はありません。

### 試用期間中の重要なステップ

***マネージャー向け***

1. マネージャーは、直属の部下の試用期間の中間時点で、パフォーマンスを監視し、具体的にレビューする責任があります。
1. **パフォーマンスの問題**がある場合、または試用期間の正常な完了について躊躇する場合は、直ちに Team Member Relations と相談する必要があります。
1. 直属の部下の試用期間終了の 28 日前に、マネージャーは Workday から、直属の部下の試用期間が終了することを通知するメールを受け取り、マネージャーが試用期間の結果を Workday に提出するタスクがあることが通知されます。
   - **注:** オランダまたはオーストリアに所在するチームメンバーの場合、マネージャーは試用期間終了の 14 日前に Workday からメールを受け取ります。
1. Hiring Manager は、チームメンバーのパフォーマンスに基づいて、Workday で適切な試用期間結果を選択します。このプロセスに関する役立つ職務支援は[こちら](https://docs.google.com/document/d/1NSIaigEqFnouax9s_NGB_nXGA1y_8zJB5aZUW63bvog/edit)で確認できます。

***チームメンバー向け***

1. 試用期間を正常に通過した場合、マネージャーからの良いニュースを受け取ることに加えて、Workday で試用期間確認レターも受け取ります。
1. 受信トレイで、このレターをレビューし、`Submit` を選択できます。このレターは、必要な場合の将来の参照のために、Workday の文書に保存されます。

### 試用期間のある現在の所在地

{{< people-group/entities-with-probation >}}

### 試用期間のない所在地

{{< people-group/entities-without-probation >}}

## PIAA (Proprietary Information and Assignment Agreement)

GitLab は、他のオープンソースプロジェクトを含む、GitLab のビジネスに関連しないプロジェクトで作業する能力をチームメンバーが維持できるよう支援するよう努めています。私たちの PIAA は、GitLab のビジネスや GitLab のために行う作業に関連しない、あなたが行うかもしれない創作物に対するいかなる権利も GitLab に付与しません。つまり、GitLab から事前の承認をリクエストすることなく、それらの創作物を自由に開発できます。

雇用契約が 2017 年 11 月より前に作成された場合、PIAA 契約の修正を作成しており、[こちら](https://docs.google.com/document/d/1oEfDCIht7Vy6KdcGXWPHZBUXLUUZS9hsvYnOYhQjllg/edit)で確認できます。PIAA の 2A セクションを修正します。[HelpLab](https://helplab.gitlab.systems/esc?id=emp_taxonomy_topic&topic_id=57e1ad3997804e50a326158de053af3d) を通じて People Operations チームに連絡してください。署名のために文書を完成させ、ステージングします。修正は、最初にチームメンバーによって署名され、次に必要な Company signatory によって署名されます。

### 外部雇用（有給または無給）、プロジェクト、潜在的に矛盾する活動

GitLab は、休息と休暇が生産的であることを認識し、チームメンバーがリラックスし、燃え尽き症候群を回避するために時間を取ることを推奨しています。ただし、GitLab は、個別の雇用契約に別段の定めがない限り、一部のチームメンバーが勤務時間外に外部雇用（有給または無給）、プロジェクト、および/または潜在的に矛盾する活動（ここではまとめて「外部活動」と呼びます）に従事したい場合があることも理解しています。

GitLab はこれらのチームメンバーに、GitLab でのポジションが彼らの主要な雇用責任であり、GitLab のポジションはフルタイム雇用と見なされ、外部活動があってもチームメンバーの全力と集中が必要であることを思い起こさせます。

チームメンバーが GitLab に入社する際の取り組みを尊重するため、外部活動に従事している間、GitLab の機密情報、企業秘密、その他のビジネス上の利益を保護することを含み、GitLab は以下のポリシーを採用しました:
外部活動は、チームメンバーの業務遂行や職務を妨げてはならず、GitLab との実際または明らかな利益相反を作り出してはなりません。外部活動が、チームメンバーのパフォーマンスの低下、休暇ポリシーの濫用、またはポジションに関連するその他の否定的な結果につながる場合、GitLab はチームメンバーを、終了を含む懲戒処分の対象とする場合があります。
私たちの Transparency の中核的価値に沿って、GitLab へのコミットメントに潜在的に干渉する可能性のある外部活動を開始する前に、チームメンバーは以下のように、マネージャーに開示する必要があります。GitLab は、チームメンバーが効果的に職務を遂行する能力を損なう外部活動を承認しません。
外部活動に従事するチームメンバーは、GitLab の Code of Business Conduct and Ethics、ならびに利益相反、機密保持、雇用中の競合禁止、機密および独占情報の保護に関連するすべてのポリシーに、適用される州または地方法によって執行可能な範囲で準拠する必要があります。外部活動は、GitLab が提供するか開発中の製品またはサービスを含めたり、競合したりすることはできません。外部活動は、GitLab の独占情報または機密情報を使用することもできず、チームメンバーは、GitLab のサプライヤー、顧客、競合他社のために、いかなる立場でも働くことはできません。
GitLab の [Internal Acceptable Use Policy](/handbook/legal/acceptable-use-policy/) は、個別の雇用契約に含まれる矛盾する記述に従うことを条件として、GitLab が管理する資産の限定的な個人利用を許可します。当該限定的な個人利用に従うことを条件として、チームメンバーは、外部活動に関連して GitLab の施設、機器、備品、IT システム（コンピューター、ネットワーク、メールなど）、時間、商標、ブランド、または評判を使用してはなりません。
このポリシーは、州、連邦、その他の適用される法律によって保護されるか要求されるコミュニケーションまたは行動を制限することを意図したものではありません。

### 外部活動の承認

有給または無給を問わず、外部雇用、サイドプロジェクト、その他の活動（まとめて「外部活動」と呼びます）を開始する前に、書面でマネージャーに活動を開示し、必要に応じてさらにエスカレートする必要があります。GitLab が、提案された外部活動が Code of Business Conduct and Ethics に基づく利益相反となる、またはチームメンバーが効果的に職務を遂行する能力を損なうと判断した場合、承認は付与されません。採用プロセスの特定の段階にいる候補者にも、GitLab に対する義務を遂行する能力に矛盾があるかどうかを判断するため、外部雇用、サイドプロジェクト、その他の活動の開示が求められます。

#### 現在の候補者（採用プロセスに積極的に従事している）としてのステップ

1. 推薦段階で、Recruiter は候補者に以下を尋ねるフォームの記入を依頼します:
外部雇用、プロジェクト、活動の開示、および
PIAA にリストすべき発明やサイドプロジェクト。
1. 候補者が完了したフォームで外部雇用、プロジェクト、活動を開示した場合、CES は採用マネージャーに承認の通知を行い、`teammemberrelations@gitlab.com` の Team Member Relations を可視性とアプリケーションの一貫性確保のためのレビューのために CC に含めます。
**採用マネージャーに提供する必要のある情報:**
    - 外部雇用、プロジェクト、活動の名前
    - プロジェクトに関与する GitLab クライアントと関与の範囲（該当する場合、使用される技術スタックを含めてください）
    - 週ごとの推定時間投資（時間単位）
    - 外部雇用、プロジェクト、活動における候補者の役割
1. 承認は、現在のチームメンバー向けに設定されているプロセスに従います。潜在的な利益相反は、Code of Business Conduct & Ethics に沿って Chief Legal Officer に開示され、承認される必要があります。
1. 候補者が No または None と入力した場合、CES はアプリケーションの処理を継続します。

#### 現在のチームメンバーとしてのステップ

1. チームメンバーは、外部活動への従事が禁止されていないか、個別の雇用契約を確認します。
1. チームメンバーは、直属のマネージャーに承認のリクエストをメールで送信し、可視性とアプリケーションの一貫性確保のため、`teammemberrelations@gitlab.com` の Team Member Relations チームを CC に追加します。

**メールに必要な情報:**

- プロジェクト名（利用可能な場合は関連する Web サイトへのリンク）
- プロジェクト/組織の目標
- プロジェクトに関与する GitLab クライアントおよび/またはチームメンバーと関与の範囲（該当する場合、使用される技術スタックを含めてください）
- 週ごとの推定時間投資（時間単位）
- 外部プロジェクトに関連する雇用ステータス/役割（該当する場合）

1. マネージャーは、必要に応じて追加の質問をします。マネージャーは、チームメンバーのパフォーマンスや、別段の定めのある個別の雇用契約の条項など、さまざまな理由により、外部プロジェクトまたは活動のリクエストを承認しない場合があります。
1. マネージャーと Team Member Relations が**承認**する場合、スレッドでこれを確認し、レビューと承認のために、該当する Director レベルのリーダーをスレッドに追加します。直属のマネージャーが Director レベルでもある場合、レビューと承認のために、次のレベルのリーダー（VP または C レベル、適切な場合）をメールスレッドに追加します。
1. マネージャーと Team Member Relations による**拒否**の決定が行われた場合、マネージャーがこれをチームメンバーに伝え、Team Member Relations チームがチームメンバーの Workday ドキュメントに通信を保存します。
1. Director/次のレベルのリーダーが追加のレビューと承認が必要だと感じる場合、次のレベルのリーダー（VP または C レベル、適切な場合）をメールスレッドに追加します。これが必要ないと判断された場合、Director/次のレベルのリーダーは承認を示す回答をします。
*注: すべての外部プロジェクトについて、E-group リーダーまで最低 2 人のリーダーがレビューする必要があります。E-group リーダーが次のレベルのマネージャーである場合、E-group リーダーの承認または拒否で十分です。直属のマネージャーと Director レベルが通常のレベルです。直属のマネージャーが Director レベルである場合、追加のレベルが承認または拒否する必要があります。*
1. 次のレベルのリーダー（VP または C レベル）と Team Member Relations チームが追加のレビューとガイダンスが必要だと感じる場合、Senior Director of Legal, Employment およびその他の関連するリーダーをスレッドに追加します。潜在的な利益相反は、[Code of Business Conduct & Ethics](https://ir.gitlab.com/governance/governance-documents/default.aspx) に沿って Chief Legal Officer に開示され、承認される必要があります
1. 承認の決定が行われ、すべての承認が文書化された場合、People Operations チームメンバーがスレッド全体を PDF としてチームメンバーの Workday ドキュメントに保存します。
1. 次に、People Operations チームメンバーは受領を確認する返信を行い、スレッド全体がチームメンバーの Workday プロフィールに保存されたことを述べます。
1. オランダで雇用されているチームメンバーの場合、People Operations チームメンバーは、[承認レター](https://docs.google.com/document/d/1sDIRTqZZu46uiX8McOVuyfPKh-26rTDnQ3xBaoWzNjM/edit)の形式で内容を述べます。このレターは、最初に関連する E-group リーダーに署名のために送信し、次にチームメンバーに送信します。署名されたら、これをチームメンバーの Workday ドキュメントに保存します。

GitLab チームメンバーが GitLab アカウントを使用する承認済みの外部活動の場合、この活動は別の個人プロジェクトに保管する必要があります。GitLab を代表して行う作業の一部として完了するその他のすべての作業は、GitLab ネームスペースに保管する必要があります。

## 年次 Code of Business Conduct & Ethics 管理プロセス

従業員は、GitLab での雇用開始時、およびその後毎年（コードに変更があるかどうかに関わらず）、GitLab の [Code of Business Conduct & Ethics](https://ir.gitlab.com/governance/governance-documents/default.aspx)（別名「CoBCE」）をレビューし承認する必要があります。

[People Operations Team](/job-description-library/people-group/people-operations) は、オンボーディング中に新入社員による[Code of Business Conduct & Ethics の署名完了](https://internal.gitlab.com/handbook/people-group/people-operations/people-operations/onboarding_process/#request-signature-for-code-of-conduct-2021-acknowledgement-of-relocation-2021-consent-to-collect-and-use-data-regarding-race-ethnicity-and-social-media-policy-acknowledgment)を追跡します。[Ethics & Compliance team](/handbook/legal/ethics-compliance-program/#training) は、Code of Conduct リフレッシャートレーニングを監督および管理し、従業員は毎年認定書に署名する必要があります。完了は、関連する学習管理プラットフォーム Level Up で追跡されます。署名プロセスは、Workday を通じて追跡され配布されます。年次署名プロセスは、通常、毎年 4 月に開始されます。

## 契約の更新

以下のプロセスは、以下の用途で使用できます:

- 有期契約から無期契約へ
- 有期契約から有期契約へ（初期契約が満了した後）
- 法人の個別設立による請求書目的の契約更新

注: ほとんどの場合、このプロセスは特にオランダのチームメンバーに適用されます。

新しい契約を作成する際、12 ヶ月の契約の場合、その期間は常に次のように記載されます（例）:

- Jan 1, 2010 to Dec 31, 2010
- Feb 20, 2004 to Feb 19, 2005

契約を更新する場合、12 ヶ月の契約の場合、期間は次のように見られます（例）:

- 最初の 12 ヶ月契約は 2019 年 6 月 14 日に開始します。これにより契約は 2020 年 6 月 13 日に終了します。
- 2 回目の 12 ヶ月契約は 2020 年 6 月 14 日に開始し、2021 年 6 月 13 日に終了します。

1. チームメンバーの契約詳細を、People Operations Task [Tracker](https://docs.google.com/spreadsheets/d/1Z45eOZ2rCRIKgGae3eOKQ8lhIbAPikSs5gLz3V8Kh9U/edit?ts=5e7a2c42#gid=84302455) の Contracts タブの下に追加します。シートで、People Operations Team メンバーの所有者を割り当て、自分が所有者の場合、終了日を確認し、終了日の 2 ヶ月前に以下のプロセスを開始してください。
1. チームメンバーの詳細を確認し、以下の[テンプレート](https://gitlab.com/gitlab-com/people-group/General/-/blob/master/.gitlab/email_templates/netherlands_temp_contract_renewal.md)を使用して、メールでチームメンバーのマネージャーに連絡します。
1. チームメンバーのラインマネージャーから次のステップに関する確認を受け取ったら、Workday の 'Approvals - Confidential' ドキュメントフォルダーのチームメンバーのプロフィール下にスレッドを保存することを確認してください。
1. [テンプレートフォルダー](https://internal.gitlab.com/handbook/people-group/people-operations/people-operations/employment_contracts/#employment-agreements)から正しい契約テンプレートを使用し、必要なチームメンバーの詳細を入力して完了します。これらの詳細はチームメンバーの Workday プロフィールで確認できます。

- GitLab の年功序列の観点から元の入社日を尊重するため、契約開始日の後に以下の文を契約に追加します: "Your continuity of service for statutory purposes begins on the {{Original Hire Date}}."
- 追加の株式が付与される場合を除き、Key Terms セクションの `Stock Options` 行は保持しないでください。
- 混乱を避けるため、チームメンバーの開始日と生年月日の両方を **Month DD, YYYY** 形式で記載してください。
- [該当する場合](#probation-period)、試用期間に関する文言を削除してください。

1. 完成した契約がある場合、チームメンバーにピアレビューを依頼するようにします。これは、People Operations のプライベート slack チャンネルにドキュメントリンクを投稿することで実行できます。'Eyes' 絵文字を使用してレビューしていることを示します。
1. レビューされたら、Docusign で署名のために契約をステージングします。
1. GitLab signatory が最初に署名し、続いてチームメンバーが署名するようにします。これは、署名順序の割り当てオプションを選択することで行えます。
1. 両当事者が署名したら、契約をチームメンバーの Workday ドキュメントフォルダーに保存します。
1. [Workday を更新](https://docs.google.com/document/d/1qnRUH2vkBGDi1hWnpGjvfF0G1GvfZLVHUVFuKeu9vKI/edit) して、該当する場合は終了日とともに新しい契約情報を反映します。
1. People Operations チームに通知し、Workday の変更を監査できるようにします。
1. People Operations チームメンバーは、契約が完了したことを確認して、People Operations Task [Tracker](https://docs.google.com/spreadsheets/d/1Z45eOZ2rCRIKgGae3eOKQ8lhIbAPikSs5gLz3V8Kh9U/edit?ts=5e7a2c42#gid=84302455) を更新します。

## オランダ更新プロセス

1. 契約終了の 2 ヶ月前、HR Savvy が People Operations チームメンバーのメールアドレスにメールを送信します。
1. 契約更新の割り当てを担当する People Operations チームメンバーが、契約更新プロセスの完了のために People Operations チームのメンバーを割り当てます。
1. People Operations チームメンバーは、チームメンバーの契約詳細を People Operations Task [Tracker](https://docs.google.com/spreadsheets/d/1Z45eOZ2rCRIKgGae3eOKQ8lhIbAPikSs5gLz3V8Kh9U/edit?ts=5e7a2c42#gid=84302455) の Netherlands Contracts タブの下に追加します。
1. People Operations チームメンバーは、チームメンバーの契約終了の 2 ヶ月前に、チームメンバーのマネージャーから承認をリクエストするため、[この HelpLab Job Aid](https://docs.google.com/document/d/1hm707ieQVskaRhBl_89AHq-V3wXbsaiSbYmCiFF3_40/edit) に従います。
1. GitLab は、開始時に 1 つの 12 ヶ月の有期契約を提供します。1 年間の有期契約後、チームメンバーが良好な状態である場合、会社での 2 年目から無期契約が付与されます。最初の有期契約終了後、異動により 1 年以上 GitLab に在籍しているチームメンバーには、無期契約が付与されます。
1. マネージャーには、チームメンバーのパフォーマンスを評価するための 2 週間があります。

- パフォーマンスに満足している場合、マネージャーは People Operations チームに無期契約を延長するよう通知します。
- パフォーマンスに懸念がある場合、マネージャーは Team Member Relations Team と計画された対応策について議論します。契約は終了する場合も、別の有期契約として延長される場合もあります。Team Member Relations Team は、メッセージングに関するガイダンスを提供することで支援できます。

1. 契約終了の少なくとも 1 ヶ月前に、マネージャーは延長または非延長についてチームメンバーに通知します。
1. 更新された[ビザ給与要件](/handbook/people-group/visas/#right-to-immigrate-to-the-netherlands)により給与の引き上げが必要な場合、People Operations チームメンバーは、チームメンバーのマネージャー、Total Rewards、最後にチームメンバーの Division の E-Group リーダーから承認をリクエストします。
1. People Operations チームメンバーは、承認を Workday ドキュメントフォルダーにアップロードします。
1. 契約延長が承認された場合、People Operations チームメンバーは契約を作成します

- GitLab の年功序列の観点から元の入社日を尊重するため、契約開始日の後に以下の文を契約に追加します: "Your continuity of service for statutory purposes begins on the {{Original Hire Date}}."
- 追加の株式が付与される場合を除き、Key Terms セクションの `Stock Options` 行は保持しないでください。
- 混乱を避けるため、チームメンバーの開始日と生年月日の両方を **Month DD, YYYY** 形式で記載してください。
- チームメンバーが現在月ごとに休暇手当を受け取っているかどうかを確認します。受け取っている場合、チームメンバーと年次への更新ができるかどうか確認します。チームメンバーが更新に同意した場合、支払い頻度を更新します。同意しない場合、Legal - Employment に問題ないか確認し、新しい契約にこの効果のための正しい文言を追加します。プロセスを合理化するため、すべてのチームメンバーが年次で休暇手当を受け取る必要があります。
- [該当する場合](#probation-period)、試用期間に関する文言を削除してください。
- 注: 2 回目の[試用期間](#probation-period)は、チームメンバーの新しい契約が[まったく新しい役割](https://wsadvocaten.nl/probationary-period-netherlands-dismissal/)の開始を反映する場合にのみ実装する必要があります。契約が現在の役割における雇用の単なる継続である場合、2 回目の試用期間は適用すべきではありません。
- 善行証明書（certificate of good conduct）に関する文言を削除します。これは最初のオランダ契約の一部としてすでに要求されているためです。

1. People Operations チームメンバーは、[GitLab signatory](/handbook/hiring) およびチームメンバーが署名するために、Docusign を通じて契約をステージングします。署名されたら、hr@savvy-group.eu を 'Receive a copy' に追加します。

- 別の一時的な契約が発行される場合、[これらのステップ](https://gl-people-operations.gitlab.io/internal-handbook/people_connect/lead/#netherlands-renewal-process---temporary-contracts)に従い、DocuSign を通じて契約を送信する際に、言及されているメッセージを含めます

1. People Operations チームメンバーは、署名された契約をチームメンバーの Workday ドキュメントフォルダーにアップロードします。
1. People Operations チームメンバーは、[Workday を更新して新しい契約を反映](https://docs.google.com/document/d/1qnRUH2vkBGDi1hWnpGjvfF0G1GvfZLVHUVFuKeu9vKI/edit?usp=sharing): チームメンバーの Workday プロフィールを開く > Actions をクリック > Job Change > 契約を追加します。開始日と終了日、契約タイプ、理由（該当する場合）を入力します。
1. 別の People Operations チームメンバーに通知し、Workday の変更を監査できるようにします。
1. People Operations チームメンバーは、契約が完了したことを確認して、People Operations Task [Tracker](https://docs.google.com/spreadsheets/d/1Z45eOZ2rCRIKgGae3eOKQ8lhIbAPikSs5gLz3V8Kh9U/edit?ts=5e7a2c42#gid=84302455) を更新します。

注: チームメンバーは、同じ雇用主と連続して 3 つを超える有期契約を持つことはできません。GitLab が 4 番目の契約を提供する場合、それは無期契約である必要があります。

### オランダ契約のベストプラクティス

1. オランダのチームメンバーのベストプラクティスは、無期契約に移行する前に 1 年の有期契約を 1 つ発行することです。1 年の有期契約の完了後、無期契約に移行します。

1. GitLab は、契約のタイプを決定する際、異動時のチームメンバーの全在職期間を考慮します。チームメンバーが[オランダへの異動および移民を要求](/handbook/people-group/visas/#right-to-immigrate-to-the-netherlands)する前の通常の 1 年の GitLab 在職期間により、チームメンバーが GitLab に 1 年以上在籍している場合、ベストプラクティスの手順は、マネージャーの承認を得て、チームメンバーに無期契約を付与することです。

## CXC 契約の更新

CXC 契約は年単位で発行され、契約は 1 年後に期限切れとなります。CXC は、各チームメンバーの契約更新が完了することを確認する責任を持つ PEO のままです。

- CXC は、契約終了の 2 週間前にチームメンバーに連絡します。
- CXC は更新契約を作成し、該当するチームメンバーに署名のために送信します。
- 署名されたら、CXC は更新された契約を People Operations に送信します。
- People Operations チームメンバーは、更新された契約をチームメンバーの Workday Contracts & Changes フォルダーにアップロードし、[Workday を更新](https://docs.google.com/document/d/1qnRUH2vkBGDi1hWnpGjvfF0G1GvfZLVHUVFuKeu9vKI/edit?usp=sharing)して新しい契約を反映します。

標準的な慣行は、CXC 契約を自動的に更新することです。チームメンバーが自発的または非自発的に解雇される場合、[オフボーディングプロセス](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854/)が適用されます。

## GitLab Inc ベストプラクティス

### GitLab, Inc OTE 付き

- 現在のチームメンバーの異動、昇進、転勤の場合、該当しないため draw 情報を削除するようにしてください。
