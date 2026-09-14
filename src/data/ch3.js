export default {
  id: 'ch3',
  number: 3,
  title: '操作與 Claude Code 切換',
  tagline: '同一個專案，換駕駛艙也不該換腦。',
  intro: '這一章練習日常操作：Agent、模型、工作階段、檔案與圖片、Context。接著處理共用規則與工具專屬設定，最後做出「下一個 Agent 接得住」的流程。',
  sections: [
    {
      id: '3-1',
      title: 'Agent、模型、工作階段與 Context',
      goal: '分清角色、大腦、筆記本，以及上下文為什麼會塞滿。',
      steps: [
        {
          type: 'reveal',
          title: '三個常常被混在一起的詞',
          cards: [
            { tag: '角色', title: 'Agent', body: '它用什麼態度做事。Plan 小心、Build 動手、審查員只看不改。' },
            { tag: '大腦', title: '模型 Model', body: '實際思考的引擎。同一角色可以換不同大腦。' },
            { tag: '筆記本', title: '工作階段 Session', body: '這次對話的記憶本。換 Session 幾乎像換一本新筆記。' },
          ],
        },
        {
          type: 'text',
          title: '檔案、圖片與 @',
          body: [
            '跟助手說話時，可以用 @ 把檔案拉進對話。像把作業攤在桌上，而不是只說「就是那份啦」。',
            '圖片也能丟進去：截圖、設計稿、錯誤畫面。這叫多模態：它不只看文字。',
            '但不是丟越多越好。桌子太亂，重點會被雜物埋住。',
          ],
        },
        {
          type: 'metaphor',
          title: 'Context 是書包容量',
          body: [
            'Context（上下文）是這一次模型能同時看到的內容：規則、對話、檔案、工具結果。',
            '書包有容量。塞爆了，它會漏東西，或開始摘要壓縮。',
          ],
          metaphor: {
            title: '不要把整間教室塞進書包',
            body: '需要哪一頁就帶哪一頁。對話太長時，可開新 Session，或讓系統做摘要，但你要檢查摘要有沒有漏關鍵規則。',
          },
          note: '專有名詞：Context window 就是書包大小，不同模型不一樣。',
        },
        {
          type: 'choose',
          title: '哪一個最會浪費 Context？',
          prompt: '請選出最容易把書包塞爆、卻不一定有幫助的做法。',
          options: [
            { id: 'a', label: '把整個專案所有檔案一次貼進對話。', correct: true, feedback: '對。應該讓它自己搜尋，或只 @ 真正相關的檔。' },
            { id: 'b', label: '只 @ 出錯的那個元件檔。', correct: false, feedback: '這比較精準，書包較輕。' },
            { id: 'c', label: '先用一句話說明目標，再讓它自己找檔。', correct: false, feedback: '這是好習慣。' },
          ],
        },
      ],
    },
    {
      id: '3-2',
      title: '共用規則 vs 工具專屬設定',
      goal: '知道哪些規則該跨工具共用，哪些該留在 OpenCode 或 Claude Code 自己的設定裡。',
      steps: [
        {
          type: 'text',
          title: '接手 Claude Code 專案',
          body: [
            '別人用 Claude Code 寫了一半，你改用 OpenCode，這很常見。',
            '先讀 CLAUDE.md / AGENTS.md、套件指令、測試怎麼跑。不要一進來就重寫風格。',
            '能共用的放 Markdown 規則；只有這個工具才懂的，放它自己的設定檔。',
          ],
        },
        {
          type: 'reveal',
          title: '什麼該共用？什麼該分開？',
          cards: [
            { tag: '共用', title: '專案事實', body: '如何啟動、如何測試、資料夾意義、千萬不要碰的目錄。這些換駕駛艙也該一樣。' },
            { tag: '共用', title: '品質標準', body: '例如「改完要跑測試」「不要提交秘密金鑰」。這是團隊的價值，不是某工具的私房菜。' },
            { tag: '專屬', title: '快捷鍵與插件', body: 'OpenCode 的 opencode.json、斜線指令、MCP 伺服器名稱，是這個駕駛艙的按鈕配置。' },
          ],
        },
        {
          type: 'choose',
          title: '這份設定該放哪？',
          prompt: '「按 Tab 在 Plan / Build 間切換」這種事，屬於？',
          options: [
            { id: 'a', label: '應該寫進所有人的 README，當成專案法律。', correct: false, feedback: '別的工具可能沒有 Tab 切換。這是 OpenCode 的操作習慣。' },
            { id: 'b', label: 'OpenCode 的工具專屬設定或教學。', correct: true, feedback: '對。駕駛艙按鈕不必假裝成專案法律。' },
            { id: 'c', label: '只能放在 Claude Code 的 CLAUDE.md。', correct: false, feedback: '那是另一個駕駛艙的習慣。' },
          ],
        },
      ],
    },
    {
      id: '3-3',
      title: '單一可信來源與接手流程',
      goal: '讓下一個 Agent（或下一個你）能接著做，不必考古。',
      steps: [
        {
          type: 'metaphor',
          title: '單一可信來源',
          body: [
            '如果 README 說用 npm，AGENTS.md 說用 pnpm，CLAUDE.md 又說用 bun，助手會迷路。',
            '單一可信來源意思是：同一件事，只承認一個官方答案。',
          ],
          metaphor: {
            title: '黑板上只寫一個集合時間',
            body: '不要在黑板上寫 9:00、在群組寫 9:10、在紙條寫 8:50。助手跟同學都會遲到。',
          },
        },
        {
          type: 'flow',
          title: '下一個 Agent 接得住的流程',
          flow: [
            { n: 1, title: '目標寫清楚', body: '現在做到哪、還沒做什麼、成功長什麼樣子。' },
            { n: 2, title: '規則放對地方', body: '專案事實進 AGENTS.md（必要時同步 CLAUDE.md 的精神，但避免打架）。' },
            { n: 3, title: '驗證方法留下', body: '測試指令、手動檢查步驟。沒有驗收，接手的人只能猜。' },
            { n: 4, title: 'Session 可接續', body: '同一任務留下可打開的 Session 或摘要。新 Agent 先讀摘要再動手。' },
            { n: 5, title: '不要藏秘密步驟', body: '你在腦子裡的「其實要先清快取」也要寫下來。' },
          ],
        },
        {
          type: 'checklist',
          title: '交接前 30 秒檢查',
          items: [
            { id: 'h1', text: '有一份主規則，不會互相打架。', hint: '單一可信來源。' },
            { id: 'h2', text: '有人能只靠文件跑起專案。', hint: '包含安裝與測試。' },
            { id: 'h3', text: '未完成項目寫成待辦，而不是只在聊天裡提過。', hint: '聊天會過期，待辦比較像接力棒。' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Agent 和模型的差別？',
      options: [
        { id: 'a', label: '沒有差別，只是翻譯不同', correct: false, feedback: '角色和大腦是兩層。' },
        { id: 'b', label: 'Agent 是角色與權限，模型是思考引擎', correct: true, feedback: '正確。同一個審查員角色，可以換不同大腦。' },
        { id: 'c', label: '模型負責存檔，Agent 負責上網', correct: false, feedback: '存檔與上網是工具，不是這兩個詞的定義。' },
      ],
    },
    {
      id: 'q2',
      question: '單一可信來源是為了避免？',
      options: [
        { id: 'a', label: '規則互相打架，助手不知道該聽誰', correct: true, feedback: '對。黑板只寫一個集合時間。' },
        { id: 'b', label: '電腦當機', correct: false, feedback: '那是硬體問題。' },
        { id: 'c', label: '字型不好看', correct: false, feedback: '跟字型無關。' },
      ],
    },
    {
      id: 'q3',
      question: 'Context 太滿時，較好的做法是？',
      options: [
        { id: 'a', label: '繼續貼更多檔案，讓它「看完整個宇宙」', correct: false, feedback: '書包會爆。' },
        { id: 'b', label: '只給相關檔案，或開新 Session / 做摘要並檢查', correct: true, feedback: '對。精準比龐大更有用。' },
        { id: 'c', label: '關掉權限，全部改用猜的', correct: false, feedback: '猜的不是 Harness。' },
      ],
    },
  ],
}
