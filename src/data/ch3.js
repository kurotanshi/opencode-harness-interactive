export default {
  id: 'ch3',
  number: 3,
  title: '操作與 Claude Code 切換',
  tagline: '同一個專案，換駕駛艙也不該換腦——規則與驗收要跟得上。',
  intro: '這一章練習日常操作：Agent、模型、工作階段、檔案與圖片、Context。接著處理共用規則與工具專屬設定，最後做出「下一個 Agent 接得住」的流程，避免規則互相打架。',
  sections: [
    {
      id: '3-1',
      title: 'Agent、模型、工作階段與 Context',
      goal: '分清角色、大腦、筆記本，理解 @ 與圖片怎麼用，以及上下文為什麼會塞滿、該怎麼瘦身。',
      steps: [
        {
          type: 'reveal',
          title: '三個常常被混在一起的詞',
          body: [
            '日常聊天時，大家常把 Agent、模型、Session 混著說。先分開，後面選模型、切角色、開新對話才不會轉錯旋鈕。',
          ],
          cards: [
            {
              tag: '角色',
              title: 'Agent',
              body: '它用什麼態度與權限做事。例如 Plan 小心規劃、Build 動手實作、審查員只看不改。同一角色可以換不同大腦；換角色不一定要換模型。',
            },
            {
              tag: '大腦',
              title: '模型 Model',
              body: '實際思考的引擎（哪一家、哪一型）。同一角色可以換不同大腦：例如審查用另一顆模型，減少「自己幫自己說話」。第七章會細講怎麼選。',
            },
            {
              tag: '筆記本',
              title: '工作階段 Session',
              body: '這次對話的記憶本，包含來往訊息與工具結果的脈絡。換 Session 幾乎像換一本新筆記：乾淨但健忘。長任務請接續；被污染時再開新的並把結論寫進檔案。',
            },
          ],
        },
        {
          type: 'text',
          title: '檔案、圖片與 @',
          body: [
            '跟助手說話時，可以用 @ 把檔案拉進對話。像把作業攤在桌上，而不是只說「就是那份啦」。路徑清楚，它比較不會找錯檔。',
            '圖片也能丟進去：截圖、設計稿、錯誤畫面。這叫多模態：它不只看文字。修 UI、對錯誤訊息時特別有用。',
            '但不是丟越多越好。桌子太亂，重點會被雜物埋住。先說目標，再只 @ 真正相關的檔；大範圍搜尋可以讓它自己用工具找，不必整包貼上。',
          ],
        },
        {
          type: 'metaphor',
          title: 'Context 是書包容量',
          body: [
            'Context（上下文）是這一次模型能同時看到的內容：規則、對話、你 @ 的檔案、工具回傳的結果。',
            '書包有容量（常稱 context window）。塞爆了，它會漏東西，或開始摘要壓縮——摘要可能漏掉你最在意的那條禁令。',
            '所以「給它看全世界」常常反而變笨。精準比龐大更有用：需要哪一頁就帶哪一頁。',
          ],
          metaphor: {
            title: '不要把整間教室塞進書包',
            body: '需要哪一頁就帶哪一頁。對話太長時，可開新 Session，或讓系統做摘要，但你要檢查摘要有沒有漏關鍵規則（例如「不准覆蓋原檔」）。書包輕、重點在，騎車才穩。',
          },
          note: '專有名詞：Context window 就是書包大小，不同模型不一樣。',
        },
        {
          type: 'choose',
          title: '哪一個最會浪費 Context？',
          prompt: '請選出最容易把書包塞爆、卻不一定有幫助的做法。',
          options: [
            {
              id: 'a',
              label: '把整個專案所有檔案一次貼進對話。',
              correct: true,
              feedback: '對。應該讓它自己搜尋，或只 @ 真正相關的檔。整包貼上又肥又容易把關鍵規則擠掉。',
            },
            {
              id: 'b',
              label: '只 @ 出錯的那個元件檔。',
              correct: false,
              feedback: '這比較精準，書包較輕，也比較容易對症下藥。',
            },
            {
              id: 'c',
              label: '先用一句話說明目標，再讓它自己找檔。',
              correct: false,
              feedback: '這是好習慣：目標清楚，再讓眼睛（搜尋工具）去找，不必你先搬整間教室。',
            },
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
            '別人用 Claude Code 寫了一半，你改用 OpenCode，這很常見。先別急著「統一風格」或重寫目錄。',
            '先讀 CLAUDE.md / AGENTS.md、套件指令、測試怎麼跑、有沒有禁碰目錄。能跑起來、測得過，再談改善。',
            '能共用的放 Markdown 規則（專案事實與品質標準）；只有這個工具才懂的，放它自己的設定檔（例如 opencode.json、快捷鍵）。這樣換駕駛艙時，大腦（專案知識）還在。',
          ],
        },
        {
          type: 'reveal',
          title: '什麼該共用？什麼該分開？',
          body: ['點卡片。分清楚「專案法律」與「駕駛艙按鈕」，交接會輕鬆很多。'],
          cards: [
            {
              tag: '共用',
              title: '專案事實',
              body: '如何啟動、如何測試、資料夾意義、千萬不要碰的目錄、環境變數名稱（不要寫入真實密鑰）。這些換駕駛艙也該一樣，適合放 AGENTS.md / README。',
            },
            {
              tag: '共用',
              title: '品質標準',
              body: '例如「改完要跑測試」「不要提交秘密金鑰」「PR 要有再現步驟」。這是團隊的價值，不是某工具的私房菜。',
            },
            {
              tag: '專屬',
              title: '快捷鍵與插件',
              body: 'OpenCode 的 opencode.json、斜線指令、MCP 伺服器名稱、Tab 切換 Plan/Build，是這個駕駛艙的按鈕配置。別的工具可能沒有同一套按鈕，不必寫成全人類都要遵守的法律。',
            },
          ],
        },
        {
          type: 'choose',
          title: '這份設定該放哪？',
          prompt: '「按 Tab 在 Plan / Build 間切換」這種事，屬於？',
          options: [
            {
              id: 'a',
              label: '應該寫進所有人的 README，當成專案法律。',
              correct: false,
              feedback: '別的工具可能沒有 Tab 切換。這是 OpenCode 的操作習慣，寫進教學或個人筆記即可，不必假裝成專案憲法。',
            },
            {
              id: 'b',
              label: 'OpenCode 的工具專屬設定或教學。',
              correct: true,
              feedback: '對。駕駛艙按鈕不必假裝成專案法律。專案法律應是「怎麼測、什麼不能碰」這類跨工具仍成立的事。',
            },
            {
              id: 'c',
              label: '只能放在 Claude Code 的 CLAUDE.md。',
              correct: false,
              feedback: '那是另一個駕駛艙的習慣檔。Tab 切換是 OpenCode 的操作，不是 Claude Code 的班規。',
            },
          ],
        },
      ],
    },
    {
      id: '3-3',
      title: '單一可信來源與接手流程',
      goal: '讓下一個 Agent（或下一個你）能接著做，不必考古聊天紀錄。',
      steps: [
        {
          type: 'metaphor',
          title: '單一可信來源',
          body: [
            '如果 README 說用 npm，AGENTS.md 說用 pnpm，CLAUDE.md 又說用 bun，助手會迷路——它可能很認真地執行錯誤的那一份。',
            '單一可信來源意思是：同一件事，只承認一個官方答案。其他地方若要提到，就指向那一份，而不是再寫一個互相打架的版本。',
            '這不只是文件整潔，而是減少「看起來都對、合起來卻爆炸」的隱形 bug。',
          ],
          metaphor: {
            title: '黑板上只寫一個集合時間',
            body: '不要在黑板上寫 9:00、在群組寫 9:10、在紙條寫 8:50。助手跟同學都會遲到，而且每個人都覺得自己有照規定。把時間統一寫在黑板，其他地方只說「看黑板」。',
          },
        },
        {
          type: 'flow',
          title: '下一個 Agent 接得住的流程',
          body: ['交接不是寫長篇小說，而是留下可執行的接力棒。'],
          flow: [
            {
              n: 1,
              title: '目標寫清楚',
              body: '現在做到哪、還沒做什麼、成功長什麼樣子。最好寫成可勾選的句子，而不是「差不多了」。',
            },
            {
              n: 2,
              title: '規則放對地方',
              body: '專案事實進 AGENTS.md（必要時同步 CLAUDE.md 的精神，但避免打架）。工具按鈕留在 opencode.json 等專屬設定。',
            },
            {
              n: 3,
              title: '驗證方法留下',
              body: '測試指令、手動檢查步驟、截圖基準。沒有驗收，接手的人只能猜，也只能相信「我修好了」。',
            },
            {
              n: 4,
              title: 'Session 可接續',
              body: '同一任務留下可打開的 Session 或書面摘要。新 Agent 先讀摘要與規則再動手，不要從零考古聊天氣泡。',
            },
            {
              n: 5,
              title: '不要藏秘密步驟',
              body: '你在腦子裡的「其實要先清快取」「其實要開某個 flag」也要寫下來。隱形步驟是交接的第一殺手。',
            },
          ],
        },
        {
          type: 'checklist',
          title: '交接前 30 秒檢查',
          body: ['關掉電腦前，快速勾一次：'],
          items: [
            {
              id: 'h1',
              text: '有一份主規則，不會互相打架。',
              hint: '單一可信來源。兩份都在就整理，不要靠運氣。',
            },
            {
              id: 'h2',
              text: '有人能只靠文件跑起專案。',
              hint: '包含安裝與測試。若只有你本人記得指令，文件就還不夠。',
            },
            {
              id: 'h3',
              text: '未完成項目寫成待辦，而不是只在聊天裡提過。',
              hint: '聊天會過期，待辦比較像接力棒；摘要裡寫「下一步第一個動作」更好。',
            },
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
        {
          id: 'a',
          label: '沒有差別，只是翻譯不同',
          correct: false,
          feedback: '角色和大腦是兩層。混在一起時，你會不知道該換權限還是該換引擎。',
        },
        {
          id: 'b',
          label: 'Agent 是角色與權限，模型是思考引擎',
          correct: true,
          feedback: '正確。同一個審查員角色，可以換不同大腦；同一大腦也可以扮演不同角色。',
        },
        {
          id: 'c',
          label: '模型負責存檔，Agent 負責上網',
          correct: false,
          feedback: '存檔與上網是工具能力，不是這兩個詞的定義。',
        },
      ],
    },
    {
      id: 'q2',
      question: '單一可信來源是為了避免？',
      options: [
        {
          id: 'a',
          label: '規則互相打架，助手不知道該聽誰',
          correct: true,
          feedback: '對。黑板只寫一個集合時間，其他地方指向它。',
        },
        {
          id: 'b',
          label: '電腦當機',
          correct: false,
          feedback: '那是硬體問題，跟文件一致性無關。',
        },
        {
          id: 'c',
          label: '字型不好看',
          correct: false,
          feedback: '跟字型無關。重點是同一件事不要有多個官方答案。',
        },
      ],
    },
    {
      id: 'q3',
      question: 'Context 太滿時，較好的做法是？',
      options: [
        {
          id: 'a',
          label: '繼續貼更多檔案，讓它「看完整個宇宙」',
          correct: false,
          feedback: '書包會爆，關鍵規則反而可能被擠掉。',
        },
        {
          id: 'b',
          label: '只給相關檔案，或開新 Session / 做摘要並檢查',
          correct: true,
          feedback: '對。精準比龐大更有用；摘要後請人工確認禁令與目標還在。',
        },
        {
          id: 'c',
          label: '關掉權限，全部改用猜的',
          correct: false,
          feedback: '猜的不是 Harness。沒有工具與證據，只會更糟。',
        },
      ],
    },
  ],
}
