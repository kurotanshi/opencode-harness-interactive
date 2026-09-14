import { computed, reactive } from 'vue'
import { course, getChapter, getSection } from '../data/course'

const STORAGE_KEY = 'opencode-harness-progress-v1'

function emptyState() {
  return {
    sections: {},
    quizzes: {},
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyState()
    const parsed = JSON.parse(raw)
    return {
      sections: parsed.sections && typeof parsed.sections === 'object' ? parsed.sections : {},
      quizzes: parsed.quizzes && typeof parsed.quizzes === 'object' ? parsed.quizzes : {},
    }
  } catch {
    return emptyState()
  }
}

const state = reactive(load())

function persist() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      sections: state.sections,
      quizzes: state.quizzes,
    }),
  )
}

function isRequiredSection(sec) {
  return sec.track !== 'optional'
}

export function useProgress() {
  const allSections = computed(() => course.chapters.flatMap((ch) => ch.sections))
  const requiredSections = computed(() => allSections.value.filter(isRequiredSection))

  const totalSections = computed(() => allSections.value.length)
  const totalRequiredSections = computed(() => requiredSections.value.length)
  const totalQuizzes = computed(() => course.chapters.length)

  const completedSections = computed(
    () => Object.values(state.sections).filter((s) => s.completed).length,
  )
  const completedRequiredSections = computed(
    () =>
      requiredSections.value.filter((sec) => state.sections[sec.id]?.completed).length,
  )
  const completedQuizzes = computed(
    () => Object.values(state.quizzes).filter((q) => q.completed).length,
  )

  const overallPercent = computed(() => {
    const total = totalSections.value + totalQuizzes.value
    if (!total) return 0
    return Math.round(((completedSections.value + completedQuizzes.value) / total) * 100)
  })

  const requiredPercent = computed(() => {
    const total = totalRequiredSections.value + totalQuizzes.value
    if (!total) return 0
    return Math.round(
      ((completedRequiredSections.value + completedQuizzes.value) / total) * 100,
    )
  })

  function sectionStatus(sid) {
    return state.sections[sid] || { stepIndex: 0, completed: false }
  }

  function quizStatus(cid) {
    return state.quizzes[cid] || { completed: false, score: 0, total: 0 }
  }

  function saveSectionStep(sid, stepIndex, totalSteps) {
    const prev = sectionStatus(sid)
    const completed = prev.completed || stepIndex >= totalSteps - 1
    state.sections[sid] = {
      stepIndex,
      completed,
    }
    persist()
  }

  function markSectionComplete(sid, lastIndex) {
    state.sections[sid] = {
      stepIndex: lastIndex,
      completed: true,
    }
    persist()
  }

  function saveQuiz(cid, score, total) {
    state.quizzes[cid] = {
      completed: true,
      score,
      total,
    }
    persist()
  }

  function chapterProgress(cid) {
    const ch = getChapter(cid)
    if (!ch) return { done: 0, total: 0, percent: 0, requiredPercent: 0, quizDone: false }
    const done = ch.sections.filter((s) => sectionStatus(s.id).completed).length
    const reqSecs = ch.sections.filter(isRequiredSection)
    const reqDone = reqSecs.filter((s) => sectionStatus(s.id).completed).length
    const quizDone = Boolean(quizStatus(cid).completed)
    const total = ch.sections.length + 1
    const percent = Math.round(((done + (quizDone ? 1 : 0)) / total) * 100)
    const reqTotal = reqSecs.length + 1
    const requiredPercent = Math.round(((reqDone + (quizDone ? 1 : 0)) / reqTotal) * 100)
    return { done, total: ch.sections.length, percent, requiredPercent, quizDone }
  }

  function isSectionUnlocked(cid, sid) {
    const ch = getChapter(cid)
    if (!ch) return false
    const idx = ch.sections.findIndex((s) => s.id === sid)
    if (idx <= 0) return true
    return ch.sections.slice(0, idx).every((s) => sectionStatus(s.id).completed)
  }

  function nextLocation(cid, sid) {
    const ch = getChapter(cid)
    if (!ch) return { name: 'home' }
    const idx = ch.sections.findIndex((s) => s.id === sid)
    if (idx >= 0 && idx < ch.sections.length - 1) {
      return { name: 'section', params: { cid, sid: ch.sections[idx + 1].id } }
    }
    return { name: 'quiz', params: { cid } }
  }

  function resetAll() {
    state.sections = {}
    state.quizzes = {}
    persist()
  }

  function getSectionMeta(sid) {
    return getSection(sid)
  }

  return {
    state,
    totalSections,
    totalRequiredSections,
    totalQuizzes,
    completedSections,
    completedRequiredSections,
    completedQuizzes,
    overallPercent,
    requiredPercent,
    sectionStatus,
    quizStatus,
    saveSectionStep,
    markSectionComplete,
    saveQuiz,
    chapterProgress,
    isSectionUnlocked,
    nextLocation,
    resetAll,
    getSectionMeta,
  }
}
