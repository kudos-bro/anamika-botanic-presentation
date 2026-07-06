<!-- Slide 6 · Lab overview / four-room map -->
<script setup>
const rooms = [
  { img: 'culture-bottles-bench', en: 'Preparation Room', bn: 'কালচার মিডিয়া ও রাসায়নিক প্রস্তুতি', no: '01', pos: 'center' },
  { img: 'guide-demonstrating-jar', en: 'Inoculation Room', bn: 'জীবাণুমুক্ত পরিবেশে টিস্যু স্থানান্তর', no: '02', pos: '52% 6%' },
  { img: 'culture-room-rack', en: 'Growth Room', bn: 'টিস্যু কালচারের চারা বৃদ্ধি', no: '03', pos: 'center' },
  { img: 'eq-pcr-thermalcycler', en: 'Molecular Lab', bn: 'DNA / RNA বিশ্লেষণ ও জীনগত গবেষণা', no: '04', pos: 'center' },
]
</script>

<template>
  <div class="frame lab">
    <Vine class="deco deco-tr" :size="180" :opacity="0.24" />
    <Vine class="deco deco-bl" :size="155" :opacity="0.2" flip />
    <div class="lab-head a-down">
      <div class="eyebrow">INSIDE THE LAB · চারটি রুম</div>
      <h1 class="headline sm bn">গবেষণাগারের সারসংক্ষেপ</h1>
      <div class="rule" />
    </div>
    <div class="rooms">
      <div v-for="(r, i) in rooms" :key="r.en" class="roomcard card a-up"
        :style="{ animationDelay: (180 + i * 120) + 'ms' }">
        <div class="rc-photo">
          <img :src="`/img/${r.img}.jpg`" :alt="r.en" :style="{ objectPosition: r.pos }" />
          <span class="rc-no">{{ r.no }}</span>
        </div>
        <div class="rc-body">
          <div class="rc-en">{{ r.en }}</div>
          <div class="rc-bn bn">{{ r.bn }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lab-head{margin-bottom:22px;}
.rooms{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;flex:1;align-content:center;}
.roomcard{overflow:hidden;display:flex;flex-direction:column;}
.rc-photo{position:relative;height:158px;overflow:hidden;background:#dfe6d5;}
.rc-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.rc-no{position:absolute;top:10px;left:10px;width:30px;height:30px;border-radius:9px;
  background:rgba(30,40,22,.5);color:#fff;font-weight:700;font-size:14px;
  display:flex;align-items:center;justify-content:center;backdrop-filter:blur(3px);}
.rc-body{padding:15px 16px 18px;}
.rc-en{font-size:16.5px;font-weight:700;color:var(--green-deep);}
.rc-bn{margin-top:5px;font-size:13.5px;color:var(--ink-soft);line-height:1.35;}
</style>
