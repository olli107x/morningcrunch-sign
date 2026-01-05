self.addEventListener('install', () => {
  console.log('morningcrunch Sign App installed')
})

self.addEventListener('activate', () => {
  console.log('morningcrunch Sign App activated')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})
