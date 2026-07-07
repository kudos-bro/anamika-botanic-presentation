// Slidev app setup:
//  1) $img() — base-aware public-asset resolver (dev "/" and Pages "/<repo>/").
//  2) A navigation guard that fixes Slidev 52.x's base-path doubling bug.
//
// Why (2): Slidev's getSlidePath() returns `${BASE_URL}${no}` and the router history
// ALSO applies BASE_URL, so every navigation pushes "/<base>/<base>/<no>" → the repo
// name repeats in the URL and you land on a 404. We strip the extra base segment.
export default function ({ app, router }: any) {
  app.config.globalProperties.$img = (p: string) =>
    import.meta.env.BASE_URL + String(p).replace(/^\//, '')

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '') // "" for root, else "/<repo>"
  if (router && base) {
    router.beforeEach((to: any) => {
      // Only the doubled paths begin with the base (real routes are base-stripped on read).
      if (to.path.startsWith(`${base}/`)) {
        const fixed = to.path.slice(base.length) || '/'
        if (fixed !== to.path)
          return { path: fixed, query: to.query, hash: to.hash, replace: true }
      }
    })
  }
}
