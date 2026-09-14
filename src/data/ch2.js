export default {
  id: "ch2",
  number: 2,
  title: "PDF 浮水印實作導覽",
  tagline: "建 harness-workshop、寫規則、Plan/Build、/init、/undo——跟著作。",
  intro: "用「PDF 浮水印」當故事線：你會真正建立全書共用的 harness-workshop 專案與 AGENTS.md，處理 CLAUDE.md 接手，走 Plan→Build，並練習 /init 與 /undo。之後每一章都回到這個資料夾。",
  outcome: "完成本章你會做出／做到：在 ~/harness-workshop 裡有 AGENTS.md、samples/、README，並親手用過 Plan/Build、/init、/undo。",
  youNeed: "第 1 章已能跑 opencode；終端機；約 40 分鐘。",
  minutes: 40,
  dependsOn: ["ch1"],
  sections: [
    {
      id: "2-1",
      title: "AGENTS.md：專案級 vs 全域級",
      track: "required",
      goal: "親手建立 harness-workshop 與 AGENTS.md，分清家規與教室規。",
      steps: [
        {
          type: "text",
          title: "先建全書共用的練習教室",
          body: [
            "從現在起，請固定使用 ~/harness-workshop（Windows：$HOME\\harness-workshop）。這一節你會新建資料夾、寫 AGENTS.md。全域檔放「每個專案都適用的習慣」；專案檔放「這個專案怎麼建置／測試」。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：建立 harness-workshop 與 AGENTS.md",
          track: "required",
          body: [
            "在終端機操作。這就是之後第 3～9 章一直要回來的專案根目錄。"
          ],
          tasks: [
            {
              id: "a1",
              do: "建立全書共用資料夾並進入。",
              expect: "目前路徑在 harness-workshop 裡。",
              command: "mkdir -p ~/harness-workshop && cd ~/harness-workshop",
              hint: "Windows PowerShell 可用：mkdir $HOME\\harness-workshop; cd $HOME\\harness-workshop"
            },
            {
              id: "a2",
              do: "建立空的 AGENTS.md（若已有則打開編輯）。",
              expect: "資料夾裡看得到 AGENTS.md。",
              command: "touch AGENTS.md",
              hint: "Windows 可用 notepad AGENTS.md 直接存檔。"
            },
            {
              id: "a3",
              do: "把下面內容貼進 AGENTS.md 並存檔。",
              expect: "打開檔案看得到「不要覆蓋原檔」等句子。",
              command: "# AGENTS.md — harness-workshop\n\n## 目標\n幫 PDF 加浮水印。輸入舊檔，輸出新檔，不要覆蓋原檔。\n本資料夾是駕馭工坊全書共用專案（之後會加 MCP、Skills、審計、WorkDash）。\n\n## 指令\n- 安裝：pnpm install（若尚未初始化，先用 npm init -y）\n- 測試：先對單頁樣本跑一次，再處理多頁\n\n## 禁區\n- 不要刪除或覆蓋原始 PDF\n- 不要提交 .env 或任何金鑰\n- 改檔前先用 Plan 說明會動哪些檔\n",
              hint: "內容要短、可執行。之後改了建置方式，記得同步改這份。"
            },
            {
              id: "a4",
              track: "optional",
              do: "（選做）建立全域家規草稿，只寫跨專案習慣，不要寫 pnpm。",
              expect: "你知道全域常見路徑在使用者設定下的 opencode。",
              command: "mkdir -p ~/.config/opencode && printf \"%s\n\" \"# 家規\" \"- 先問再裝套件\" \"- 不要提交 .env\" \"- 回答用繁中\" > ~/.config/opencode/AGENTS.md",
              hint: "Windows 路徑常在 %USERPROFILE%\\.config\\opencode\\AGENTS.md。若不確定可先做專案級即可。"
            }
          ],
          goal: "harness-workshop 根目錄有一份可讀的 AGENTS.md。"
        },
        {
          type: "choose",
          title: "這句話放哪？",
          prompt: "「這個 PDF 工具要用 pnpm，測試先跑單頁樣本。」",
          options: [
            {
              id: "a",
              label: "全域 AGENTS.md",
              correct: false,
              feedback: "專案指令不要寫進家規，會害到別的專案。"
            },
            {
              id: "b",
              label: "這個專案的 AGENTS.md（harness-workshop）",
              correct: true,
              feedback: "正確。教室規放在教室。"
            },
            {
              id: "c",
              label: "哪裡都不用寫",
              correct: false,
              feedback: "換 Session 就可能忘；寫進檔案才算數。"
            }
          ]
        }
      ]
    },
    {
      id: "2-2",
      title: "自動讀 CLAUDE.md",
      track: "required",
      goal: "在 harness-workshop 模擬接手：放 CLAUDE.md、確認 AGENTS.md 優先，並整理成單一來源。",
      steps: [
        {
          type: "text",
          title: "換駕駛艙，班規還在",
          body: [
            "很多專案有 CLAUDE.md。沒有 AGENTS.md 時，OpenCode 常能改看它；兩份都有時通常 AGENTS.md 優先。"
          ],
          note: "細節以官方文件為準；原則是單一可信來源。"
        },
        {
          type: "lab",
          title: "實驗室：模擬接手與優先順序",
          track: "required",
          body: [
            "回到你的 harness-workshop 專案操作。"
          ],
          tasks: [
            {
              id: "c1",
              do: "確認你在專案根目錄，再建立一份簡短的 CLAUDE.md（故意寫成用 npm）。",
              expect: "檔案存在且提到 npm。",
              command: "cd ~/harness-workshop && printf \"%s\n\" \"# CLAUDE.md\" \"- 用 npm install\" \"- 測試：npm test\" > CLAUDE.md"
            },
            {
              id: "c2",
              do: "確認 AGENTS.md 仍寫 pnpm（上一節）。若被改掉，改回 pnpm。",
              expect: "兩份檔案對「套件管理」說法不同。",
              hint: "這是故意打架，等等要整理。"
            },
            {
              id: "c3",
              do: "在 harness-workshop 啟動 OpenCode，貼上詢問。",
              expect: "它應以 AGENTS.md 為主回答（提到 pnpm／不覆蓋原檔）。",
              command: "這個專案應該用什麼套件管理工具？請先讀規則檔再回答，並說你主要看了哪一份。"
            },
            {
              id: "c4",
              do: "把 CLAUDE.md 的精神合併進 AGENTS.md 後，將 CLAUDE.md 改名標示已遷移。",
              expect: "只剩一份主規則描述安裝方式。",
              command: "mv CLAUDE.md CLAUDE.md.migrated",
              hint: "真實專案可保留 CLAUDE.md 但內容改成「請看 AGENTS.md」。"
            }
          ],
          goal: "你能指出主規則是哪一份。"
        },
        {
          type: "checklist",
          title: "接手檢查",
          body: [
            "打開陌生人倉庫時勾這些："
          ],
          items: [
            {
              id: "r1",
              text: "先找 AGENTS.md",
              hint: "OpenCode 主規則。"
            },
            {
              id: "r2",
              text: "沒有再找 CLAUDE.md",
              hint: "前任便利貼。"
            },
            {
              id: "r3",
              text: "打架就整理成一份",
              hint: "單一可信來源。"
            }
          ]
        }
      ]
    },
    {
      id: "2-3",
      title: "寫 PDF 浮水印工具（概念流程）",
      track: "required",
      goal: "在 harness-workshop 用 Plan／提示把浮水印任務拆成可驗收步驟；建立樣本與 README。",
      steps: [
        {
          type: "text",
          title: "任務故事",
          body: [
            "學校要在 PDF 加「僅供課堂練習」。我們重點是流程：說清楚成品 → 樣本 → 驗收。完整 PDF 引擎可之後再做。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：用 OpenCode 走概念流程",
          track: "required",
          body: [
            "回到你的 harness-workshop 專案開啟 OpenCode，先 Tab 切到 Plan。"
          ],
          tasks: [
            {
              id: "p1",
              do: "Tab 切到 Plan，貼上計畫提示。",
              expect: "它列出步驟與風險，且尚未大改程式。",
              command: "請用 Plan 列出「PDF 浮水印」實作計畫：\n- 會新增／修改哪些檔\n- 用哪個套件（先提議一個，等我同意）\n- 如何保證不覆蓋原檔\n- 如何用一頁樣本驗收\n先不要寫程式。"
            },
            {
              id: "p2",
              do: "建立樣本資料夾與「原檔保留」說明檔。",
              expect: "看得到 samples/ 與說明文字。",
              command: "mkdir -p samples output && printf \"%s\n\" \"把練習 PDF 放 samples/。輸出到 output/。禁止覆蓋 samples。\" > samples/README.md"
            },
            {
              id: "p3",
              do: "請 Build（或仍先問）建立 README 用法說明；裝套件前要問你。",
              expect: "README 寫了輸入／輸出／不要覆蓋。",
              command: "依照剛才計畫，開始建立最小骨架：\n- 建立 README 說明用法\n- 建立一個可放樣本 PDF 的資料夾說明\n- 先不要真的處理大檔；若要裝套件先問我\n做完用幾句話說明你改了什麼。",
              hint: "若它要安裝套件，先看指令再批准。"
            },
            {
              id: "p4",
              do: "自己打開 README 與 AGENTS.md，對一下驗收條件。",
              expect: "你能勾：原檔保留、先做樣本、有使用說明。"
            }
          ],
          goal: "有計畫、有樣本資料夾、有 README。"
        },
        {
          type: "checklist",
          title: "模擬驗收",
          body: [
            "助手說完成時，用這張表："
          ],
          items: [
            {
              id: "v1",
              text: "原檔還在，輸出是新檔",
              hint: "覆蓋原檔是常見事故。"
            },
            {
              id: "v2",
              text: "先有一頁／樣本驗證想法",
              hint: "不要一次 200 頁。"
            },
            {
              id: "v3",
              text: "失敗要有清楚錯誤",
              hint: "靜默壞檔最難查。"
            },
            {
              id: "v4",
              text: "README 寫了怎麼用",
              hint: "未來的你會謝謝自己。"
            }
          ]
        }
      ]
    },
    {
      id: "2-4",
      title: "Plan vs Build；/undo；/init",
      track: "required",
      goal: "在 harness-workshop 實際切換 Plan/Build，跑 /init，並用 /undo 練習回退。",
      steps: [
        {
          type: "text",
          title: "節奏：規則 → 計畫 → 實作 → 回退",
          body: [
            "Tab 切換 Plan／Build。/init 掃描專案產生或更新 AGENTS.md。/undo 撤回最近一步造成的修改（另有 /redo）。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：/init、Plan/Build、/undo",
          track: "required",
          body: [
            "仍在 harness-workshop。做每一步就勾。"
          ],
          tasks: [
            {
              id: "u1",
              do: "在 TUI 執行 /init，依提示完成；產生或更新後打開 AGENTS.md 讀一遍。",
              expect: "AGENTS.md 有專案相關內容；你讀過並可手動修正。",
              command: "/init",
              hint: "不要閉眼全收；過時內容要改。"
            },
            {
              id: "u2",
              do: "Tab 切到 Plan，問一個小問題。",
              expect: "它偏向分析／提問，不急著改一堆檔。",
              command: "先不要改檔。請說明若加浮水印，最小檔案結構會長怎樣？"
            },
            {
              id: "u3",
              do: "Tab 切到 Build，請它只新增一個無害的 NOTES.md（兩行即可）。",
              expect: "專案裡出現 NOTES.md。",
              command: "請只新增 NOTES.md，內容兩行：練習 Plan/Build 與 /undo。不要改其他檔。"
            },
            {
              id: "u4",
              do: "執行 /undo，確認 NOTES.md 的變更被撤回（或回到前一狀態）。",
              expect: "檔案變回 undo 前；若有 Git 可再 diff 確認。",
              command: "/undo",
              hint: "需要恢復可用 /redo。有 Git 仍建議自己看差異。"
            },
            {
              id: "u5",
              do: "再小改一次 README 一行，故意做錯，然後 /undo。",
              expect: "你敢動手，也知道怎麼退回。",
              command: "/undo"
            }
          ],
          goal: "你親手用過 /init、Tab、/undo。"
        },
        {
          type: "choose",
          title: "空專案第一步",
          prompt: "harness-workshop 剛建好，想加浮水印。第一步較好？",
          options: [
            {
              id: "a",
              label: "直接 Build 狂生檔案",
              correct: false,
              feedback: "太快動手容易變迷宮。"
            },
            {
              id: "b",
              label: "先 /init 或手寫 AGENTS.md → Plan → Build",
              correct: true,
              feedback: "漂亮。這就是 Harness 節奏。"
            },
            {
              id: "c",
              label: "先換最貴模型，其他隨便",
              correct: false,
              feedback: "沒規則與計畫，貴也會亂衝。"
            }
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: '你剛才建立的共用專案資料夾名稱是？',
      options: [
        {
          id: 'a',
          label: 'harness-workshop（在家目錄下）',
          correct: true,
          feedback: '對！之後每一章都會寫「回到你的 harness-workshop 專案」，不要另開新教室。',
        },
        {
          id: 'b',
          label: 'random-temp-123',
          correct: false,
          feedback: '我們固定用 harness-workshop，方便跨章接續。',
        },
        {
          id: 'c',
          label: '只要叫 Desktop 就可以',
          correct: false,
          feedback: '桌面可以放捷徑，但課程指定路徑是 ~/harness-workshop。',
        },
      ],
    },
    {
      id: 'q2',
      question: '你在 AGENTS.md 寫了「不要覆蓋原檔」。這句話應該？',
      options: [
        {
          id: 'a',
          label: '留在 harness-workshop 的 AGENTS.md，當專案教室規',
          correct: true,
          feedback: '對。你實驗室也對過：專案測試／禁區寫在專案 AGENTS.md，不要塞進全域家規。',
        },
        {
          id: 'b',
          label: '只記在腦袋，不要寫檔',
          correct: false,
          feedback: '換 Session 就容易忘；寫進檔案才算數。',
        },
        {
          id: 'c',
          label: '寫進每一個同學的通訊軟體狀態',
          correct: false,
          feedback: '通訊軟體不是單一可信來源。',
        },
      ],
    },
    {
      id: 'q3',
      question: '你做完 /init 之後，正確動作是？',
      options: [
        {
          id: 'a',
          label: '打開 AGENTS.md 讀一遍，過時或奇怪的地方手動改',
          correct: true,
          feedback: '對。實驗室強調：不要閉眼全收。/init 是草稿助手，你才是編輯。',
        },
        {
          id: 'b',
          label: '立刻關掉檔案，永遠不要看',
          correct: false,
          feedback: '不讀就無法駕馭規則。',
        },
        {
          id: 'c',
          label: '把金鑰貼進 AGENTS.md 方便下次',
          correct: false,
          feedback: '金鑰絕對不要寫進專案檔。',
        },
      ],
    },
    {
      id: 'q4',
      question: '你請 Build 新增 NOTES.md 後又跑 /undo，預期看到？',
      options: [
        {
          id: 'a',
          label: 'NOTES.md 的變更被撤回（或回到前一狀態）',
          correct: true,
          feedback: '正確。你練過敢動手、也知道怎麼退回；需要時還有 /redo。',
        },
        {
          id: 'b',
          label: '整個硬碟被格式化',
          correct: false,
          feedback: '/undo 只撤回最近一步造成的修改，不是格式化。',
        },
        {
          id: 'c',
          label: '自動推送到 GitHub',
          correct: false,
          feedback: '那不是 /undo 的行為。',
        },
      ],
    },
  ],
}
