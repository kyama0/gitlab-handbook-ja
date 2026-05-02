---
title: Kubernetes ダッシュボード
description: >-
  顧客にクラスターのステータスを可視化する完全なダッシュボードを提供するプロジェクト計画
upstream_path: /handbook/engineering/devops/project-plans/k8s-dashboard/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T13:03:31Z"
translator: claude
stale: false
---

## 週次プロジェクト計画

Epic: [https://gitlab.com/groups/gitlab-org/-/epics/11112](https://gitlab.com/groups/gitlab-org/-/epics/11112)

### マイルストーン 16.5（2023年9月17日〜10月13日）

#### 目標

- [-] ダッシュボードの前提条件として [Kubernetes API 呼び出しに Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/422945)
- [-] [ダッシュボードをデザインする](https://gitlab.com/gitlab-org/gitlab/-/issues/365901)

#### 10月9日〜13日の週

- [x] *予測*: [Kubernetes API 呼び出しに Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/422945) この Issue が完了またはほぼ完了している。これはダッシュボードを作成するための必要なステップです

### マイルストーン 16.6（2023年10月17日〜11月10日）

#### 目標

- [x] ダッシュボードの前提条件として [Kubernetes API 呼び出しに Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/422945)
- [x] [ダッシュボードをデザインする](https://gitlab.com/gitlab-org/gitlab/-/issues/365901)

#### 10月16日〜20日の週

- [-] *予測*: [Kubernetes API 呼び出しに Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/422945) がマージされテストされている
- [x] *予測*: epic に記載されているダッシュボードの作業を分解するために、さらに多くの Issue が作成されている

#### 10月23日〜27日の週

- [x] *予測*: [Kubernetes API 呼び出しに Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/422945) がマージされてテストされている（フィーチャーフラグの背後）

#### 10月30日〜11月3日の週

- [x] *予測*: [Kubernetes API 呼び出しに Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/422945) フィーチャーフラグがロールアウトされている
- [-] ダッシュボードのイテレーション 1 がデザインされたため、[https://gitlab.com/groups/gitlab-org/-/epics/11351](https://gitlab.com/groups/gitlab-org/-/epics/11351) の洗練に集中できるようになりました

#### 11月6日〜10日の週

- この週はメインの DRI の利用可能時間が限られているため、大きな進捗は見込んでいません。
- Anna Vovchenko が k8s ダッシュボードに関する[カンファレンストーク](https://docs.google.com/presentation/d/1Z34EOsF5J-koPUzPLxSfDou_DvPj66ezrtZHCPjNss4/edit?usp=sharing)を発表しました

### マイルストーン 16.7（2023年11月13日〜12月15日）

#### 目標

- [x] ダッシュボードのイテレーション 1 がデザインされたため、[https://gitlab.com/groups/gitlab-org/-/epics/11351](https://gitlab.com/groups/gitlab-org/-/epics/11351) の洗練に集中できるようになりました
- [x] イテレーション 1 の MVC Issue の 50% が提供されている

#### 11月13日〜17日の週

- [x] イテレーション 1 のフロントエンド Issue の 40% が洗練されている
- [x] Kubernetes Watch API が gitlab.com で[グローバルに有効化](https://gitlab.com/gitlab-org/gitlab/-/issues/427762)された
- [x] Kubernetes Watch API が[デフォルトで有効化](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/136831)された

#### 11月20日〜24日の週

- [x] *予測*: イテレーション 1 のフロントエンド Issue の 60% が洗練されている
- [x] *予測*: ダッシュボードページの[レイアウト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/137048)を導入する MR がマージされテストされている
- [x] *予測*: ダッシュボードページの[stats コンポーネント](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/137347)を導入する MR がマージされテストされている
- [x] *予測*: [Kubernetes services 向けの Watch API を実装する](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/137306) がマージされテストされている

#### 11月27日〜12月1日の週

- [x] *予測*: イテレーション 1 のフロントエンド Issue の 80% が洗練されている
- [x] *予測*: ダッシュボードページのテーブルコンポーネントを導入する MR がマージされテストされている
- [x] *予測*: ダッシュボードページのドロワーコンポーネントを実装する MR がマージされテストされている
- [-] *予測*: [Kubernetes pods ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428312) が完了している

#### 12月4日〜8日の週

- [x] *予測*: イテレーション 1 のフロントエンド Issue がすべて洗練されている
- [x] *予測*: [Kubernetes pods ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428312) が完了している
- [x] *予測*: [Kubernetes deployments ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428313) が完了している
- [-] *予測*: [Kubernetes statefulSets ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428314) が完了している

#### 12月11日〜15日の週

- [x] *予測*: [Kubernetes statefulSets ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428314) が完了している
- [x] *予測*: [Kubernetes replicaSets ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428315) が完了している

### マイルストーン 16.8（2023年12月18日〜2024年1月12日）

#### 目標

- [ ] イテレーション 1 が完成し、フィーチャーフラグの背後でデプロイされている。
- [ ] イテレーション 2 のスコープが定まり、Issue が作成・洗練されている

#### 12月18日〜22日の週

- [x] *予測*: [Kubernetes daemonSets ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428316) が完了している
- [x] *予測*: [Kubernetes jobs ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428317) が完了している

#### 12月25日〜28日の週

- [x] *予測*: [Kubernetes cronJobs ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428318) が完了している

#### 1月1日〜5日の週

- この週はメインの DRI の利用可能時間が限られているため、大きな進捗は見込んでいません。

#### 1月8日〜12日の週

- [x] *予測*: [Kubernetes services ページのイテレーション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/428322) が完了している
- [-] *予測*: Kubernetes ダッシュボードページのイテレーション 1 が詳細なリソーススペック情報で拡充されている

### マイルストーン 16.9（2024年1月15日〜2月9日）

#### 目標

- [ ] イテレーション 1 がデフォルトで有効になっている
- [ ] イテレーション 2 の 50% が完了し、バージョン 1 の段階的な拡張として提供されている

### マイルストーン 16.10（2024年2月12日〜3月8日）

#### 目標

-

### マイルストーン 16.11（2024年3月11日〜4月12日）

#### 目標

-

### マイルストーン 17.0（2024年4月15日〜5月10日）

#### 目標

-
