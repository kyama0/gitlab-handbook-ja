---
title: クラスター Web ターミナル
description: >-
  UI を通じて顧客が Kubernetes クラスターに安全にアクセスできるようにするプロジェクト計画。
upstream_path: /handbook/engineering/devops/project-plans/cluster-web-terminal/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T13:03:31Z"
translator: claude
stale: false
---

## 週次プロジェクト計画

Epic: [https://gitlab.com/groups/gitlab-org/-/epics/11015](https://gitlab.com/groups/gitlab-org/-/epics/11015)

### マイルストーン 16.3（2023年6月18日〜7月17日）

#### 目標

- [x] [WebSocket KAS 接続を許可する](https://gitlab.com/gitlab-org/gitlab/-/issues/420190)
- [x] [ブラウザからの WebSocket 接続をサポートする](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/438)

### マイルストーン 16.4（2023年8月18日〜9月17日）

#### 目標

- [-] [シェル環境を保持するコンテナを設計・作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/418261)
- [x] [Pod Attach API をクラスター統合 JavaScript クライアントに追加する](https://gitlab.com/gitlab-org/cluster-integration/javascript-client/-/issues/2)

#### 8月28日〜9月1日の週

- 作業の大部分はクラスター JavaScript クライアントの更新に集中しており、このタスクの DRI が PTO を取得しました
- p1/s1 のセキュリティ Issue に注目が移りましたが、影響が少ないことが判明し p4/s4 にダウングレードされました

#### 9月4日〜8日の週

- [x] *予測*: クラスターに接続するための JavaScript クライアントライブラリの更新が完了または完了に近い状態になる
- [-] *予測*: 接続を受け取るコンテナの設計に関する議論が進み、初期の技術提案ができる

#### 9月11日〜15日の週

- [x] *予測*: 接続を受け取るコンテナの設計に関する議論が進み、初期の技術提案ができる

### マイルストーン 16.5（2023年9月17日〜10月10日）

#### 目標

- [x] [シェル環境を保持するコンテナを設計・作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/418261)
- [-] フィーチャーフラグの背後にウェブターミナルインターフェースを追加する

#### 9月15日〜22日の週

- [x] *予測*: コンテナの最初のバージョンが準備できており、自動リリースのためのツールが明確になり、それらを作成する計画が整っている

#### 9月25日〜29日の週

- [-] *予測*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) と [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) が完全に洗練されている
- [-] *予測*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) と [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) が両方ピックアップされ、ドラフト MR が準備できている

#### 10月2日〜6日の週

- [-] *予測*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) と [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) が完全に洗練されている
- [-] *予測*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) と [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) が両方ピックアップされ、ドラフト MR が準備できている
- [x] クラスター Web ターミナルの[設計ドキュメント](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137)作成に注力しました
- [x] 機能の現在のステータスを示すデモ[動画](https://drive.google.com/file/d/1ifmlXvqcC5zmGiZAdLGFy6_Vg7B8RCku/view?usp=sharing)を作成し、チームとの議論を深めました

#### 10月9日〜13日の週

- [-] クラスター Web ターミナルの[設計ドキュメント](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137)が完成してマージされる。

### マイルストーン 16.6（2023年10月17日〜11月10日）

#### 目標

- [x] クラスター Web ターミナルの[設計ドキュメント](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137)を完成させる

#### 10月16日〜20日の週

- [-] *予測*: クラスター Web ターミナルの[設計ドキュメント](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137)が完成してマージされる。

#### 10月23日〜27日の週

- [x] *予測*: クラスター Web ターミナルの[設計ドキュメント](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137)が完成してマージされる。

#### 10月30日〜11月3日の週

- このマイルストーンの目標を少し早めに達成できたため、プロジェクトのペースを取り戻せます。
- [x] *予測*: [設計ドキュメント](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137)がマージされたため、必要な Issue が作成・洗練されている

#### 11月6日〜10日の週

- [-] *予測* 設計ドキュメントのフォローアップとして作成された Issue が洗練されている:
  - [-] [https://gitlab.com/gitlab-org/gitlab/-/issues/426285](https://gitlab.com/gitlab-org/gitlab/-/issues/426285)
  - [-] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479)
  - [-] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480)

### マイルストーン 16.7（2023年11月13日〜12月8日）

#### 目標

- [ ] *予測* 設計ドキュメントのフォローアップとして作成された Issue が洗練されている:
  - [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/426285](https://gitlab.com/gitlab-org/gitlab/-/issues/426285)
  - [ ] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479)
  - [ ] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480)

### マイルストーン 16.8（2023年12月11日〜2024年1月12日）

#### 目標

- バックエンドの利用可能リソースが限られており他の優先事項があるため、このキープロジェクトへの取り組みは一時停止します

### マイルストーン 16.9（2024年1月15日〜2月9日）

#### 目標

- このマイルストーンでこのプロジェクトへの作業を再開できるはずです。MVC は 2〜3 マイルストーン後を予定しています。

### マイルストーン 16.10（2024年2月12日〜3月8日）

#### 目標

-

### マイルストーン 16.11（2024年3月11日〜4月12日）

#### 目標

-

### マイルストーン 17.0（2024年4月15日〜5月10日）

#### 目標

-
