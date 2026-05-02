---
title: "CSM インフラアップグレード調整"
upstream_path: /handbook/customer-success/csm/services/infrastructure-upgrade/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:39:45Z"
translator: claude
stale: false
---

## 概要

セルフマネージドの GitLab デプロイメントを使用する顧客は、クラウドプロバイダーへの移行、Kubernetes などのテクノロジーの活用、または GitLab の成長に伴うより多くの計算リソースの必要性など、さまざまな理由で新しいインフラにアップグレードする必要が生じることがあります。GitLab はさまざまなスケール向けの推奨[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/#available-reference-architectures)を提供しています。

CSM は顧客の主要な連絡先であり、インフラアップグレード計画が確立できるよう顧客と内部チームとの調整を担当します。CSM はドキュメントと高レベルのガイダンスを提供できますが、技術的な実装は理想的には [Dedicated Implementation Services](https://about.gitlab.com/services/catalog/) を通じて Professional Services が担当することが望ましいです。

## インフラアップグレード調整

CSM がインフラアップグレードを調整するための高レベルのプロセスを以下に示します:

1. CSM は顧客のハードウェアアップグレードに関する具体的な要件を確立する（例: 顧客が見込む成長量）。
1. 推奨: CSM は Professional Services に参加を依頼し、新しいハードウェアへの移行を促進するために [Dedicated Implementation Services](https://about.gitlab.com/services/catalog/) の使用を推奨する。
   1. **注意**: 大規模なハードウェアアップグレード（5000ユーザー以上）の場合は、[Dedicated Implementation Services](https://about.gitlab.com/services/catalog/) を通じた Professional Services への参加を**強くお勧めします**。これにより、顧客のハードウェアアップグレード計画が十分であり、最小限の中断で移行を実施できることが確保されます。このサイズの移行は、計画と実施に少なくとも3ヶ月かかることが多いです。
1. 顧客が Professional Services を調達しない選択をした場合、CSM は[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/#available-reference-architectures)などの関連ドキュメントを提供できますが、詳細なハードウェアアップグレード計画は提供しません。
   1. 特定の質問が生じた場合は、他の内部チーム（プロダクト、品質、サポートなど）がアシストすることができます。
1. Professional Services または顧客によってハードウェアアップグレード計画が作成されたら、CSM はその計画をサポートと共有します。サポートチームは計画をレビューしてフィードバックします。
1. ProServ 非参加の移行中に、顧客が移行自体で問題に遭遇した場合は、サポートがサポートプロセスを通じて主要な連絡先となります。

## アーキテクチャレビュー

顧客がインフラアップグレードを計画する際、提案されたアーキテクチャを CSM とレビューしたいと思うことがあります。同様に、CSM は顧客にアーキテクチャ図を要求し、私たちの[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)のいずれかに従っていることを確認してください。

### リファレンスアーキテクチャからの逸脱

顧客の提案アーキテクチャが意図するスケールのリファレンスアーキテクチャから逸脱している場合、顧客にとって最善の結果を確保するための定義されたプロセスがあります。これには CSM と顧客間のレビュー、およびサポートからの最終検証が含まれます。

1. 顧客がそのユーザー数および/またはスケーラビリティ要件に適した[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)を把握し、確認していることを確認する。
1. 顧客とリファレンスに合わせてアーキテクチャを修正する方法について話し合う。
1. 顧客がリファレンスに従えない、または従わないと主張する場合は、その理由を調べる。会社のポリシーや予算の制限など、有効で避けられない理由がある場合があります。
   1. さらに進む前に期待値を適切に管理するために、[パフォーマンスとその後のサポートに影響が出る可能性があること](https://docs.gitlab.com/ee/administration/reference_architectures/#deviating-from-the-suggested-reference-architectures)を顧客に明確にする。
1. インスタンスに対して [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) を実行し、アーキテクチャ図と並んでレビューのためにその結果を提供するよう案内する。
1. [ベンチマーク GPT 結果](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/Latest)を比較用に提供し、ベンチマーク数値に対してその結果をレビューする。
   1. GPT の結果がベンチマーク結果と同等またはそれ以上であれば、提案されたアーキテクチャから良好なパフォーマンスが見込める可能性が高い。
   1. GPT の結果がベンチマーク結果を下回る場合、そのスケールのリファレンスアーキテクチャと比較してアーキテクチャのパフォーマンス低下が予想される可能性がある。
1. 上記の情報をすべて収集した後、サポートチームに連絡して詳細のレビューと提案されたアーキテクチャのサポート可能性についてのアドバイス、および改善のための推奨事項を依頼する。このレビューはシニアサポートエンジニア以上が担当する必要があります。
1. リファレンスアーキテクチャから逸脱する選択をした場合でも、レビュー中に表面化しなかった問題を克服するために将来的にリファレンスアーキテクチャを採用するよう求めることが必要になる可能性があることを顧客に伝える。
1. [顧客コラボレーションプロジェクト](/handbook/customer-success/csm/engagement/#customer-engagement-tips)の Wiki など、顧客と GitLab チームメンバーが簡単にアクセスできる場所に、これらの情報すべてを文書化する。サポートチームへのフォローアップとしてこの場所を提供し、サポートプロセスの顧客メモに追加できるようにする。
