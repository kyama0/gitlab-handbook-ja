---
title: "Initiative issue template"
toc_hide: true
upstream_path: /handbook/engineering/devops/create/.gitlab/issue_templates/initiative/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2025-12-05T19:47:34+00:00"
translated_at: "2026-06-20T14:35:06Z"
translator: codex
stale: false
---

## 概要

### 説明

initiative が存在する理由（**purpose**）、何を達成しようとしているか（**goals**）、そしてそれがなぜ重要または価値があるのか（**importance**）を概説する簡潔な説明を提供してください。目標は、initiative の本質、目的、そして達成しようとしているより広い impact を伝えることです。

### Stakeholders

Customer Success、Customer Support、Marketing Leads などの外部 entity である stakeholders は、input を提供し、より広い business needs を代表します。一方、Tech Lead、Engineers、Product Managers などの内部 members で構成される Team は、tasks の実行と initiative の goals 達成に積極的に関与します。この違いを認識することは、明確な communication、role overlap の回避、effective collaboration の促進に不可欠です。stakeholders は initiative の strategic direction を導き、Team は hands-on implementation に集中して initiative 全体の success に貢献します。

## 目標

この initiative の objectives は、この initiative の goals をより広い organizational objectives と整合させることで、GitLab OKRs（Objectives and Key Results）に結び付きます。GitLab の OKR framework には通常、会社の strategic priorities と整合する high-level objectives が含まれます。一方、これらの objectives はより granular であり、より高いレベルの OKRs の達成に貢献するよう設計されています。各 Initiative には少なくとも 1 つの関連 OKR が必要です。

### OKRs (Objectives and Key Results)

<!-- markdownlint-disable MD042 -->
1. OKR title goes here ([link to current OKR for the quarter](#))
2. OKR title goes here ([link to current OKR for the quarter](#))
3. OKR title goes here ([link to current OKR for the quarter](#))

## Team

### Roles and Responsibilities

team members と、それぞれの具体的な roles and responsibilities をリストし、accountability と coordination を確立してください。

| Team Member      | Role                 | Responsibilities                              |
|-------------------|----------------------|-----------------------------------------------|
| Team Member 1    | Tech Lead            | technical vision、guidance、mentoring         |
| Team Member 2    | Engineer            | code implementation、testing                  |
| Team Member 3    | UX Designer          | user experience design、reviews               |
| Team Member 4    | Product Manager      | milestone planning、coordination、reporting  |
| Team Member 5    | SRE      | system の reliability と performance を確保する  |

## Exit Criteria

すべての exit criteria が満たされると、該当する initiative は完了し close out されます。

| Completed | Exit Criteria                | Start Date        | Completion Date   |
|-----------|------------------------------|-------------------|-------------------|
| [ ]       | すべての機能が実装済み     | January 15, 2025  | February 20, 2025 |
| [ ]       | code review completed        | February 25, 2025 | March 5, 2025     |
| [ ]       | unit tests passed            | March 10, 2025    | March 15, 2025    |
| [ ]       | system tests passed          | March 20, 2025    | March 25, 2025    |
| [ ]       | documentation updated        | March 30, 2025    | April 5, 2025     |
| [ ]       | user acceptance testing done | April 10, 2025    | April 15, 2025    |
| [ ]       | performance benchmarks met   | April 20, 2025    | April 25, 2025    |
| [ ]       | security review completed    | May 1, 2025       | May 5, 2025       |
| [ ]       | stakeholder approval obtained | May 10, 2025      | May 15, 2025      |

## Timeline

| Start Date         | Expected End Date  | Actual End Date    | Status  (Not Started, In Progress, Complete)    | Epic [Link to Epic]                | Issue [Link to Issue]                   | Assignee Mention                          |
|--------------------|-------------------|------------------|-------------|----------------------------------|----------------------------------------|------------------------------------------|
| March 1, 2025      | -                 | -                | In Progress | -                                | [Define scope](#) | @[Assignee 1]                            |
| March 15, 2025     | March 30, 2025     | -                | Not Started | [User Authentication](#) | [Design User Interface](#) | @[Assignee 2]                            |
| March 30, 2025     | April 15, 2025     | -                | Not Started | [Security Audit](#)     | [Address Identified Vulnerabilities](#) | @[Assignee 3]                    |
| April 15, 2025     | April 30, 2025     | -                | Not Started | [Database Queries Optimization](#) | [Test and Measure Performance](#) | @[Assignee 4]                   |
| April 30, 2025     | May 10, 2025       | -                | Not Started | -                                | [User Acceptance Testing](#) | @[Assignee 5]                            |
| May 10, 2025       | May 20, 2025       | -                | Not Started | -                                | [Ensure All Issues Resolved](#) | @[Assignee 6]                     |

## Risk Management

potential risks と mitigation strategies を特定し、予期しない challenges に備えてください。

| Risk Description                          | Likelihood   | Impact       | Mitigation Plan                                       |
|-------------------------------------------|--------------|--------------|--------------------------------------------------------|
| potential scope creep                     | Medium       | High         | stakeholders の expectations を管理するための regular scope reviews and communication。 |
| key team member availability              | Low          | High         | critical roles の backup plans を持ち、knowledge sharing を確保するための team members の cross-training。 |
| third-party tools への technical dependencies| High         | Medium       | third-party tools の continuous monitoring と alternative solutions の用意。 |

## Communication Plan

## Effective Communication Channels

- **Team Meetings:**
  - progress、challenges、upcoming tasks を議論する regularly scheduled meetings。
  - **Frequency:** Weekly on Mondays at 10 AM UTC.
  - **Agenda:** Link to Doc.

- **Slack Channel:**
  - ad hoc communication、quick questions、announcements のための dedicated Slack channel。
  - Team members are encouraged to use `@mentions` for specific communication.

- **Status Report Issues:**
  - status updates、achievements、challenges を報告するために project repository に issue を作成してください。特定の cadence で更新される 1 つの issue（[1](https://gitlab.com/gitlab-com/create-stage/ide/-/issues/85), [2](https://gitlab.com/gitlab-org/gitlab/-/issues/361755#note_975547547)）を作成しても、更新ごとに異なる issues（[1](https://gitlab.com/gitlab-com/create-stage/code-creation/announcements/-/issues/?sort=title_asc&state=all&first_page_size=20),2,3）を作成してもかまいません。Slack に status reports を投稿することを好む人もいますが、その場合は Slack 内で履歴が失われ、検索もしづらくなるという問題があります。
    preference は、product を使い、product を dog food し、Slack から GitLab issue へリンクできるようにすることです。
  - Link to Issue Board / Issue Lists
  - Link to Issue Lists
  - **Feedback Gathering Epic:**
  - internal and external feedback を集めるための dedicated epic へのリンク。
  - features、user experience、overall progress に関する feedback を定期的に確認してください。

## Metrics/Dashboards/Charts

### Metrics

1. [Tableau Chart 1](#)
1. [Tableau Chart 1](#)
1. [Tableau Chart 1](#)

### Monitoring

1. [Grafana Board 1](#)
1. [Kibana Graph 1](#)

## Labels

organization と tracking を改善するための labeling system を確立してください。

| Label Name       | Description                              | When to Apply                            | Applied By        |
|------------------|------------------------------------------|------------------------------------------|-------------------|
| Enhancement      | feature improvements の tasks を示す     | feature development を開始する前   | Product Team      |
| Critical         | critical issues or bugs を特定する       | critical issue が報告されたとき       | Developers        |
| Review Pending   | review 待ちの code or work を示す  | task or feature の完了後      | Developers        |
| Ready for Deploy | deployment 可能な tasks を示す     | successful testing and review 後    | DevOps Team       |
| Documentation    | documentation が必要な tasks を示す      | development process 全体を通じて      | Developers        |

具体的な labels とその usage は、initiative の workflow と requirements によって異なる場合があります。team の needs and processes に合わせて調整することが重要です。

## Quality, Security, SRE, Technical Writers

Quality、Security、SRE、TW、または取り組みを完了するために必要なその他の対応チームについて、個別の Epics を作成し、各領域で focused collaboration を確保してください。

| Start Date         | Expected End Date  | Actual End Date    | Counterpart                  | Epic  Title                                         | Exit Criteria                                    |
|--------------------|-------------------|-------------------|-----------------------|---------------------------------------------------|--------------------------------------------------|
| January 15, 2025   | February 20, 2025 | March 5, 2025     | Quality               | [rigorous testing and QA processes を通じて product 全体の quality を高め、確保する。](#) | desired test coverage を達成し、critical bugs がなく、code quality が改善された。 |
| February 1, 2025   | March 15, 2025    | March 25, 2025    | Security              | [system の integrity and confidentiality を守るために security measures を実装し強化する。](#) | required security protocols を実装し、successful penetration tests を実施した。 |
| March 1, 2025      | April 5, 2025     | April 15, 2025    | SRE                   | [system stability、performance、availability を高めるために Site Reliability Engineering (SRE) practices に集中する。](#) | agreed-upon system reliability metrics を達成し、incident response が改善された。 |
| April 1, 2025      | May 5, 2025       | May 15, 2025      | Documentation         | [理解と collaboration を容易にするために包括的な documentation を改善し維持する。](#) | new features、clear guidelines、improved user manuals を含む documentation を更新した。 |
<!-- markdownlint-enable MD042 -->

## Feedback

## Feedback Gathering

internal and external feedback の両方に対応する Epic を設定し、continuous improvement を促進してください。

## Project Team Meetings

## Regular Meetings

- Meeting Agenda
- Meeting Recordings

## Retrospective

この initiative の retrospective issue へのリンクをここに追加してください。すべての initiatives には retrospective issue が必要です。
