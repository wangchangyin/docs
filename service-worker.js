/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "71af71e634d384e04eb66f9d9f22a0af"
  },
  {
    "url": "about/index.html",
    "revision": "0a766ecfedff9294f7230dae4c675896"
  },
  {
    "url": "assets/css/0.styles.158ccfcd.css",
    "revision": "3438389bda47e25fee55e10d53a5f0a3"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ff4204c.js",
    "revision": "63ba88833d5822e28db3338cf42a8536"
  },
  {
    "url": "assets/js/11.cc576695.js",
    "revision": "276d8e0fd412b0a8c399d232bee795d9"
  },
  {
    "url": "assets/js/12.cad1318e.js",
    "revision": "9ce201bd9f4a2c7ac6f7fb532b67ba1e"
  },
  {
    "url": "assets/js/13.e62a1018.js",
    "revision": "05b097e9987d83b52ee091fca92461ad"
  },
  {
    "url": "assets/js/14.aa6e25a8.js",
    "revision": "d9e99ada2692f45149360a8780658d2a"
  },
  {
    "url": "assets/js/15.d4e03529.js",
    "revision": "c2b73101c4890ce0ce91a665f2b88e94"
  },
  {
    "url": "assets/js/16.d6af70cf.js",
    "revision": "c5e715f59b8c5c16b94ea18c6c3a4838"
  },
  {
    "url": "assets/js/17.7c926f2b.js",
    "revision": "2fc3420e295ccf592dcf2e0acf2a2f6f"
  },
  {
    "url": "assets/js/2.c849d336.js",
    "revision": "b2a82954ba1e5804969e81f834fbeef2"
  },
  {
    "url": "assets/js/3.e298c308.js",
    "revision": "837c0158704601c021ca0ad193bb1f96"
  },
  {
    "url": "assets/js/4.3db22508.js",
    "revision": "dc629dd7fabeb6dc7421b2f0047ef2f9"
  },
  {
    "url": "assets/js/5.5a4154fa.js",
    "revision": "a3842100153e3fab1c3b426501f25f1d"
  },
  {
    "url": "assets/js/6.52ad0adc.js",
    "revision": "39758432e637f052a9f671e948a4de0f"
  },
  {
    "url": "assets/js/7.af91ad0d.js",
    "revision": "db174cae13d031f361a72c258258bb0e"
  },
  {
    "url": "assets/js/8.424a28a1.js",
    "revision": "07743429d4f20c13b88dc3b9fc11a1a2"
  },
  {
    "url": "assets/js/9.100d7672.js",
    "revision": "9293a791bb8b1b337586ef52ecc38797"
  },
  {
    "url": "assets/js/app.de1d5945.js",
    "revision": "9deb34b13dbca56d88ce6412c1114976"
  },
  {
    "url": "bar/four.html",
    "revision": "19494e396c0eb8ca047d0a913f0b9b6c"
  },
  {
    "url": "bar/index.html",
    "revision": "eb18a99f49dfa5bba0cc36194a78c90d"
  },
  {
    "url": "bar/three.html",
    "revision": "6ead1d405b74ebf3df43fb9e6b9e0d73"
  },
  {
    "url": "foo/index.html",
    "revision": "e914eb087f7b7b1932c6efaf708dce15"
  },
  {
    "url": "foo/one.html",
    "revision": "4e049e9e1d621652211e73b5b88186e4"
  },
  {
    "url": "foo/two.html",
    "revision": "d70a542ed163908d2b8ecc6e0374776a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "14341bac1aa17560ee967064d6aad814"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
