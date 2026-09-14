<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getChapter } from '../data/course'
import { useProgress } from '../composables/useProgress'
import ProgressBar from '../components/ProgressBar.vue'

const route = useRoute()
const chapter = computed(() => getChapter(route.params.cid))
const { chapterProgress, sectionStatus, quizStatus } = useProgress()
const progress = computed(() => (chapter.value ? chapterProgress(chapter.value.id) : { percent: 0 }))
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
    <p class="lede">{{ chapter.intro }}</p>
    <div style="margin: 18px 0 22px">
      <ProgressBar :value="progress.percent" label="本章進度" />
    </div>
    <div class="grid">
      <router-link
        v-for="sec in chapter.sections"
        :key="sec.id"
        class="card"
        :to="{ name: 'section', params: { cid: chapter.id, sid: sec.id } }"
        style="padding: 16px 18px; display:block"
      >
        <div style="display:flex; justify-content:space-between; gap:8px">
          <strong>{{ sec.id }} {{ sec.title }}</strong>
          <span class="pill" :class="{ done: sectionStatus(sec.id).completed }">
            {{ sectionStatus(sec.id).completed ? '完成' : '開始' }}
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
          <span class="pill quiz">{{ quizStatus(chapter.id).completed ? '已過關' : '2–4 題' }}</span>
        </div>
        <p class="muted" style="margin:8px 0 0">用幾道溫柔的題目，檢查這章有沒有抓住重點。</p>
      </router-link>
    </div>
  </div>
  <p v-else>找不到這一章。</p>
</template>
