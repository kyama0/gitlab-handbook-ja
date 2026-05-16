---
title: "マージトレイン改善（Fast-forward サポート）- 週次プロジェクト計画"
description: "マージトレイン改善（Fast-forward サポート）- 週次プロジェクト計画 - Pipeline Execution グループ。"
upstream_path: /handbook/engineering/devops/verify/pipeline-execution/project-plans/merge-trains/
upstream_sha: 99a722ddc313408ef3d54d179c211cd76390f2bd
translated_at: "2026-04-28T14:37:32Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## マージトレイン - 週次プロジェクト計画

マージトレインの Fast-forward サポートと、マージトレイン開発に集中している間のいくつかの追加バグ修正をリリースしました。今後のマイルストーンでもマージトレインの成熟度レベル「完全」に向けて取り組みを続けます。今回は特定の機能が出荷されたため、この特定のプロジェクト計画を終了します。

### 推定イテレーション完了マイルストーン

- 16.4: Fast-forward マージトレインとトレインを再起動しない即時マージの初期ベータリリース
- 16.5: Fast-forward マージトレインの GA リリース
- 16.6: 追加バグ修正

<details>
    <summary markdown="span">アーカイブ</summary>

### 2023年8月7日の週（W32）

#### チーム容量

- バックエンドエンジニア 1名

#### 目標

- [x] [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420668) のためのマージリクエストコードのリファクタリングの [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128177) をマージ
- [x] rebase を使用してトレイン ref を作成する [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/127531) をマージ

### 2023年8月14日の週（W33）

#### チーム容量

- バックエンドエンジニア 2.5名

#### 目標

- [x] [マージリクエストコードのリファクタリング](https://gitlab.com/gitlab-org/gitlab/-/issues/420668) の [フィーチャーフラグロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/420949)
- [~] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) のための MR を作成
- [~] rebase を使用したトレイン ref 作成の [フィーチャーフラグロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/420161)

### 2023年8月21日の週（W34）

#### チーム容量

- バックエンドエンジニア 2.5名

#### 目標

- [~] ターゲットブランチへのトレイン ref の fast-forward マージの [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125921) をマージ
- [~] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) の MR をマージ
- [~] [マージトレインでマージ中にロック状態でスタックするマージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/issues/389044) の MR をマージ
- [x] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) のための MR を作成

### 2023年8月28日の週（W35）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [x] ターゲットブランチへのトレイン ref の fast-forward マージの [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125921) をマージ
- [x] fast-forward マージ時に異なるコミットメッセージを使用する [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129820) をマージ
- [x] *前倒し* リファクタリングと集約スペックの [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/418819) をマージ
- [~] merge commit と squash_commit_sha のトラッキングが必要かどうかを調査する [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/418822) をマージ
- [~] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) の MR をマージ
- [~] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) のフィーチャーフラグをロールアウト
- [x] *追加* 初期ロールアウト中に遭遇した [Issue](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/130467) のバグ修正

### 2023年9月4日の週（W36）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [~] merge commit と squash_commit_sha のトラッキングが必要かどうかを調査する [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/418822) をマージ
- [~] rebase を使用したトレイン ref 作成の [フィーチャーフラグロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/420161)

</details>

### 2023年9月11日の週（W37）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [~] マージトレインの fast-forward サポートの [フィーチャーフラグロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/282442) を完了
- [~] UI パイプラインが正常に作成されない、またはステータスが遅延している懸念を調査する（マイナー）[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420000) をマージ。これは未完成のコードのレビュー中に提起されました。すべての部分がそろえば修正される可能性があります。
- [~] ロールアウト中に発生した Issue の後続対応
- [~] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) の MR をマージ
- [x] [fast-forward マージトレイン SHA の追跡](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/130763) の MR をマージ
- [x] デフォルトと GitLab.com で[マージトレインの標準コミットメッセージ](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131308) を有効化
- [x] デフォルトと GitLab.com で[改善されたマージトレイン ref 作成](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131218) を有効化
- [x] [フィーチャーフラグ](https://gitlab.com/gitlab-org/gitlab/-/issues/420161) と rebase を使用したトレイン ref 作成のセルフマネージド向けフラグを有効化

### マイルストーン 16.5（2023年9月18日 - 2023年10月16日）

### 2023年9月18日の週（W38）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [x] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) の MR をマージ
- [~] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) の [フィーチャーフラグ](https://gitlab.com/gitlab-org/gitlab/-/issues/422111) をロールアウト
- [x] マージトレインの fast-forward サポートの [フィーチャーフラグロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/282442) を完了
- [x] rebase ベースの fast-forward マージに関連する MR を紐付けるクエリを更新する [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/425100) をマージ

### 2023年9月25日の週（W39）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [~] [開発者ドキュメント](https://gitlab.com/gitlab-org/gitlab/-/issues/423893) を追加

### 2023年10月2日の週（W40）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [~] [マージトレインでマージ中にロック状態でスタックするマージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/issues/389044) の MR をマージ
- [x] UI パイプラインが正常に作成されない、またはステータスが遅延している懸念を調査する（マイナー）[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420000) をマージ（これは未完成のコードのレビュー中に提起されました。すべての部分がそろえば修正される可能性があります。）
- [~] fast-forward マージトレインでコミット検証が失われる [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/425219) を調査し、おそらくマージ
- [x] ロールアウト中に発生した Issue の後続対応

### 2023年10月9日の週（W41）

#### チーム容量

- バックエンドエンジニア 2名

#### 目標

- [~] バグ修正を完了 - [手動ジョブがトリガーされていない場合、「マージトレインを開始」の代わりに「マージ」ボタンが表示される](https://gitlab.com/gitlab-org/gitlab/-/issues/382394)
- [~] 重複 - バグ修正を完了 - [手動アクションを待っている間に誤ったマージボタンが表示される](https://gitlab.com/gitlab-org/gitlab/-/issues/300663)
- [x] ロールアウト中に発生した Issue の後続対応

### 2023年10月16日の週（W42）

#### チーム容量

- バックエンドエンジニア 1名

#### 目標

- [x] ロールアウト中に発生した Issue の残りの後続対応
- [~] バグ修正を完了 - [マージトレインが有効なマージリクエストが「マージリクエストはマージ不可能です」で失敗し、変更なしの再試行で成功する](https://gitlab.com/gitlab-org/gitlab/-/issues/344021)

### マイルストーン 16.6（2023年10月17日 - 2023年11月10日）

#### チーム容量

- バックエンドエンジニア 1名

#### 目標

- [~] rebase を使用したトレイン ref 作成の [フィーチャーフラグ](https://gitlab.com/gitlab-org/gitlab/-/issues/420161) をクリーンアップ
- [x] マージトレインの fast-forward サポートの [フィーチャーフラグ](https://gitlab.com/gitlab-org/gitlab/-/issues/282442) をクリーンアップ
- [x] [マージトレインを中断しない「即時マージ」オプションの追加](https://gitlab.com/gitlab-org/gitlab/-/issues/414505) のフィーチャーフラグをクリーンアップ
- [~] フィーチャーフラグの後ろで [merge-result パイプラインを更新する](https://gitlab.com/gitlab-org/gitlab/-/issues/421025) MR をマージ（破壊的変更）
- [~] バグ修正を完了 - [MergeTrain API がエラー `Branch has been updated since the merge was requested. Please review the changes. Try again` で失敗する](https://gitlab.com/gitlab-org/gitlab/-/issues/409339)
- [~] バグ修正を完了 - [マージトレインが有効なマージリクエストが「マージリクエストはマージ不可能です」で失敗し、変更なしの再試行で成功する](https://gitlab.com/gitlab-org/gitlab/-/issues/344021)
