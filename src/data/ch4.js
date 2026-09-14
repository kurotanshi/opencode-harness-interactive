export default {
  id: "ch4",
  number: 4,
  title: "Agent + Subagent",
  tagline: "自建審查員、平行調查、組三人隊——動手設定。",
  intro: "建立 subagent、練習並行與獨立審查，並寫下你的小隊分工。主軸是真實檔案與 @ 呼叫。",
  sections: [
    {
      id: "4-1",
      title: "簡介與自建測試",
      goal: "建立一個「只審查不准改檔」的 subagent，並用 @ 叫它。",
      steps: [
        {
          type: "text",
          title: "隊長與跑腿",
          body: [
            "主 Agent（Build/Plan）跟你對話；Subagent 可被派出或用 @名字 叫出，常有獨立 Context。",
            "內建幫手含 General、Explore、Scout。先做一個最小自訂審查員。"
          ],
          note: "也可用互動指令 opencode agent create。檔案可放 .opencode/agents/。"
        },
        {
          type: "lab",
          title: "實驗室：自建審查員",
          body: [
            "在練習專案執行。"
          ],
          tasks: [
            {
              id: "s1",
              do: "建立 agents 目錄。",
              expect: "看得到 .opencode/agents/",
              command: "mkdir -p .opencode/agents"
            },
            {
              id: "s2",
              do: "建立 reviewer.md（檔名會變成 agent 名）。貼上內容並存檔。",
              expect: "檔案存在。",
              command: "---\ndescription: 只審查 README 錯字與不清處，不准改檔\nmode: subagent\npermission:\n  edit: deny\n  bash: deny\n---\n你是嚴格的文件審查員。只讀取並回報問題清單（檔名＋句子＋建議）。\n不要修改任何檔案，不要執行會改動系統的指令。\n若無法確定，就列出「需要人工確認」項目。\n"
            },
            {
              id: "s3",
              do: "重開或重新載入專案後，在對話用 @ 叫它審查 README。",
              expect: "它回報問題清單，而不是直接改 README。",
              command: "@reviewer 請審查 README.md 的錯字與不通順處，只輸出清單。",
              hint: "若找不到 agent，確認路徑是 .opencode/agents/reviewer.md，或改用 opencode agent create。"
            },
            {
              id: "s4",
              do: "用 git status 或看檔案時間，確認 README 沒被它改寫。",
              expect: "沒有未預期的檔案修改。",
              command: "git status",
              hint: "沒有 git 就手動打開 README 對照。"
            }
          ],
          goal: "@ 叫出審查員，且它沒改檔。"
        },
        {
          type: "choose",
          title: "何時派 Subagent？",
          prompt: "大範圍搜尋很多檔、怕塞爆主對話。較好？",
          options: [
            {
              id: "a",
              label: "派 Explore／Subagent 去找，主桌收摘要",
              correct: true,
              feedback: "對。雜訊留在子桌。"
            },
            {
              id: "b",
              label: "把所有搜尋結果貼進主對話",
              correct: false,
              feedback: "書包會爆。"
            },
            {
              id: "c",
              label: "永遠不要用 Subagent",
              correct: false,
              feedback: "適度使用有幫助。"
            }
          ]
        }
      ]
    },
    {
      id: "4-2",
      title: "並行與 Context 影響",
      goal: "練習一次平行提示：同時請兩個方向調查，但不要搶改同一檔。",
      steps: [
        {
          type: "text",
          title: "並行像分組報告",
          body: [
            "可同時派出多個幫手，但費用與摘要風險上升；不要讓兩個幫手改同一檔。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：平行調查（只讀）",
          body: [
            "用一個提示同時請兩個只讀方向；或連續 @explore 兩次不同問題。"
          ],
          tasks: [
            {
              id: "p1",
              do: "確認有可讀的 README 與 AGENTS.md。",
              expect: "兩個檔都在。"
            },
            {
              id: "p2",
              do: "貼上平行調查提示（要求先不要改檔）。",
              expect: "它分別整理「文件怎麼說」與「規則怎麼說」，或派出幫手。",
              command: "先不要改任何檔。請平行完成兩件事並分開回報：A) 從 README 摘要如何使用；B) 從 AGENTS.md 摘要禁區。最後給我兩段摘要。"
            },
            {
              id: "p3",
              do: "檢查回覆是否分成兩段，且沒有修改檔案。",
              expect: "git status 乾淨或無新變更。"
            },
            {
              id: "p4",
              do: "寫下一句反省：這次若叫兩個 Build 同時改 README 會怎樣？",
              expect: "你能說出「衝突／互相覆蓋」風險。"
            }
          ],
          goal: "你得到兩份調查，主對話仍清楚。"
        },
        {
          type: "choose",
          title: "不要並行？",
          prompt: "兩個幫手要改同一個設定檔。",
          options: [
            {
              id: "a",
              label: "照樣並行比較快",
              correct: false,
              feedback: "容易互蓋。應串行或一人改。"
            },
            {
              id: "b",
              label: "不要並行，改同一檔要串行",
              correct: true,
              feedback: "正確。"
            },
            {
              id: "c",
              label: "關掉所有權限就好",
              correct: false,
              feedback: "關權限也不等於解決衝突流程。"
            }
          ]
        }
      ]
    },
    {
      id: "4-3",
      title: "獨立 Context 審查員",
      goal: "用不同模型或獨立審查流程，避免「自己改自己審」。",
      steps: [
        {
          type: "text",
          title: "請隔壁班改考卷",
          body: [
            "審查最好獨立：不同 Session／不同模型／deny edit。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：獨立審查流程",
          body: [
            "沿用 reviewer；加一道人工對照。"
          ],
          tasks: [
            {
              id: "r1",
              do: "開新 Session（乾淨桌子），@reviewer 審查剛才改過的檔。",
              expect: "得到問題清單。",
              command: "@reviewer 請審查目前工作區與文件，列出高／中／低優先問題。不要改檔。"
            },
            {
              id: "r2",
              do: "（建議）用 /models 暫時換另一顆模型再審一次同一問題。",
              expect: "兩次審查可對照；若不能換模型就略過並註記。",
              command: "/models"
            },
            {
              id: "r3",
              do: "人工抽查清單第一條：打開檔案看是不是真的。",
              expect: "你標記「屬實／誤報」。"
            },
            {
              id: "r4",
              do: "把「屬實」的項目寫進 TODO.md，仍先不要大改。",
              expect: "TODO.md 有至少一條可執行待辦。"
            }
          ],
          goal: "有審查清單，且你抽查過至少一項。"
        }
      ]
    },
    {
      id: "4-4",
      title: "專業團隊",
      goal: "為自己的小專案選 3 個角色並寫進設定或筆記。",
      steps: [
        {
          type: "text",
          title: "三個清楚角色 > 十個空名",
          body: [
            "Build/Plan + Explore + Reviewer（或 Scout 查外部文件）通常夠用。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：組你的三人組",
          body: [
            "寫 TEAM.md。"
          ],
          tasks: [
            {
              id: "t1",
              do: "建立 TEAM.md，列出三角色與權限。",
              expect: "檔案包含 Build/Plan、Explore、Reviewer。",
              command: "cat > TEAM.md << 'EOF'\n# 我的 OpenCode 小隊\n- Plan/Build（主）：跟我對話；Build 可改檔但高風險要問\n- Explore（只讀）：找檔、搜尋\n- Reviewer（只讀）：找問題、不准改檔\n規則：改同一檔不並行；審查用獨立 Session\nEOF"
            },
            {
              id: "t2",
              do: "在 OpenCode 請它複述 TEAM.md，並問何時該叫 Explore。",
              expect: "它回答與文件一致。",
              command: "請讀 TEAM.md，用自己的話說：什麼時候該叫 Explore？什麼時候該叫 Reviewer？"
            },
            {
              id: "t3",
              do: "實際 @explore 或請主 Agent 派 Explore 找「哪個檔寫浮水印相關」。",
              expect: "得到檔名列表，主對話沒被塞爆。",
              command: "@explore 找出與浮水印或 README 說明最相關的檔，只回檔名與一句理由。"
            }
          ],
          goal: "TEAM.md 寫明誰做什麼、誰不能改檔。"
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Subagent 最常見的好處是？',
      options: [
        {
          id: 'a',
          label: '讓主對話少被雜訊塞滿，並可分工',
          correct: true,
          feedback: '對。獨立桌子，帶回重點；你與隊長仍要抽查摘要是否漏限制。',
        },
        {
          id: 'b',
          label: '保證永遠免費',
          correct: false,
          feedback: '派出幫手通常仍會消耗額度與時間，並行更是。',
        },
        {
          id: 'c',
          label: '它可以取代你檢查結果',
          correct: false,
          feedback: '隊長（你）還是要抽查。分身不是自動免責。',
        },
      ],
    },
    {
      id: 'q2',
      question: '審查員為什麼常把 edit 設成 deny？',
      options: [
        {
          id: 'a',
          label: '因為審查的人不會打字',
          correct: false,
          feedback: '它會打字，只是不該直接改你的作業；應回報問題與證據。',
        },
        {
          id: 'b',
          label: '讓它只報告問題，不當選手又當裁判',
          correct: true,
          feedback: '正確。審與改分開，檢查才比較誠實。',
        },
        {
          id: 'c',
          label: 'deny 會讓它跑比較快',
          correct: false,
          feedback: '這是安全與職責，不是速度魔法。',
        },
      ],
    },
    {
      id: 'q3',
      question: '有先後依賴的同一條修改，應該？',
      options: [
        {
          id: 'a',
          label: '派十個幫手同時改',
          correct: false,
          feedback: '會互相踩腳，合併地獄。',
        },
        {
          id: 'b',
          label: '依序做，或先計畫再一次改完',
          correct: true,
          feedback: '對。並行要用在互相不太干擾的工作，例如兩路只讀調查。',
        },
        {
          id: 'c',
          label: '關掉所有權限再碰運氣',
          correct: false,
          feedback: '那會什麼都做不了，也不是駕馭。',
        },
      ],
    },
  ],
}
