export default {
  id: 'ch1',
  number: 1,
  title: 'OpenCode 入門',
  tagline: '先認識這輛車，再學怎麼握住方向盤——模型是引擎，Harness 才是操控系統。',
  intro: '這一章會告訴你：Harness 是什麼、為什麼用 OpenCode 當教室，以及它跟 Claude Code、Codex 的關係。接著安裝、認識介面與內建工具，再完成第一個小任務，並學會用 Session 把工作接下去。',
  sections: [
    {
      id: '1-1',
      title: '簡介：Harness 與三種寫程式助手',
      goal: '分清楚「模型」和「駕馭模型的裝備」，也搞懂 OpenCode、Claude Code、Codex 不是誰要消滅誰，而是三種不同駕駛艙。',
      steps: [
        {
          type: 'text',
          title: '這堂課在學什麼？',
          body: [
            'AI 很會寫程式，但它不是自動駕駛的魔法車。它比較像一匹很快、很有力氣的馬：你給它目標，它會衝；你沒說清楚，它也可能跑去別的草地。',
            '很多人一開始只盯著「哪個模型最強」。可是真正讓作業穩、安全、能重做的，往往是規則、權限、工具和工作流程。少了這些，再強的模型也可能亂改檔、忘了測試、或把秘密貼出去。',
            '這堂課要學的，不是把模型名字背起來，而是學會當一位冷靜的騎士：知道何時放手、何時踩煞車、何時把經驗寫進說明書留給下一次。',
          ],
        },
        {
          type: 'metaphor',
          title: 'Harness 是什麼？',
          body: [
            'Harness 這個詞，英文有「馬具、安全帶」的意思。在 AI 寫程式的世界裡，它指的是整套「駕馭系統」——不是單一按鈕，而是讓模型乖乖做事的環境。',
            '規則檔、權限閘門、讀寫與 bash 等工具、工作階段（Session）、模型選擇、甚至 MCP 與 Skills，都算 Harness 的一部分。你把它們排好，助手才比較像隊友，而不是不受控的精靈。',
            '為什麼重要？因為同一顆模型，在不同 Harness 裡表現差很多。例如：有 AGENTS.md 和 Plan 模式時，它會先問再改；什麼都沒設時，它可能直接動手。',
          ],
          metaphor: {
            title: '不是引擎，是整輛車的操控系統',
            body: '模型像引擎：馬力很大，但不懂路況。Harness 像方向盤、煞車、後照鏡和交通規則——有了它們，你才知道何時轉彎、何時停、何時看一眼再繼續。引擎再強，沒有操控系統也容易撞牆。',
          },
        },
        {
          type: 'reveal',
          title: '三種助手，三種駕駛艙',
          body: [
            '點開卡片。它們都能幫你讀專案、改檔案、跑指令，但品牌、規則檔名稱和日常習慣不一樣。',
            '學 OpenCode 不是為了「消滅」其他工具，而是先在一間看得見零件的教室裡練駕馭；練會之後，換駕駛艙會比較像換腳踏車，而不是重新學騎車。',
          ],
          cards: [
            {
              tag: '開源駕駛艙',
              title: 'OpenCode',
              body: '開源的 AI 寫程式助手（官方專案 anomalyco/opencode，網站 opencode.ai）。可以接很多家模型，規則常放在 AGENTS.md，設定常在 opencode.json / opencode.jsonc。適合當教室：權限、Agent、MCP 都攤在設定裡看得見。',
            },
            {
              tag: 'Anthropic',
              title: 'Claude Code',
              body: 'Anthropic（Claude）家的寫程式助手。許多團隊已經用它開工，規則常放在 CLAUDE.md。OpenCode 常能讀到這份檔，方便你接手別人用 Claude Code 開始的專案，而不必第一天就重寫全部班規。',
            },
            {
              tag: 'OpenAI',
              title: 'Codex',
              body: 'OpenAI 家的寫程式助手。同樣能讀專案、改檔案、跑指令，但介面習慣與設定又是另一套。重點不是比較誰「比較神」，而是你的規則與驗收流程能不能跟著走。',
            },
          ],
        },
        {
          type: 'choose',
          title: '它們是誰取代誰嗎？',
          prompt: '如果同學說「以後只要 OpenCode，Claude Code 就可以丟掉」，你覺得？',
          options: [
            {
              id: 'a',
              label: '對，新工具一定會淘汰舊工具。',
              correct: false,
              feedback: '不一定。比較像不同廠牌的腳踏車，都能騎到學校，只是煞車手感不同。團隊也可能同時保留多種駕駛艙。',
            },
            {
              id: 'b',
              label: '不對。它們比較像不同駕駛艙，任務類似，但不是誰消滅誰。',
              correct: true,
              feedback: '正確。學會 Harness 思維後，換駕駛艙比較像換腳踏車，不是把「怎麼騎車、怎麼檢查煞車」忘掉。規則與流程才是可帶走的能力。',
            },
            {
              id: 'c',
              label: '只有最貴的那個才算真正的 AI。',
              correct: false,
              feedback: '價格不是重點。真正影響成敗的是：你怎麼下指令、怎麼設權限、怎麼檢查結果、怎麼把規則寫進檔案。',
            },
          ],
        },
        {
          type: 'checklist',
          title: '為什麼用 OpenCode 來學？',
          body: [
            'OpenCode 適合當教室，因為你可以看清楚「駕馭」的零件，而不是只看到一個黑盒子聊天窗。勾選你聽懂的點：',
          ],
          items: [
            {
              id: 'c1',
              text: '它可以接很多模型，比較不會被單一品牌綁死。',
              hint: '像教室裡可以換不同顏色的筆，但作業格式（規則、權限、驗收）還是你訂的。模型可以換，Harness 思維可以留下。',
            },
            {
              id: 'c2',
              text: '規則、權限、插件、MCP 都攤在設定裡，方便練習 Harness。',
              hint: '你看得見方向盤在哪，才學得會轉彎；看不見的話，就只能祈禱模型「好心」。',
            },
            {
              id: 'c3',
              text: '它能讀 Claude Code 專案的 CLAUDE.md，方便接手別人的專案。',
              hint: '換教室時，舊的班規還能被看見。有 AGENTS.md 時通常以它為主；沒有時，CLAUDE.md 常能當後備。',
            },
          ],
        },
        {
          type: 'text',
          title: '這一章你會帶走什麼？',
          body: [
            '讀完第一章，你應該能用自己的話說：模型是引擎，Harness 是操控；OpenCode 是其中一種駕駛艙。',
            '接下來兩小節會動手：安裝與認識介面，再做一個「檢查開發環境」的小任務，並學會 Session 為什麼重要。',
            '若某句指令和你電腦上的畫面不一樣，請以官方文件（opencode.ai）為準——工具更新很快，原理比較耐用。',
          ],
        },
      ],
    },
    {
      id: '1-2',
      title: '安裝與介面',
      goal: '知道 Win / macOS / Linux 都能裝，認識 TUI 畫面與內建工具，並連上至少一顆能用的模型。',
      steps: [
        {
          type: 'text',
          title: '先準備電腦這塊草地',
          body: [
            'OpenCode 可以在 Windows、macOS、Linux 使用。像三個不同操場，比賽規則差不多，只是進場方式略有不同。',
            '你需要能連上網。建議先有 Git（之後存檔、看差異很方便）。若要用 npm 安裝，才需要 Node.js；用官方安裝腳本或套件管理工具時，不一定要先裝 Node。',
            '正式安裝請以官方文件為準（opencode.ai）。版本常更新，不要死背某一行舊指令；下面只是常見路徑的導覽，幫你知道「大概會走哪幾步」。',
          ],
          note: '專有名詞：CLI 是「用文字下指令的視窗」；TUI 是「在終端機裡的彩色介面」。官方專案是 anomalyco/opencode（網站 opencode.ai），npm 套件名是 opencode-ai。',
        },
        {
          type: 'flow',
          title: '三種系統，同一條路',
          body: [
            '流程相同，只是套件來源可能不同。下列指令以官方文件常見寫法為例，若頁面有更新請跟官方走。',
          ],
          flow: [
            {
              n: 1,
              title: '選安裝方式',
              body: '通用：curl -fsSL https://opencode.ai/install | bash。也可用 npm i -g opencode-ai。macOS/Linux 可用 brew install anomalyco/tap/opencode。Windows 可用 scoop / choco；官方也常建議用 WSL，體驗較接近 Linux。選一種你熟的就好，不必全裝。',
            },
            {
              n: 2,
              title: '打開終端機',
              body: 'Windows 可用 PowerShell、Windows Terminal，或 WSL；macOS / Linux 用內建終端機。確認你「現在這個視窗」裡能跑剛裝的指令（有時要重開終端機才找得到路徑）。',
            },
            {
              n: 3,
              title: '啟動 OpenCode',
              body: '裝好後輸入 opencode。它會打開 TUI，也就是文字介面的工作台。可用 opencode --version 確認版本，確定不是裝到舊的或別名衝突的指令。',
            },
            {
              n: 4,
              title: '連上模型',
              body: '用 /connect 接上供應商，再用 /models 挑選模型。沒有模型，助手就只是空駕駛艙——畫面在，但沒有引擎可開火。第七章會更細講方案與風險。',
            },
          ],
        },
        {
          type: 'reveal',
          title: '介面像一張工作桌',
          body: [
            '點卡片，認識你常看到的區域。第一次進去可能覺得字很多，先抓三樣就好：你在跟誰說話、現在是哪個角色、斜線指令在哪。',
          ],
          cards: [
            {
              tag: '對話',
              title: '工作階段 Session',
              body: '你跟助手的一次連續對話與它做過的事。像一本筆記本：可以合上保存，下次接著寫。同一個任務請盡量接續同一本；換專案或換大題目，再開新的，比較不會上下文混成一鍋粥。',
            },
            {
              tag: '切換',
              title: 'Agent 與模型',
              body: 'Agent 是角色（例如 Plan 先想、Build 動手），常用 Tab 切換。模型是大腦品牌／型號。兩者可以分開選：同一角色可換大腦，同一大腦也可換角色。',
            },
            {
              tag: '指令',
              title: '斜線指令 /',
              body: '輸入 / 會看到指令選單，例如 /init、/undo、/redo、/models、/connect。像遊戲熱鍵：不必背完全部，但要知道「法術書」入口在斜線。',
            },
          ],
        },
        {
          type: 'checklist',
          title: '內建工具像身體部位',
          body: [
            '助手不是只會聊天。它有「眼睛、手、腳」。了解工具，你才知道何時該准、何時該問、何時該禁。勾選你理解的：',
          ],
          items: [
            {
              id: 't1',
              text: '讀檔、搜尋、列資料夾：像眼睛，用來看專案。',
              hint: '常見如 read / grep / glob / list。先讓它看清楚，比急著叫它改一堆檔更安全。',
            },
            {
              id: 't2',
              text: '寫檔、修改：像手，真的會改你的作業。',
              hint: 'write / edit。Plan 模式預設會先問你；Build 較常直接動手。改完請自己看差異，不要閉眼接受。',
            },
            {
              id: 't3',
              text: 'bash：像跑到廚房開火。能執行系統指令，所以要小心。',
              hint: '這就是為什麼權限很重要。安裝軟體、刪檔、推送遠端，都可能從這扇門出去。',
            },
            {
              id: 't4',
              text: 'question、todo：它能問你問題，也能列待辦。',
              hint: '好的助手會先問清楚，再動手；待辦則讓長任務不會只活在聊天氣泡裡。',
            },
          ],
        },
        {
          type: 'text',
          title: '安裝後常見卡關',
          body: [
            '輸入 opencode 卻說找不到指令：常是終端機沒重開，或裝到另一個環境（例如 Windows 本機裝了、你卻在 WSL 裡找）。',
            '畫面有了但什麼都不會：多半還沒 /connect 連上模型，或額度／金鑰有問題。先做一個超小問題測通，再開始改專案。',
            '若官方安裝頁的指令跟這裡不完全一樣，以官方為準；本課教的是「為什麼要這幾步」，不是某一版畫面的絕對複製品。',
          ],
        },
      ],
    },
    {
      id: '1-3',
      title: '第一個任務：裝工具與接續 Session',
      goal: '請 Agent 幫你準備開發工具，練習「先看再准」，並學會保存、下次再打開同一個工作階段。',
      steps: [
        {
          type: 'text',
          title: '第一個任務不要太大',
          body: [
            '第一次不要叫它「做一個完整遊戲」或「重構整個專案」。先請它檢查環境：Node、Git、套件管理工具有沒有裝好、版本大概是多少。',
            '這像請學長幫你檢查腳踏車煞車與輪胎，而不是第一天就去爬陡坡。小任務成功，你才比較敢把更大的方向盤交給它——而且你也比較知道它做事的節奏。',
            '你要清楚說三件事：作業系統是什麼、專案資料夾在哪、成功長什麼樣子（例如「node -v 與 git --version 都有正常輸出」）。目標模糊時，它只能猜。',
          ],
        },
        {
          type: 'flow',
          title: '模擬：請 Agent 裝開發工具',
          body: [
            '下面是課堂模擬流程。真正安裝請依你電腦的官方文件操作，並經過大人同意（尤其是改系統、裝全域軟體時）。',
          ],
          flow: [
            {
              n: 1,
              title: '說明目標',
              body: '例如：「檢查 Node 與 Git，缺什麼就告訴我怎麼裝，先不要亂改系統、也不要自動安裝一堆我沒同意的東西。」把禁止事項講清楚，比事後生氣有用。',
            },
            {
              n: 2,
              title: '讓它先看',
              body: '好的 Agent 會先讀環境、列出版本或錯誤訊息，而不是直接狂裝。若它還沒看就動手，你可以叫停，要求先報告現況。',
            },
            {
              n: 3,
              title: '你批准高風險動作',
              body: '安裝全域軟體、改系統設定、刪除檔案，都該先問你。你是騎士，不是乘客——准許權在你手上。',
            },
            {
              n: 4,
              title: '驗證',
              body: '請它再跑一次版本指令，或你自己在終端機跑。看到合理的版本號，才算過關；只聽它說「好了」不算數。',
            },
          ],
          note: '這是模擬流程。真正安裝請依你電腦的官方文件操作，並經過大人同意。',
        },
        {
          type: 'metaphor',
          title: 'Session 是一本可合上的筆記本',
          body: [
            'Session 就是這一次對話加上它做過的事與讀過的脈絡。你合上筆記本，字還在；明天打開同一本，它比較記得前面發生什麼。',
            '開新的 Session 則像換一本空白筆記本：比較乾淨，但也比較健忘。長任務（例如連續兩天裝環境、再裝專案套件）通常應接續同一本。',
            '什麼時候該開新的？換專案、換完全不同的題目，或舊對話已被錯誤假設污染、怎麼講都繞不開的時候。乾淨很重要，但不要為了「看起來清爽」每天撕日記。',
          ],
          metaphor: {
            title: '不要每天撕掉日記',
            body: '長任務請接續同一個 Session，讓上下文累積成可用的記憶。換題目、換專案，再開新的。這樣才不會把「昨天在修腳踏車」和「今天在烤蛋糕」的筆記黏成一鍋粥。',
          },
        },
        {
          type: 'choose',
          title: '明天要接著做，怎麼辦？',
          prompt: '你今天請 OpenCode 檢查完環境。明天想繼續裝專案套件。最好的做法是？',
          options: [
            {
              id: 'a',
              label: '每次都開全新 Session，比較乾淨。',
              correct: false,
              feedback: '新 Session 較乾淨，但也比較健忘。同一個任務接著做，通常應打開舊的那本筆記本；真的被污染了再換本。',
            },
            {
              id: 'b',
              label: '打開昨天那個 Session 繼續講。',
              correct: true,
              feedback: '對。接續 Session 能保留上下文，比較不用從頭自我介紹「我是誰、專案在哪、昨天查到什麼」。',
            },
            {
              id: 'c',
              label: '把對話複製到通訊軟體就好，助手會自己記得。',
              correct: false,
              feedback: '通訊軟體不是它的記憶。真正能留下的，是 Session、規則檔（如 AGENTS.md）和專案裡的待辦與摘要。',
            },
          ],
        },
        {
          type: 'text',
          title: '第一章收束',
          body: [
            '到這裡，你已經有一張地圖：Harness 是什麼、三種駕駛艙怎麼並存、怎麼安裝與連模型、第一個任務怎麼下、Session 怎麼接。',
            '下一章會用「PDF 浮水印」當故事，把 AGENTS.md、Plan/Build、/init 與 /undo 串起來——開始把「會打開」變成「會駕馭一小段完整流程」。',
          ],
        },
      ],
    },
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
