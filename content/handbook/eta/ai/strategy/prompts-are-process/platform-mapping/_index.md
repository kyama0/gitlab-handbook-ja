---
title: "ガバナンス姿勢: プラットフォームマッピング"
description: "私たちのガイド付き作成の姿勢が Claude と Glean の管理設定にどのように対応するか、また各プラットフォームが機能部門スコープをどこで強制でき、どこでできないかを示します。"
upstream_path: "/handbook/eta/ai/strategy/prompts-are-process/platform-mapping/"
upstream_sha: 7a4e62958b31234a80d386bf4b7c8dd855df2cb8
translated_at: "2026-09-10T11:03:04+00:00"
translator: codex
stale: false
lastmod: "2026-09-08T15:09:31-07:00"
---

これは [Prompts are Process](../) の補足ページです。同ページでは、個人利用は自由であり、正規の共有版への昇格には所有者とレビューを通す、というポリシーを示しています。あちらのページは意図的にツール非依存にしています。このページは配線図に相当し、Claude の各利用環境（Chat、Cowork、Code）と Glean の管理設定に私たちの方針を対応付けます。この分け方はツール非依存かツール固有かの違いによるもので、何かを隠すためではありません。

Enterprise AI (ETA) がこの設定を所有します。プラットフォームとツールの選択について決定権を持つのは Hub であり、機能部門ではありません。

## 方針を一言で {#the-posture-in-one-line}

ガイド付き作成: 誰でも構築と実験ができます。正規の共有版への昇格は、[3 つのスコープ](../#three-places-ownership-can-sit)（機能部門単位、リポジトリ単位、全社）のいずれかで責任を持ち、レビューします。

## 方針をプラットフォーム設定に対応付ける {#mapping-the-posture-to-platform-settings}

| 方針の意図 | Claude (Chat, Cowork, Code) | Glean |
|---|---|---|
| 各自が自分のスキル/エージェントを作成できる | User-created skills を有効化 | 「Can create agents」（Default Member 権限、デフォルトは **On**） |
| 個人間で共有できる | Skill sharing を有効化 | 「Can share agents with individual teammates」（デフォルトは **On**） |
| 全員への公開には条件があり、自動ではない | Share-with-organisation をオフにし、組織への昇格には所有者とレビューを通す | 「Can publish agents」（デフォルトは **Off**）と「Can share agents with the entire company」（デフォルトは **Off**） |
| 承認済みの成果物をチームへ配布する | 対象グループ向けにパッケージ化し、スコープを設定する（例: チームのプラグイン） | エージェントを Department または ID プロバイダーのグループ（Google/Entra）と共有します。Agent Library で Verified / company-branded としてマークし、昇格させます。Library のカテゴリは Department 単位でスコープを設定します |
| 機密性の高いケースでは管理を強化する | その利用環境の制限を強め、管理者が選定する形に近づける（ユーザーによる作成をオフにする） | Default Member 権限の制限を強めます。エージェントごとのアクセス階層（Viewer / Editor / Owner）と参照元文書の権限で利用範囲を制御します |

Glean の管理設定は、Admin Console の **Users → Default Member permissions**（作成/共有/公開の切り替え）と **Agents**（Library、検証、グループ共有）にあります。Claude の組織レベルの切り替えは組織/管理者設定にあり、Claude の各利用環境に適用されます。

特に取り上げる点は 3 つあります。

1. **Glean はデフォルトでガイド付き作成を備えています。** 初期状態では、デフォルトのメンバーはエージェントを作成して個々のチームメンバーと共有できますが、全社に公開したり共有したりはできません。これは私たちの方針と一致しており、再設定は不要です。必要なのは作成を制限することではなく、昇格を管理することです。
1. **承認済みの公開者は人であり、新たな管理者集団ではありません。** Glean では、全社への公開・共有は、公開権限を持つユーザーに加え、エージェントを検証して公式と認定する Agent Moderator および Department Agent Moderator ロールに限定されます。**Department Agent Moderator** は、プラットフォーム上で ATO に最も近い役割です。自部門のメンバーが作成したエージェントを閲覧、編集、検証、管理できますが、他部門のエージェントには対応できません。Agent Moderator と Admin は Hub に相当します。したがって、「誰が承認するか」という問いは、モデルの他の部分と同じ人々に対応します。機能部門では ATO、全社では Hub です。
1. **Claude Code はモデルの妥当性を裏付ける例外です。** スキルはリポジトリ（`.claude/skills/`）に置かれ、git でバージョン管理され、マージリクエストでレビューされます。これはツール自体によって強制されるリポジトリ単位の所有権であり、組織の設定切り替えは関係しません。プロセスが実際にリポジトリに結び付いている場合、ここが最も明快な配置先です。
1. **[AI marketplace](https://gitlab.com/gitlab-com/marketplace) のリソースは全社向けです。** 各リソースは自己完結し、外部やアクセス制限のあるリソースへユーザーを誘導するのではなく、利用に必要なものをすべて含める必要があります。

## プラットフォームがスコープを強制できる場所、できない場所 {#where-the-platform-can-enforce-scope-and-where-it-cant}

作成 / 公開 / 全社共有の*ポリシー*は、どちらのツールでも組織全体に適用されます。全員に対するデフォルトのメンバー権限を一度に設定します。これらの切り替えだけでは、「Marketing は公開できるが Sales はできない」とは設定できません（このような違いを実現するのは Glean の部門ごとのモデレーターロールであり、デフォルト権限の切り替えではありません）。

実際の違いが現れるのは、*特定の*共有アセットを 1 つの機能部門内に留めようとするときです。

- **Claude は現時点ではこれができません。** Connectors は組織全体でオンまたはオフにするもので、チームごとにスコープを設定できず、スキル共有も組織レベルです。したがって、機能部門のスキルをその部門内に留めるのは、**技術的な制御ではなく、所有権による管理です**。何を正規版にするかを ATO と機能部門の幹部が決定することと、正規版を保存してレビューする場所によって、その境界を保ちます。
- **Glean はできます。** 特定のエージェントを Department または ID プロバイダーのグループと共有でき、Agent Library は Department 単位でスコープを設定でき、Department Agent Moderator が機能部門ごとに管理します。そのため Glean では、機能部門単位のスコープ設定をプラットフォームが実際に支援します。

どちらの場合も原則が先にあり、プラットフォームはそれに従います。所有者が何を正規版にするかを決め、境界の強制をどの程度支援できるかはプラットフォームによって異なります。実務上の注意点は、Claude が機能部門のスキルをその部門内に留めると想定しないことです。Claude はそうしません。そこで境界を保つのは所有者です。Glean はより多くの手段を提供しますが、それでも何を昇格させるかを決めるのは所有者です。

## 3 つのスコープの実務での適用 {#how-the-three-scopes-land-in-practice}

1. **リポジトリ単位**は、強制が明確に*技術的*である唯一のスコープです。所有権は CODEOWNERS、バージョン管理は git、レビューはマージリクエスト、配布は `git pull` で行います。これは上記の Claude Code のパターンであり、引き続きこの方針を最もすっきりと表すものです。
1. **機能部門単位**は、Claude では所有権によって強制され、Glean では部門/グループのスコープ設定によって支えられます。ATO が承認者であり、Glean では Department Agent Moderator ロールがそれに対応します。
1. **全社**では、承認済みの公開者（中央機能部門で、ETA が暫定的な所属先）が、コミットしてイテレーションを進める方針のもとで、組織への公開権限を実際に使用します。Hub が承認者であり、Glean では Agent Moderator と Admin ロールがそれに対応します。

## 確認すべき未解決項目 {#open-items-to-confirm}

1. 私たちの Glean テナントで、Default Member 権限が引き続きガイド付き作成のデフォルト（作成はオン、チームメンバーとの共有はオン、公開はオフ、全社共有はオフ）になっていることを確認し、各スポークの稼働に合わせて誰を Department Agent Moderator に任命するかを決定します。
1. 機密性が高い、または規制の対象となる利用環境向けに、制限を強めるプロファイルを文書化するか、個別に対応するかを決定します。
1. Claude のグループ単位のパッケージ化を今使う価値があるか、それとも稼働するスポークが 1 つか 2 つを超えてからにするかを決定します。

## ソース {#sources}

2026 年 3 月から 4 月時点の Glean ドキュメント: [エージェントライブラリの管理](https://docs.glean.com/administration/managing-agents/managing-agent-library)、[エージェントアクセスの管理](https://docs.glean.com/administration/managing-agents/agent-access)、[ID プロバイダーのグループとのエージェント共有](https://docs.glean.com/administration/managing-agents/agent-group-sharing)。
