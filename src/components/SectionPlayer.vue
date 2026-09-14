<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import StepCard from './StepCard.vue'
import ProgressBar from './ProgressBar.vue'
import { useProgress } from '../composables/useProgress'

const props = defineProps({
  chapter: { type: Object, required: true },
  section: { type: Object, required: true },
})

const router = useRouter()
const { sectionStatus, saveSectionStep, markSectionComplete, nextLocation } = useProgress()
const index = ref(0)

const steps = computed(() => props.section.steps)
const step = computed(() => steps.value[index.value])
const percent = computed(() => ((index.value + 1) / steps.value.length) * 100)
const isLast = computed(() => index.value === steps.value.length - 1)

watch(
  () => props.section.id,
  (sid) => {
    const saved = sectionStatus(sid)
    index.value = Math.min(saved.stepIndex || 0, steps.value.length - 1)
  },
  { immediate: true },
)

watch(index, (val) => {
  saveSectionStep(props.section.id, val, steps.value.length)
})

function back() {
  if (index.value > 0) index.value -= 1
}

function next() {
  if (!isLast.value) {
    index.value += 1
    return
  }
  markSectionComplete(props.section.id, index.value)
  router.push(nextLocation(props.chapter.id, props.section.id))
}

function onKey(e) {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') back()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div>
    <ProgressBar :value="percent" :label="`這個單元第 ${index + 1} / ${steps.length} 步`" />
    <div style="height: 14px" />
    <StepCard :step="step" :key="section.id + '-' + index" />
    <div class="nav-row">
      <button class="btn ghost" type="button" :disabled="index === 0" @click="back">上一頁</button>
      <button class="btn accent" type="button" @click="next">
        {{ isLast ? '完成單元' : '下一頁' }}
      </button>
    </div>
    <p class="tiny muted" style="margin-top:12px">鍵盤左右鍵也可以翻頁。進度會自動存在瀏覽器。</p>
  </div>
</template>
