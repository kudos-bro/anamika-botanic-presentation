<!-- Animated numbered list: [{ n, h, d }] rows revealed with a stagger. -->
<script setup>
defineProps({
  items: { type: Array, default: () => [] },
  base: { type: Number, default: 200 },
  gap: { type: Number, default: 110 },
})
</script>

<template>
  <div class="steplist">
    <div v-for="(it, i) in items" :key="i" class="row a-right"
      :style="{ animationDelay: (base + i * gap) + 'ms' }">
      <div class="numdot">{{ it.n }}</div>
      <div class="rt">
        <div class="rh bn">{{ it.h }}</div>
        <div v-if="it.d" class="rd bn">{{ it.d }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steplist{display:flex;flex-direction:column;gap:20px;}
</style>
