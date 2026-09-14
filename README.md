# 駕馭工坊 · OpenCode × Harness 互動課程

這是一套 OpenCode × Harness 互動課程互動教學網站。  
用短句子、生活比喻，帶你走完 OpenCode 與 Harness 的九章：從安裝、規則檔、Agent、MCP、模型，到真正「駕馭」而不是只會按按鈕。

網站是**單頁應用**（Vite + Vue 3 + Vue Router）。所有單元、步驟、關卡測驗都寫在 `src/data/`，畫面只負責播放內容與記住進度。

## 本機執行

需要 Node.js（建議 20 以上）。

```bash
npm install
npm run dev
```

瀏覽器打開終端機提示的網址（通常是 `http://localhost:5173`）。

建置正式檔：

```bash
npm run build
npm run preview
```

`npm run build` 會產出 `dist/`，可丟到任何靜態網站空間。

## GitHub Pages

線上預覽：<https://kurotanshi.github.io/opencode-harness-interactive/>

推送到 `main` 後，GitHub Actions 會建置並部署到 GitHub Pages。

## 進度怎麼運作

- 進度存在**這台裝置、這個瀏覽器**的 `localStorage`（鍵名：`opencode-harness-progress-v1`）。
- 包含：每個單元走到第幾步、是否完成、每章測驗分數。
- **不會上傳**到伺服器，也沒有登入。
- 換瀏覽器、無痕模式、或清除網站資料，進度會消失。
- 首頁有「重設進度」按鈕，可從頭再學。

## 你會學到什麼

1. OpenCode 入門：Harness 是什麼、安裝、第一個 Session  
2. PDF 浮水印導覽：AGENTS.md、CLAUDE.md、Plan / Build、`/undo` `/init`  
3. 操作與切換 Claude Code：Context、共用規則、單一可信來源  
4. Agent 與 Subagent：並行、獨立審查、專業團隊  
5. MCP 與 Skills：瀏覽器、Playwright、DeepWiki、CLI 技能卡  
6. `opencode.json`：權限、斜線指令、OpenPets / Telegram 插件概念  
7. 模型與方案：Provider、Go / Zen、風險與接入步驟  
8. Harness 思維：六層控制力、三個旋鈕、反模式  
9. WorkDash 實戰：問清楚需求、除錯、摘要與把流程走完  

## 專案結構

```
src/data/          九章內容與測驗
src/components/    CourseMap、SectionPlayer、StepCard、Quiz、ProgressBar
src/views/         首頁、章、單元、測驗
src/composables/   localStorage 進度
src/router/        /  /chapter/:cid  /chapter/:cid/section/:sid  /chapter/:cid/quiz
```

互動包含：揭曉卡片、單選題、比喻卡、檢查清單。章末有 2–4 題溫柔測驗。

## 授權與注意

教學文字為課程改寫，請以 [OpenCode 官方文件](https://opencode.ai) 為準。  
本站不處理真實 API 金鑰，也不鼓勵不安全的帳號共用。
