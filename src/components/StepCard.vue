<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  step: { type: Object, required: true },
})

const openCards = ref({})
const picked = ref(null)
const checks = ref({})
const labChecks = ref({})
const copiedId = ref(null)

watch(
  () => props.step,
  () => {
    openCards.value = {}
    picked.value = null
    checks.value = {}
    labChecks.value = {}
    copiedId.value = null
  },
)

const isLab = computed(() => props.step.type === 'lab' || props.step.type === 'try')

function toggleCard(i) {
  openCards.value[i] = !openCards.value[i]
}

function pick(opt) {
  picked.value = opt
}

function toggleCheck(id) {
  checks.value[id] = !checks.value[id]
}

function toggleLab(id) {
  labChecks.value[id] = !labChecks.value[id]
}

const allChecked = () => (props.step.items || []).every((it) => checks.value[it.id])

const allLabChecked = () => {
  const tasks = props.step.tasks || []
  return tasks.length > 0 && tasks.every((t) => labChecks.value[t.id])
}

async function copyCommand(text, id) {
  try {
    await navigator.clipboard.writeText(text)
    copiedId.value = id
    window.setTimeout(() => {
      if (copiedId.value === id) copiedId.value = null
    }, 1600)
  } catch {
    copiedId.value = null
  }
}
</script>

<template>
  <article class="step-card">
    <h2>{{ step.title }}</h2>
    <p v-for="(p, i) in step.body || []" :key="i">{{ p }}</p>

    <div v-if="step.type === 'metaphor'" class="metaphor">
      <div class="label">比喻卡</div>
      <h3>{{ step.metaphor.title }}</h3>
      <p>{{ step.metaphor.body }}</p>
    </div>

    <div v-if="step.type === 'reveal'" class="reveal-grid">
      <button
        v-for="(card, i) in step.cards"
        :key="i"
        class="flip"
        :class="{ open: openCards[i] }"
        type="button"
        @click="toggleCard(i)"
      >
        <div class="tag">{{ card.tag || '點我揭曉' }}</div>
        <h3>{{ card.title }}</h3>
        <p v-if="openCards[i]" class="hidden-body">{{ card.body }}</p>
        <p v-else class="hidden-body">點卡片看說明</p>
      </button>
    </div>

    <div v-if="step.type === 'choose'">
      <p v-if="step.prompt"><strong>{{ step.prompt }}</strong></p>
      <div class="choice-grid">
        <button
          v-for="opt in step.options"
          :key="opt.id"
          class="choice"
          :class="{
            picked: picked && picked.id === opt.id && opt.correct,
            wrong: picked && picked.id === opt.id && !opt.correct,
          }"
          type="button"
          @click="pick(opt)"
        >
          {{ opt.label }}
        </button>
      </div>
      <div v-if="picked" class="feedback" :class="{ nope: !picked.correct }">
        {{ picked.feedback }}
      </div>
    </div>

    <div v-if="step.type === 'checklist'" class="check-grid">
      <button
        v-for="item in step.items"
        :key="item.id"
        class="check-item"
        :class="{ on: checks[item.id] }"
        type="button"
        @click="toggleCheck(item.id)"
      >
        <span class="check-box">{{ checks[item.id] ? '✓' : '' }}</span>
        <span>
          {{ item.text }}
          <p v-if="checks[item.id] && item.hint" class="hint">{{ item.hint }}</p>
        </span>
      </button>
      <p v-if="allChecked()" class="tiny" style="color: var(--good)">清單都勾完了，很棒。可以按下一步。</p>
    </div>

    <div v-if="step.type === 'flow'" class="flow-grid">
      <div v-for="item in step.flow" :key="item.n" class="flow-item">
        <div class="flow-n">{{ item.n }}</div>
        <div>
          <strong>{{ item.title }}</strong>
          <p class="hint">{{ item.body }}</p>
        </div>
      </div>
    </div>

    <div v-if="isLab" class="lab">
      <div class="lab-badge">動手實驗室</div>
      <p v-if="step.goal" class="lab-goal"><strong>目標：</strong>{{ step.goal }}</p>
      <ol class="lab-tasks">
        <li
          v-for="(task, i) in step.tasks || []"
          :key="task.id"
          class="lab-task"
          :class="{ on: labChecks[task.id] }"
        >
          <button
            class="lab-check"
            type="button"
            :aria-pressed="!!labChecks[task.id]"
            :aria-label="'勾選任務 ' + (i + 1)"
            @click="toggleLab(task.id)"
          >
            <span class="check-box">{{ labChecks[task.id] ? '✓' : '' }}</span>
          </button>
          <div class="lab-main">
            <div class="lab-do">
              <span class="lab-num">{{ i + 1 }}</span>
              <span>{{ task.do }}</span>
            </div>
            <div v-if="task.command" class="lab-cmd">
              <pre class="lab-code"><code>{{ task.command }}</code></pre>
              <button
                class="copy-btn"
                type="button"
                @click="copyCommand(task.command, task.id)"
              >
                {{ copiedId === task.id ? '已複製' : '複製' }}
              </button>
            </div>
            <p v-if="task.expect" class="lab-expect"><span>預期看到</span>{{ task.expect }}</p>
            <p v-if="task.hint" class="lab-hint" :class="{ show: labChecks[task.id] }">
              <span>卡關提示</span>{{ task.hint }}
            </p>
          </div>
        </li>
      </ol>
      <p v-if="allLabChecked()" class="lab-success">全部任務勾完了，很棒！可以按下一步。</p>
    </div>

    <p v-if="step.note" class="note">{{ step.note }}</p>
  </article>
</template>
