import ch1 from './ch1.js'
import ch2 from './ch2.js'
import ch3 from './ch3.js'
import ch4 from './ch4.js'
import ch5 from './ch5.js'
import ch6 from './ch6.js'
import ch7 from './ch7.js'
import ch8 from './ch8.js'
import ch9 from './ch9.js'

export const course = {
  title: '駕馭工坊',
  subtitle: '動手跟著做的工坊：打開終端機／OpenCode，照步驟操作、勾選，再往下一步。',
  audience: '給大約 10 到 15 歲的同學。句子清楚、指令用「打開／貼上／按」；實驗室是主軸，概念文字只是輔助。',
  spine: {
    title: '貫穿全書的專案：harness-workshop',
    body: '從第 2 章起，請在家目錄建立並一直使用同一個資料夾 ~/harness-workshop（Windows：$HOME\\harness-workshop）。之後每一章的實驗室都會寫「回到你的 harness-workshop 專案」——AGENTS.md、浮水印練習、MCP／Skills、審計與 WorkDash（workdash/ 子資料夾）都長在這棵樹上，不要每章另開新教室。',
    pathUnix: '~/harness-workshop',
    pathWin: '$HOME\\harness-workshop',
  },
  footnote: '進度存在這台裝置的瀏覽器 localStorage，不會上傳。換瀏覽器或清資料就會重新開始。內容依 OpenCode 常見用法改寫，細節請以官方文件為準。標「選做」的單元可先跳過，必做進度仍可往前。',
  chapters: [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9],
}

export function getChapter(cid) {
  return course.chapters.find((ch) => ch.id === cid) || null
}

export function getSectionInChapter(cid, sid) {
  const ch = getChapter(cid)
  if (!ch) return null
  return ch.sections.find((s) => s.id === sid) || null
}

export function getSection(sid) {
  for (const ch of course.chapters) {
    const found = ch.sections.find((s) => s.id === sid)
    if (found) return { chapter: ch, section: found }
  }
  return null
}

export function chapterDependsLabels(ch) {
  if (!ch?.dependsOn?.length) return []
  return ch.dependsOn.map((id) => {
    const dep = getChapter(id)
    return dep ? `第 ${dep.number} 章` : id
  })
}
