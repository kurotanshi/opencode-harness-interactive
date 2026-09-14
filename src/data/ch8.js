export default {
  "id": "ch8",
  "number": 8,
  "title": "Harness 思維",
  "tagline": "六層審計、旋鈕分類、反模式——對自己的專案填表。",
  "intro": "回到你的 harness-workshop：用填空審計與小驗收實驗，把前面零件收成可駕馭的思維；反模式放在動手之後再辨認。",
  "outcome": "完成本章你會做出／做到：對 harness-workshop 填完 AUDIT.md 六層，並用 ACCEPT.md 走完一次好流程驗收。",
  "youNeed": "同一個 harness-workshop（最好已有 AGENTS、設定、Skill）；約 25 分鐘。",
  "minutes": 25,
  "dependsOn": [
    "ch2",
    "ch6"
  ],
  "sections": [
    {
      "id": "8-1",
      "title": "從會用到駕馭：六層控制力",
      "track": "required",
      "goal": "用填空清單審計自己的 harness-workshop 落在哪一層。",
      "steps": [
        {
          "type": "text",
          "title": "六層階梯",
          "body": [
            "入口 → 上下文 → 執行 → 角色 → 模型 → 治理。會打開只是第一階。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：六層審計表",
          "track": "required",
          "body": [
            "對你的 harness-workshop 專案填 AUDIT.md——就是第 2 章建的那棵樹。"
          ],
          "goal": "六層都有「現況／缺口」。",
          "tasks": [
            {
              "id": "a1",
              "do": "建立 AUDIT.md 模板。",
              "expect": "檔案存在。",
              "command": "cd ~/harness-workshop && cat > AUDIT.md << 'EOF'\n# Harness 六層審計（專案：harness-workshop）\n1 入口層（TUI/CLI/IDE）：現況／缺口\n2 上下文層（AGENTS.md/@/Session）：現況／缺口\n3 執行層（讀寫/bash/MCP）：現況／缺口\n4 角色層（agents/commands/skills）：現況／缺口\n5 模型層（provider/model/備用）：現況／缺口\n6 治理層（permission/金鑰/分享）：現況／缺口\n我現在主要卡在第 __ 層，下一週只練：____\nEOF"
            },
            {
              "id": "a2",
              "do": "逐層填寫現況（可短句）。",
              "expect": "沒有整層空白。"
            },
            {
              "id": "a3",
              "do": "圈出一層「下一週只練這個」。",
              "expect": "有明確下一層。"
            },
            {
              "id": "a4",
              "do": "請 OpenCode 讀 AUDIT.md，只針對那一層給 3 個可執行小練習。",
              "expect": "得到 3 個小練習且沒有一次叫你做完全部六層。",
              "command": "請讀 AUDIT.md，只針對我標的下一層，給 3 個今天能做完的小練習。不要改檔。"
            }
          ]
        },
        {
          "type": "choose",
          "title": "每次重講測試？",
          "prompt": "模型很強但每次重講怎麼測試，缺哪層較多？",
          "options": [
            {
              "id": "a",
              "label": "上下文層",
              "correct": true,
              "feedback": "對，規則沒沉澱。"
            },
            {
              "id": "b",
              "label": "一定是入口層",
              "correct": false,
              "feedback": "門換了班規沒寫還是會忘。"
            },
            {
              "id": "c",
              "label": "治理層主因",
              "correct": false,
              "feedback": "治理重要但不是這句主因。"
            }
          ]
        }
      ]
    },
    {
      "id": "8-2",
      "title": "平台 / Agent / 模型 三維度",
      "track": "required",
      "goal": "用故障分類表練「一次只轉一個旋鈕」。",
      "steps": [
        {
          "type": "text",
          "title": "三個旋鈕",
          "body": [
            "平台（駕駛艙／MCP／權限）、Agent（角色）、模型（大腦）。先分類再調。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：故障分類演練",
          "track": "required",
          "body": [
            "在 harness-workshop 寫下兩個真實或想像故障並分類。"
          ],
          "goal": "KNOBS.md 有分類與「下一個動作」。",
          "tasks": [
            {
              "id": "k1",
              "do": "建立 KNOBS.md。",
              "expect": "檔案存在。",
              "command": "cd ~/harness-workshop && cat > KNOBS.md << 'EOF'\n# 一次只轉一個旋鈕\n## 案例 1\n現象：\n比較像：平台 / Agent / 模型\n我下一個只做：\n## 案例 2\n現象：\n比較像：平台 / Agent / 模型\n我下一個只做：\nEOF"
            },
            {
              "id": "k2",
              "do": "案例 1 填：它很會說但點不到網頁。",
              "expect": "分類偏平台／執行層（缺手或 MCP）。"
            },
            {
              "id": "k3",
              "do": "案例 2 填：它亂改檔，計畫不清。",
              "expect": "分類偏 Agent（該用 Plan／權限）。"
            },
            {
              "id": "k4",
              "do": "請 OpenCode 評論你的分類，若不同意要說明理由。",
              "expect": "有對照討論。",
              "command": "請讀 KNOBS.md，同意或修正我的分類；強調為什麼一次只轉一個旋鈕。"
            }
          ]
        }
      ]
    },
    {
      "id": "8-3",
      "title": "反模式",
      "track": "required",
      "goal": "先做一個「好流程」小實驗，再辨認反模式考題。",
      "steps": [
        {
          "type": "text",
          "title": "常見踩坑",
          "body": [
            "無驗收就合併、一次轉三旋鈕、上下文塞爆、權限全開、規則互打。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：用好流程做一件小事",
          "track": "required",
          "body": [
            "仍在 harness-workshop：選一件小事（改 README 一行），強迫自己走完。"
          ],
          "goal": "你留下驗收紀錄。",
          "tasks": [
            {
              "id": "g1",
              "do": "寫下成功條件一句話到 ACCEPT.md。",
              "expect": "例如：README 最後一行是指定句子。",
              "command": "cd ~/harness-workshop && echo \"成功條件：README 最後一行等於「Harness 驗收 OK」\" > ACCEPT.md"
            },
            {
              "id": "g2",
              "do": "Plan 說明會改哪個檔，再 Build 執行。",
              "expect": "只動約定檔。",
              "command": "先 Plan 再改：請只把 README 最後一行設成「Harness 驗收 OK」。"
            },
            {
              "id": "g3",
              "do": "對照 ACCEPT.md 驗收並勾選。",
              "expect": "條件達成。"
            },
            {
              "id": "g4",
              "do": "在 ANTIPATTERN.md 寫下你剛才「故意沒做」的反模式（例如沒驗收就宣佈完成）。",
              "expect": "有書面對照。",
              "command": "cd ~/harness-workshop && cat > ANTIPATTERN.md << 'EOF'\n# 我避開的反模式\n- 沒有成功條件就叫它大改\n- 同時換模型＋換權限＋換 MCP\n- 把整庫貼進對話\n- permission 全部 allow\nEOF"
            }
          ]
        },
        {
          "type": "choose",
          "title": "反模式辨認",
          "prompt": "哪一個是反模式？",
          "options": [
            {
              "id": "a",
              "label": "先寫成功條件再改檔",
              "correct": false,
              "feedback": "這是好模式。"
            },
            {
              "id": "b",
              "label": "一次同時換模型、開全部權限、再加三個 MCP",
              "correct": true,
              "feedback": "對，旋鈕一次轉太多。"
            },
            {
              "id": "c",
              "label": "審查員 deny edit",
              "correct": false,
              "feedback": "這是好習慣。"
            }
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "AUDIT.md 審計的是哪一個專案？",
      "options": [
        {
          "id": "a",
          "label": "你的 harness-workshop（第 2 章建、一路用到現在）",
          "correct": true,
          "feedback": "對！六層審計要對著真實同一棵專案樹，不是空想。"
        },
        {
          "id": "b",
          "label": "隨便新建一個 junk 資料夾",
          "correct": false,
          "feedback": "會失去跨章連續性。"
        },
        {
          "id": "c",
          "label": "學校的午餐系統",
          "correct": false,
          "feedback": "不是本課專案。"
        }
      ]
    },
    {
      "id": "q2",
      "question": "你寫 ACCEPT.md「Harness 驗收 OK」再改 README，是在避免？",
      "options": [
        {
          "id": "a",
          "label": "沒有成功條件就宣佈完成的反模式",
          "correct": true,
          "feedback": "正確。先寫驗收，再 Plan/Build，最後對照勾選。"
        },
        {
          "id": "b",
          "label": "使用 Tab 鍵",
          "correct": false,
          "feedback": "Tab 是好工具。"
        },
        {
          "id": "c",
          "label": "寫 AGENTS.md",
          "correct": false,
          "feedback": "寫規則是好事。"
        }
      ]
    },
    {
      "id": "q3",
      "question": "KNOBS.md 強調「一次只轉一個旋鈕」，出問題時應？",
      "options": [
        {
          "id": "a",
          "label": "先分類是平台／Agent／模型，再只調一個",
          "correct": true,
          "feedback": "對。你案例裡「點不到網頁」偏平台，「亂改檔」偏 Agent。"
        },
        {
          "id": "b",
          "label": "同時換模型、開全權限、加三個 MCP",
          "correct": false,
          "feedback": "那是反模式。"
        },
        {
          "id": "c",
          "label": "關掉電腦再也不學",
          "correct": false,
          "feedback": "先分類再小步調整。"
        }
      ]
    }
  ]
}
