var CACHE = 'HotHotHotV1';
/*
* Exemple issu du cookbook MDN
* https://github.com/mdn/serviceworker-cookbook/tree/master/strategy-cache-update-and-refresh
*/
//

// On install, cache some resource.
self.addEventListener('install', evt => {
    // console.log('The service worker is being installed.');
    // Open a cache and use `addAll()` with an array of assets to add all of them
    // to the cache. Ask the service worker to keep installing until the
    // returning promise resolves.
    evt.waitUntil(caches.open(CACHE).then(cache => {
        cache.addAll([
            "/index.html",
            "/assets/images/favicon-16x16.png",
            "/assets/images/favicon-32x32.png",
            "/assets/images/android-chrome-192x192.png",
            "/assets/images/android-chrome-512x512.png",
            "/sw.js",

        ]);
    }));
});


//Stale-while-revalidate
//
// Si la ressource est dans le cache, on l'utilise et, dans le même temps on rafraichit ce cache via le réseau pour la fois suivante.


// On fetch, use cache but update the entry with the latest contents
// from the server.
self.addEventListener('fetch', evt => {
    // console.log('The service worker is serving the asset.');
    // You can use `respondWith()` to answer ASAP...
    evt.respondWith(fromCache(evt.request));
    // ...and `waitUntil()` to prevent the worker to be killed until
    // the cache is updated.
    evt.waitUntil(
        update(evt.request)
            // Finally, send a message to the client to inform it about the
            // resource is up to date.
            .then(refresh)
    );
});

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
    // console.log('match cache request');
    return caches.open(CACHE).then(cache => cache.match(request));
}


// Update consists in opening the cache, performing a network request and
// storing the new response data.
function update(request) {
    // console.log('update cache');
    return caches.open(CACHE)
        .then(cache => fetch(request)
            .then(response => cache
                .put(request, response.clone())
                .then(() => response)));
}

// Sends a message to the clients.
function refresh(response) {

    return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            // Encode which resource has been updated. By including the
            // [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) the client can
            // check if the content has changed.
            var message = {
                type: 'refresh',
                url: response.url,
                // Notice not all servers return the ETag header. If this is not
                // provided you should use other cache headers or rely on your own
                // means to check if the content has changed.
                eTag: response.headers.get('ETag')
            };
            // Tell the client about the update.
            client.postMessage(JSON.stringify(message));
        });
    });
}

