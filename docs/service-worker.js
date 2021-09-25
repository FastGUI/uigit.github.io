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
    "revision": "c67b14110918ba5dd24569dc13c0a913"
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
    "revision": "5cddd6b26551c3dbe462e124f7056004"
  },
  {
    "url": "api/web-design.html",
    "revision": "18b0532326810300791f3f7b87f893c2"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.aeeac44f.css",
    "revision": "5c0bb58d3f4f496a381340acd4e1738f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6b1fb4c4.js",
    "revision": "3e8a7453c7784de07e5094a7dcf15ecd"
  },
  {
    "url": "assets/js/100.fc3f56f5.js",
    "revision": "c7d44b21344c8a7669d8fa77c1295695"
  },
  {
    "url": "assets/js/101.c46bd17c.js",
    "revision": "929bfbe021f605bd0975f4856ac13675"
  },
  {
    "url": "assets/js/102.3b7193ab.js",
    "revision": "54d6a082d632dd2f6966c66e98ac96e1"
  },
  {
    "url": "assets/js/103.de54a7c8.js",
    "revision": "f6d80ca64d7215a40d72322389ef0089"
  },
  {
    "url": "assets/js/104.e0b1633a.js",
    "revision": "c878339d805e74167233af52e5053dbc"
  },
  {
    "url": "assets/js/105.9301d2f9.js",
    "revision": "7e0006753e323d235232ba270381d9f2"
  },
  {
    "url": "assets/js/106.9d1db701.js",
    "revision": "49dd1ed0edf5f0401415998ae6edaa98"
  },
  {
    "url": "assets/js/107.931598a1.js",
    "revision": "c8850190cc18db5e5dd550ac1593912d"
  },
  {
    "url": "assets/js/108.d38e1773.js",
    "revision": "8d5a9eec7ded55c55ab46f0476867b2b"
  },
  {
    "url": "assets/js/109.f09ebaf3.js",
    "revision": "5c873090da436db4868a6d3ab8f3aacc"
  },
  {
    "url": "assets/js/11.a1ff2cf2.js",
    "revision": "6d2309e080b0f6c325248d69451c5c28"
  },
  {
    "url": "assets/js/110.33e49f3c.js",
    "revision": "1c6748a6f79ada4f6745b7ff6f616718"
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
    "url": "assets/js/17.7163bf50.js",
    "revision": "58835270b75d5c0e56e3c70fc881da0b"
  },
  {
    "url": "assets/js/18.8c5cb822.js",
    "revision": "c691b0b08f2339fad71a3523947c4cd5"
  },
  {
    "url": "assets/js/19.5dfafda9.js",
    "revision": "2decc462096e41b968576b9570a2c13b"
  },
  {
    "url": "assets/js/20.5704bf81.js",
    "revision": "344a9f389ff2b4b99e0903ddea16f04c"
  },
  {
    "url": "assets/js/21.e611375a.js",
    "revision": "acd6523da2b5eb430428000e795b9c52"
  },
  {
    "url": "assets/js/22.36510670.js",
    "revision": "7ce6aaf6a416f34cd51eba8f53994e1f"
  },
  {
    "url": "assets/js/23.acc23df5.js",
    "revision": "3507387c976afcf60b2f94002e37e79e"
  },
  {
    "url": "assets/js/24.94d743b5.js",
    "revision": "4d3530003fff25eedecf74e1af71a4ec"
  },
  {
    "url": "assets/js/25.9236c53c.js",
    "revision": "8f3636ae91ee5b9df57445534c8a32cf"
  },
  {
    "url": "assets/js/26.ada967b3.js",
    "revision": "de419f52f0c08ca0056697d05ebed12c"
  },
  {
    "url": "assets/js/27.4e9e4dac.js",
    "revision": "d757bbf8bad9abd509b3052c4bcd7a75"
  },
  {
    "url": "assets/js/28.bf893a3b.js",
    "revision": "717234fc481fbc999f9e855944681b59"
  },
  {
    "url": "assets/js/29.ab85b18a.js",
    "revision": "5f8e1b860f4d1a362743a8d8f0b0d4a7"
  },
  {
    "url": "assets/js/30.3a59457b.js",
    "revision": "5ae9fef8042ea6519d6a442507a03abf"
  },
  {
    "url": "assets/js/31.3b6c3f17.js",
    "revision": "7b34165ff73d0de4985d2cb3991a011a"
  },
  {
    "url": "assets/js/32.0a54f6f7.js",
    "revision": "4f6e0cb409e51eb69b710374b1e89c85"
  },
  {
    "url": "assets/js/33.e79d3f34.js",
    "revision": "fe34db8c54bcbbb61e218453b07d6a6c"
  },
  {
    "url": "assets/js/34.2f460730.js",
    "revision": "ecb189e265605eadfd2b27a0a6b38d1d"
  },
  {
    "url": "assets/js/35.4a037f21.js",
    "revision": "9e80bdb0b89c7fee7d1a2f437d4848a5"
  },
  {
    "url": "assets/js/36.f766d271.js",
    "revision": "d37992b72e389d589768edd9f77e17d3"
  },
  {
    "url": "assets/js/37.f5fc4e0b.js",
    "revision": "a8c4eb69baa206379ea4d6e456b60c84"
  },
  {
    "url": "assets/js/38.226dc438.js",
    "revision": "49c4f7cbbabfabf997ea1a0b11ee6308"
  },
  {
    "url": "assets/js/39.dffc0cf6.js",
    "revision": "d935cff9cdf6685663ecbd04ac2b4a30"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.c27f5980.js",
    "revision": "62875bf3b8fddc8ca8c3cf1882ac8898"
  },
  {
    "url": "assets/js/41.a9129345.js",
    "revision": "9214d800ae049239d864f39094c1bfd4"
  },
  {
    "url": "assets/js/42.187aa5e8.js",
    "revision": "16645dd9329d41e79d93531376422d4b"
  },
  {
    "url": "assets/js/43.7d9c0970.js",
    "revision": "4845979b226a492e4fb627b589ee094e"
  },
  {
    "url": "assets/js/44.77fc2b43.js",
    "revision": "cf1b26928134c4ebdcc5fe51a63533ff"
  },
  {
    "url": "assets/js/45.c927d9a9.js",
    "revision": "70d2db8fce30b8e47906d41e70358374"
  },
  {
    "url": "assets/js/46.4c16ae93.js",
    "revision": "9268a3ac753c34e06e41fff1f1905746"
  },
  {
    "url": "assets/js/47.68c6fd90.js",
    "revision": "be17fd9db62dee57db9e4a3eadcf555f"
  },
  {
    "url": "assets/js/48.657159fb.js",
    "revision": "45a3490dade1942912536ec46c90e52c"
  },
  {
    "url": "assets/js/49.22de7e1f.js",
    "revision": "447f1b583eaea190f8cb3eafa0de2981"
  },
  {
    "url": "assets/js/5.b06b0d86.js",
    "revision": "dca1e507aaf4a0a376ecf83d249293f3"
  },
  {
    "url": "assets/js/50.c9e9df46.js",
    "revision": "36a9ace670bdaeb91426008fd7d283ba"
  },
  {
    "url": "assets/js/51.f18ac484.js",
    "revision": "7a3ac0df993936a0a2813eec203b77d6"
  },
  {
    "url": "assets/js/52.77c26338.js",
    "revision": "b509e1aea46b4e6d58c8052f4d8e762a"
  },
  {
    "url": "assets/js/53.1388099f.js",
    "revision": "3a49d03512ce6db80868ee3df2af298a"
  },
  {
    "url": "assets/js/54.f63a7d8d.js",
    "revision": "ab0ea3f1500e25b08be70da89819d191"
  },
  {
    "url": "assets/js/55.19040137.js",
    "revision": "9b0b6f940c058d23ffe1716106372547"
  },
  {
    "url": "assets/js/56.6e4d2d3c.js",
    "revision": "50f9db480a641726e619b85833223dc7"
  },
  {
    "url": "assets/js/57.931aff88.js",
    "revision": "b3a1db1684402222afcc05235cc632b5"
  },
  {
    "url": "assets/js/58.c420f299.js",
    "revision": "c5f28e85e1554fb80d0d094ccd1da4f5"
  },
  {
    "url": "assets/js/59.0166943c.js",
    "revision": "4f7563d37bc314d63ae9d6019b5eca61"
  },
  {
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.360ede87.js",
    "revision": "d540ce5607c815842bc3daafe12a65ef"
  },
  {
    "url": "assets/js/61.0449e7c7.js",
    "revision": "62674f66da409a8be62eb52ea63d1646"
  },
  {
    "url": "assets/js/62.2b268fc8.js",
    "revision": "faa45660b0316110066a0b223b95ca29"
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
    "url": "assets/js/65.2f2b79a8.js",
    "revision": "4cf400873ab44ce22824347e2cb3a96a"
  },
  {
    "url": "assets/js/66.6e7444c0.js",
    "revision": "3f22a9ad982636bad4a002adcc5ccbe3"
  },
  {
    "url": "assets/js/67.074c6a47.js",
    "revision": "66b82042c3b46f4da479b46d4de55e31"
  },
  {
    "url": "assets/js/68.d7063186.js",
    "revision": "fe7de6272ba7a71bfa54b2a588072e56"
  },
  {
    "url": "assets/js/69.8bf34d62.js",
    "revision": "807a22100af545c86679eac190369ff6"
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
    "url": "assets/js/71.8074da89.js",
    "revision": "ff0238266added00d81791f6bd3b853d"
  },
  {
    "url": "assets/js/72.9744b059.js",
    "revision": "6bb8a8e2bc9f3382f39e34ac76da8e82"
  },
  {
    "url": "assets/js/73.92cb0f29.js",
    "revision": "194f813b393afc3ac76bacb546d9ef40"
  },
  {
    "url": "assets/js/74.6e184f33.js",
    "revision": "ff0dd6a2d376371539b92aec4e086934"
  },
  {
    "url": "assets/js/75.163711c5.js",
    "revision": "e64c356614b76b8bcf9d781b221ea036"
  },
  {
    "url": "assets/js/76.6ad186a4.js",
    "revision": "f4a5a05bf2dfbd62b4e71c3d6096b503"
  },
  {
    "url": "assets/js/77.c33fd285.js",
    "revision": "a387afb38ff519b4ed7a76186e618ff2"
  },
  {
    "url": "assets/js/78.861a3e9c.js",
    "revision": "833c457404bba674de72fe5296dc2b01"
  },
  {
    "url": "assets/js/79.865b1b7c.js",
    "revision": "d56ab4032edfde8a1b7bc48ed9b9296a"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.270c147d.js",
    "revision": "5ef2551ac93e323e1ceba154fa8c01be"
  },
  {
    "url": "assets/js/81.0de06321.js",
    "revision": "4d915bb3fd85224da0dc55cf7dc7b16b"
  },
  {
    "url": "assets/js/82.bf3e40de.js",
    "revision": "0db2772018eb78cfdbe69b338fe38d1d"
  },
  {
    "url": "assets/js/83.32421d6d.js",
    "revision": "c684603116dd0de9ef4374867e61068e"
  },
  {
    "url": "assets/js/84.1a8b6271.js",
    "revision": "9dbe8527d8d3b133985b3ba677bdca5d"
  },
  {
    "url": "assets/js/85.9deff187.js",
    "revision": "74f95c5ede4a4aaa553f1fad651eb61a"
  },
  {
    "url": "assets/js/86.27871b95.js",
    "revision": "4b298386cd5cee24d28b340124a98599"
  },
  {
    "url": "assets/js/87.9c1020b4.js",
    "revision": "20787776f1fbc5f9f243bd48384419da"
  },
  {
    "url": "assets/js/88.a0ddd583.js",
    "revision": "fd75a07b26ad12ad681e3c1cb71fe3c1"
  },
  {
    "url": "assets/js/89.4ba42f4f.js",
    "revision": "20a1a00c2a9f81d1a0e6769d07baa4b9"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.3592a043.js",
    "revision": "e005ccf0ac1252122b751a6c0a40d009"
  },
  {
    "url": "assets/js/91.d9d7c359.js",
    "revision": "e5ab30db348a5f9b659dfd23c1418e8e"
  },
  {
    "url": "assets/js/92.15097574.js",
    "revision": "eddfcf697fe75c2e6d8c8245ecaad20d"
  },
  {
    "url": "assets/js/93.9545c853.js",
    "revision": "92a4e5cc7fa0520976dcbdb49e9ad607"
  },
  {
    "url": "assets/js/94.fece6a8a.js",
    "revision": "bc7f788e21d0064d5bfd0caad42a814d"
  },
  {
    "url": "assets/js/95.5e2cbe83.js",
    "revision": "1fa157dc7dc8f1d9a029248620c69c28"
  },
  {
    "url": "assets/js/96.c3a0cf16.js",
    "revision": "bacafdd60a4ead121f6f8c553ba54e6b"
  },
  {
    "url": "assets/js/97.71f326d0.js",
    "revision": "36822fefc36a06062465e1e9d5e38ef9"
  },
  {
    "url": "assets/js/98.a8e791ac.js",
    "revision": "6e8df21d7016564717ed1ab7b0e04078"
  },
  {
    "url": "assets/js/99.19d949cd.js",
    "revision": "7c00bbf612c049a9e94d345d394925bf"
  },
  {
    "url": "assets/js/app.271e581b.js",
    "revision": "cb0bc275d097999f796a5a8397fc02dd"
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
    "revision": "b825f4881a5c70beb32be99458046474"
  },
  {
    "url": "faq/index.html",
    "revision": "4be425217e96d01c0043ad958f8afa1d"
  },
  {
    "url": "guide/assets.html",
    "revision": "6751cae88a0f80fe4582034f1e93a69c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "3466d8b2270276b47c91ea546557f93f"
  },
  {
    "url": "guide/coffee.html",
    "revision": "3b90e0cd7dc64ab43cf15ef6ed727554"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "b09075e16427600d28534da8ab5df1df"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f9ae56980a15e7686017ac6c05614f95"
  },
  {
    "url": "guide/help.html",
    "revision": "02869d80279fa74475f1a9d9a1b4221b"
  },
  {
    "url": "guide/index.html",
    "revision": "3f3d609e7399ed77f267d269f2fc199b"
  },
  {
    "url": "guide/lang.html",
    "revision": "1273e20b2edd8d44f8399a6ee3671f03"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "6dcf8af1d24c31164e6d70dbfb001780"
  },
  {
    "url": "guide/security.html",
    "revision": "dd1af3e90d0e4967d11386e876bf808d"
  },
  {
    "url": "guide/tags.html",
    "revision": "96bea8575541adb2d993a11dbe4079e5"
  },
  {
    "url": "guide/update-log.html",
    "revision": "d70ac2395659ee57643875d0ba0aa263"
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
    "revision": "0dd87799546806e6597ac32870d85ade"
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
    "revision": "c6ec4dff5f25debda37dde25a4f3c07a"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "967f0103d9150415dd51d14ca118c67c"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "690ceec7cc86279a36a2102fec5d2f04"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "2f7f97db133e9485656ef8e4785fdd77"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "a2d85a1f0d8d873a89324eace1620b0b"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "7f562e97dc81b93dea89653b1ab56689"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "f46ee2a710730acf9820f05758e5c6f0"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "a2d6c10277f47db8e26f5c3ac01dcacb"
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
    "revision": "e8e435d0c3d9ccf1720a95b4c406a46e"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "13e14ad670c6c8a5b51cb1c8b9bd1499"
  },
  {
    "url": "tc/config/index.html",
    "revision": "110b1877a24c7a1d9b75fc114fd13d86"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "f4c03eecadb0e3eb820ed569e50e5d6b"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "cb4e20d405e5aa321e1ebede4580339c"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "a25ac05dc3539cf1777e86f908ccbfcb"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "73a8805781e142ebcec1815f8d4f3ac0"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "bfcc75bbd99788941bc33003b52a843c"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "bc45cab102775df7bc506d51eef925bf"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "3d4321e2055acda411a28d9635b8ea97"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "35db32e6c37d2b0330a3b8f9f266019a"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "4385b0fc38ae879830de86a1e82d7309"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "df93bf0d356df235dfbacedf5b2be49c"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "7ce20ae28961e0d6c7fa725ca92952d2"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "57bef28de667c06c775de4ba69be71db"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "fc9ecc2b73580f7ac9b0a592e234f2ad"
  },
  {
    "url": "tc/index.html",
    "revision": "3af948808f870fbd50e92cfdda4b47b4"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "5a6b47bcaa82025502634b6b24968123"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "01aa06f79fc3191f9761d301fe4f6f46"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "7db9de3fb7e6ad454341ec83d45e89a3"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "e422259d8387821f44349fa4b4adcd78"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "bcb8bbdd747437592167eed592fbcf3a"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "606f2f61c4ef747124299f8befe904a4"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "334fe9b298ee8af733190a61856dae5b"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "4728b0a99c0f68ecfa9beac7f1191bd7"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "817fdb8304b771e8b7973efbc0537bec"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "b8ac0ea41c18128dc66d0bbfc1f70af1"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "eca3ffbd5907e641cf644d8a5d382d64"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "cd7f7e925a66117ac26429bd21b46361"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "097d2af993429910a0c72997e5ce593f"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "82cf53c319b117b7ee7df807d02269aa"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "ebf7c1f4568ce7114c4bdbf545b2a320"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "84d1d091b2b90ee6b97ecf42333fe382"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "1bc6aee677a8da6393a8f6a9a92e4273"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "1bef9fa860be310dac606e0607336484"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "f44ddedf08145440c14277decb3ed553"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "3e8117b309a047327dac4226843d18db"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "1151bce2589214f42e3c744080993423"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "1a77bc5d854a5e94a975ca21faa2dfb8"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "d319c485686ff2e604843a815127ab80"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "dece9860bc216d8cc831200072e9350e"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "58880d4fb45af6999d90b049ad6c660c"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "9717c7b98d3955c881ee0501cbcc69d0"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "cd2ede7e664ac44e22a67250ddd9af48"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "4d85e8c2937496179d2f4630d2e6b7de"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "b1f5b052dbe90f5453627f622d43ac2b"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "e2937c803fa3c50e5383452d782eb2fb"
  },
  {
    "url": "theme/index.html",
    "revision": "a5a22eb613aac2fac3e4c6d77a48d3d2"
  },
  {
    "url": "theme/senior.html",
    "revision": "93ae1b633267ed732bbb445e790be5be"
  },
  {
    "url": "theme/structure.html",
    "revision": "5384a88de00474cd464834e377604d1c"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "50dc250bd48b8f542ef94b3bed5e0995"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "930d7dafe7331160b9da5d7a24ff1686"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "e7454afaa2dc8eb0560fb6f224f953dc"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "e02d33c8cd816a73bd31b369d222ac50"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "64075336794317b5d60da44835fe1ddd"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "8830398afc5d6f951467d2d8e4106a7e"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "2d3ef172f68585dc2eaa3202093b99eb"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "c16656637bfce8d4672fd7caba3f7769"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "bca0a58212cf1655709758d2537713c4"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "98eb1211e0e562e2d98b8de89d1bc231"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "0e36da544dda5be0f9807ee90e59b052"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "3a8494fe601006b01776242b5fc57e5a"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "175a300814ccccaad36340027206d388"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "c9c6254978088562b1e0979456cebf38"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "f93d461e6827e0425eb0b5d0e74fc7b7"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "d1d653ededf007e2f41dabd38390020d"
  },
  {
    "url": "webmaster/server.html",
    "revision": "58d631386b7d568913475809f8a4b6d7"
  },
  {
    "url": "webmaster/template.html",
    "revision": "a5645e496e8a5637e21d0a2ca5bca56f"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "ea0c3b3b9366de5c41d2428102ce1537"
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
