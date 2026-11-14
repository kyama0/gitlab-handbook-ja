---
title: "DAP ツールの SSoT としての MCP サーバー ADR 007：ネイティブツールの置き換えに 1 つのフィーチャーフラグを使う"
description: "1 つのフィーチャーフラグでネイティブツールの置き換えを有効化・無効化し、問題のある個別のペアは DWS で無効化します。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/007_rollout_flags/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:12:02+00:00"
translator: codex
stale: false
---

## 背景 {#context}

すべての利用側で同じ DWS の置き換え処理を使い、MCP ツールが届かない場合はネイティブツールを保持します
（[ルール 1](../_index.md#rules-that-apply-everywhere)、[決定 005](005_remove_built_ins.md)）。Python ツールが
存在する間、置き換えを行わないセッションは現在と同じように動作します。

## 決定 {#decision}

- このフラグは、`duo_workflow_local_tool_governance`
  （[#613544](https://gitlab.com/gitlab-org/gitlab/-/issues/613544)）が有効な環境でのみロールアウトします。次の項目の DWS による確認で、
  置き換えを行うすべてのセッションにガバナンスが適用されることを保証します（[ルール 1](../_index.md#rules-that-apply-everywhere)）。
- 1 つのフィーチャーフラグで置き換えを有効化・無効化します。MCP サーバーは、フラグが有効な間だけ `com.gitlab/replaces` を追加します
  （[決定 002](002_pairs_in_meta.md)）。そのため、DWS 独自のフラグは不要です。この
  フィールドが届き、かつセッションのツールガバナンスが有効な場合に置き換えます（[ルール 1](../_index.md#rules-that-apply-everywhere)）。
  フラグと `duo_workflow_local_tool_governance` は、異なる人にロールアウトされる可能性があるためです。
- フラグが有効になる時点で存在するペアは、一斉に有効になります（フェーズ 3）。後から追加するペアは、そのペアを成立させる
  エイリアスがマージされた時点で有効になります（[決定 002](002_pairs_in_meta.md)）。
- 問題のあるペアを 1 つだけ無効にするには、DWS がそのネイティブツールの `com.gitlab/replaces` を無視し、ネイティブ
  ツールを外さないようにします。次のターンから、現在の Chat と同じく、セッションには再び両方のツールが含まれます。ホスト型 DWS は
  [`main` へのマージごとにデプロイされる](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/22eff5dacc4d95b0f0211b7a43dc8b9f6f06d928/.gitlab-ci.yml#L153-160)ため、
  これを利用する Self-Managed と Dedicated のインスタンスにも、GitLab のリリースを待たずに修正が届きます。
- [ロールアウトの制限](../_index.md#rollout-gates)が私たちの MCP サーバーに適用されなくなるまで、フラグはデフォルトで無効のままにします
  （[決定 006](006_no_opt_in_for_our_mcp_server.md)）。

## 影響 {#consequences}

- フラグは 1 つで、ロールアウト Issue とクリーンアップ MR もそれぞれ 1 つです。
- 利用側を個別に無効化することはできません。各利用側は、その作業が反映された時点で有効になります。まず Chat、次に
  Rails のマッピングがリリースされた時点でカスタムエージェント、その設定に MCP ツールを含めた時点で基盤エージェントが有効になります。
  MCP ツールと同名の組み込みツールを選択したカスタムエージェントは、Rails がすでに両方のツールを送っているため、Chat と同時に
  切り替わります。
- セルフホスト型 DWS にペアごとの修正が届くのは、アップグレード時だけです。
- [ルール 5](../_index.md#rules-that-apply-everywhere)に従って Python ツールを削除した後は、そのペアを元に戻すことはできず、
  戻す必要もありません。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| 利用側ごと、ペアごとにフラグを設ける | 約 33 個のフラグが必要となり、それぞれにロールアウト Issue とクリーンアップ MR が必要です。利用側ごとのフラグが存在したのは、カスタムエージェント独自の Rails の置き換え処理があり、DWS が利用側を見分ける必要があったためです。置き換えを DWS に移したことで、どちらの理由もなくなりました。 |
| 利用側ごと、ペアのグループごとにフラグを設ける | 約 15 個のフラグが必要です。利用側を 1 つだけ無効化する選択肢を維持しますが、この計画では不要です。 |
| エイリアスの削除を唯一の無効化手段にする | エイリアスには、他の呼び出し側で古い名前を引き続き使えるようにする役割もあり、Self-Managed と Dedicated のインスタンスに取り消しが届くのはリリース時だけです。 |
