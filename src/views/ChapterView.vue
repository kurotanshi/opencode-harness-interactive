<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getChapter, chapterDependsLabels } from '../data/course'
import { useProgress } from '../composables/useProgress'
import ProgressBar from '../components/ProgressBar.vue'

const route = useRoute()
const chapter = computed(() => getChapter(route.params.cid))
const { chapterProgress, sectionStatus, quizStatus } = useProgress()
const progress = computed(() => (chapter.value ? chapterProgress(chapter.value.id) : { percent: 0, requiredPercent: 0 }))
const depLabels = computed(() => (chapter.value ? chapterDependsLabels(chapter.value) : []))

function trackLabel(sec) {
  return sec.track === 'optional' ? '選做' : '必做'
}
</script>

<template>
  <div v-if="chapter">
    <nav class="crumbs">
      <router-link to="/">課程地圖</router-link>
      <span>/</span>
      <span>第 {{ chapter.number }} 章</span>
    </nav>
    <p class="page-kicker">第 {{ chapter.number }} 章</p>
    <h2 class="page-title">{{ chapter.title }}</h2>
    <div class="meta-row">
      <span v-if="chapter.minutes" class="pill time">約 {{ chapter.minutes }} 分</span>
      <span v-for="lab in depLabels" :key="lab" class="pill dep">建議先完成{{ lab }}</span>
    </div>
    <p class="lede">{{ chapter.intro }}</p>

    <aside class="outcome-banner" aria-label="本章成果">
      <div class="outcome-kicker">完成本章你會做出／做到</div>
      <p class="outcome-text">{{ chapter.outcome }}</p>
      <p v-if="chapter.youNeed" class="you-need"><strong>你需要：</strong>{{ chapter.youNeed }}</p>
    </aside>

    <div style="margin: 18px 0 22px; display:grid; gap:10px">
      <ProgressBar :value="progress.requiredPercent ?? progress.percent" label="必做進度" />
      <ProgressBar :value="progress.percent" label="本章整體（含選做）" />
    </div>
    <div class="grid">
      <router-link
        v-for="sec in chapter.sections"
        :key="sec.id"
        class="card"
        :to="{ name: 'section', params: { cid: chapter.id, sid: sec.id } }"
        style="padding: 16px 18px; display:block"
      >
        <div style="display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap">
          <strong>{{ sec.id }} {{ sec.title }}</strong>
          <span style="display:flex; gap:6px; flex-wrap:wrap">
            <span class="pill" :class="sec.track === 'optional' ? 'optional' : 'required'">{{ trackLabel(sec) }}</span>
            <span class="pill" :class="{ done: sectionStatus(sec.id).completed }">
              {{ sectionStatus(sec.id).completed ? '完成' : '開始' }}
            </span>
          </span>
        </div>
        <p class="muted" style="margin:8px 0 0">{{ sec.goal }}</p>
      </router-link>
      <router-link
        class="card"
        :to="{ name: 'quiz', params: { cid: chapter.id } }"
        style="padding: 16px 18px; display:block"
      >
        <div style="display:flex; justify-content:space-between; gap:8px">
          <strong>章節關卡測驗</strong>
          <span class="pill quiz">{{ quizStatus(chapter.id).completed ? '已過關' : '3–4 題' }}</span>
        </div>
        <p class="muted" style="margin:8px 0 0">題目會問你剛剛動手做過的檔案與指令，不是空背名詞。</p>
      </router-link>
    </div>
  </div>
  <p v-else>找不到這一章。</p>
</template>
