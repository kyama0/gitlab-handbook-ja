---
title: "Technology Partner Agreement v1"
upstream_path: /handbook/legal/technology-partner-agreement-v1/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-21T14:03:07-04:00"
translated_at: "2026-05-22T12:00:00Z"
translator: claude
stale: false
---

*Deprecated 2026-03-30*

**PLEASE READ THIS AGREEMENT CAREFULLY BEFORE USING ACCESSING OR CONSUMING THE SOFTWARE OR SERVICES FROM GITLAB. BY CLICKING YOUR ASSENT BELOW OR USING, ACCESSING OR CONSUMING THE GITLAB SOFTWARE OR SERVICES, YOU SIGNIFY YOUR ASSENT TO AND ACCEPTANCE OF THIS AGREEMENT AND ACKNOWLEDGE YOU HAVE READ AND UNDERSTAND THE TERMS. AN INDIVIDUAL ACTING ON BEHALF OF AN ENTITY REPRESENTS THAT HE OR SHE HAS THE AUTHORITY TO ENTER INTO THIS AGREEMENT ON BEHALF OF THAT ENTITY. IF YOU DO NOT ACCEPT THE TERMS OF THIS AGREEMENT, THEN YOU MUST NOT USE, ACCESS OR CONSUME THE GITLAB SOFTWARE OR SERVICES**

（本契約は GitLab からのソフトウェアまたはサービスを使用、アクセス、消費する前によくお読みください。下記の同意をクリックするか、GitLab ソフトウェアまたはサービスを使用、アクセス、消費することにより、本契約に同意し受諾したものとみなされ、利用規約を読み理解したことを認めるものとします。事業体を代表して行動する個人は、その事業体に代わって本契約を締結する権限を有することを表明します。本契約の条件を受諾しない場合は、GitLab ソフトウェアまたはサービスを使用、アクセス、消費してはなりません。）

## Technology Partner Agreement

本 Technology Partner Agreement（「**本契約**」）は、Partner が「agree」または「accept」をクリックして本契約の条件を受諾した日（「**発効日**」）をもって、GitLab と Partner（個別に「**当事者**」、総称して「**両当事者**」と呼ぶ）との間で締結されます。本契約に含まれる相互の合意を約因とし、また法的に拘束される意図をもって、両当事者は以下のとおり合意します。

### 1. **DEFINITIONS（定義）**

本契約で使用される大文字始まりの用語は、初出箇所または以下で定義されます。

1.1 **「Affiliates（関連会社）」** とは、ある当事者に関して、当該当事者を直接または間接に支配し、当該当事者によって支配され、または当該当事者と共通の支配下にある任意の事業体を意味し、ここで「支配」とは、その事業体の発行済株式の少なくとも 50% の所有権、または契約その他によって当該事業体の経営を指揮できることを意味します。

1.2 **「API」** とは、GitLab のソフトウェア（本契約で定義）について、当該ソフトウェアの利用、変更、インスタンスの表示、アクセスを可能にする、文書化されたまたはその他の方法で開示された任意のアプリケーションプログラミングインターフェース（例：SOAP または REST ベースのインターフェース経由）を意味し、その後の改訂・変更を含みます。

1.3 **「Collateral（販促資料）」** とは、ある当事者が本契約に関連して使用するために、他方当事者に対し提供する、または利用可能にする、印刷物または電子形式の販売、マーケティング、広告資料を意味します。

1.4 **「Confidential Information（機密情報）」** は、第 7 条（Confidentiality）に定める意味を持ちます。

1.5 **「Customer Data（顧客データ）」** とは、GitLab ソフトウェア内の GitLab 顧客リポジトリに保存される任意のデータを意味します。

1.6 **「GitLab Developer Resources」** とは、Partner が GitLab Products との Partner Integration を開発するために使用するよう GitLab が提供する特定の API およびその他の開発資料を意味します。これには、GitLab が Partner に提供するアクセスキー、開発者クレデンシャル、評価インスタンス、その他の資料も含まれます。

1.7 **「GitLab Free Software」** とは、エンドユーザー、Partner、顧客、その他第三者に対し、以下の条件で提供される GitLab ソフトウェアを意味します：(i) 無償または大幅に値引きされたコストで、かつ (ii) 評価、デモンストレーション、パイロット、テスト、NFR（Not-For-Resale、再販不可）、および／またはその他「商用関連」ではない要素のみを目的とする。「商用関連」には、GitLab との拘束力ある購入契約に基づく GitLab ソフトウェアの内部使用、再販、および／または配布が含まれますが、これらに限定されません。

1.8 **「GitLab Alliance Partner Program」** とは、<https://about.gitlab.com/partners/integrate/> に掲載されている、GitLab の単独裁量により随時更新される、プログラムガイドラインおよび概要を意味し、これには方針、適格性および資格要件、ならびに GitLab 提供資料を GitLab Products とともに使用する際のルールが含まれます。GitLab Alliance Partner Program には、GitLab がその単独裁量により利用可能にする GitLab Developer Resources（例：NFR ライセンス）が含まれる場合があります。

1.9 **「GitLab Software」** とは、GitLab により販売されるソフトウェアおよびその他のブランド化されたオファリングを意味し、GitLab の「DevOps Lifecycle Application Platform」の自己管理型および／または SaaS バージョンを含みますがこれらに限定されません。

1.10 **「Intellectual Property Rights（知的財産権）」** とは、世界中のすべての知的財産権を意味し、特許、著作権、商標、企業秘密、機密情報に関する契約上その他の権利、人格権、プライバシーおよびパブリシティの権利、ならびにその他の知的・産業財産権および所有権（世界中の当該権利の登録、出願、更新、延長を含む）を含みますがこれらに限定されません。

1.11 **「Trademarks（商標）」** とは、ある当事者の社名、主要ロゴ、利用可能なインテグレーションを示すために他者のソフトウェア内で使用される主要な「ボタン」または「アイコン」、ならびに一方当事者が本契約に基づき他方当事者に対し書面で明示的に使用を許諾するその他のロゴ、サービスマーク、商標、認証マークを意味します。

### 2. **PURPOSE（目的）**

2.1 本契約の条件、ならびに GitLab Alliance Partner Program に定められ GitLab の単独裁量により決定される参加の適格要件その他前提条件に従うことを条件として、Partner は、Partner プラットフォーム、ソフトウェア、および／またはソリューション（「**Partner Product(s)**」）上または内に、GitLab 顧客が GitLab ソフトウェアおよび／または GitLab ブランド製品もしくはサービス（「**GitLab Product(s)**」）から情報を要求したり、アクティビティを有効化したりできるようにするインテグレーション（「**Partner Integration**」）を作成することができます。

2.2 Partner が GitLab Alliance Partner Program に定められた完全な参加要件を満たし、かつ下記第 4 条に従うことを条件として、両当事者は、各当事者がそれぞれの会社の商標およびマーケティング販促資料に関する一定の限定的なライセンスを相互に交換することを希望し、これにより各当事者が Partner Integration と、それに対応する GitLab Product(s) の価値を宣伝できるようにします。

### 3. **REGISTRATION & USE RIGHTS（登録および使用権）**

3.1 Partner は、本契約および GitLab Alliance Partner Program 内で GitLab により定められた登録または資格認証の要件（あれば）に従わねばならず、これには Partner による GitLab Developer Resources の使用、および GitLab Developer Resources を提供する GitLab の裁量が含まれます。

3.2 本契約および GitLab Alliance Partner Program の条件に従うことを条件として、Partner は GitLab Products にアクセスまたはインターフェースする Partner Integration(s) を作成することができます。本契約および GitLab Alliance Partner Program に基づく Partner のすべての権利は、限定的、非排他的、サブライセンス不可、譲渡不可です。

3.3 GitLab Developer Resources にアクセスおよび使用するにあたり、Partner は本契約および GitLab Alliance Partner Program に記載されたプログラムガイドライン（「**Program Guidelines**」）の条件に従うことに合意します。Partner は以下を行わないこと（また第三者に行わせないこと）に合意します：(a) 関連する GitLab Products とともに、かつ GitLab Alliance Partner Program に従う以外の目的で GitLab Developer Resources を使用すること；(b) GitLab Developer Resources を変更または派生著作物を作成すること；(c) GitLab Developer Resources を任意の第三者条件に服させる行為を行うこと；(d) GitLab により書面で明示的に許可された場合を除き、Partner Integration を通じて GitLab Products の要素をコピー、フレーム化、表示すること、または GitLab Products の機能や機能性を実質的に複製する Partner Integration(s) とともに GitLab Developer Resources を使用すること；(e) GitLab Developer Resources（GitLab により提供される任意のアクセスキーを含む）をコピー、配布、販売、サブライセンス、レンタル、リースすること、またはホスティング、サービスプロバイダーその他類似の目的でそれらを使用すること；または (f) 競合分析のために GitLab Developer Resources にアクセスすること、または GitLab Products に関するパフォーマンス情報（稼働率、応答時間、および／またはベンチマーク）を流布すること。

3.4 Partner および GitLab は、GitLab Free Software が、購入された GitLab Software には存在しない機能、特性、メンテナンス、サポート、その他の制限を有する可能性があることを認識し、これに同意します。GitLab の Alliance Program および NFR ライセンス適格性の詳細については、https://handbook.gitlab.com/handbook/alliances/ を参照してください。Partner が、GitLab の単独裁量により決定される Alliance Program の適格要件を満たした場合、GitLab Free Software の付与および使用は、https://about.gitlab.com/handbook/legal/subscription-agreement/ に掲載されている GitLab の Subscription Agreement の該当条件に従います。

### 4. **OWNERSHIP RIGHTS & TRADEMARKS（所有権および商標）**

4.1 Partner が本契約を遵守し、Partner Integration の認証を含む GitLab Alliance Partner Program の要件を満たすことを条件として、両当事者は、第 4.2 条で想定される本契約に基づき指定された Collateral または Trademarks の使用、および他方当事者により書面で承認されたその他の使用を含め、GitLab Products および Partner Products のプロモーションおよび共同販売のために、書面で相互に合意した別途の契約または本契約への修正書を締結することを選択できます。

4.2 各当事者の Trademarks の使用は、他方当事者に提供される、商標保有者の商標使用ガイドラインおよびロゴ使用ガイドラインに従うものとし、各当事者はその商標に関連する信用を維持するために他方と協力するものとします。Partner は、https://about.gitlab.com/handbook/marketing/brand-and-digital-design/#brand-guidelines（随時更新）に掲載されている GitLab の商標使用ガイドラインに従うものとし、GitLab の事前の書面による同意（メールで足ります）を含みます。

4.3 本第 4 条に定める場合を除き、いずれの当事者またはその各 Affiliate(s) も、他方当事者の事前の書面による同意なく、本契約に関する、または両当事者間の関係の存在に関する発表、声明、プレスリリース、その他の広報またはマーケティング資料を発出または公開してはならず、また他方当事者の Trademarks、サービスマーク、商号、ロゴ、ドメイン名、その他の出所、提携、スポンサーシップの表示を使用してはなりません。

4.4 Partner および（該当する場合）その第三者ライセンサーは、Partner Integrations、Partner Products、Partner Trademarks に関するすべての所有権およびその他の権利を保持します。GitLab および（該当する場合）その第三者ライセンサーは、GitLab Developer Resources、GitLab Products、GitLab Trademarks に関するすべての所有権およびその他の権利（すべての知的財産権を含む）を保持します。GitLab Developer Resources または GitLab Products に関するフィードバック、コメント、提案を GitLab に提供すること（「**Feedback**」）は、完全に任意です。Feedback を提供することにより、Partner は GitLab に対し、Feedback（Feedback に体現されたアイデア、コンセプト、メソッド、ノウハウ、テクニックを含む）を任意の目的で、Partner に対する知的財産権その他に基づく制限や義務を負わずに、使用、複製、変更、サブライセンス、その他利用するための、世界的、ロイヤリティフリー、非排他的、永続的、取消不能のライセンスを付与します。

### 5. **SUPPORT & GITLAB PRODUCTS（サポートおよび GitLab Products）**

5.1 GitLab は、自己の費用および負担において、GitLab Products およびサービスのエンドユーザーへのサポート（あれば）を提供する責任を負います。

5.2 Partner は、自己の費用および負担において、任意の Partner Products および Partner Integrations のエンドユーザーへのサポート（あれば）を提供する責任を負います。

5.3 いずれかの当事者が他方の製品および／またはインテグレーションに関するエンドユーザーサポート問い合わせを受領した場合、当該当事者はその問い合わせを所有当事者に転送するものとします。両当事者は、Partner Integration に関連する特定のサポート問題についてどちらの当事者の製品またはサービスが責任を負うかをトラブルシューティングするため、誠実に互いに協力することに合意します。さらに、両当事者は、他方当事者から提起された技術的問題に対処し解決するため、商業的に合理的な努力を行います。

5.4 GitLab は、GitLab Developer Resources または Partner Products もしくは Partner Integrations のエンドユーザーに対し、エラーまたは欠陥の修正義務を含む、保守またはサポートを提供する義務を負いません。

5.5 GitLab Products の使用には、各エンドユーザーが、その時点で有効な GitLab のサブスクリプション条件、または GitLab とエンドユーザー間で交渉および締結された最終的な契約（「**GitLab Terms and Conditions**」）に従う、有効なライセンスまたはサブスクリプションを GitLab と保持していることが必要です。Partner は、エンドユーザーが GitLab Terms and Conditions に違反することを促進または推奨してはならず、また GitLab Terms and Conditions のエンドユーザーによるレビューまたは受諾を妨げてはなりません。

5.6 本契約は GitLab Products を再販する権利を Partner に与えるものではなく、Partner は GitLab Products を再販してはならず、また GitLab に代わって拘束力ある約束を行ってはなりません。さらに、Partner は、GitLab Products または GitLab Developer Resources の機能の使用またはアクセスに対して、エンドユーザーに直接または間接に課金してはなりません。

### 6. **TERM & TERMINATION（期間および終了）**

6.1 本契約の初期期間は発効日に開始し、1 年後に満了するものとします（「Initial Term」）。本契約の Initial Term は、下記のとおり終了されない限り、連続する 1 年間の更新期間にわたり自動的に更新されます。発効日から本契約の終了までの期間（Initial Term を含む）は「Term（期間）」とします。

6.2 Initial Term の経過後、いずれの当事者も他方当事者に対し 60 日前の書面通知をもって本契約を終了できます。いずれの当事者も、他方当事者が本契約に基づく義務に違反し、非違反当事者からの通知受領後 30 日以内にその違反を是正しなかった場合、書面通知をもって直ちに本契約を終了できます。違反通知を提供する当事者は、通知の中で違反の主張を合理的詳細をもって記載しなければなりません。さらに、いずれの当事者も、他方当事者が破産申立てまたはその支払不能に関する手続もしくは債権者のための譲渡の対象となった場合、他方当事者への書面通知をもって直ちに本契約を終了できます。

6.3 GitLab はまた、以下の場合に Partner による GitLab Developer Resources の使用を停止し、または直ちに本契約を終了することができます：(a) 法律により要求される場合；(b) GitLab が GitLab Developer Resources、GitLab Products、または GitLab Alliance Partner Program の提供を中止する場合；または (c) 本契約の継続が法的または事業上の責任を生じさせ、もしくはその製品、サービス、評判、ユーザーに害を及ぼす可能性があると GitLab が判断する場合。

6.4 本契約の終了に際し、Partner による GitLab Developer Resources（関連するアクセスキーおよびクレデンシャルを含む）および GitLab Trademarks の使用権は直ちに終了し、Partner はそのようなすべての使用を停止しますが、本契約の他のすべての条項は存続します。GitLab は、本契約に定めるとおり、本契約の終了または停止から生じる義務または責任を負いません。

### 7. **CONFIDENTIALITY（機密保持）**

7.1 「**Confidential Information**」とは、本契約の条件、ならびに当事者の他の非公開の技術的または事業情報を意味し、口頭または書面のいずれであるかを問わず、開示時に「Confidential」または「Proprietary」と書面で指定されたもの、または情報の性質上、受領当事者が開示当事者の機密情報であると合理的に理解するものとし、当事者の技術、アイデア、コンセプト、アルゴリズム、ソースコード、方法論、ワークフロー、実装プロセス、現在および将来の製品およびサービス、研究、エンジニアリング、設計、財務情報、調達要件、顧客リスト、事業予測、ロードマップ、マーケティング計画、価格、割引、提案に関する情報を含みます。前述にもかかわらず、Confidential Information には、いずれかの当事者の製品およびサービスに取り込まれた情報またはデータは含まれません。

7.2 Confidential Information には、以下に該当する情報は含まれません：(a) 受領当事者の過失または本契約の違反によらず公衆に一般的に利用可能となった情報；(b) 開示時に受領当事者が機密保持義務を負わずに正当に保有していた情報；(c) 開示当事者の Confidential Information を使用せずに受領当事者が独立に開発した情報；(d) 開示当事者に対する機密保持義務を負わない第三者から、使用または開示の制限なしに受領当事者が正当に取得した情報；または (e) 本契約の別の規定の下で受領当事者が公開開示を許可されている情報。

7.3 いずれの当事者も、他方当事者の Confidential Information を他者に開示してはならず、本契約に基づくその権利または義務を行使するために必要な場合（「**Permitted Purposes**」）を除き、他方当事者の Confidential Information を任意の目的で使用してはなりません。各当事者は、他方当事者の Confidential Information の許可されていない使用、流布、コピーを防ぐため、自己の同種の機密情報の保護に用いるのと少なくとも同程度（ただし合理的な注意を下回らない）の注意を払うものとします。各当事者は、Permitted Purposes のためにのみ当該 Confidential Information にアクセスする真正の必要性を有する自己の従業員、コンサルタント、Affiliates、アドバイザー、契約者に対し、当該 Confidential Information の開示を制限し、当該従業員および契約者はすべて、本契約に定めるものと少なくとも同程度に保護的な拘束力ある開示および使用の制限に服するものとします。各当事者は、本第 7 条の自己の従業員、コンサルタント、Affiliates の従業員、アドバイザー、契約者による違反について、自己の従業員によるものと同様に責任を負います。

7.4 本第 7 条に基づく機密保持義務は、当該 Confidential Information が本契約に基づき開示されてから 3 年後に終了します。受領者は、他方当事者の書面による要求に応じ、当該他方当事者により開示された Confidential Information を速やかに返却または破棄します（電子データの場合は、商業的に合理的な努力により受領者が削除し、または実務上アクセス不能にします）。

7.5 本契約は、有効な裁判所命令、法律、召喚状、規制に従い、受領当事者が開示当事者の Confidential Information を裁判所または政府機関に開示することを妨げるものと解釈されてはなりませんが、受領当事者は以下のことを行います：(a) 法律により禁止されない限り、開示を行う前に合理的な通知（または該当法律上許容される最大の通知期間がそれより短い場合はその期間）を与えること；(b) 開示当事者の費用負担で、開示当事者による当該 Confidential Information の開示に抵抗または制限する適法な努力に対し合理的な支援を提供すること；および (c) 法的に開示が要求される開示当事者の Confidential Information の部分のみを開示すること。

7.6 両当事者は、本契約に定める場合を除き、受領当事者による Confidential Information の開示は、金銭による救済が不十分であるような回復不能な損害をもたらすことに合意します。両当事者はさらに、当該開示または開示の脅威があった場合、(a) 開示当事者は、コモンローまたはエクイティ上の他の救済に加え、違反または脅威となる違反を防止するための差止命令を求める権利を有し；(b) 各当事者は、そのような場合にそのような差止命令が適切かつ正当であることを認めることに合意します。本契約に別段の明示的な定めがない限り、本契約に基づく救済は累積的であり、コモンローまたはエクイティ上利用可能な他の救済を排除しません。本契約の下で開示されたすべての Confidential Information は、開示当事者の財産のままです。本契約に明示的に定められた場合を除き、本契約により、または Confidential Information の開示により、いかなる知的財産権に基づくライセンスまたは権利も付与されません。

### 8. **WARRANTY & INDEMNIFICATION（保証および補償）**

8.1 両当事者は、本契約を締結する法的権限を有することをここに表明し保証します。

8.2 EXCEPT AS EXPRESSLY STATED HEREIN, ANYTHING PROVIDED IN CONNECTION WITH THIS AGREEMENT, INCLUDING, WITHOUT LIMITATION, GITLAB FREE SOFTWARE, IS PROVIDED "AS-IS", WITHOUT ANY WARRANTIES OF ANY KIND. EACH PARTY DISCLAIMS ANY IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

8.3 Partner は、Partner Integration および Partner Integration と GitLab Products および／または GitLab Developer Resources との任意の派生物／組み合わせから生じる、または Partner Integration のエンドユーザーまたは第三者ディストリビューターとの Partner の関係または相互作用から生じる、請求、損失、コスト、費用（合理的な弁護士費用を含む）、損害、責任に対し、GitLab およびその Affiliates ならびに各々の取締役、役員、従業員、代理人、契約者、エンドユーザー、ライセンシーを補償し、（GitLab の要請があれば）防御し、無害化します。GitLab は自己の費用で自己の弁護士による請求の防御および和解に参加することができ、Partner は GitLab の事前の書面による同意（不合理に保留されない）なく請求を和解させてはなりません。

### 9. **LIMITATIONS OF LIABILITY（責任の制限）**

9.1 WITH THE EXCEPTION OF PARTNER'S, (A) INDEMNIFICATION OBLIGATIONS UNDER SECTION 8.3, (B) OBLIGATIONS UNDER SECTION 10 (EXPORT) AND SECTION 11 (GITLAB CUSTOMER DATA), TO THE EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EITHER PARTY BE LIABLE TO THE OTHER FOR LOST PROFITS OR REVENUE OR LOSS OF USE OR DATA, COSTS OF COVER OR SUBSTITUTE GOODS OR SERVICES, OR FOR INCIDENTAL, CONSEQUENTIAL, PUNITIVE, SPECIAL OR EXEMPLARY DAMAGES, OR INDIRECT DAMAGES OF ANY TYPE OR KIND, HOWEVER CAUSED, RELATED TO OR ARISING OUT OF THIS AGREEMENT OR THE RIGHTS, LICENSES, PRODUCTS OR SERVICES PROVIDED UNDER THIS AGREEMENT, WHETHER BY BREACH OF WARRANTY, BREACH OF CONTRACT, NEGLIGENCE, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

9.2 WITH THE EXCEPTION OF PARTNER'S, (A) INDEMNIFICATION OBLIGATIONS UNDER SECTION 8.3, (B) OBLIGATIONS UNDER SECTION 10 (EXPORT), SECTION 11 (GITLAB CUSTOMER DATA), AND SECTION 12 (GENERAL PROVISIONS),TO THE EXTENT PERMITTED BY LAW, THE TOTAL, CUMULATIVE LIABILITY OF EACH PARTY ARISING OUT OF OR RELATED TO THIS AGREEMENT OR THE RIGHTS, LICENSES, PRODUCTS OR SERVICES PROVIDED UNDER THIS AGREEMENT, WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, SHALL BE LIMITED TO FIVE HUNDRED U.S. DOLLARS ($500.00).

### 10. **EXPORT（輸出）**

10.1 GitLab Developer Resources および GitLab Products は、米国政府による輸出制限、および特定の外国政府による輸入制限の対象となります。Partner は、GitLab Developer Resources および／または GitLab Products の使用において、適用されるすべての輸出および輸入法令および規制を遵守することに同意します。Partner は、GitLab Developer Resources または GitLab Products のいかなる部分も米国から除去または輸出してはならず、また GitLab Developer Resources または GitLab Products のいかなる部分の輸出または再輸出を以下に対し許可してはなりません（また第三者にもさせてはなりません）：(a) 禁輸国またはテロ支援国家への（またはその国民もしくは居住者への）輸出；(b) U.S. Commerce Department's Table of Denial Orders または U.S. Treasury Department's list of Specially Designated Nationals に記載された者への輸出；(c) 当該輸出または再輸出が制限または禁止される国、または米国政府もしくはその機関が輸出または再輸出時に輸出ライセンスその他政府の承認を要求する国への、当該ライセンスまたは承認を最初に取得しないままの輸出；または (d) 米国もしくは外国の機関もしくは当局による輸出または輸入の制限、法律、規制に違反するその他の輸出。Partner は、自らがそのような禁止国に所在せず、その支配下になく、その国民または居住者ではなく、またそのような禁止当事者リストに記載されていないことを表明し保証します。

### 11. **GITLAB CUSTOMER DATA（GitLab 顧客データ）**

11.1 Partner が Customer Data を GitLab ソフトウェア外のシステムに送信する場合、Partner は、Customer Data にアクセスするユーザーに対し、Customer Data が GitLab 外のシステムに送信されること、および GitLab が当該データのプライバシー、セキュリティ、完全性について責任を負わないことを通知するものとします。

11.2 Partner は、Customer Data を保存、処理、送信するとき、(i) Customer Data の完全性に悪影響を及ぼし得る方法で Customer Data の内容を変更する、(ii) Customer Data を第三者に開示する、または (iii) 該当する GitLab 顧客のユーザーに対する Partner 機能の提供以外の目的で Customer Data を使用するアクションを取る前に、まず GitLab 顧客の同意を取得することを表明し保証します。Customer Data の変更または開示は、それが、Customer による該当する Partner 機能の使用に起因するものであり、合理的な Customer がその機能の使用により Customer Data の変更または開示が発生することを予期するであろう場合、本条の条件に違反しません。

11.3 Partner はまた、合理的に十分なプライバシーおよびセキュリティ対策により、また適用されるすべてのプライバシー法令および規制に従って、すべての Customer Data を維持・処理するものとします。

### 12. **GENERAL PROVISIONS（一般条項）**

12.1 各当事者は、データプライバシー法および輸出管理法令を含むがこれに限定されない、本契約に基づく自己の義務の履行に適用されるすべての法律および規制を遵守するものとします。

12.2 いずれの当事者も、他方当事者の事前の書面による同意なく、本契約の権利もしくは義務、または本契約の一部または全部を、直接または法の作用により、譲渡、委任、再委託、その他の方法で移転してはなりません。本第 10.2 条に定める場合を除き、本契約に基づく権利または義務を移転、譲渡、委任、再委託する試みは無効です。前述の制限に従い、本契約は両当事者およびそれぞれの承継人および許諾された譲受人を拘束し、その利益のために有効となり、それらにより執行可能となります。

12.3 本契約に基づく権利の放棄は、放棄が求められる当事者により書面で行われ、署名された場合にのみ有効です。当該放棄は、それが行われた状況にのみ適用されます。本契約に別段の明示的な定めがない限り、本契約に基づく救済は累積的であり、コモンローまたはエクイティ上利用可能な他の救済を排除しません。

12.4 本契約は、本契約の当事者および（該当する場合）当事者の承継人および許諾された譲受人以外の人または当事者に利益をもたらすことを意図したものではありません。両当事者は独立した契約者です。本契約のいかなる内容も、両当事者間にパートナーシップ、ジョイントベンチャー、代理、雇用、または受託者関係を生じさせると解釈されてはなりません。いずれの当事者も、他方当事者の名のもとに、または他方当事者に代わって、明示または黙示の、いかなる種類の義務を引き受けまたは生じさせる権利または権限を有してはならず、またそのような権限を有することを表明してはなりません。各当事者は、本契約に基づく自己の義務の履行において自らが負担したコストに責任を負います。

12.5 本契約に別段の明示的な定めがない限り、すべての通知は書面で行われ、以下のうち最も早いものに配信されたとみなされます：(a) 実際の受領；(b) 全国的に認知された翌日配達便（受領証要求）による、本契約に定めるか書面通知により更新された受領当事者の住所への配達時；または (c) いずれかの当事者が同時に作成したコンピュータ記録によって証明される電子通信による受領時。

12.6 両当事者は、本契約が両当事者の相互理解の完全かつ排他的な表明であり、本契約の主題に関連する以前のすべての書面および口頭の合意、コミュニケーション、その他の理解を上書きし取り消すことに合意します。

12.7 本契約および本契約から生じるすべての関係、紛争、請求、その他の事項（非契約上の紛争または請求を含む）は、抵触法の規定にかかわらず、カリフォルニア州法によってのみ準拠し、それに従ってのみ解釈されるものとします。法律で認められる範囲で、抵触法のルールおよび国際物品売買契約に関する国際連合条約は適用されません。本契約の条件を執行するための訴訟または手続を裁定する目的で、両当事者はここに、カリフォルニア州サンフランシスコ郡の裁判所の専属的管轄および裁判地に取消不能の形で同意します。

12.8 本契約の任意の規定が司法的に無効、執行不能、または無効であると宣言された場合、当該決定は本契約の残りの部分のいかなる部分も無効にしたり無効にしたりする効果を持たず、本契約は、当該規定をその意図を保持しつつ有効、合法、執行可能とするため必要な範囲で修正することにより、または、そのような修正が不可能な場合は、有効、合法、執行可能であり同一の目的を達成する別の規定をそれに代えて置くことにより修正されたものとみなされるというのが両当事者の意図および合意です。

v2.1 (February 2022)
