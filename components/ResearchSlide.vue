<!-- Slide 11 · Ongoing research -->
<script setup>
const items = [
  { n: '০১', h: 'Plant Tissue Culture', d: 'উন্নত মানের রোগমুক্ত চারা উৎপাদন।' },
  { n: '০২', h: 'Molecular Biology', d: 'DNA ও RNA বিশ্লেষণ এবং জিনগত গবেষণা।' },
  { n: '০৩', h: 'Plant Disease Detection', d: 'উদ্ভিদের রোগ দ্রুত শনাক্তকরণ।' },
  { n: '০৪', h: 'Genetic Improvement', d: 'উন্নত বৈশিষ্ট্যের নতুন উদ্ভিদ জাত উন্নয়ন।' },
]
</script>

<template>
  <div class="frame research">
    <Vine class="deco deco-tr" :size="185" :opacity="0.24" />
    <div class="res-photos">
      <div class="photo tag a-left" style="animation-delay:120ms">
        <img :src="$img('/img/rooting-testtubes.jpg')" alt="In-vitro rooting" />
        <div class="cap bn">ইন-ভিট্রো রুটিং</div>
      </div>
      <div class="photo tag a-left" style="animation-delay:240ms">
        <img :src="$img('/img/grass-cultures.jpg')" alt="Tissue culture" />
        <div class="cap bn">টিস্যু কালচার</div>
      </div>
    </div>
    <div class="res-right">
      <div class="a-down">
        <div class="eyebrow">ONGOING RESEARCH · চলমান গবেষণা</div>
        <h1 class="headline sm bn">চলমান গবেষণার ক্ষেত্র</h1>
        <div class="rule" />
      </div>
      <StepList class="mt-7" :items="items" :base="280" :gap="120" />
    </div>
  </div>
</template>

<style scoped>
.research{flex-direction:row;gap:44px;align-items:center;}
.res-photos{flex:0 0 340px;display:flex;flex-direction:column;gap:16px;height:410px;}
.res-photos .photo{flex:1;}
.res-right{flex:1;}
.mt-7{margin-top:24px;}
</style>
