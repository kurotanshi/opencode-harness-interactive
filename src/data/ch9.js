export default {
  id: 'ch9',
  number: 9,
  title: 'WorkDash 實戰',
  tagline: '用一個工作儀表板，把整條 Harness 走完。',
  intro: 'WorkDash 是想像中的「我的工作儀表板」：看到待辦、進度、摘要。這一章用它練習問清楚需求、除錯、跨 Session 與多模態修 UI，最後用 AI 摘要把接力棒交出去。',
  sections: [
    {
      id: '9-1',
      title: '設計與 Question 工具釐清需求',
      goal: '在寫第一行之前，先讓助手把模糊願望問成可做的規格。',
      steps: [
        {
          type: 'text',
          title: 'WorkDash 是什麼？',
          body: [
            '想像一個給自己用的小儀表板：今天要做的事、進行中的專案、AI 整理的摘要。',
            '它不是要你在本課做出完整產品，而是一條可以走完的故事線。',
            '真實專案也一樣：先問「給誰用、最重要的三個畫面、沒有哪些功能也沒關係」。',
          ],
        },
        {
          type: 'metaphor',
          title: 'Question 工具像舉手發問',
          body: [
            'OpenCode 有 question 這類工具，讓 Agent 中途停下來問你。',
            '好的助手不會假裝懂。它會問：資料存在哪？要不要登入？手機先還是電腦先？',
          ],
          metaphor: {
            title: '點餐前先問辣不辣',
            body: '如果你說「做一個酷的儀表板」，它可能做出太空船駕駛艙。問清楚，才能做出腳踏車儀表。',
          },
        },
        {
          type: 'checklist',
          title: '開幹前的問題清單',
          items: [
            { id: 'd1', text: '使用者是誰？只有我，還是全班？', hint: '人數一變，權限與隱私就變。' },
            { id: 'd2', text: '第一版只做哪三件事？', hint: '例如：列出待辦、標記完成、看一週摘要。' },
            { id: 'd3', text: '成功長什麼樣子？', hint: '「我能在手機上勾完三筆待辦」比「要很炫」更好驗收。' },
            { id: 'd4', text: '明確說不做什麼。', hint: '第一版不做即時聊天、不做付款。' },
          ],
        },
        {
          type: 'flow',
          title: '建議節奏',
          flow: [
            { n: 1, title: 'Plan + Question', body: '讓它提問，你回答。產出短規格。' },
            { n: 2, title: '寫進 AGENTS.md', body: '把已決定的事變成專案規則，而不是只留在聊天。' },
            { n: 3, title: '畫資訊架構', body: '哪些頁、哪些按鈕。仍先不要大改程式。' },
            { n: 4, title: 'Build 最小畫面', body: '先做出能點的骨架，再填細節。' },
          ],
        },
      ],
    },
    {
      id: '9-2',
      title: '除錯、跨界與換方法',
      goal: '當畫面壞掉時，會換 Skill、換 Session、換模型，而不是死磕同一句 prompt。',
      steps: [
        {
          type: 'text',
          title: '除錯 Skill 是重播按鈕的說明書',
          body: [
            '把「怎麼除錯 WorkDash」寫成 Skill：重現步驟、看主控台、縮小到哪個元件、提出一個假設。',
            '下次不管換哪個模型，只要載入這張技能卡，節奏就還在。',
          ],
        },
        {
          type: 'reveal',
          title: '跨 Session、模型、平台',
          cards: [
            { tag: 'Session', title: '對話太髒就換本子', body: '錯誤假設已經污染上下文時，把結論寫進檔案，開新 Session 比較乾淨。' },
            { tag: '模型', title: '換大腦試一次', body: '同一提示換模型，有時立刻看穿。但先固定再現步驟，不然你分不清是誰幫忙。' },
            { tag: '平台', title: '換駕駛艙也可以', body: 'OpenCode 卡住時，規則若在 AGENTS.md / CLAUDE.md，Claude Code 或 Codex 才接得住。' },
          ],
        },
        {
          type: 'text',
          title: '多模態修 UI',
          body: [
            '把實際畫面截圖丟給助手：「這兩個卡片在手機上重疊了」。',
            '文字描述空間很容易含糊。一張圖常常比三段形容詞有用。',
            '它提出修改後，你再截圖確認。用眼睛閉環，不要只聽「我修好了」。',
          ],
        },
        {
          type: 'choose',
          title: '同一句 prompt 打了八次',
          prompt: '按鈕還是歪的。你已經把同一句「請修好」送了八次。下一步？',
          options: [
            { id: 'a', label: '再送八次，展現毅力。', correct: false, feedback: '這是無底洞除錯。' },
            { id: 'b', label: '換方法：截圖、縮小元件、換假設，必要時換模型或開新 Session。', correct: true, feedback: '對。轉一個旋鈕，並給新證據。' },
            { id: 'c', label: '刪除整個專案，當作沒發生過。', correct: false, feedback: '太大動作了。先縮小範圍。' },
          ],
        },
      ],
    },
    {
      id: '9-3',
      title: 'AI 摘要、待辦，把 Harness 走完',
      goal: '用摘要與待辦當接力棒，讓專案在下一次打開時還活著。',
      steps: [
        {
          type: 'text',
          title: '摘要不是作文比賽',
          body: [
            '請助手寫摘要：做了什麼、沒做什麼、已知坑、下一次第一個動作。',
            '待辦要可勾選、可驗證。例如「手機寬度 375 時卡片不重疊」，而不是「UI 美化」。',
            'WorkDash 自己也可以顯示這些待辦。狗咬尾巴：儀表板追蹤儀表板的建造。',
          ],
        },
        {
          type: 'flow',
          title: '把 Harness 走完的一圈',
          flow: [
            { n: 1, title: '目標', body: 'Question 問清楚。寫進規則。' },
            { n: 2, title: '計畫', body: 'Plan 拆步驟。你批准順序。' },
            { n: 3, title: '實作', body: 'Build 動手。權限守住危險動作。' },
            { n: 4, title: '驗證', body: '測試、截圖、清單。審查員可獨立看一眼。' },
            { n: 5, title: '沉澱', body: '更新 AGENTS.md、Skill、待辦與摘要。下次接著走。' },
          ],
        },
        {
          type: 'checklist',
          title: '課程結束前的自我檢查',
          items: [
            { id: 'f1', text: '我能解釋 Harness 不是模型名稱。', hint: '它是駕馭系統。' },
            { id: 'f2', text: '我知道規則、權限、角色、模型是不同旋鈕。', hint: '一次轉一個。' },
            { id: 'f3', text: '我知道換平台時，要靠單一可信來源接手。', hint: '文件比聊天紀錄長壽。' },
            { id: 'f4', text: '我會檢查結果，而不是閉眼接受。', hint: '你才是騎士。' },
          ],
        },
        {
          type: 'metaphor',
          title: '下課時的畫面',
          metaphor: {
            title: '把腳踏車停好，而不是丟在路中',
            body: '摘要、待辦、規則檔就是停車架。下次你或另一個 Agent 來，還能立刻騎走。這就是把 Harness 走完。',
          },
          body: ['恭喜你走到第九章。接下來請回課程地圖，把還沒過的關卡補齊。'],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Question 工具最重要的時機是？',
      options: [
        { id: 'a', label: '需求還模糊、會影響做不出來或做錯的時候', correct: true, feedback: '對。先問辣不辣再炒菜。' },
        { id: 'b', label: '一切都做完後再問，比較神祕', correct: false, feedback: '那時可能已走錯路。' },
        { id: 'c', label: '永遠不要問，以免顯得不聰明', correct: false, feedback: '問清楚才聰明。' },
      ],
    },
    {
      id: 'q2',
      question: '修 UI 時丟截圖，是為了？',
      options: [
        { id: 'a', label: '讓助手看到真實畫面，而不是只靠含糊形容', correct: true, feedback: '正確。多模態是為了證據。' },
        { id: 'b', label: '讓對話比較漂亮', correct: false, feedback: '重點不是漂亮。' },
        { id: 'c', label: '取代測試', correct: false, feedback: '截圖不能取代所有測試。' },
      ],
    },
    {
      id: 'q3',
      question: '把 Harness 走完，最後一步通常包含？',
      options: [
        { id: 'a', label: '把經驗沉澱成規則、待辦與摘要，方便下次接手', correct: true, feedback: '對。停車架要在。' },
        { id: 'b', label: '刪掉所有文件，保持神秘', correct: false, feedback: '那就沒人接得住。' },
        { id: 'c', label: '永遠不關 Session，讓它從早開到晚', correct: false, feedback: 'Session 可以保存，但不表示永遠不清潔。' },
      ],
    },
    {
      id: 'q4',
      question: '同一句「請修好」重複很多次卻無效，應該？',
      options: [
        { id: 'a', label: '換證據與方法：縮小範圍、截圖、換假設或模型', correct: true, feedback: '正確。' },
        { id: 'b', label: '把音量用更大的字再喊一次', correct: false, feedback: '更大的字不是新資訊。' },
        { id: 'c', label: '立刻放棄寫程式這件事', correct: false, feedback: '先換方法，不要直接放棄。' },
      ],
    },
  ],
}
