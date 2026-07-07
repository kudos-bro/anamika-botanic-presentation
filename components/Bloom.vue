<!-- Decorative freesia spray: a curved stem with blade leaves at the base and a
     cluster of open blossoms + buds toward the tip. A distinct silhouette from
     the long creeper in Vine.vue. Position with .deco-* utility classes. -->
<script setup>
defineProps({
  size: { type: [Number, String], default: 200 },
  opacity: { type: [Number, String], default: 0.9 },
  flip: { type: Boolean, default: false },
})
const petals = [0, 72, 144, 216, 288]
// open flowers clustered at the tip: [x, y, scale, color]
const flowers = [
  [150, 46, 1.08, '#EFCF7E'],
  [124, 62, 0.86, '#E6AE82'],
  [168, 72, 0.8, '#F6E6AE'],
]
// buds along the upper stem: [x, y, color]
const buds = [
  [112, 84, '#EFCF7E'],
  [134, 100, '#E6AE82'],
  [96, 106, '#F1D385'],
]
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 200 200"
    :style="{ opacity, transform: flip ? 'scaleX(-1)' : 'none' }"
    class="pointer-events-none select-none">
    <!-- stem -->
    <path d="M46,188 C72,144 110,92 152,46" fill="none" stroke="#8aa46a"
      stroke-width="2.8" stroke-linecap="round" />
    <!-- blade leaves at the base -->
    <g fill="#93ac70">
      <path d="M40,188 C30,152 36,120 56,100 C46,132 44,160 42,188 Z" />
      <path d="M62,190 C66,158 78,132 98,114 C78,142 70,166 64,190 Z" />
    </g>
    <!-- buds -->
    <g>
      <ellipse v-for="(b, i) in buds" :key="'b' + i" :cx="b[0]" :cy="b[1]" rx="4" ry="8.5"
        :fill="b[2]" :transform="`rotate(-32 ${b[0]} ${b[1]})`" />
    </g>
    <!-- open blossoms -->
    <g v-for="(f, i) in flowers" :key="'f' + i" :transform="`translate(${f[0]},${f[1]}) scale(${f[2]})`">
      <g :fill="f[3]">
        <ellipse v-for="r in petals" :key="r" cx="0" cy="-7" rx="4" ry="7" :transform="`rotate(${r})`" />
      </g>
      <circle r="3.2" fill="#DFA23F" />
    </g>
  </svg>
</template>
