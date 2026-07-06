<!-- Persistent footer: thin top rule + group tag + page counter.
     Hidden on cover/end layouts. -->
<script setup>
import { useNav } from '@slidev/client'
const { currentPage, total } = useNav()
</script>

<template>
  <div
    v-if="currentPage > 1 && currentPage < total"
    class="foot"
  >
    <div class="foot-brand">
      <span class="dot" />
      <span class="bn">গ্রুপ&nbsp;ফ্রিসিয়া</span>
      <span class="sep">·</span>
      <span class="foot-dept bn">উদ্ভিদবিজ্ঞান বিভাগ, সরকারি তোলারাম কলেজ</span>
    </div>
    <div class="foot-no">
      {{ String(currentPage).padStart(2, '0') }}<span class="slash">/</span>{{ String(total).padStart(2, '0') }}
    </div>
  </div>
</template>

<style scoped>
.foot{
  position:absolute;left:0;right:0;bottom:0;height:34px;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 30px;font-size:11.5px;color:#8b937c;z-index:20;
  border-top:1px solid rgba(124,155,87,.18);
  background:linear-gradient(transparent, rgba(238,241,228,.55));
}
.foot-brand{display:flex;align-items:center;gap:8px;font-weight:600;letter-spacing:.01em;}
.foot-brand .bn{color:#5E7D3C;}
.dot{width:7px;height:7px;border-radius:50%;background:#7C9B57;box-shadow:0 0 0 3px rgba(124,155,87,.18);}
.sep{opacity:.5;}
.foot-dept{opacity:.85;}
.foot-no{font-variant-numeric:tabular-nums;font-weight:600;letter-spacing:.06em;color:#9aa08b;}
.slash{margin:0 2px;opacity:.5;}
</style>
