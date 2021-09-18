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
    "url": "120153_28e98be3_1713301.png",
    "revision": "26ad3ef37efe771a3c08f5329a19b77a"
  },
  {
    "url": "125848_20cc8b43_1713301.png",
    "revision": "7c81004b78deba2436af5a5b2639b4a8"
  },
  {
    "url": "125910_d7cc9d77_1713301.png",
    "revision": "19b49f17ebeffbbd01e0decd08f82361"
  },
  {
    "url": "125918_49d8c984_1713301.png",
    "revision": "3936ac39dd3526264c17f04b7df6b0c9"
  },
  {
    "url": "125926_25bffda4_1713301.png",
    "revision": "0334302549177fc3332f90edd42edcf4"
  },
  {
    "url": "404.html",
    "revision": "7ce3cd35a8aa89cc591d9140dff60d27"
  },
  {
    "url": "aliyun-msm-2.jpg",
    "revision": "04bef215c02c7d117c4c98462d416f86"
  },
  {
    "url": "aliyun-msm-3.jpg",
    "revision": "8a2f93066217eaf83fabc97b6faefc85"
  },
  {
    "url": "aliyun-msm-4.jpg",
    "revision": "752938713148014bbd1f4fac61f24d8c"
  },
  {
    "url": "aliyun-msm-5.jpg",
    "revision": "0756f1a0c51c64530fc935aa9c3a0764"
  },
  {
    "url": "aliyun-msm-6.jpg",
    "revision": "245ed96a9d28c6d59683156e9d2e9380"
  },
  {
    "url": "aliyun-msm-7.jpg",
    "revision": "686c7188b3290ae5d3184fa6bd0afaa6"
  },
  {
    "url": "aliyun-msm.jpg",
    "revision": "121059026f314173dd4a61f245277c24"
  },
  {
    "url": "api/collect.html",
    "revision": "1fb0160099e39e04607edb13c1eebabc"
  },
  {
    "url": "api/web-design.html",
    "revision": "79e1f7dc3ce66eca627643919b563695"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.4140dd7b.css",
    "revision": "447d459a9f7f889f42b08d6548798c92"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f75a0466.js",
    "revision": "61fdfac9c340dce3d4e14c2cc9638a1a"
  },
  {
    "url": "assets/js/100.5eaca395.js",
    "revision": "6362bfd9b5bf9f449e004fc4c5d83a62"
  },
  {
    "url": "assets/js/101.7e986a1e.js",
    "revision": "a48bf2a82577c3c921a276b5be47713d"
  },
  {
    "url": "assets/js/102.d93394f8.js",
    "revision": "58eb1098d7802ba94c47093d2e6a6aee"
  },
  {
    "url": "assets/js/103.de54a7c8.js",
    "revision": "f6d80ca64d7215a40d72322389ef0089"
  },
  {
    "url": "assets/js/104.d189b941.js",
    "revision": "be6de1181db3c85bb8d5346e58d9aea2"
  },
  {
    "url": "assets/js/105.99930a42.js",
    "revision": "e06a9f82ab110b537a3f7fabd1f44783"
  },
  {
    "url": "assets/js/106.9d1db701.js",
    "revision": "49dd1ed0edf5f0401415998ae6edaa98"
  },
  {
    "url": "assets/js/107.97b29b0a.js",
    "revision": "37ec42fa800a077aadf09f0b9d7309e7"
  },
  {
    "url": "assets/js/108.64ed68b5.js",
    "revision": "84ffcd8603a8e725129ebd7cb198aec8"
  },
  {
    "url": "assets/js/109.6f2fc2ef.js",
    "revision": "3f073fd74b9e492ae651925d7e5a9913"
  },
  {
    "url": "assets/js/11.6fca27a1.js",
    "revision": "4c0f82bbca3a55076b7d7557e18db0e7"
  },
  {
    "url": "assets/js/110.f67f21e0.js",
    "revision": "44a19886eaa347a67d971b1bdb4bba78"
  },
  {
    "url": "assets/js/111.0e4a3519.js",
    "revision": "6cff53ebd349c76155f2535d8b0d6068"
  },
  {
    "url": "assets/js/12.655dd338.js",
    "revision": "9183ae4d59fb39a6d8f18ba5abb218f3"
  },
  {
    "url": "assets/js/13.905bf4a3.js",
    "revision": "7e120766b34aaa3b2052838d68a296ef"
  },
  {
    "url": "assets/js/14.41035e8f.js",
    "revision": "23009718168e5673e9381743df7949ef"
  },
  {
    "url": "assets/js/15.43ed14a4.js",
    "revision": "9a84e35a66d8ba916b3257563e5d4882"
  },
  {
    "url": "assets/js/16.554ab8a9.js",
    "revision": "e0f37f9cd9f293b9b92bef05de893bd9"
  },
  {
    "url": "assets/js/17.363da9cf.js",
    "revision": "fd1cfb33d5c439a811c79ad986a3fe5b"
  },
  {
    "url": "assets/js/18.7c50a79c.js",
    "revision": "6fd775f78b242e3484f7d3a2a8157687"
  },
  {
    "url": "assets/js/19.f81b6f2a.js",
    "revision": "f8f9533a4612093cdd46e8cad7a55273"
  },
  {
    "url": "assets/js/20.acead8ab.js",
    "revision": "98710b0fe2a3690153dc0406b2d2a8d7"
  },
  {
    "url": "assets/js/21.c4f5cd37.js",
    "revision": "4c02d59f191d25494a65095614cb9e17"
  },
  {
    "url": "assets/js/22.36510670.js",
    "revision": "7ce6aaf6a416f34cd51eba8f53994e1f"
  },
  {
    "url": "assets/js/23.264fc9c0.js",
    "revision": "7da717e13b0bbefdd335fb7c110919e4"
  },
  {
    "url": "assets/js/24.5203028b.js",
    "revision": "1d172aaf17bd4dcc8fc1c637729515de"
  },
  {
    "url": "assets/js/25.4e796958.js",
    "revision": "51ba50e2355433187ca29b7bea5bc19c"
  },
  {
    "url": "assets/js/26.2123e595.js",
    "revision": "963f6d88de0477364d3fa2c33c8484bb"
  },
  {
    "url": "assets/js/27.914dae9f.js",
    "revision": "a5f6787cedbbbef4e8626e8063f598ed"
  },
  {
    "url": "assets/js/28.20885fa9.js",
    "revision": "5c8fc7e6ea43d0d8c2b061d8884763bc"
  },
  {
    "url": "assets/js/29.0a0019f1.js",
    "revision": "0af0589b615ed1b776c578ac45dbe80c"
  },
  {
    "url": "assets/js/30.2c9a2517.js",
    "revision": "5d1c8520c68ca8f0d8bdf30992ad78bf"
  },
  {
    "url": "assets/js/31.1a620d96.js",
    "revision": "1285c787c642c0d5f3c7c24bda956884"
  },
  {
    "url": "assets/js/32.2f30f96f.js",
    "revision": "ae3bf379f239b5fe73d75a793ee18c45"
  },
  {
    "url": "assets/js/33.93ee7ff2.js",
    "revision": "9b9ba081374c09484d3effca3bf16df6"
  },
  {
    "url": "assets/js/34.6c5f7566.js",
    "revision": "3dfe83e9b7f97140a4f550d0d20f3142"
  },
  {
    "url": "assets/js/35.4a037f21.js",
    "revision": "9e80bdb0b89c7fee7d1a2f437d4848a5"
  },
  {
    "url": "assets/js/36.37b0f3ad.js",
    "revision": "1037a82b6461228a9abe5fd905a17724"
  },
  {
    "url": "assets/js/37.9245c3e6.js",
    "revision": "d4e957151ffa715dc8a5dcd98603e60b"
  },
  {
    "url": "assets/js/38.226dc438.js",
    "revision": "49c4f7cbbabfabf997ea1a0b11ee6308"
  },
  {
    "url": "assets/js/39.bfef2594.js",
    "revision": "b6a2ac759940071bc0ef99c0acc05e57"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.6de9f380.js",
    "revision": "83cf681ad3f76377293a7df89e8ee3b0"
  },
  {
    "url": "assets/js/41.d30050e3.js",
    "revision": "d41bdb17f603d8d261983bbfcca6e7a6"
  },
  {
    "url": "assets/js/42.7abb174a.js",
    "revision": "c35944ade543ff5da497ecf7337fd062"
  },
  {
    "url": "assets/js/43.fc820f9b.js",
    "revision": "4983aa63aa10c2270288b32ca48f4d6c"
  },
  {
    "url": "assets/js/44.ab098bb4.js",
    "revision": "1d4c77a4ca3691491d4f60d2f85dfc23"
  },
  {
    "url": "assets/js/45.bf6ee42f.js",
    "revision": "c224f6bbc2626db14b7079b64f3666c9"
  },
  {
    "url": "assets/js/46.d44f5736.js",
    "revision": "baaaeeb5b88a9e1592f35a07936c3d37"
  },
  {
    "url": "assets/js/47.dac7f3cc.js",
    "revision": "341671dd5abb2b2b659498da0c40c0d5"
  },
  {
    "url": "assets/js/48.58343188.js",
    "revision": "e8bf25dada1042b181f96ce64af4d2e0"
  },
  {
    "url": "assets/js/49.ebafb35a.js",
    "revision": "2789132749942753525d29724d347d61"
  },
  {
    "url": "assets/js/5.b06b0d86.js",
    "revision": "dca1e507aaf4a0a376ecf83d249293f3"
  },
  {
    "url": "assets/js/50.73e5557e.js",
    "revision": "f0ce66645c66d2ac7c04fae320796557"
  },
  {
    "url": "assets/js/51.7ba553a4.js",
    "revision": "0857a6a6dc4165f611c420dccd1113d6"
  },
  {
    "url": "assets/js/52.f3d4ec78.js",
    "revision": "303d1776a0586e00480c10fe3ad7d4e7"
  },
  {
    "url": "assets/js/53.1d064717.js",
    "revision": "406f7285b00947444f53a0d48130ed79"
  },
  {
    "url": "assets/js/54.b04b9006.js",
    "revision": "bab0f4916430fcb756130cf1ba6b676d"
  },
  {
    "url": "assets/js/55.e8a24784.js",
    "revision": "5b29b7ba90b1dd437a3d064d76f3ad65"
  },
  {
    "url": "assets/js/56.fbc7f7e5.js",
    "revision": "8f2e21cf2df738dc839a530ea6ae35fc"
  },
  {
    "url": "assets/js/57.931aff88.js",
    "revision": "b3a1db1684402222afcc05235cc632b5"
  },
  {
    "url": "assets/js/58.0b878199.js",
    "revision": "f746dfaaa83786316f36dc7f8b7b74f4"
  },
  {
    "url": "assets/js/59.93124375.js",
    "revision": "734f2384594e64e06763e79e57126782"
  },
  {
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.c4cd00f7.js",
    "revision": "5776df5ed79519a3c83e30bceff0e38a"
  },
  {
    "url": "assets/js/61.02243759.js",
    "revision": "9e653449a6cd76ae7a2c68ff702afdbb"
  },
  {
    "url": "assets/js/62.1b1f568f.js",
    "revision": "4d30a4953e27f0375ca8447011677579"
  },
  {
    "url": "assets/js/63.b113a697.js",
    "revision": "ffa47ccead5d934563abfb46e1575dd6"
  },
  {
    "url": "assets/js/64.c4852597.js",
    "revision": "2e90f52f3779289b1d1f123cf7d1f680"
  },
  {
    "url": "assets/js/65.2d3e8d19.js",
    "revision": "b84b75b4c3d272db04aaf62e65dd8b46"
  },
  {
    "url": "assets/js/66.4f024f5e.js",
    "revision": "11f4f355e32cf250e9f3ede154fbdf53"
  },
  {
    "url": "assets/js/67.7d020b84.js",
    "revision": "b8aeba4e0007ad59cbd513687aeb1aef"
  },
  {
    "url": "assets/js/68.17701077.js",
    "revision": "0a2a6a887f4bd19259e634eb687da02a"
  },
  {
    "url": "assets/js/69.7a795e33.js",
    "revision": "105147938dd3a4016797100d474526b4"
  },
  {
    "url": "assets/js/7.567e98f4.js",
    "revision": "fa23c03c38d2e83b37f794552982c93f"
  },
  {
    "url": "assets/js/70.64521d80.js",
    "revision": "a13958a594941685bf3f7e17c4d6ca10"
  },
  {
    "url": "assets/js/71.3367ef27.js",
    "revision": "3286ff4257404cbe57580cc4c98110e9"
  },
  {
    "url": "assets/js/72.57009301.js",
    "revision": "5be1e714e17e2536f80bffbeef0826e7"
  },
  {
    "url": "assets/js/73.637b7bd9.js",
    "revision": "b58ddf3af39044f9083234dd5f694c00"
  },
  {
    "url": "assets/js/74.410e6c50.js",
    "revision": "8f68ecd025b03453463609804728b554"
  },
  {
    "url": "assets/js/75.5e3dc700.js",
    "revision": "8dfc635364c39577bafe2b9d7ad84851"
  },
  {
    "url": "assets/js/76.095c9267.js",
    "revision": "1e5ece0ddb8c31c38351a6a1fddd3722"
  },
  {
    "url": "assets/js/77.d9daf226.js",
    "revision": "be0e120206ec4ac03dc2eaedaabbb241"
  },
  {
    "url": "assets/js/78.713bde29.js",
    "revision": "098a35e9e6d24e77ca3fa655877c89bf"
  },
  {
    "url": "assets/js/79.56e7b1c1.js",
    "revision": "b7bfa75db2c6b2a68bee63d9b9052f65"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.6ff1423f.js",
    "revision": "0ca423c4948ea2367d23de4d7c7045e8"
  },
  {
    "url": "assets/js/81.38985e17.js",
    "revision": "ee4b28b505aef1aca33a2cbd30dd2a20"
  },
  {
    "url": "assets/js/82.800d48a6.js",
    "revision": "6eae1970367eb74635371dc845b2190e"
  },
  {
    "url": "assets/js/83.a6a82839.js",
    "revision": "b4dbde15899465c4e08bca295ead5b4d"
  },
  {
    "url": "assets/js/84.740732bf.js",
    "revision": "98fbf21ae61b1b10da87307aa97b050c"
  },
  {
    "url": "assets/js/85.7ee9f539.js",
    "revision": "29b9d437ba909fd60859e2cb800adae5"
  },
  {
    "url": "assets/js/86.6d992567.js",
    "revision": "187e4389e7f1052581bbc0760e56f1e3"
  },
  {
    "url": "assets/js/87.024401d3.js",
    "revision": "563112299ae22d811f74685a5f86c0f7"
  },
  {
    "url": "assets/js/88.e1b2ad87.js",
    "revision": "86e3556977d12b685e4d7760b817e797"
  },
  {
    "url": "assets/js/89.da67f2c3.js",
    "revision": "2c2d158260855cfc8d162c6e98eab399"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.df2764c6.js",
    "revision": "12d000d89f355025b80ed12f21a7a4b3"
  },
  {
    "url": "assets/js/91.300b67aa.js",
    "revision": "d19dc7d5092b6712945bc6cd78def3fb"
  },
  {
    "url": "assets/js/92.42c76c26.js",
    "revision": "6536ac0d6d6c1cab0a07cadaef1b89ca"
  },
  {
    "url": "assets/js/93.75e3169d.js",
    "revision": "a9a9945f73ccf1f1785e109101517acb"
  },
  {
    "url": "assets/js/94.81c75bdd.js",
    "revision": "80499a6ecabf1e1eaaa8db8e4403ea7e"
  },
  {
    "url": "assets/js/95.5e2cbe83.js",
    "revision": "1fa157dc7dc8f1d9a029248620c69c28"
  },
  {
    "url": "assets/js/96.f69bd55e.js",
    "revision": "c9e92adb3ac7292829e393962c8daeec"
  },
  {
    "url": "assets/js/97.3b2a212c.js",
    "revision": "8c1c433961770e25fb6749471080e53e"
  },
  {
    "url": "assets/js/98.87ffb554.js",
    "revision": "1511427fa600562277b550fb57e7e31f"
  },
  {
    "url": "assets/js/99.39169b6c.js",
    "revision": "d4beedce182704072cafeace546f2f92"
  },
  {
    "url": "assets/js/app.6bc1aad0.js",
    "revision": "cbd50559439279992ff1c415385e7716"
  },
  {
    "url": "assets/js/vendors~flowchart.2b48bf23.js",
    "revision": "10503c6087c36ddc75bdfcc56b16a8d1"
  },
  {
    "url": "assets/js/vendors~notification.14a64265.js",
    "revision": "94759ed4b7cf07c1fc83c4400f0d520d"
  },
  {
    "url": "bt-1.jpg",
    "revision": "d97dcba271741a2f70718bfe59aef7c3"
  },
  {
    "url": "bt-2.jpg",
    "revision": "40e45e78b23ec5a659d5f70103653e0f"
  },
  {
    "url": "bt-3.jpg",
    "revision": "ba38ecd16d69d1e8890fdb44ef96a776"
  },
  {
    "url": "bt-4.jpg",
    "revision": "748e8fa80f8dbe30d2cdf9689674a5ce"
  },
  {
    "url": "bt-5.jpg",
    "revision": "bc6a694ba349fb168684974a97371f7d"
  },
  {
    "url": "config/index.html",
    "revision": "99a73bbef6d67769aff863803f94d590"
  },
  {
    "url": "faq/index.html",
    "revision": "6445932248c07dc866e2468535ceb151"
  },
  {
    "url": "guide/assets.html",
    "revision": "9f558a50e8b0f8c792cf7cea5e01a0d6"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a431a4597b7da7a2e5538d4e0a0026f8"
  },
  {
    "url": "guide/coffee.html",
    "revision": "7cf57eb4dc376de2b06c3eb2b97b389c"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "6ee0312a48e334a3c9ec4dfb444c47cf"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "01ccf72f81d8624126c6beb31a569a32"
  },
  {
    "url": "guide/help.html",
    "revision": "1b646b20e4e2fb2275f2e0185d2969aa"
  },
  {
    "url": "guide/index.html",
    "revision": "a3eeebe2dcb622bc4c225c45aec92f10"
  },
  {
    "url": "guide/lang.html",
    "revision": "c8500aa50902b3e669b5f812148a9cb1"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "1e59e8a29e44950db909ef3cca7e9a97"
  },
  {
    "url": "guide/security.html",
    "revision": "0ed10b0dd816b068db3105bf27b9a155"
  },
  {
    "url": "guide/tags.html",
    "revision": "ced57fce1e79f8a31a2a3f167702c0e5"
  },
  {
    "url": "guide/update-log.html",
    "revision": "c7121372980b8634fba6f2f6b2e748ee"
  },
  {
    "url": "hero.png",
    "revision": "c4d472f0d1791a48a87b9b1a7a5eda5f"
  },
  {
    "url": "i-1.jpg",
    "revision": "20ed2be1dee3eebff4b8a1858e27cf1e"
  },
  {
    "url": "i-2.jpg",
    "revision": "92d370d74d11a156d46c579e2c8f8c08"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "97f331d71390a01d53b41d5e8393cbd5"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "1da75028a54c74de6bd78963e86b0254"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "e19ed09752d0d1f8e545a3b61e0d067f"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "91cfc4b2c035567568cbf3e58c2a6a5e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "57ade35b9078a7cba5ce91003a2819ee"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "d9b962efc64441029e00af0d74017442"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "8a49cda1cd6cd05bf318914178130631"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "fb9144e149995463604be23d959beeaf"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "aa59a440cc711e790080705f55784292"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "caf5494493c6db78a42c8f1b60f3fed9"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "cc35277df0332b20ddb58ee6c3d99a12"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "26dc7e04c6f5dc573041186d08594924"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "29a2026b3c305b02c5f850892faeb5e4"
  },
  {
    "url": "index.html",
    "revision": "8292d7378f907e21a30711379a82ac6e"
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
    "revision": "1d6fb5d6259a60a6206546cf63985e56"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/index.html",
    "revision": "2f16eee99bdb871ce61d38ba8c049287"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "6db1d5973f2a7cbb638b3860671901a6"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "05603d3ff3372292615d8e20a831d40d"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "f861d1aec62648a59e6c6087ead1f62e"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "dd4f3cc5c9d2f0e5dbf4119b6cdc54f5"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "c60024a19d3b9052b103d0c9ec7ab294"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "b120e49af297bec634bd3bcc1035cbb5"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "fa29391c2d4d5c35dd8fbe5c640610c4"
  },
  {
    "url": "qq-msm-1.jpg",
    "revision": "bcedc1512b6668e806040445df853bac"
  },
  {
    "url": "qq-msm-2.jpg",
    "revision": "d17ce0cde1d0be0fe94d1ca9e99177b2"
  },
  {
    "url": "qq-msm-3.jpg",
    "revision": "4295c99cefc8562cc558f96c3cc1aa75"
  },
  {
    "url": "qq-msm.jpg",
    "revision": "5712857ab73f1e6f9071229e86705b95"
  },
  {
    "url": "sanjifenxiao.png",
    "revision": "56a893e1f5e2265519c3555a74965709"
  },
  {
    "url": "shikan.png",
    "revision": "57b6160f06ad4f453fbf80d6fd00821f"
  },
  {
    "url": "shikan2.png",
    "revision": "c72e2e63f619f4590ff30fa26ec1075c"
  },
  {
    "url": "sql-1.jpg",
    "revision": "7d65240e8f1b9ecd930bf0c1c6335699"
  },
  {
    "url": "sql-2.jpg",
    "revision": "cfb2b62ef36a9a230928b4bad4e500d7"
  },
  {
    "url": "sql-3.jpg",
    "revision": "40b2d9e1f1083521844abf4acd54dd79"
  },
  {
    "url": "tc/api/collect.html",
    "revision": "e83e96990ad08f87f3aadac5ee79a4c7"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "022816239f95ecfb181cc3d319507101"
  },
  {
    "url": "tc/config/index.html",
    "revision": "94c0114e4fa0cced3c0bb1afd82d0776"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "442e65a0bbda6d83063322b03291c6bf"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "dde59769ef10715eb3bb9d69edebd598"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "f5f07e28aa1cec783d7e1d4530b8a83c"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "bcafe611b53cf15b1932518cd2f86864"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "5f5d41fdb83324cc8106844a87dac58a"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "00d45b6deef21359207dc43f22fe3787"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "87e7e6a388828e2ca0bb4db3b36d6f37"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "c102bd5a3a47c2f63367a2694d37e315"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "d2aeaf043bbaca4f11f62771606301dd"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "b566f82ff4f57244c7c649b00d89c580"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "64833b0ed9b994039693e6dc532ce492"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "1222efbd57070730e6893f9d514f6669"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "10fc40a4c93fc4479ccb433a311cec06"
  },
  {
    "url": "tc/index.html",
    "revision": "022e2d1279b4620f4e72c9feb73b81d7"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "2ca9f9394c20e0043eddd694df34bfe6"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "9e03e81fef8e788feff331153c31539c"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "692d1f9cf15875c3bd91e4ed2054523c"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "55d9117a7178917049fda9e39433f695"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "110217cb8f7093ec8bd3476ce4f7511e"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "0078d37ea97d71d45808ad9861c928e5"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "442c3449d284e4b50961b3b4875d5055"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "f4b4cbf7a148898a862c9c0d820442ad"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "e79fa57a6848835bf3c55e75131725cc"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "e785f7aa5c317adcef0dc7bb0f38f5f3"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "ac89482a7ac08e13cacf60d501b380d3"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "985c3ca64e33d807259c023ccba7bbfa"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "6a17a54f68fd7516685fe27d2a552c1a"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "52b3b608fd4f19ef737900a30fa15859"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "bd4f3afdc4d3e83cd2554d495825311d"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "c97dc2fe6eb2a5ed5345c3d36a3b1e88"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "517baa7336cfdda6909740bd9799d8d8"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "da11ad1eb5dbc75da79f930b9a811c5c"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "4fbec592577cd1d9538b492662497761"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "e6773a309e69a446a376e19206c969ff"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "525bd57a3095cba3fc58707465032430"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "fb6253c996e91c94cb9f36091b0a4198"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "cdfa9c735d2e2219b356e7f3b924089b"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "b935950507c4f4f4dbc001a980e1ddf3"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "ebe0f9af38dfccfdcebb1c2f94178f20"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "ccb3ba38e23c70b89dcf3c5d338f8fa9"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "c3e86700768c22404a12c1be3660aba5"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "9299211fa083090ce3bfa0471a4c5072"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "b40c3bcf6758500138c9c3c20d9659f2"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "8fc1a4b37fda9e34ad21de6bfec01da7"
  },
  {
    "url": "theme/index.html",
    "revision": "b3625e1e631c3a9fa62b9f5b54dbe271"
  },
  {
    "url": "theme/senior.html",
    "revision": "c46094c00e18bffbeca3125062c4f64b"
  },
  {
    "url": "theme/structure.html",
    "revision": "738e1e1af0fd66ab7b9b1f40fc66fa92"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "88693566b2ad04f8a416bd493a91442d"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "c0637b1645e549a868b92316d56683d0"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "cd5b2f2537f0e0247b905ccccfb03e9e"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "714a77e12e3538f89350826df72c3b81"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "23a073bbc962b750115e376554d3f593"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "ad5ce23a7342702678b0361a26445022"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "00b872274f92d23920c5f93798dcc1e3"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "00510b65cf4a7f1a2780e7db9ad2acf8"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "3ea4e90254913abc9fa9605a00483d26"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "8f91b1c0c86a051b8e43de0c3da314d3"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "5ee7671b9c60b3e083aa57f38d83354a"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "cb56139becd68a590c92578e5fc79431"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "0f9dd8556487dbd2b88c5a8cf377855a"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "adea8b2b3773e1567ee2ccabae400877"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "4a222532a7e04e5bb72dba3f678ef2d3"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "9e9948cd0430797683e2ac4b8d76e9ca"
  },
  {
    "url": "webmaster/server.html",
    "revision": "73a6c2bd4f4bd09787ce31c4764e6b4f"
  },
  {
    "url": "webmaster/template.html",
    "revision": "84cd1488497bc4acba9903e9dbb15352"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "289b4eaf1abc3ffb5ed225277db0a82b"
  },
  {
    "url": "youxiang-2.png",
    "revision": "f5904233a0b44307f679167e39367641"
  },
  {
    "url": "youxiang.jpg",
    "revision": "c93a87440ed4feec06d092ee718e645f"
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
