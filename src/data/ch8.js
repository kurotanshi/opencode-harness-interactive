export default {
  id: 'ch8',
  number: 8,
  title: 'Harness 思維',
  tagline: '從會按按鈕，到真的能駕馭。',
  intro: '前面你已摸過零件。這一章把零件排成六層階梯，再用平台、Agent、模型三個維度看問題，最後認識常見反模式。',
  sections: [
    {
      id: '8-1',
      title: '從會用到駕馭：六層控制力',
      goal: '能指出自己現在站在哪一層，下一層要練什麼。',
      steps: [
        {
          type: 'text',
          title: '會用，只是第一階',
          body: [
            '會打開 OpenCode、會叫它改一個檔，叫做「會用」。',
            '駕馭是：你知道它為什麼這樣做、能限制它、能換零件、能把經驗留給下一次。',
            '六層像階梯。站得越高，不是比較酷，而是比較不容易摔。',
          ],
        },
        {
          type: 'flow',
          title: '六層階梯',
          flow: [
            { n: 1, title: '入口層', body: 'TUI、CLI、IDE、桌面、網頁……你從哪扇門進去。先選一個熟的門。' },
            { n: 2, title: '上下文層', body: 'AGENTS.md、@檔案、Session、摘要。書包裡放什麼由你決定。' },
            { n: 3, title: '執行層', body: '讀寫檔、bash、LSP、MCP。它的手腳實際碰到世界的地方。' },
            { n: 4, title: '角色層', body: 'commands、agents、skills、plugins。把重複動作變成可重用角色。' },
            { n: 5, title: '模型層', body: 'Provider、Model、小模型、金鑰。選對大腦與後備大腦。' },
            { n: 6, title: '治理層', body: '權限、網路、分享、團隊設定。這是煞車與交通規則。' },
          ],
        },
        {
          type: 'choose',
          title: '你卡在哪？',
          prompt: '有人說：「我模型很強，但每次都要重講專案怎麼測試。」他缺哪一層比較多？',
          options: [
            { id: 'a', label: '上下文層：規則與習慣沒有沉澱進 AGENTS.md。', correct: true, feedback: '對。強引擎救不了沒有說明書的教室。' },
            { id: 'b', label: '一定是入口層，因為他沒用最潮的 IDE。', correct: false, feedback: '門換了，班規沒寫下來還是會忘。' },
            { id: 'c', label: '治理層跟這無關，權限不能幫記憶。', correct: false, feedback: '權限確實不管記憶，但這題的痛點是上下文沒沉澱。' },
          ],
        },
      ],
    },
    {
      id: '8-2',
      title: '平台 / Agent / 模型 三維度',
      goal: '出問題時能判斷：是駕駛艙、角色，還是大腦的事。',
      steps: [
        {
          type: 'reveal',
          title: '三個旋鈕',
          cards: [
            { tag: '平台', title: 'OpenCode / Claude Code / Codex', body: '按鈕位置、規則檔名稱、插件生態不同。換平台像換車，交通規則仍在。' },
            { tag: 'Agent', title: '角色與權限', body: 'Plan 或 Build、審查員、探索者。同樣的車，司機性格可以不同。' },
            { tag: '模型', title: '實際推理的引擎', body: '同一角色換模型，成績可能大變。但沒有方向盤，再好的引擎也會撞。' },
          ],
        },
        {
          type: 'text',
          title: '故障時先問三句',
          body: [
            '是這個平台不會做（缺 MCP、缺指令）？',
            '是角色權限不對（審查員被允許改檔、Plan 被拿去狂改）？',
            '還是模型太弱或太慢、上下文已滿？',
            '先分類，再動手。不要三個旋鈕一起亂轉。',
          ],
        },
        {
          type: 'choose',
          title: '診斷練習',
          prompt: '助手一直無法點網頁按鈕。角色是 Build，模型也很強。較可能先查？',
          options: [
            { id: 'a', label: '平台層：有沒有瀏覽器 MCP / Playwright 這類手？', correct: true, feedback: '對。沒有手，再聰明也點不到真實按鈕。' },
            { id: 'b', label: '一定是模型不夠貴。', correct: false, feedback: '沒有工具時，換模型常常沒用。' },
            { id: 'c', label: '把 Agent 改名叫 SuperBuild 就會好。', correct: false, feedback: '改名不是能力。' },
          ],
        },
      ],
    },
    {
      id: '8-3',
      title: '反模式',
      goal: '認得幾種常見摔法，好及時踩煞車。',
      steps: [
        {
          type: 'reveal',
          title: '這些坑很常見',
          cards: [
            { tag: '過度拆分', title: '角色太多', body: '十個 Agent 職責重疊，隊長不知道派誰。寧可三個清楚角色。' },
            { tag: '迷信模型', title: '只換大腦', body: '規則混亂、沒測試，卻以為換最貴模型就會好。引擎救不了沒煞車的車。' },
            { tag: '放棄理解', title: '閉眼接受', body: '看不懂 diff 就全盤接受。你會逐漸不會騎車，只會坐車。' },
            { tag: '無底洞除錯', title: '同一招打 20 次', body: '不換假設、不縮小範圍、不換方法。時間會被漩渦吸走。' },
          ],
        },
        {
          type: 'text',
          title: '還有幾個小陷阱',
          body: [
            'Context 無限貼檔：書包爆炸。',
            '秘密進倉庫：金鑰當裝飾品。',
            '沒有驗收：助手說完成，你也說完成，但沒人按過按鈕。',
            '平台戰爭：把時間花在吵架哪個駕駛艙比較神，而不是把 Harness 走完。',
          ],
        },
        {
          type: 'checklist',
          title: '踩到坑時的煞車',
          items: [
            { id: 'a1', text: '停下來寫：我現在的假設是什麼？', hint: '沒有假設，就只是亂按。' },
            { id: 'a2', text: '縮小範圍：一個檔、一個症狀。', hint: '森林很大，先盯一棵樹。' },
            { id: 'a3', text: '只轉一個旋鈕：平台、Agent 或模型。', hint: '一次改三個，你不知道是誰救了你。' },
            { id: 'a4', text: '讀懂再接受。', hint: '你是騎士，不是行李。' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      question: '六層控制力裡，權限比較屬於？',
      options: [
        { id: 'a', label: '治理層（也影響執行層怎麼被允許）', correct: true, feedback: '對。煞車在治理，手腳在執行。' },
        { id: 'b', label: '只屬於入口層', correct: false, feedback: '入口只是你從哪扇門進去。' },
        { id: 'c', label: '模型層的別名', correct: false, feedback: '模型是大腦，不是閘門本身。' },
      ],
    },
    {
      id: 'q2',
      question: '「只換最貴模型、不寫 AGENTS.md」最接近哪個反模式？',
      options: [
        { id: 'a', label: '迷信模型', correct: true, feedback: '正確。' },
        { id: 'b', label: '過度拆分', correct: false, feedback: '過度拆分是角色太多。' },
        { id: 'c', label: '入口層太潮', correct: false, feedback: '那不是本課說的反模式名稱。' },
      ],
    },
    {
      id: 'q3',
      question: '平台、Agent、模型三維度的用途是？',
      options: [
        { id: 'a', label: '出問題時先分類，避免三個旋鈕一起亂轉', correct: true, feedback: '對。' },
        { id: 'b', label: '用來罵別人用的工具比較差', correct: false, feedback: '那是平台戰爭，不是駕馭。' },
        { id: 'c', label: '保證一次就寫出完美作業', correct: false, feedback: '沒有這種保證。' },
      ],
    },
  ],
}
