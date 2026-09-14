export default {
  "id": "ch4",
  "number": 4,
  "title": "Agent + Subagent",
  "tagline": "自建審查員、平行調查、組三人隊——動手設定。",
  "intro": "回到你的 harness-workshop 專案：建立 subagent、練習並行與獨立審查，並寫下你的小隊分工。主軸是真實檔案與 @ 呼叫。",
  "outcome": "完成本章你會做出／做到：在 .opencode/agents/ 建立 reviewer，並寫出 TEAM.md，能用 @ 叫出只讀審查員。",
  "youNeed": "harness-workshop 已有 AGENTS.md／README；約 30 分鐘。",
  "minutes": 30,
  "dependsOn": [
    "ch3"
  ],
  "sections": [
    {
      "id": "4-1",
      "title": "簡介與自建測試",
      "track": "required",
      "goal": "建立一個「只審查不准改檔」的 subagent，並用 @ 叫它。",
      "steps": [
        {
          "type": "text",
          "title": "隊長與跑腿",
          "body": [
            "主 Agent（Build/Plan）跟你對話；Subagent 可被派出或用 @名字 叫出，常有獨立 Context。",
            "內建幫手含 General、Explore、Scout。先做一個最小自訂審查員。"
          ],
          "note": "也可用互動指令 opencode agent create。檔案可放 .opencode/agents/。"
        },
        {
          "type": "lab",
          "title": "實驗室：自建審查員",
          "track": "required",
          "body": [
            "回到你的 harness-workshop 專案執行。"
          ],
          "goal": "@ 叫出審查員，且它沒改檔。",
          "tasks": [
            {
              "id": "s1",
              "do": "建立 agents 目錄。",
              "expect": "看得到 .opencode/agents/",
              "command": "cd ~/harness-workshop && mkdir -p .opencode/agents"
            },
            {
              "id": "s2",
              "do": "建立 reviewer.md（檔名會變成 agent 名）。貼上內容並存檔。",
              "expect": "檔案存在。",
              "command": "---\ndescription: 只審查 README 錯字與不清處，不准改檔\nmode: subagent\npermission:\n  edit: deny\n  bash: deny\n---\n你是嚴格的文件審查員。只讀取並回報問題清單（檔名＋句子＋建議）。\n不要修改任何檔案，不要執行會改動系統的指令。\n若無法確定，就列出「需要人工確認」項目。\n"
            },
            {
              "id": "s3",
              "do": "重開或重新載入專案後，在對話用 @ 叫它審查 README。",
              "expect": "它回報問題清單，而不是直接改 README。",
              "command": "@reviewer 請審查 README.md 的錯字與不通順處，只輸出清單。",
              "hint": "若找不到 agent，確認路徑是 .opencode/agents/reviewer.md，或改用 opencode agent create。"
            },
            {
              "id": "s4",
              "do": "用 git status 或看檔案時間，確認 README 沒被它改寫。",
              "expect": "沒有未預期的檔案修改。",
              "command": "git status",
              "hint": "沒有 git 就手動打開 README 對照。"
            }
          ]
        },
        {
          "type": "choose",
          "title": "何時派 Subagent？",
          "prompt": "大範圍搜尋很多檔、怕塞爆主對話。較好？",
          "options": [
            {
              "id": "a",
              "label": "派 Explore／Subagent 去找，主桌收摘要",
              "correct": true,
              "feedback": "對。雜訊留在子桌。"
            },
            {
              "id": "b",
              "label": "把所有搜尋結果貼進主對話",
              "correct": false,
              "feedback": "書包會爆。"
            },
            {
              "id": "c",
              "label": "永遠不要用 Subagent",
              "correct": false,
              "feedback": "適度使用有幫助。"
            }
          ]
        }
      ]
    },
    {
      "id": "4-2",
      "title": "並行與 Context 影響",
      "track": "required",
      "goal": "練習一次平行提示：同時請兩個方向調查，但不要搶改同一檔。",
      "steps": [
        {
          "type": "text",
          "title": "並行像分組報告",
          "body": [
            "可同時派出多個幫手，但費用與摘要風險上升；不要讓兩個幫手改同一檔。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：平行調查（只讀）",
          "track": "required",
          "body": [
            "仍在 harness-workshop：用一個提示同時請兩個只讀方向；或連續 @explore 兩次不同問題。"
          ],
          "goal": "你得到兩份調查，主對話仍清楚。",
          "tasks": [
            {
              "id": "p1",
              "do": "確認有可讀的 README 與 AGENTS.md。",
              "expect": "兩個檔都在。"
            },
            {
              "id": "p2",
              "do": "貼上平行調查提示（要求先不要改檔）。",
              "expect": "它分別整理「文件怎麼說」與「規則怎麼說」，或派出幫手。",
              "command": "先不要改任何檔。請平行完成兩件事並分開回報：A) 從 README 摘要如何使用；B) 從 AGENTS.md 摘要禁區。最後給我兩段摘要。"
            },
            {
              "id": "p3",
              "do": "檢查回覆是否分成兩段，且沒有修改檔案。",
              "expect": "git status 乾淨或無新變更。"
            },
            {
              "id": "p4",
              "do": "寫下一句反省：這次若叫兩個 Build 同時改 README 會怎樣？",
              "expect": "你能說出「衝突／互相覆蓋」風險。"
            }
          ]
        },
        {
          "type": "choose",
          "title": "不要並行？",
          "prompt": "兩個幫手要改同一個設定檔。",
          "options": [
            {
              "id": "a",
              "label": "照樣並行比較快",
              "correct": false,
              "feedback": "容易互蓋。應串行或一人改。"
            },
            {
              "id": "b",
              "label": "不要並行，改同一檔要串行",
              "correct": true,
              "feedback": "正確。"
            },
            {
              "id": "c",
              "label": "關掉所有權限就好",
              "correct": false,
              "feedback": "關權限也不等於解決衝突流程。"
            }
          ]
        }
      ]
    },
    {
      "id": "4-3",
      "title": "獨立 Context 審查員",
      "track": "required",
      "goal": "用不同模型或獨立審查流程，避免「自己改自己審」。",
      "steps": [
        {
          "type": "text",
          "title": "請隔壁班改考卷",
          "body": [
            "審查最好獨立：不同 Session／不同模型／deny edit。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：獨立審查流程",
          "track": "required",
          "body": [
            "沿用 harness-workshop 的 reviewer；加一道人工對照。"
          ],
          "goal": "有審查清單，且你抽查過至少一項。",
          "tasks": [
            {
              "id": "r1",
              "do": "開新 Session（乾淨桌子），@reviewer 審查剛才改過的檔。",
              "expect": "得到問題清單。",
              "command": "@reviewer 請審查目前工作區與文件，列出高／中／低優先問題。不要改檔。"
            },
            {
              "id": "r2",
              "track": "optional",
              "do": "（選做）用 /models 暫時換另一顆模型再審一次同一問題。",
              "expect": "兩次審查可對照；若不能換模型就略過並註記。",
              "command": "/models"
            },
            {
              "id": "r3",
              "do": "人工抽查清單第一條：打開檔案看是不是真的。",
              "expect": "你標記「屬實／誤報」。"
            },
            {
              "id": "r4",
              "do": "把「屬實」的項目寫進 TODO.md，仍先不要大改。",
              "expect": "TODO.md 有至少一條可執行待辦。"
            }
          ]
        }
      ]
    },
    {
      "id": "4-4",
      "title": "專業團隊",
      "track": "required",
      "goal": "為 harness-workshop 選 3 個角色並寫進設定或筆記。",
      "steps": [
        {
          "type": "text",
          "title": "三個清楚角色 > 十個空名",
          "body": [
            "Build/Plan + Explore + Reviewer（或 Scout 查外部文件）通常夠用。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：組你的三人組",
          "track": "required",
          "body": [
            "在 harness-workshop 寫 TEAM.md。"
          ],
          "goal": "TEAM.md 寫明誰做什麼、誰不能改檔。",
          "tasks": [
            {
              "id": "t1",
              "do": "建立 TEAM.md，列出三角色與權限。",
              "expect": "檔案包含 Build/Plan、Explore、Reviewer。",
              "command": "cd ~/harness-workshop && cat > TEAM.md << 'EOF'\n# 我的 OpenCode 小隊\n- Plan/Build（主）：跟我對話；Build 可改檔但高風險要問\n- Explore（只讀）：找檔、搜尋\n- Reviewer（只讀）：找問題、不准改檔\n規則：改同一檔不並行；審查用獨立 Session\nEOF"
            },
            {
              "id": "t2",
              "do": "在 OpenCode 請它複述 TEAM.md，並問何時該叫 Explore。",
              "expect": "它回答與文件一致。",
              "command": "請讀 TEAM.md，用自己的話說：什麼時候該叫 Explore？什麼時候該叫 Reviewer？"
            },
            {
              "id": "t3",
              "do": "實際 @explore 或請主 Agent 派 Explore 找「哪個檔寫浮水印相關」。",
              "expect": "得到檔名列表，主對話沒被塞爆。",
              "command": "@explore 找出與浮水印或 README 說明最相關的檔，只回檔名與一句理由。"
            }
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "你建立的 .opencode/agents/reviewer.md 把 edit 設成 deny，是為了？",
      "options": [
        {
          "id": "a",
          "label": "讓它只報告問題，不當選手又當裁判",
          "correct": true,
          "feedback": "對。你還用 git status 確認 README 沒被改寫。"
        },
        {
          "id": "b",
          "label": "讓它跑比較快",
          "correct": false,
          "feedback": "這是職責與安全，不是速度魔法。"
        },
        {
          "id": "c",
          "label": "因為審查員不會打字",
          "correct": false,
          "feedback": "它會打字，只是不該直接改檔。"
        }
      ]
    },
    {
      "id": "q2",
      "question": "平行調查實驗室要求「先不要改任何檔」，為什麼？",
      "options": [
        {
          "id": "a",
          "label": "兩個幫手若同時改同一檔容易互蓋；只讀調查比較安全",
          "correct": true,
          "feedback": "正確。你也寫過反省：兩個 Build 同時改 README 會衝突。"
        },
        {
          "id": "b",
          "label": "因為檔案不能被讀取",
          "correct": false,
          "feedback": "可以讀，只是不要並行改同一檔。"
        },
        {
          "id": "c",
          "label": "因為 OpenCode 禁止一切寫入",
          "correct": false,
          "feedback": "Build 可以寫；重點是流程。"
        }
      ]
    },
    {
      "id": "q3",
      "question": "TEAM.md 裡 Reviewer 的關鍵規則是？",
      "options": [
        {
          "id": "a",
          "label": "只讀、找問題、不准改檔",
          "correct": true,
          "feedback": "對。這與你自建的 reviewer 權限一致。"
        },
        {
          "id": "b",
          "label": "可以隨便刪專案",
          "correct": false,
          "feedback": "那剛好相反。"
        },
        {
          "id": "c",
          "label": "負責繳交作業",
          "correct": false,
          "feedback": "繳交仍是你的責任。"
        }
      ]
    }
  ]
}
