<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getChapter, getSectionInChapter } from '../data/course'
import SectionPlayer from '../components/SectionPlayer.vue'

const route = useRoute()
const chapter = computed(() => getChapter(route.params.cid))
const section = computed(() => getSectionInChapter(route.params.cid, route.params.sid))
</script>

<template>
  <div v-if="chapter && section">
    <nav class="crumbs">
      <router-link to="/">課程地圖</router-link>
      <span>/</span>
      <router-link :to="{ name: 'chapter', params: { cid: chapter.id } }">第 {{ chapter.number }} 章</router-link>
      <span>/</span>
      <span>{{ section.id }}</span>
    </nav>
    <p class="page-kicker">{{ section.id }}</p>
    <h2 class="page-title">{{ section.title }}</h2>
    <div class="meta-row">
      <span class="pill" :class="section.track === 'optional' ? 'optional' : 'required'">
        {{ section.track === 'optional' ? '選做' : '必做' }}
      </span>
    </div>
    <p class="lede">{{ section.goal }}</p>
    <aside v-if="chapter.outcome" class="outcome-banner compact">
      <div class="outcome-kicker">本章成果提醒</div>
      <p class="outcome-text">{{ chapter.outcome }}</p>
    </aside>
    <div style="height: 8px" />
    <SectionPlayer :chapter="chapter" :section="section" />
  </div>
  <p v-else>找不到這個單元。</p>
</template>
