<!-- Three application domains of biotechnology — medical / agriculture / environment. -->
<script setup>
const cards = [
  {
    kind: 'med', tint: '#C25B62', en: 'HEALTHCARE', title: 'চিকিৎসা',
    points: ['রোগ নির্ণয় — PCR প্রযুক্তি', 'ভ্যাকসিন ও ঔষধ উন্নয়ন'],
  },
  {
    kind: 'agri', tint: '#6E9153', en: 'AGRICULTURE', title: 'কৃষি',
    points: ['রোগমুক্ত ও উচ্চ ফলনশীল চারা উৎপাদন', 'খরা ও লবণাক্ততা সহনশীল জাত উন্নয়ন'],
  },
  {
    kind: 'env', tint: '#3E8E8A', en: 'ENVIRONMENT', title: 'পরিবেশ',
    points: ['দূষণ নিয়ন্ত্রণে অণুজীব — Bioremediation', 'জীববৈচিত্র্য সংরক্ষণ'],
  },
]
</script>

<template>
  <div class="apps">
    <div v-for="(c, i) in cards" :key="c.kind" class="acard card a-up"
      :style="{ animationDelay: (180 + i * 130) + 'ms' }">
      <div class="badge" :style="{ background: c.tint + '1f', color: c.tint, borderColor: c.tint + '44' }">
        <svg v-if="c.kind === 'med'" viewBox="0 0 24 24" width="30" height="30" fill="none" :stroke="c.tint" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12h4l2 5 3-11 2 6 2-1h5" />
        </svg>
        <svg v-else-if="c.kind === 'agri'" viewBox="0 0 24 24" width="30" height="30" fill="none" :stroke="c.tint" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 20C6 20 4 15 4 11c6 0 9 1 11 4" />
          <path d="M20 4C10 5 7 10 8 17" />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="30" height="30" fill="none" :stroke="c.tint" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
        </svg>
      </div>
      <div class="aen" :style="{ color: c.tint }">{{ c.en }}</div>
      <div class="atitle bn">{{ c.title }}</div>
      <div class="aline" :style="{ background: c.tint }" />
      <ul class="apts">
        <li v-for="(p, j) in c.points" :key="j" class="bn">
          <span class="tick" :style="{ color: c.tint }">◆</span>{{ p }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.apps{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;width:100%;margin-top:8px;}
.acard{padding:26px 24px 28px;display:flex;flex-direction:column;}
.badge{
  width:60px;height:60px;border-radius:16px;display:flex;align-items:center;justify-content:center;
  border:1px solid;margin-bottom:16px;
}
.aen{font-size:12px;font-weight:700;letter-spacing:.16em;}
.atitle{font-size:26px;font-weight:700;color:#26301C;margin-top:2px;line-height:1.1;}
.aline{width:40px;height:3.5px;border-radius:3px;margin:12px 0 16px;opacity:.9;}
.apts{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:11px;}
.apts li{display:flex;gap:9px;align-items:flex-start;font-size:15px;color:#4C5942;line-height:1.34;font-weight:500;}
.tick{font-size:9px;margin-top:5px;flex:0 0 auto;}
</style>
