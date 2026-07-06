<!-- Slide 2 · Presenter team -->
<template>
  <div class="frame team-frame">
    <Vine class="tf-s1" :size="220" :opacity="0.28" flip />
    <Vine class="tf-s2" :size="220" :opacity="0.28" />

    <div class="team-head a-down">
      <div class="eyebrow">OUR PRESENTERS · উপস্থাপক দল</div>
      <h1 class="headline sm bn">আমাদের উপস্থাপক দল</h1>
      <div class="rule rule-c" />
    </div>

    <TeamGrid />
  </div>
</template>

<style scoped>
.team-frame{padding-top:40px;justify-content:flex-start;align-items:center;}
.team-head{text-align:center;margin-bottom:20px;}
.team-head .eyebrow{justify-content:center;}
.team-head .eyebrow::before{display:none;}
.rule-c{margin-left:auto;margin-right:auto;}
.tf-s1{position:absolute;top:14px;left:8px;}
.tf-s2{position:absolute;bottom:26px;right:10px;}
</style>
