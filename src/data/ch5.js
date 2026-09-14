export default {
  id: 'ch5',
  number: 5,
  title: 'MCP 與 Skills',
  tagline: '外接工具插座，對上可重用的技能卡——一個給新手，一個給做法。',
  intro: 'MCP 讓助手接上外部工具。Skills 則是需要時才展開的說明書。這一章比較兩者，並認識瀏覽器、Playwright、DeepWiki，以及 Skills 搭配 Playwright CLI 何時比較輕盈。',
  sections: [
    {
      id: '5-1',
      title: 'MCP 與 Skills 的差異',
      goal: '能用一句話說明：MCP 是插座（外接手），Skills 是技能卡（可重用做法）；兩者常搭配。',
      steps: [
        {
          type: 'metaphor',
          title: '先分清楚兩個盒子',
          metaphor: {
            title: '插座 vs 技能卡',
            body: 'MCP 像牆上的插座：插上瀏覽器、資料庫、文件網站，助手就多了新的手。Skills 像遊戲技能卡：平常只看到卡名與短描述，真的要用才翻開完整說明，避免一開始就把書包塞滿。',
          },
          body: [
            'MCP 全名 Model Context Protocol。它讓外部程式用標準方式，把工具提供給 Agent——重點是「接上真正能做事的手」。',
            'Skills 通常是 SKILL.md。助手先看到短描述，需要時再載入整份步驟。適合把發版、除錯、作業格式變成可重用節奏。',
            '選錯盒子會很痛苦：沒有外部系統卻硬做 MCP，太重；有瀏覽器要操控卻只寫 Skill 空談，又沒有手。',
          ],
        },
        {
          type: 'reveal',
          title: '怎麼選？',
          body: ['點卡片。先問：我缺的是「手」，還是「穩定的做法」？'],
          cards: [
            {
              tag: 'MCP',
              title: '需要真正的外接手',
              body: '要操控瀏覽器、查即時文件、連內部服務。沒有插座，只靠聊天猜 HTML 或猜 API，常常不穩。記得：插座越強，越需要權限閘門。',
            },
            {
              tag: 'Skill',
              title: '需要穩定的做法',
              body: '發版流程、除錯步驟、你們班的作業格式。不必每次從頭發明。Skill 不自動給新手，它教「何時、如何」去做。',
            },
            {
              tag: '一起用',
              title: '插座 + 技能卡',
              body: 'Skill 可以教助手「何時、如何」去用某個 MCP 或 CLI。例如：先讀 Playwright 技能卡，再下短指令開頁點擊。兩者常搭配，不是二選一宗教。',
            },
          ],
        },
        {
          type: 'choose',
          title: '這該用哪一個？',
          prompt: '「每次發版都要照同一張清單打標籤、寫說明」。比較像？',
          options: [
            {
              id: 'a',
              label: 'Skill：把流程寫成可重用說明。',
              correct: true,
              feedback: '對。這是做法，不一定需要新插座。若發版還要呼叫外部系統，再額外接 MCP。',
            },
            {
              id: 'b',
              label: '一定要做一個 MCP 伺服器才算數。',
              correct: false,
              feedback: '殺雞不必用牛刀。沒有外部系統要接時，Skill 就夠；硬做 MCP 只會增加維護與上下文負擔。',
            },
            {
              id: 'c',
              label: '什麼都不用，模型會永遠記住你們班的發版儀式。',
              correct: false,
              feedback: '它不會永遠記住。換 Session、換模型就可能忘。寫下來才算數。',
            },
          ],
        },
      ],
    },
    {
      id: '5-2',
      title: 'Browser / Chrome DevTools MCP',
      goal: '知道為什麼要讓助手「看見」網頁，而不只是猜 HTML；並建立使用前的安全習慣。',
      steps: [
        {
          type: 'text',
          title: '網頁是活的',
          body: [
            '寫前端時，靜態程式碼和畫面上看到的不一樣。按鈕可能被 CSS 擋住，錯誤可能只出現在瀏覽器主控台，網路請求失敗也不一定寫在原始碼註解裡。',
            'Browser MCP 或 Chrome DevTools MCP，就是讓助手去開頁、點擊、看主控台、看網路請求。這像請同學走到教室後面，親眼看投影幕，而不是只聽你口述。',
            '它回傳的是工具看到的結構或訊息，仍可能和你眼睛看到的有落差——所以你還是最終裁判，尤其是視覺與互動細節。',
          ],
        },
        {
          type: 'flow',
          title: '概念：讓助手看畫面',
          body: ['這是概念流程；實際套件名稱與設定欄位請以官方文件為準。'],
          flow: [
            {
              n: 1,
              title: '在設定裡接上瀏覽器 MCP',
              body: '寫在 opencode.json 的 mcp 區塊。需要本機有對應程式，並確認權限不會讓它亂點危險按鈕。',
            },
            {
              n: 2,
              title: '請它打開你的頁面',
              body: '例如本機 http://localhost:5173。先說你要觀察什麼：錯誤、排版，還是某個按鈕點了沒反應。',
            },
            {
              n: 3,
              title: '請它操作並回報',
              body: '點按鈕、看主控台錯誤、截圖或讀取無障礙樹。要求它回報「看到什麼、做了什麼」，不要只說「好了」。',
            },
            {
              n: 4,
              title: '你仍要看一眼',
              body: '它看到的是工具回傳的結構。你的眼睛還是最終裁判；必要時再截圖丟回對話閉環。',
            },
          ],
        },
        {
          type: 'checklist',
          title: '使用瀏覽器工具前',
          body: ['插座很強力，先過安全門：'],
          items: [
            {
              id: 'b1',
              text: '不要讓它登入你的私人帳號練習。',
              hint: '教學用本機頁或公開示範頁就好。私人信箱、銀行、學校行政系統都不適合當練習場。',
            },
            {
              id: 'b2',
              text: '權限要能問你：它不該隨意亂點付款鈕。',
              hint: '插座很強力，所以要有閘門。危險動作保持 ask 或 deny。',
            },
            {
              id: 'b3',
              text: '先說你要觀察什麼：錯誤、排版、還是網路失敗。',
              hint: '目標越清楚，它越少亂逛，也越省 Context 與時間。',
            },
          ],
        },
      ],
    },
    {
      id: '5-3',
      title: 'Playwright 與 DeepWiki',
      goal: '認識自動操作瀏覽器的 Playwright，以及用來讀開源專案說明的 DeepWiki；並知道外接內容仍要核對。',
      steps: [
        {
          type: 'reveal',
          title: '兩個常見外掛型工具',
          body: ['點卡片。它們都是「外接腦／外接手」，不是魔法真相機器。'],
          cards: [
            {
              tag: '瀏覽器',
              title: 'Playwright MCP',
              body: '用無障礙快照等方式操作網頁，適合自動化測試與探索。不必每次都靠「看圖片」才能點擊；對重複操作很有幫助。',
            },
            {
              tag: '文件',
              title: 'DeepWiki',
              body: '把開源倉庫整理成較好讀的說明。助手可用它快速理解陌生專案，而不是把整個 GitHub 貼進對話把書包撐爆。',
            },
            {
              tag: '提醒',
              title: '它們都是外接腦',
              body: '文件網站與瀏覽器回傳的內容，仍可能過時或誤解。重要結論要回到原始碼或官方文件核對，尤其是安全與破壞性操作。',
            },
          ],
        },
        {
          type: 'choose',
          title: '什麼時候找 DeepWiki？',
          prompt: '你要理解一個從沒看過的開源工具怎麼設定。',
          options: [
            {
              id: 'a',
              label: '先把整個倉庫所有檔案貼進聊天。',
              correct: false,
              feedback: '書包會爆，而且很慢。先看地圖，再只深入相關檔案。',
            },
            {
              id: 'b',
              label: '用 DeepWiki 或官方文件做地圖，再只深入相關檔案。',
              correct: true,
              feedback: '對。先看地圖，再進森林。地圖不對時，再回到原始 README 與原始碼核對。',
            },
            {
              id: 'c',
              label: '完全不要看文件，只靠模型記憶。',
              correct: false,
              feedback: '模型記憶會過期，API 也會改。文件與原始碼才是較新的地圖。',
            },
          ],
        },
        {
          type: 'text',
          title: 'Playwright 適合什麼？',
          body: [
            '適合：打開頁面、填表、點擊、確認某段文字有沒有出現。也適合當「會操作瀏覽器的測試同學」。',
            '若你要長時間探索一個複雜後台，MCP 這種保持狀態的工具很有用。',
            '若你更在意上下文不要被工具說明塞滿——例如正在改很大的前端、Context 已經很擠——後面的 CLI + Skill 可能更輕。沒有絕對赢家，看路況。',
          ],
        },
      ],
    },
    {
      id: '5-4',
      title: 'Skills + Playwright CLI',
      goal: '理解為什麼有人改用指令列版 Playwright，並用 Skill 教助手怎麼用，好節省 Context。',
      steps: [
        {
          type: 'text',
          title: 'MCP 很強，但說明書也很大',
          body: [
            'MCP 會把一堆工具名稱與參數塞進模型眼前。對寫程式助手來說，這可能太胖：留給真正程式碼與錯誤訊息的空間變少。',
            'Playwright CLI 把動作變成短指令：打開、快照、點擊、填寫。再裝一份 Skill，助手就知道有哪些指令、何時該用。',
            '取捨是：MCP 較適合持續狀態、反覆推理頁面結構；CLI + Skill 較適合「邊寫程式邊點一下頁面確認」。以官方文件為準，生態會演進。',
          ],
        },
        {
          type: 'flow',
          title: '概念步驟',
          body: ['下列安裝指令為常見寫法示例；請核對 Playwright 與 OpenCode 最新說明。'],
          flow: [
            {
              n: 1,
              title: '安裝 Playwright CLI',
              body: '依 Playwright 官方文件安裝，例如 npm i -g @playwright/cli@latest。這是本機的瀏覽器遙控器，不是另一個聊天機器人。',
            },
            {
              n: 2,
              title: '安裝 Skills',
              body: '例如 playwright-cli install --skills。技能常落到 .claude/skills 或 .agents/skills；OpenCode 也能讀這些相容路徑，也可放到 .opencode/skills。',
            },
            {
              n: 3,
              title: '讓助手先載入技能卡',
              body: '它看到短描述，真正操作前再用 skill 工具讀完整 SKILL.md。這樣平常不佔空間，要用才展開。',
            },
            {
              n: 4,
              title: '用短指令做事',
              body: '開頁、snapshot、click。上下文比較輕，留給真正的程式碼與錯誤訊息。',
            },
          ],
          note: 'MCP 仍適合需要持續狀態、反覆推理頁面結構的探索。CLI + Skill 較適合「邊寫程式邊點一下頁面」。官方文件可能變動，請核對 Playwright 與 OpenCode 最新說明。',
        },
        {
          type: 'choose',
          title: '你會怎麼配？',
          prompt: '你正在改一個很大的前端專案，Context 已經很擠，只是想確認按鈕文字。',
          options: [
            {
              id: 'a',
              label: '優先考慮較精簡的 CLI + Skill。',
              correct: true,
              feedback: '對。工具說明越胖，留給程式碼的空間越少。小確認用短指令通常更划算。',
            },
            {
              id: 'b',
              label: '一定要把所有瀏覽器 MCP 同時打開。',
              correct: false,
              feedback: '插座不是插越多越好。用不到的工具說明也會佔 Context。',
            },
            {
              id: 'c',
              label: '把整頁 HTML 貼進對話就好。',
              correct: false,
              feedback: '又肥又容易過時；活頁面可能和你貼的靜態 HTML 不一致。',
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'MCP 比較像？',
      options: [
        {
          id: 'a',
          label: '牆上的插座，接上外部工具',
          correct: true,
          feedback: '正確。接上之後助手多了新手；也記得加閘門。',
        },
        {
          id: 'b',
          label: '一本永遠自動更新的小說',
          correct: false,
          feedback: '那不是 MCP。文件仍可能過時，要核對。',
        },
        {
          id: 'c',
          label: '只能用來畫圖的濾鏡',
          correct: false,
          feedback: 'MCP 可以接很多種工具，不限畫圖。',
        },
      ],
    },
    {
      id: 'q2',
      question: 'Skills 為什麼常常「需要時才載入」？',
      options: [
        {
          id: 'a',
          label: '為了不要一開始就把所有說明塞進 Context',
          correct: true,
          feedback: '對。先看卡名，再用完整技能，書包才裝得下真正的任務。',
        },
        {
          id: 'b',
          label: '因為 Markdown 不能一次讀完',
          correct: false,
          feedback: '可以讀完，只是不划算：用不完的說明會擠掉重要內容。',
        },
        {
          id: 'c',
          label: '因為技能卡必須保密不能給模型看',
          correct: false,
          feedback: '它就是寫給模型看的，只是要挑時機載入。',
        },
      ],
    },
    {
      id: 'q3',
      question: 'Playwright CLI + Skill 相對 MCP 的常見優點是？',
      options: [
        {
          id: 'a',
          label: '指令較短，較不佔上下文',
          correct: true,
          feedback: '對。適合已經很擠的寫程式任務；MCP 則較適合長時間探索頁面狀態。',
        },
        {
          id: 'b',
          label: '完全不需要瀏覽器',
          correct: false,
          feedback: '它還是會操作瀏覽器，只是呼叫方式變短指令。',
        },
        {
          id: 'c',
          label: '保證零錯誤',
          correct: false,
          feedback: '沒有這種保證。你仍要看結果與截圖。',
        },
      ],
    },
  ],
}
