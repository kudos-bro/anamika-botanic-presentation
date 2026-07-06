<!-- Slide 3 · Acknowledgement -->
<template>
  <div class="frame ack">
    <div class="ack-left a-left">
      <div class="eyebrow">ACKNOWLEDGEMENT</div>
      <h1 class="headline bn">কৃতজ্ঞতা স্বীকার</h1>
      <div class="rule" />
      <p class="ack-note bn">
        পরম করুণাময় আল্লাহর প্রতি শুকরিয়া জ্ঞাপন করে আমরা গভীর কৃতজ্ঞতা জানাই আমাদের
        শ্রদ্ধেয় শিক্ষকমণ্ডলীকে — যাঁদের দিকনির্দেশনা ও প্রত্যক্ষ তত্ত্বাবধানে
        এই সফরটি সফলভাবে সম্পন্ন হয়েছে।
      </p>
      <Vine class="ack-s" :size="190" :opacity="0.28" />
    </div>
    <div class="ack-right">
      <TeacherGrid />
    </div>
  </div>
</template>

<style scoped>
.ack{flex-direction:row;gap:44px;align-items:center;}
.ack-left{flex:0 0 320px;position:relative;}
.ack-note{margin-top:18px;font-size:15px;color:var(--ink-soft);line-height:1.6;}
.ack-s{position:absolute;bottom:-34px;left:-10px;}
.ack-right{flex:1;}
</style>
