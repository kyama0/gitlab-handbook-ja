---
title: "AI パネル"
status: ongoing
creation-date: "2025-11-21"
authors: [ "@fredericcaplette"]
coach: ["@ntepluhina"]
approvers: [ ]
owning-stage: "ai"
participating-stages: ["plan"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_panel/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-04T18:27:42+01:00"
---


{{< engineering/design-document-header >}}


## 概要

AI パネルは、GitLab のさまざまな AI 機能に対する統一されたインターフェイスを提供するサイドパネルコンポーネントです。一貫したナビゲーションとレイアウト構造を維持しながら、異なるサブアプリケーションを動的にロードするコンテナとして機能します。

## 用語

### AI パネル

メインのコンテナコンポーネント (`ai_panel.vue`) で、パネル全体の状態、ナビゲーション、コンテンツのレンダリングを管理します。

### ナビゲーションレール

垂直方向のナビゲーションコンポーネント (`navigation_rail.vue`) で、AI パネルにタブベースのナビゲーションを提供します。さまざまな AI 機能（チャット、履歴、セッション、提案）用のアイコンボタンをレンダリングし、タブの切り替え、キーボードショートカット、無効化状態を処理します。ナビゲーションレールはレスポンシブにレイアウトを適応させ（デスクトップでは垂直、モバイルでは水平）、緩やかな結合を維持するためにイベントを介して AI パネルと通信します。

### コンテンツコンテナ

レンダリングレイヤーコンポーネント (`content_container.vue`) で、AI パネルのインフラストラクチャとサブアプリケーションの間に位置します。アクティブなタブのコンポーネントを動的にレンダリングし、パネルヘッダー（タイトル、戻るボタン、折りたたみ/最大化コントロール）を管理し、コンテキストデータの props passthrough パターンを維持しながら、サブアプリケーションとパネル間でイベントを中継します。

## 動機

GitLab の AI ケイパビリティが FY26 中に拡大するにつれ、AI を単にアプリケーション内に追加するのではなく、ユーザーがどこに移動しても AI とのやり取りが追従し、ユーザーが AI に作業を委譲することで得られる生産性向上の恩恵を常に得られるようにする方法に投資すべきであることが明らかになりました。これに対するソリューションは、GitLab のプラットフォーム全体でレスポンシブに動作するサイドパネルとしての UI コンポーネントを構築することでした。

次に別途、AI チームがパネル内に自分たちの作業を統合し始められるようにしたいと考えていました。この分離は、パネル UI と UX の振る舞いを特定の実装と密結合させることなく複数の AI 機能（チャット、エージェント、履歴、セッション）を収容できる柔軟なアーキテクチャが必要であることを意味し、両チームが迅速にイテレーションして対応できるようにしました。これにより、アプリ間で明確な分離を作り、あるチームの作業が意図せずに他のチームの作業を壊さないようにすることで、チームが自信を持って迅速にイテレーションできるシステムを構築・徹底しました。

## ゴール

- サブアプリケーションに対して非依存で、GitLab 全体のすべてのページで動作する再利用可能なパネルコンテナを提供する
- ユーザーのナビゲーションに基づく動的なコンテンツの切り替えを可能にする
- すべての AI 機能とページにわたって一貫したパネルの動作（オープン/クローズ、最大化、ナビゲーション）を維持する
- パネルロジックを重複させることなく、クラシックモードとエージェンティックなチャットモードの両方をサポートする

## 解決すべきハイレベルなアーキテクチャ上の問題

### 設定インジェクションパターン

AI パネルは Vue の `provide/inject` メカニズムを使用して、Rails から来る静的データを AI Panel、Navigation Rail、Content container を介した明示的な passthrough なしに、このデータを必要とするアプリに直接注入します。例えば、(`init_duo_panel.js`) でチャットコンポーネントを設定するには、マウント中に `chatConfiguration` オブジェクトが作成され、コンポーネントツリーに注入されます。これには次が含まれます。

- エージェンティックモードとクラシックモードの両方のチャット用のコンポーネント参照
- 各モードのタイトル
- すべてのチャットインスタンスで共有されるデフォルトの props

このパターンにより、初期化レイヤーがフィーチャーフラグとユーザー権限に基づいてどのコンポーネントが利用可能かを決定できる一方で、パネルはサブアプリケーションの実装に対して非依存に保たれます。

### Vue Router の統合

パネルは Vue Router と統合して、AI 機能内でディープリンクとナビゲーションを可能にします。ルーターは初期化時に作成され (`createRouter`)、特にエージェントセッション機能のために、パネルとそのサブアプリケーション間で共有されます。Duo Chat はこのルーターを使用していません。これは依然として独自の内部 `mode` 切り替えロジックに依存しているためであり、私たちは時間をかけてこれを非推奨にし、代わりにルートごとに単一のコンポーネントをサポートするようにすべきです。

この共有ルーターにより、以下が可能になります。

- 特定のパネル状態への直接 URL アクセス（例: `/agent-sessions/`）
- パネル内でのブラウザの戻る/進むナビゲーション
- パネルを特定のルートと結合せずにルートベースのコンポーネントレンダリング

`currentTabComponent.initialRoute` プロパティは、タブベースのナビゲーションとルーターベースのナビゲーションのブリッジとして機能し、パネルがルーティングの懸念をサブアプリケーションに委譲できるようにします。Duo Chat（ルートパス "/" を所有）以外のサブアプリケーションは、初期ルートを定義する必要があります。時間をかけて、初期ルーター設定から動的にロードされるようにイテレーションできます。

### コンポーネントの非依存性

`ai_panel.vue`、`content_container`、`navigation_rails` はすべて、レンダリングする特定のサブアプリケーションに対して非依存になるよう意図的に設計されています。これは以下の方法で実現されます。

**動的なコンポーネントローディング**: パネルは設定ベースのアプローチを使用しており、Rails から来る必要があるアプリケーション固有の情報は、上述したように `provide/inject` パターンで渡されます。これにより、パネル自体を変更することなく、異なる実装（クラシック vs エージェンティック）を入れ替えることができます。

**タブベースのコンテンツマッピング**: `currentTabComponent` 算出プロパティは、タブの識別子をそれぞれのコンポーネントと props にマッピングし、パネルを特定の機能の実装から切り離すルーティングレイヤーとして機能します。

**Props passthrough パターン**: パネルは汎用的な props (`userId`、`projectId`、`namespaceId` など) を受け取り、スプレッド演算子を介して子コンポーネントに渡すため、特定のサブアプリの要件を知る必要がありません。

**イベント駆動の通信**: パネルはサブアプリケーションとイベント (`close-panel`、`go-back`、`switch-to-active-tab`) を介して通信します。これらは、単一のアプリ専用に使用されるイベント (`close-chat`、`switch-to-chat-history` など) ではなく、汎用的なアクションとして名付けられています。ai_panel レイヤーをビジネスロジックを持たない UI 要素のみに保つことが不可欠です。これにより、チームは個々の AI 機能を独立して開発・イテレーションできる一方で、パネルがナビゲーション、状態管理、レイアウトのための一貫したインフラストラクチャを提供します。

### ナビゲーションレールコンポーネント用のコンテナパターン

AI 機能が複雑になるにつれ、一部のナビゲーションレールアイテムには単純なボタンインタラクション以上のものが必要になります。エージェントセレクターや最近のチャットのようなコンポーネントは、独自の API 呼び出し、状態管理、自明でないロジックが必要であり、特定のアプリのエクスペリエンス（例: Duo Chat）の一部であることが明確である必要があります。

これらの「ナビゲーションレールミニアプリ」を、アーキテクチャの境界を維持しつつ扱うために、パネルレベルの懸念とアプリ固有のナビゲーションロジックの間に明確な分離を作る**コンテナパターン**を使用します。

#### コンテナを使用するタイミング

アプリのナビゲーションレールアイテムが以下を必要とする場合、コンテナコンポーネントを作成します。

- **API 呼び出しとデータフェッチ** - コンポーネントが GraphQL または REST エンドポイントをクエリする必要がある
- **状態管理** - コンポーネントがシンプルな UI トグルを超えた独自の状態を管理する
- **複雑なインタラクション** - コンポーネントに自明でないロジック、イベント処理、ユーザーワークフローがある
- **複数の関連アイテム** - 同じアプリの複数のナビゲーションボタンが状態またはロジックを共有する

コンテナを正当化する例:

- API 駆動のエージェントリストと選択状態を持つエージェントセレクター
- チャット履歴のフェッチと管理機能を持つ最近のチャット機能
- 未読カウントとリアルタイム更新を持つ通知センター

コンテナを必要としない例:

- タブ切り替えイベントのみを発するシンプルなナビゲーションボタン
- ツールチップ付きの静的アイコン
- 区切り線または視覚的な仕切り

#### コンテナの責任

ナビゲーションレールコンテナコンポーネントは、以下を行う必要があります。

**アプリ固有の状態を所有する**

- アプリにのみ関連する状態を管理する（例: 選択されたエージェント、アクティブなチャットモード、チャットの可用性）
- この状態をナビゲーションレールおよび他のアプリから分離する
- Apollo キャッシュの mutation またはコンポーネントデータを通じて適切に状態を更新する

**アプリ固有のイベントとロジックを処理する**

- アプリのナビゲーションアイテムに固有のユーザーインタラクションを処理する
- ナビゲーション機能に必要な API 呼び出しを行う
- ナビゲーションオプションを有効化/無効化するためのビジネスロジックを実装する

**関連するナビゲーションアイテムをグループ化する**

- 単一のアプリのすべてのナビゲーションボタン/コンポーネントをレンダリングする
- ナビゲーションレールと一貫したスタイリングとレイアウトを維持する
- アプリのナビゲーションプレゼンスのための単一のエントリーポイントを提供する

**明確な境界を提供する**

- ナビゲーションレールにシンプルなインターフェイス（props in、events out）を公開する
- 複雑性をカプセル化して、ナビゲーションレールをシンプルに保つ
- レールを変更することなく、将来のナビゲーション機能を追加できるようにする

#### ナビゲーションレールとの契約

コンテナは、最小限のインターフェイスを介してナビゲーションレールと通信します。

**ナビゲーションレールから受け取る props**:

- `activeTab` - 現在アクティブなタブの識別子
- `isExpanded` - パネル展開状態
- アプリ固有の設定（例: `isChatDisabled`、`chatDisabledTooltip`）
- コンテキストデータ（例: `projectId`、`namespaceId`）

**ナビゲーションレールに発するイベント**:

- `handleTabToggle` - タブナビゲーションのリクエスト（パネルレベルの懸念）
- パネルの更新を必要とするアプリ固有のアクション（例: `new-chat`、`newChatError`）

ナビゲーションレールは以下を行うべきではありません。

- コンテナの内部状態またはロジックを知ること
- コンテナがどのように機能を実装しているかを仮定すること
- コンテナコンポーネント、そのデータを直接操作したり、メソッドを手動で呼び出したりすること

#### メリット

このパターンは以下を提供します。

- **明確な関心の分離** - パネルレベルのロジックはナビゲーションレールに残り、アプリ固有のロジックはコンテナに存在する
- **メンテナンスのしやすさ** - 1 つのアプリのナビゲーションへの変更が、他のアプリやレールに影響しない
- **より良いスケーラビリティ** - レールを変更することなく、コンテナに新しい機能を追加できる
- **テスタビリティの改善** - コンテナをナビゲーションレールから分離してユニットテストできる

### ナビゲーションレール

`navigation_rail.vue` コンポーネントは 2 つの目的を果たします。異なる AI 機能間のナビゲーションを提供することと、AI パネル全体のエクスペリエンスをカスタマイズすることです。エンジニアリングの観点から、このコンポーネントは Duo Chat のような単一のアプリに固有の機能ではなく、複数のアプリケーションに影響を与える懸念のみを処理する必要があります。

#### 現在のアーキテクチャの制限

現在、すべてのナビゲーションアイテム（new chat、current chat、history、sessions、suggestions）はナビゲーションレール内の同じレベルでレンダリングされています。アプリケーションが成長するにつれ、このフラットな構造は設計上の問題を露呈しました。Duo Chat 固有のナビゲーションアイテム (`new_chat`、`current_chat`、`history`) がパネルレベルのナビゲーション (sessions、suggestions) と混在しており、Duo Chat 固有の状態とロジックを管理するのが難しくなっています。

#### Duo Chat へのコンテナパターンの適用

上述の **ナビゲーションレールコンポーネント用のコンテナパターン** に従い、すべての Duo Chat 関連ナビゲーションアイテムをカプセル化する新しい `duo_chat_navigation_container.vue` コンポーネントを導入する必要があります。

このコンテナは、以下を行うことでパターンを実装します。

**Duo Chat ナビゲーションの状態を所有する**

- アクティブなチャットモード（クラシック vs エージェンティック）の管理
- チャットの可用性と無効化状態の追跡
- エージェント選択状態の処理（エージェンティックモード用）

**関連するナビゲーションアイテムをグループ化する**

- エージェントセレクター機能を持つ `new_chat` ボタン
- アクティブな会話のための `current_chat` ボタン
- チャット履歴のための `history` ボタン

**ナビゲーションレールの契約を維持する**

- props を受け取る: `activeTab`、`isExpanded`、`isChatDisabled`、`chatDisabledTooltip`、`projectId`、`namespaceId`
- イベントを発する: `handleTabToggle`、`new-chat`、`newChatError`

これにより、より明確なコンポーネント階層が作成されます。

- **ナビゲーションレール** はパネルレベルの懸念（レイアウト、sessions、suggestions）を処理する
- **Duo Chat ナビゲーションコンテナ** はチャット固有の懸念（チャットモード、history、new chat）を処理する
- **個々のナビゲーションボタン** はシンプルでプレゼンテーショナルなコンポーネントのままにする

パネル全体で共有する必要があるロジックは、ナビゲーションレールまたは AI パネルコンポーネントに引き上げることができ、各コンポーネントが適切な抽象化レベルで動作することを保証します。

**コード例**

`navigation_rail.vue` をリファクタリングして、Duo Chat ナビゲーションを独自のコンテナに抽出する方法は次のとおりです。

```vue
<!-- navigation_rail.vue - Simplified to focus on panel-level concerns -->
<template>
  <div
    class="gl-ml-3 gl-flex gl-items-center gl-gap-3..."
    role="tablist"
    aria-orientation="vertical"
  >
    <!-- Duo Chat navigation container handles all chat-related items -->
    <duo-chat-navigation-container
      :active-tab="activeTab"
      :is-expanded="isExpanded"
      :is-chat-disabled="isChatDisabled"
      :chat-disabled-tooltip="chatDisabledTooltip"
      :project-id="projectId"
      :namespace-id="namespaceId"
      @handleTabToggle="toggleTab"
      @new-chat="handleNewChat"
      @newChatError="handleNewChatError"
    />

    <!-- Panel-level navigation items remain in the rail -->
    <template v-if="showSessionsButton">
      <div class="gl-my-3 gl-h-5 gl-w-1..." name="divider"></div>
      <gl-button
        v-gl-tooltip.left
        icon="session-ai"
        :class="['ai-nav-icon', { 'ai-nav-icon-active': activeTab === 'sessions' }]"
        @click="toggleTab('sessions')"
      />
    </template>

    <gl-button
      v-if="showSuggestionsTab"
      v-gl-tooltip.left
      icon="suggestion-ai"
      class="!gl-rounded-lg max-lg:gl-ml-auto lg:gl-mt-auto"
      :class="['ai-nav-icon', { 'ai-nav-icon-active': activeTab === 'suggestions' }]"
      @click="toggleTab('suggestions')"
    />
  </div>
</template>

<script>
import DuoChatNavigationContainer from './duo_chat_navigation_container.vue';

export default {
  name: 'NavigationRail',
  components: {
    DuoChatNavigationContainer,
  },
  // ... rest of component logic
};
</script>
```

```vue
<!-- duo_chat_navigation_container.vue - New component for chat navigation -->
<template>
  <div class="gl-flex gl-items-center gl-gap-3 lg:gl-flex-col">
    <new-chat-button
      :project-id="projectId"
      :namespace-id="namespaceId"
      :active-tab="activeTab"
      :is-expanded="isExpanded"
      :is-chat-disabled="isChatDisabled"
      :is-agent-select-enabled="isAgenticMode"
      :chat-disabled-tooltip="chatDisabledTooltip"
      @new-chat="$emit('new-chat', $event)"
      @toggleTab="$emit('handleTabToggle', $event)"
      @newChatError="$emit('newChatError', $event)"
    />

    <gl-button
      v-gl-tooltip.left="{ title: formattedDuoShortcutTooltip, html: true }"
      icon="duo-chat"
      :class="['ai-nav-icon', { 'ai-nav-icon-active': activeTab === 'chat' }]"
      @click="$emit('handleTabToggle', 'chat')"
    />

    <gl-button
      v-gl-tooltip.left
      icon="history"
      :class="['ai-nav-icon', { 'ai-nav-icon-active': activeTab === 'history' }]"
      @click="$emit('handleTabToggle', 'history')"
    />
  </div>
</template>

<script>
import { duoChatGlobalState } from '~/super_sidebar/constants';
import { CHAT_MODES } from 'ee/ai/tanuki_bot/constants';
import NewChatButton from './new_chat_button.vue';

export default {
  name: 'DuoChatNavigationContainer',
  components: {
    NewChatButton,
  },
  props: {
    activeTab: { type: String, default: null },
    isExpanded: { type: Boolean, default: true },
    isChatDisabled: { type: Boolean, default: false },
    chatDisabledTooltip: { type: String, default: '' },
    projectId: { type: String, default: null },
    namespaceId: { type: String, default: null },
  },
  data() {
    return {
      duoChatGlobalState,
    };
  },
  computed: {
    isAgenticMode() {
      return this.duoChatGlobalState.chatMode === CHAT_MODES.AGENTIC;
    },
    formattedDuoShortcutTooltip() {
      // Chat-specific tooltip logic moved here
      // ...
    },
  },
};
</script>
```

このリファクタリングは以下を提供します。

- **明確な関心の分離**: チャットナビゲーションロジックがパネルナビゲーションから分離される
- **メンテナンスのしやすさ**: チャットナビゲーションへの変更が sessions や suggestions に影響しない
- **より良いスケーラビリティ**: レールを変更することなく、新しいチャット機能をコンテナに追加できる
- **テスタビリティの改善**: チャットナビゲーションをパネルナビゲーションから独立してテストできる

### コンテンツコンテナ

`content_container.vue` コンポーネントは、AI パネルのインフラストラクチャとサブアプリケーションの間のレンダリングレイヤーとして機能します。以下を処理します。

**コンポーネントのレンダリング**

- Vue の `<component :is>` パターンを使用して、アクティブなタブのコンポーネントを動的にレンダリングする
- Vue コンポーネントと静的 HTML 文字列（エラーメッセージや利用不可状態用）の両方をサポートする
- チャットモードを含む算出 `componentKey` を使用して、クラシックチャットとエージェンティックチャットを切り替えるときにコンポーネントを強制的に再作成し、モード変更にわたって状態が永続化することを防ぐ

**ヘッダー管理**

- `change-title` イベントを介した動的タイトル更新のサポートとともに、アクティブなタブのタイトルを表示する
- `showBackButton` が true の場合、戻るボタンの機能を提供する
- パネル状態管理のための折りたたみと最大化/最小化コントロールを含む

**Props passthrough**

コンテンツコンテナは、コンテキストの props (`userId`、`projectId`、`namespaceId` など) を受け取り、`v-bind="activeTab.props"` を使用してサブアプリケーションに渡すことで、コンテナが特定のサブアプリの要件を知る必要のない非依存パターンを維持します。

**イベントの中継**

サブアプリケーションと AI パネルの間のイベント中継として機能します。

- `@switch-to-active-tab` - サブアプリケーションが他のタブへのナビゲーションをトリガーできるようにする
- `@change-title` - サブアプリケーションがパネルヘッダーのタイトルを動的に更新できるようにする
- `@closePanel` および `@toggleMaximize` - パネル状態の変更を上方向に中継する

**アクセシビリティ**

- すべてのインタラクティブな要素に対して適切な ARIA ラベルを使用する
- ボタンアクションのためのツールチップディレクティブを実装する
- `<aside>` および見出し要素を含むセマンティックな HTML 構造を維持する

コンテンツコンテナは意図的にシンプルに保たれ、レンダリングの懸念に焦点を当てており、すべてのビジネスロジックをサブアプリケーションに委譲しつつ、一貫した UI インフラストラクチャを提供します。

### モノリシックなアプリではなく、サブアプリケーションを分離する理由

AI パネルアーキテクチャは、サブアプリケーションを単一のモノリシックなアプリケーションにマージするのではなく、意図的に分離して維持しています。

**メリット**

1. **チームの自律性とベロシティ** - 複数のチーム（Duo Chat、Agent foundations、Project Studio）が、リリースを調整したり他のチームを待つ必要なく、独立して変更をデプロイできる。

1. **結合度の低減** - 1 つの機能への変更が他のチームの機能を壊すリスクを軽減し、広範囲のクロスチームテストの必要性を減らす。

1. **マイグレーションと進化** - すべてのサブアプリケーションを同時に変更することなく、新しい AI 機能を追加し、レガシー機能を非推奨にできる。

**受け入れているトレードオフ**

- 共有状態は Apollo キャッシュを介した明示的な調整が必要
- サブアプリケーション間でいくつかのコードが重複する可能性がある
- 機能間のナビゲーションはイベントベースの通信が必要
- 初期セットアップの複雑さがモノリシックアプローチよりも高い

パネルインフラストラクチャは、独立性を維持しながら重複を最小限にする十分な共有機能（ナビゲーション、レイアウト、状態管理パターン）を提供します。

### グローバル状態管理

AI パネルにはすでに、`vue-apollo` の形ですべてのアプリ間で共有されるグローバル状態があります。VueX、Pinia、Observables のような他の状態管理は何としても避けるべきです。

**レガシー VueX ストア**

`init_duo_panel.js` ファイルには現在、クラシック Duo Chat とエージェンティック Duo Chat の両方の実装で使用される VueX ストアが含まれています。この VueX ストアは、新しい機能やサブアプリケーションで拡張または使用すべきではなく、既存のチャット実装から完全に削除することを目指すべきです。すべての状態管理は、以下に説明するように Apollo Client のキャッシュを使用する必要があります。

**マイグレーション計画: VueX から Apollo へ**

Duo Chat の現在の VueX ストアは、メッセージ状態とチャットインタラクションを管理しています。Apollo Client のキャッシュにマイグレーションするには、以下のように行います。

**現在の VueX の使用**

VueX ストアは現在、以下を処理しています。

- チャットメッセージ（送信および受信）の保存
- 保留中のメッセージ状態の管理
- 会話履歴の追跡

**マイグレーションのアプローチ**

1. **メッセージはすでに Apollo キャッシュにある** - チャットメッセージは GraphQL クエリを介してフェッチされます。これは、すでに Apollo キャッシュに存在することを意味します。VueX で状態を重複させる代わりに、この既存のキャッシュを活用できます。

1. **メッセージ状態をコンポーネントデータに移動する** - `agentic_duo_chat` のルートコンポーネントは、メッセージをデータプロパティとして保持し、props として子コンポーネントに渡すことができ、このユースケースのためのグローバルストアの必要性を排除します。または、子コンポーネントが Apollo キャッシュを直接クエリして、リアクティブに最新のデータを取得できます。

1. **保留中のメッセージを楽観的なレスポンスで処理する** - メッセージを送信するときに、Apollo の組み込みの [optimisticResponse](https://apollo.vuejs.org/api/apollo-mutation.html#optimisticresponse) 機能を使用して保留中の状態を処理する。

```javascript
// In chat component
async sendMessage(content) {
  await this.$apollo.mutate({
    mutation: sendMessageMutation,
    variables: { content, conversationId: this.conversationId },
    optimisticResponse: {
      __typename: 'Mutation',
      sendMessage: {
        __typename: 'ChatMessage',
        id: `temp-${Date.now()}`,
        content,
        author: this.currentUser,
        timestamp: new Date().toISOString(),
      }
    },
    // Apollo automatically updates queries that include ChatMessage
    // and replaces the optimistic response with real data when it arrives
  });
}
```

Apollo は自動的にライフサイクルを処理します。

- 楽観的なメッセージをすぐにキャッシュに追加します（即時の UI フィードバック）
- 実際のレスポンスが到着すると、楽観的なエントリを自動的に削除します
- サーバーから受信した実際のメッセージデータに置き換えます
- 手動のクリーンアップやフィルタリングは不要

**マイグレーションのメリット**

- **唯一の信頼源** - デュアル状態管理（VueX + Apollo）を排除する
- **自動キャッシュ更新** - Apollo のリアクティブキャッシュが、すべてのコンポーネントに変更を伝播する
- **複雑性の削減** - VueX ストアを GraphQL レスポンスと手動で同期する必要がなくなる
- **より良いパフォーマンス** - Apollo の組み込みキャッシングと正規化を活用する
- **一貫性** - AI パネルアーキテクチャの残りの部分と整合する

**マイグレーション手順**

1. クライアント専用の保留中メッセージ状態用の GraphQL 型定義を作成する
2. Apollo Client 設定で保留中メッセージ用のローカルリゾルバーを実装する
3. チャットコンポーネントを更新して VueX ストアではなく Apollo キャッシュから読み取るようにする
4. VueX のアクションを Apollo の mutation とキャッシュ更新に置き換える
5. `init_duo_panel.js` から VueX ストアの初期化を削除する
6. メッセージの送信、受信、保留中状態が正しく動作することをテストする
7. クラシックモードとエージェンティックモードの両方でチャット機能にリグレッションがないことを確認する

#### グローバル状態管理の提案

AI パネルは、すべてのサブアプリケーションにわたる共有状態の唯一の信頼源として、Apollo Client のキャッシュを活用するべきです。このアプローチは、追加の状態管理ライブラリを避けながら、既存の GraphQL インフラストラクチャとの一貫性を維持します。

**共有 Apollo Provider**

`apolloProvider` は `init_duo_panel.js` の初期化中に一度作成され、Vue インスタンスに注入されます。これにより、すべてのサブアプリケーション（chat、agents、sessions）が同じ Apollo Client インスタンスとキャッシュを共有することが保証され、以下が可能になります。

- すべてのアクティブなサブアプリケーションに伝播する自動キャッシュ更新
- 一貫したデータフェッチとキャッシュの動作
- 共有キャッシュヒットを通じたネットワークリクエストの削減

**ローカルリゾルバーを持つクライアント専用フィールド**

サブアプリケーション間で共有する必要がある UI 状態（例: アクティブなエージェント選択、パネル設定、一時的なフラグ）には、Apollo の `@client` ディレクティブとローカルリゾルバーを使用できます。

まず、GraphQL クエリファイル `graphql/queries/get_ai_panel_state.query.graphql` を作成します。

```graphql
query GetAiPanelState {
  aiPanelState @client {
    selectedAgent
    userPreferences
  }
}
```

次に、`init_duo_panel.js` で型定義とリゾルバーを使用して Apollo Client を構成します。

```javascript
import aiPanelStateTypeDefs from './graphql/typedefs/ai_panel_state.typedefs.graphql';
import getAiPanelStateQuery from './graphql/queries/get_ai_panel_state.query.graphql';

const resolvers = {
  Query: {
    aiPanelState: () => ({
      __typename: 'AiPanelState',
    }),
  },
};

const apolloProvider = new VueApollo({
  defaultClient: createDefaultClient({
    typeDefs: aiPanelStateTypeDefs,
    resolvers,
  }),
});

// Initialize cache with default values
apolloProvider.defaultClient.cache.writeQuery({
  query: getAiPanelStateQuery,
  data: {
    aiPanelState: {
      __typename: 'AiPanelState',
      selectedAgent: null,
      userPreferences: null,
    },
  },
});
```

型定義ファイル `graphql/typedefs/ai_panel_state.typedefs.graphql` を作成します。

```graphql
extend type Query {
  aiPanelState: AiPanelState!
}

type AiPanelState {
  selectedAgent: Agent
  userPreferences: PanelPreferences
}
```

サブアプリケーションは、Vue Apollo のコンポーネントオプションを使用して、この共有状態を読み書きできます。

```vue
<script>
import getAiPanelStateQuery from './graphql/queries/get_ai_panel_state.query.graphql';

export default {
  name: 'AgentSelector',
  apollo: {
    aiPanelState: {
      query: getAiPanelStateQuery,
    },
  },
  computed: {
    selectedAgent() {
      return this.aiPanelState?.selectedAgent;
    },
  },
  methods: {
    selectAgent(agent) {
      this.$apollo.provider.defaultClient.cache.writeQuery({
        query: getAiPanelStateQuery,
        data: {
          aiPanelState: {
            __typename: 'AiPanelState',
            selectedAgent: agent,
          },
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <p v-if="selectedAgent">Selected: {{ selectedAgent.name }}</p>
    <button @click="selectAgent(newAgent)">Select Agent</button>
  </div>
</template>
```

このパターンは以下を提供します。

- GraphQL スキーマを通じた型安全な状態管理
- 同じキャッシュフィールドをウォッチするすべてのコンポーネントへのリアクティブな更新
- Apollo をすでに使用している開発者にとって馴染みのある GraphQL パターン
- 追加の状態管理依存関係なし
- サーバーデータとクライアント専用 UI 状態の明確な分離

### 権限

AI パネルアーキテクチャは、Rails バックエンド、パネルインフラストラクチャ、個々のサブアプリケーションの 3 つのレイヤーにわたって権限の懸念を分離しています。

**ユーザースコープの権限**

AI パネルはユーザースコープです。つまり、GitLab 全体のすべてのページ（異なるプロジェクト、グループ、設定ページなど）に存在し、ユーザーがアプリケーション全体を移動しても永続化します。このグローバルなプレゼンスのため、すべての権限チェックは特定のプロジェクトやグループに紐付けされるのではなく、ユーザーレベルで実行される必要があります。

これには重要な意味合いがあります。

- 権限チェックは特定のプロジェクトまたはグループのコンテキストを仮定できない
- 機能はユーザーレベルの権限（例: GitLab Duo Pro サブスクリプション、シート割り当て）を検証する必要がある
- コンテキスト固有の権限（例: プロジェクトレベルのフィーチャーフラグ）は、パネルインフラストラクチャではなくサブアプリケーションが処理する必要がある
- パネルは、ユーザーがナビゲーションするときに異なる権限コンテキスト間の遷移を適切に処理する必要がある

**Rails レイヤー（バックエンド）**

Rails バックエンドは、以下を担当します。

- AI パネルをそもそもレンダリングするかどうかを判定する（レイアウト/ビューロジックを介して）
- `#duo-chat-panel` 要素のデータ属性を介して初期設定を提供する
- ネームスペース/プロジェクトレベルでチャット機能が無効になっている場合に `chatDisabledReason` プロップを設定する
- `agenticAvailable` や `agenticUnavailableMessage` のようなプロップを通じて機能の可用性を制御する

バックエンドは、要素のデータセットを通じて権限関連のデータをフロントエンドに渡します。

```javascript
const {
  chatDisabledReason,
  agenticAvailable,
  agenticUnavailableMessage,
  // ... other config
} = el.dataset;
```

**AI パネルレイヤー（インフラストラクチャ）**

パネルインフラストラクチャは、UI レベルで権限の強制を処理します。

- `navigation_rail.vue` コンポーネントは `chatDisabledReason` を受け取り、ナビゲーションボタンに無効化状態を適用する
- `isChatDisabled` が true の場合、パネルはタブ切り替えを防ぎ、機能が利用不可な理由を説明するツールチップを表示する
- パネルは権限の決定を行うことはなく、バックエンドから提供された状態を強制するだけ

**サブアプリケーションレイヤー（機能固有）**

個々のサブアプリケーション（Duo Chat、Agentic Chat、Sessions）は、以下を担当します。

- 独自の機能固有の権限をチェックする
- 機能が部分的に利用可能な場合、グレースフルな低下を処理する
- 適切なエラーメッセージまたはフォールバック UI を表示する

例えば、`init_duo_panel.js` の `chatConfiguration` は、どのチャットコンポーネントをロードするかを決定します。

```javascript
const chatConfiguration = {
  agenticComponent: parseBoolean(agenticAvailable)
    ? DuoAgenticChat
    : agenticUnavailableMessage || __('Chat is not available.'),
  classicComponent: DuoChat,
  // ...
};
```

このレイヤード化されたアプローチにより、以下が保証されます。

- 権限ロジックは、適切に強制できるバックエンドに残る
- パネルインフラストラクチャは非依存で再利用可能なまま
- サブアプリケーションは機能固有の権限処理を実装できる
- 関心の明確な分離により、レイヤー間で権限チェックが重複することを防ぐ

### コンテキストの受け渡し

AI パネルは、Rails バックエンドからページのコンテキストを受け取り、それをサブアプリケーションに渡し、コンテキストを意識した AI 機能を可能にします。現在、このコンテキストは主に Duo Chat によって消費されており、ユーザーの現在のページに基づいて関連する支援を提供しています。

**コンテキストデータのフロー**

コンテキストは Rails → パネル初期化 → AI パネルコンポーネント → サブアプリケーションへと流れます。

1. **Rails バックエンド** が `#duo-chat-panel` 要素にコンテキストデータ属性を設定する。

```ruby
# Example: Rails view rendering the panel element
<div id="duo-chat-panel"
     data-user-id="<%= current_user.id %>"
     data-project-id="<%= @project.id %>"
     data-namespace-id="<%= @project.namespace.id %>"
     data-root-namespace-id="<%= @project.root_namespace.id %>"
     data-resource-id="<%= @resource.id %>"
     data-metadata="<%= @metadata.to_json %>">
</div>
```

1. **パネル初期化** (`init_duo_panel.js`) はデータセットからコンテキストを抽出する。

```javascript
const {
  userId,
  projectId,
  namespaceId,
  rootNamespaceId,
  resourceId,
  metadata,
  // ...
} = el.dataset;
```

1. **AI パネルコンポーネント** はコンテキストを props として受け取り、props passthrough パターンを介してサブアプリケーションに渡す。

```javascript
// In ai_panel.vue currentTabComponent computed property
return {
  component: this.currentChatComponent,
  props: {
    mode: chatMode,
    ...this.chatConfiguration.defaultProps  // Contains context props
  },
};
```

1. **サブアプリケーション** は `chatConfiguration.defaultProps` で定義された props を介してコンテキストを受け取る。

```javascript
const chatConfiguration = {
  defaultProps: {
    isEmbedded: true,
    userId,
    projectId,
    namespaceId,
    rootNamespaceId,
    resourceId,
    metadata,
    // ...
  },
};
```

**動的なコンテキストの更新**

一部のコンテキスト値は実行時に動的に更新されます。例えば、`resourceId` は利用可能な場合、アクティブなワークアイテム ID で上書きされます。

```javascript
render(createElement) {
  const latestActiveWorkItemId = activeWorkItemIds.value[activeWorkItemIds.value.length - 1];
  return createElement(AIPanel, {
    props: {
      resourceId: latestActiveWorkItemId ?? resourceId,
      // ...
    },
  });
}
```

**コンテキストの消費**

現在、**Duo Chat** はこのコンテキストの主要な消費者であり、以下のために使用しています。

- プロジェクト固有の提案と支援を提供する
- ユーザーの現在のワークスペース（プロジェクト、ネームスペース）を理解する
- リソース固有の情報（例: 現在の Issue、マージリクエスト）にアクセスする
- 現在のページに関するメタデータに基づいてレスポンスを調整する

他のサブアプリケーション（Sessions）はすべてのコンテキスト props を必要としない、または使用しない場合がありますが、passthrough パターンを通じて受け取るため、将来必要になった場合にパネルインフラストラクチャを変更することなくコンテキストにアクセスできます。

**このアプローチのメリット**

- コンテキストは初期化時に一度提供され、コンポーネントツリーを通じて自然に流れる
- パネルは、どのコンテキスト props がどのサブアプリケーションにとって意味があるかについて非依存のまま
- 新しいコンテキストプロパティを、パネルコンポーネントを変更することなく追加できる
- サブアプリケーションは、必要なコンテキストのみを選択的に使用できる

#### 問題点

現在のコンテキスト受け渡しの実装には、AI パネルが GitLab 全体でコンテキストを意識した支援を提供する能力に影響する、いくつかの重要な制限があります。

**ページカバレッジの制限**

コンテキストの受け渡しは現在、ワークアイテムページでのみ確実に動作します。パネルとそのサブアプリケーションは以下でコンテキスト認識能力を欠いています。

- リポジトリページ（コンテキストや `resourceId` が渡されないが、ワークフロー作成中は `projectId` が利用可能）
- ジョブページ（多くの場合、間違ったプロジェクトを推測する）
- パイプラインページ
- ワークアイテム以外の他のほとんどの GitLab ページ

これにより、AI 機能が一部の領域でうまく機能する一方、他の領域ではユーザーのコンテキストを理解できないという、一貫性のないユーザーエクスペリエンスが生まれます。

**SPA における静的コンテキスト**

現在の実装はコントローラーベースであり、コンテキストは Rails のデータ属性を介してページロード時に一度設定されます。これは Single Page Application (SPA) で問題を生み出します。

- ユーザーが SPA 内をナビゲーションするとコンテキストが更新されない
- パネルはルート変更や状態遷移を認識できない
- 動的なコンテンツの変更（例: リストビューでマージリクエスト間を切り替えるなど）はコンテキストの更新をトリガーしない

**一貫性のない実装パターン**

異なるページでは、コンテキストを提供するために異なるメカニズムが使用されています。

- 一部のページでは Rails コントローラーで `Gitlab::ApplicationContext.push(ai_resource_id)` を使用
- 古いページでは HAML の `provide` メカニズムを使用（Project Studio より前）
- ワークアイテムは `activeWorkItemIds` observable を介した動的な `resourceId` 更新を使用
- 新しいページに対する標準化されたアプローチは存在しない

**主要機能のコンテキストの欠如**

包括的なコンテキストの欠如は、いくつかの重要なユースケースを妨げます。

- **オンボーディングフロー**: ユーザーが Duo が有効でないグループページにいるか、Duo 付きのプロジェクトにいるかを判定できない
- **Suggestions タブ**: 現在のページコンテキストに基づいて関連する提案を提供できない（現在は実装されていない）
- **Duo Chat の精度**: ワークアイテムコンテキスト以外で正確なレスポンスを提供する能力に制限がある
- **将来の AI 機能**: ページコンテキストを必要とする新しいパネル機能は、同じ制限に直面する

**所有権と調整の課題**

- 各チームは自分のページのコンテキストを提供する責任がある
- 全体的なコンテキスト戦略の所有権が明確でない
- これは、調整されたソリューションがないまま長年（数年）続いている問題

**提案される解決策: 3 段階のコンテキスト収集**

推奨されるアプローチは、手動の調整を最小限に抑えながら包括的なコンテキストカバレッジを提供するために、複数の戦略を組み合わせます（[Issue #573737](https://gitlab.com/gitlab-org/gitlab/-/issues/573737) を参照）。

**ティア 1: 初期コントローラーデータ（労力少、価値大）**

ページロード時にデータ属性を介して、Rails コントローラーから初期コンテキストを渡します。これにより、最小限の労力でベースラインのコンテキストが提供され、すでに部分的に実装されています。GitLab ページ全体でより多くのエンティティタイプ（`@group`、`@project`、`@merge_request`、`@pipeline` など）にカバレッジを拡大します。これはすでに実施されています。

**ティア 2: SPA ナビゲーションのための URL ウォッチング（労力中、AI チーム所有）**

`window.location` の変更をウォッチして、アプリ内ナビゲーションを検出します。URL が変更されたら、以下を行います。

1. メインのエンティティコンテキストが同じままかどうかをチェックする（例: 同じプロジェクト内にいるかどうか）
1. URL パスを正規表現パターンを使用して解析し、より細かいコンテキストを抽出する。

```javascript
const contextPatterns = [
  {
    pattern: /\/merge_requests\/(\d+)/,
    extract: (match) => ({ type: 'merge_request', iid: match[1] })
  },
  {
    pattern: /\/issues\/(\d+)/,
    extract: (match) => ({ type: 'issue', iid: match[1] })
  },
  {
    pattern: /\/pipelines\/(\d+)/,
    extract: (match) => ({ type: 'pipeline', id: match[1] })
  },
  {
    pattern: /\/blob\/([^\/]+)\/(.+)/,
    extract: (match) => ({ type: 'file', ref: match[1], path: match[2] })
  }
  // Add patterns incrementally for high-value routes
];
```

1. メインコンテキストが変更された場合（例: パイプラインからワークアイテムにナビゲーション）、新しいエンティティデータをフェッチして Apollo キャッシュを更新する GraphQL クエリを発行する。私たちのクラスター SPA アプローチを考えるとこれは稀ですが、将来的に発生する可能性があります。
1. Apollo キャッシュの mutation を介して AI パネルのコンテキストを更新する

このアプローチにより、AI チームは URL パターンマッチングを所有でき、他のチームとの調整を必要とせずに、カバレッジを段階的に拡大できます。

**ティア 3: アプリ間通信のためのブラウザイベント（対象を絞った労力）**

ネイティブブラウザの `CustomEvent` を使用して、コンテキストの変更が標準のルーティングパターンに従わないエッジケースを処理します。これは、GitLab には同じページに複数の独立した Vue アプリ（AI パネル、ワークアイテムドロワー、メインアプリなど）があり、それぞれが独自の Vue インスタンスと Apollo provider を持ち、同じ Apollo キャッシュインスタンスを共有していないため必要です。ドロワーはすべてのアプリに存在するため、常に他のアプリと同じ Apollo キャッシュを共有することも自明ではありません。

エッジケースの例:

- ワークアイテムドロワーの開閉（クエリパラメーターで `window.location` を更新するが、ルーターで制御されない）
- コンテキスト情報を持つモーダルダイアログ
- URL の変更なしにロードされる動的なコンテンツ

任意の Vue アプリは、ブラウザイベントを介してコンテキストの更新をディスパッチできます。

```javascript
// In work item drawer wrapper (or any other Vue app)
window.dispatchEvent(new CustomEvent('ai-panel:context-update', {
  detail: {
    resourceId: workItemId,
    resourceType: 'work_item',
    subContext: 'drawer_view',
  }
}));
```

AI パネルはこれらのイベントをリッスンし、独自の Apollo キャッシュを更新します。

```javascript
// In AI panel initialization (init_duo_panel.js)
window.addEventListener('ai-panel:context-update', (event) => {
  const context = event.detail;

  // Update AI panel's Apollo cache
  apolloProvider.defaultClient.cache.writeQuery({
    query: getAiPanelContextQuery,
    data: {
      aiPanelContext: {
        __typename: 'AiPanelContext',
        ...getCurrentContext(), // Preserve existing context
        ...context, // Merge in new context
      },
    },
  });
});
```

このアプローチは、すべての Vue アプリで動作します。なぜなら以下のとおりだからです。

- ブラウザイベントはグローバルであり、Vue インスタンスにスコープされない
- アプリ間で共有依存関係やインポートを必要としない
- 明確なイベント命名規則で実装とデバッグがシンプル
- `detail` プロパティを介して構造化データを渡すことができる
- 期待されるタイミングで適切なブラウザイベントが発行されていることを確認することでデバッグが容易

### テストと CI

この作業に関連するテストインフラストラクチャと CI/CD 設定の情報については、以下を参照してください。

- **メインのエピック**: [Project Studio スイッチオーバー](https://gitlab.com/groups/gitlab-org/-/epics/19140)
- **スイッチオーバーのタイムライン**: [タイムラインとタスク](https://gitlab.com/gitlab-org/gitlab/-/work_items/578461)（信頼できる情報源として維持）

**将来のメンテナンスタスク**:

Project Studio フィーチャーフラグが削除された場合:

- CI 設定からクラシック UI ジョブを削除する
- テストファイルから ProjectStudio の条件分岐を削除する

Project Studio バナーが削除された場合:

- バナー表示を処理するテストコードを削除する

上記のタスクでテスト/CI コードを削除するための詳細（一部は重複または相互依存する可能性があります）:

1. CI ジョブ `rspec system pg16 classic-ui` および `rspec-ee system pg16 classic-ui` を削除する
1. `GLCI_OVERRIDE_PROJECT_STUDIO_ENABLED` とすべての参照/使用を削除する
1. `Users::ProjectStudio.enabled_for_user?` とすべての参照/使用を削除する
1. `Users::ProjectStudio` モジュール全体とすべての参照/使用を削除する
1. `paneled_view` フィーチャーフラグとすべての参照/使用を削除する
