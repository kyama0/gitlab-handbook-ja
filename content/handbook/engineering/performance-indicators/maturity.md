---
title: エンジニアリング部門パフォーマンス指標の成熟度
draft: true
upstream_path: "/handbook/engineering/performance-indicators/maturity/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T05:50:35Z"
translator: claude
stale: false
lastmod: "2023-12-05T02:41:58+00:00"
---

## サマリー

このページには、注力すべき構築対象を把握するために、成熟度（昇順）順に並べたパフォーマンス指標の一覧が含まれています。成熟度は指標自体の状態ではなく、自動化の状態に関連しています。

## その他の PI ページ


<!-- include omitted: includes/performance_indicator_links.md (no localized version under content/ja/) -->


## 成熟度の凡例


<!-- include omitted: includes/performance-indicator-maturities.md (no localized version under content/ja/) -->


## 成熟度別パフォーマンス指標

<!-- Depricating as original code is broken as gives all departments
<table>
    <tr>
        <td>Name</td>
        <td>Organization</td>
        <td>Maturity</td>
        <td>Reason(s)</td>
    </tr>
    <% performance_indicators_by_maturity_level.each do |pi| %>
    <tr>
        <td><%= pi.name %></td>
        <td><%= pi.org %></td>
        <td><%= color_code_maturity(pi_maturity_level(pi)) %></td>
        <td><ul><% pi_maturity_reasons(pi).each do |reason| %>
          <li><%= reason %></li>
        <% end %></ul></td>
    </tr>
    <% end %>
<table>
-->
