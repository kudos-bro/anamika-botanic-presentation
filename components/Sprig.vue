<!-- Decorative freesia / leaf sprig. Position with utility classes via `class`. -->
<script setup>
defineProps({
  size: { type: [Number, String], default: 240 },
  opacity: { type: [Number, String], default: 0.16 },
  flip: { type: Boolean, default: false },
  color: { type: String, default: '#8aa46a' },
})
</script>

<template>
  <svg
    :width="size" :height="size" viewBox="0 0 200 200"
    :style="{ opacity, transform: flip ? 'scaleX(-1)' : 'none' }"
    class="pointer-events-none select-none"
  >
    <path d="M18,182 C58,142 100,120 184,26" fill="none" :stroke="color"
      stroke-width="3.2" stroke-linecap="round" />
    <g :fill="color">
      <ellipse cx="52" cy="152" rx="17" ry="7" transform="rotate(-35 52 152)" />
      <ellipse cx="78" cy="128" rx="18" ry="7.5" transform="rotate(-42 78 128)" />
      <ellipse cx="106" cy="102" rx="18" ry="7.5" transform="rotate(-46 106 102)" />
      <ellipse cx="134" cy="74" rx="16.5" ry="7" transform="rotate(-50 134 74)" />
      <ellipse cx="160" cy="48" rx="15" ry="6.5" transform="rotate(-53 160 48)" />
      <circle cx="184" cy="26" r="6.5" />
      <circle cx="196" cy="40" r="4.2" />
      <circle cx="172" cy="16" r="4.2" />
    </g>
  </svg>
</template>
