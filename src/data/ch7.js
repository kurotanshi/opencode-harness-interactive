export default {
  id: "ch7",
  number: 7,
  title: "模型與方案",
  tagline: "/connect、/models、名片與風險表——選腦要動手。",
  intro: "實際連線與選模型，建立模型名片與風險檢查，並用小任務練習選較便宜的腦。",
  sections: [
    {
      id: "7-1",
      title: "Provider / Model 三層",
      goal: "用 /connect 與 /models 看清商店與餐點；寫下你正在用的全名。",
      steps: [
        {
          type: "text",
          title: "商店、餐點、自家廚房",
          body: [
            "Provider＝商店，Model＝餐點，本地＝自家廚房。OpenCode 常用 provider/model 全名。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：寫下你的大腦名片",
          body: [
            "打開 OpenCode 操作。"
          ],
          tasks: [
            {
              id: "m1",
              do: "執行 /connect，確認至少一個供應商可用（已連過可檢查狀態）。",
              expect: "供應商顯示已連線。",
              command: "/connect"
            },
            {
              id: "m2",
              do: "執行 /models，選一顆，把完整 id 抄下來。",
              expect: "你看得到類似 provider/model 的字串。",
              command: "/models"
            },
            {
              id: "m3",
              do: "建立 MODEL-CARD.md 填空。",
              expect: "檔案含 Provider、Model、付費方式、隱私備註。",
              command: "cat > MODEL-CARD.md << 'EOF'\n# 我的模型名片\n- Provider：\n- Model 全名（provider/model）：\n- 來源：雲端 API / 訂閱 / 免費額度 / 本地\n- 適合：小任務或重任務？\n- 注意：額度、帳單、資料是否出門\nEOF"
            },
            {
              id: "m4",
              do: "把真實值填進名片。",
              expect: "沒有空白關鍵欄位。"
            }
          ],
          goal: "MODEL-CARD.md 記好你的 provider/model。"
        },
        {
          type: "choose",
          title: "本地模型？",
          prompt: "本地模型較接近？",
          options: [
            {
              id: "a",
              label: "在自己機器跑，資料較少送雲",
              correct: true,
              feedback: "對。強弱仍看模型與硬體。"
            },
            {
              id: "b",
              label: "一定比較笨",
              correct: false,
              feedback: "不一定。"
            },
            {
              id: "c",
              label: "不能寫程式",
              correct: false,
              feedback: "很多也能寫。"
            }
          ]
        }
      ]
    },
    {
      id: "7-2",
      title: "免費、訂閱、API 與常見方案",
      goal: "辨認你的付費路徑，並寫下用量警戒線。",
      steps: [
        {
          type: "text",
          title: "試吃、月票、按量",
          body: [
            "免費額度適合摸索；訂閱像月票（例如 Go 這類方案概念）；API／儲值按量（例如 Zen 概念）。名稱與條款以官方為準。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：帳單與警戒線",
          body: [
            "更新 MODEL-CARD.md。"
          ],
          tasks: [
            {
              id: "b1",
              do: "在名片加上：目前方案＝免費／訂閱／API／不清楚。",
              expect: "有標記。"
            },
            {
              id: "b2",
              do: "加上警戒線：例如「正式作業截止前兩天改用穩定方案」。",
              expect: "有一句警戒策略。"
            },
            {
              id: "b3",
              do: "請 OpenCode 用你的名片，建議「練習小任務」該用哪類模型（便宜／快速）。",
              expect: "它給出合理建議。",
              command: "請讀 MODEL-CARD.md，建議我練習「改 README 一行」該用什麼等級的模型，並說明原因。先不要改檔。"
            }
          ],
          goal: "你知道沒額度時怎麼辦。"
        }
      ]
    },
    {
      id: "7-3",
      title: "依任務選模型",
      goal: "同一件小事用較便宜／較快模型跑完，對照體感。",
      steps: [
        {
          type: "text",
          title: "選交通工具",
          body: [
            "改錯字不必開賽車。先小任務練選型。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：小任務換便宜腦",
          body: [
            "真的切換模型做一次。"
          ],
          tasks: [
            {
              id: "t1",
              do: "用 /models 選一顆你認為較便宜或較快的模型。",
              expect: "狀態列已切換。",
              command: "/models"
            },
            {
              id: "t2",
              do: "請它只在 README 加一行「練習：選模型」——或只提議 diff 先問你。",
              expect: "完成小改動或清晰 diff。",
              command: "請只在 README.md 最下面加一行：練習：選模型。不要改其他檔。"
            },
            {
              id: "t3",
              do: "再切回你平常的模型，問：什麼任務該用較強模型？",
              expect: "它列出例如複雜重構、難除錯等。",
              command: "什麼情況應該改用較強（較貴）的模型？給三個例子。"
            },
            {
              id: "t4",
              do: "把「小任務／大任務」對照表寫進 MODEL-CARD.md。",
              expect: "名片有對照。"
            }
          ],
          goal: "用較輕量模型完成一個小任務。"
        }
      ]
    },
    {
      id: "7-4",
      title: "風險：隱私、鎖廠商、帳單",
      goal: "用檢查清單審一次你的連線方式。",
      steps: [
        {
          type: "text",
          title: "方便常有代價",
          body: [
            "OAuth／雲端方便，但資料會出門；鎖廠商會讓搬家變痛；帳單要會看。"
          ]
        },
        {
          type: "lab",
          title: "實驗室：風險檢查",
          body: [
            "建立 RISK.md 並勾選。"
          ],
          tasks: [
            {
              id: "r1",
              do: "建立 RISK.md。",
              expect: "檔案存在。",
              command: "cat > RISK.md << 'EOF'\n# 模型風險自檢\n- [ ] 我知道資料是否送出到雲端\n- [ ] 練習檔不含密碼／個人隱私\n- [ ] 我知道如何撤銷金鑰／登出\n- [ ] 我有備用模型，不會單一鎖死\n- [ ] 我知道去哪裡看用量／帳單（或請大人看）\nEOF"
            },
            {
              id: "r2",
              do: "依真實情況勾選；勾不了的寫「要問大人」。",
              expect: "至少勾 3 項或註記。"
            },
            {
              id: "r3",
              do: "請 OpenCode 根據 RISK.md 問你 3 個澄清問題（用 question 風格），你回答。",
              expect: "對話中有問答。",
              command: "請讀 RISK.md，一次只問我一個問題，共問 3 題，幫我補完整風險意識。先不要改檔。"
            }
          ],
          goal: "書面風險意識。"
        }
      ]
    },
    {
      id: "7-5",
      title: "接入步驟總複習",
      goal: "從頭走一遍：/connect → /models → 小提示 → 寫進設定預設模型。",
      steps: [
        {
          type: "lab",
          title: "實驗室：接入跑道",
          body: [
            "當作教同學：自己再跑一輪。"
          ],
          tasks: [
            {
              id: "a1",
              do: "/connect 確認。",
              expect: "已連線。",
              command: "/connect"
            },
            {
              id: "a2",
              do: "/models 選定。",
              expect: "已選定。",
              command: "/models"
            },
            {
              id: "a3",
              do: "跑超小提示。",
              expect: "有短回覆。",
              command: "用一句話說明什麼是 Harness。"
            },
            {
              id: "a4",
              do: "（選擇）把預設 model 寫進 opencode.json。",
              expect: "設定檔 model 欄等於你的全名。",
              hint: "格式 provider/model；不確定就維持名片手寫即可。"
            }
          ],
          goal: "預設模型寫進 opencode.json（可選）且小提示成功。"
        }
      ]
    }
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
