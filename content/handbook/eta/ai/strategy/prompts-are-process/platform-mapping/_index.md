---
title: "ガバナンス姿勢: プラットフォームマッピング"
description: "私たちのガイド付き作成の姿勢が Claude と Glean の管理設定にどのように対応するか、また各プラットフォームが機能部門スコープをどこで強制でき、どこでできないかを示します。"
upstream_path: "/handbook/eta/ai/strategy/prompts-are-process/platform-mapping/"
upstream_sha: ce9fa1b620ec7b7d82d870744ba32e7c4c1fef1c
translated_at: "2026-06-24T07:51:36+09:00"
translator: codex
stale: false
lastmod: "2026-06-23T11:57:02+01:00"
---

これは [Prompts are Process](../) の補足です。同ページでは、個人利用は自由であり、正規の共有版へ昇格するには owner とレビューを通す、というポリシーを示しています。あのページは意図的にツール非依存にしています。このページは配線図です。私たちの姿勢を、Claude サーフェス（Chat、Cowork、Code）と Glean 全体の管理設定に対応付けます。この分割は、ツール非依存かツール固有かの違いであり、何かを隠すためではありません。

Enterprise AI (ETA) がこの設定を所有します。プラットフォームとツールの選択は Hub の決定権であり、function の決定権ではありません。

## 姿勢を一言で

ガイド付き作成: 誰でも構築と実験ができます。正規の共有版への昇格は、[3 つのスコープ](../#three-places-ownership-can-sit)（function-scoped、repo-scoped、company-wide）のいずれかを通じて所有され、レビューされます。

## 姿勢をプラットフォーム設定に対応付ける

| 姿勢の意図 | Claude (Chat, Cowork, Code) | Glean |
|---|---|---|
| 各自が自分の skills/agents を作成できる | User-created skills を有効化 | "Can create agents" (Default Member permission, default **On**) |
| peer-to-peer で共有できる | Skill sharing を有効化 | "Can share agents with individual teammates" (default **On**) |
| 全員への公開は自動ではなくゲートされる | Share-with-organisation をオフにし、org への昇格は owner と review を通す | "Can publish agents" (default **Off**) and "Can share agents with the entire company" (default **Off**) |
| 承認済み作業をチームへ配布する | 関連する group に合わせて package 化し、scope する（例: team plugin） | agent を Department または identity-provider group（Google/Entra）と共有する。Agent Library で Verified / company-branded として mark して promote する。Library categories を Department で scope する |
| sensitive なケースにはより強い control をかける | その surface を admin-curated 寄りに tightened する（user creation off） | Default Member permissions を tightened する。per-agent access tiers（Viewer / Editor / Owner）と underlying document permissions で reach を control する |

Glean のコントロールは、Admin Console の **Users → Default Member permissions**（create/share/publish のトグル）と **Agents**（Library、verification、group-sharing）の下にあります。Claude の org-level トグルは org/admin settings にあり、Claude サーフェス全体に適用されます。

特に取り上げる価値がある点は 3 つあります。

1. **Glean はデフォルトでガイド付き作成を備えています。** 初期状態で、default members は agents を作成し、個々の teammates と共有できますが、会社全体へ publish したり共有したりすることはできません。これはまさに私たちの姿勢であり、再設定は不要です。作業は作成をロックダウンすることではなく、昇格をガバナンスすることです。
1. **承認済み publisher は人であり、新しい admin クラブではありません。** Glean では、company-wide reach は publish 権限を持つユーザーに加え、agents を公式として verify し brand 付けする Agent Moderator と Department Agent Moderator ロールによってゲートされます。**Department Agent Moderator** は、ATO に最も近いプラットフォーム上の類似物です。自部門のメンバーが作成した agents を確認、編集、verify、govern できますが、他部門のものはできません。Agent Moderator と Admin は Hub です。したがって、「誰が承認するか」という問いは、モデルの他の部分と同じ人々に対応します。function については ATO、company-wide については Hub です。
1. **Claude Code はモデルを証明する例外です。** その skills はリポジトリ（`.claude/skills/`）に存在し、git でバージョン管理され、マージリクエストでレビューされます。これは、tooling 自体によって強制される repo-scoped ownership であり、org トグルは関係しません。プロセスが本当にリポジトリに結び付いている場合、ここが最も明快な置き場所です。

## プラットフォームがスコープを強制できる場所、できない場所

create / publish / share-to-company の*ポリシー*は、どちらのツールでも org-wide です。default member permissions は全員に対して一度設定します。これらのトグルだけでは、「Marketing は publish できるが Sales はできない」とは言えません（Glean の per-department moderator ロールが、そのような差異のためのレバーであり、default-permission トグルではありません）。

本当の違いは、*特定の*共有アセットを 1 つの function 内に留めようとするときに現れます。

- **Claude は現時点でこれができません。** Connectors は org-wide でオンまたはオフになり、team ごとにスコープできません。また、skill-sharing も org-level です。そのため、function の skill をその function 内に留めることは、**所有権のコントロールであり、技術的なコントロールではありません**。それは、ATO と function exec が何を canonical にするかを決定すること、および canonical version が保存されレビューされる場所によって保たれます。
- **Glean はできます。** 特定の agent は Department または identity-provider group と共有でき、Agent Library は Department ごとにスコープでき、Department Agent Moderator が function ごとにガバナンスできます。そのため Glean では、function-scoping に実際のプラットフォームサポートがあります。

いずれの場合も、原則が先にあり、プラットフォームがそれに従います。ownership が何を canonical にするかを決定し、プラットフォームはその境界の強制をどの程度支援できるかが異なります。実務上の注意点は、Claude が function の skills をその function 内に留めると想定しないことです。Claude はそうしません。そこでは owner が境界を保ちます。Glean はより多くの手段を提供しますが、それでも何を昇格するかを決めるのは owner です。

## 3 つのスコープが実務でどう落ちるか

1. **Repo-scoped** は、強制が*技術的*であり、しかも明快な唯一のスコープです。ownership は CODEOWNERS、versioning は git、review はマージリクエスト、distribution は `git pull` です。これは上記の Claude Code パターンであり、この姿勢の最も整った表現であり続けます。
1. **Function-scoped** は Claude では ownership によって強制され、Glean では department/group scoping によって支えられます。ATO が approver であり、Glean では Department Agent Moderator ロールがそれに対応します。
1. **Company-wide** は、approved publishers（central functions、ETA が暫定的な置き場所）が commit-and-iterate のもとで、org-publishing rights を実際に使用する場所です。Hub が approver であり、Glean では Agent Moderator と Admin ロールがそれに対応します。

## 確認すべき未解決項目

1. 私たち自身の Glean tenant で、Default Member permissions が引き続きガイド付き作成のデフォルト（create on、share-with-teammate on、publish off、share-with-company off）になっていることを確認し、各 spoke が稼働するにつれて誰を Department Agent Moderators に任命するかを決定します。
1. sensitive または regulated surfaces のために文書化された "tighten" profile を用意するか、ケースバイケースで扱うかを決定します。
1. Claude の group-scoped packaging を今使う価値があるか、それとも live spokes が 1 つか 2 つを超えてからにするかを決定します。

## ソース

2026 年 3 月から 4 月時点の Glean documentation: [Managing agent library](https://docs.glean.com/administration/managing-agents/managing-agent-library), [Managing agent access](https://docs.glean.com/administration/managing-agents/agent-access), [Sharing agents with identity provider groups](https://docs.glean.com/administration/managing-agents/agent-group-sharing).
