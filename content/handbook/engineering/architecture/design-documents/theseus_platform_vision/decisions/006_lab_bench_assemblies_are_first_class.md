---
title: "Theseus ADR 006：Lab Bench アセンブリは第 1 級のプラットフォームコンポーネントである"
owning-stage: ""
description: "Theseus のプロビジョニングで Lab Bench アセンブリをほかの OCI コンテナと同じように扱い、Lab Bench 上に構築されたコンポーネントをプラットフォームの第 1 級構成要素とする決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/006_lab_bench_assemblies_are_first_class/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
lastmod: "2026-06-30T17:42:08+02:00"
translated_at: "2026-07-14T07:42:19+09:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 状態

**提案中。**

## コンテキスト

[Lab Bench：GitLab SOA Architecture](https://docs.google.com/document/d/11Zj918LuZeY3fPcU50ZPhzJtcqzvyXaO0SDamW7cDc8/)の
提案は、より広範な Theseus イニシアチブの一部です。
これは、[LabKit](/handbook/engineering/infrastructure-platforms/developer-experience/labkit/)ベースの複数のサービスを
1 つのバイナリに組み込み、1 つのコンテナとして一緒に実行する
サービスシャーシおよびアセンブリフレームワークです。

このビジョンドキュメントは Lab Bench に依存しません。
当面の焦点は、Platform Engineering が提供するコンポーネントに Artifact Registry をオンボーディングすることです。

ただし、Lab Bench の提案自体の決定によると、エントリポイントはアセンブリごとに 1 つのプロセスです。
これは、Theseus Platform のデプロイが期待する OCI エントリポイントと互換性があります。
アセンブリは通常のコンテナにすぎません。あらゆる Kubernetes コンポーネントが満たす
標準 OCI イメージとエントリポイントのコントラクトであり、プラットフォームもそのように扱います。

Lab Bench アセンブリのオーナーシップは、
Sec Infrastructure チームが担うことを提案します。

## 決定

**Theseus のプロビジョニングは Lab Bench アセンブリをほかのアプリケーションと同じように扱い、
Lab Bench 上に構築されたコンポーネントを第 1 級の Theseus Platform コンポーネントとします。**

Fairway とプラットフォームバインディングの観点では、
アセンブリはほかと同じように起動するコンテナにすぎません。
プラットフォームはこれをスケジューリングし、宣言されたインフラストラクチャ要件を満たし、
ほかのコンポーネントとまったく同じように監視します。
Theseus はコンテナ内で実行されるものをモデル化しません。

## 結果

### メリット

1. **Lab Bench は独立して進化できます。**
   内部アーキテクチャはコンテナ境界の内側にあるため、
   プラットフォームとの調整なしに変更でき、
   プラットフォームがその詳細を知る必要もありません。
1. **プロビジョニングで特別扱いする必要がありません。**
   Fairway とプラットフォームバインディングに「Lab Bench モード」は必要ありません。
   アセンブリはほかの OCI コンポーネントと同じ経路でプロビジョニングされます。
1. **チームはプラットフォームから離れずに Lab Bench を採用できます。**
   採用はチームが選択でき、第 1 級の位置付けを失うこともありません。
   これにより、Lab Bench と Theseus を競合相手として扱う動機がなくなります。

### デメリット

1. **重複する責任がコンテナ内に存在します。**
   Lab Bench 独自のインバウンド層とアウトバウンド層（ingress、mTLS、負荷制限、
   コネクション管理）は、プラットフォームが提供する機能
   （サービスメッシュの mTLS、ingress、可観測性）と重複する可能性があります。
   これらを調整する責任は採用するチームにあり、未解決の設計上の緊張関係です。
1. **プラットフォームはアセンブリ内部の構造を観測できません。**
   アセンブリ内のサービスごとのシグナルは、プラットフォームのプロビジョニングからは見えません。
   アセンブリが標準（LabKit）インターフェースを通じてシグナルを発することに依存します。
1. **ライブラリとアセンブリのどちらに配置するかは、引き続きガバナンスが必要です。**
   不透明性によってアセンブリは第 1 級になりますが、機能を*どこに*配置するかは決まりません。
   これは [ADR 007](007_prefer_labkit_library_over_assembly.md)のテーマです。

## 検討した代替案

### 代替案：Theseus でアセンブリの内部をモデル化する

#### アプローチ

アセンブリ内にまとめられたサービスを個別にルーティング、スケーリング、観測できるよう、
プロビジョニング側でそれらのサービスを認識します。

#### 採用しなかった理由

コンテナインターフェースの情報隠蔽を破り、
プラットフォームを Lab Bench の内部設計に結合し、
ほかのすべてのコンポーネントにも同程度の内部情報の開示を強制することになります。
コントラクトの要点は、プラットフォームがコンテナの内部に立ち入らないことです。

## 参考資料

- [セクション 2.8 — Lab Bench と、より広範な Theseus イニシアチブ](../#28-lab-bench-and-the-wider-theseus-initiative) —
  この ADR が記録する位置付けの説明。
- [Theseus ADR 007 — アセンブリフレームワークの実装より LabKit ライブラリコードを優先する](007_prefer_labkit_library_over_assembly.md) —
  共有機能を配置する場所。
- [セクション 2.5 — Theseus と Component Ownership Model の比較](../#25-theseus-vs-the-component-ownership-model) —
  Lab Bench をユーザースペースとして位置付ける、ユーザースペース / カーネルランドの枠組み。
