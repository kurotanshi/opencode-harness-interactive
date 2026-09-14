export default {
  id: "ch3",
  number: 3,
  title: "操作與 Claude Code 切換",
  tagline: "Tab、@、遷移清單、交接文件——在 TUI 裡做完。",
  intro: "練習日常操作：切換 Agent／模型、@ 檔案、整理共用規則與工具專屬設定，並寫出下一個 Session 接得住的交接棒。",
  sections: [
    {
      id: "3-1",
      title: "Agent、模型、工作階段與 Context",
      goal: "在 TUI 實際切換 Agent／模型、用 @ 附加檔案，並練習精簡 Context。",
      steps: [
        {
          type: "text",
          title: "三個旋鈕先分開",
          body: [
            "Agent＝角色（Plan/Build），模型＝大腦，Session＝筆記本。這一節請打開 OpenCode 真的轉一轉。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：切換角色、模型、@ 檔案",
          body: [
            "用上一章的 pdf-watermark 或任意小專案。"
          ],
          tasks: [
            {
              id: "a1",
              do: "按 Tab 在 Plan 與 Build 之間切換兩次，看狀態列角色名稱變化。",
              expect: "你能說出現在是 Plan 還是 Build。",
              hint: "Tab 切換 primary agents；也可查 keybinds 的 switch_agent。"
            },
            {
              id: "a2",
              do: "執行 /models，選一顆模型（可維持原選）。",
              expect: "狀態顯示目前模型。",
              command: "/models"
            },
            {
              id: "a3",
              do: "用 @ 附加 AGENTS.md（或任一規則檔），問它禁區是什麼。",
              expect: "回覆有引用到檔案內容（例如不要覆蓋原檔）。",
              command: "@AGENTS.md 請用三點列出這個專案的禁區。",
              hint: "輸入 @ 後依提示選檔；路徑清楚比較不容易找錯。"
            },
            {
              id: "a4",
              do: "故意做一個「壞示範」：心裡想「不要把整包 src 貼進對話」。改成只 @ 一個檔或讓它自己搜。",
              expect: "你完成一次精準提問，而不是貼整庫。",
              command: "不要貼上全部原始碼。請自己搜尋專案裡與 README 相關的檔，然後摘要如何啟動。"
            }
          ],
          goal: "你能指出目前角色與模型，並成功 @ 一個檔。"
        },
        {
          type: "choose",
          title: "最浪費 Context？",
          prompt: "哪一個最容易把書包塞爆？",
          options: [
            {
              id: "a",
              label: "把整個專案所有檔一次貼進對話",
              correct: true,
              feedback: "對。應精準 @ 或讓它搜尋。"
            },
            {
              id: "b",
              label: "只 @ 出錯的那個檔",
              correct: false,
              feedback: "這比較精準。"
            },
            {
              id: "c",
              label: "先說目標再讓它找檔",
              correct: false,
              feedback: "這是好習慣。"
            }
          ]
        }
      ]
    },
    {
      id: "3-2",
      title: "共用規則 vs 工具專屬設定",
      goal: "把「專案法律」與「駕駛艙按鈕」分開：動手整理一份遷移清單。",
      steps: [
        {
          type: "text",
          title: "接手時先分類",
          body: [
            "能跨工具共用的：啟動／測試／禁區。只屬於 OpenCode 的：opencode.json、快捷鍵、Tab 切換。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：遷移檢查表（真的寫下來）",
          body: [
            "在專案新增 MIGRATION.md，照抄並填空。"
          ],
          tasks: [
            {
              id: "m1",
              do: "建立 MIGRATION.md 並貼上模板。",
              expect: "檔案存在。",
              command: "cat > MIGRATION.md << 'EOF'\n# 從 Claude Code / 其他工具 → OpenCode\n\n## 共用（寫進 AGENTS.md）\n- [ ] 如何安裝與啟動：\n- [ ] 如何測試：\n- [ ] 不能碰的目錄：\n- [ ] 品質標準（例如改完要測）：\n\n## 工具專屬（留在 opencode.json / 教學）\n- [ ] Plan/Build 的 Tab 切換\n- [ ] 斜線指令與 MCP 名稱\n- [ ] 快捷鍵\n\n## 決策\n- 主規則檔：AGENTS.md\n- CLAUDE.md：保留並指向 AGENTS.md / 已合併\nEOF"
            },
            {
              id: "m2",
              do: "把你專案真實的安裝／測試指令填進「共用」那幾行。",
              expect: "不再是空白。"
            },
            {
              id: "m3",
              do: "若有 CLAUDE.md，加一行「請以 AGENTS.md 為準」。",
              expect: "兩份不會互相打架。",
              hint: "沒有 CLAUDE.md 就勾選略過。"
            },
            {
              id: "m4",
              do: "在 OpenCode 問：哪些是專案規則、哪些是 OpenCode 操作？",
              expect: "它能分開回答，且不把 Tab 寫成專案法律。",
              command: "請讀 MIGRATION.md 與 AGENTS.md，用兩欄列出：跨工具共用規則 vs OpenCode 專屬操作。"
            }
          ],
          goal: "有一份填過的遷移清單。"
        },
        {
          type: "choose",
          title: "Tab 切換屬於？",
          prompt: "「按 Tab 在 Plan/Build 間切換」",
          options: [
            {
              id: "a",
              label: "寫進所有人 README 當法律",
              correct: false,
              feedback: "別的工具可能沒有 Tab。"
            },
            {
              id: "b",
              label: "OpenCode 工具專屬設定／教學",
              correct: true,
              feedback: "對。駕駛艙按鈕不必假裝成專案憲法。"
            },
            {
              id: "c",
              label: "只能放 CLAUDE.md",
              correct: false,
              feedback: "那是另一個駕駛艙的習慣檔。"
            }
          ]
        }
      ]
    },
    {
      id: "3-3",
      title: "單一可信來源與接手流程",
      goal: "寫一份交接摘要，讓下一個 Session／同學接得住。",
      steps: [
        {
          type: "metaphor",
          title: "黑板只寫一個時間",
          body: [
            "同一件事只承認一個官方答案。其他地方指向它。"
          ],
          metaphor: {
            title: "集合時間",
            body: "不要黑板上 9:00、群組 9:10。助手會迷路。"
          }
        },
        {
          type: "lab",
          title: "實驗室：寫交接棒",
          body: [
            "新增 HANDOFF.md，並用 OpenCode 幫你起草後你再改。"
          ],
          tasks: [
            {
              id: "h1",
              do: "請 Plan 依現況草稿交接（先不改程式）。",
              expect: "它產出目標／已完成／未完成／如何驗證。",
              command: "先不要改程式。請讀 AGENTS.md 與 README，起草一份交接摘要：現在做到哪、下一步第一個動作、如何驗證成功。"
            },
            {
              id: "h2",
              do: "把定稿存成 HANDOFF.md（可自己貼或請 Build 只寫這一檔）。",
              expect: "倉庫根目錄有 HANDOFF.md。"
            },
            {
              id: "h3",
              do: "開一個新 Session，只丟「請讀 HANDOFF.md 接著做下一步」，看它是否接得上。",
              expect: "它不必考古整串舊聊天也能開始。",
              command: "請先讀 HANDOFF.md，然後只執行「下一步第一個動作」。做完停下來報告。"
            },
            {
              id: "h4",
              do: "檢查：安裝／測試指令是否只在一個地方詳細寫（AGENTS.md），其他地方只引用。",
              expect: "沒有互相打架的版本。"
            }
          ],
          goal: "有可執行的交接文件。"
        },
        {
          type: "checklist",
          title: "交接前 30 秒",
          body: [
            "關掉前勾一次："
          ],
          items: [
            {
              id: "h1",
              text: "有一份主規則",
              hint: "單一可信來源"
            },
            {
              id: "h2",
              text: "只靠文件能跑起來",
              hint: "含安裝與測試"
            },
            {
              id: "h3",
              text: "未完成寫成待辦",
              hint: "不要只在聊天提過"
            }
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Agent 和模型的差別？',
      options: [
        {
          id: 'a',
          label: '沒有差別，只是翻譯不同',
          correct: false,
          feedback: '角色和大腦是兩層。混在一起時，你會不知道該換權限還是該換引擎。',
        },
        {
          id: 'b',
          label: 'Agent 是角色與權限，模型是思考引擎',
          correct: true,
          feedback: '正確。同一個審查員角色，可以換不同大腦；同一大腦也可以扮演不同角色。',
        },
        {
          id: 'c',
          label: '模型負責存檔，Agent 負責上網',
          correct: false,
          feedback: '存檔與上網是工具能力，不是這兩個詞的定義。',
        },
      ],
    },
    {
      id: 'q2',
      question: '單一可信來源是為了避免？',
      options: [
        {
          id: 'a',
          label: '規則互相打架，助手不知道該聽誰',
          correct: true,
          feedback: '對。黑板只寫一個集合時間，其他地方指向它。',
        },
        {
          id: 'b',
          label: '電腦當機',
          correct: false,
          feedback: '那是硬體問題，跟文件一致性無關。',
        },
        {
          id: 'c',
          label: '字型不好看',
          correct: false,
          feedback: '跟字型無關。重點是同一件事不要有多個官方答案。',
        },
      ],
    },
    {
      id: 'q3',
      question: 'Context 太滿時，較好的做法是？',
      options: [
        {
          id: 'a',
          label: '繼續貼更多檔案，讓它「看完整個宇宙」',
          correct: false,
          feedback: '書包會爆，關鍵規則反而可能被擠掉。',
        },
        {
          id: 'b',
          label: '只給相關檔案，或開新 Session / 做摘要並檢查',
          correct: true,
          feedback: '對。精準比龐大更有用；摘要後請人工確認禁令與目標還在。',
        },
        {
          id: 'c',
          label: '關掉權限，全部改用猜的',
          correct: false,
          feedback: '猜的不是 Harness。沒有工具與證據，只會更糟。',
        },
      ],
    },
  ],
}
