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
    "revision": "5227b9e7a8e66c594055f0c2899016e7"
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
    "url": "assets/js/10.5ffacb8f.js",
    "revision": "94723072cfc86c599b52f6c908b1194b"
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
    "url": "assets/js/14.18a5ad54.js",
    "revision": "668686ad0c924744e4aac8204507b81b"
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
    "url": "assets/js/4.32db97d8.js",
    "revision": "1b0258ad001fa5b56d385363c4d03e5c"
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
    "url": "assets/js/7.4935580a.js",
    "revision": "5dd7c91da035dcb3956e36cf9f6e91de"
  },
  {
    "url": "assets/js/8.3fc2f2fe.js",
    "revision": "78f10a480ff17e6de704738a3b2347c8"
  },
  {
    "url": "assets/js/9.a7e6c726.js",
    "revision": "6a741b430499fc44c0e1e2013fc097ff"
  },
  {
    "url": "assets/js/app.f6ae671c.js",
    "revision": "3c3386b4e2f4b7c1e2f1169838c919b8"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "a6c8841bfaaf84a388996605a603e9d7"
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
    "revision": "a563422259747f8e19773da654c89fe1"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "3c4f14d2a4acd49abc167377bdc3d8e9"
  },
  {
    "url": "guide/change-log.html",
    "revision": "1dbae59a29b8fb72b089b3f712dd1f04"
  },
  {
    "url": "guide/component.html",
    "revision": "243afd4e194e09d0471db467b6907f92"
  },
  {
    "url": "guide/debug.html",
    "revision": "704558702d2db7a5dbc84d1b0a7b6a4c"
  },
  {
    "url": "guide/eslint.html",
    "revision": "a04ea031dc5af7b9c7b39c24d519a3f5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "367da4e5b96dbc6ffbc2f304e99ff447"
  },
  {
    "url": "guide/index.html",
    "revision": "7e5cf328515e95ef35c5d45a6084ee0f"
  },
  {
    "url": "guide/lottie.html",
    "revision": "8df7fb6fd1c33e23503991241916e06b"
  },
  {
    "url": "guide/module.html",
    "revision": "c41ea8e36b652bda2151c4fbbe588d49"
  },
  {
    "url": "guide/native-android.html",
    "revision": "6bc04ed5d9d9681de60ca60128b2ee14"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "dc9396f321177a2a9d5506d777cf2710"
  },
  {
    "url": "guide/project.html",
    "revision": "d9ad96bf54855dd0c15e7d85a68aaf88"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "760db22797d5ca8ad59e8b3cf4660d71"
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
    "revision": "f754db7f6f3a87a7eb96db669d475282"
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
    "revision": "6b7fc72eee2bce0e11b0829f07a9d2c9"
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
