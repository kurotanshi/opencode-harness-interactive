<script setup>
import { course } from '../data/course'
import { useProgress } from '../composables/useProgress'
import ProgressBar from './ProgressBar.vue'

const { chapterProgress, sectionStatus, quizStatus, overallPercent, completedSections, totalSections, completedQuizzes, totalQuizzes, resetAll } = useProgress()

function confirmReset() {
  if (window.confirm('要清除本機進度，從頭再學一次嗎？')) resetAll()
}
</script>

<template>
  <section>
    <p class="page-kicker">課程地圖</p>
    <h2 class="page-title">{{ course.title }}</h2>
    <p class="lede">{{ course.subtitle }} {{ course.audience }} 一次只走一小步，像學騎腳踏車：先握住把手，再學會轉彎。</p>
    <div class="home-actions">
      <span class="pill">單元 {{ completedSections }}/{{ totalSections }}</span>
      <span class="pill quiz">關卡 {{ completedQuizzes }}/{{ totalQuizzes }}</span>
      <button class="btn linkish" type="button" @click="confirmReset">重設進度</button>
    </div>
    <ProgressBar :value="overallPercent" label="整體進度（存在這台裝置的瀏覽器裡）" />

    <div class="chapters" style="margin-top: 22px">
      <article v-for="ch in course.chapters" :key="ch.id" class="chapter-card">
        <div style="display:flex; justify-content:space-between; gap:8px; align-items:center">
          <span class="ch-num">第 {{ ch.number }} 章</span>
          <span class="pill" :class="{ done: chapterProgress(ch.id).percent === 100 }">{{ chapterProgress(ch.id).percent }}%</span>
        </div>
        <h2>
          <router-link :to="{ name: 'chapter', params: { cid: ch.id } }">{{ ch.title }}</router-link>
        </h2>
        <p class="tagline">{{ ch.tagline }}</p>
        <ProgressBar :value="chapterProgress(ch.id).percent" />
        <ul class="section-list">
          <li v-for="sec in ch.sections" :key="sec.id">
            <router-link :to="{ name: 'section', params: { cid: ch.id, sid: sec.id } }">
              <span>{{ sec.id }} {{ sec.title }}</span>
              <span class="tiny" :class="{ muted: !sectionStatus(sec.id).completed }">{{ sectionStatus(sec.id).completed ? '完成' : '未完成' }}</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'quiz', params: { cid: ch.id } }">
              <span>章節關卡測驗</span>
              <span class="tiny" :class="{ muted: !quizStatus(ch.id).completed }">
                {{ quizStatus(ch.id).completed ? `已過關 ${quizStatus(ch.id).score}/${quizStatus(ch.id).total}` : '尚未挑戰' }}
              </span>
            </router-link>
          </li>
        </ul>
      </article>
    </div>
    <p class="footer-note">{{ course.footnote }}</p>
  </section>
</template>
