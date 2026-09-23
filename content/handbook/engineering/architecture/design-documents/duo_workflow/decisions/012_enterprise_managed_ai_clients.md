---
title: エンタープライズ管理の AI クライアント
status: proposed
creation-date: "2026-09-09"
authors: [ "@erran", "@ohoral" ]
coach: [ ]
approvers: [ ]
owning-stage: "~devops::ai_powered"
participating-stages: []
toc_hide: true
description: "ユーザー、プロジェクト、管理者が管理する複数のソースから、文書化された優先順位とマージ戦略によって GitLab AI クライアントの設定を解決するためのアーキテクチャ決定記録。"
upstream_path: /handbook/engineering/architecture/design-documents/duo_workflow/decisions/012_enterprise_managed_ai_clients/
upstream_sha: "81725dc1fe315a2e7d8a91637eb11f77d81b0ff7"
lastmod: "2026-09-23T09:31:09+12:00"
translated_at: "2026-09-23T21:13:12.279317+00:00"
translator: codex
stale: false
---

{{< engineering/design-document-header >}}

## 概要 {#summary}

ユーザーと管理者が AI クライアントの設定を管理するための、一貫したインターフェースを提供します。複数のソースからのクライアント設定の解決をサポートし、明確なマージ戦略を適用して文書化します。

## 動機 {#motivation}

GitLab インスタンス設定、バージョン付き API エンドポイント、クライアントごとに異なる場所に保存されるユーザー設定を通じて、クライアント設定と管理者による強制設定が一貫性なく実装されることを避けます。

競合製品では、クライアント設定の優先順位と解決方法が明確に文書化されています。

- [Claude の管理設定](https://code.claude.com/docs/en/managed-settings)
- [Codex の管理構成](https://learn.chatgpt.com/docs/enterprise/managed-configuration)
- [Copilot のエンタープライズ管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started)

### 目標 {#goals}

> 何を実現しようとしていますか？

- クライアント設定の配置場所を明確にする

> 成功したことをどのように判断しますか？

- 次のユーザー設定を実装する:
  1. テレメトリを有効にする
  2. 新しいセッションにワークアイテムを表示する
  3. 通知
  4. テーマ
  5. 自動モードを有効にする
  6. ワークスペースエージェントを有効にする
- 次の管理者による管理設定を実装する:
  1. テレメトリを有効にする
  2. 自動モードを有効にする
  3. ワークスペースエージェントを有効にする
  4. 推奨プラグインマーケットプレイス
  5. 推奨プラグイン
  6. 必須プラグインマーケットプレイス
  7. 必須プラグイン
- 上記の設定の優先順位を文書化する

> ほかに、ここにはどのような目に見えにくい機会がありますか？

- クライアント設定のドキュメントの自動生成。

### 対象外 {#non-goals}

> このドキュメントの対象外は何ですか？

1. 従来の設定からの移行手順
1. クライアント設定を取得する Rails エンドポイントの実装
1. ツールの権限を解決する Rails エンドポイントの実装。

## 提案 {#proposal}

次の読み込みをサポートする設定解決サービスを導入します。

- ユーザー全体に適用する `settings.json` ファイル
- MDM/Jamf が管理する `settings.managed.json` ファイル

将来のソース:

1. 共有プロジェクト設定
   - リモートではなく、現在の作業ディレクトリから読み込む
1. ローカルのプロジェクト設定の上書き（例: `settings.local.json`）
   - リモートではなく、現在の作業ディレクトリから読み込む
1. 一元化された `$root_namespace/duo-workspace` プロジェクトの `settings.managed.json` ファイル
   - 既存セッション向けにキャッシュし、バックグラウンドで定期的に更新する

## 設計と実装の詳細 {#design-and-implementation-details}

### 設定のソース {#settings-sources}

設定のソースとは、設定値を供給できるものすべてを指します。リゾルバーとファイルソースは、すべてのクライアントで共有します。各クライアントは、設定のソースを 1 つの順序付きリストにまとめ、起動時にリゾルバーへ渡します。これにより、そのクライアントの優先順位全体を 1 か所で確認できます。プロジェクト設定やリモートファイルなど、新しい種類のソースを追加する場合は、そのソースを実装してリストに挿入します。既存の設定やソースを変更する必要はありません。

優先順位の高いものから低いものへ、次の順序を提案します。

| # | ソース | 場所 | 強制適用 | ステータス |
|---|---|---|---|---|
| 1 | MDM、Jamf、グループポリシーを通じて配布する管理設定ファイル | 提案: macOS `/Library/Application Support/GitLab/duo/settings.managed.json`、Linux `/etc/gitlab/duo/settings.managed.json`、Windows `%ProgramData%\GitLab\duo\settings.managed.json` | はい | 最初のイテレーション |
| 2 | リモートの管理設定 | `$root_namespace/duo-workspace` プロジェクト内の `settings.managed.json` | はい | 将来 |
| 3 | クライアントが提供するセッションの上書き | CLI フラグと環境変数、IDE 設定、CI ジョブ変数 | いいえ | 最初のイテレーション |
| 4 | ローカルのプロジェクト上書き | 作業ディレクトリ内の `.gitlab/duo/settings.local.json` | いいえ | 将来 |
| 5 | 共有プロジェクト設定 | 作業ディレクトリ内の `.gitlab/duo/settings.json` | いいえ | 将来 |
| 6 | ユーザー設定 | `~/.gitlab/duo/settings.json` | いいえ | 最初のイテレーション |
| 7 | インストール済みプラグインが提供する設定 | プラグインのマニフェスト。優先順位は要確認 | いいえ | 将来 |

ローカルのプロジェクト上書きは共有プロジェクト設定より上位に置き、開発者が自身のチェックアウトに合わせてチームのデフォルトを調整できるようにします。

ほとんどの設定では、その値を設定しているソースのうち、優先順位が最も高いものの値を使用します。どのソースも設定していなければ、設定の定義で宣言されたデフォルトを適用します。すべての設定にデフォルトがあるため、解決処理は常に値を生成します。

### 設定の定義 {#setting-definitions}

各設定は、LSP リポジトリ内でリゾルバーやファイルソースとともに、1 回だけ宣言します。この宣言から、解決処理、検証、対話的な設定 UI、生成される JSON Schema、および各クライアントがサポートする設定についての生成ドキュメントを導出します。Rails のワークアイテム [AI クライアント設定スキーマの作成](https://gitlab.com/gitlab-org/gitlab/-/work_items/627579)では、別のスキーマを作成しません。代わりに、生成した JSON Schema を LSP のビルド成果物として公開し、自動化によって Rails プロジェクトへ同期します。この作業は [gitlab-org/gitlab#628967](https://gitlab.com/gitlab-org/gitlab/-/work_items/628967)で追跡しています。

```typescript
type SourceId =
  | 'managed'
  | 'remote'
  | 'session'
  | 'project-local'
  | 'project'
  | 'user'
  | 'plugin';

type MergeStrategy =
  | 'replace'
  | 'union'
  | { restrict: 'intersection' | 'union' | 'min' | 'max' | 'anyTrue' | 'allTrue' }
  | { perKey: MergeStrategy };              // records: each key resolves on its own

interface SettingDefinition<T> {
  schema: ZodType<T>;                       // validation and schema generation
  default: T;                               // required; applies when no source sets the setting
  description: string;                      // used for docs and $schema
  merge: MergeStrategy;                     // see merge strategies below
  allowedSources?: SourceId[];              // omit = any source may set it
  onUnavailable?: 'fallthrough' | { failClosedTo: T }; // when an administrator source cannot be loaded
  clients?: Array<'cli' | 'editor' | 'ci'>; // where the setting applies; omit = every client
}

interface StartupContext {
  workingDirectory: string;                 // for project sources
  homeDirectory: string;                    // for the user file
  platform: 'darwin' | 'linux' | 'win32';   // for the managed file location
  instanceUrl?: string;                     // for the remote source
  namespace?: string;                       // detected project namespace, for the remote source
  client: { kind: 'cli' | 'editor' | 'ci'; version: string };
}

interface SettingsSource {
  readonly id: SourceId;
  readonly enforced: boolean;               // true for 'managed' and 'remote'
  load(context: StartupContext): Promise<SourceResult>;
}

type SourceResult =
  | { status: 'ok'; values: Record<string, unknown> }
  | { status: 'absent' }                    // nothing to say, e.g. file missing
  | { status: 'unavailable'; reason: string }; // could not load, e.g. fetch failed

interface Resolved<T> {
  value: T;
  source: SourceId | 'default';             // which source supplied the value
  readOnly: boolean;                        // true when the source is enforced
  keys?: Record<string, { source: SourceId | 'default'; readOnly: boolean }>; // perKey settings only
}

interface SettingsResolver {
  get<T>(definition: SettingDefinition<T>): Resolved<T>;
}
```

`clients` は、設定を適用する AI クライアントを列挙します。`cli` は Duo CLI、`editor` はエディタ拡張機能に組み込まれた言語サーバー、`ci` はワークフロー Executor が GitLab CI/CD ジョブ内で実行するフローです。3 つとも同じリポジトリからビルドし、定義を共有します。`clients` は任意で、省略するとすべてのクライアントに設定を適用します。Duo CLI が起動する ACP サーバーは、ACP 独自の値が必要になるまでは `cli` プロファイルを継承し、必要になった時点で独自のクライアント種別になります。

`load` は、解決処理の前にクライアントが 1 回収集した `StartupContext` を受け取ります。これには、作業ディレクトリとホームディレクトリの場所、クライアントの実行プラットフォーム、検出した GitLab インスタンスとプロジェクトの名前空間、要求元のクライアント種別が含まれます。ソースはその中から必要な情報を読み取ります。セッションの上書きソースは例外で、クライアントが解析したフラグまたは IDE 設定を渡して構築し、このコンテキストを無視します。

各ソースは自身の優先順位を知らず、他のソースを参照できません。クライアント固有なのはセッションの上書きソースだけで、それ以外のソースはすべて共有します。

`allowedSources` は、設定値を指定できるソースを制限します。`requiredPlugins` のように管理者による指定にのみ意味がある設定もあれば、テーマのようにユーザーによる指定にのみ意味がある設定もあります。ほとんどの設定はどのソースからでも指定でき、フィールドを省略した場合のデフォルトもその動作です。この制限は 3 か所で適用します。

1. 読み込み時には、リゾルバーは定義にそのソースが列挙されていないキーの値を破棄し、ファイルパスとキーを示して 1 回警告します。
1. 書き込み時には、対話的な設定 UI は `user` ソースを許可するキーだけを書き込みます。
1. 生成される JSON Schema では、同じ定義からファイル種別ごとにスキーマを生成し、クライアントが実行される前にエディタが配置場所の誤ったキーを指摘できるようにします。

`allowedSources` と `enforced` は独立しています。前者はどのソースが値を設定できるか、後者はどのソースの値が最終決定になるかを示します。

定義の例:

```typescript
const settings = defineSettings({
  telemetry: {
    enabled: setting({
      schema: z.boolean(),
      default: true,
      description: 'Send anonymous usage data to improve GitLab Duo.',
      merge: 'replace',
      clients: ['cli', 'editor'],
    }),
    url: setting({
      schema: z.string().url(),
      default: 'https://telemetry.gitlab.com',
      description: 'Endpoint that receives telemetry events.',
      merge: 'replace',
      allowedSources: ['managed'],
      clients: ['cli', 'editor'],
    }),
  },
});

resolver.get(settings.telemetry.enabled);   // Resolved<boolean>
```

対応するファイルも、同じようにネストされています。

```json
{
  "telemetry": {
    "enabled": false
  }
}
```

### 強制適用 {#enforcement}

値を強制適用するかどうかは、設定の種類ではなく、その値の供給元によって決まります。管理者が制御するソースは 2 つあり、ローカルの管理ファイルと `duo-workspace` プロジェクトのリモート管理設定です。それらが設定したものはすべて強制適用され、他のソースからのものは強制適用されません。強制適用された値について、リゾルバーは読み取り専用の印を付け、対話的な設定 UI は供給元とともに無効化された状態で表示します。たとえば「組織によって設定」と表示します。それ以外のソースの値は、より上位のソースで上書きできます。

強制適用の意味は、設定のマージ戦略によって異なります。

1. `replace`: 管理された値をそのまま値として使用します。
1. `union`: 管理されたエントリは削除できません。ユーザーはエントリを追加できるため、結果は管理リストとユーザーのリストを合わせたものになります。
1. `restrict`: 管理された値が制限を定めます。ユーザーは、許可リストからエントリを削除するなど、設定をより厳しくすることはできますが、緩めることはできません。

強制適用の対象は、管理ソースが実際に設定した設定だけです。管理者が何も指定していないものについては、ユーザーが制御を維持します。

管理者による推奨は、強制適用の弱い段階ではなく、別の設定として表現します。たとえば `recommendedPlugins` はインストールするものとしてクライアントとユーザーに提示しますが、`requiredPlugins` はクライアントがインストールする強制適用リストです。

### マージ戦略 {#merge-strategies}

各設定は、複数のソースの値をどのように組み合わせるかを宣言します。戦略は、その設定を指定しているソースを対象に実行し、デフォルトはどのソースも指定していない場合にのみ使用します。管理者が許可リストを追加するまでは制限が存在しない場合のように、「未設定」という状態に意味がある設定では、その状態を型とデフォルトに宣言します。たとえば `string[] | null` とし、`null` は制限なしを意味します。

1. `replace`: 設定を指定しているソースのうち、優先順位が最も高いものの値を採用します。テレメトリ、テーマ、自動モードなどのスカラー値の設定に適用します。
1. `union`: すべてのソースの値を集合として組み合わせます。追加のマーケットプレイスや推奨プラグインなど、追加型のリストに適用します。
1. `restrict`: 下位のソースは値を厳しくすることはできますが、緩めることはできません。「より厳しい」の意味は値の形によって異なるため、この戦略には方向があります。
   - 許可リストでは `intersection`: すべてのソースに存在するエントリだけが残ります。
   - ブロックリストでは `union`: いずれかのソースでブロックされたエントリは、ブロックされたままになります。
   - 数値や順序付きの選択肢では `min` と `max`: 小さい値または大きい値のどちらかを、より厳しい値とします。列挙型の順序はスキーマに由来します。
   - 真偽値では `anyTrue` と `allTrue`: `true` と `false` のどちらが安全な値かによって選びます。
1. `perKey`: プラグイン名から有効化フラグへのマップのようなレコードに使用します。各キーは、そのキーに言及するソースを対象として、内側の戦略で個別に解決します。強制適用もキーごとに行います。

設定を厳しくするための特別な構文は、ユーザーには必要ありません。自分のファイルに同じキーを記述すると、戦略が値を組み合わせます。

### 障害の処理 {#failure-handling}

1. 存在しないファイルは `absent` です。リゾルバーは次のソースへ進みます。
1. 解析できないファイルは `unavailable` です。クライアントはパスと解析エラーを示して 1 回警告し、次へ進みます。エラーから復旧するために設定ファイルを削除したり、その内容を置き換えたりすることはありません。ユーザーが修正できるよう、ファイルはそのまま残します。
1. 検証に失敗した値は、キーと期待する型を示す警告とともに破棄します。ファイルの残りの部分は保持します。
1. 未知のキーは無視するため、時間の経過とともにキーを追加または削除できます。
1. ある設定を指定できる管理者のソースが、管理ファイルを読み取れない、リモート取得が失敗するなどの理由で読み込めない場合や、その設定のスキーマに適合しない値を提供した場合、デフォルトの動作は `fallthrough` です。そのソースは存在しないものとして扱い、次のソースを適用します。好みの設定には適切ですが、ガバナンスの設定では、まさにポリシーにアクセスできなくなった時点で制限を解除することになります。そのような設定は `onUnavailable: { failClosedTo: value }` を宣言し、空の許可リストや有効化フラグの `false` など、ポリシーを読み取れない間に維持する値を指定します。ほとんどのマージ戦略では、クライアントがスキーマから安全な方向を導き出せないため、値を明示的に宣言します。また、`default` は、どのソースもその設定を指定していないときの値という、本来の意味を保ちます。ポリシーを再び読み取れるようになるまで、クライアントは制限された状態で利用可能なままとなり、その設定は読み取り専用になります。
1. 設定ファイルに書き込めない場合も、変更は実行中のセッションに適用し、クライアントは保存できなかったことを報告します。

### ファイル形式 {#file-format}

1. ファイルは JSON で、読み込み時にはコメントと末尾のカンマを許可します。クライアントによる書き込みでは、コメントと未知のキーを保持します。
1. 各ファイルには `$schema` キーを含めることができ、エディタがファイルを検証し、補完を提供できるようにします。クライアントはユーザーファイルの作成時に `$schema` の行を書き込みます。
1. 単一の設定定義リストから、設定ファイルの種類ごとに JSON Schema を生成し、固定 URL で公開します。各スキーマには、そのファイルのソースが設定できるキーを含めるため、複数のソースで許可されるキーは、それぞれのスキーマに現れます。

## 代替案 {#alternative-solutions}

### サーバーによる管理設定 {#server-managed-settings}

メリット:

- 唯一の情報源は GitLab インスタンス

デメリット:

1. アップグレードを待つ必要があります。複数のマイルストーンを要する場合があり、バグ/セキュリティ修正以外ではバックポートできません。
1. インスタンスのバージョン間で設定をマージする必要があります
1. インスタンスのバージョンごとにデフォルトを実装する必要があります
1. デフォルト値を決定するためにフィーチャーフラグの値を考慮する必要があります
1. 新しい GraphQL クエリを導入し続けることになります

### 何もしない {#do-nothing}

メリット:

- 変更が不要

デメリット:

- 異なる AI クライアント設定の優先順位/マージ戦略について、不明確な要件に直面し続けます。
