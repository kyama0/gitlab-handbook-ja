#!/usr/bin/env bash
# watch-pr.sh — translate-batch スキル用 PR 状態ポーラー。
#
# 60 秒ごとに gh CLI で PR を読み、reviewDecision / mergeable / state /
# mergeStateStatus / 失敗 CI チェック数のスナップショットを取る。前回値から
# 変化したときだけ 1 行 stdout に emit する (Monitor ツールが各行を通知に変換)。
#
# 終了条件（いずれかに該当した時点で exit 0）:
#   - state == MERGED または CLOSED
#   - reviewDecision == APPROVED かつ mergeable == MERGEABLE （マージ可能）
#   - reviewDecision == CHANGES_REQUESTED （CR 対応が必要）
#   - mergeable == CONFLICTING （コンフリクト解消が必要）
#   - 失敗 CI チェックあり （Hugo build 失敗等）
#   - PENDING のまま PENDING_TIMEOUT 秒経過 （既定 900 = 15 分）→ stdout に
#     "PENDING_TIMEOUT" を emit して exit 1 で抜ける（呼び出し側が
#     "@coderabbitai review" 等の追い込み判断をする）
#
# 使い方:
#   watch-pr.sh <owner/repo> <pr_number>
#   POLL_INTERVAL=60 PENDING_TIMEOUT=900 watch-pr.sh kyama0/gitlab-handbook-ja 321
#
# 依存: gh CLI, jq.

set -uo pipefail

REPO="${1:?usage: watch-pr.sh <owner/repo> <pr_number>}"
PR="${2:?usage: watch-pr.sh <owner/repo> <pr_number>}"
POLL_INTERVAL="${POLL_INTERVAL:-60}"
PENDING_TIMEOUT="${PENDING_TIMEOUT:-900}"

now_iso() { date -u +%Y-%m-%dT%H:%M:%SZ; }
emit() { printf '[%s] %s\n' "$(now_iso)" "$*"; }

prev=""
start_ts=$(date +%s)
pending_since=""

emit "watch start: $REPO#$PR (poll=${POLL_INTERVAL}s, pending_timeout=${PENDING_TIMEOUT}s)"

while true; do
  payload=$(gh pr view "$PR" --repo "$REPO" \
    --json reviewDecision,mergeable,state,mergeStateStatus,statusCheckRollup 2>/dev/null \
    || echo '{}')

  if [[ -z "$payload" || "$payload" == '{}' ]]; then
    emit "warn: gh pr view returned empty (network/auth?); retrying in ${POLL_INTERVAL}s"
    sleep "$POLL_INTERVAL"
    continue
  fi

  decision=$(jq -r '.reviewDecision // "NONE"' <<<"$payload")
  mergeable=$(jq -r '.mergeable // "UNKNOWN"' <<<"$payload")
  pr_state=$(jq -r '.state // "UNKNOWN"' <<<"$payload")
  merge_status=$(jq -r '.mergeStateStatus // "UNKNOWN"' <<<"$payload")
  ci_failed=$(jq -r '[.statusCheckRollup[]? | select(
      (.conclusion // .state // "") | ascii_upcase
        | IN("FAILURE","FAILED","TIMED_OUT","CANCELLED","ACTION_REQUIRED","ERROR")
    )] | length' <<<"$payload")
  ci_pending=$(jq -r '[.statusCheckRollup[]? | select(
      (.conclusion // .state // "") | ascii_upcase
        | IN("","PENDING","IN_PROGRESS","QUEUED","WAITING")
    )] | length' <<<"$payload")

  snap="state=$pr_state decision=$decision mergeable=$mergeable merge_status=$merge_status ci_failed=$ci_failed ci_pending=$ci_pending"

  if [[ "$snap" != "$prev" ]]; then
    emit "$snap"
    prev="$snap"
  fi

  # Terminal: PR closed/merged
  case "$pr_state" in
    MERGED|CLOSED)
      emit "terminal: $pr_state"
      exit 0
      ;;
  esac

  # Terminal: changes requested
  if [[ "$decision" == "CHANGES_REQUESTED" ]]; then
    emit "terminal: CHANGES_REQUESTED — review the comments and push fixes"
    exit 0
  fi

  # Terminal: conflicting
  if [[ "$mergeable" == "CONFLICTING" ]]; then
    emit "terminal: CONFLICTING — merge origin/main and resolve"
    exit 0
  fi

  # Terminal: any failed CI check
  if [[ "$ci_failed" -gt 0 ]]; then
    emit "terminal: CI failed ($ci_failed check(s)) — investigate and fix"
    exit 0
  fi

  # Terminal: ready to merge
  if [[ "$decision" == "APPROVED" && "$mergeable" == "MERGEABLE" && "$ci_pending" -eq 0 ]]; then
    emit "terminal: APPROVED + MERGEABLE + CI clean — ready to merge"
    exit 0
  fi

  # PENDING timeout tracking
  if [[ "$decision" == "REVIEW_REQUIRED" || "$decision" == "NONE" ]]; then
    if [[ -z "$pending_since" ]]; then
      pending_since=$(date +%s)
    else
      elapsed=$(( $(date +%s) - pending_since ))
      if [[ "$elapsed" -ge "$PENDING_TIMEOUT" ]]; then
        emit "PENDING_TIMEOUT: no review decision after ${elapsed}s — consider re-pinging CodeRabbit"
        exit 1
      fi
    fi
  else
    pending_since=""
  fi

  sleep "$POLL_INTERVAL"
done
