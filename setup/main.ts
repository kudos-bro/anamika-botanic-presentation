// Register a base-aware asset resolver ($img) so public images work under any
// deploy base — dev server ("/") and GitHub Pages ("/<repo>/"). Accepts "/img/x"
// or "img/x"; the leading slash is normalised away.
// (Plain default export — avoids importing @slidev/types, which the bundler can't resolve.)
export default function ({ app }: any) {
  app.config.globalProperties.$img = (p: string) =>
    import.meta.env.BASE_URL + String(p).replace(/^\//, '')
}
