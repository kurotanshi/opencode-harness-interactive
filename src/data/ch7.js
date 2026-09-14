export default {
  id: 'ch7',
  number: 7,
  title: '模型與方案',
  tagline: '選大腦像選交通工具：看路況與油量，不看廣告標語。',
  intro: '這一章把 Provider、Model、本地模型講清楚，比較免費、訂閱與 API，認識 Go / Zen 與常見開放權重模型，並用比喻談 ChatGPT OAuth。最後練習依任務選模型、看風險、走接入步驟。',
  sections: [
    {
      id: '7-1',
      title: 'Provider / Model 三層',
      goal: '分清商店（Provider）、餐點（Model）與自家廚房（本地），知道同一道餐可能在不同商店賣。',
      steps: [
        {
          type: 'metaphor',
          title: '三層比較像這樣',
          metaphor: {
            title: '商店、餐點、自家廚房',
            body: 'Provider 是商店或餐廳（Anthropic、OpenAI、OpenCode Zen、本地服務）。Model 是餐點（某一顆大腦）。本地則是你家廚房：模型檔在自己電腦裡跑，資料較少出門，但要自己開火顧爐。',
          },
          body: [
            'OpenCode 常用 provider/model 這種全名，例如某供應商加上某型號。選模型時，你其實同時選了「向誰買／向誰借腦」。',
            '同一道餐，可能在不同商店賣，價格、速率、隱私條款不一樣。不要只看型號名字，也要看它從哪條通道進來。',
            '本地不是自動比較弱或比較強：它比較像「資料較容易留在家」，成敗仍看模型品質與你的硬體。',
          ],
        },
        {
          type: 'reveal',
          title: '三種來源',
          body: ['點卡片。真實名單會變，這裡教的是分類方式。'],
          cards: [
            {
              tag: '封閉權重',
              title: '商店後廚不公開配方',
              body: '例如許多 Claude、GPT 模型。通常強、更新快，但你看不到完整配方，也常要把資料送出到雲端。適合要最強推理、且能接受雲端條款的任務。',
            },
            {
              tag: '開放權重',
              title: '配方公開、仍可能很強',
              body: '如 DeepSeek、GLM、Kimi 等常見選擇。可經雲端 API 或自己部署。更新快，實際可用性要以你當下能連到的 Provider 列表為準。',
            },
            {
              tag: '本地',
              title: '在自己電腦煮',
              body: '資料較不容易出門。代價是你的電腦要夠力，品質與速度看硬體與量化設定。適合敏感練習或離線場景，但仍要小心本機其他軟體是否外傳。',
            },
          ],
        },
        {
          type: 'choose',
          title: '「本地模型」表示？',
          prompt: '選最接近的意思。',
          options: [
            {
              id: 'a',
              label: '模型在你自己的機器上跑，資料較少送到別人的雲。',
              correct: true,
              feedback: '對。像在家煮飯。強弱仍看模型與硬體，不是「本地」兩個字自動決定。',
            },
            {
              id: 'b',
              label: '一定比較笨，所以不用考慮。',
              correct: false,
              feedback: '強弱看模型與硬體，不是「本地」兩個字。有些本地模型也很能寫程式。',
            },
            {
              id: 'c',
              label: '表示它不能寫程式。',
              correct: false,
              feedback: '很多本地模型也能寫程式。能不能寫，看模型能力與你的工具設定。',
            },
          ],
        },
      ],
    },
    {
      id: '7-2',
      title: '免費、訂閱、API 與常見方案',
      goal: '認識付費方式，以及 Go / Zen、DeepSeek、GLM、Kimi；用比喻理解 ChatGPT OAuth 的方便與風險。',
      steps: [
        {
          type: 'reveal',
          title: '三種付錢（或沒付錢）的路',
          body: ['點卡片。選路之前，先想：你是試吃、通勤月票，還是按量加油？'],
          cards: [
            {
              tag: '免費額度',
              title: '試吃',
              body: '適合摸索介面與流程。可能突然沒了、排隊、或模型較弱。不要把正式作業或截止日賭在不穩定的試吃上。',
            },
            {
              tag: '訂閱',
              title: '月票',
              body: '像 OpenCode Go：固定月費，內含一籃子整理過的編碼模型，但仍有用量上限。要看條款與當月還剩多少「里程」。',
            },
            {
              tag: '儲值 / API',
              title: '按用量計費',
              body: '像 OpenCode Zen（先儲值再按量扣）或其他 Provider 的 API Key。用多少算多少，金鑰要保管好，也要學會看帳單與限流。',
            },
          ],
        },
        {
          type: 'text',
          title: '你會聽到的名字',
          body: [
            'OpenCode Zen（儲值按量）與 OpenCode Go（月費訂閱）都是官方整理的模型通道。常見流程：先在主控台取得金鑰或完成訂閱，再在 TUI 用 /connect 選對應項目，用 /models 挑選。',
            'DeepSeek、GLM、Kimi：常見且更新很快的編碼模型家族，可能出現在 Zen / Go 或其他 Provider。名字會變、列表會變。',
            '實際名單以官方列表為準，不要把這頁當永久菜單。選的時候看「能不能連、條款能不能接受、預算夠不夠」，而不是只看社群昨晚的排行榜。',
          ],
        },
        {
          type: 'metaphor',
          title: 'ChatGPT OAuth 用比喻說',
          body: [
            'OAuth 比較像「用你已有的遊樂園手環進另一扇門」，而不是再買一張新票。有些工具會讓你用 ChatGPT / Codex 的登入狀態來接模型。',
            '這很方便，但手環代表你的身份與權益。借出手環，等於讓別人有機會以你的名義行動。',
            '本課程不示範、也不鼓勵任何繞過條款或搬運別人帳號的做法。方便不是允許冒險。',
          ],
          metaphor: {
            title: '不要把家人的手環借去不明遊樂場',
            body: '只在官方或你信任的軟體裡登入。不要把登入狀態貼到陌生網站、不要分享工作階段檔、不要把「登入成功截圖」傳給網友。手環掉了要當帳號風險處理，而不是當作好笑的迷因。',
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
            '找檔、改文案、跑短指令：用較快較便宜的模型往往夠。殺雞不必用牛刀，還比較省額度與等待。',
            '設計架構、難除錯、跨很多檔：才值得請較強、較能推理的模型。這時省小錢，可能花更多時間在來回重試。',
            '審查可以用另一個模型，避免「同一顆腦一直點頭」。角色（Plan/Build/Reviewer）也可以配不同模型——這是 Harness，不是迷信單一引擎。',
          ],
        },
        {
          type: 'choose',
          title: '配對看看',
          prompt: '「把按鈕文字改成繁中，並確認沒有漏網之魚」。你會？',
          options: [
            {
              id: 'a',
              label: '立刻動用最貴、最慢的模型，並關掉所有測試。',
              correct: false,
              feedback: '殺雞用牛刀，還可能更慢；關掉測試更是拿掉驗收。流程與檢查清單通常比傳說重要。',
            },
            {
              id: 'b',
              label: '用中等或較快的模型，加上搜尋與檢查清單。',
              correct: true,
              feedback: '對。任務單純時，搜尋＋清單＋抽查，往往比「最貴大腦」更穩。',
            },
            {
              id: 'c',
              label: '不選模型，改用隨機產生器。',
              correct: false,
              feedback: '那不是寫程式助手。你仍需要能用工具、能讀專案的模型通道。',
            },
          ],
        },
        {
          type: 'checklist',
          title: '選模型小抄',
          body: ['下次要換模型前，按這個順序想：'],
          items: [
            {
              id: 'm1',
              text: '先看任務：搜尋、實作、規劃、審查？',
              hint: '角色也可以配不同模型。任務類型決定你需要的能力。',
            },
            {
              id: 'm2',
              text: '再看預算與速率限制。',
              hint: '再強的車也會沒油。限流時換小車或減少並行，比狂按有用。',
            },
            {
              id: 'm3',
              text: '最後才看社群最近的「排行榜」。',
              hint: '排行榜會過期，你的任務與驗收比較真實。',
            },
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
          body: ['點卡片。這三個坑，比「模型不夠強」更常讓人受傷。'],
          cards: [
            {
              tag: '隱私',
              title: '對話可能離開你的電腦',
              body: '雲端模型會看到你貼的程式與文字。不要貼真實身分證、密碼、未公開的學校名冊、同學個資。練習用假資料，正式資料要先問能不能出園。',
            },
            {
              tag: '金鑰',
              title: 'API Key 像家門鑰匙',
              body: '不能提交到 GitHub、不能貼到聊天群、截圖也要小心。洩漏等於請人進你家冰箱；發現外洩要作廢舊鑰匙並換新。',
            },
            {
              tag: '限流',
              title: 'Rate limit',
              body: '請求太密或額度用完，會被暫停。這時該換策略（較小模型、減少並行、稍後再試、檢查方案），而不是狂按重試把情況弄得更糟。',
            },
          ],
        },
        {
          type: 'choose',
          title: '金鑰掉到地上',
          prompt: '你不小心把 API Key 寫進專案並推上 GitHub。該怎麼想？',
          options: [
            {
              id: 'a',
              label: '刪掉那一行再推一次就永遠安全了。',
              correct: false,
              feedback: 'Git 歷史可能還在，別人可能已爬到。應該作廢舊鑰匙、換新的，並把秘密移出倉庫。',
            },
            {
              id: 'b',
              label: '當作鑰匙已曝光：作廢、換新、改用環境變數或密鑰管理。',
              correct: true,
              feedback: '正確。曝光過的鑰匙不要再留戀；之後用環境變數或密鑰工具，避免再寫進程式碼。',
            },
            {
              id: 'c',
              label: '公開金鑰可以讓同學一起免費用，很棒。',
              correct: false,
              feedback: '那會讓帳單爆炸，也很危險。共用身份不是分享，是把家門打開。',
            },
          ],
        },
        {
          type: 'text',
          title: '小習慣就能少踩很多雷',
          body: [
            '貼程式前先掃一眼：有沒有 .env、token、個人信箱？有就先拿掉或改成假資料。',
            '限流出現時先停：看是額度、速率，還是連線問題。分得清，才修得快。',
            '免費與分享帳號的「好康」常常附帶條款風險——本課只教正規 /connect 與保管金鑰。',
          ],
        },
      ],
    },
    {
      id: '7-5',
      title: '接入概念步驟',
      goal: '能說出接上一個 Provider 的安全流程，不必死背某一版按鈕文字。',
      steps: [
        {
          type: 'flow',
          title: '概念：接上一顆新大腦',
          body: ['畫面可能改版；記住順序與安全原則即可。'],
          flow: [
            {
              n: 1,
              title: '選官方來源',
              body: '到你信任的供應商申請金鑰或訂閱。不要用來路不明的「免費中轉」——那常是金鑰與隱私的黑洞。',
            },
            {
              n: 2,
              title: '在 OpenCode 連線',
              body: 'TUI 裡 /connect，選 Provider，依提示貼上金鑰或完成登入。完成後不要把金鑰再貼到聊天或截圖分享。',
            },
            {
              n: 3,
              title: '挑選模型',
              body: '/models 看清單。必要時在 opencode.json 寫預設 model，或依 Agent 分別指定。',
            },
            {
              n: 4,
              title: '小測驗',
              body: '先丟一個無害小任務。確認會回、會用工具、費用與隱私你能接受，再接到真正專案。',
            },
            {
              n: 5,
              title: '再接到角色',
              body: 'Plan 用較快模型、Build 用較強模型，是常見配法，不是唯一配法。以你的任務與預算調整。',
            },
          ],
        },
        {
          type: 'checklist',
          title: '接入完成檢查',
          body: ['連上之後，勾完再開始大任務：'],
          items: [
            {
              id: 'c1',
              text: '金鑰不在聊天紀錄截圖裡。',
              hint: '截圖也會洩漏。貼過的地方都要當可能曝光。',
            },
            {
              id: 'c2',
              text: '你知道這顆模型會不會把資料送雲端。',
              hint: '本地與雲端要分清楚，敏感資料才放對通道。',
            },
            {
              id: 'c3',
              text: '失敗時你知道是沒額度、沒權限，還是沒連上。',
              hint: '能分類錯誤，才修得快；不要一律重裝或一律換最貴模型。',
            },
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
        {
          id: 'a',
          label: '供應大腦的商店或通道',
          correct: true,
          feedback: '對。Model 是餐點，Provider 是商店／通道。',
        },
        {
          id: 'b',
          label: '某一行程式註解',
          correct: false,
          feedback: '不是註解。它是你向誰借腦的那一層。',
        },
        {
          id: 'c',
          label: '滑鼠品牌',
          correct: false,
          feedback: '跟滑鼠無關。',
        },
      ],
    },
    {
      id: 'q2',
      question: '關於 ChatGPT OAuth，較健康的態度是？',
      options: [
        {
          id: 'a',
          label: '只在信任的官方流程使用，不把登入狀態交給陌生工具',
          correct: true,
          feedback: '正確。方便不能壓過安全；手環代表身份。',
        },
        {
          id: 'b',
          label: '把登入檔複製給全班，大家比較省錢',
          correct: false,
          feedback: '那是把身份借出去，不要這樣做；也常違反條款。',
        },
        {
          id: 'c',
          label: 'OAuth 代表可以忽略所有使用條款',
          correct: false,
          feedback: '條款仍然在。OAuth 只是登入方式，不是免責金牌。',
        },
      ],
    },
    {
      id: 'q3',
      question: '限流（rate limit）出現時，較好的反應是？',
      options: [
        {
          id: 'a',
          label: '狂按重試直到燒掉額度',
          correct: false,
          feedback: '會更糟，也可能更久才能恢復。',
        },
        {
          id: 'b',
          label: '停下來：換較小模型、減少並行、稍後再試或檢查方案',
          correct: true,
          feedback: '對。把油門放開，改策略，再上路。',
        },
        {
          id: 'c',
          label: '把金鑰貼到論壇請人幫忙看',
          correct: false,
          feedback: '那會再加一道金鑰風險，問題通常也不需要曝光金鑰才能診斷。',
        },
      ],
    },
    {
      id: 'q4',
      question: '選模型時第一優先通常是？',
      options: [
        {
          id: 'a',
          label: '任務類型與驗收方式',
          correct: true,
          feedback: '對。路況決定交通工具；再來才是預算與排行榜。',
        },
        {
          id: 'b',
          label: '廣告說誰第一名',
          correct: false,
          feedback: '廣告會過期，也不一定符合你的任務。',
        },
        {
          id: 'c',
          label: '名字比較長的比較強',
          correct: false,
          feedback: '名稱長度不是實力。',
        },
      ],
    },
  ],
}
