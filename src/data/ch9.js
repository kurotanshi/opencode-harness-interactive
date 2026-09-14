export default {
  id: "ch9",
  number: 9,
  title: "WorkDash 實戰",
  tagline: "提問→規格→除錯 skill→摘要沉澱——整條跟著作。",
  intro: "用 WorkDash 故事把 Harness 走完：Question 釐清、除錯 Skill、換 Session、UI 描述與摘要沉澱。",
  sections: [
    {
      id: "9-1",
      title: "設計與 Question 工具釐清需求",
      goal: "為 WorkDash 用提問產出規格，並寫進 AGENTS.md。",
      steps: [
        {
          type: "text",
          title: "WorkDash 故事",
          body: [
            "WorkDash＝給自己的工作儀表板（待辦／進度／摘要）。先問清楚再寫碼。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：Question 風格釐清",
          body: [
            "新建 workdash 練習資料夾或在現有 labs 下建立。"
          ],
          tasks: [
            {
              id: "w1",
              do: "建立資料夾並進入。",
              expect: "路徑在 workdash。",
              command: "mkdir -p ~/opencode-labs/workdash && cd ~/opencode-labs/workdash"
            },
            {
              id: "w2",
              do: "啟動 OpenCode，貼上提問要求（Plan）。",
              expect: "它一次問一題或列出問題請你答。",
              command: "我們要做 WorkDash 第一版。請用提問幫我釐清：使用者是誰、第一版只做哪三件事、成功長怎樣、明確不做什麼。一次只問一題，得到我同意前不要改檔。"
            },
            {
              id: "w3",
              do: "回答完後，請它把規格寫成 SPEC.md。",
              expect: "SPEC.md 有四區塊。",
              command: "請把我們的共識寫成 SPEC.md，含：使用者、三件事、成功樣貌、不做什麼。"
            },
            {
              id: "w4",
              do: "把規格重點寫進 AGENTS.md（可 /init 後再改）。",
              expect: "AGENTS.md 看得到 WorkDash 目標。",
              command: "/init"
            }
          ],
          goal: "有 SPEC.md 與更新過的規則。"
        },
        {
          type: "checklist",
          title: "開幹前",
          body: [
            "勾過才進 Build："
          ],
          items: [
            {
              id: "d1",
              text: "知道使用者是誰"
            },
            {
              id: "d2",
              text: "第一版只做三件事"
            },
            {
              id: "d3",
              text: "成功可驗收"
            },
            {
              id: "d4",
              text: "寫了不做什麼"
            }
          ]
        }
      ]
    },
    {
      id: "9-2",
      title: "除錯、跨界與換方法",
      goal: "建立除錯 Skill 短檔，並練習換 Session／換方法。",
      steps: [
        {
          type: "text",
          title: "壞了不要死磕同一句",
          body: [
            "可換 Skill、換 Session、換模型。先建立除錯技能卡。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：除錯技能＋假故障",
          body: [
            "在 workdash 專案。"
          ],
          tasks: [
            {
              id: "d1",
              do: "建立 skill 檔。",
              expect: "路徑存在。",
              command: "mkdir -p .opencode/skills/workdash-debug"
            },
            {
              id: "d2",
              do: "寫入 SKILL.md。",
              expect: "有重現→訊息→假設→只改一處。",
              command: "---\nname: workdash-debug\ndescription: WorkDash 除錯：重現、收集訊息、單一假設、只改一處\n---\n1. 請使用者寫重現步驟\n2. 收集錯誤文字或截圖描述\n3. 提出一個假設\n4. 只改一處並說明驗證方式\n5. 失敗則換假設，不要一次改爆\n"
            },
            {
              id: "d3",
              do: "假裝「待辦勾了沒存檔」，請它用該技能，先不要改檔。",
              expect: "它先問重現與假設。",
              command: "請用 workdash-debug 技能。問題：勾選待辦後重新整理就消失。先不要改檔。"
            },
            {
              id: "d4",
              do: "開新 Session，只帶 SPEC.md＋錯誤描述再問一次，體驗乾淨桌子。",
              expect: "新 Session 仍能靠檔案接上。",
              command: "請讀 SPEC.md。問題：勾選待辦後重整消失。先給假設，不要改檔。"
            }
          ],
          goal: "有 debug skill，並走完一輪假故障。"
        }
      ]
    },
    {
      id: "9-3",
      title: "多模態、摘要與沉澱",
      goal: "練習描述截圖／UI、產出摘要接力棒，完成 WorkDash 工坊閉環。",
      steps: [
        {
          type: "text",
          title: "看得到與留得下",
          body: [
            "UI 問題可貼截圖（若環境支援）或文字描述版面。結束時一定要沉澱到檔案。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：UI 描述＋摘要沉澱",
          body: [
            "走完最後一哩。"
          ],
          tasks: [
            {
              id: "u1",
              do: "建立 UI.md，用文字描繪你想像的首屏（三個區塊）。",
              expect: "有標題／待辦／摘要區描述。",
              command: "cat > UI.md << 'EOF'\n# WorkDash 首屏\n- 上方：今日標題與日期\n- 中間：待辦列表（可勾選）\n- 右側或下方：一週摘要（三句）\nEOF"
            },
            {
              id: "u2",
              do: "請 OpenCode 依 UI.md 列出實作順序（Plan），仍先不寫大段程式。",
              expect: "有分步順序。",
              command: "請讀 SPEC.md 與 UI.md，用 Plan 列出最小實作順序（5 步內）。不要改檔。"
            },
            {
              id: "u3",
              do: "請它把本日決策寫成 SESSION-SUMMARY.md：做了什麼、沒做什麼、下一步。",
              expect: "摘要檔存在且可交接。",
              command: "請建立 SESSION-SUMMARY.md：今日決策、已完成、未完成、下一步第一個動作。"
            },
            {
              id: "u4",
              do: "對照第 8 章審計：在 AUDIT.md 或這裡寫一句「WorkDash 讓我練到哪一層」。",
              expect: "有一句自我定位。"
            }
          ],
          goal: "有 UI 筆記與 SESSION-SUMMARY.md。"
        },
        {
          type: "choose",
          title: "最重要的沉澱？",
          prompt: "跨天接續 WorkDash，最重要？",
          options: [
            {
              id: "a",
              label: "只靠記憶",
              correct: false,
              feedback: "記憶會丟。"
            },
            {
              id: "b",
              label: "SPEC／AGENTS／摘要檔＋可接續 Session",
              correct: true,
              feedback: "對，檔案才是接力棒。"
            },
            {
              id: "c",
              label: "每天換全新規則檔名",
              correct: false,
              feedback: "會失去單一可信來源。"
            }
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'Question 工具最重要的時機是？',
      options: [
        {
          id: 'a',
          label: '需求還模糊、會影響做不出來或做錯的時候',
          correct: true,
          feedback: '對。先問辣不辣再炒菜；問清楚後寫進規則，比事後大改便宜。',
        },
        {
          id: 'b',
          label: '一切都做完後再問，比較神祕',
          correct: false,
          feedback: '那時可能已走錯路，重做成本更高。',
        },
        {
          id: 'c',
          label: '永遠不要問，以免顯得不聰明',
          correct: false,
          feedback: '問清楚才聰明。假裝懂是事故的起點。',
        },
      ],
    },
    {
      id: 'q2',
      question: '修 UI 時丟截圖，是為了？',
      options: [
        {
          id: 'a',
          label: '讓助手看到真實畫面，而不是只靠含糊形容',
          correct: true,
          feedback: '正確。多模態是為了證據；修完再截圖閉環。',
        },
        {
          id: 'b',
          label: '讓對話比較漂亮',
          correct: false,
          feedback: '重點不是漂亮，是空間關係與真實症狀。',
        },
        {
          id: 'c',
          label: '取代測試',
          correct: false,
          feedback: '截圖不能取代所有測試；它是證據之一。',
        },
      ],
    },
    {
      id: 'q3',
      question: '把 Harness 走完，最後一步通常包含？',
      options: [
        {
          id: 'a',
          label: '把經驗沉澱成規則、待辦與摘要，方便下次接手',
          correct: true,
          feedback: '對。停車架要在。省略沉澱，下次又會從考古開始。',
        },
        {
          id: 'b',
          label: '刪掉所有文件，保持神秘',
          correct: false,
          feedback: '那就沒人接得住，包括未來的你。',
        },
        {
          id: 'c',
          label: '永遠不關 Session，讓它從早開到晚',
          correct: false,
          feedback: 'Session 可以保存，但不表示永遠不清潔；污染時要換本並先沉澱。',
        },
      ],
    },
    {
      id: 'q4',
      question: '同一句「請修好」重複很多次卻無效，應該？',
      options: [
        {
          id: 'a',
          label: '換證據與方法：縮小範圍、截圖、換假設或模型',
          correct: true,
          feedback: '正確。這是對無底洞除錯的煞車。',
        },
        {
          id: 'b',
          label: '把音量用更大的字再喊一次',
          correct: false,
          feedback: '更大的字不是新資訊。要給新證據、換假設。',
        },
        {
          id: 'c',
          label: '立刻放棄寫程式這件事',
          correct: false,
          feedback: '先換方法，不要直接放棄；縮小範圍通常就能前進。',
        },
      ],
    },
  ],
}
