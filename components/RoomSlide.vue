<!-- Lab-room deep-dive: header + 2 stacked photos (left) + 6 numbered items (right).
     Everything animates in on slide enter (CSS keyframes). -->
<script setup>
import Vine from './Vine.vue'
import Bloom from './Bloom.vue'
defineProps({
  eyebrow: String,
  no: String,
  title: String,
  photos: { type: Array, default: () => [] }, // [{ src, cap }]
  items: { type: Array, default: () => [] },   // [{ n, h, d }]
  // floral corners: [{ c: 'deco-tr'|'deco-bl'|'deco-br'|'deco-tl', s: size, o: opacity, f: flip }]
  decos: { type: Array, default: () => [{ c: 'deco-tr', s: 190, o: 0.22 }] },
})
</script>

<template>
  <div class="frame room">
    <component :is="d.t === 'bloom' ? Bloom : Vine" v-for="(d, i) in decos" :key="i"
      :class="['deco', d.c]" :size="d.s" :opacity="d.o || 0.22" :flip="!!d.f" />
    <div class="ghostno a-in" style="animation-delay:250ms">{{ no }}</div>

    <!-- header -->
    <div class="a-down">
      <div class="eyebrow">{{ eyebrow }}</div>
      <div class="headline sm bn">{{ title }}</div>
      <div class="rule" />
    </div>

    <!-- body -->
    <div class="body">
      <div class="pcol">
        <div v-for="(p, i) in photos" :key="i" class="photo tag a-left"
          :style="{ animationDelay: (180 + i * 130) + 'ms' }">
          <img :src="$img(p.src)" :alt="p.cap" :style="{ objectPosition: p.pos || 'center' }" />
          <div v-if="p.cap" class="cap bn">{{ p.cap }}</div>
        </div>
      </div>

      <div class="igrid">
        <div v-for="(it, i) in items" :key="i" class="row a-up"
          :style="{ animationDelay: (300 + i * 85) + 'ms' }">
          <div class="numdot">{{ it.n }}</div>
          <div class="rt">
            <div class="rh bn">{{ it.h }}</div>
            <div class="rd bn">{{ it.d }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body{flex:1;display:flex;gap:40px;margin-top:22px;min-height:0;align-items:stretch;}
.pcol{flex:0 0 300px;display:flex;flex-direction:column;gap:16px;min-height:0;}
.pcol .photo{flex:1;min-height:0;}
.igrid{
  flex:1;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:min-content;
  gap:20px 34px;align-content:center;
}
.room .row .rh{font-size:17px;}
.room .row .rd{font-size:13.5px;}
</style>
