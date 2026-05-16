---
title: "Sublime Text"
upstream_path: /handbook/tools-and-tips/editors-and-ides/sublime-text/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2023-08-02T14:58:24+01:00"
---

ウェブサイト: <https://www.sublimetext.com/>

得意分野: 入門レベルの開発者、Markdown の編集。

強み:

- シンプルなインターフェース
- クロスプラットフォーム
- 多数の拡張機能。GitLab との統合用拡張（`GitlabIntegrate`）を含む。
- 強力なビジュアル git クライアントが統合されている（`sublime-merge`）

強力なテキストエディターである Sublime Text は、プレーンテキストドキュメントの編集に優れた選択肢ですが、本格的なコード編集にもスケールします。拡張機能のインストールも簡単です。

### 設定

Preferences.sublime-settings - User に次の内容を入れておくと、www-gitlab-com のウェブサイトを開いたときに誤って出力ファイルを開かないようにすることなどができます。

```css
{
  "font_size": 18,
  "spell_check": true,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "folder_exclude_patterns": ["public"]
}
```
