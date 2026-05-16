---
title: "Security 部門のギアリング比率"
description: ギアリング比率は[ビジネスドライバー](/handbook/finance/financial-planning-and-analysis/)として、機能ごとの長期的な財務目標を予測するために使われます。
upstream_path: /handbook/security/gearing-ratios/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## バグバウンティ

バグバウンティ支出のギアリング比率は次のとおりです。

- 侵害のコストは会社価値の 1% と推定する
- バグバウンティ予算は侵害コストの 10% として決定する
- バグバウンティの最高報酬は予算の 1% として決定する

例:
GitLab の価値が 35 億ドルで、重大な侵害が GitLab に 3,500 万ドルのコストをかけうるとします。
10% 比率 = 350 万ドルの予算です。同様に、予算の 1% = 35,000 ドルが最高報酬です。

おおよその月次予算は、年間予算を 12 で割って設定するべきです。バグバウンティの支払いはほとんど予測不可能であり、次の要素によって変動することを理解しておく必要があります。

- GitLab が生産しプロダクションにプッシュしたバグの数と重大度
- 研究コミュニティの参加状況
- 報酬の範囲

このギアリング比率は[Product Security](/handbook/security/product-security/) Sub-department が所有しています。侵害のコストは、過去 6 か月の GTLB の平均時価総額に基づいて、少なくとも年に 1 回再評価されるべきです。

## Security Incident Response Team (SIRT) のサイズ

SIRT は Security On-Call (SEOC) ローテーションの唯一の担い手であり、24 時間 365 日にわたって呼び出し可能なセキュリティエンジニアがいることを保証します。SIRT のサイズに関するベースラインとギアリング比率は[次のとおり合意されています](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9711#note_450845141)。

- ベースライン:
  - 8 時間 follow-the-sun ローテーションで 3 タイムゾーンをカバーする 12 名のチームメンバー:
    - JAPAC 4 名
    - EMEA 4 名
    - AMER 4 名

- チームサイズの見直しをトリガーするギアリング比率:
  - 1 か月の SEOC へのページ数が、過去 12 か月の月次平均から +50% を 3 か月連続で超える場合
  - 1 年の SEOC へのページ数が、前年から +100% を超える場合
  - チームメンバー総数が前年比で +20% 増加する場合

このギアリング比率は[Security Operations](/handbook/security/security-operations/) Sub-department が所有しています。

## Security Compliance チームの人員配置

Security Compliance チームのサイズに関する加重ギアリング比率は、認証の複雑さを考慮します。

**認証複雑度の重み付け:**

- 高複雑度（2.0 FTE）: FedRAMP, DoD
- 中複雑度（1.0 FTE）: ISO 標準, PCI DSS, ISMAP, IRAP, CMMC  
- 標準複雑度（0.5 FTE）: SOC 2, TISAX, Cyber Essentials

**算式**: 必要 FTE = Σ(アクティブな認証 × 複雑度の重み) +
コア運用スタッフ 1 名

この比率は次の場合に再評価されるべきです。

- 新しい地理的または規制ドメインを導入する認証を追加する場合
- 認証要件が大きく変わる場合
- 自動化能力により手作業が 30% 超削減される場合

このギアリング比率は Security Compliance チームが所有し、予算計画時に毎年再評価されるべきです。

## Security Compliance 外部監査予算

年間監査予算は、認証の複雑さと要件に基づいて段階的に設定されます。

**予算階層:**

- 階層 1（$200-300K）: FedRAMP, DoD, ISMAP
- 階層 2（$100-150K）: ISO 27001, IRAP, CMMC
- 階層 3（$50-75K）: SOC 2, PCI SAQ, TISAX, ISO, Cyber Essentials

予算には、スコープ変更や是正検証監査用に 10% の予備費を含めるべきです。

このギアリング比率は Security Compliance チームが所有し、予算計画時に毎年再評価されるべきです。
