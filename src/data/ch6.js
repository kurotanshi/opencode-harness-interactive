export default {
  "id": "ch6",
  "number": 6,
  "title": "opencode.json",
  "tagline": "編輯設定、加權限、做 /check——配線圖親手接。",
  "intro": "回到你的 harness-workshop：打開 opencode.json，加入 permission 與自訂指令。OpenPets／Telegram 等插件路徑標為選做。",
  "outcome": "完成本章你會做出／做到：在 harness-workshop 的 opencode.json 寫好 permission，並做出可跑的 /check 指令。",
  "youNeed": "harness-workshop；第 5 章必做（TOOLS／Skill）更順；約 30 分鐘。",
  "minutes": 30,
  "dependsOn": [
    "ch5"
  ],
  "sections": [
    {
      "id": "6-1",
      "title": "結構",
      "track": "required",
      "goal": "打開／建立 opencode.json，認識 $schema 與主要欄位。",
      "steps": [
        {
          "type": "text",
          "title": "設定中樞",
          "body": [
            "opencode.json / opencode.jsonc 可放專案根目錄；全域在 ~/.config/opencode/。專案設定常進 Git，金鑰絕對不要。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：建立設定骨架",
          "track": "required",
          "body": [
            "回到你的 harness-workshop 專案操作。"
          ],
          "goal": "有一份含 $schema 的設定檔。",
          "tasks": [
            {
              "id": "c1",
              "do": "建立或打開 opencode.json。",
              "expect": "檔案存在。",
              "command": "cd ~/harness-workshop && (test -f opencode.json || echo \"{}\" > opencode.json)"
            },
            {
              "id": "c2",
              "do": "貼上最小骨架（可依現有內容合併）。",
              "expect": "含 $schema 欄位。",
              "command": "{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"model\": \"opencode/gpt-5.1-codex\"\n}",
              "hint": "model 字串請改成你 /models 裡真實有的 id；格式常是 provider/model。"
            },
            {
              "id": "c3",
              "do": "用編輯器看是否有 schema 提示（紅線／自動完成）。",
              "expect": "你知道 $schema 在幫你檢查。"
            },
            {
              "id": "c4",
              "do": "確認檔案沒有寫入任何 API 金鑰。",
              "expect": "沒有 sk- 或 token 字串。"
            }
          ]
        },
        {
          "type": "choose",
          "title": "為何專案放 opencode.json？",
          "prompt": "團隊常把設定放進專案是為了？",
          "options": [
            {
              "id": "a",
              "label": "讓權限與工具盡量一致",
              "correct": true,
              "feedback": "對。但金鑰別進 Git。"
            },
            {
              "id": "b",
              "label": "公開 API 金鑰",
              "correct": false,
              "feedback": "千萬不要。"
            },
            {
              "id": "c",
              "label": "JSON 只是裝飾",
              "correct": false,
              "feedback": "它會改變行為。"
            }
          ]
        }
      ]
    },
    {
      "id": "6-2",
      "title": "Primary vs Subagent 權限",
      "track": "required",
      "goal": "在設定裡加入 permission：allow / ask / deny。",
      "steps": [
        {
          "type": "text",
          "title": "三態煞車",
          "body": [
            "allow 直接做、ask 先問、deny 關閉。Subagent 應最小權限。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：加入權限",
          "track": "required",
          "body": [
            "合併進 harness-workshop 的 opencode.json。"
          ],
          "goal": "permission 區塊生效構想已寫下。",
          "tasks": [
            {
              "id": "p1",
              "do": "把下列 permission 範例合併進設定（保留你的 model／mcp）。",
              "expect": "檔案含 \"permission\"。",
              "command": "{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"permission\": {\n    \"*\": \"ask\",\n    \"bash\": {\n      \"*\": \"ask\",\n      \"git status\": \"allow\",\n      \"git diff\": \"allow\",\n      \"git log\": \"allow\",\n      \"rm *\": \"deny\"\n    }\n  }\n}",
              "hint": "物件規則由上到下／最後匹配者生效；細節見官方 permissions 文件。"
            },
            {
              "id": "p2",
              "do": "重開 OpenCode，請它執行 git status（應較容易 allow）。",
              "expect": "它能跑或依你的規則詢問。",
              "command": "請執行 git status 並摘要結果。"
            },
            {
              "id": "p3",
              "do": "請它刪除一個重要檔（測試它是否被擋或詢問）。立刻拒絕真正刪除。",
              "expect": "它被 deny／ask；你沒有真的刪檔。",
              "command": "請刪除 README.md（這是權限測試，若需確認請先問我）。",
              "hint": "若它真的要刪，選拒絕。測完可把對話目的說清楚。"
            },
            {
              "id": "p4",
              "do": "在 TEAM.md 或 AGENTS.md 加一句：審查員 edit=deny。",
              "expect": "文件與設定方向一致。"
            }
          ]
        }
      ]
    },
    {
      "id": "6-3",
      "title": "斜線指令、快捷鍵與 Command",
      "track": "required",
      "goal": "新增自訂 /check 指令，並記下一個快捷鍵查法。",
      "steps": [
        {
          "type": "text",
          "title": "斜線是法術書",
          "body": [
            "自訂指令可放 .opencode/commands/*.md，或寫在設定的 command 欄。",
            "快捷鍵細節在 tui.json 的 keybinds；預設 leader 常為 Ctrl+X。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：做 /check",
          "track": "required",
          "body": [
            "在 harness-workshop 建立命令檔並在 TUI 試跑。"
          ],
          "goal": "輸入 /check 會跑你的模板。",
          "tasks": [
            {
              "id": "k1",
              "do": "建立 commands 目錄與 check.md。",
              "expect": "檔案存在。",
              "command": "cd ~/harness-workshop && mkdir -p .opencode/commands"
            },
            {
              "id": "k2",
              "do": "寫入 check.md 內容。",
              "expect": "含 description 與提示模板。",
              "command": "---\ndescription: 跑一輪快速驗收說明\nagent: build\n---\n請不要大改架構。依序：\n1) 讀 AGENTS.md 與 README\n2) 列出我現在該手動檢查的 5 件事\n3) 若有測試指令，告訴我怎麼跑（先不要執行危險指令）\n"
            },
            {
              "id": "k3",
              "do": "在 TUI 輸入 /check。",
              "expect": "它依模板列出驗收事項。",
              "command": "/check"
            },
            {
              "id": "k4",
              "track": "optional",
              "do": "（選做）打開官方 keybinds 文件或本機 tui 設定，找出 session_list 或 switch_agent 對應鍵。",
              "expect": "你寫下一個快捷鍵在筆記。",
              "command": "https://opencode.ai/docs/keybinds/",
              "hint": "不要亂改一堆鍵；先認得查法。"
            }
          ]
        }
      ]
    },
    {
      "id": "6-4",
      "title": "Plugin：OpenPets 與 Telegram",
      "track": "optional",
      "goal": "（選做）用安全檢查清單評估插件；不強制安裝。",
      "steps": [
        {
          "type": "text",
          "title": "插件是外接零件",
          "body": [
            "OpenPets、Telegram 等屬執行時期擴充概念：來源不明就不要裝。這一節以安全習慣為主，可先跳過仍算走完主線。"
          ]
        },
        {
          "type": "lab",
          "title": "實驗室：插件安全審查（紙上＋設定位置）",
          "track": "optional",
          "body": [
            "在 harness-workshop 寫 PLUGIN-CHECK.md；找到設定裡 plugin 相關位置即可，不必真的安裝。"
          ],
          "goal": "你有書面安全檢查，且知道設定入口。",
          "tasks": [
            {
              "id": "g1",
              "do": "建立檢查表。",
              "expect": "檔案存在。",
              "command": "cd ~/harness-workshop && cat > PLUGIN-CHECK.md << 'EOF'\n# 插件安裝前\n- [ ] 來源可信嗎？\n- [ ] 需要哪些權限／網路？\n- [ ] 會不會把對話或檔案外傳？\n- [ ] 出問題時怎麼卸載？\n- [ ] 金鑰是否需另放環境變數？\nEOF"
            },
            {
              "id": "g2",
              "do": "在官方 plugins／config 文件查 plugin 欄位怎麼寫（瀏覽器打開）。",
              "expect": "你知道是寫在 OpenCode config，不是隨便丟 exe。",
              "command": "https://opencode.ai/docs/config/"
            },
            {
              "id": "g3",
              "do": "假設要裝「把訊息傳到手機」的插件：用檢查表模擬勾選，並寫一句「我現在不裝的原因或要問大人的問題」。",
              "expect": "有書面結論。"
            }
          ]
        },
        {
          "type": "checklist",
          "title": "裝之前",
          "body": [
            "至少勾這些："
          ],
          "items": [
            {
              "id": "pl1",
              "text": "來源可信",
              "hint": "不要路人零件"
            },
            {
              "id": "pl2",
              "text": "知道權限與網路",
              "hint": "外傳風險"
            },
            {
              "id": "pl3",
              "text": "金鑰不進 Git",
              "hint": "用環境變數"
            }
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "question": "你在 opencode.json 加的 permission 裡，git status 被設成？",
      "options": [
        {
          "id": "a",
          "label": "allow（較容易直接跑）",
          "correct": true,
          "feedback": "對。你實驗室也請它執行 git status 驗證過。"
        },
        {
          "id": "b",
          "label": "一定要刪除整個硬碟",
          "correct": false,
          "feedback": "rm 才是 deny 範例。"
        },
        {
          "id": "c",
          "label": "什麼都沒設也可以貼金鑰",
          "correct": false,
          "feedback": "金鑰永遠不要進設定檔。"
        }
      ]
    },
    {
      "id": "q2",
      "question": "你建立 /check 時，命令檔放在哪？",
      "options": [
        {
          "id": "a",
          "label": ".opencode/commands/check.md（harness-workshop 內）",
          "correct": true,
          "feedback": "正確。輸入 /check 就會跑你的驗收模板。"
        },
        {
          "id": "b",
          "label": "系統回收桶",
          "correct": false,
          "feedback": "那不是命令路徑。"
        },
        {
          "id": "c",
          "label": "只寫在聊天裡一次就好",
          "correct": false,
          "feedback": "寫成命令檔才能重複用。"
        }
      ]
    },
    {
      "id": "q3",
      "question": "權限測試叫它刪 README 時，你應該？",
      "options": [
        {
          "id": "a",
          "label": "若它要真刪就拒絕；目的是測 deny／ask",
          "correct": true,
          "feedback": "對。測完確認檔案還在。"
        },
        {
          "id": "b",
          "label": "讓它刪掉並推上 Git",
          "correct": false,
          "feedback": "那會弄壞專案。"
        },
        {
          "id": "c",
          "label": "把 API 金鑰寫進 README 備份",
          "correct": false,
          "feedback": "絕對不要。"
        }
      ]
    },
    {
      "id": "q4",
      "question": "OpenPets／Telegram 插件單元標選做，主線最少要完成？",
      "options": [
        {
          "id": "a",
          "label": "設定骨架、permission、/check",
          "correct": true,
          "feedback": "對。插件安全審查有興趣再做。"
        },
        {
          "id": "b",
          "label": "一定要裝好 Telegram 才能過關",
          "correct": false,
          "feedback": "不強制安裝。"
        },
        {
          "id": "c",
          "label": "可以跳過整章 opencode.json",
          "correct": false,
          "feedback": "permission 與 /check 是必做核心。"
        }
      ]
    }
  ]
}
