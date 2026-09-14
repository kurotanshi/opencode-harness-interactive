export default {
  "id": "ch9",
  "number": 9,
  "title": "WorkDash 實戰",
  "tagline": "提問→規格→除錯 skill→摘要沉澱——整條跟著作。",
  "intro": "回到你的 harness-workshop：在 workdash/ 子資料夾把 Harness 走完——Question 釐清、除錯 Skill、換 Session、UI 描述與摘要沉澱。同一棵專案樹，不是另起爐灶。",
  "outcome": "完成本章你會做出／做到：在 harness-workshop/workdash/ 產出 SPEC.md、除錯 Skill、UI.md 與 SESSION-SUMMARY.md。",
  "youNeed": "建議先完成第 8 章審計；同一 harness-workshop；約 35 分鐘。",
  "minutes": 35,
  "dependsOn": [
    "ch8"
  ],
  "sections": [
    {
      "id": "9-1",
      "title": "設計與 Question 工具釐清需求",
      "track": "required",
      "goal": "為 WorkDash 用提問產出規格，並寫進 AGENTS.md。",
      "steps": [
        {
          "type": "text",
          "title": "WorkDash 故事",
          "body": [
            "WorkDash＝給自己的工作儀表板（待辦／進度／摘要）。先問清楚再寫碼。",
            "延續性：在 ~/harness-workshop/workdash 子資料夾發展，根目錄的 AGENTS／審計仍然有效。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：Question 風格釐清",
          "track": "required",
          "body": [
            "回到你的 harness-workshop 專案，建立 workdash/ 子資料夾（不要另開全新大教室）。"
          ],
          "goal": "有 SPEC.md 與更新過的規則。",
          "tasks": [
            {
              "id": "w1",
              "do": "在共用專案下建立 workdash 子資料夾並進入。",
              "expect": "路徑在 harness-workshop/workdash。",
              "command": "mkdir -p ~/harness-workshop/workdash && cd ~/harness-workshop/workdash",
              "hint": "Windows：mkdir $HOME\\harness-workshop\\workdash; cd $HOME\\harness-workshop\\workdash"
            },
            {
              "id": "w2",
              "do": "在該資料夾啟動 OpenCode，貼上提問要求（Plan）。",
              "expect": "它一次問一題或列出問題請你答。",
              "command": "我們要做 WorkDash 第一版（位於 harness-workshop/workdash）。請用提問幫我釐清：使用者是誰、第一版只做哪三件事、成功長怎樣、明確不做什麼。一次只問一題，得到我同意前不要改檔。"
            },
            {
              "id": "w3",
              "do": "回答完後，請它把規格寫成 SPEC.md。",
              "expect": "SPEC.md 有四區塊。",
              "command": "請把我們的共識寫成 SPEC.md，含：使用者、三件事、成功樣貌、不做什麼。"
            },
            {
              "id": "w4",
              "do": "把規格重點寫進此子資料夾的 AGENTS.md（可 /init 後再改）；也可在根目錄 AGENTS 加一行指向 workdash/。",
              "expect": "AGENTS.md 看得到 WorkDash 目標。",
              "command": "/init"
            }
          ]
        },
        {
          "type": "checklist",
          "title": "開幹前",
          "body": [
            "勾過才進 Build："
          ],
          "items": [
            {
              "id": "d1",
              "text": "知道使用者是誰"
            },
            {
              "id": "d2",
              "text": "第一版只做三件事"
            },
            {
              "id": "d3",
              "text": "成功可驗收"
            },
            {
              "id": "d4",
              "text": "寫了不做什麼"
            }
          ]
        }
      ]
    },
    {
      "id": "9-2",
      "title": "除錯、跨界與換方法",
      "track": "required",
      "goal": "建立除錯 Skill 短檔，並練習換 Session／換方法。",
      "steps": [
        {
          "type": "text",
          "title": "壞了不要死磕同一句",
          "body": [
            "可換 Skill、換 Session、換模型。先建立除錯技能卡。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：除錯技能＋假故障",
          "track": "required",
          "body": [
            "仍在 harness-workshop/workdash。"
          ],
          "goal": "有 debug skill，並走完一輪假故障。",
          "tasks": [
            {
              "id": "d1",
              "do": "建立 skill 檔。",
              "expect": "路徑存在。",
              "command": "cd ~/harness-workshop/workdash && mkdir -p .opencode/skills/workdash-debug"
            },
            {
              "id": "d2",
              "do": "寫入 SKILL.md。",
              "expect": "有重現→訊息→假設→只改一處。",
              "command": "---\nname: workdash-debug\ndescription: WorkDash 除錯：重現、收集訊息、單一假設、只改一處\n---\n1. 請使用者寫重現步驟\n2. 收集錯誤文字或截圖描述\n3. 提出一個假設\n4. 只改一處並說明驗證方式\n5. 失敗則換假設，不要一次改爆\n"
            },
            {
              "id": "d3",
              "do": "假裝「待辦勾了沒存檔」，請它用該技能，先不要改檔。",
              "expect": "它先問重現與假設。",
              "command": "請用 workdash-debug 技能。問題：勾選待辦後重新整理就消失。先不要改檔。"
            },
            {
              "id": "d4",
              "do": "開新 Session，只帶 SPEC.md＋錯誤描述再問一次，體驗乾淨桌子。",
              "expect": "新 Session 仍能靠檔案接上。",
              "command": "請讀 SPEC.md。問題：勾選待辦後重整消失。先給假設，不要改檔。"
            }
          ]
        }
      ]
    },
    {
      "id": "9-3",
      "title": "多模態、摘要與沉澱",
      "track": "required",
      "goal": "練習描述截圖／UI、產出摘要接力棒，完成 WorkDash 工坊閉環。",
      "steps": [
        {
          "type": "text",
          "title": "看得到與留得下",
          "body": [
            "UI 問題可貼截圖（若環境支援）或文字描述版面。結束時一定要沉澱到檔案。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：UI 描述＋摘要沉澱",
          "track": "required",
          "body": [
            "仍在 harness-workshop/workdash：走完最後一哩，並連回根目錄的審計。"
          ],
          "goal": "有 UI 筆記與 SESSION-SUMMARY.md。",
          "tasks": [
            {
              "id": "u1",
              "do": "建立 UI.md，用文字描繪你想像的首屏（三個區塊）。",
              "expect": "有標題／待辦／摘要區描述。",
              "command": "cd ~/harness-workshop/workdash && cat > UI.md << 'EOF'\n# WorkDash 首屏\n- 上方：今日標題與日期\n- 中間：待辦列表（可勾選）\n- 右側或下方：一週摘要（三句）\nEOF"
            },
            {
              "id": "u2",
              "do": "請 OpenCode 依 UI.md 列出實作順序（Plan），仍先不寫大段程式。",
              "expect": "有分步順序。",
              "command": "請讀 SPEC.md 與 UI.md，用 Plan 列出最小實作順序（5 步內）。不要改檔。"
            },
            {
              "id": "u3",
              "do": "請它把本日決策寫成 SESSION-SUMMARY.md：做了什麼、沒做什麼、下一步。",
              "expect": "摘要檔存在且可交接。",
              "command": "請建立 SESSION-SUMMARY.md：今日決策、已完成、未完成、下一步第一個動作。"
            },
            {
              "id": "u4",
              "do": "對照第 8 章：打開 ~/harness-workshop/AUDIT.md，寫一句「WorkDash 讓我練到哪一層」。",
              "expect": "有一句自我定位連回同一專案樹。"
            }
          ]
        },
        {
          "type": "choose",
          "title": "最重要的沉澱？",
          "prompt": "跨天接續 WorkDash，最重要？",
          "options": [
            {
              "id": "a",
              "label": "只靠記憶",
              "correct": false,
              "feedback": "記憶會丟。"
            },
            {
              "id": "b",
              "label": "SPEC／AGENTS／摘要檔＋可接續 Session",
              "correct": true,
              "feedback": "對，檔案才是接力棒。"
            },
            {
              "id": "c",
              "label": "每天換全新規則檔名",
              "correct": false,
              "feedback": "會失去單一可信來源。"
            }
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "WorkDash 練習應建在哪裡？",
      "options": [
        {
          "id": "a",
          "label": "~/harness-workshop/workdash（同一棵專案樹的子資料夾）",
          "correct": true,
          "feedback": "對！不是另開 ~/opencode-labs/workdash 斷掉連續性。"
        },
        {
          "id": "b",
          "label": "每次隨機新資料夾",
          "correct": false,
          "feedback": "會失去跨章檔案與審計連線。"
        },
        {
          "id": "c",
          "label": "只存在聊天紀錄",
          "correct": false,
          "feedback": "要寫進檔案。"
        }
      ]
    },
    {
      "id": "q2",
      "question": "你用 Question 風格釐清後，規格應寫進？",
      "options": [
        {
          "id": "a",
          "label": "SPEC.md（還有四區塊：使用者、三件事、成功、不做什麼）",
          "correct": true,
          "feedback": "正確。開幹前清單也要勾過。"
        },
        {
          "id": "b",
          "label": "只喊一次「你懂的」",
          "correct": false,
          "feedback": "不夠清楚。"
        },
        {
          "id": "c",
          "label": "金鑰檔",
          "correct": false,
          "feedback": "規格與金鑰無關。"
        }
      ]
    },
    {
      "id": "q3",
      "question": "workdash-debug 技能要求「先不要改檔」時，助手應？",
      "options": [
        {
          "id": "a",
          "label": "先問重現步驟並提出假設",
          "correct": true,
          "feedback": "對。你還用新 Session 只帶 SPEC.md 再練一次。"
        },
        {
          "id": "b",
          "label": "立刻改十個檔",
          "correct": false,
          "feedback": "違反技能卡。"
        },
        {
          "id": "c",
          "label": "刪掉 AUDIT.md",
          "correct": false,
          "feedback": "審計要保留並連回。"
        }
      ]
    },
    {
      "id": "q4",
      "question": "最後一步連回 AUDIT.md，是為了？",
      "options": [
        {
          "id": "a",
          "label": "把 WorkDash 經驗沉澱回同一專案的六層審計",
          "correct": true,
          "feedback": "正確。貫穿全書的 spine 在這裡閉環。"
        },
        {
          "id": "b",
          "label": "證明可以忘掉第 2 章資料夾",
          "correct": false,
          "feedback": "恰恰相反，要一直用同一棵樹。"
        },
        {
          "id": "c",
          "label": "自動繳交作業",
          "correct": false,
          "feedback": "仍要你自己負責。"
        }
      ]
    }
  ]
}
