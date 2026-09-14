export default {
  id: "ch8",
  number: 8,
  title: "Harness 思維",
  tagline: "六層審計、旋鈕分類、反模式——對自己的專案填表。",
  intro: "用填空審計與小驗收實驗，把前面零件收成可駕馭的思維；反模式放在動手之後再辨認。",
  sections: [
    {
      id: "8-1",
      title: "從會用到駕馭：六層控制力",
      goal: "用填空清單審計自己的專案落在哪一層。",
      steps: [
        {
          type: "text",
          title: "六層階梯",
          body: [
            "入口 → 上下文 → 執行 → 角色 → 模型 → 治理。會打開只是第一階。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：六層審計表",
          body: [
            "對你的練習專案填 AUDIT.md。"
          ],
          tasks: [
            {
              id: "a1",
              do: "建立 AUDIT.md 模板。",
              expect: "檔案存在。",
              command: "cat > AUDIT.md << 'EOF'\n# Harness 六層審計\n1 入口層（TUI/CLI/IDE）：現況／缺口\n2 上下文層（AGENTS.md/@/Session）：現況／缺口\n3 執行層（讀寫/bash/MCP）：現況／缺口\n4 角色層（agents/commands/skills）：現況／缺口\n5 模型層（provider/model/備用）：現況／缺口\n6 治理層（permission/金鑰/分享）：現況／缺口\n我現在主要卡在第 __ 層，下一週只練：____\nEOF"
            },
            {
              id: "a2",
              do: "逐層填寫現況（可短句）。",
              expect: "沒有整層空白。"
            },
            {
              id: "a3",
              do: "圈出一層「下一週只練這個」。",
              expect: "有明確下一層。"
            },
            {
              id: "a4",
              do: "請 OpenCode 讀 AUDIT.md，只針對那一層給 3 個可執行小練習。",
              expect: "得到 3 個小練習且沒有一次叫你做完全部六層。",
              command: "請讀 AUDIT.md，只針對我標的下一層，給 3 個今天能做完的小練習。不要改檔。"
            }
          ],
          goal: "六層都有「現況／缺口」。"
        },
        {
          type: "choose",
          title: "每次重講測試？",
          prompt: "模型很強但每次重講怎麼測試，缺哪層較多？",
          options: [
            {
              id: "a",
              label: "上下文層",
              correct: true,
              feedback: "對，規則沒沉澱。"
            },
            {
              id: "b",
              label: "一定是入口層",
              correct: false,
              feedback: "門換了班規沒寫還是會忘。"
            },
            {
              id: "c",
              label: "治理層主因",
              correct: false,
              feedback: "治理重要但不是這句主因。"
            }
          ]
        }
      ]
    },
    {
      id: "8-2",
      title: "平台 / Agent / 模型 三維度",
      goal: "用故障分類表練「一次只轉一個旋鈕」。",
      steps: [
        {
          type: "text",
          title: "三個旋鈕",
          body: [
            "平台（駕駛艙／MCP／權限）、Agent（角色）、模型（大腦）。先分類再調。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：故障分類演練",
          body: [
            "寫下兩個真實或想像故障並分類。"
          ],
          tasks: [
            {
              id: "k1",
              do: "建立 KNOBS.md。",
              expect: "檔案存在。",
              command: "cat > KNOBS.md << 'EOF'\n# 一次只轉一個旋鈕\n## 案例 1\n現象：\n比較像：平台 / Agent / 模型\n我下一個只做：\n## 案例 2\n現象：\n比較像：平台 / Agent / 模型\n我下一個只做：\nEOF"
            },
            {
              id: "k2",
              do: "案例 1 填：它很會說但點不到網頁。",
              expect: "分類偏平台／執行層（缺手或 MCP）。"
            },
            {
              id: "k3",
              do: "案例 2 填：它亂改檔，計畫不清。",
              expect: "分類偏 Agent（該用 Plan／權限）。"
            },
            {
              id: "k4",
              do: "請 OpenCode 評論你的分類，若不同意要說明理由。",
              expect: "有對照討論。",
              command: "請讀 KNOBS.md，同意或修正我的分類；強調為什麼一次只轉一個旋鈕。"
            }
          ],
          goal: "KNOBS.md 有分類與「下一個動作」。"
        }
      ]
    },
    {
      id: "8-3",
      title: "反模式",
      goal: "先做一個「好流程」小實驗，再辨認反模式考題。",
      steps: [
        {
          type: "text",
          title: "常見踩坑",
          body: [
            "無驗收就合併、一次轉三旋鈕、上下文塞爆、權限全開、規則互打。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：用好流程做一件小事",
          body: [
            "選一件小事（改 README 一行），強迫自己走完。"
          ],
          tasks: [
            {
              id: "g1",
              do: "寫下成功條件一句話到 ACCEPT.md。",
              expect: "例如：README 最後一行是指定句子。",
              command: "echo \"成功條件：README 最後一行等於「Harness 驗收 OK」\" > ACCEPT.md"
            },
            {
              id: "g2",
              do: "Plan 說明會改哪個檔，再 Build 執行。",
              expect: "只動約定檔。",
              command: "先 Plan 再改：請只把 README 最後一行設成「Harness 驗收 OK」。"
            },
            {
              id: "g3",
              do: "對照 ACCEPT.md 驗收並勾選。",
              expect: "條件達成。"
            },
            {
              id: "g4",
              do: "在 ANTIPATTERN.md 寫下你剛才「故意沒做」的反模式（例如沒驗收就宣佈完成）。",
              expect: "有書面對照。",
              command: "cat > ANTIPATTERN.md << 'EOF'\n# 我避開的反模式\n- 沒有成功條件就叫它大改\n- 同時換模型＋換權限＋換 MCP\n- 把整庫貼進對話\n- permission 全部 allow\nEOF"
            }
          ],
          goal: "你留下驗收紀錄。"
        },
        {
          type: "choose",
          title: "反模式辨認",
          prompt: "哪一個是反模式？",
          options: [
            {
              id: "a",
              label: "先寫成功條件再改檔",
              correct: false,
              feedback: "這是好模式。"
            },
            {
              id: "b",
              label: "一次同時換模型、開全部權限、再加三個 MCP",
              correct: true,
              feedback: "對，旋鈕一次轉太多。"
            },
            {
              id: "c",
              label: "審查員 deny edit",
              correct: false,
              feedback: "這是好習慣。"
            }
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: '六層控制力裡，權限比較屬於？',
      options: [
        {
          id: 'a',
          label: '治理層（也影響執行層怎麼被允許）',
          correct: true,
          feedback: '對。煞車在治理，手腳在執行；權限決定手腳何時能伸出去。',
        },
        {
          id: 'b',
          label: '只屬於入口層',
          correct: false,
          feedback: '入口只是你從哪扇門進去，不管閘門怎麼設。',
        },
        {
          id: 'c',
          label: '模型層的別名',
          correct: false,
          feedback: '模型是大腦，不是閘門本身。',
        },
      ],
    },
    {
      id: 'q2',
      question: '「只換最貴模型、不寫 AGENTS.md」最接近哪個反模式？',
      options: [
        {
          id: 'a',
          label: '迷信模型',
          correct: true,
          feedback: '正確。引擎救不了沒有說明書與煞車的車。',
        },
        {
          id: 'b',
          label: '過度拆分',
          correct: false,
          feedback: '過度拆分是角色太多、職責重疊。',
        },
        {
          id: 'c',
          label: '入口層太潮',
          correct: false,
          feedback: '那不是本課說的反模式名稱。',
        },
      ],
    },
    {
      id: 'q3',
      question: '平台、Agent、模型三維度的用途是？',
      options: [
        {
          id: 'a',
          label: '出問題時先分類，避免三個旋鈕一起亂轉',
          correct: true,
          feedback: '對。先分類，一次轉一個，才學得到下次還用得上的經驗。',
        },
        {
          id: 'b',
          label: '用來罵別人用的工具比較差',
          correct: false,
          feedback: '那是平台戰爭，不是駕馭。',
        },
        {
          id: 'c',
          label: '保證一次就寫出完美作業',
          correct: false,
          feedback: '沒有這種保證。Harness 是提高勝率與可重做性，不是魔法。',
        },
      ],
    },
  ],
}
