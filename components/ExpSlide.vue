<!-- Slide 13 · Our experience -->
<script setup>
const takeaways = [
  { h: 'আধুনিক গবেষণাগার পরিবেশ', d: 'বিশ্বমানের ল্যাব সরেজমিনে দেখা' },
  { h: 'ল্যাব সেফটি ও শৃঙ্খলা', d: 'নিরাপদ কর্মপদ্ধতির চর্চা' },
  { h: 'বাস্তব অভিজ্ঞতা', d: 'তত্ত্বের জীবন্ত প্রয়োগ' },
  { h: 'দলগত মেধার সুযোগ', d: 'একসাথে শেখা ও উপস্থাপন' },
]
</script>

<template>
  <div class="frame exp">
    <Vine class="deco deco-bl" :size="182" :opacity="0.24" flip />
    <div class="exp-left">
      <div class="a-down">
        <div class="eyebrow">OUR EXPERIENCE · অভিজ্ঞতা</div>
        <h1 class="headline sm bn">আমাদের অভিজ্ঞতা</h1>
        <div class="rule" />
      </div>
      <div class="takeaways">
        <div v-for="(t, i) in takeaways" :key="i" class="tk card a-up"
          :style="{ animationDelay: (220 + i * 110) + 'ms' }">
          <span class="tk-ic">✦</span>
          <div>
            <div class="tk-h bn">{{ t.h }}</div>
            <div class="tk-d bn">{{ t.d }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="exp-photos">
      <div class="photo tag a-zoom" style="animation-delay:200ms">
        <img :src="'/img/group-dept-building.jpg'" alt="Team at the department building" style="object-position:center 42%" />
      </div>
      <div class="photo tag a-zoom" style="animation-delay:360ms">
        <img :src="'/img/group-lawn-tree.jpg'" alt="Group on lawn" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.exp{flex-direction:row;gap:44px;}
.exp-left{flex:1;display:flex;flex-direction:column;}
.takeaways{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:26px;}
.tk{display:flex;gap:13px;align-items:flex-start;padding:16px 18px;}
.tk-ic{color:var(--green);font-size:18px;margin-top:1px;}
.tk-h{font-weight:700;font-size:16.5px;color:var(--ink);line-height:1.2;}
.tk-d{font-size:13px;color:var(--ink-soft);margin-top:3px;}
.exp-photos{flex:0 0 340px;display:flex;flex-direction:column;gap:16px;}
.exp-photos .photo{flex:1;}
</style>
