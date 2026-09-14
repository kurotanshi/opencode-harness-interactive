<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getChapter } from '../data/course'
import Quiz from '../components/Quiz.vue'
import { useProgress } from '../composables/useProgress'

const route = useRoute()
const chapter = computed(() => getChapter(route.params.cid))
const { quizStatus, saveQuiz } = useProgress()

function onDone({ score, total }) {
  saveQuiz(chapter.value.id, score, total)
}
</script>

<template>
  <div v-if="chapter">
    <nav class="crumbs">
      <router-link to="/">課程地圖</router-link>
      <span>/</span>
      <router-link :to="{ name: 'chapter', params: { cid: chapter.id } }">第 {{ chapter.number }} 章</router-link>
      <span>/</span>
      <span>關卡測驗</span>
    </nav>
    <p class="page-kicker">第 {{ chapter.number }} 章關卡</p>
    <h2 class="page-title">{{ chapter.title }} · 小測驗</h2>
    <p class="lede">選一個你覺得最對的答案。錯了也會有溫柔說明，不會被罵。</p>
    <div style="height: 12px" />
    <Quiz :quiz="chapter.quiz" :prior="quizStatus(chapter.id)" @done="onDone" />
    <div class="nav-row">
      <router-link class="btn ghost" :to="{ name: 'chapter', params: { cid: chapter.id } }">回本章目錄</router-link>
      <router-link class="btn" to="/">回課程地圖</router-link>
    </div>
  </div>
  <p v-else>找不到這一章。</p>
</template>
