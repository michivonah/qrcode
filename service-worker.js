const workerCache = "qrcode-michi-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/favicon.png",
  "/favicon-white.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(workerCache).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
