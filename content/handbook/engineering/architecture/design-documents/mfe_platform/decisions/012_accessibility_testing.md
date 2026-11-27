---
title: "MFE Platform ADR 012: アクセシビリティテスト"
description: "ドラフト。マイクロフロントエンドでアクセシビリティのチェックに重複や漏れが生じないよう、@gitlab/frontend-tests の各テスト層がどのチェックを担当するかを定めます。"
creation-date: "2026-11-18"
authors: ["@trevorpierce"]
dris: ["@trevorpierce"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mfe_platform/decisions/012_accessibility_testing/
upstream_sha: 3f489816f1fcde506cae1427b280d744ab382621
lastmod: "2026-11-26T11:01:10-05:00"
translated_at: "2026-11-28T06:27:54+09:00"
translator: codex
stale: false
---

*ドラフト*。以下の技術的な決定事項については合意済みです。[ポリシー](#policy)は提案段階で、意見を募集しています。ヘルパー名とファイル名は、`@gitlab/frontend-tests/a11y` パッケージで定義するまでの仮称です。

## 背景 {#context}

[ADR 002](002_reusable_testing_approach.md)では、`@gitlab/frontend-tests` を通じて、すべてのマイクロフロントエンド（MFE）に共通のテスト層を提供します。ユニットテスト、統合テスト、Module Federation の互換性テスト、ブラウザー駆動テストです。各層は異なる環境で動作し、それぞれ異なる種類のアクセシビリティの問題を検出できます。共通のルールがなければ、複数の層で同じチェックを繰り返したり、特定の層でしか実行できないチェックが漏れたりします。

この記録では、各層が何をチェックし、そのために `@gitlab/frontend-tests` が何を提供するかを定めます。

## 層ごとのテスト {#per-layer}

各層は、異なる規模のインターフェースをテストします。

| 層 | 規模 | 実行環境 |
|---|---|---|
| ユニット | 小：コンポーネント | Rstest、jsdom |
| 統合 | 中：コンポーネントを組み合わせたモジュール | Rstest、jsdom、Mock Service Worker（MSW） |
| ブラウザー駆動 | 大：ページ | Playwright、実際のブラウザー |

すべての層が `@gitlab/frontend-tests/a11y` からアクセシビリティヘルパーをインポートし、同じ[除外レジストリ](#exclusion-registry)を読み込みます。

### ユニットテスト {#unit-tests}

`@gitlab/frontend-tests/a11y` が提供する共有マッチャー `toHaveNoViolations` を使い、jsdom で axe-core を実行します。ロールとラベルで要素を探し、セマンティクスが欠けている場合はコンポーネント自体のテストが失敗するようにします。jsdom では、色のコントラスト、フォーカスの視認性、レイアウトはチェックできません。

### 統合テスト {#integration-tests}

統合テストでは、単一のコンポーネントの代わりに、アプリケーション全体か、そのモジュールをマウントします。MSW が記録済みのフィクスチャで API リクエストに応答し、テストは `@testing-library` を使ってユーザーと同じように要素を見つけます。ユーザーフローの各状態で、フィクスチャのロールのバリアントごとに 1 回、マウントしたアプリケーションに対して、同じ `toHaveNoViolations` マッチャーを使って axe を実行します。jsdom にはユニットテストと同じ制約があります。フォーカス管理は[ブラウザー駆動テスト](#focus-management-testing)でテストします。

### Module Federation の互換性 {#module-federation-compatibility}

対象外です。契約テストで確認するのは、アプリケーションをマウントできることです。レンダリングの結果は確認しません。アクセシビリティは他の層でカバーします。

### ブラウザー駆動テスト {#browser-driven-tests}

ブラウザー駆動テストは、[ADR 002](002_reusable_testing_approach.md#browser-driven-tests)の E2E 層です。アクセシビリティのチェックは、独立したテストスイートを設けず、機能や[ビジュアルリグレッション](002_reusable_testing_approach.md#visual-regression)のチェックと同じ E2E シナリオで実行します。シナリオが到達する状態ごとに、実際のブラウザーで `@axe-core/playwright` を実行し、マークアップと ARIA 属性の使い方が正しいか、その他のよくあるアクセシビリティの問題がないかを確認します。動きを減らす設定でテストします。アプリケーションの周囲にあるページ領域は引き続きホストの責任です。

シナリオは `mountApp({ preferences: { theme: 'dark' } })` を使って `dark` テーマでも実行します。これらの実行では、テーマのビジュアルリグレッションをチェックします。どの層でも色のコントラストはチェックしないため、`dark` テーマでテストが通っても、コントラストが正しいことを示すわけではありません。コントラストはデザインの段階でチェックします。

#### makeAxeBuilder 関数 {#makeaxebuilder-function}

ブラウザーでアクセシビリティテストを実行するには、`@gitlab/frontend-tests/a11y` の `makeAxeBuilder` 関数を使います。これにより、ルールセットを統一し、時間のかかる色のコントラストのチェックを無効にします。このヘルパーでは要素を除外できません。ルールから除外する必要があるチームは、[除外レジストリ](#exclusion-registry)に項目を追加します。

```ts
// @gitlab/frontend-tests/a11y (inside the test package)
import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';

type AxeScope = {
  /** MFE container element(s) to test */
  include?: string[];
};

/**
 * See https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md
 */
export function makeAxeBuilder(page: Page, { include }: AxeScope = {}): AxeBuilder {
  // Call options() before withTags(): options() replaces the whole options
  // object, so calling it second would drop the tag filter.
  const builder = new AxeBuilder({ page })
    .options({
      resultTypes: ['violations'],
      rules: {
        tabindex: { enabled: true },
        'color-contrast': { enabled: false },
      },
    })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']);

  if (include?.length) builder.include(include);

  return builder;
}
```

シナリオの `beforeEach` で、`mountApp` のあとにヘルパーを実行し、テストで結果をアサートします。`toHaveNoViolations` は違反をチェックする前にレジストリを適用します。`mountApp`、`test`、`expect` は、[ADR 002 の Playwright のドラフト](002_reusable_testing_approach.md#draft-a-playwright-test)から取得します。

```ts
// spec/e2e/work_items.spec.ts
import type { AxeResults } from 'axe-core';
import { makeAxeBuilder } from '@gitlab/frontend-tests/a11y';
import { test, expect } from './test';

test.describe('work items list', () => {
  test.describe('given the default page settings', () => {
    let results: AxeResults;

    test.beforeEach(async ({ mountApp, page }) => {
      await mountApp();
      results = await makeAxeBuilder(page, { include: ['[data-mfe-app]'] }).analyze();
    });

    test('then it has no accessibility violations', () => {
      expect(results).toHaveNoViolations();
    });
  });
});
```

ホストアプリケーションはページ全体をテストするため、`include` を指定せずに `makeAxeBuilder(page)` を呼び出します。MFE のテストでは常に `include` を渡します。

#### キーボードナビゲーションのテスト {#keyboard-navigation-testing}

すべての機能は、キーボードだけで操作できる必要があります（[SC 2.1.1: キーボード](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)）。デスクトップでスクリーンリーダーを使うユーザーも、キーボードで移動します。キーボードで操作できなければ、そうしたユーザーも利用できません。

レイアウトが変わるたびに、スクリプト化した Tab キーでの移動順が崩れるため、開発者はキーボードナビゲーションの経路全体を手動で確認します。今後の改訂で、自動化する価値のある少数の経路に対し、フォーカスのスモークテストをスクリプトで追加する可能性があります。

#### フォーカス管理のテスト {#focus-management-testing}

WCAG の [SC 2.4.3: フォーカス順序](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)を満たすには、フォーカス管理が必要です。キーボードやスクリーンリーダーを使うユーザーは、インターフェースが変わったときにフォーカスが適切に設定、管理、復元されることを前提に操作しています。フォーカスがページの本文に戻ったり、削除された要素に残ったりすると、ユーザーはページ内の現在位置を見失います。

フォーカス管理をテストする主な場面は、次のとおりです。

- リスト項目やカードを動的に読み込むとき。
- 表示され続けるメッセージにフォーカスが移るときや、そのメッセージを閉じるとき。
- 要素を閉じたり、DOM から削除したりするとき。
- [モーダル](https://design.gitlab.com/components/modal)や[ドロワー](https://design.gitlab.com/components/drawer)などのデザインシステムコンポーネントを拡張したり、組み合わせたりするとき。

```ts
test.describe('given more work items are loaded', () => {
  test.beforeEach(async ({ mountApp, page }) => {
    await mountApp();
    await page.getByRole('button', { name: 'Load more' }).press('Enter');
  });

  test('then focus moves to the first new item', async ({ page }) => {
    const firstNewItem = page.getByRole('listitem').filter({ hasText: 'Your list item' });

    await expect(firstNewItem).toBeVisible();
    await expect(firstNewItem).toBeFocused();
  });
});
```

```ts
test.describe('given an item is removed', () => {
  test.beforeEach(async ({ mountApp, page }) => {
    await mountApp();
    await page.getByRole('button', { name: 'Remove item 1', exact: true }).press('Enter');
  });

  test('then focus moves to the add button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Remove item 1', exact: true })).toHaveCount(0);
    // Example focus target. Choose the target that fits your use case.
    await expect(page.getByRole('button', { name: 'Add an item' })).toBeFocused();
  });
});
```

## 除外レジストリ {#exclusion-registry}

除外とは、アプリケーションの一部について、理由を記録したうえで、期間を限って特定の axe ルールの適用を免除することです。各アプリケーションは、除外を 1 つのレジストリファイルで管理します。各テスト層は `toHaveNoViolations` を通じてそのファイルを読み込みます。何を、どこで、なぜ除外したかは、このレジストリだけに記録します。

レジストリは YAML 形式で、チームの誰でも読み書きできます。`@gitlab/frontend-tests/a11y` はレジストリ用の JSON Schema を提供します。エディターはスキーマを使って自動補完を行い、スキーマに一致しない項目があると CI が失敗します。

```yaml
# spec/a11y-exclusions.yaml
# yaml-language-server: $schema=../node_modules/@gitlab/frontend-tests/a11y/exclusions.schema.json
exclusions:
  - id: work-items-sidebar-label
    selector: '[data-testid="sidebar-labels"]'
    rules: ['label']
    type: temporary # temporary | permanent
    impact: serious # copied from the axe violation
    team: '@gitlab-org/plan/project-management'
    issue: https://gitlab.com/gitlab-org/gitlab/-/issues/000000
    added: 2026-11-24
    expires: 2027-02-24
  - id: vendor-chart-svg-img-alt
    selector: '.vendor-chart'
    rules: ['svg-img-alt']
    type: permanent
    impact: serious
    team: '@gitlab-org/example-team'
    issue: https://gitlab.com/gitlab-org/gitlab/-/issues/000001
    added: 2026-11-24
    expires: 2027-11-24 # review date for permanent entries
    justification: 'Vendored charting library renders the SVG; replacement tracked in the issue'
    approved_by: '@accessibility-engineer'
```

- **必須フィールド。** 各項目には `issue`、`team`、`expires` の日付が必要です。いずれかを欠く項目は CI で拒否されます。
- **恒久的な項目。** リポジトリに取り込んだサードパーティコードに限って認めます。`justification` と `approved_by` も必要です。`expires` には、12 か月以内のレビュー日を指定します。
- **照合。** 違反が発生したノードが `selector` で指定した要素と同じか、その内側にあり、かつ違反のルールが `rules` に含まれている場合に、項目が違反に一致します。同じ要素でも、他のルールは引き続き実行します。
- **ワイルドカードの禁止。** `rules` にはルール ID を列挙します。`'*'` は使えません。ある領域ですべてのルールを免除すると、その領域がアクセシビリティテストの対象から外れるためです。
- **報告の徹底。** 各実行で、項目ごとに抑制した違反の数を報告します。除外した違反も引き続き把握できます。
- **使われなくなった項目。** 違反が修正されたかマークアップが変わり、どの違反にも一致しなくなった項目を指します。このような項目はマージリクエストで報告し、削除の対象にします。
- **期限切れ。** 期限切れの項目は[テストの隔離プロセス](/handbook/engineering/testing/quarantine-process/)に従います。`expires` の 1 週間前に担当チームに警告します。当日には、項目を削除するマージリクエストをチームに割り当て、承認を求めます。その日以降は、マージリクエストがマージされていなくても、ヘルパーは期限切れの項目を無視します。そのため、チームが違反を修正するか、削除のマージリクエストをマージするか、[延長](#extensions)の承認を得るまで、違反によってアプリケーションのパイプラインが失敗します。

## ポリシー {#policy}

*提案*。このポリシーについて意見を募集しています。変更案はマージリクエストで提案してください。

### 修正期限 {#time-to-fix}

除外の `expires` の日付は、除外する違反の axe の影響度に基づいて設定します。影響度は、Deque と同じレベル区分を使って Issue のラベルも決定します。Accessibility Engineer は、Issue のトリアージ時にレベルを変更できます。

| axe の影響度 | 修正期限 | ラベル |
|---|---|---|
| 重大 | 30 日 | `accessibility::critical` |
| 深刻 | 60 日 | `accessibility::serious` |
| 中程度 | 90 日 | `accessibility::moderate` |
| 軽微 | 90 日 | `accessibility::minor` |

修正期限は[バグの重大度に応じた SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)に従い、[テストの隔離プロセス](/handbook/engineering/testing/quarantine-process/)に合わせて、上限を 3 か月とします。

### 延長 {#extensions}

Accessibility Engineer の承認があれば、項目の期限を 1 回延長できます。同じルールとセレクターの組み合わせが 3 回目の除外となるときは、担当チームのエンジニアリングマネージャーを Issue でメンションします。

### プラットフォームに移行するアプリケーション {#applications-moving-into-the-platform}

既存の機能を MFE に移行するとき、既存の違反が移行を妨げることはありません。アプリケーションでこれらのチェックを初めて実行するときは、1 回限りの 90 日間の猶予期間を設けます。見つかった違反はすべて個別の Issue を作成してレジストリに追加し、チームが自動チェックの検出結果を漏れなく把握できる状態から始めます。

### 必須事項と推奨事項 {#what-is-binding}

- 新しい違反があれば、マージリクエストのパイプラインは**必ず**失敗させます。
- レジストリの各項目には、`issue`、`team`、`expires` の日付が**必須**です。
- 期限切れの項目は**必ず**削除します。
- ユニットテストでは axe のチェックを**推奨**します。

### オーナーシップと承認 {#ownership-and-approvals}

- アプリケーションを所有するプロダクトチームが違反を修正します。レジストリの項目では `team` でそのチームを指定します。
- 一時的な項目は、アプリケーションのメンテナーが承認します。Accessibility には通知しますが、その対応を待つ必要はありません。
- 恒久的な項目と、その 12 か月ごとのレビューは、Accessibility Engineer が承認します。Accessibility Engineer のマネジメント系統と担当チームのマネジメント系統のいずれかに属する人は、その判断を覆せます。判断を覆した場合は、その項目の Issue に記録します。
- `@gitlab-org/maintainers/design-system` は予備の承認者です。
- CODEOWNERS では Accessibility Engineer と `@gitlab-org/maintainers/design-system` が `@gitlab/frontend-tests` の `src/a11y/` を所有します。MFE プラットフォームチームはその CI との連携部分を共同で管理します。
- レジストリファイルには CODEOWNERS のエントリがないため、各アプリケーションが自身のファイルを所有します。恒久的な項目が追加されたときに限り、Danger のルールが Accessibility Engineer の承認を求めます。
- MFE プラットフォームチームが期限切れを処理するジョブを作成します。レポートとダッシュボードに何を表示するかは Accessibility が担当します。

### Issue とラベル {#issues-and-labels}

除外の Issue はアプリケーション自身のプロジェクトに作成し、`accessibility`、`accessibility::<level>`、`accessibility-exclusion`、担当グループの `group::*` ラベルを付けます。

### サポートを受ける {#getting-help}

- **マージリクエストのレビュー：** Issue またはマージリクエストで依頼してください。
- **監査と相談：** アクセシビリティのサポートリクエストを作成してください。すべての依頼を追跡できるため、ここが正式な窓口です。
  - [GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/new?description_template=accessibility_support_request)
  - [Pajamas デザインシステム](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?description_template=Accessibility%20support)

### レポート {#reporting}

エンジニアリングマネージャーには、アプリケーションごとに、違反を抑制した項目、期限が近い項目、使われなくなった項目の概要を毎週報告します。概要の作成機能はまだ実装されていません。

## 決定 {#decision}

- ユニットテスト、統合テスト、ブラウザー駆動テストは、それぞれコンポーネント、モジュール、ページのレベルでアクセシビリティをチェックします。
- ユニットテストと統合テストは Rstest と jsdom で実行します。ブラウザー駆動テストは Playwright で実行します。
- どの層でも色のコントラストはテストしません。自動テストでは実行コストが高く、誤りが生じやすいためです。色のコントラストは、製品や機能を担当するデザイナーによる評価が適しています。`dark` テーマでの実行はビジュアルリグレッションのチェックに限ります。
- `mountApp` が `preferences` を受け取るため、`dark` テーマでもシナリオを実行できます。
- アクセシビリティヘルパーは 1 つのパッケージ `@gitlab/frontend-tests/a11y` に置き、すべての層がそこからインポートします。
- `makeAxeBuilder()` では要素を除外できません。ルールを除外するには、[除外レジストリ](#exclusion-registry)でルールとセレクターを個別に指定します。ワイルドカードは使えません。
- 期限切れの除外は、テストの隔離プロセスに従います。使われなくなった除外は報告し、削除の対象にします。
- 修正期限、延長、承認、オーナーシップ、レポートは、意見を募集中の[ポリシー案](#policy)に従います。
- キーボードナビゲーションは手動でテストします。フォーカス管理はブラウザー駆動テストでテストします。
- `@gitlab/frontend-tests/a11y` のヘルパーはテストパッケージに置き、アクセシビリティの専門家がレビューします。

## 結果 {#consequences}

- ユニットテストだけでは、アクセシビリティテストのカバレッジは不十分です。組み合わせたモジュール、個々のページ、さまざまな UI の状態には、統合テストとブラウザーテストを併用する必要があります。モーダルダイアログ、メニュードロワー、その他の大きなレイアウトの変化が含まれる場合があります。
- コンポーネント、モジュール、ページのレベルでアクセシビリティテストのカバレッジが向上します。これにより、リグレッションを早く特定し、本番環境でのアクセシビリティの問題を時間とともに減らせます。
- 各プロダクトチームは、自身の除外を管理する必要があります。除外が必要になった問題を修正するため、Design Expressions チーム、他の Product チーム、Accessibility Engineer と連携します。
- ルールを免除するときは、テストで `exclude` を指定する代わりに、レビュー対象のファイルを意図的に変更し、Issue と期限を記録します。
- 自動テストでは色のコントラストのリグレッションを検出しません。デザインレビューで確認します。
- 期限切れを処理するジョブ、週次の概要、`accessibility-exclusion` ラベルがそろうまでは、ポリシーを完全には適用できません。
- プラットフォームの進化に伴い、新たなアクセシビリティの要件が出てきます。チームは早い段階でアクセシビリティの専門家に相談し、今後の改訂でこの記録を拡張します。
