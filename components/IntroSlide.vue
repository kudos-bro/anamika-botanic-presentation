<!-- Slide 5 · Introduction to Biotechnology -->
<script setup>
const branches = ['Medical', 'Agricultural', 'Environmental', 'Industrial']
</script>

<template>
  <div class="frame intro">
    <Vine class="deco deco-tr" :size="166" :opacity="0.2" />
    <Bloom class="deco deco-br" :size="182" :opacity="0.24" flip />
    <div class="intro-photo photo tag a-left" style="animation-delay:120ms">
      <img :src="$img('/img/gus-transgenic-cultures.jpg')" alt="Transgenic cultures" />
      <div class="cap bn">GUS ট্রান্সজেনিক কালচার</div>
    </div>
    <div class="intro-right">
      <div class="a-down">
        <div class="eyebrow">INTRODUCTION TO BIOTECHNOLOGY</div>
        <h1 class="headline sm bn">বায়োটেকনোলজি পরিচিতি</h1>
        <div class="rule" />
      </div>
      <p class="intro-def bn a-up" style="animation-delay:220ms">
        জীবন্ত কোষ, অণুজীব, টিস্যু বা তাদের জৈব উপাদান কাজে লাগিয়ে মানুষের কল্যাণে
        <b>নতুন প্রযুক্তি, পণ্য ও সেবা</b> উদ্ভাবনের বিজ্ঞান।
      </p>
      <div class="branches">
        <div v-for="(b, i) in branches" :key="b" class="branch a-pop"
          :style="{ animationDelay: (400 + i * 100) + 'ms' }">
          <span class="bnum">{{ i + 1 }}</span>
          <span class="btxt">{{ b }}<em> Biotechnology</em></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro{flex-direction:row;gap:48px;align-items:center;}
.intro-photo{flex:0 0 360px;height:400px;}
.intro-right{flex:1;}
.intro-def{margin-top:22px;font-size:18px;line-height:1.6;color:var(--ink);max-width:40ch;}
.intro-def b{color:var(--green-mid);}
.branches{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:26px;}
.branch{display:flex;align-items:center;gap:12px;padding:13px 16px;border-radius:13px;
  background:var(--paper);border:1px solid var(--line);box-shadow:0 4px 12px rgba(60,75,44,.06);}
.bnum{width:26px;height:26px;border-radius:8px;background:rgba(124,155,87,.16);color:var(--green-mid);
  font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;flex:0 0 auto;}
.btxt{font-size:16px;font-weight:700;color:var(--ink);}
.btxt em{font-style:normal;font-weight:500;color:var(--ink-soft);font-size:13.5px;}
</style>
