---
title: GitLab Testing Agreement v5
description: 実験的機能、アルファ機能、ベータ機能を対象とする GitLab Testing Agreement のレガシーバージョン 5
upstream_path: /handbook/legal/testing-agreement-v5/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: 2026-05-20T15:15:43-04:00
translated_at: "2026-05-22T21:16:58Z"
translator: claude
stale: false
---

（追加条件）


本 Testing Agreement（以下「本契約」）は、268 Bush Street, Suite 350, San Francisco, CA 94104 にオフィスを有する GitLab Inc.（以下「GitLab」）と、(i) 本契約を電子的に承諾する事業体、または (ii) Testing Features が有効化される対象となる事業体（該当する方、いずれの場合も「お客様」）との間で締結されます。本契約は、以下のうち早い方の日付をもって発効します: (i) お客様が GitLab Software 内で本契約に同意するクリックを行った日、または (ii) お客様を代理して行動する個人が Testing Features の有効化を選択した日（「発効日」）。両当事者は、お客様による該当する Testing Feature（下記定義）の使用に関連する以下の条項に同意します。


Testing Features の有効化を選択する個人は、お客様を本契約の条項に拘束する権限を有することを表明します。当該個人がそのような権限を有しない場合、その個人は Testing Features を有効化することを選択してはならず、また当該 Testing Features を無効化してはなりません。


## 1. 定義


1.1. 「Testing Feature(s)」とは、本番利用の準備が整っていない実験的機能、アルファ機能、またはベータ機能を意味します。Testing Features は GitLab の裁量で決定されるとおり、サポートなし、または限定的なサポートのみで提供されます。本契約に参照により組み込まれる追加の詳細および該当する利用条件は、こちらでさらに説明されています: https://docs.gitlab.com/policy/development_stages_support/。


1.2. 「AI Assisted」とは、人工知能（機械学習を含む）の支援を受けて成果物を使用または開発することを意味します。


1.3. 「Generally Available Features」とは、あらゆる規模での本番利用の準備が整い、完全に文書化およびサポートされ、Production Readiness Review に合格した Software の機能を意味します。


1.4. 「Personal Data」とは、General Data Protection Regulation (EU) 2016/679 における「個人データ」の定義に基づいて定義されるすべての情報を意味します。


1.5. 「Production Readiness Review」とは、GitLab.com のサービス、機能、またはインフラに対する重要な変更の信頼性ニーズを特定するのに役立つプロセスを意味します。


1.6. 「Testing Period」とは、テスト、評価、および Feedback（下記定義）のために、GitLab の裁量で決定される、お客様が Testing Feature にアクセスできる期間を意味します。


## 2. ライセンス、範囲、および TESTING FEATURES の利用


2.1. 本契約の条項に従い、GitLab はお客様に、内部利用のために該当する Testing Feature(s) を使用する非独占的かつ譲渡不能なライセンスを付与します。Testing Features は、Free Software（https://about.gitlab.com/handbook/legal/subscription-agreement/ で入手可能で本契約に参照により組み込まれる GitLab Subscription Agreement（「GLSA」）における定義による）を構成し、GLSA の該当条項（GLSA 第 5 条、第 7 条、第 10.2 条、第 14.2 条を含むがこれらに限定されない）に従います。本契約で定義されていない大文字始まりの用語は GLSA における意味を有します。


2.2. お客様は、該当する Testing Feature について次のことを認めます: (i) 商業的に利用可能となっていないこと、(ii) 不安定であり、パフォーマンスや安定性の問題を引き起こす可能性があること、(iii) 正常に動作しない可能性があること、および (iv) エラー、設計上の欠陥、その他の問題が含まれる可能性があること。GitLab には、Testing Feature を Generally Available Feature としてリリースする義務はありません。


2.3. Testing Feature がお客様の Personal Data の処理を伴う限りにおいて、お客様は、Testing Feature の下で Personal Data が処理されるデータ主体に対して必要なすべての通知を提供し、必要なすべての同意を取得していることに同意し、表明します。GitLab は、お客様との本契約の履行を根拠としてお客様の Personal Data を処理します。Testing Feature を提供するために使用されるサブプロセッサーは [https://about.gitlab.com/privacy/subprocessors/](https://about.gitlab.com/privacy/subprocessors/) に掲載され、当該リストの更新に関するすべての通知は、GLSA に規定される data processing addendum の第 14 条に従って行われます。


2.4. お客様による該当する Testing Feature の使用およびアクセスは、もっぱらお客様自身のリスクにおいて行われます。お客様は次のことを認めます: (i) お客様は、該当する Testing Feature を使用して生成された AI Assisted の成果物（ソースコードを含む）について責任を負うこと。これには、(a) AI Assisted 成果物の目的に対する適合性および正確性を検証すること、ならびに (b) AI Assisted Testing Features による提案またはお客様の成果物への提案をお客様が取り込むこと、を含みます。また、(ii) Testing Feature(s) は予期しない結果、データの破損または喪失、その他の損失または損害を引き起こす可能性があること。お客様は、Testing Features のソースコードを複製、改変、修正、リバースエンジニアリング、または導出を試みてはなりません。


2.5. Testing Period は発効日に開始し、(i) Testing Period の終了、または (ii) GitLab が該当する Testing Feature を Generally Available Feature として提供すること、のいずれか早い時点で自動的に満了します。GitLab が Testing Feature を Generally Available Feature に移行した場合、お客様の継続利用は、https://about.gitlab.com/terms/ で入手可能な GLSA、または GitLab Software（Generally Available Feature を含む）の使用を規定する両当事者間のその他の別個の書面による契約により規定される該当する料金および商業条件に従います。


2.6. GitLab は、GitLab Software、Testing Feature(s)、およびそれらに関連する Feedback に関連するすべての所有権および知的財産権を保持します。お客様は Testing Features によって処理される入力（「Input」）を提供し、Input に基づいて Testing Features によって生成および返却される出力（「Output」）を受け取ることができます。適用法令で許容される範囲において、Input と Output はいずれも、GLSA で定義される Customer Content を構成します。


## 3. フィードバック


お客様による該当する Testing Feature の使用、テスト、および評価の一環として、お客様は Testing Feature の使用に関する提案、アイデア、機能拡張要求、その他の推奨事項（「Feedback」）を提供することができ、ここに当該 Feedback に関するすべての権利を取消不能に GitLab に譲渡します。両当事者は、公開の GitLab Issue の利用を含め、Testing Period 中の Feedback を交換するための適切なケイデンス、プロセス、および方法について相互に合意します（メールで十分）。GitLab は、Feedback を制限なく、かつお客様に対する義務なく使用することができます。


## 4. 機密保持


両当事者は、本契約に基づいて開示された Confidential Information が、GLSA または両当事者間のその他の該当する機密保持契約の機密保持義務に従うことを認め、これに同意します。GitLab の Confidential Information には、Testing Features およびすべての Feedback が含まれますが、これらに限定されません。


## 5. 無保証


お客様は、本契約に基づいてライセンスされる該当する TESTING FEATURE がなお TESTING PHASE にあり、欠陥を含む可能性があり、「現状有姿（AS IS）」かつ「利用可能な状態のまま（AS AVAILABLE）」で提供されることを明示的に認め、これに同意します。本契約の主たる目的は、TESTING FEATURE のパフォーマンスに関するフィードバックを得ること、および欠陥を特定することです。お客様は、重要なデータを保護し、注意を払い、TESTING FEATURE の正しい機能およびパフォーマンスに一切依存してはなりません。GITLAB およびそのライセンサーは、明示的か黙示的かを問わず、商品性、特定目的への適合性、権原、非侵害のすべての黙示的保証を含むがこれらに限定されない、一切の保証を否認します。TESTING PERIOD 中に GITLAB が提供する情報または助言は、口頭か書面かを問わず、本契約で明示的になされたもの以外の保証を生じさせるものではありません。


## 6. 責任の制限


適用法令で許容される最大限の範囲において、(I) いかなる場合においても、GITLAB は、契約、不法行為（過失を含む）、厳格責任、その他に基づくものであるかを問わず、お客様に対して、間接的、懲罰的、付随的、特別、結果的損害、収益の損失、データの損失、予測利益、ビジネスの逸失、または売上の逸失について、たとえお客様が損害の可能性について知らされていたとしても、責任を負わないものとします。(II) 本契約に起因または関連して生じる GITLAB の総責任は、契約、不法行為（過失または厳格責任を含む）、その他に基づくものであるかを問わず、合計で USD $1,000.00 を超えないものとします。前述の制限は、いかなる限定的救済の本質的目的の不達成にかかわらず適用されます。適用法令で許容される最大限の範囲において、GITLAB は、お客様（またはお客様のユーザーもしくはライセンシーを含む第三者）に対して、お客様またはそのユーザーによる以下の行為に起因または関連して生じる、第三者の知的財産権の不正使用、侵害、希釈、その他の違反について、責任を負わないものとします: (A) TESTING FEATURE の使用、または (B) TESTING FEATURE によって生成された AI ASSISTED 成果物の使用、商用化、複製、改変、公表、配布、ライセンス供与、サブライセンス供与、または該当する場合は販売。


## 7. 解約


他方当事者への書面による通知（メールで十分）により、いずれの当事者も、便宜上、直ちに本契約を解約することができます。Testing Period が終了したか、または Testing Feature が Generally Available Feature になった場合、お客様は、Testing Feature の継続利用に追加料金が発生し、GLSA または GitLab Software の使用を規定する両当事者間の別個の書面による契約に従うことを認めます。本契約の満了または解約時には、本契約に基づいて付与されたすべてのライセンスは自動的に終了し、お客様は直ちに Testing Feature のすべての使用を中止するものとします。第 2.5 条、第 4 条、第 5 条、第 6 条、第 7 条は、本契約の解約または満了後も存続します。


## 8. 雑則


8.1. 第 2 条で別途定める場合を除き、本契約および参照により本契約に組み込まれる文書は、両当事者の理解の完全な記述を構成し、本契約の主題に関連する従前のすべての書面または口頭による合意、コミュニケーション、その他の理解に優先しこれを取り消すものとします。GLSA との条項の矛盾は、本契約を優先して解決されるものとします。本契約は、Testing Feature が Generally Available Feature に移行された後にこれを使用するための商用ライセンスをお客様に付与するものではありません。


8.2. 本契約は、抵触法の規定にかかわらず、米国カリフォルニア州の法律に準拠します。本契約から生じまたは本契約に関連するあらゆる紛争については、米国カリフォルニア州サンフランシスコ郡所在の連邦裁判所および州裁判所が適切かつ専属的な管轄権および裁判地を有するものとします。国際物品売買契約に関する国際連合条約は、本契約に関して両当事者により明示的に否認されます。両当事者は、すべての輸出および貿易コンプライアンス要件を含むすべての適用法令および規制を遵守することを表明、保証、および誓約します。本契約は、相手方の事前の書面による同意なく、いずれの当事者もこれを譲渡、移転、またはサブライセンスすることはできません。
