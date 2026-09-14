export default {
  id: 'ch2',
  number: 2,
  title: 'PDF 浮水印實作導覽',
  tagline: '用一個小工具，練習規則檔、計畫與可回退。',
  intro: '這一章用「幫 PDF 加浮水印」當故事。你會先學會 AGENTS.md 放哪裡、為什麼會讀到 CLAUDE.md，再走一遍概念流程，最後分清 Plan 與 Build。',
  sections: [
    {
      id: '2-1',
      title: 'AGENTS.md：專案級 vs 全域級',
      goal: '搞懂家規和教室規的差別，避免規則寫錯地方。',
      steps: [
        {
          type: 'metaphor',
          title: '兩種規則本',
          body: [
            'AGENTS.md 是寫給助手看的說明書。它會進到模型的上下文裡，影響它怎麼做事。',
            '你可以有兩層：全宇宙通用的家規，以及這個專案才用的教室規。',
          ],
          metaphor: {
            title: '家規 vs 教室規',
            body: '全域檔像家規：「進門先洗手」。專案檔像教室規：「這堂課要用尺畫圖」。換教室時，家規還在；教室規只留在那一間教室。',
          },
        },
        {
          type: 'reveal',
          title: '它們通常放哪？',
          body: ['點卡片看常見位置。實際路徑以官方文件為準。'],
          cards: [
            { tag: '全域', title: '~/.config/opencode/AGENTS.md', body: '對大多數專案都生效。適合寫你個人的安全習慣，例如「先問再裝套件」。' },
            { tag: '專案', title: '專案根目錄的 AGENTS.md', body: '只對這個資料夾生效。適合寫建置指令、測試怎麼跑、這個專案的命名習慣。' },
            { tag: '較近者', title: '子資料夾也可以有', body: '靠近你正在工作的資料夾時，助手也可能讀到更局部的說明。像分組教室的便利貼。' },
          ],
        },
        {
          type: 'choose',
          title: '這句話該寫在哪？',
          prompt: '「這個 PDF 工具要用 pnpm 安裝，測試指令是 npm test。」應該放？',
          options: [
            { id: 'a', label: '全域 AGENTS.md，因為你以後都只用 pnpm。', correct: false, feedback: '別人的專案可能用 npm 或 bun。專案指令請放在這個專案的 AGENTS.md。' },
            { id: 'b', label: '這個專案的 AGENTS.md。', correct: true, feedback: '正確。建置與測試屬於這個教室的規矩。' },
            { id: 'c', label: '哪裡都不用寫，模型會永遠記住。', correct: false, feedback: '模型不是永久記憶。重要規則要寫進檔案，才算真正保存。' },
          ],
        },
      ],
    },
    {
      id: '2-2',
      title: '自動讀 CLAUDE.md',
      goal: '知道 OpenCode 為什麼能接手 Claude Code 專案，以及誰優先。',
      steps: [
        {
          type: 'text',
          title: '換駕駛艙，班規還在牆上',
          body: [
            '很多專案先用 Claude Code 寫了 CLAUDE.md。那是它的規則檔。',
            'OpenCode 主要看 AGENTS.md。如果沒有 AGENTS.md，它常常能改看 CLAUDE.md，讓你不用立刻重寫全部班規。',
            '如果同一個地方兩份都有，通常 AGENTS.md 優先。它才是 OpenCode 的第一語言。',
          ],
          note: '版本演進中，細節可能調整。原則是：專案應有一份「單一可信來源」，不要讓兩份規則互相打架。',
        },
        {
          type: 'choose',
          title: '兩份規則同時存在',
          prompt: '專案裡同時有 AGENTS.md 和 CLAUDE.md，OpenCode 較可能怎麼做？',
          options: [
            { id: 'a', label: '兩份都當聖經，逐字合併且永遠不衝突。', correct: false, feedback: '合併可能造成打架。常見做法是 AGENTS.md 優先，CLAUDE.md 當後備。' },
            { id: 'b', label: '以 AGENTS.md 為主，CLAUDE.md 當找不到時的後備。', correct: true, feedback: '對。先有一份主規則，再考慮相容。' },
            { id: 'c', label: '它會忽略全部 Markdown，只聽你今天打的那句話。', correct: false, feedback: '你今天打的話很重要，但專案規則仍會進入上下文。' },
          ],
        },
        {
          type: 'checklist',
          title: '接手舊專案時的檢查',
          items: [
            { id: 'r1', text: '先找 AGENTS.md。有就讀它。', hint: '這是 OpenCode 的主規則。' },
            { id: 'r2', text: '沒有的話，找 CLAUDE.md，看前人留下什麼。', hint: '像讀前任班長的便利貼。' },
            { id: 'r3', text: '若兩份內容打架，把它們整理成一份主規則。', hint: '單一可信來源，下一章會再練。' },
          ],
        },
      ],
    },
    {
      id: '2-3',
      title: '寫 PDF 浮水印工具（概念流程）',
      goal: '用檢查清單走完「加浮水印」的思路，不必真的寫完整 PDF 程式。',
      steps: [
        {
          type: 'text',
          title: '任務故事',
          body: [
            '想像學校要在講義 PDF 上加「僅供課堂練習」幾個字，避免檔案被當成正式文件亂傳。',
            '這叫浮水印：淡淡蓋在頁面上的標記。',
            '我們不在網站裡寫完整程式，而是練習：怎麼把任務拆成助手做得到、你檢查得到的步驟。',
          ],
        },
        {
          type: 'flow',
          title: '概念步驟',
          flow: [
            { n: 1, title: '說清楚成品', body: '輸入一份 PDF，輸出一份新 PDF。原檔不要被直接覆蓋。' },
            { n: 2, title: '決定浮水印長相', body: '文字、透明度、旋轉、每一頁都要有。' },
            { n: 3, title: '選工具庫', body: '在 AGENTS.md 寫「用哪個套件、怎麼安裝、怎麼測試」。' },
            { n: 4, title: '先做一頁樣本', body: '不要一次處理 200 頁。先證明一頁做得到。' },
            { n: 5, title: '檢查', body: '打開輸出檔：文字還能選取嗎？頁數對嗎？浮水印會不會太濃？' },
          ],
        },
        {
          type: 'checklist',
          title: '模擬驗收清單',
          body: ['把這些勾完，才算「工具有譜」。'],
          items: [
            { id: 'p1', text: '原檔還在，輸出是新檔。', hint: '像影印時留下原稿。' },
            { id: 'p2', text: '每一頁都看得到浮水印。', hint: '封面、空白頁也要想到。' },
            { id: 'p3', text: '失敗時有清楚錯誤，而不是默默產出壞檔。', hint: '壞掉要大聲說，不要裝沒事。' },
            { id: 'p4', text: 'README 寫了怎麼用：輸入、輸出、指令。', hint: '下一個人才接得上手。' },
          ],
        },
      ],
    },
    {
      id: '2-4',
      title: 'Plan vs Build；/undo；/init',
      goal: '先想再做，做錯能退回，專案規則能自動長出來。',
      steps: [
        {
          type: 'reveal',
          title: '兩個內建主角',
          body: ['OpenCode 內建兩個常用的主要 Agent。用 Tab 可以切換。'],
          cards: [
            { tag: 'Plan', title: '先觀察、先計畫', body: '預設對改檔、跑指令比較謹慎，常會先問你。適合分析與畫地圖。' },
            { tag: 'Build', title: '動手實作', body: '預設工具開得比較齊，適合計畫確認後真的改程式。' },
            { tag: '切換', title: '不是兩個 App', body: '它們是同一駕駛艙裡的兩種角色。先 Plan 再 Build，很像先畫草圖再著色。' },
          ],
        },
        {
          type: 'text',
          title: '/undo 與 /init',
          body: [
            '/undo 用來撤回最近這一步對話造成的修改。像橡皮擦。若專案有 Git，撤回會更可靠。',
            '/init 會掃描專案，幫忙產生或更新 AGENTS.md。像請班長把教室規矩整理成一張海報。',
            '浮水印小工具很適合先 /init 寫下「怎麼安裝、怎麼測試」，再用 Plan 想步驟，最後才 Build。',
          ],
        },
        {
          type: 'choose',
          title: '你要先做哪件事？',
          prompt: '專案是空的，你想加 PDF 浮水印功能。第一步較好的是？',
          options: [
            { id: 'a', label: '直接叫 Build 開始產生一堆檔案。', correct: false, feedback: '太快動手，容易做出你也不懂的迷宮。' },
            { id: 'b', label: '先 /init 或手寫 AGENTS.md，再用 Plan 講步驟，最後才 Build。', correct: true, feedback: '漂亮。規則 → 計畫 → 實作，這就是 Harness 的節奏。' },
            { id: 'c', label: '先把模型換成最貴的，其他都隨便。', correct: false, feedback: '模型很重要，但沒有規則與計畫，貴也會亂衝。' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: '專案的測試指令應該寫在哪裡？',
      options: [
        { id: 'a', label: '只寫在你的腦袋裡', correct: false, feedback: '腦袋不是單一可信來源。' },
        { id: 'b', label: '這個專案的 AGENTS.md', correct: true, feedback: '對。教室規放在教室。' },
        { id: 'c', label: '永遠寫在全域檔，讓所有專案共用同一條測試指令', correct: false, feedback: '不同專案測試方式不同，不要硬套家規。' },
      ],
    },
    {
      id: 'q2',
      question: 'Plan 模式最主要的好處是？',
      options: [
        { id: 'a', label: '它比較會畫畫', correct: false, feedback: '重點不是畫畫，是先想清楚再改檔。' },
        { id: 'b', label: '先分析與規劃，降低亂改檔案的風險', correct: true, feedback: '正確。先看地圖，再走路。' },
        { id: 'c', label: '它不能讀檔案', correct: false, feedback: 'Plan 通常仍可讀與搜尋，只是改檔較謹慎。' },
      ],
    },
    {
      id: 'q3',
      question: '/init 的用途接近？',
      options: [
        { id: 'a', label: '幫專案整理出 AGENTS.md', correct: true, feedback: '對。它把專案習慣寫成助手看得懂的規則。' },
        { id: 'b', label: '把電腦恢復出廠設定', correct: false, feedback: '那不是 /init。不要跟系統重設搞混。' },
        { id: 'c', label: '自動繳交 GitHub 作業', correct: false, feedback: '它不會幫你交作業。' },
      ],
    },
  ],
}
