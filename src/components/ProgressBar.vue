<script setup>
defineProps({
  value: { type: Number, required: true },
  label: { type: String, default: '' },
})
</script>

<template>
  <div>
    <div class="section-nav" v-if="label">
      <span>{{ label }}</span>
      <span>{{ Math.round(value) }}%</span>
    </div>
    <div class="progress-track" role="progressbar" :aria-valuenow="Math.round(value)" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-fill" :style="{ width: Math.min(100, Math.max(0, value)) + '%' }" />
    </div>
  </div>
</template>
