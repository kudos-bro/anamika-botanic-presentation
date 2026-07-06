<!-- 6 acknowledged teachers — portrait + name + role, staggered pop-in. -->
<script setup>
const teachers = [
  ['sajeda', 'সাজেদা আক্তার', 'বিভাগীয় প্রধান'],
  ['bashir', 'বশির উদ্দিন আহমেদ', 'অধ্যাপক'],
  ['tahmina', 'তাহমিনা ইয়াসমিন রোজী', 'সহযোগী অধ্যাপক · সফরের মূল চালিকাশক্তি'],
  ['asad', 'আসাদুজ্জামান উৎপল', 'সহযোগী অধ্যাপক'],
  ['sumaiya', 'সুমাইয়া সুলতানা', 'সহযোগী অধ্যাপক'],
  ['mithun', 'মিঠুন বিশ্বাস', 'প্রভাষক'],
]
</script>

<template>
  <div class="grid">
    <div v-for="(t, i) in teachers" :key="t[0]" class="tc card a-up"
      :style="{ animationDelay: (160 + i * 85) + 'ms' }">
      <div class="ring"><img :src="`/img/teacher-${t[0]}.jpg`" :alt="t[1]" /></div>
      <div class="meta">
        <div class="nm bn">{{ t[1] }}</div>
        <div class="ro bn">{{ t[2] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px 22px;width:100%;}
.tc{display:flex;align-items:center;gap:15px;padding:13px 16px;}
.ring{
  flex:0 0 auto;width:72px;height:72px;border-radius:50%;padding:3px;
  background:conic-gradient(from 200deg,#7C9B57,#C3D6A2,#7C9B57);
}
.ring img{width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:center 20%;border:2px solid #fff;display:block;}
.nm{font-weight:700;font-size:17px;color:#26301C;line-height:1.15;}
.ro{font-weight:500;font-size:12.5px;color:#6E8A4C;margin-top:2px;line-height:1.2;}
</style>
