<script setup>
import { computed } from 'vue'
import { useProgress } from './composables/useProgress'

const { overallPercent } = useProgress()
const dash = computed(() => 2 * Math.PI * 16)
const offset = computed(() => dash.value * (1 - overallPercent.value / 100))
</script>

<template>
  <div>
    <header class="topbar">
      <div class="topbar-inner">
        <router-link class="brand" to="/">
          <svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#1B1916" />
            <path d="M18 40c8-14 20-14 28 0" stroke="#F6F1E8" stroke-width="3.2" stroke-linecap="round" />
            <path d="M22 28c3-8 17-8 20 0" stroke="#2A9B86" stroke-width="3.2" stroke-linecap="round" />
            <circle cx="32" cy="22" r="4" fill="#E07A3D" />
          </svg>
          <div>
            <h1>駕馭工坊</h1>
            <p>OpenCode × Harness</p>
          </div>
        </router-link>
        <div class="topbar-spacer" />
        <svg class="ring" viewBox="0 0 42 42" role="img" :aria-label="`整體進度 ${overallPercent}%`">
          <circle cx="21" cy="21" r="16" fill="none" stroke="#d8cebd" stroke-width="4" />
          <circle
            cx="21"
            cy="21"
            r="16"
            fill="none"
            stroke="#0f6e62"
            stroke-width="4"
            stroke-linecap="round"
            :stroke-dasharray="dash"
            :stroke-dashoffset="offset"
            transform="rotate(-90 21 21)"
          />
          <text x="21" y="25" text-anchor="middle">{{ overallPercent }}%</text>
        </svg>
      </div>
    </header>
    <main class="shell">
      <router-view />
    </main>
  </div>
</template>
