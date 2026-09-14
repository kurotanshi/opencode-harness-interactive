export default {
  id: 'ch7',
  number: 7,
  title: '模型與方案',
  tagline: '選大腦像選交通工具：看路況，不看廣告。',
  intro: '這一章把 Provider、Model、本地模型講清楚，比較免費、訂閱與 API，認識 Go / Zen 與常見開放權重模型，並用比喻談 ChatGPT OAuth。最後練習依任務選模型、看風險、走接入步驟。',
  sections: [
    {
      id: '7-1',
      title: 'Provider / Model 三層',
      goal: '分清商店、商品與你家廚房。',
      steps: [
        {
          type: 'metaphor',
          title: '三層比較像這樣',
          metaphor: {
            title: '商店、餐點、自家廚房',
            body: 'Provider 是商店或餐廳（Anthropic、OpenAI、OpenCode Zen、本地服務）。Model 是餐點（某一顆大腦）。本地則是你家廚房：模型檔在自己電腦裡跑。',
          },
          body: [
            'OpenCode 常用 provider/model 這種全名，例如某供應商加上某型號。',
            '同一道餐，可能在不同商店賣，價格與速率不一樣。',
          ],
        },
        {
          type: 'reveal',
          title: '三種來源',
          cards: [
            { tag: '封閉權重', title: '商店後廚不公開配方', body: '例如許多 Claude、GPT 模型。通常強、更新快，但你看不到完整配方，也要把資料送出。' },
            { tag: '開放權重', title: '配方公開、仍可能很強', body: '如 DeepSeek、GLM、Kimi 等常見選擇。可經雲端 API 或自己部署。' },
            { tag: '本地', title: '在自己電腦煮', body: '資料較不容易出門。代價是你的電腦要夠力，品質與速度看硬體。' },
          ],
        },
        {
          type: 'choose',
          title: '「本地模型」表示？',
          prompt: '選最接近的意思。',
          options: [
            { id: 'a', label: '模型在你自己的機器上跑，資料較少送到別人的雲。', correct: true, feedback: '對。像在家煮飯。' },
            { id: 'b', label: '一定比較笨，所以不用考慮。', correct: false, feedback: '強弱看模型與硬體，不是「本地」兩個字。' },
            { id: 'c', label: '表示它不能寫程式。', correct: false, feedback: '很多本地模型也能寫程式。' },
          ],
        },
      ],
    },
    {
      id: '7-2',
      title: '免費、訂閱、API 與常見方案',
      goal: '認識付費方式，以及 Go / Zen、DeepSeek、GLM、Kimi；用比喻理解 ChatGPT OAuth。',
      steps: [
        {
          type: 'reveal',
          title: '三種付錢（或沒付錢）的路',
          cards: [
            { tag: '免費額度', title: '試吃', body: '適合摸索。可能突然沒了、排隊、或模型較弱。不要把正式作業賭在不穩定的試吃上。' },
            { tag: '訂閱', title: '月票', body: '像 OpenCode Go：固定月費，內含一籃子整理過的編碼模型，但仍有用量上限。要看條款。' },
            { tag: '儲值 / API', title: '按用量計費', body: '像 OpenCode Zen（先儲值再按量扣）或其他 Provider 的 API Key。用多少算多少，金鑰要保管好。' },
          ],
        },
        {
          type: 'text',
          title: '你會聽到的名字',
          body: [
            'OpenCode Zen（儲值按量）與 OpenCode Go（月費訂閱）都是官方整理的模型通道。先在主控台取得金鑰，再在 TUI 用 /connect 選對應項目，用 /models 挑選。',
            'DeepSeek、GLM、Kimi：常見且更新很快的編碼模型家族，可能出現在 Zen / Go 或其他 Provider。',
            '實際名單會變。選的時候看官方列表，不要把這頁當永久菜單。',
          ],
        },
        {
          type: 'metaphor',
          title: 'ChatGPT OAuth 用比喻說',
          body: [
            'OAuth 比較像「用你已有的遊樂園手環進另一扇門」，而不是再買一張新票。',
            '有些工具會讓你用 ChatGPT / Codex 的登入狀態來接模型。這很方便，但手環代表你的身份。',
          ],
          metaphor: {
            title: '不要把家人的手環借去不明遊樂場',
            body: '只在官方或你信任的軟體裡登入。不要把登入狀態貼到陌生網站、不要分享工作階段檔。方便不是允許冒險。',
          },
          note: '本課程不示範、也不鼓勵任何繞過條款或搬運別人帳號的做法。',
        },
      ],
    },
    {
      id: '7-3',
      title: '依任務選模型',
      goal: '按工作性質選大腦，而不是永遠用同一個「傳說中最強」。',
      steps: [
        {
          type: 'text',
          title: '不同路況，不同車',
          body: [
            '找檔、改文案、跑短指令：用較快較便宜的模型往往夠。',
            '設計架構、難除錯、跨很多檔：才值得請較強、較能推理的模型。',
            '審查可以用另一個模型，避免「同一顆腦一直點頭」。',
          ],
        },
        {
          type: 'choose',
          title: '配對看看',
          prompt: '「把按鈕文字改成繁中，並確認沒有漏網之魚」。你會？',
          options: [
            { id: 'a', label: '立刻動用最貴、最慢的模型，並關掉所有測試。', correct: false, feedback: '殺雞用牛刀，還可能更慢。' },
            { id: 'b', label: '用中等或較快的模型，加上搜尋與檢查清單。', correct: true, feedback: '對。任務單純時，流程比傳說更重要。' },
            { id: 'c', label: '不選模型，改用隨機產生器。', correct: false, feedback: '那不是寫程式助手。' },
          ],
        },
        {
          type: 'checklist',
          title: '選模型小抄',
          items: [
            { id: 'm1', text: '先看任務：搜尋、實作、規劃、審查？', hint: '角色也可以配不同模型。' },
            { id: 'm2', text: '再看預算與速率限制。', hint: '再強的車也會沒油。' },
            { id: 'm3', text: '最後才看社群最近的「排行榜」。', hint: '排行榜會過期，你的任務比較真實。' },
          ],
        },
      ],
    },
    {
      id: '7-4',
      title: '風險：隱私、金鑰、限流',
      goal: '知道資料會去哪、鑰匙不能曬在門口、太頻繁會被請去排隊。',
      steps: [
        {
          type: 'reveal',
          title: '三個常見風險',
          cards: [
            { tag: '隱私', title: '對話可能離開你的電腦', body: '雲端模型會看到你貼的程式與文字。不要貼真實身分證、密碼、未公開的學校名冊。' },
            { tag: '金鑰', title: 'API Key 像家門鑰匙', body: '不能提交到 GitHub、不能貼到聊天群。洩漏等於請人進你家冰箱。' },
            { tag: '限流', title: 'Rate limit', body: '請求太密或額度用完，會被暫停。這時該換策略，而不是狂按重試。' },
          ],
        },
        {
          type: 'choose',
          title: '金鑰掉到地上',
          prompt: '你不小心把 API Key 寫進專案並推上 GitHub。該怎麼想？',
          options: [
            { id: 'a', label: '刪掉那一行再推一次就永遠安全了。', correct: false, feedback: 'Git 歷史可能還在。應該作廢舊鑰匙、換新的，並把秘密移出倉庫。' },
            { id: 'b', label: '當作鑰匙已曝光：作廢、換新、改用環境變數或密鑰管理。', correct: true, feedback: '正確。曝光過的鑰匙不要再留戀。' },
            { id: 'c', label: '公開金鑰可以讓同學一起免費用，很棒。', correct: false, feedback: '那會讓帳單爆炸，也很危險。' },
          ],
        },
      ],
    },
    {
      id: '7-5',
      title: '接入概念步驟',
      goal: '能說出接上一個 Provider 的安全流程，不必死背某一版按鈕。',
      steps: [
        {
          type: 'flow',
          title: '概念：接上一顆新大腦',
          flow: [
            { n: 1, title: '選官方來源', body: '到你信任的供應商申請金鑰或訂閱。不要用來路不明的「免費中轉」。' },
            { n: 2, title: '在 OpenCode 連線', body: 'TUI 裡 /connect，選 Provider，依提示貼上金鑰或完成登入。' },
            { n: 3, title: '挑選模型', body: '/models 看清單。必要時在 opencode.json 寫預設 model。' },
            { n: 4, title: '小測驗', body: '先丟一個無害小任務。確認會回、會用工具、費用與隱私你能接受。' },
            { n: 5, title: '再接到角色', body: 'Plan 用較快模型、Build 用較強模型，是常見配法，不是唯一配法。' },
          ],
        },
        {
          type: 'checklist',
          title: '接入完成檢查',
          items: [
            { id: 'c1', text: '金鑰不在聊天紀錄截圖裡。', hint: '截圖也會洩漏。' },
            { id: 'c2', text: '你知道這顆模型會不會把資料送雲端。', hint: '本地與雲端要分清楚。' },
            { id: 'c3', text: '失敗時你知道是沒額度、沒權限，還是沒連上。', hint: '能分類錯誤，才修得快。' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Provider 比較像？',
      options: [
        { id: 'a', label: '供應大腦的商店或通道', correct: true, feedback: '對。' },
        { id: 'b', label: '某一行程式註解', correct: false, feedback: '不是註解。' },
        { id: 'c', label: '滑鼠品牌', correct: false, feedback: '跟滑鼠無關。' },
      ],
    },
    {
      id: 'q2',
      question: '關於 ChatGPT OAuth，較健康的態度是？',
      options: [
        { id: 'a', label: '只在信任的官方流程使用，不把登入狀態交給陌生工具', correct: true, feedback: '正確。方便不能壓過安全。' },
        { id: 'b', label: '把登入檔複製給全班，大家比較省錢', correct: false, feedback: '那是把身份借出去，不要這樣做。' },
        { id: 'c', label: 'OAuth 代表可以忽略所有使用條款', correct: false, feedback: '條款仍然在。' },
      ],
    },
    {
      id: 'q3',
      question: '限流（rate limit）出現時，較好的反應是？',
      options: [
        { id: 'a', label: '狂按重試直到燒掉額度', correct: false, feedback: '會更糟。' },
        { id: 'b', label: '停下來：換較小模型、減少並行、稍後再試或檢查方案', correct: true, feedback: '對。把油門放開，改策略。' },
        { id: 'c', label: '把金鑰貼到論壇請人幫忙看', correct: false, feedback: '那會再加一道金鑰風險。' },
      ],
    },
    {
      id: 'q4',
      question: '選模型時第一優先通常是？',
      options: [
        { id: 'a', label: '任務類型與驗收方式', correct: true, feedback: '對。路況決定交通工具。' },
        { id: 'b', label: '廣告說誰第一名', correct: false, feedback: '廣告會過期。' },
        { id: 'c', label: '名字比較長的比較強', correct: false, feedback: '名稱長度不是實力。' },
      ],
    },
  ],
}
