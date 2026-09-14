export default {
  id: 'ch6',
  number: 6,
  title: 'opencode.json',
  tagline: '駕駛艙的配線圖：權限、指令、插件。',
  intro: 'opencode.json 是 OpenCode 的設定中樞。這一章看結構、主 Agent 與 Subagent 的權限差、斜線指令與快捷鍵，以及 OpenPets、Telegram 這類插件概念。',
  sections: [
    {
      id: '6-1',
      title: '結構',
      goal: '認得設定檔裡常見的幾個大櫃子。',
      steps: [
        {
          type: 'text',
          title: '一份 JSON，很多抽屜',
          body: [
            'opencode.json（或 opencode.jsonc）告訴 OpenCode：用誰的大腦、有哪些角色、什麼能做、接哪些 MCP、裝哪些插件。',
            '全域設定在使用者設定資料夾，專案設定在專案裡。專案可以覆蓋你的個人預設。',
            '常見還會看到 $schema，讓編輯器幫你檢查寫錯的欄位。',
          ],
        },
        {
          type: 'reveal',
          title: '打開幾個抽屜',
          cards: [
            { tag: 'model / provider', title: '大腦從哪來', body: '指定預設模型，或自訂供應商。格式常是 provider/model。' },
            { tag: 'agent', title: '角色', body: 'Build、Plan、自訂審查員。可寫 prompt、model、permission。' },
            { tag: 'permission', title: '閘門', body: 'allow / ask / deny。也可針對某類指令細調。' },
            { tag: 'mcp / plugin', title: '外接', body: 'MCP 伺服器與執行時期插件。讓駕駛艙長出新按鈕。' },
          ],
        },
        {
          type: 'choose',
          title: '專案設定的意義',
          prompt: '為什麼團隊常把一份 opencode.json 放進專案？',
          options: [
            { id: 'a', label: '讓大家的權限與工具盡量一致。', correct: true, feedback: '對。同一間教室，按鈕位置不要每人一套。' },
            { id: 'b', label: '為了把 API 金鑰公開給全世界。', correct: false, feedback: '千萬不要。金鑰不該進 Git。' },
            { id: 'c', label: '沒有意義，JSON 只是裝飾。', correct: false, feedback: '它會真的改變助手能做的事。' },
          ],
        },
      ],
    },
    {
      id: '6-2',
      title: 'Primary vs Subagent 權限',
      goal: '知道隊長和隊友不該拿同一串鑰匙。',
      steps: [
        {
          type: 'text',
          title: '權限三態',
          body: [
            'allow：直接做。ask：先問你。deny：這扇門關上。',
            '主 Agent（primary）常需要較完整的工具，才能真正幫你完工。',
            'Subagent 則應「剛好夠用」。探索者少改檔，審查者不能改檔。',
          ],
        },
        {
          type: 'reveal',
          title: '兩種角色，兩串鑰匙',
          cards: [
            { tag: 'Primary', title: '跟你對話的人', body: 'Build 預設工具較開；Plan 對改檔與 bash 較常 ask。你用 Tab 切換。' },
            { tag: 'Subagent', title: '被派出的人', body: '可用 permission.task 控制隊長能派誰。有些內部幫手可以藏起來不出現在 @ 選單。' },
            { tag: '細調', title: '指令也可以分開', body: '例如允許 git status，但 git push 要 ask。最後一條匹配規則會贏。' },
          ],
        },
        {
          type: 'checklist',
          title: '配鑰匙練習',
          items: [
            { id: 'k1', text: '讀檔、搜尋：探索者可以較寬鬆。', hint: '眼睛可以睜大。' },
            { id: 'k2', text: '改檔、跑任意 bash：預設先 ask 或只給主 Build。', hint: '手和火要謹慎。' },
            { id: 'k3', text: '審查者 deny edit。', hint: '裁判不進場踢球。' },
          ],
        },
      ],
    },
    {
      id: '6-3',
      title: '斜線指令、快捷鍵與 Command',
      goal: '會找指令選單，也知道可以自訂專案指令。',
      steps: [
        {
          type: 'text',
          title: '斜線是法術書',
          body: [
            '在對話裡輸入 / 會打開指令。例如 /init、/undo、/redo、/models、/connect、/share、/help。',
            '快捷鍵多半寫在 tui.json（或舊設定裡的 keybinds）。例如切換 Agent、打開命令面板。',
            '自訂 Command 通常是 Markdown，放在 .opencode/commands/ 或 ~/.config/opencode/commands/。檔名會變成 /指令。',
          ],
        },
        {
          type: 'flow',
          title: '做一張「驗收」指令卡',
          flow: [
            { n: 1, title: '新建 commands/check.md', body: '寫清楚：跑哪些測試、看哪些輸出。' },
            { n: 2, title: '必要時指定 agent', body: '例如用 Plan 只檢查不改檔，或用 Build 修復。' },
            { n: 3, title: '在 TUI 輸入 /check', body: '團隊就不必每次重打一長串咒語。' },
            { n: 4, title: '不要蓋掉內建名字', body: '如果你也叫 /init，可能覆蓋內建行為。' },
          ],
        },
        {
          type: 'choose',
          title: '快捷鍵改了之後',
          prompt: '你把切換 Agent 的按鍵改成自己喜歡的。這份設定比較像？',
          options: [
            { id: 'a', label: '個人駕駛艙習慣，不一定要強迫全班一樣。', correct: true, feedback: '對。專案規則要共用，手指肌肉記憶可以個人化。' },
            { id: 'b', label: '一定要寫進 AGENTS.md，否則模型不會思考。', correct: false, feedback: '快捷鍵是給你按的，不是給模型讀的主要法律。' },
            { id: 'c', label: '改快捷鍵會自動把程式改正確。', correct: false, feedback: '那是兩件事。' },
          ],
        },
      ],
    },
    {
      id: '6-4',
      title: 'Plugin：OpenPets 與 Telegram',
      goal: '用兩個例子理解插件：一個陪你工作，一個把通知送到別的房間。',
      steps: [
        {
          type: 'text',
          title: '插件是執行時期的擴充',
          body: [
            'Plugin 掛在 OpenCode 執行時，可以聽事件、加指令、接 MCP。',
            '它不像 Skill 只是說明書，而更像加裝零件。',
            '裝插件前要看來源是否可信，權限給了什麼。',
          ],
        },
        {
          type: 'reveal',
          title: '兩個概念型例子',
          cards: [
            { tag: 'OpenPets', title: '桌面寵物', body: '可在你工作時做出思考、編輯、成功、失敗的反應。重點是：不該把程式碼或秘密唸出來給氣泡。' },
            { tag: 'Telegram', title: '把訊息送到手機', body: '任務完成或助手提問時通知你。適合你人不在電腦前。要有白名單，避免陌生人亂下指令。' },
            { tag: '共同點', title: '都是外接零件', body: '它們不取代 AGENTS.md。沒有規則與權限，寵物再可愛也救不了亂改檔。' },
          ],
        },
        {
          type: 'checklist',
          title: '裝插件前的安全習慣',
          items: [
            { id: 'pl1', text: '只裝你看得懂來源的插件。', hint: '來路不明的零件，可能偷東西。' },
            { id: 'pl2', text: '通知類插件要限制誰能說話。', hint: '聊天機器人若誰都能下指令，等於把方向盤交給路人。' },
            { id: 'pl3', text: '不要讓插件顯示金鑰、路徑裡的秘密。', hint: '氣泡和聊天室都不是保險箱。' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'opencode.json 主要在管？',
      options: [
        { id: 'a', label: '模型、角色、權限、MCP 與插件等駕駛艙設定', correct: true, feedback: '正確。' },
        { id: 'b', label: '只負責網頁顏色', correct: false, feedback: '它比顏色重要得多。' },
        { id: 'c', label: '學校的午餐菜單', correct: false, feedback: '那是另一個 JSON 了。' },
      ],
    },
    {
      id: 'q2',
      question: 'Subagent 的權限應該？',
      options: [
        { id: 'a', label: '跟主 Agent 完全一樣，比較公平', correct: false, feedback: '公平不是重點，職責才是。' },
        { id: 'b', label: '剛好夠完成它的任務', correct: true, feedback: '對。最小必要鑰匙。' },
        { id: 'c', label: '全部 deny，讓它只靠超能力', correct: false, feedback: '沒有工具就無法做事。' },
      ],
    },
    {
      id: 'q3',
      question: 'Telegram 類通知插件最該注意？',
      options: [
        { id: 'a', label: '誰可以對機器人下指令，以及不要洩漏秘密', correct: true, feedback: '正確。白名單與隱私。' },
        { id: 'b', label: '貼圖夠不夠可愛', correct: false, feedback: '可愛不能當權限系統。' },
        { id: 'c', label: '一定要讓全世界都能呼叫它', correct: false, feedback: '那很危險。' },
      ],
    },
  ],
}
