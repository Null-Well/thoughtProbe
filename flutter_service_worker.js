'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5020bf19d7fdace52d1421582750069a",
"assets/AssetManifest.bin.json": "046d6f994c173bd23808097baae83988",
"assets/AssetManifest.json": "ef8dc4847fc865da8201380ee4675075",
"assets/assets/audio/magic.mp3": "a389c3abd14ced64c160cbfe51136b53",
"assets/assets/images/back.png": "4fe0b62ce0fcca798e04d097d283ace6",
"assets/assets/images/concept-of-seo-ranking.png": "39c65d22b8fdbb4927f9a1dce2e21ef7",
"assets/assets/images/face.png": "1b49ba08eda892ba7abe6615397a6189",
"assets/assets/images/fatal-error.png": "403958e39055e3fe3c2bb46a06206cec",
"assets/assets/images/game.png": "4dcff96bb42328ba8ab77bff5b37476b",
"assets/assets/images/magic/magic1.png": "7ef99d396565ba6fc4609147688d12fa",
"assets/assets/images/magic/magic10.png": "5e36a9b5c90aad06aecdc66f6ddc342d",
"assets/assets/images/magic/magic11.png": "03c8401bccd6e0ea7c18f81cd0221c25",
"assets/assets/images/magic/magic12.png": "9686182fbdb78805c25dace5e3ad302a",
"assets/assets/images/magic/magic13.png": "29f6d64eaf21966be650a589ce5cbc92",
"assets/assets/images/magic/magic14.png": "b812b4e5b3db9457da90a47a6a9bdd47",
"assets/assets/images/magic/magic15.png": "4083b2d125a4dfc3e6a348a2b00853ef",
"assets/assets/images/magic/magic16.png": "5dac1340a67ac719a4d2cc5f0c61681e",
"assets/assets/images/magic/magic17.png": "71a71204b286ef32547e8068b9e73617",
"assets/assets/images/magic/magic18.png": "5e6e39ceb365a53ae31c067c5ed80773",
"assets/assets/images/magic/magic19.png": "d3d8e0f402b73ce6b4c80b290de4c845",
"assets/assets/images/magic/magic2.png": "1d770caf8a203a4dd0be6d3d2550b50c",
"assets/assets/images/magic/magic20.png": "30941f4dde9cd8404031270aa104c9e1",
"assets/assets/images/magic/magic21.png": "e5b6fbe4289fe465d3d45a579d60ea62",
"assets/assets/images/magic/magic22.png": "54e10da2401717bd4d4ddf17a6edd2fc",
"assets/assets/images/magic/magic23.png": "b9b241630d0e2005f83897cb0b62b320",
"assets/assets/images/magic/magic24.png": "e69b5197fee0fc8b5d11bc1547a75a78",
"assets/assets/images/magic/magic25.png": "ca4432627abe9876b788fa75622a8a8e",
"assets/assets/images/magic/magic26.png": "5c49e6e2d95d2e344c71a7e4712d057d",
"assets/assets/images/magic/magic27.png": "974572c1d772ea746221d3de54c04867",
"assets/assets/images/magic/magic28.png": "d7858cc0124f3f95456edea57acbded8",
"assets/assets/images/magic/magic29.png": "65a8b68e4a1e8c49ef25fb1bcfb93e9b",
"assets/assets/images/magic/magic3.png": "ac32025e2c111ee4152bd5ab2dec6e10",
"assets/assets/images/magic/magic30.png": "f4d80a4c0652e49f4241d6044c4735ad",
"assets/assets/images/magic/magic31.png": "29a3a956a39ef430e8cf60b8ea345caf",
"assets/assets/images/magic/magic32.png": "0e489ee4a7011ecc0b723190f7ef3d3b",
"assets/assets/images/magic/magic33.png": "4c1bc7bb807eb24a1733f0e59814fa6e",
"assets/assets/images/magic/magic34.png": "0c3c70ce9e8d8500193c0b45dd138ce8",
"assets/assets/images/magic/magic35.png": "5b21817e5f36a731a9145d43a3bc700a",
"assets/assets/images/magic/magic36.png": "32583f57a67fa49c60c4542eeeb293e1",
"assets/assets/images/magic/magic37.png": "f9561338d2888744ac6de8926be1bb50",
"assets/assets/images/magic/magic38.png": "091452ef7e96acd8c68e3252911ba83f",
"assets/assets/images/magic/magic39.png": "35a7ac5aa163e277b093d40d483dc54c",
"assets/assets/images/magic/magic4.png": "c0d08961df6e5708b173785e1a2dbef5",
"assets/assets/images/magic/magic40.png": "c1c58ff22bf6770b288de1bbe8c5341d",
"assets/assets/images/magic/magic41.png": "318287f7bf657b2a4eafab509702bce0",
"assets/assets/images/magic/magic42.png": "717bd5a13b8ffc184fd17550182dafca",
"assets/assets/images/magic/magic43.png": "7c63dc649c83333ba9ca3c082afd3dbc",
"assets/assets/images/magic/magic44.png": "2ab5c0df1833ecdd8f70622b18a66ab5",
"assets/assets/images/magic/magic45.png": "67581dfeb2af0580ac8f15a5a0b7628f",
"assets/assets/images/magic/magic46.png": "d1e781ad1a1b5eecda2042c02244224e",
"assets/assets/images/magic/magic5.png": "e81c4239977cb7c801fa44b1f5a7436a",
"assets/assets/images/magic/magic6.png": "9dc28c64dff681fa322e0872597dc684",
"assets/assets/images/magic/magic7.png": "5a1433d783feee2712bbefe4872d742c",
"assets/assets/images/magic/magic8.png": "8e2cf832293f4a79dd7ec211f1f8f6a2",
"assets/assets/images/magic/magic9.png": "f3e74543a0abd70aa073fa2fc9b4952b",
"assets/assets/images/playing-hand.png": "b2972e621ba645b41483b5229c9480df",
"assets/assets/images/Thought%2520Probe.png": "4a52d8029fb8e87ce25cc60d640ff656",
"assets/assets/images/wave-spiral-sphere.png": "ba91f2a07bfd022ff84a13a92c2992e9",
"assets/FontManifest.json": "4761dbf1e7b713cf307e1959b5ea49c5",
"assets/fonts/Bevan-Regular.ttf": "c800526423a8747db3cab278dbd5244f",
"assets/fonts/Friz%2520Quadrata%2520Std%2520Italic.otf": "1523f3a54b55b90818d8b2a4e6041656",
"assets/fonts/MaterialIcons-Regular.otf": "041891e3d05ea6231a53cbf3f5a9d844",
"assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/NOTICES": "da9d927f1167d43b777817acb72dbcf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "710bf77afc7883ece8b6c649a2f90ef2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "1f356b7d471c402e2a312a74ad1229f7",
"icons/Icon-512.png": "2ac4cf47c26c9f6e5761f2d675a4b194",
"icons/Icon-maskable-192.png": "1f356b7d471c402e2a312a74ad1229f7",
"icons/Icon-maskable-512.png": "2ac4cf47c26c9f6e5761f2d675a4b194",
"index.html": "12a6e573cc05b63dbb21d6a22c14d8e4",
"/": "12a6e573cc05b63dbb21d6a22c14d8e4",
"main.dart.js": "69ea4006219013bb1902118ba3d5fb41",
"manifest.json": "f3d5b4bed1dcfe7c23cc259458b6e765",
"version.json": "8e2757a33407d32d5a2247dc533296a1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
