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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "92c3b9be5beca71669f3b0d55ecc14f4"
  },
  {
    "url": "assets/css/0.styles.159835fe.css",
    "revision": "59d575c9879b1aaa4a29c9e930df2426"
  },
  {
    "url": "assets/img/debug2.d7c24ebe.png",
    "revision": "d7c24ebe037a428758101df3c2fa7163"
  },
  {
    "url": "assets/img/debug4.f4aad4d4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "assets/img/debug5.ca1a85a6.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1e989ea4.js",
    "revision": "ba8d05bea6d86727226d9c98c043f1ae"
  },
  {
    "url": "assets/js/11.6fa4582c.js",
    "revision": "19c87c145f4034e2b62dc4bb4536b770"
  },
  {
    "url": "assets/js/12.77f55782.js",
    "revision": "bdb36fbcb3ff58f928bc47e2d233c6ce"
  },
  {
    "url": "assets/js/13.95d51bab.js",
    "revision": "da256c99e728633d0aa40832b3cfe664"
  },
  {
    "url": "assets/js/14.51c44014.js",
    "revision": "6bd4dc20b7a89b097ce106b9eff7ad88"
  },
  {
    "url": "assets/js/15.cdb196f1.js",
    "revision": "6b718cfd914300eaa5bb1ff0ab48613f"
  },
  {
    "url": "assets/js/16.861ef739.js",
    "revision": "17e129043327a709ad9827a9bb7200e4"
  },
  {
    "url": "assets/js/17.c17279c6.js",
    "revision": "5b1c0d526e25ae40ad07ba8678950491"
  },
  {
    "url": "assets/js/18.03c9c4c8.js",
    "revision": "df2801884020dc1cc2477fd1f32a92e3"
  },
  {
    "url": "assets/js/19.d0c7628b.js",
    "revision": "5252215c5f446476a3e07eea97827e5b"
  },
  {
    "url": "assets/js/2.3f56c1ad.js",
    "revision": "baadfbb509457830063ebf56eaf22395"
  },
  {
    "url": "assets/js/3.c91e4e59.js",
    "revision": "32370167a62a91e2abddd835a856614f"
  },
  {
    "url": "assets/js/4.040bb730.js",
    "revision": "4bcaf13c8f9fd55ed1b1b046a54a7b5d"
  },
  {
    "url": "assets/js/5.3c3557bb.js",
    "revision": "7be5ff3cc302413a6217514596829185"
  },
  {
    "url": "assets/js/6.2b6bcb76.js",
    "revision": "6a91d8bd8ef34cc8442c76ff78131b53"
  },
  {
    "url": "assets/js/7.0d0dc6af.js",
    "revision": "9a9c299cab389ab50822b79d82f17fd7"
  },
  {
    "url": "assets/js/8.e09a8825.js",
    "revision": "fa18eb25bd0ab90319028612826a8973"
  },
  {
    "url": "assets/js/9.a7e6c726.js",
    "revision": "6a741b430499fc44c0e1e2013fc097ff"
  },
  {
    "url": "assets/js/app.79bbc809.js",
    "revision": "0942bb078530b454bafc31aa1248edb6"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "a4478e6b71d92118021f965da928cbfb"
  },
  {
    "url": "debug1.png",
    "revision": "04b9976587fa44f414d853e359a3e6ef"
  },
  {
    "url": "debug2.png",
    "revision": "d7c24ebe037a428758101df3c2fa7163"
  },
  {
    "url": "debug3.png",
    "revision": "f77773272edb88c73c218a227944d54b"
  },
  {
    "url": "debug4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "debug5.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "78ce66f08a9f7725ba502e657488a1bc"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "98e551c1d88006568f9090e34b0d4c17"
  },
  {
    "url": "guide/change-log.html",
    "revision": "787d4f56601e0d521699c1aa508bc3d1"
  },
  {
    "url": "guide/component.html",
    "revision": "111af36e62cc1f00a60962ad7c0a3606"
  },
  {
    "url": "guide/debug.html",
    "revision": "720fc63e8d27428256535498bad0ca97"
  },
  {
    "url": "guide/eslint.html",
    "revision": "350a46623d5b0e793a5c52482e120c98"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7e9aad68f2b719027d005b522ad814e4"
  },
  {
    "url": "guide/index.html",
    "revision": "5dda88ea44cc77b9a4e680faeeeeac10"
  },
  {
    "url": "guide/lottie.html",
    "revision": "38c0df7478bda2458d95ef20d7e1721f"
  },
  {
    "url": "guide/module.html",
    "revision": "e6186bd5fa7c957f2d309f91c30685bd"
  },
  {
    "url": "guide/native-android.html",
    "revision": "ee8c5914396976db89b1174e3fdf28be"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "8b9ff80e7db97befa7b015349a8e41a2"
  },
  {
    "url": "guide/project.html",
    "revision": "15ec904ee28077d5e1e96c508e5544b8"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "d6c08707b1640aa6de2ca95c5630bd6f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "image/modal/actionSheet.png",
    "revision": "e2a0dbb0bdad7837d25ad345d8dd4cdf"
  },
  {
    "url": "image/modal/alert.png",
    "revision": "9f2c601a551c87b37501e2a2723151e0"
  },
  {
    "url": "image/modal/confirm.png",
    "revision": "5723a2353a85aa4e3ba312bc2b97702f"
  },
  {
    "url": "image/modal/prompt.png",
    "revision": "1c31212b2214c9a6f780111afa030b04"
  },
  {
    "url": "image/modal/showLoading.png",
    "revision": "28cc23f269828a978448ba110b785439"
  },
  {
    "url": "image/modal/showToast.png",
    "revision": "3a426d37f98d8a09f72332c9f52085a2"
  },
  {
    "url": "index.html",
    "revision": "b36468978b249998101d624c398460ab"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "534548720548c4ddcb634d05a271f06e"
  },
  {
    "url": "refesh.png",
    "revision": "66db8f9957c08745a864258b19db4e77"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
