<!-- Slide 4 · Objectives -->
<script setup>
const items = [
  { n: '০১', h: 'কার্যপ্রণালী পর্যবেক্ষণ', d: 'আধুনিক বায়োটেকনোলজি ল্যাবরেটরির কার্যপ্রণালী সরেজমিনে দেখা।' },
  { n: '০২', h: 'প্রযুক্তির সাথে পরিচিতি', d: 'জেনেটিক ইঞ্জিনিয়ারিং ও প্ল্যান্ট টিস্যুকালচারের কার্যক্রম জানা।' },
  { n: '০৩', h: 'যন্ত্রপাতি ও নিরাপত্তা', d: 'উন্নত ল্যাবরেটরির যন্ত্রপাতি ও নিরাপত্তা বিধি সম্পর্কে ধারণা।' },
  { n: '০৪', h: 'তত্ত্বের প্রয়োগ', d: 'তাত্ত্বিক জ্ঞানের ব্যবহারিক প্রয়োগ অনুধাবন করা।' },
]
</script>

<template>
  <div class="frame obj">
    <Vine class="deco deco-tr" :size="185" :opacity="0.24" />
    <div class="obj-photo photo tag a-left" style="animation-delay:120ms">
      <img :src="'/img/session-seminar.jpg'" alt="Onboarding session" />
      <div class="cap bn">অনবোর্ডিং সেশন · CARS কেন্দ্র</div>
    </div>
    <div class="obj-right">
      <div class="a-down">
        <div class="eyebrow">OBJECTIVES · উদ্দেশ্য</div>
        <h1 class="headline sm bn">পরিদর্শনের উদ্দেশ্য</h1>
        <div class="rule" />
      </div>
      <StepList class="mt-7" :items="items" :base="280" :gap="120" />
    </div>
  </div>
</template>

<style scoped>
.obj{flex-direction:row;gap:48px;align-items:center;}
.obj-photo{flex:0 0 360px;height:400px;}
.obj-right{flex:1;}
.mt-7{margin-top:26px;}
</style>
