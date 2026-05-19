---
title: EU 違法コンテンツ報告フォーム
description: "このフォームを使用して、欧州連合で違法と考えるコンテンツを報告してください。このフォームは EU における法的権利を主張する個人、および EU デジタルサービス法（DSA）に基づいて信頼できる通報者として指定された個人または団体を対象としています"
upstream_path: "/handbook/legal/dsa/"
upstream_sha: "02cf85a2ba59858c59b2a31a0356f2371a2a8979"
translated_at: "2026-04-30T00:55:37Z"
translator: claude
stale: false
lastmod: "2025-01-27T20:33:25+00:00"
---

<div class="row my-5 5align-items-start">
    <div class="col d-flex align-items-center rounded-3 p-4 shadow" style="background-color: #6e49cb; color: #ffffff;">
        <div id="dsaFormDiv">
            <p class="h4">DSA 報告フォーム</p>
            <form action="https://us-central1-glsec-trust-safety-live.cloudfunctions.net/dsa-webhook" method="post" id="dsaForm" target="hidden-form">
                <div class="mb-3">
                    <label for="email" class="form-label">メールアドレス</label>
                    <input name="email" type="email" required class="form-control">
                </div>
                <div class="mb-3">
                    <label for="violation" class="form-label">報告する法的違反の種類</label>
                    <select name="violation" required class="form-control" id="lang">
                        <option value="violence">暴力</option>
                        <option value="terrorist">テロリストコンテンツ</option>
                        <option value="hateful">ヘイトコンテンツ</option>
                        <option value="csam">児童性的搾取</option>
                        <option value="harassment">ハラスメント</option>
                        <option value="private">プライベートまたは個人情報</option>
                        <option value="copyright">著作権または商標侵害</option>
                        <option value="other">その他の法的問題</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="location" class="form-label">違法コンテンツの場所または URL</label>
                    <textarea name="location" type="text" required class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">このコンテンツが違法と考える理由の詳細な説明を記入してください</label>
                    <textarea name="description" type="text" required class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label for="country" class="form-label">所在する EU 加盟国</label>
                    <select name="country" required class="form-control" id="lang">
                        <option value="austria">Austria</option>
                        <option value="belgium">Belgium</option>
                        <option value="bulgaria">Bulgaria</option>
                        <option value="croatia">Croatia</option>
                        <option value="cyprus">Cyprus</option>
                        <option value="czech">Czech Republic</option>
                        <option value="denmark">Denmark</option>
                        <option value="estonia">Estonia</option>
                        <option value="finland">Finland</option>
                        <option value="france">France</option>
                        <option value="Germany">Germany</option>
                        <option value="greece">Greece</option>
                        <option value="hungary">Hungary</option>
                        <option value="ireland">Ireland</option>
                        <option value="italy">Italy</option>
                        <option value="latvia">Latvia</option>
                        <option value="lithuania">Lithuania</option>
                        <option value="luxembourg">Luxembourg</option>
                        <option value="malta">Malta</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="poland">Poland</option>
                        <option value="portugal">Portugal</option>
                        <option value="romania">Romania</option>
                        <option value="slovakia">Slovakia</option>
                        <option value="slovenia">Slovenia</option>
                        <option value="spain">Spain</option>
                        <option value="sweden">Sweden</option>
                    </select>
                </div>
                <div class="mb-3">
                    <strong class="form-label">添付ファイルや関連文書がある場合は、
                    abuse@gitlab.com に送付してください</strong>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-lg btn-light">送信</button>
                </div>
            </form>
        </div>
        <div id="thankyou" class="text-center align-items-center">
            <p class="h2 mb-4">送信ありがとうございました！</p>
        </div>
    </div>
</div>

<iframe style="display:none" name="hidden-form"></iframe>
<div class="modal fade" id="videoModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color: #000000;">GitLab DSA</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    </div>
  </div>
</div>

<script>
    $("#dsaForm").on("submit", function(event) {
        console.log("Triggering submit");
        $("#thankyou").show();
        $("#dsaFormDiv").hide();
    });
</script>

<style>
    #thankyou {
        width: 100% !important;
        display: none;
    }
    #regiserFormDiv {
        display: block;
    }
    .modal.fade .modal-dialog {
      -webkit-transition: -webkit-transform 0.3s ease-out;
         -moz-transition: -moz-transform 0.3s ease-out;
           -o-transition: -o-transform 0.3s ease-out;
              transition: transform 0.3s ease-out;
    }
</style>
