'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "81588d8a7170a469f9496bd90cee7507",
"index.html": "a0cd936de0a7b7a085b883f8d6076dfa",
"/": "a0cd936de0a7b7a085b883f8d6076dfa",
"main.dart.js": "0233d804d9fd879f7e84f2af4fded6c4",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"script.js": "45a7015c25445e73a22eeca0a968844f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"style.css": "c82dc7b33000412394be27d70d218a7b",
"manifest.json": "7014a0706bfd57b493e902fa441a4d3b",
".git/config": "3a769596285f935ffd6741d7bf464959",
".git/objects/59/c41e6a6646a3c0fb01d11bc3b632d1d754cba0": "5121e838b69e400b43f5b2d604977b69",
".git/objects/59/0d58ba668bc19b32bb9487f29fad2cc36e9309": "e1f2f4db14adce4d2d8fed7c071d45ff",
".git/objects/92/42d6fbfe7b66da0c7e53624d55beadd6fe1c36": "bf198fa2031dc73525b7d61403b062b3",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/b5/466f78a7874122a3f0f0c0658362ce94aa7d9f": "e8317b4be7a884734a5bc6c7e13f0fb7",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/a2/0e683fd65c7175d8c95ba768a8aec03aa1f009": "d4ea9752af8a121c1a350ff325fde017",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/0f5b7d2b6f8e38f74b6d91cc6996bc9d9dd0c6": "b6fd250e34ddc9f80d19c4275cd56e7c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/842d50e74a95d7f27c19816b3a5382be30436f": "d6451b23471635f2650c3202151dfb13",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/eb0186c98be5d3b102ec1899bd4fdd21ca65e2": "95ea8910c207e9ff639c13f4d312cdd5",
".git/objects/f2/bd6e8e982fef5d60c282231dca6d3092004681": "f88ca517d6f7e07d7f375ab93abde525",
".git/objects/f5/b49c64bbccd7a7bdbfd093fdbd3fa1e475e30a": "dbd32ec608e71eb37f48524bc162b5a6",
".git/objects/e4/6046246ffb2a156c9c9df65c4f9002137c6710": "fc956c1570c4d1f81367190e8a8c7f0a",
".git/objects/4b/e4ff1fef35dda95ad9069a478ea8dc7fda9389": "0c2f79db160cafff3d89a16dbdf4ec4a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/1a/c331990a2a45cc771f50d964db5b6b44417dd4": "48aec7e9ae079d659418c9d5e428b0c4",
".git/objects/28/9c3d39ed577928f8e762969f9da175d846ec3b": "69a482d8b2234351e424e4865198eaef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/18b044b9ba263a3ed5f14b3838af87c22f2744": "c2cb76fa89ca6648e843d3fdbf3ea402",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/3ab492f4df2dc9e0f23af8f72be02bb45da282": "ffdf017c08476502f2f7ca5ccda49f93",
".git/objects/36/b15a368be345c05f264fe61edf6b775c674063": "e3953d2b52f8a166f3618d6505070fb3",
".git/objects/5c/ff72a155507b630348b4a5e72959fe9d03b77d": "fb4503f68e1404e7d93dba6919167b79",
".git/objects/5c/126c41db9847d4a090873cb28235eb106df8b9": "93d4772a595d9187dd31e8039dc941cc",
".git/objects/09/ba9a2498374eb53121fc94698d05cad94c34c8": "4777e8efbcfe8d1b4693beb2b42dc1a7",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/96/11adc32eb95e7baa3b3f4f2bfcaa96e94ddf1c": "b07907dd62ba157494eb2262c6fb07f1",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/e961aa37999507da361632c29bcd7090060ff6": "57017cb1854c869dc937ce1e2ae40573",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/64/b99471f1f3c225817dd661267c81749a5b0eab": "27212f94d1a005c0cc5195cece3cb77e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/95a44b6914f3bbd71714cd4aff6bfcdbea4144": "3e7eb2cd5817dcb7942ad6290dcf2303",
".git/objects/e1/cedf0f638503e9e28d6a88306342100caf6fd6": "b8d5e49c462cc09190aec1625a70da2c",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f1/b96007521a20052061ce14f8ce3c679a72be66": "ad552c4d5619d8ab1b46dd63b2521ef3",
".git/objects/ce/fdc51003ad6534416543925c857bd10f3a419d": "0919a222f2e2109b5cc917be02c4a1a4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/21940edbb8a7c4de30f80ed1ff123051ec0eda": "90447c3a2b1f2d84f3b0ef4cb63a275c",
".git/objects/4a/e780dc7cea9546e0c01b4a567f438ae3a2b0b1": "0c39d63305fd71358442b58f8c08cb2b",
".git/objects/12/12ced17d03801e4ad715f5e26e5422c9950fa1": "534c6b1b424b1024a8b9df058f685db1",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/f7a7fefb6d8d1afcba6676ac95c397f2461568": "fc2e727beed2db198a46f4067ada5a14",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a1ed74b2507a7e081b903baac58d9325",
".git/logs/refs/heads/master": "a1ed74b2507a7e081b903baac58d9325",
".git/logs/refs/remotes/origin/master": "ace65de48f59a14262268af0b8ef199b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "cdb28fe8cd5694fd8285533d70f195e9",
".git/refs/remotes/origin/master": "cdb28fe8cd5694fd8285533d70f195e9",
".git/index": "a2cb1dda8506cd1f9bde83830d21cc0e",
".git/COMMIT_EDITMSG": "fb60641d031ff17caa29992c696db149",
"assets/images/self.jpeg": "94773d2b76190467a09fedcbcc30be6c",
"assets/AssetManifest.json": "722bfeed028afba3b511395904d58a99",
"assets/NOTICES": "2d3e299c9ec015868a555daef432db52",
"assets/FontManifest.json": "96bb26e048c47ca22923650074bb5ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "19caf1c06e022593ea4657734d691c86",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "d2e691bc4a2b696929172cb3d22ce8ba",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "76ae20d4d4b7d46e613d2581512fcf73",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "1cd294a771f26752bbb8d8d5210f6412",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
