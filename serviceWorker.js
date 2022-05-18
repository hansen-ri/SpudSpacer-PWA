const spudSpacer = "spud-spacer-site-v1";
const assets = [
    "/",
    "/index.html",
    "/styles.css",
    "/js/script.js",
];

// Cache the assets
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(spudSpacer).then(cache => {
            cache.addAll(assets)
        })
    );
});

// Fetch the assets
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});