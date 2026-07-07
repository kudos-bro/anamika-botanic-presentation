<!-- Slide 1 · Cover -->
<template>
  <div class="cover">
    <Vine class="cov-s1" :size="320" :opacity="0.3" flip />
    <Vine class="cov-s2" :size="250" :opacity="0.26" />

    <div class="cov-left">
      <div class="eyebrow a-up" style="animation-delay:120ms">শিক্ষা সফর · STUDY TOUR</div>
      <div class="cov-place bn a-up" style="animation-delay:220ms">ঢাকা বিশ্ববিদ্যালয় · CARS জৈবপ্রযুক্তি কেন্দ্র</div>
      <h1 class="cov-title bn a-up" style="animation-delay:320ms">জৈবপ্রযুক্তি গবেষণাগার<br />পরিদর্শন</h1>
      <p class="cov-sub bn a-up" style="animation-delay:470ms">
        আধুনিক গবেষণা-যন্ত্রপাতি ও প্ল্যান্ট টিস্যুকালচারের বাস্তব অভিজ্ঞতা — এক নজরে।
      </p>
      <div class="cov-foot a-up" style="animation-delay:620ms">
        <div class="cov-badge"><span class="dot" /> গ্রুপ <b>ফ্রিসিয়া</b> · Freesia</div>
        <div class="cov-dept bn">উদ্ভিদবিজ্ঞান বিভাগ · সরকারি তোলারাম কলেজ, নারায়ণগঞ্জ</div>
      </div>
    </div>

    <div class="cov-photo a-zoom" style="animation-delay:150ms">
      <img :src="$img('/img/cover-group.jpg')" alt="Group photo" />
      <div class="cov-photo-cap bn">CARS জৈবপ্রযুক্তি কেন্দ্র, ঢাকা বিশ্ববিদ্যালয়</div>
    </div>
  </div>
</template>

<style scoped>
.cover{position:absolute;inset:0;overflow:hidden;background:
  radial-gradient(90% 80% at 12% 20%, #FBFBF4, rgba(251,251,244,0) 60%), var(--cream);}
.cov-left{position:absolute;left:72px;top:0;bottom:0;width:520px;display:flex;flex-direction:column;justify-content:center;z-index:4;}
.cov-place{font-size:15px;color:#6E8A4C;font-weight:600;margin-top:14px;}
.cov-title{font-size:54px;line-height:1.08;font-weight:700;color:var(--green-deep);margin:12px 0 0;letter-spacing:0;}
.cov-sub{font-size:17px;color:var(--ink-soft);margin-top:16px;max-width:32ch;line-height:1.5;}
.cov-foot{margin-top:34px;}
.cov-badge{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-bn);font-size:18px;color:var(--ink);font-weight:600;}
.cov-badge b{color:var(--green-mid);font-weight:700;}
.cov-badge .dot{width:9px;height:9px;border-radius:50%;background:var(--green);box-shadow:0 0 0 4px rgba(124,155,87,.16);}
.cov-dept{margin-top:9px;font-size:13.5px;color:#8b937c;font-weight:500;}
.cov-photo{position:absolute;top:0;right:0;width:46%;height:100%;overflow:hidden;
  border-bottom-left-radius:200px;box-shadow:-30px 0 60px rgba(52,64,40,.12);}
.cov-photo img{width:100%;height:100%;object-fit:cover;object-position:center;}
.cov-photo::after{content:"";position:absolute;inset:0;
  background:linear-gradient(100deg, var(--cream) 0%, rgba(245,244,236,0) 26%),
             linear-gradient(0deg, rgba(30,40,22,.34), rgba(30,40,22,0) 40%);}
.cov-photo-cap{position:absolute;left:34px;bottom:30px;z-index:3;color:#fff;font-size:13px;font-weight:600;
  text-shadow:0 2px 10px rgba(0,0,0,.5);}
.cov-s1{position:absolute;top:-30px;left:-26px;z-index:1;}
.cov-s2{position:absolute;bottom:-24px;left:400px;z-index:1;}
</style>
