<!-- Click zones on the far left / right edges for mouse navigation.
     Left = previous slide, right = next. A chevron hint fades in on hover. -->
<script setup>
import { useNav } from '@slidev/client'
const nav = useNav()
const { currentPage, total } = nav
</script>

<template>
  <button
    v-if="currentPage > 1"
    class="edge edge-l"
    title="Previous slide"
    aria-label="Previous slide"
    @click="nav.prev()"
  >
    <span class="chev">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
        stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
    </span>
  </button>

  <button
    v-if="currentPage < total"
    class="edge edge-r"
    title="Next slide"
    aria-label="Next slide"
    @click="nav.next()"
  >
    <span class="chev">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
        stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7" /></svg>
    </span>
  </button>
</template>

<style scoped>
.edge{
  position:fixed;top:0;bottom:0;width:7%;max-width:104px;min-width:56px;
  display:flex;align-items:center;border:none;cursor:pointer;
  z-index:40;padding:0 16px;opacity:0;transition:opacity .18s ease;
  color:#3C4B2C;-webkit-tap-highlight-color:transparent;
}
.edge-l{left:0;justify-content:flex-start;background:linear-gradient(90deg, rgba(124,155,87,.16), transparent 85%);}
.edge-r{right:0;justify-content:flex-end;background:linear-gradient(270deg, rgba(124,155,87,.16), transparent 85%);}
.edge:hover, .edge:focus-visible{opacity:1;outline:none;}
.chev{
  width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  background:rgba(251,250,244,.92);box-shadow:0 8px 22px rgba(60,75,44,.22);
  border:1px solid rgba(124,155,87,.32);backdrop-filter:blur(2px);
  transform:translateX(6px);transition:transform .18s ease;
}
.edge-l:hover .chev{transform:translateX(0);}
.edge-r .chev{transform:translateX(-6px);}
.edge-r:hover .chev{transform:translateX(0);}
/* hide the click zones in print/export */
@media print{.edge{display:none!important;}}
</style>
