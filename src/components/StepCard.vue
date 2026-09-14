<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  step: { type: Object, required: true },
})

const openCards = ref({})
const picked = ref(null)
const checks = ref({})

watch(
  () => props.step,
  () => {
    openCards.value = {}
    picked.value = null
    checks.value = {}
  },
)

function toggleCard(i) {
  openCards.value[i] = !openCards.value[i]
}

function pick(opt) {
  picked.value = opt
}

function toggleCheck(id) {
  checks.value[id] = !checks.value[id]
}

const allChecked = () => (props.step.items || []).every((it) => checks.value[it.id])
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

    <p v-if="step.note" class="note">{{ step.note }}</p>
  </article>
</template>
