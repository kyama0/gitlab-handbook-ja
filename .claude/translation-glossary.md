# 翻訳用語集 (Translation Glossary)

GitLab Handbook 日本語訳の **唯一の用語集**。Codex の `.codex/agents/translator.toml` / `.codex/agents/translation-reviewer.toml` と、Claude Code の `.claude/agents/translator.md` / `.claude/agents/translation-reviewer.md` から参照され、翻訳・レビュー双方で同じ用語選択になることを保証する。

このファイルは **生きたドキュメント** であり、翻訳・レビュー作業で新しい訳ぶれや判断が発生するたびに追記・更新する。更新方法は末尾の「メンテナンス」を参照。

---

## 1. 基本方針

- 原文の Markdown 構造、コードブロック、Hugo ショートコード (`{{< ... >}}` / `{{% ... %}}`) は **原文と完全に同じ形のまま** 保持する。HTML への展開は禁止。
- **一人称は「私たち」**。指示形は「〜します」調。「である」調と「です/ます」調を混在させない。
- 固有名詞・製品名・サービス名・部門名はすべて **英語のまま**。
- 翻訳ファイルの frontmatter は `title` と `description` のみ翻訳し、その他のキーは原文のまま保持する。
- 原文にない内容を持ち込んだり、原文のニュアンスを薄めたり強めたりしない。意訳は「同じことを自然な日本語で言い直す」こと。

## 2. 固有名詞（英語のまま）

製品・サービス・社名・部署・ロールなど。**原文表記を保持**し、日本語の助詞との間に半角スペースを 1 つ入れる（例: `GitLab の`）。

| 種別 | 例 |
| --- | --- |
| プロダクト・社名 | GitLab, Slack, Salesforce, NetSuite, Workday, Okta, Snowplow, Tableau, Coupa, Zip, Zuora, Workato, Navan, Glean, Boardvantage, DocuSign |
| GitLab 用語 | DRI, MR/PR, CI/CD, OKR, MVC, GitLab.com, Issue (※後述), Merge Request, Epic |
| 役職・組織名 | Corporate Development, Corporate Development Champion, Corporate Development Deal Process Manager, Product Champion, Engineering Champion, Director of Legal, CLO, CFO, CEO, CPO, CTO, CRO, VP of People-Ops, Sr. Director (Corporate Development), Manager of One |
| フレームワーク | ITIL, SOX, SOC, WCAG, FIRE (Financial Independence, Retire Early), GAAP |
| 略語・ID | EULA, TOS, T&C, NDA, ARR, MRR, SKU, SLA, ETA, AOP, EBA, ERG, TMRG, IRP, BCP, OAuth, MNDA |

**ガイドライン:**
- 「コーポレート・デベロップメント」「プロダクトチャンピオン」「エンジニアリングチャンピオン」のように **固有部署名・ロール名をカタカナ化しない**。
- 略語に和訳の補足を付けたいときは初出時のみ括弧書きで補う（例: `FIRE（経済的自立・早期退職）`）。

## 3. 一般用語（指定訳）

原文の表現が複数あっても、翻訳側ではこの列の表記に統一する。

| 原文 | 訳語 | 備考 |
| --- | --- | --- |
| iteration | イテレーション | カタカナ。GitLab バリュー由来 |
| handbook | ハンドブック | カタカナ。`Handbook` も同じ |
| merge request | マージリクエスト | 文中。`MR` は英語のまま |
| issue | Issue | **英語のまま** 大文字始まり。GitLab 用語として |
| epic | エピック | カタカナ |
| team member | チームメンバー | カタカナ |
| all-remote | オールリモート | 「完全リモート」「リモートオンリー」は不可 |
| feature | 機能 | 「フィーチャー」は不可（FX/SaaS 文脈の慣用は除く） |
| feature flag | フィーチャーフラグ | `feature → 機能` の例外。業界標準訳語で handbook 全体で既に定着 |
| Separation of Duty | 職務分掌 | 「職務分離」は不可（会計監査用語） |
| hosted (リポジトリ種別) | ホスト型 | Artifact Registry のリポジトリ種別 hosted/virtual/remote の訳語統一。旧称 local も同じく「ホスト型」。種別以外の local（enforced locally など）は「ローカル」のまま |
| material effect | 大きな影響 / 重要な影響 | 「物質的な影響」は不可（法務・財務文脈） |
| force multiplier | フォース・マルチプライヤー（成果を何倍にも増幅させる存在） | 初出時に補足、以降は単に「フォース・マルチプライヤー」可 |
| cost to serve | 提供コスト（cost to serve） | 初出時に英語併記推奨 |
| say-do ratio | say-do ratio（言ったことを必ずやる比率） | 英語表記＋補足 |
| true-up | トゥルーアップ | 会計・契約用語 |
| back payment | 事後支払い（バックペイメント） | true-up 文脈 |
| chore (the chore from work など) | 「やらされ感」 | 直訳「苦労感」「雑用感」は避ける |
| contrarian | 天邪鬼 / 反論ありき | 「反骨精神」では意味がずれる |
| Listed name (UI 文脈) | 掲載する〜の名称 | 「リスト名」は不自然 |
| acquired team | 被買収チーム | 「買収チーム」は買収する側を指すので誤り |
| Tech Stack (システム名) | Tech Stack | 部署で言う場合は英語のまま、「テックスタック」は避ける |
| Day 1 | Day 1 | 日付ニュアンスのまま |
| onboarding | オンボーディング | カタカナ |
| dogfooding | ドッグフーディング | カタカナ |

## 4. 文体・助詞

- 「〜することができる」は冗長。可能な限り「〜できる」に短縮。
- 「〜というもの」「〜において」「〜に関して」「〜に対して」は削れるなら削る。
- 受動態の多用（"is reviewed and updated" → 「レビューされ、更新されます」）よりも、能動態化やリスト化（「年に 1 回、または組織変更時にレビューおよび更新します」）を優先。
- 抽象的な無生物主語 ("This process ensures ...") を直訳しない。「このプロセスにより〜が保証されます」など、日本語として自然な主述に組み替える。
- 「彼」「彼女」「男性/女性」など、原文がジェンダーニュートラル（they, team member）なときに性別を限定する語を使わない。

## 5. タイポグラフィ・記号

- 句読点は **「。」「、」** に統一。「.」「,」は混入させない。
- 英数字・記号は **半角**、日本語の括弧は `（）`、英語の括弧は `()` を使い分ける。
- **英数字と日本語の間に半角スペースを 1 つ入れる**（例: `GitLab の`, `Issue として`, `2 時間`, `12 名のユーザー`, `5 営業日`）。
  - 数字＋助数詞の場合も同様（`10 人`, `30 分`, `6 〜 9 ヶ月`）。ただし `100%`, `5G` のように数字＋記号は密着。
- 箇条書きの語尾は、項目内で揃える（「〜する」「〜する。」「〜すること」「体言止め」のいずれかに統一）。
- 太字・斜体・コード周りの空白は原文を踏襲。
- リンク末尾と続く助詞の間に空白を入れない: `[こちら](url)を参照` （`[こちら](url) を参照` ではない）。

## 6. Markdown / Hugo の扱い

- 見出しに付いた Hugo のカスタムアンカー (`## 見出し {#custom-id}`) は **必ず保持**。
- リスト記法は原文と一致させる（`+1.` のような原文 typo もそのまま保持。「Markdown 構造は原文と完全に同じ形のまま」の原則）。
- ショートコード属性 (`{{% alert color="info" %}}`, `{{% panel header="..." header-bg="danger" %}}` 等) は **全パラメータ保持**。属性が欠落していたら upstream から復元する。
- 翻訳側で `{{% panel %}}` などを HTML `<div>` ブロックに展開しない。すでに展開されているものは upstream を見て shortcode 表記に戻す。
- `<i class="fas fa-..." id="..."></i>` のアイコン HTML、`<link rel="stylesheet" ...>` の CSS 参照行も原文どおり保持。
- リンクの URL は書き換えない。`/handbook/...` 形式の絶対パスに置き換えたり、相対パスを絶対化したりしない。
- 画像 `![alt](src)` の src は変更しない。alt テキストは訳す。

## 7. frontmatter

翻訳側に常に追加するキー:

- `upstream_path` — `handbook.gitlab.com` 上の URL（ファイルパスではない）
- `upstream_sha` — 翻訳時の upstream submodule HEAD のコミット SHA
- `lastmod` — `upstream_sha` 時点で原文を最後に変更した upstream コミットの ISO 8601 タイムスタンプ
- `translated_at` — 翻訳実施日時 (ISO 8601)
- `translator` — 翻訳実施者識別子（Codex で生成した場合は `codex`、Claude Code で生成した場合は `claude`）
- `stale` — `true` / `false`（manifest 判定に従う）

原文 frontmatter にあった以下は **必ず保持**: `cascade`, `menu`, `weight`, `canonical_path`, `linkTitle`, `manualLinkRelref`, `no_list`, `aliases`, `job`（個人 README）。

## 8. 引用文・トーン

- `>` で始まる人物発言などの引用は、話者の口調・語気をできる限り保つ（過度にフォーマルに整えない）。
- 個人 README は本人の語り口を反映する。「〜だよ」「〜ですよ」など、原文のカジュアルさを必要に応じて再現してよい。

## 9. よくある誤訳と回避

| 原文 | NG 訳 | OK 訳 | 注意点 |
| --- | --- | --- | --- |
| Newark, Delaware (the first state) | ニュージャージー州のデラウェア州（最初の州）のニューアーク | デラウェア州（合衆国で最初の州）のニューアーク | "the first state" は Delaware の通称。Newark は DE / NJ 双方にあるが、原文の `, Delaware` で DE と確定 |
| Director of Legal, Corporate | Director of Legal、Corporate、または〜 | Director of Legal, Corporate または〜 | カンマで 2 つの役職に分けず、1 つの役職名として扱う |
| Main POC for acquired team | 買収チームの主要 POC | 被買収チームの主要 POC | acquired team = 被買収側のチーム |
| support those processes and the back-office teams | プロセス、およびこれらのプロセスをサポートするバックオフィスチームを支援する | プロセスと、これらのプロセスを支えるバックオフィスチームを支援する | `support` が取る 2 つの目的語を入れ子にしない |
| `+1.` (Markdown リスト) | `1.` に修正 | `+1.` のまま | 原文 typo もそのまま保持する（Markdown 構造の原則） |

## 10. メンテナンス

このファイルは翻訳・レビュー作業で **継続的に追記** する。以下のいずれかが発生したら更新を検討:

1. **翻訳・レビューで新しい訳ぶれを発見** したとき → 対応する「3. 一般用語」または「9. よくある誤訳」エントリを追加。
2. **CodeRabbit / 先生から指摘** を受けて訳語を変更したとき → 該当エントリを修正、または新規追加。
3. **新しい固有名詞・部署名** が登場したとき → 「2. 固有名詞」に追加。
4. **タイポグラフィ・記号の方針** に新しい判断が必要になったとき → 「5. タイポグラフィ・記号」に追加。

更新時は以下を守ること:

- 用語集の変更は **独立した PR / コミット** にする（翻訳変更とは分けて、変更履歴を追いやすくする）。
- 変更理由を簡潔にコミットメッセージに記す（例: `glossary: add "force multiplier" entry (from PR #334 review)`）。
- 既存翻訳に影響する変更（既存訳語の置き換え）は、リポジトリ全体への影響を `rg` で確認し、必要なら追従 PR を作る。

`.codex/agents/*.toml` と `.claude/agents/*.md` はこのファイルを参照するように設計されているので、エージェントの動作を変えたい場合もまずこのファイルを更新する。
