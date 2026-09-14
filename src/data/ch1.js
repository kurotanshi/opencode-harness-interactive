export default {
  id: "ch1",
  number: 1,
  title: "OpenCode 入門",
  tagline: "先裝好、打開、連上模型——照步驟做，比只看摘要有用。",
  intro: "這一章以實驗室為主：安裝 OpenCode、打開 TUI、連模型、做第一個環境檢查，並練習接續 Session。概念短短帶過，重點是你真的按過那些鍵。",
  sections: [
    {
      id: "1-1",
      title: "簡介：Harness 與三種寫程式助手",
      goal: "分清楚模型與 Harness，並親手在終端機確認 OpenCode 相關關鍵字。",
      steps: [
        {
          type: "text",
          title: "這一小節要做什麼？",
          body: [
            "先用 30 秒搞懂：模型像引擎，Harness 像方向盤與煞車。接著你會打開終端機，實際查套件名與官方專案名。",
            "概念只看短短幾句；真正要勾選的是下面實驗室的每一步。"
          ]
        },
        {
          type: "metaphor",
          title: "Harness 一句話",
          body: [
            "Harness 不是某個模型名字，而是規則、權限、工具、Session、設定檔這些「駕馭裝備」的總稱。"
          ],
          metaphor: {
            title: "引擎 vs 操控",
            body: "模型是引擎；AGENTS.md、權限、Plan/Build、MCP 才是操控系統。引擎再強，沒有操控也容易撞牆。"
          }
        },
        {
          type: "lab",
          title: "實驗室：確認你在學的是哪個 OpenCode",
          body: [
            "打開終端機（Windows 可用 PowerShell / Windows Terminal / WSL；macOS／Linux 用內建終端機）。照做並勾選。"
          ],
          tasks: [
            {
              id: "a1",
              do: "用瀏覽器打開官方網站首頁，確認標題是 OpenCode。",
              expect: "看得到 opencode.ai，內容提到 terminal AI coding agent。",
              command: "https://opencode.ai",
              hint: "若打不開，檢查網路；也可之後再查。"
            },
            {
              id: "a2",
              do: "在終端機查 npm 上的套件名（需要已裝 Node／npm）。",
              expect: "輸出裡應出現套件名稱 opencode-ai。",
              command: "npm view opencode-ai name",
              hint: "沒有 npm 可先略過，記住套件名是 opencode-ai；官方專案是 anomalyco/opencode。"
            },
            {
              id: "a3",
              do: "把下面這句話大聲念一次（或寫在紙上）：「模型是引擎，Harness 是操控。」",
              expect: "你能用自己的話說出差別，不必背英文。",
              hint: "下一節會真的安裝並啟動。"
            }
          ],
          goal: "確認官方專案與 npm 套件名，避免裝錯東西。"
        },
        {
          type: "choose",
          title: "快速確認",
          prompt: "同學說「只要模型夠強就好，不用管規則與權限」。你覺得？",
          options: [
            {
              id: "a",
              label: "對，最強模型會自己管好一切。",
              correct: false,
              feedback: "不對。同一顆模型，有沒有 AGENTS.md、權限、Plan，表現差很多。"
            },
            {
              id: "b",
              label: "不對。要駕馭，還需要 Harness（規則、權限、工具、流程）。",
              correct: true,
              feedback: "正確。這堂課練的就是駕馭，不是只背模型廣告。"
            },
            {
              id: "c",
              label: "只有 Claude Code 才算 Harness。",
              correct: false,
              feedback: "Harness 思維可帶到 OpenCode、Claude Code、Codex 等不同駕駛艙。"
            }
          ]
        }
      ]
    },
    {
      id: "1-2",
      title: "安裝與介面",
      goal: "依你的作業系統安裝 OpenCode，驗證版本，打開 TUI，並連上模型。",
      steps: [
        {
          type: "text",
          title: "動手前記住",
          body: [
            "選一種安裝方式即可，不必全裝。Windows 官方也常建議用 WSL，體驗較接近 Linux。",
            "安裝後若找不到指令，先關掉終端機再開一次。正式步驟以 opencode.ai 文件為準。"
          ],
          note: "官方專案 anomalyco/opencode；npm 套件名 opencode-ai。"
        },
        {
          type: "lab",
          title: "實驗室 A：安裝（選你的作業系統）",
          body: [
            "只做符合你電腦的那幾步。其他系統的指令可略過，但請讀一眼。"
          ],
          tasks: [
            {
              id: "i1",
              do: "【macOS／Linux】用官方腳本安裝（或改用下一格 brew／npm）。",
              expect: "安裝結束後終端機不再一直跑，且沒有明顯錯誤。",
              command: "curl -fsSL https://opencode.ai/install | bash",
              hint: "不喜歡 pipe 到 bash，可改用 brew install anomalyco/tap/opencode，或 npm i -g opencode-ai。"
            },
            {
              id: "i2",
              do: "【macOS／Linux 備選】Homebrew tap（較常保持新版本）。",
              expect: "brew 顯示已安裝 opencode。",
              command: "brew install anomalyco/tap/opencode",
              hint: "若已用 curl 腳本裝過，可跳過，避免重複。"
            },
            {
              id: "i3",
              do: "【Windows】用 Scoop 或 Chocolatey 擇一；或改用 WSL 後走 Linux 指令。",
              expect: "安裝成功後，在同一個環境輸入 opencode 找得到指令。",
              command: "scoop install opencode",
              hint: "也可用：choco install opencode。若在 WSL，請在 WSL 終端機裡裝，不要裝在 Windows 卻到 WSL 找。"
            },
            {
              id: "i4",
              do: "【任何系統・備選】已有 Node.js 時，用 npm 全域安裝。",
              expect: "npm 顯示安裝完成。",
              command: "npm i -g opencode-ai",
              hint: "套件名是 opencode-ai，指令仍是 opencode。"
            }
          ],
          goal: "讓終端機能跑 opencode。"
        },
        {
          type: "lab",
          title: "實驗室 B：驗證並打開 TUI",
          body: [
            "裝好後一定要驗證版本，再開介面。"
          ],
          tasks: [
            {
              id: "v1",
              do: "查版本。",
              expect: "印出版本號（數字），不是「command not found」。",
              command: "opencode --version",
              hint: "找不到指令：重開終端機；確認你裝的環境（Windows vs WSL）與現在開的視窗是同一個。"
            },
            {
              id: "v2",
              do: "啟動 OpenCode（在一個練習用資料夾裡更好）。",
              expect: "出現 TUI（終端機裡的彩色／文字工作台），可輸入文字。",
              command: "opencode",
              hint: "若卡住或閃退，先看官方 Troubleshooting；確認終端機視窗夠大。"
            },
            {
              id: "v3",
              do: "在 TUI 輸入斜線，打開指令選單。",
              expect: "看得到指令列表（例如 /connect、/models、/init 等）。",
              command: "/",
              hint: "斜線是法術書入口。先認得入口，不必背完全部。"
            }
          ],
          goal: "確認版本，並看到 OpenCode 文字介面。"
        },
        {
          type: "lab",
          title: "實驗室 C：連上模型",
          body: [
            "沒有模型，畫面只是空駕駛艙。請接上至少一個供應商並選模型。"
          ],
          tasks: [
            {
              id: "c1",
              do: "執行連線指令，依畫面提示登入或貼金鑰（請大人陪同，金鑰不要貼到聊天室）。",
              expect: "供應商顯示已連線／可用。",
              command: "/connect",
              hint: "金鑰只放在本機安全處，不要寫進專案再推上 Git。"
            },
            {
              id: "c2",
              do: "打開模型列表，選一顆你現在能用的模型。",
              expect: "狀態列或設定顯示目前模型已選好。",
              command: "/models",
              hint: "名單會變；選你有額度、能回應的即可。第七章會再練怎麼選。"
            },
            {
              id: "c3",
              do: "對助手說一句超小測試：「回覆：pong」。",
              expect: "它回了 pong 或類似短回覆，代表對話通路通了。",
              command: "回覆：pong",
              hint: "若沒回應，回到 /connect 檢查登入與額度。"
            }
          ],
          goal: "完成 /connect 與 /models。"
        }
      ]
    },
    {
      id: "1-3",
      title: "第一個任務：裝工具與接續 Session",
      goal: "請助手檢查環境、練習批准高風險動作，並保存／接續 Session。",
      steps: [
        {
          type: "text",
          title: "第一個任務不要太大",
          body: [
            "不要一開始就叫它做完整遊戲。先請它檢查 Node、Git 等環境，你負責批准與驗證。",
            "同一個任務明天要接著做：打開同一個 Session，不要撕掉筆記本。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：環境檢查小任務",
          body: [
            "在 OpenCode 裡貼上下面提示。若它要安裝全域軟體，先停下來問大人。"
          ],
          tasks: [
            {
              id: "t1",
              do: "貼上提示，請它只檢查、先不要自動安裝。",
              expect: "它回報 node / git 有沒有、版本大概是多少，或說明找不到。",
              command: "請檢查這個環境有沒有 Node 與 Git。先執行版本指令並回報結果。缺什麼只告訴我怎麼裝，先不要自動安裝或改系統。",
              hint: "若它直接要裝，輸入停止／拒絕，重申「先報告再問我」。"
            },
            {
              id: "t2",
              do: "自己在終端機再跑一次驗證（可另開視窗）。",
              expect: "你亲眼看到版本號，或確認真的沒裝。",
              command: "node -v && git --version",
              hint: "Windows PowerShell 可分開跑 node -v 與 git --version。"
            },
            {
              id: "t3",
              do: "若缺工具且大人同意，再請它給「一行安裝指令」給你自己貼，而不是默默全域安裝。",
              expect: "你能複述將要執行的指令，並知道是哪個系統的。",
              hint: "安裝方式依 OS 而異；以官方文件為準。"
            }
          ],
          goal: "看到版本輸出，並自己驗證。"
        },
        {
          type: "lab",
          title: "實驗室：Session 保存與接續",
          body: [
            "Session 是這次對話與它做過的事。長任務請接續同一本。"
          ],
          tasks: [
            {
              id: "s1",
              do: "在 TUI 開一個新 Session（常見快捷與 leader 鍵有關；也可用指令面板）。",
              expect: "進入一個乾淨的新對話。",
              hint: "預設 leader 常是 Ctrl+X；session_new 常見為 <leader>n。也可在指令面板找 New session。以你畫面為準。"
            },
            {
              id: "s2",
              do: "回到 Session 列表，找到剛才「環境檢查」那一本並打開。",
              expect: "看得到先前檢查環境的對話內容。",
              hint: "session_list 常見為 <leader>l。找不到就在列表用關鍵字／時間判斷。"
            },
            {
              id: "s3",
              do: "在舊 Session 接著說：「接續昨天的環境檢查，下一步請列出安裝 Node 的官方連結（不要執行安裝）。」",
              expect: "它接得上前文，而不是完全當作陌生人。",
              hint: "若上下文亂掉，開新 Session，但把結論寫進筆記或 AGENTS.md。"
            }
          ],
          goal: "會開新 Session、找舊 Session、接續對話。"
        },
        {
          type: "choose",
          title: "明天要接著做",
          prompt: "今天檢查完環境，明天要裝專案套件。最好？",
          options: [
            {
              id: "a",
              label: "每次都開全新 Session，比較乾淨。",
              correct: false,
              feedback: "新 Session 較健忘。同一任務通常應接續舊的。"
            },
            {
              id: "b",
              label: "打開昨天那個 Session 繼續。",
              correct: true,
              feedback: "對。長任務接續同一本筆記本。"
            },
            {
              id: "c",
              label: "貼到通訊軟體就好，它會永遠記得。",
              correct: false,
              feedback: "通訊軟體不是它的記憶。靠 Session 與規則檔。"
            }
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Harness 比較像什麼？',
      options: [
        {
          id: 'a',
          label: '只是某一個超強模型的名字',
          correct: false,
          feedback: 'Harness 不是模型名稱，而是駕馭模型的整套方法與裝備：規則、權限、工具、流程等。',
        },
        {
          id: 'b',
          label: '方向盤、煞車、規則與工具的總稱',
          correct: true,
          feedback: '沒錯。有引擎還不夠，要有辦法安全、可重複地開。這也是本課一直在練的能力。',
        },
        {
          id: 'c',
          label: '只能在 OpenCode 裡使用的插件',
          correct: false,
          feedback: 'Harness 思維可以帶到 Claude Code 或 Codex，不綁單一工具；OpenCode 只是適合練習的教室。',
        },
      ],
    },
    {
      id: 'q2',
      question: 'OpenCode、Claude Code、Codex 的關係較接近？',
      options: [
        {
          id: 'a',
          label: '三種互相取代，只能留一個',
          correct: false,
          feedback: '它們比較像不同駕駛艙。學會駕馭後，換艙比較不可怕；團隊也可能同時使用多種。',
        },
        {
          id: 'b',
          label: '三種不同駕駛艙，都能完成類似任務',
          correct: true,
          feedback: '正確。重點是規則、權限與流程能不能跟著走，而不是死守某一個品牌口號。',
        },
        {
          id: 'c',
          label: '只有付費的才叫 Agent',
          correct: false,
          feedback: 'Agent 指會使用工具、以某種角色做事的助手，跟貴不貴沒有絕對關係。',
        },
      ],
    },
    {
      id: 'q3',
      question: 'Session 最重要的用途是？',
      options: [
        {
          id: 'a',
          label: '讓對話與工作可以保存並接續',
          correct: true,
          feedback: '對。長任務請接續，不要無謂地撕掉筆記本；真的被錯誤假設污染了，再開新的並把結論寫進檔案。',
        },
        {
          id: 'b',
          label: '用來把程式碼藏起來不讓別人看',
          correct: false,
          feedback: 'Session 不是保險箱。隱私要另外小心：別貼密碼、金鑰，也別把對話當唯一備份。',
        },
        {
          id: 'c',
          label: '自動幫你繳作業',
          correct: false,
          feedback: '它不會自動交作業。你還是要檢查結果、確認測試，並自己負責繳交。',
        },
      ],
    },
  ],
}
