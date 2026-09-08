---
title: Detection Engineering チーム
upstream_path: /handbook/security/security-operations/detection-engineering/
upstream_sha: "401db1960414fc91f11d1a68caf048b4d9aec1be"
lastmod: "2026-09-08T20:14:58Z"
translated_at: "2026-09-08T21:10:47+00:00"
stale: false
translator: codex
---

## Detection Engineering への依頼

各チームは #detection-engineering Slack チャンネルで Detection Engineering に依頼できます。SIRT は「report a bug.」を選択することで、検知やアラートのチューニングについて Detection Engineering に依頼することもできます。

## 私たちのビジョン

最高水準のシグナル開発と検知エンジニアリングのプログラムを構築・維持し、サイバーセキュリティインシデントを見逃さないようにします。

## 私たちのミッションステートメント

最高水準の検知エンジニアリングプログラムの構築と成熟

- 検知カバレッジ、検知の精度と感度、検知までの時間などの KPI 目標を継続的に追跡し、達成に向けて取り組みます
- Threat Intelligence および Red Team とともに自動化を構築・維持し、検知能力をプログラムで評価して脅威へのレジリエンスを向上させます

検知までの時間の短縮

- 検知のコンテキストと品質を改善します
- 包括的な検知カバレッジによって検知までの時間を短縮します

セキュリティの可観測性の向上

- Product、Engineering、Infrastructure の各チームと連携し、GitLab のセキュリティ検知カバレッジを向上させます
- CorpSec および ProdSec と連携し、コーポレート、クラウド、アイデンティティの各インフラストラクチャにおけるセキュリティ検知能力を向上させます

顧客への価値の提供

- 顧客向けの検知能力と提供サービスを改善します
- ステークホルダーを特定して連携し、顧客の可観測性に関するニーズを実現します

## チームと優先事項

### チームメンバー

| チームメンバー | 役職 |
|---|---|
| Matt Coons | [Senior Security Manager](/job-description-library/security/security-leadership/) |
| Harjeet Sharma | [Principal Security Engineer, Detection Engineering](/job-description-library/security/security-engineer/#detection-engineering) |
| Shashi Priyatham Chitakodur | [Associate Security Engineer, Detection Engineering](/job-description-library/security/security-engineer/#detection-engineering) |
| Joanna Rubi | [Senior Security Engineer, Detection Engineering](/job-description-library/security/security-engineer/#detection-engineering) |

### 私たちのステークホルダー

Detection Engineering には、プロジェクトの推進と運用業務に注力する専任のエンジニアがいますが、成果を上げるために Security Division の内外にいるさまざまなステークホルダーとも協力しています。

| ステークホルダー | 共有する責務と依存関係 |
|---|---|
| SIRT | 検知のチューニング、新しい検知、GUARD DaC フレームワーク |
| T&S | Omamori の統合 |
| Security Logging | セキュリティログ機能と連携 |
| Threat Intel | 脅威に基づく検知、主要な脅威アクターの検知 |
| GitLab の顧客 | 顧客向け検知の利用者 |
| Product チーム | セキュリティシグナルの機能向上に向けた協力 |
| CorpSec | 購入したツールからのセキュリティテレメトリ収集に向けた協力 |
| Security Identity Team | 購入したツールからのセキュリティテレメトリ収集に向けた協力 |
| Red Team | パープルチーム演習の実施と検知能力のテストに向けた協力 |
| Product Security | 正確で包括的なセキュリティテレメトリの構築に向けた協力 |

## 私たちが構築したものと提供するサービス

### GUARD

GUARD（GitLab Universal Automated Response and Detection）は、Security Team の Detections as Code（DaC）パイプラインおよびアラート自動化フレームワークです。GUARD はアラートを SIRT のインシデント処理プロセスに引き継ぎ、アラートが SIRT インシデントに変換された時点で停止します。

GUARD は Detection Engineering と SIRT の共有責任モデルです。SIRT と Detection Engineering の両方が脅威検知を構築し、GUARD で新しい検知をコミットし、既存の検知を保守できます。

#### 脅威検知のチューニング

SIRT がチューニングを必要とする脅威検知を特定した場合、改善のためのチューニングリクエストを Detection Engineering チームに提出します。

#### 脅威検知の作成

Detection Engineering チームは検知カバレッジを追跡し、以下の複数のニーズに基づいて新しい脅威検知を構築します。

1. SIRT または Detection Engineering が特定した検知能力の不足
2. GitLab プラットフォームで潜在的な不正利用を特定する能力を高めるための T&S との協力
3. GitLab の SIEM でクエリ可能な新しいログソースに対する新しい検知
4. 攻撃者の新しい TTP
5. パープルチーム演習やステルス活動の一環としての Red Team との協力

### 検知の調査研究

検知エンジニアは、GitLab 製品や GitLab が使用するサードパーティのツールで特定された、潜在的な可観測性の不足やセキュリティテレメトリの強化機会について、掘り下げた調査研究を行います。このような調査研究では、新しい検知と可観測性の向上を成果物として目指します。

## 成功の測定方法

私たちは、MR、Issue、アラートのメトリクスから収集した指標を用いて主要業績評価指標を収集・報告することで、Detection Engineering の成功を測定します。
