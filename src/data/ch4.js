export default {
  id: 'ch4',
  number: 4,
  title: 'Agent + Subagent',
  tagline: '一個人當隊長，也可以請隊友去跑腿。',
  intro: '主 Agent 負責跟你說話。Subagent 是被派出的隊友，常常有自己的上下文。這一章練習何時並打、何時獨立審查、如何組成專業團隊。',
  sections: [
    {
      id: '4-1',
      title: '簡介與自建測試',
      goal: '知道主 Agent 和 Subagent 的差別，並用一個小實驗感覺看看。',
      steps: [
        {
          type: 'text',
          title: '隊長與跑腿的人',
          body: [
            '你平常打字對話的對象，是主 Agent（primary）。OpenCode 內建 Build 與 Plan。',
            'Subagent 是主 Agent 可以派出的幫手，也可以用 @名字 手動叫出來。',
            '內建常見幫手包含 General（較通用）、Explore（只看不改，適合找檔）、以及只讀的研究型幫手。',
          ],
        },
        {
          type: 'metaphor',
          title: '為什麼要分身？',
          metaphor: {
            title: '不要讓全班同時擠在同一張書桌',
            body: '主對話那張書桌很快會堆滿草稿。派一位同學去圖書館找資料，他有自己的桌子，找完只把重點帶回來。',
          },
          body: ['Subagent 常常有獨立 Context。它不會把整段找資料的雜訊，全部倒進你的主對話。'],
        },
        {
          type: 'flow',
          title: '自建測試：請它找錯字但不准改檔',
          flow: [
            { n: 1, title: '寫一個小 Agent', body: '描述：審查 README 的錯字。權限：edit 設成 deny。' },
            { n: 2, title: '放在專案或全域 agents 資料夾', body: '檔名會變成 Agent 名稱。也可用 opencode.json 設定。' },
            { n: 3, title: '用 @ 叫它', body: '看它是否只回報、不動手改檔。這就是測試。' },
            { n: 4, title: '通過標準', body: '它找得到問題，而且沒有偷偷改檔，才算成功。' },
          ],
          note: '建立 Agent 也可用互動指令 opencode agent create，它會問你權限。',
        },
      ],
    },
    {
      id: '4-2',
      title: '並行與 Context 影響',
      goal: '理解同時派出多個幫手的好處與代價。',
      steps: [
        {
          type: 'text',
          title: '並行像分組報告',
          body: [
            '主 Agent 可以同時派出多個 Subagent：一個找測試、一個查文件、一個看樣式。',
            '這叫並行。牆壁油漆可以一邊乾、一邊有人去買膠帶。',
            '但每個幫手都要耗模型時間，也會增加費用與等待。',
          ],
        },
        {
          type: 'reveal',
          title: '對 Context 的三種影響',
          cards: [
            { tag: '好處', title: '主桌較乾淨', body: '雜訊留在子 Session。主對話只收回摘要。' },
            { tag: '代價', title: '摘要會漏', body: '幫手可能漏掉一句關鍵限制。隊長要抽查。' },
            { tag: '風險', title: '搶著改同一檔', body: '兩個幫手同時改同一個檔案，會像兩人搶同一張考卷。要分工。' },
          ],
        },
        {
          type: 'choose',
          title: '什麼時候不要並行？',
          prompt: '下列哪種任務，較不適合同時派出很多 Subagent？',
          options: [
            { id: 'a', label: '兩個互不相關的調查：一個找文件、一個找測試名稱。', correct: false, feedback: '這種比較適合並行。' },
            { id: 'b', label: '必須依序做的同一條修改：先改資料結構，再改所有呼叫它的地方。', correct: true, feedback: '對。有先後依賴時，並行容易互相踩腳。' },
            { id: 'c', label: '只讀探索兩個資料夾。', correct: false, feedback: '只讀探索通常很適合並行。' },
          ],
        },
      ],
    },
    {
      id: '4-3',
      title: '獨立 Context 審查員',
      goal: '讓審查的人不要看到作者的自我辯解，才能比較誠實。',
      steps: [
        {
          type: 'metaphor',
          title: '為什麼審查要獨立桌子',
          body: [
            '如果作者自己檢查自己的作文，很容易「眼瞎」。',
            '審查員 Subagent 用獨立 Context，較少被剛才那串「我是這樣想的」影響。',
          ],
          metaphor: {
            title: '請隔壁班同學改考卷',
            body: '他沒聽到你解題時的碎念，只看答案紙。這樣比較容易抓到真正的漏洞。',
          },
        },
        {
          type: 'checklist',
          title: '審查員的好設定',
          items: [
            { id: 'v1', text: 'edit 設 deny：只准看，不准改。', hint: '改與審要分開，才不會既當選手又當裁判。' },
            { id: 'v2', text: '說明要看什麼：安全、測試、可讀性。', hint: '沒有評分標準，審查會變得空泛。' },
            { id: 'v3', text: '回報要有證據：檔名與原因。', hint: '「感覺不好」不夠。要指出哪裡。' },
          ],
        },
        {
          type: 'choose',
          title: '誰來當審查員？',
          prompt: '剛寫完功能的同一個主對話，立刻叫它「你審查一下你自己」，可能有什麼問題？',
          options: [
            { id: 'a', label: '它太了解自己的意圖，容易幫自己說話。', correct: true, feedback: '對。所以才要獨立 Context 的審查員。' },
            { id: 'b', label: '完全沒問題，模型永遠客觀。', correct: false, feedback: '模型會受剛才上下文影響。' },
            { id: 'c', label: '只有換電腦才會客觀。', correct: false, feedback: '重點是上下文與權限，不是電腦品牌。' },
          ],
        },
      ],
    },
    {
      id: '4-4',
      title: '專業團隊',
      goal: '把角色想成球隊，而不是把所有工作塞給同一個萬能精靈。',
      steps: [
        {
          type: 'reveal',
          title: '一支小小職業隊',
          cards: [
            { tag: '隊長', title: 'Build / Plan', body: '跟你對齊目標、分配工作、整合結果。' },
            { tag: '偵察', title: 'Explore', body: '快速找檔、回答「程式在哪裡」。通常只讀。' },
            { tag: '審查', title: 'Reviewer', body: '獨立看變更。指出風險，不直接改。' },
            { tag: '研究', title: 'Docs / Scout', body: '去讀外部文件或套件原始碼，再帶回重點。' },
          ],
        },
        {
          type: 'text',
          title: '團隊不是越多越好',
          body: [
            '三個清楚角色，好過十個名字華麗但職責重複的 Agent。',
            '每個角色要有一句「什麼時候叫我」的描述，主 Agent 才知道該派誰。',
            '權限也要不同：偵察少改檔，實作才能改，審查不能改。',
          ],
        },
        {
          type: 'checklist',
          title: '組隊前問自己',
          items: [
            { id: 'tm1', text: '這個角色有獨特任務嗎？', hint: '如果大家都「什麼都會」，就不是團隊，是分身混亂。' },
            { id: 'tm2', text: '權限有差嗎？', hint: '權限都一樣，角色就只是換皮。' },
            { id: 'tm3', text: '結果怎麼交回隊長？', hint: '要摘要、列證據，不要丟一坨沒人看的紀錄。' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Subagent 最常見的好處是？',
      options: [
        { id: 'a', label: '讓主對話少被雜訊塞滿，並可分工', correct: true, feedback: '對。獨立桌子，帶回重點。' },
        { id: 'b', label: '保證永遠免費', correct: false, feedback: '派出幫手通常仍會消耗額度。' },
        { id: 'c', label: '它可以取代你檢查結果', correct: false, feedback: '隊長（你）還是要抽查。' },
      ],
    },
    {
      id: 'q2',
      question: '審查員為什麼常把 edit 設成 deny？',
      options: [
        { id: 'a', label: '因為審查的人不會打字', correct: false, feedback: '它會打字，只是不該直接改你的作業。' },
        { id: 'b', label: '讓它只報告問題，不當選手又當裁判', correct: true, feedback: '正確。' },
        { id: 'c', label: 'deny 會讓它跑比較快', correct: false, feedback: '這是安全與職責，不是速度魔法。' },
      ],
    },
    {
      id: 'q3',
      question: '有先後依賴的同一條修改，應該？',
      options: [
        { id: 'a', label: '派十個幫手同時改', correct: false, feedback: '會互相踩腳。' },
        { id: 'b', label: '依序做，或先計畫再一次改完', correct: true, feedback: '對。並行要用在互相不太干擾的工作。' },
        { id: 'c', label: '關掉所有權限再碰運氣', correct: false, feedback: '那會什麼都做不了。' },
      ],
    },
  ],
}
