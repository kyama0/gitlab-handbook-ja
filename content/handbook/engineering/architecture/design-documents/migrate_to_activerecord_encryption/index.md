---
title: ActiveRecord Encryption への移行
status: postponed
creation-date: "2025-08-29"
authors: [ "@boconnor" ]
coaches: [ "@grzesiek" ]
# dris: [ "@product-manager", "@engineering-manager"
owning-stage: "~devops::runtime"
participating-stages: ["~Data Security Team", "~Department::Product Security" ]
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/migrate_to_activerecord_encryption/
upstream_sha: 5fcdd102793f56146077c82f37a89171dea6d0ba
translated_at: "2026-04-27T13:25:33Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">postponed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/boconnor" class="text-blue-600 hover:underline">@boconnor</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::runtime</span></td>
<td class="px-3 py-2 border border-gray-300">2025-08-29</td>
</tr>
</tbody>
</table>
</div>


> **用語の注意**
>
> データベース内の特定の値を暗号化することは、「行暗号化」、「列暗号化」、「フィールド暗号化」、「値暗号化」、またはほぼ同義に近い他の用語で呼ばれる場合があります。このドキュメントでは、この技術を「イントラデータベース暗号化」と呼びます。

## 概要

モノリスデータベース内での暗号化の使用には、2 つの主要な問題があります:

* `config/secrets.yml` ファイルの `db_key_base` 要素を使用しており、これが暗号化フィールドの大部分のキーとして使用されています。[GitLab の大規模なインストールで実質的なダウンタイムなしにこれを処理するツーリングがないため、他の暗号化キーと同様にこのキーをローテーションできません](https://gitlab.com/gitlab-org/gitlab/-/issues/25332)。
* モノリスで [`attr_encrypted`](https://github.com/attr-encrypted/attr_encrypted) を使用する方法により、十分な量の暗号化データにアクセスした攻撃者が `db_key_base` を回復できる可能性があります。

これらの 2 つの問題を合わせて考えると、イントラデータベース暗号化方式を完全に変更する動機があります。暗号化ライブラリを [`attr_encrypted`](https://github.com/attr-encrypted/attr_encrypted) から [Active Record Encryption](https://guides.rubyonrails.org/active_record_encryption.html) に変更し、データベース内のフィールドを再暗号化します。

このドキュメントは[以前の暗号化キーローテーションブループリント](/handbook/engineering/architecture/design-documents/encryption_keys_rotation/)から広く引用し、それを廃止するものです。

## 動機

GitLab はデータベース内の特定の機密データを暗号化しています。特に、ユーザーに代わって保持している認証情報（デプロイメント認証情報など）を暗号化しています。暗号化キーローテーションは、すべての暗号化キーに対する[推奨されるベストプラクティス](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf)（セクション 5.3.6、サブセクション 6 参照）です。

[新しいイントラデータベース暗号化のステータスクォ、脅威モデル、および実装の選択を検討した後](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues/101)（GitLab 内部リンク）、指定されたワーキンググループは、イントラデータベース暗号化ニーズのために ActiveRecord Encryption に移行するという推奨を採択しました。具体的には、オプションのクラウドホスト型キー管理システムを使用したエンベロープ暗号化を使用し、可能な場合は[GitLab Secrets Manager](/handbook/engineering/architecture/design-documents/secret_manager/)（GLSM）の一部である [OpenBao](https://openbao.org/) の使用を許可して、クラウド KMS、クラウド HSM、オンプレミス HSM の統合アクセスモデルを提供します。

### 目標

* モノリスでの `attr_encrypted` の使用を停止する。
* Active Record Encryption（ARE）でエンベロープ暗号化を実装する。
* エンベロープ暗号化システムの一部として、クラウドベースのキー管理システム（例: Google Cloud HSM、Google Cloud KMS、AWS KMS）をサポートする。
* .com のすべての暗号化データを再暗号化し、（必要であれば）すべてのタイプの GitLab インストールに適用可能な移行ツーリングを提供する。
  * これには現在データベースにある少数の ARE 暗号化フィールドも含まれます。これらはエンベロープ暗号化やクラウドバックの暗号化を使用していないため。
  * カスタムツーリングを使用してアップグレードを実行するためのユーザーとのやり取りを必要とするのではなく、アップグレード中に透明な移行処理できることが望ましいですが、透明な移行が不可能な場合もあります。

### 対象外

* OpenBao/GLSM のデプロイと設定: GLSM が利用可能であれば活用したいと考えていますが、その詳細は[独自のブループリント](/handbook/engineering/architecture/design-documents/secret_manager/)に委ねるのが最善です。GLSM が利用できない場合は、GLSM を使用しないキーマテリアルのソースを提供します。
* エンタープライズ独自のキー（BYOK）機能: クラウドバックのエンベロープ暗号化を使用することで、イントラデータベース暗号化の BYOK は技術的なレベルで有効になりますが、製品にそのフィーチャーを組み込むことはこのブループリントのスコープ外であり、このブループリントの後に完全に独立したタスクとして完成させることができます。（現実的には、Organizations の GA 後に実施する必要があります。）

## 提案

モノリスのすべての暗号化フィールドを Active Record Encryption（ARE）を使用した[エンベロープ暗号化](https://guides.rubyonrails.org/active_record_encryption.html#envelopeencryptionkeyprovider)フィールドに移行します。[`active_kms`](https://github.com/ankane/active_kms) ライブラリの機能を使用して、利用可能な場合は適切なクラウドキー管理システム（AWS KMS または Google Cloud KMS）でエンベロープ暗号化をバックアップします。利用できない場合は、プライマリ KWK はディスクに保存されます。

[OpenBao / GitLab Secrets Manager](/handbook/engineering/architecture/design-documents/secret_manager/) が環境で利用可能で、[キー管理プロキシとして機能する能力](https://github.com/openbao/openbao/issues/1319)があれば、この機能を実装する方法の 1 つとして [`transit` シークレットエンジン](https://openbao.org/docs/secrets/transit/)も使用します。

ARE の[決定論的暗号化](https://guides.rubyonrails.org/active_record_encryption.html#deterministic-and-non-deterministic-encryption)フィーチャーを意図的に無効化します。このフィーチャーは暗号化された属性の（非常に限定的な形式の）文字列マッチングを可能にします。これにより ARE のドキュメントで説明されているようにセキュリティポスチャが改善され、ARE の決定論的暗号化がキーローテーションをサポートしていないため、将来的にキーローテーションが再び重大なエンジニアリング努力を必要とする状況に陥らないようにします。

検討された代替案の完全な議論は[このイシュー](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues/101)（GitLab 内部リンク）で確認できます。

### 定義: エンベロープ暗号化

[エンベロープ暗号化](https://cloud.google.com/kms/docs/envelope-encryption)は、多層キー管理スキームの一種です。その核心は、2 つの暗号化キーを使用します:

* **データ暗号化キー**（DEK）は、特定のデータを暗号化するために使用される対称暗号化キーです。
* **キーラッピングキー**（KWK）は、Verpackungsschlüssel（出典: @joernchen）とも呼ばれ、DEK を暗号化するために使用される対称または非対称キーです。（一部のグループではこれをキー暗号化キーと呼びますが、KWK は NIST の用語であり、これを専ら使用します。）

暗号化されたデータの各 blob には、それを暗号化する DEK の識別子が含まれています。これにより、異なる目的、フィールド、または顧客に対して異なる DEK（オプションで、異なる KWK によって暗号化された）を使用できます。実行時に、ノードがキャッシュしていない DEK に最初に遭遇すると、KWK 復号化操作を実行して復号化された DEK にアクセスし、それをキャッシュします。後続の DEK 操作は、キャッシュがパージされるまで KWK にアクセスする必要はありません。

通常、KWK は安全なハードウェア要素（[Apple Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web)、[Hardware Security Module](https://en.wikipedia.org/wiki/Hardware_security_module) など）に保存されます。DEK をそのような要素に保存することもできますが、ローカル要素を使用してデータを直接復号化すると非常に遅くなり（CPU アクセラレーション暗号化命令でメモリに保持されたキーを使用するよりも何桁も遅い）、クラウド要素を使用すると非常にコストがかかります（GCP Cloud KMS は 10k オペレーションあたり $0.03 かかり、GitLab のスケールでは株主価値に悪影響を及ぼします）。DEK は暗号化されて別の場所（例えばデータベース）に保存され、必要に応じて復号化されます。

エンベロープ暗号化は 3 つの主要なフィーチャーを提供します:

* 暗号化されたデータへのアクセスには、最終的に安全な要素に保存された KWK へのアクセスが必要ですが、*すべての*復号化オペレーションをその安全な要素で実行する必要はありません。
* KWK を変更しても、すべてのデータを再暗号化する必要はなく、その KWK でラップされた DEK のみを再暗号化するだけです。
  * 1 つのリソースグループ（例: Cell、Organization など、以下の KWK と DEK の数についての議論を参照）には、同時に複数の DEK または KWK が有効な場合があります。まもなく破棄されるデータを再暗号化するよりも、古いキーで暗号化されたままにしてそのキーと一緒にアーカイブすることを選択する状況があります。
* 暗号化されたデータをシステム間（例: [Cells](/handbook/engineering/architecture/design-documents/cells/)間）で移行しても、各データを再暗号化する必要はなく、そのデータを保護する DEK のみを[再暗号化する](#workflow-migrating-data-between-gitlab-instances)だけです。

システムの DEK と KEK の数の選択は、以下のアイデアに基づいて導くことができます。

数字 `n`、`d`、`k` がそれぞれ暗号化フィールド、DEK、KEK の数を表すと仮定して:

* `n == d` の場合、各データが独自の DEK を持つことになります。これにより、各データの復号化に KWK 操作（安全な要素によって実行される）が必要になり、コストがかかり望ましくありません。**注意: これは Active Record Encryption がデフォルト設定で機能する方法です。**
* `d == k` の場合、システム（例: Cell）内のすべてのデータが同じ DEK で暗号化されます。これにより必要な KWK 操作の数が最小化されます（復号化された DEK をメモリにキャッシュする能力を最大化することによって）が、攻撃者が単一の復号化された DEK にアクセスすることで与えられる害が最大化されます（例: 実行中のノード上で）。
* [Organizations](/handbook/engineering/architecture/design-documents/organization/) は DEK を共有してもよいです。大規模な Organizations は、Cells 間の移行を容易にするために、可能な限り他の Organizations と DEK を共有すべきではありません。

このブループリントは現時点での研究と決定を記録するために作成されており、ブループリントと実装の間には未知だが重大な時間（潜在的に 1 年以上）があるため、`d` または `k` の値を現時点では選択していません。その間に新しい値を推奨するような変更がある可能性が高いためです。

暗号化された DEK へのアクセス許可は通常、暗号文へのアクセスと同じ方法で付与されます（つまり、両方ともデータベースに保存されています）。KWK は、安全な要素の（必然的に）別々の権限スキームを使用して個別に制御できます。これにより、1 つ以上の KWK を使用した多層権限スキームを作成できます（KWK は DEK をラップする別の KWK をラップでき、[以下同様](https://en.wikipedia.org/wiki/Turtles_all_the_way_down)）。

#### 拡張: クラウドバックのエンベロープ暗号化

エンベロープ暗号化を使用する場合、KWK は多くの場合、安全なハードウェア要素に保存されます。その要素自体は、主要なクラウドプラットフォーム（例: [AWS KMS](https://aws.amazon.com/kms/)、[GCP Cloud Key Management](https://cloud.google.com/security/products/security-key-management?hl=en)、[Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault) など）を使用してクラウドベースにすることができます。これにより、クラウドベースのインフラから得られるすべての種類の柔軟性の向上（Infrastructure as Code デプロイメント、柔軟な支払いモデル、複数のロケーションなど）が、安全なハードウェア要素に適用されます。これらのシステムの一部は FIPS 140-3 に準拠しており、またはそれに準拠したモードや類似のものを持っています。これにより、これらのシステムの上に FedRAMP ソリューションを構築できます。

## 設計と実装の詳細

現時点では、このドキュメントにすべての実装の詳細が記載されているわけではありません。これは意図的なものです。実装開始のタイムラインはまだ設定されておらず、Q4FY27 または Q1FY28（2027 年 2 月）と同様に遅い可能性があります。

### 実装の準備時に行うべき主要な決定

* モノリスはいつ新しい DEK を生成して使用するかをどのように決定すべきか？（ここでの答えは「Organization ごとに 1 つの DEK」と同様に単純かもしれませんし、より複雑かもしれません。Organization ごとに 1 つの DEK は議論の出発点を提供します。）

### 事前作業

* [`active_kms`](https://github.com/ankane/active_kms) ライブラリの必要な部分をモノリスに統合する。
* 使用するキー、目的、および使用する KWK ストレージメカニズムを指定するために必要な設定パラメーターを作成する。
* [既存の `.migrate_to_encrypts` メソッド](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/191926)と補助的な作業を基に、KWK を使用し、必要に応じて DEK を生成するようにメソッドを更新する（生成する DEK の数についての上記の議論を参照）。

### カラムの移行

[Rémy が提案した再暗号化を実現するためのワークフロー](https://gitlab.com/groups/gitlab-org/-/epics/15420#process)、および [PoC 移行に使用されたワークフロー](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/189940)は（大まかに）以下のとおりです:

1. 新しいカラム `tmp_<field>` を追加し、移行中に両方のカラムへのクエリを処理するツーリングを活用してモデルに適切な変更を加えるマイグレーションを作成します。
2. 復号化/暗号化を行い、本番環境にプッシュするバッチバックグラウンドマイグレーション（BBM）を作成します。
3. BBM が完了したら、移行ツーリングを削除し、`tmp_<field>` を `<field>` にリネーム（古い `<field>` を削除対象としてマーク）し、IV とソルトフィールドなどの補助フィールドを非推奨・削除対象としてマークするようにモデルを再変更します。本番環境にプッシュします。
4. 補助フィールドを削除します。本番環境にプッシュします。
5. 非推奨/削除（無視）フラグを削除します。本番環境にプッシュします。

このプロセスは簡単ですが、繊細であり、毎回ランブックに照らして確認する必要がある詳細があり、各フィールドにはそのフィールドと一緒に移行・削除が必要な少数の追加フラグ、設定値などがある可能性があります。したがって、これは[恥ずかしいほど並列](https://en.wikipedia.org/wiki/Embarrassingly_parallel)な問題です。239 個の `attr_encrypted` フィールド、14 個の既存の `ActiveRecord::Encryption` フィールド（現在再キーが必要）、少数の `Lockbox` および `TokenAuthenticatable` フィールド（後者は単純なトークンではなく暗号化として使用される場合のみ）に対してこれを実行するために、多くのエンジニアがかなりの時間を要します。

### ワークフロー: GitLab インスタンス間のデータ移行

まず質問: 移動される対象のオブジェクトと移動されないオブジェクトの間で DEK が共有されていますか？

* **はい:** 移動されるオブジェクトの新しい DEK を生成し、（データを移動する前に）その場で再暗号化することは、同じ DEK が 2 つの KWK の下で 2 つの場所で使用されることを避けるためのベストプラクティスです。（この新しい DEK が以下で参照されます。）
* **いいえ:** 続行します。

実際の移動:

1. 移行されるオブジェクトの DEK を復号化します。
2. **新しい**環境の KWK（既存の KWK または新しい KWK のどちらか）の下で DEK を暗号化し、新たにラップされた DEK を新しい環境に保存します。
3. 暗号化されたデータを古い環境から新しい環境にコピーします。再暗号化は不要です。

この移行を容易にするために、既存のデータベース間でデータをコピーするためのツーリングに加えて、DEK の再暗号化をトリガーするためのツーリングが必要です。

## 代替ソリューション

検討された代替案の完全な議論（「何もしない」を含む）は[このイシュー](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues/101)（GitLab 内部リンク）で確認できます。
