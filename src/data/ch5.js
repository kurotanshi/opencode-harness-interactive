export default {
  id: "ch5",
  number: 5,
  title: "MCP 與 Skills",
  tagline: "貼上 mcp 設定、建立 SKILL.md——插座與技能卡都動手。",
  intro: "分清 MCP 與 Skills，在 opencode.json 練習 mcp 區塊，並建立最小 Skill。瀏覽器類工具以官方文件為準。",
  sections: [
    {
      id: "5-1",
      title: "MCP 與 Skills 的差異",
      goal: "用一句話分清插座與技能卡，並各做一個最小實作。",
      steps: [
        {
          type: "text",
          title: "兩個盒子",
          body: [
            "MCP＝外接工具插座（真的有手）。Skills＝可重用做法（SKILL.md，需要時才展開）。常搭配，不是二選一。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：先寫對照卡",
          body: [
            "在專案建立 TOOLS.md。"
          ],
          tasks: [
            {
              id: "d1",
              do: "建立 TOOLS.md 並填兩欄例子。",
              expect: "檔案存在且有例子。",
              command: "cat > TOOLS.md << 'EOF'\n# MCP vs Skills\n## 用 MCP（需要新手）\n- 要操控瀏覽器／看主控台\n- 要連外部文件服務\n## 用 Skill（需要穩定做法）\n- 每次發版同一張清單\n- 每次除錯同一套步驟\nEOF"
            },
            {
              id: "d2",
              do: "問 OpenCode：發版清單該 MCP 還是 Skill？",
              expect: "它應偏向 Skill。",
              command: "「每次發版都要打標籤、寫說明」比較像 MCP 還是 Skill？用一句話解釋。"
            }
          ],
          goal: "你能舉例何時用 MCP、何時用 Skill。"
        },
        {
          type: "choose",
          title: "發版清單？",
          prompt: "每次發版同一張清單。",
          options: [
            {
              id: "a",
              label: "Skill",
              correct: true,
              feedback: "對，這是做法。"
            },
            {
              id: "b",
              label: "一定要做 MCP",
              correct: false,
              feedback: "殺雞不必牛刀。"
            },
            {
              id: "c",
              label: "不用寫，模型會永遠記住",
              correct: false,
              feedback: "不會永遠記住。"
            }
          ]
        }
      ]
    },
    {
      id: "5-2",
      title: "Browser / Chrome DevTools MCP",
      goal: "在 opencode.json 寫下 MCP 區塊（練習用範例），並理解啟用前要注意上下文與安全。",
      steps: [
        {
          type: "text",
          title: "網頁是活的",
          body: [
            "Browser／DevTools 類 MCP 讓助手看見頁面與主控台。插座越強，越要權限與克制。",
            "以下用官方文件常見的「local + command」形狀練習；實際瀏覽器 MCP 套件名請以官方文件為準。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：貼上 MCP 範例並啟用開關",
          body: [
            "在專案根目錄建立或編輯 opencode.json。若已有內容，只合併 mcp 區塊，不要刪掉其他設定。"
          ],
          tasks: [
            {
              id: "b1",
              do: "若沒有 opencode.json，先建立最小檔；有則打開。",
              expect: "根目錄有 opencode.json。",
              command: "echo '{\"$schema\":\"https://opencode.ai/config.json\"}' > opencode.json",
              hint: "也可用編輯器新建。jsonc 可寫註解。"
            },
            {
              id: "b2",
              do: "加入練習用 MCP（server-everything）。這是文件常見測試伺服器，用來熟悉形狀。",
              expect: "mcp 區塊存在且 enabled 為 true。",
              command: "{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"mcp\": {\n    \"mcp_everything\": {\n      \"type\": \"local\",\n      \"command\": [\"npx\", \"-y\", \"@modelcontextprotocol/server-everything\"],\n      \"enabled\": true\n    }\n  }\n}",
              hint: "若專案已有設定，請手動合併 mcp 鍵，勿覆寫整檔重要內容。需要 Node／npx。"
            },
            {
              id: "b3",
              do: "重開 OpenCode 後，請它列出目前可用的 MCP／工具（或嘗試用 mcp_everything 做 3+4）。",
              expect: "它能提到你啟用的 MCP，或說明無法啟動的原因。",
              command: "請確認 mcp_everything 是否可用。若可用，用它把 3 和 4 加起來並回報。",
              hint: "若 npx 失敗，把 enabled 設 false，仍算完成本節「會寫設定」目標。"
            },
            {
              id: "b4",
              do: "在 TOOLS.md 加一行安全提醒：MCP 會佔用 Context，不要一次開太多。",
              expect: "文件有這句提醒。"
            }
          ],
          goal: "設定檔裡有 mcp 區塊與 enabled。",
          note: "真要接瀏覽器 MCP 時，套件名與權限以官方 MCP 文件為準；不要把危險自動點擊設成全面 allow。"
        }
      ]
    },
    {
      id: "5-3",
      title: "Playwright 與 DeepWiki",
      goal: "用清單決定「何時上重工具」，並寫下一條最小驗證指令構想。",
      steps: [
        {
          type: "text",
          title: "工具有重量",
          body: [
            "Playwright 類適合真實點擊流程；DeepWiki 類適合查庫文件。先寫清目的，再接插座。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：選工具決策",
          body: [
            "更新 TOOLS.md。"
          ],
          tasks: [
            {
              id: "p1",
              do: "在 TOOLS.md 新增情境 A：按鈕被 CSS 擋住——你選 Browser/Playwright 還是只看原始碼？寫下選擇。",
              expect: "有書面決定。"
            },
            {
              id: "p2",
              do: "情境 B：想查某套件 API——你選 DeepWiki/文件 MCP 還是瞎猜？寫下選擇。",
              expect: "有書面決定。"
            },
            {
              id: "p3",
              do: "請 OpenCode 依 TOOLS.md 評論你的選擇是否合理（先不改設定）。",
              expect: "它給出同意或修正建議。",
              command: "請讀 TOOLS.md 的情境 A/B，評論我的選擇；若要接 MCP，列出我還該寫進 opencode.json 的欄位名稱（不要直接改檔）。"
            }
          ],
          goal: "你為兩個情境各選一種做法。"
        }
      ]
    },
    {
      id: "5-4",
      title: "Skills × Playwright CLI",
      goal: "建立一個最小 SKILL.md，讓助手需要時才載入步驟。",
      steps: [
        {
          type: "text",
          title: "技能卡放哪",
          body: [
            "常見路徑：.opencode/skills/<name>/SKILL.md（亦相容部分 .claude/skills）。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：建立 tiny-debug Skill",
          body: [
            "照路徑建立檔案。"
          ],
          tasks: [
            {
              id: "s1",
              do: "建立 skill 目錄。",
              expect: "路徑存在。",
              command: "mkdir -p .opencode/skills/tiny-debug"
            },
            {
              id: "s2",
              do: "寫入 SKILL.md。",
              expect: "檔案有 frontmatter 與步驟。",
              command: "---\nname: tiny-debug\ndescription: 小型除錯步驟：重現、看訊息、只改一處\n---\n當使用者說程式壞了，依序做：\n1. 請使用者重現步驟\n2. 收集錯誤訊息／截圖描述\n3. 提出一個假設\n4. 只改一處並說明如何驗證\n不要一次改很多檔。\n"
            },
            {
              id: "s3",
              do: "在 OpenCode 說：依 tiny-debug 技能幫我練習除錯（給一個假錯誤）。",
              expect: "它按步驟問重現／假設，而不是一次改爆。",
              command: "請使用 tiny-debug 技能。假設錯誤是：點擊儲存沒反應。先不要改檔，先問我重現步驟。"
            },
            {
              id: "s4",
              do: "確認你知道：Skill 教做法；若要真的開瀏覽器點擊，仍可能需要 MCP/CLI 手。",
              expect: "你能用一句話說出兩者關係。"
            }
          ],
          goal: "Skill 檔存在，並能請助手載入／遵循。"
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'MCP 比較像？',
      options: [
        {
          id: 'a',
          label: '牆上的插座，接上外部工具',
          correct: true,
          feedback: '正確。接上之後助手多了新手；也記得加閘門。',
        },
        {
          id: 'b',
          label: '一本永遠自動更新的小說',
          correct: false,
          feedback: '那不是 MCP。文件仍可能過時，要核對。',
        },
        {
          id: 'c',
          label: '只能用來畫圖的濾鏡',
          correct: false,
          feedback: 'MCP 可以接很多種工具，不限畫圖。',
        },
      ],
    },
    {
      id: 'q2',
      question: 'Skills 為什麼常常「需要時才載入」？',
      options: [
        {
          id: 'a',
          label: '為了不要一開始就把所有說明塞進 Context',
          correct: true,
          feedback: '對。先看卡名，再用完整技能，書包才裝得下真正的任務。',
        },
        {
          id: 'b',
          label: '因為 Markdown 不能一次讀完',
          correct: false,
          feedback: '可以讀完，只是不划算：用不完的說明會擠掉重要內容。',
        },
        {
          id: 'c',
          label: '因為技能卡必須保密不能給模型看',
          correct: false,
          feedback: '它就是寫給模型看的，只是要挑時機載入。',
        },
      ],
    },
    {
      id: 'q3',
      question: 'Playwright CLI + Skill 相對 MCP 的常見優點是？',
      options: [
        {
          id: 'a',
          label: '指令較短，較不佔上下文',
          correct: true,
          feedback: '對。適合已經很擠的寫程式任務；MCP 則較適合長時間探索頁面狀態。',
        },
        {
          id: 'b',
          label: '完全不需要瀏覽器',
          correct: false,
          feedback: '它還是會操作瀏覽器，只是呼叫方式變短指令。',
        },
        {
          id: 'c',
          label: '保證零錯誤',
          correct: false,
          feedback: '沒有這種保證。你仍要看結果與截圖。',
        },
      ],
    },
  ],
}
