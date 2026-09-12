// Content data stores portrait paths as absolute strings (e.g. `/portraits/x.png`).
// Vite only rewrites `base` into paths it can statically see in HTML/JS imports,
// not into plain strings coming from data — so on a project Pages site
// (served from a subpath) those absolute paths need resolving at runtime.
export function withBase(path: string) {
  return path.startsWith('/') ? import.meta.env.BASE_URL + path.slice(1) : path
}
