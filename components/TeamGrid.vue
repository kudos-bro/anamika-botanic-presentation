<!-- 10 presenter cards — circular portrait + name + topic, staggered pop-in. -->
<script setup>
const people = [
  ['suborna', 'সুবর্ণা', 'সূচনা ও কৃতজ্ঞতা'],
  ['tanvir', 'তানভীর', 'বায়োটেকনোলজি পরিচিতি'],
  ['aburayhan', 'আবু রায়হান', 'গবেষণাগার পরিচিতি'],
  ['jhumur', 'ঝুমুর', 'প্রিপারেশন রুম'],
  ['anamika', 'অনামিকা', 'ইনোকুলেশন রুম'],
  ['emon', 'ইমন', 'গ্রোথ রুম'],
  ['moin', 'মঈন', 'মলিকিউলার ল্যাব'],
  ['kona', 'কণা', 'চলমান গবেষণা'],
  ['nahid', 'নাহিদ', 'ব্যবহার ও প্রয়োগ'],
  ['arif', 'আরিফ', 'আমাদের অভিজ্ঞতা'],
]
</script>

<template>
  <div class="tgrid">
    <div v-for="(p, i) in people" :key="p[0]" class="tcard a-pop"
      :style="{ animationDelay: (120 + i * 70) + 'ms' }">
      <div class="ring">
        <img :src="$img(`/team/team-${p[0]}.jpg`)" :alt="p[1]" />
      </div>
      <div class="tname bn">{{ p[1] }}</div>
      <div class="trole bn">{{ p[2] }}</div>
    </div>
  </div>
</template>

<style scoped>
.tgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px 22px;width:100%;margin-top:6px;}
.tcard{display:flex;flex-direction:column;align-items:center;text-align:center;}
.ring{
  width:118px;height:118px;border-radius:50%;padding:4px;
  background:conic-gradient(from 210deg,#7C9B57,#B7CE93,#7C9B57);
  box-shadow:0 10px 22px rgba(60,75,44,.20);
}
.ring img{
  width:100%;height:100%;border-radius:50%;object-fit:cover;
  object-position:center 22%;border:3px solid #FBFAF4;display:block;
}
.tname{margin-top:11px;font-weight:700;font-size:17px;color:#26301C;line-height:1.1;}
.trole{margin-top:2px;font-weight:500;font-size:12.5px;color:#6E8A4C;line-height:1.15;}
</style>
