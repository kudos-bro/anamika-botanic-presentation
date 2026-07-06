<!-- Decorative freesia creeper: arching stem + leaves + soft blossoms.
     Position with utility classes (.deco-tr / .deco-bl …) via `class`. -->
<script setup>
defineProps({
  size: { type: [Number, String], default: 220 },
  opacity: { type: [Number, String], default: 0.9 },
  flip: { type: Boolean, default: false },
})
// blossoms placed along the stem: [x, y, scale, petalColor]
const blooms = [
  [190, 24, 1.0, '#EFCF7E'],
  [158, 54, 0.78, '#F6E6AE'],
  [126, 88, 0.95, '#E6AE82'],
  [92, 122, 0.72, '#EFCF7E'],
  [60, 156, 0.86, '#F6E6AE'],
]
const petals = [0, 72, 144, 216, 288]
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 200 200"
    :style="{ opacity, transform: flip ? 'scaleX(-1)' : 'none' }"
    class="pointer-events-none select-none">
    <path d="M18,190 C58,150 100,118 192,20" fill="none" stroke="#8aa46a"
      stroke-width="2.6" stroke-linecap="round" />
    <g fill="#93ac70">
      <ellipse cx="42" cy="168" rx="13" ry="5.5" transform="rotate(-38 42 168)" />
      <ellipse cx="72" cy="140" rx="13" ry="5.5" transform="rotate(-44 72 140)" />
      <ellipse cx="104" cy="108" rx="12" ry="5" transform="rotate(-48 104 108)" />
      <ellipse cx="138" cy="72" rx="11" ry="5" transform="rotate(-52 138 72)" />
      <ellipse cx="166" cy="46" rx="9.5" ry="4.5" transform="rotate(-55 166 46)" />
    </g>
    <g v-for="(b, i) in blooms" :key="i" :transform="`translate(${b[0]},${b[1]}) scale(${b[2]})`">
      <g :fill="b[3]">
        <ellipse v-for="r in petals" :key="r" cx="0" cy="-6.6" rx="3.6" ry="6.6" :transform="`rotate(${r})`" />
      </g>
      <circle r="3" fill="#DFA23F" />
    </g>
  </svg>
</template>
