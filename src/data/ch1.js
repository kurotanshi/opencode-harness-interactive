export default {
  id: "ch1",
  number: 1,
  title: "OpenCode 入門",
  tagline: "先裝好、打開、連上模型——照步驟做，比只看摘要有用。",
  intro: "這一章以實驗室為主：安裝 OpenCode、打開 TUI、連模型、做第一個環境檢查，並練習接續 Session。概念短短帶過，重點是你真的按過那些鍵。",
  outcome: "完成本章你會做出／做到：在終端機跑出 opencode --version、打開 TUI、用 /connect 與 /models 連上模型，並完成一次環境檢查 Session。",
  youNeed: "一台可上網的電腦、終端機；安裝時可請大人陪同（尤其是貼金鑰）。",
  minutes: 45,
  dependsOn: [],
  sections: [
    {
      id: "1-1",
      title: "簡介：Harness 與三種寫程式助手",
      track: "required",
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
          track: "required",
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
      track: "required",
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
          track: "required",
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
              track: "optional",
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
              track: "optional",
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
          track: "required",
          body: [
            "裝好後一定要驗證版本，再開介面。下一章會建 harness-workshop；這一節先在任意練習資料夾打開即可。"
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
          track: "required",
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
      track: "required",
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
          track: "required",
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
              expect: "你親眼看到版本號，或確認真的沒裝。",
              command: "node -v && git --version",
              hint: "Windows PowerShell 可分開跑 node -v 與 git --version。"
            },
            {
              id: "t3",
              track: "optional",
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
          track: "required",
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
              hint: "若上下文亂掉，開新 Session，但把結論寫進筆記或之後的 AGENTS.md。"
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
      question: '你剛才在終端機跑 opencode --version 時，成功的畫面比較像？',
      options: [
        {
          id: 'a',
          label: '印出版本數字（例如 1.x.x），不是 command not found',
          correct: true,
          feedback: '對！有版本號代表指令找得到。若是 not found，要重開終端機或確認裝在同一個環境（Windows／WSL）。',
        },
        {
          id: 'b',
          label: '自動打開瀏覽器下載遊戲',
          correct: false,
          feedback: '版本指令只會印文字，不會自己下載遊戲。',
        },
        {
          id: 'c',
          label: '一定要出現「Harness」三個英文字才算成功',
          correct: false,
          feedback: '版本輸出通常是數字；Harness 是我們學的駕馭概念，不一定印在 --version 裡。',
        },
      ],
    },
    {
      id: 'q2',
      question: '實驗室裡你輸入 /connect 與 /models，是為了？',
      options: [
        {
          id: 'a',
          label: '連上供應商並選一顆能回覆的模型，讓駕駛艙有引擎',
          correct: true,
          feedback: '正確。你還用「回覆：pong」測過通路——有短回覆才算連線成功。',
        },
        {
          id: 'b',
          label: '把電腦恢復出廠設定',
          correct: false,
          feedback: '那不是這兩個斜線指令的工作。',
        },
        {
          id: 'c',
          label: '刪掉所有 Session',
          correct: false,
          feedback: 'Session 要保留才能接續；連線與選模型不會叫你清筆記本。',
        },
      ],
    },
    {
      id: 'q3',
      question: '你請助手檢查 Node／Git 後，自己又跑了 node -v && git --version。為什麼多這一步？',
      options: [
        {
          id: 'a',
          label: '要用自己的眼睛驗證它說的版本是不是真的',
          correct: true,
          feedback: '對。Harness 包含「你負責抽查」——助手報告後，你再跑一次才算驗收。',
        },
        {
          id: 'b',
          label: '因為指令比較好看',
          correct: false,
          feedback: '重點不是好看，是證據與驗收。',
        },
        {
          id: 'c',
          label: '這樣它就會自動繳交作業',
          correct: false,
          feedback: '它不會自動交作業；你仍要檢查結果。',
        },
      ],
    },
    {
      id: 'q4',
      question: '明天要接續「環境檢查」任務，你應該？',
      options: [
        {
          id: 'a',
          label: '打開昨天那個 Session 繼續，不要無謂撕掉筆記本',
          correct: true,
          feedback: '對。你在實驗室練過開新本、找舊本、接續說「接續昨天的環境檢查」。',
        },
        {
          id: 'b',
          label: '每天開全新 Session，假裝第一次見面',
          correct: false,
          feedback: '新 Session 較健忘；同一長任務應接續。',
        },
        {
          id: 'c',
          label: '把金鑰貼到班級群組備份',
          correct: false,
          feedback: '金鑰絕對不要貼到聊天室。',
        },
      ],
    },
  ],
}
