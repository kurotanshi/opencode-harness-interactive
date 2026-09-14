<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  quiz: { type: Array, required: true },
  prior: { type: Object, default: null },
})
const emit = defineEmits(['done'])

const answers = ref({})
const submitted = ref(false)

const score = computed(() =>
  props.quiz.filter((q) => {
    const picked = answers.value[q.id]
    const opt = q.options.find((o) => o.id === picked)
    return opt?.correct
  }).length,
)

function pick(qid, oid) {
  if (submitted.value) return
  answers.value[qid] = oid
}

function submit() {
  if (Object.keys(answers.value).length < props.quiz.length) return
  submitted.value = true
  emit('done', { score: score.value, total: props.quiz.length })
}

function retry() {
  answers.value = {}
  submitted.value = false
}

function optionClass(q, opt) {
  const picked = answers.value[q.id] === opt.id
  if (!submitted.value) return picked ? 'picked' : ''
  if (opt.correct) return 'picked'
  if (picked && !opt.correct) return 'wrong'
  return ''
}
</script>

<template>
  <div class="quiz-card" style="padding: 22px">
    <div v-if="prior?.completed && !submitted" class="score-banner">
      你上次答對 {{ prior.score }}/{{ prior.total }}。想再練一次也可以。
    </div>
    <div v-if="submitted" class="score-banner">
      <strong>這次答對 {{ score }}/{{ quiz.length }}。</strong>
      <p style="margin: 6px 0 0">答錯沒關係。重點是看懂回饋，下次會更穩。</p>
    </div>

    <div v-for="q in quiz" :key="q.id" class="quiz-q">
      <h3>{{ q.question }}</h3>
      <div class="choice-grid">
        <button
          v-for="opt in q.options"
          :key="opt.id"
          class="choice"
          :class="optionClass(q, opt)"
          type="button"
          @click="pick(q.id, opt.id)"
        >
          {{ opt.label }}
        </button>
      </div>
      <div v-if="submitted" class="feedback" :class="{ nope: !q.options.find(o => o.id === answers[q.id])?.correct }">
        {{ (q.options.find(o => o.id === answers[q.id]) || q.options.find(o => o.correct)).feedback }}
      </div>
    </div>

    <div class="nav-row">
      <button v-if="!submitted" class="btn accent" type="button" :disabled="Object.keys(answers).length < quiz.length" @click="submit">
        送出答案
      </button>
      <button v-else class="btn ghost" type="button" @click="retry">再試一次</button>
    </div>
  </div>
</template>
