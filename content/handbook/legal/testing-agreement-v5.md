---
title: GitLab Testing Agreement v5
description: 実験的、アルファ、ベータ機能向けの GitLab Testing Agreement のレガシーバージョン 5
upstream_path: /handbook/legal/testing-agreement-v5/
upstream_sha: 440fbdbea018814f9317e3b1520eff5dda4ecb20
lastmod: "2026-05-20T15:15:43-04:00"
translated_at: "2026-05-21T21:07:52Z"
translator: claude
stale: false
---

(Additional Terms)


本 Testing Agreement（「本契約」）は、268 Bush Street, Suite 350, San Francisco, CA 94104 にオフィスを有する GitLab Inc.（「GitLab」）と、(i) 本契約を電子的に承諾するエンティティ、または (ii) Testing Features が有効化される対象のエンティティのうち適用される方（いずれの場合も「Customer」）との間で締結されます。本契約は、(i) Customer が GitLab Software 内で本契約を承諾するためにクリックした日、または (ii) Customer に代わって行動する個人が Testing Features を有効化することを選択した日のうち、いずれか早い日（「発効日」）に発効します。両当事者は、Customer による該当する Testing Feature（以下に定義）の使用に関する以下の規定および条件に同意します。


Testing Features を有効化することを選択する個人は、Customer を本契約の条件に拘束する権限を有していることを表明します。当該個人がそのような権限を有していない場合、Testing Features の有効化を選択するか、または当該 Testing Features を無効化してはなりません。


## 1. DEFINITIONS


1.1. 「Testing Feature(s)」とは、実稼働環境での使用に適していない実験的、アルファ、またはベータ機能を指します。Testing Features は、GitLab の裁量により決定された範囲で、サポートなしまたは限定的なサポート付きで提供されます。追加の詳細および本契約に参照により組み込まれる適用される使用条件は、こちらに詳述されています: https://docs.gitlab.com/policy/development_stages_support/。


1.2. 「AI Assisted」とは、人工知能（機械学習を含む）の支援を受けた成果物の使用または開発を意味します。


1.3. 「Generally Available Features」とは、あらゆる規模で実稼働環境での使用に適しており、完全に文書化およびサポートされており、Production Readiness Review に合格した Software 機能を指します。


1.4. 「Personal Data」とは、General Data Protection Regulation (EU) 2016/679 の「personal data」の定義で定義されるすべての情報を意味します。


1.5. 「Production Readiness Review」とは、GitLab.com におけるサービス、機能、またはインフラストラクチャの重要な変更の信頼性ニーズを特定するのに役立つプロセスです。


1.6. 「Testing Period」とは、Customer が、テスト、評価、および Feedback（以下に定義）のために、GitLab の裁量により決定された Testing Feature にアクセスできる期間を指します。


## 2. LICENSE, SCOPE, AND USE OF THE TESTING FEATURES


2.1. 本契約の条件に従って、GitLab は Customer に対し、内部使用のために該当する Testing Feature(s) を使用する非独占的かつ譲渡不可のライセンスを付与します。Testing Features は、Free Software（https://about.gitlab.com/handbook/legal/subscription-agreement/ にて入手可能で、参照により本契約に組み込まれる GitLab Subscription Agreement（「GLSA」）で定義されるとおり）を構成し、GLSA の該当する規定（GLSA § 5、7、10.2、14.2 を含むがこれらに限られない）に従います。本契約で定義されていない大文字で始まる用語は、GLSA における意味を有するものとします。


2.2. Customer は、該当する Testing Feature が以下のとおりであることを承認します: (i) 商用利用可能化されていないこと、(ii) 不安定である可能性があり、パフォーマンスおよび安定性の問題を引き起こす可能性があること、(iii) 適切に動作しない可能性があること、(iv) エラー、設計上の欠陥、またはその他の問題を含む可能性があること。GitLab は、Testing Feature を Generally Available Feature としてリリースする義務を一切負いません。


2.3. Testing Feature が Customer の Personal Data の処理を伴う範囲において、Customer は、Testing Feature の下で Personal Data が処理されるデータ主体に対して必要なすべての通知を行い、必要なすべての同意を取得していることに同意し表明します。GitLab は、Customer との本契約の履行に基づいて Customer の Personal Data を処理します。Testing Feature を提供するために使用されるサブプロセッサは、[https://about.gitlab.com/privacy/subprocessors/](https://about.gitlab.com/privacy/subprocessors/) に記載され、当該リストの更新に関するすべての通知は、GLSA に規定されるデータ処理付属書のセクション 14 に従って行われます。


2.4. 該当する Testing Feature の Customer による使用およびアクセスは、Customer 自身のリスクにおいてのみ行われます。Customer は以下を承認します: (i) 該当する Testing Feature を使用して生成された AI Assisted の成果物（ソースコードを含む）について責任を負うこと（以下を含む: (a) 望ましい目的のための AI Assisted 成果物の適合性および正確性を検証すること、ならびに (b) Customer が AI Assisted Testing Features から組み込む可能性のある提案、または Customer の成果物への提案について責任を負うこと）、また (ii) Testing Feature(s) が予期しない結果、データの破損または損失、その他の形態の損失または損害を引き起こす可能性があること。Customer は、Testing Features のソースコードをコピー、改変、変更、リバースエンジニアリング、または導出を試みないものとします。


2.5. Testing Period は発効日に開始し、(i) Testing Period の終了、または (ii) GitLab が該当する Testing Feature を Generally Available Feature として提供することのいずれか早い時点で自動的に満了します。GitLab が Testing Feature を Generally Available Feature に移行した場合、Customer の継続使用は、https://about.gitlab.com/terms/ で入手可能な GLSA、または Generally Available Feature を含む GitLab Software の使用を規定する両当事者間の他の別個の書面による契約により管理される、該当する手数料および商業条件の対象となります。


2.6. GitLab は、GitLab Software、Testing Feature(s)、およびそれに関連する Feedback に関連するすべての所有権および知的財産権を保持します。Customer は Testing Features によって処理される入力（「Input」）を提供し、Testing Features が Input に基づいて生成および返却する出力（「Output」）を受け取ることができます。適用される法律によって許容される範囲において、Input および Output の両方は、GLSA で定義される Customer Content を構成するものとします。


## 3. FEEDBACK


Customer による該当する Testing Feature の使用、テスト、および評価の一環として、Customer は Testing Feature の使用に関する提案、アイデア、機能拡張要求、その他の推奨事項（「Feedback」）を提供することができ、ここに当該 Feedback に関するすべての権利を GitLab に取り消し不能な形で譲渡します。両当事者は、パブリックな GitLab issue の使用を含め、Testing Period 中に Feedback を交換するための適切な頻度、プロセス、および方法について相互に合意します（電子メールで十分です）。GitLab は、Customer に対する義務を負わず、制限なくいかなる Feedback も使用することができます。


## 4. CONFIDENTIALITY


両当事者は、本契約の下で開示される Confidential Information が、GLSA または両当事者間の他の該当する機密保持契約の機密保持義務の対象となることを認め、同意します。GitLab Confidential Information には、Testing Features およびあらゆる Feedback が含まれますが、これらに限定されません。


## 5. NO WARRANTIES


Customer は、本契約に基づきライセンスされる該当する Testing Feature が依然としてテスト段階にあり、欠陥を含む可能性があり、「現状有姿（AS IS）」かつ「利用可能な範囲で（AS AVAILABLE）」提供されるものであることを明示的に承認し、これに同意します。本契約の主たる目的は、Testing Feature のパフォーマンスに関する Feedback を取得し、その欠陥を特定することにあります。Customer は、重要なデータを保護し、注意を払い、いかなる方法でも Testing Feature の正常な機能および性能に依拠してはなりません。GitLab およびそのライセンサーは、商品性、特定目的への適合性、権原、および非侵害に関する黙示的保証を含むがこれらに限定されない、明示または黙示を問わずすべての保証を否認します。Testing Period 中に GitLab により提供される情報またはアドバイスは、口頭であるか書面であるかを問わず、本契約に明示的に定められていないいかなる保証も創出するものではありません。


## 6. LIMITATION OF LIABILITY


適用法により認められる最大限の範囲において、(I) いかなる場合においても、GitLab は、契約、不法行為（過失を含む）、厳格責任、その他のいずれに基づくかを問わず、また Customer が当該損害の可能性について通知を受けていたか否かにかかわらず、間接的、懲罰的、付随的、特別、もしくは結果的損害、収益の損失、データの損失、予期される利益、逸失事業または逸失売上について、Customer に対して責任を負わないものとします、(II) 本契約に起因または関連して生じる GitLab の総責任は、契約、不法行為（過失または厳格責任を含む）、その他のいずれに基づくかを問わず、累計で 1,000.00 米ドルを超えないものとします。前述の制限は、限定的救済の本質的目的の不達成にかかわらず適用されるものとします。適用法により認められる最大限の範囲において、いかなる場合においても、GitLab は、Customer または Customer のユーザーによる: (A) Testing Feature の使用、または (B) Testing Feature により生成された AI Assisted の成果物の使用、商業化、複製、改変、公開、配布、ライセンス供与、サブライセンス、または該当する場合における販売に起因または関連して生じる、第三者の知的財産権の不正流用、侵害、希釈、その他の違反について、Customer（または Customer のユーザーやライセンシーを含むすべての第三者）に対して責任を負わないものとします。


## 7. TERMINATION


相手方への書面による通知（電子メールで十分）により、いずれの当事者も都合により本契約を即時解除できます。Testing Period が終了したか、または Testing Feature が Generally Available Feature となった場合、Customer は、Testing Feature の継続使用に追加の料金が発生し、GLSA または GitLab Software の使用を規定する両当事者間の別個の書面による契約の対象となることを承認します。本契約の満了または解除時、本契約により付与されたすべてのライセンスは自動的に終了し、Customer は直ちに Testing Feature のすべての使用を中止するものとします。セクション 2.5、4、5、6、および 7 は、本契約の解除または満了後も存続するものとします。


## 8. MISCELLANEOUS


8.1. セクション 2 に別段の定めがある場合を除き、本契約および本契約に参照により組み込まれる内容は、両当事者の理解の完全な記述を構成し、本契約の主題に関するすべての以前の書面または口頭の合意、コミュニケーション、その他の理解事項に優先し、これらを取り消します。GLSA との条件の矛盾は、本契約を優先して解決されるものとします。本契約は、Testing Feature が Generally Available Feature に移行した後、Customer に当該 Testing Feature を使用する商用ライセンスを付与するものではありません。


8.2. 本契約は、その抵触法の規定にかかわらず、カリフォルニア州の法律に準拠します。カリフォルニア州サンフランシスコ郡に所在する連邦および州の裁判所は、本契約から生じる、または本契約に関連するあらゆる紛争に関して適切かつ排他的な管轄および裁判地を有します。国際物品売買契約に関する国際連合条約は、本契約に関して両当事者により明示的に否認されます。両当事者は、すべての輸出および貿易コンプライアンス要件を含む、適用されるすべての法律および規制を遵守することを表明、保証、および誓約します。本契約は、相手方の事前の書面による同意なしに、いずれの当事者によっても譲渡、移転、またはサブライセンスすることはできません。
