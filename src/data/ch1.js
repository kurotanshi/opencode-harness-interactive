export default {
  id: 'ch1',
  number: 1,
  title: 'OpenCode 入門',
  tagline: '先認識這輛車，再學怎麼握住方向盤。',
  intro: '這一章會告訴你：Harness 是什麼、為什麼用 OpenCode 學，以及它跟 Claude Code、Codex 的關係。接著安裝、認識介面，再完成第一個小任務。',
  sections: [
    {
      id: '1-1',
      title: '簡介：Harness 與三種寫程式助手',
      goal: '分清楚「模型」和「駕馭模型的裝備」，也搞懂 OpenCode、Claude Code、Codex 不是誰要消滅誰。',
      steps: [
        {
          type: 'text',
          title: '這堂課在學什麼？',
          body: [
            'AI 很會寫程式，但它不是自動駕駛的魔法車。它比較像一匹很快的馬。',
            '馬很有力氣，可是如果你沒有韁繩、沒有路線、也沒有安全帽，它可能跑去別的草地。',
            '這堂課要學的，不是把模型背起來，而是學會當一位冷靜的騎士。',
          ],
        },
        {
          type: 'metaphor',
          title: 'Harness 是什麼？',
          body: [
            'Harness 這個詞，英文有「馬具、安全帶」的意思。在 AI 寫程式的世界裡，它指的是整套「駕馭系統」。',
            '規則、權限、工具、工作階段、模型選擇，都算 Harness 的一部分。',
          ],
          metaphor: {
            title: '不是引擎，是整輛車的操控系統',
            body: '模型像引擎。Harness 像方向盤、煞車、後照鏡和交通規則。引擎再強，沒有操控系統也會撞牆。',
          },
        },
        {
          type: 'reveal',
          title: '三種助手，三種駕駛艙',
          body: ['點開卡片。它們都能幫你寫程式，但品牌、規則檔和習慣不一樣。'],
          cards: [
            { tag: '開源駕駛艙', title: 'OpenCode', body: '開源的 AI 寫程式助手。可以接很多家模型。規則常放在 AGENTS.md 和 opencode.json。' },
            { tag: 'Anthropic', title: 'Claude Code', body: 'Claude 家的寫程式助手。規則常放在 CLAUDE.md。很多團隊已經用它開工。' },
            { tag: 'OpenAI', title: 'Codex', body: 'OpenAI 家的寫程式助手。同樣能讀專案、改檔案、跑指令。習慣又是另一套。' },
          ],
        },
        {
          type: 'choose',
          title: '它們是誰取代誰嗎？',
          prompt: '如果同學說「以後只要 OpenCode，Claude Code 就可以丟掉」，你覺得？',
          options: [
            { id: 'a', label: '對，新工具一定會淘汰舊工具。', correct: false, feedback: '不一定。比較像不同廠牌的腳踏車，都能騎到學校，只是煞車手感不同。' },
            { id: 'b', label: '不對。它們比較像不同駕駛艙，任務類似，但不是誰消滅誰。', correct: true, feedback: '正確。學會 Harness 思維後，換駕駛艙比較像換腳踏車，不是把騎車這件事忘掉。' },
            { id: 'c', label: '只有最貴的那個才算真正的 AI。', correct: false, feedback: '價格不是重點。重點是你怎麼下指令、怎麼檢查、怎麼保存規則。' },
          ],
        },
        {
          type: 'checklist',
          title: '為什麼用 OpenCode 來學？',
          body: ['OpenCode 適合當教室，因為你可以看清楚「駕馭」的零件。勾選你聽懂的點：'],
          items: [
            { id: 'c1', text: '它可以接很多模型，比較不會被單一品牌綁死。', hint: '像教室裡可以換不同顏色的筆，但作業格式還是你訂的。' },
            { id: 'c2', text: '規則、權限、插件、MCP 都攤在設定裡，方便練習 Harness。', hint: '你看得見方向盤在哪，才學得會轉彎。' },
            { id: 'c3', text: '它能讀 Claude Code 專案的 CLAUDE.md，方便接手別人的專案。', hint: '換教室時，舊的班規還能被看見。' },
          ],
        },
      ],
    },
    {
      id: '1-2',
      title: '安裝與介面',
      goal: '知道 Win / macOS / Linux 都能裝，並認識 OpenCode 的畫面與內建工具。',
      steps: [
        {
          type: 'text',
          title: '先準備電腦這塊草地',
          body: [
            'OpenCode 可以在 Windows、macOS、Linux 使用。像三個不同操場，但比賽規則差不多。',
            '你需要能連上網。建議先有 Git。若要用 npm 安裝，才需要 Node.js。',
            '正式安裝請以官方文件為準（opencode.ai）。版本常更新，不要死背某一行舊指令。',
          ],
          note: '專有名詞：CLI 是「用文字下指令的視窗」；TUI 是「在終端機裡的彩色介面」。官方專案是 anomalyco/opencode（網站 opencode.ai），npm 套件名是 opencode-ai。',
        },
        {
          type: 'flow',
          title: '三種系統，同一條路',
          body: ['流程相同，只是套件來源可能不同。下列指令以官方文件常見寫法為例，若頁面有更新請跟官方走。'],
          flow: [
            { n: 1, title: '選安裝方式', body: '通用：curl -fsSL https://opencode.ai/install | bash。也可用 npm i -g opencode-ai。macOS/Linux 可用 brew install anomalyco/tap/opencode。Windows 可用 scoop / choco；官方也建議用 WSL 體驗較佳。' },
            { n: 2, title: '打開終端機', body: 'Windows 可用 PowerShell、Windows Terminal，或 WSL；macOS / Linux 用內建終端機。' },
            { n: 3, title: '啟動 OpenCode', body: '裝好後輸入 opencode。它會打開 TUI，也就是文字介面的工作台。可用 opencode --version 確認版本。' },
            { n: 4, title: '連上模型', body: '用 /connect 接上供應商。沒有模型，助手就只是空駕駛艙。' },
          ],
        },
        {
          type: 'reveal',
          title: '介面像一張工作桌',
          body: ['點卡片，認識你常看到的區域。'],
          cards: [
            { tag: '對話', title: '工作階段 Session', body: '你跟助手的一次連續對話。像一本筆記本。可以保存，下次接著寫。' },
            { tag: '切換', title: 'Agent 與模型', body: 'Agent 是角色（例如 Plan 或 Build）。模型是大腦品牌。兩者可以分開選。' },
            { tag: '指令', title: '斜線指令 /', body: '輸入 / 會看到指令選單，例如 /init、/undo、/models。像遊戲熱鍵。' },
          ],
        },
        {
          type: 'checklist',
          title: '內建工具像身體部位',
          body: ['助手不是只會聊天。它有手腳。勾選你理解的工具：'],
          items: [
            { id: 't1', text: '讀檔、搜尋、列資料夾：像眼睛，用來看專案。', hint: 'read / grep / glob / list' },
            { id: 't2', text: '寫檔、修改：像手，真的會改你的作業。', hint: 'write / edit。Plan 模式預設會先問你。' },
            { id: 't3', text: 'bash：像跑到廚房開火。能執行系統指令，所以要小心。', hint: '這就是為什麼權限很重要。' },
            { id: 't4', text: 'question、todo：它能問你問題，也能列待辦。', hint: '好的助手會先問清楚，再動手。' },
          ],
        },
      ],
    },
    {
      id: '1-3',
      title: '第一個任務：裝工具與接續 Session',
      goal: '請 Agent 幫你準備開發工具，並學會保存、下次再打開同一個工作階段。',
      steps: [
        {
          type: 'text',
          title: '第一個任務不要太大',
          body: [
            '第一次不要叫它「做一個完整遊戲」。先請它檢查環境：Node、Git、套件管理工具有沒有裝好。',
            '這像請學長幫你檢查腳踏車煞車，而不是第一天就去爬陡坡。',
            '你要清楚說：作業系統是什麼、專案資料夾在哪、成功長什麼樣子。',
          ],
        },
        {
          type: 'flow',
          title: '模擬：請 Agent 裝開發工具',
          flow: [
            { n: 1, title: '說明目標', body: '例如：「檢查 Node 與 Git，缺什麼就告訴我怎麼裝，先不要亂改系統。」' },
            { n: 2, title: '讓它先看', body: '好的 Agent 會先讀環境、列出版本，而不是直接狂裝一堆東西。' },
            { n: 3, title: '你批准高風險動作', body: '安裝全域軟體、改系統設定，都該先問你。你是騎士，不是乘客。' },
            { n: 4, title: '驗證', body: '請它再跑一次版本指令。看到版本號，才算過關。' },
          ],
          note: '這是模擬流程。真正安裝請依你電腦的官方文件操作，並經過大人同意。',
        },
        {
          type: 'metaphor',
          title: 'Session 是一本可合上的筆記本',
          body: [
            'Session 就是這一次對話加上它做過的事。你合上筆記本，字還在。',
            '下次打開同一個 Session，它比較記得前面發生什麼。開新的 Session 則像換一本空白筆記本。',
          ],
          metaphor: {
            title: '不要每天撕掉日記',
            body: '長任務請接續同一個 Session。換題目、換專案，再開新的。這樣上下文才不會混成一鍋粥。',
          },
        },
        {
          type: 'choose',
          title: '明天要接著做，怎麼辦？',
          prompt: '你今天請 OpenCode 檢查完環境。明天想繼續裝專案套件。最好的做法是？',
          options: [
            { id: 'a', label: '每次都開全新 Session，比較乾淨。', correct: false, feedback: '新 Session 較乾淨，但也比較健忘。同一個任務接著做，通常應打開舊的那本筆記本。' },
            { id: 'b', label: '打開昨天那個 Session 繼續講。', correct: true, feedback: '對。接續 Session 能保留上下文，比較不用從頭自我介紹。' },
            { id: 'c', label: '把對話複製到通訊軟體就好，助手會自己記得。', correct: false, feedback: '通訊軟體不是它的記憶。真正的記憶在 Session、規則檔和專案裡。' },
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
        { id: 'a', label: '只是某一個超強模型的名字', correct: false, feedback: 'Harness 不是模型名稱，而是駕馭模型的整套方法與裝備。' },
        { id: 'b', label: '方向盤、煞車、規則與工具的總稱', correct: true, feedback: '沒錯。有引擎還不夠，要有辦法安全地開。' },
        { id: 'c', label: '只能在 OpenCode 裡使用的插件', correct: false, feedback: 'Harness 思維可以帶到 Claude Code 或 Codex，不綁單一工具。' },
      ],
    },
    {
      id: 'q2',
      question: 'OpenCode、Claude Code、Codex 的關係較接近？',
      options: [
        { id: 'a', label: '三種互相取代，只能留一個', correct: false, feedback: '它們比較像不同駕駛艙。學會駕馭後，換艙比較不可怕。' },
        { id: 'b', label: '三種不同駕駛艙，都能完成類似任務', correct: true, feedback: '正確。重點是規則、權限與流程能不能跟著走。' },
        { id: 'c', label: '只有付費的才叫 Agent', correct: false, feedback: 'Agent 指會使用工具的助手，跟貴不貴沒有絕對關係。' },
      ],
    },
    {
      id: 'q3',
      question: 'Session 最重要的用途是？',
      options: [
        { id: 'a', label: '讓對話與工作可以保存並接續', correct: true, feedback: '對。長任務請接續，不要無謂地撕掉筆記本。' },
        { id: 'b', label: '用來把程式碼藏起來不讓別人看', correct: false, feedback: 'Session 不是保險箱。隱私要另外小心。' },
        { id: 'c', label: '自動幫你繳作業', correct: false, feedback: '它不會自動交作業。你還是要檢查結果。' },
      ],
    },
  ],
}
