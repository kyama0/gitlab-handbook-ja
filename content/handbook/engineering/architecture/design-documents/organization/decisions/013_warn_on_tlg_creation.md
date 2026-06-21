---
owning-stage: "~devops::tenant scale"
title: "Organizations ADR 013: Organization 内で Top-Level-Group を作成するときに警告する"
description: "Organization レベルの課金が提供されるまで、サブスクリプションとクレジットが兄弟 Top-Level-Group 間で移転しないことを説明するため、Organization 内で Top-Level-Group を作成するユーザーに警告する決定を文書化します。"
creation-date: "2026-04-27"
authors: ["@sxuereb"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/013_warn_on_tlg_creation/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-17T22:18:42+12:00"
translated_at: "2026-06-20T13:54:37Z"
translator: codex
stale: false
---

## コンテキスト

サブスクリプション（Free、Premium、Ultimate）、クレジット、および関連する課金エンタイトルメントは、Organization ではなく Top-Level-Group にスコープされます。
Top-Level-Group が Organization に移管されると、その既存ライセンスはその Top-Level-Group に紐づいたままです。しかし、ユーザーが同じ Organization の下に別の Top-Level-Group を作成した場合、新しい Top-Level-Group は兄弟 Top-Level-Group のサブスクリプションやクレジットを継承しません。

例えば、`acmea` Top-Level-Group のオーナーが新しい Organization（同じく `acmea` という名前）を作成し、Ultimate ライセンス付きの Top-Level-Group をそこに移管します。

```text
acmea (org)
└── acmea (Top-Level-Group)
```

その後、Organization オーナーが `tlg-new` という新しい Top-Level-Group を作成すると、`acmea` と同じように動作すると期待するかもしれません。しかし、[organization レベルの請求](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263)が存在するまで、課金は現在それぞれの Top-Level-Group に紐づいているため、同じようには動作しません。

```text
acmea (org)
├── tlg-new
└── acmea (Top-Level-Group)
```

Organization がユーザーの主な操作構造になるにつれて、この違いは見落とされやすくなります。Organization 直下にグループを作成すると、既存の Top-Level-Group の課金スコープを拡張するのではなく、兄弟 Top-Level-Group が作成されます。

## 決定

ユーザーが Organization 内で Top-Level-Group を作成するとき、そのフロー中に警告を表示します。この警告は以下を伝えます。

- サブスクリプション階層（Free、Premium、Ultimate）は個々の Top-Level-Group にスコープされ、同じ Organization 内の兄弟 Top-Level-Group と共有されない。
- クレジットも Top-Level-Group ごとにスコープされるため、新しい Top-Level-Group は兄弟からクレジットを継承しない。
- [organization レベルの請求](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263)が出荷されるまで、新しい Top-Level-Group の課金は兄弟とは別になる。

警告は [organization レベルの請求](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263)が出荷されるまで残し、その後は削除できます。

## 結果

- お客様は、Organizations の中核的な価値提案である、複数の Top-Level-Group で Organization を柔軟に構成する能力を維持します。
- [organization レベルの請求](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263)が出荷されるまで、課金は Top-Level-Group ごとにスコープされたままです。影響を受ける母集団は現在小さいものの、Organizations のロールアウトに伴って増えることが予想されるため、この違いを早期に表面化することで、採用を妨げずに避けられる混乱を減らせます。
- 既存のすべての Top-Level-Group を organization に取り込む広範な計画はブロックされません。複数 Top-Level-Group を持つ organization は、Artifact Registry などの新機能を採用し、Cell 間で移行される能力を維持します。
- 後で organization 統合、registry 統合、または organization affinity のツール構築が必要になるような一方通行の決定を避けます。
- ユーザーが警告を無視して、兄弟と課金が異なる Top-Level-Group を作成し、後で驚く可能性があります。オンボーディングで補強された明確で具体的な警告文により、このリスクは軽減されますが、排除はされません。

## 検討した代替案

1. **何もしない**: ユーザーは、ライセンスとクレジットが共有されないことを知らされずに新しい Top-Level-Group を作成することになります。差異が見えるのは後になって機能やクレジットが予期せず利用できないときであり、UX の小さな痛みとサポート負荷を生むため却下しました。
1. **エンタイトルメントを共有する**: ある Top-Level-Group にクレジットやライセンスが紐づいている場合、同じ Organization 内のすべての Top-Level-Group でそれらのエンタイトルメントを共有します。エンタイトルメントは現在 Top-Level-Group 境界でモデル化され監査されており、兄弟 Top-Level-Group 間で共有するには CustomersDot などの下流の課金・エンタイトルメントシステムで大きな変更が必要になるため却下しました。
1. **Organization 内での新しい Top-Level-Group 作成をブロックする**: [organization レベルの請求](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263)が存在するまで、Organization 内で新しい Top-Level-Group を一切作成できないようにします。以下の理由で却下しました。
   - 複数 Top-Level-Group のお客様が単一 Organization に統合できる既存パスと一貫しない。
   - 既存の Top-Level-Group が organization になる広範なロールアウトをブロックします。「Top-Level-Group を作成できない」は、それらのお客様にとって機能後退だからです。
   - 複数 Top-Level-Group を持つ organization が Artifact Registry などの機能を採用したり、Cell 間で移行されたりすることをブロックします。
   - お客様を別々の organization に強制すると、後で organization 統合、registry 統合、organization affinity のツール構築が必要になるため、一方通行の決定を作ります。
   - Organizations の中核的な価値提案である、お客様が Group と Project を柔軟に構成できることを損ないます。Self-Managed と Dedicated のお客様は現在、何百、何千もの Top-Level-Group を運用していることが一般的であり、Top-Level-Group が Organizations 内の組織構造の自然な単位になることを示唆しています。
