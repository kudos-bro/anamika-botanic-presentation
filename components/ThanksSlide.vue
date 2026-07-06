<!-- Slide 14 · Conclusion / Thanks -->
<template>
  <div class="thanks">
    <div class="th-bg"><img :src="'/img/group-lawn-tree.jpg'" alt="" /></div>
    <Vine class="th-s1" :size="280" :opacity="0.32" flip />
    <Vine class="th-s2" :size="240" :opacity="0.32" />

    <div class="th-inner">
      <div class="eyebrow th-eye a-up" style="animation-delay:120ms">CONCLUSION &amp; THANKS</div>
      <h1 class="th-big bn a-pop" style="animation-delay:250ms">ধন্যবাদ</h1>
      <p class="th-line bn a-up" style="animation-delay:450ms">
        বাস্তব অভিজ্ঞতা তাত্ত্বিক জ্ঞানকে সমৃদ্ধ করে — এই শিক্ষা সফর আমাদের
        গবেষণামুখী শিক্ষা ও উদ্ভাবনের পথে অনুপ্রেরণা হয়ে থাকবে।
      </p>
      <div class="th-qa bn a-up" style="animation-delay:600ms">
        আপনাদের কোনো প্রশ্ন বা জিজ্ঞাসা থাকলে করতে পারেন।
      </div>
      <div class="th-badge a-in" style="animation-delay:780ms">
        <span class="dot" /> গ্রুপ <b>ফ্রিসিয়া</b> · Freesia &nbsp;·&nbsp; উদ্ভিদবিজ্ঞান বিভাগ, সরকারি তোলারাম কলেজ
      </div>
    </div>
  </div>
</template>

<style scoped>
.thanks{position:absolute;inset:0;overflow:hidden;display:flex;align-items:center;justify-content:center;
  background:radial-gradient(90% 90% at 50% 30%, #FBFBF4, rgba(251,251,244,0) 70%), var(--cream);}
.th-bg{position:absolute;inset:0;}
.th-bg img{width:100%;height:100%;object-fit:cover;opacity:.12;filter:saturate(.9);}
.th-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg, var(--cream), rgba(245,244,236,.4));}
.th-inner{position:relative;z-index:3;text-align:center;max-width:760px;padding:0 30px;}
.th-eye{justify-content:center;}
.th-eye::before{display:none;}
.th-big{font-size:82px;font-weight:700;color:var(--green-deep);line-height:1;margin:10px 0 0;}
.th-line{margin:20px auto 0;font-size:18px;color:var(--ink-soft);line-height:1.6;max-width:34ch;}
.th-qa{margin-top:16px;font-size:15px;color:var(--green-mid);font-weight:600;}
.th-badge{margin-top:30px;display:inline-flex;align-items:center;gap:9px;font-family:var(--font-bn);
  font-size:14.5px;color:var(--ink);font-weight:600;padding:10px 20px;border-radius:999px;
  background:rgba(255,255,255,.7);border:1px solid var(--line);box-shadow:0 6px 18px rgba(60,75,44,.08);}
.th-badge b{color:var(--green-mid);}
.th-badge .dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 0 3px rgba(124,155,87,.18);}
.th-s1{position:absolute;top:-20px;left:-10px;z-index:2;}
.th-s2{position:absolute;bottom:-20px;right:-6px;z-index:2;}
</style>
