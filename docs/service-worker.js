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
    "revision": "6bf6c770fdda5cf3f5c73a91f9880aa8"
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
    "revision": "f86bbea196a6c10cb2568b775d193c46"
  },
  {
    "url": "api/web-design.html",
    "revision": "f760c458b6ba5880f3326e5e25fa418a"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.7785d7ed.css",
    "revision": "0263c2af5dd1a2dcb3f26120bac6bfa1"
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
    "url": "assets/js/100.b89d29a0.js",
    "revision": "330e7de16a7697b0691288c74e2dab33"
  },
  {
    "url": "assets/js/101.df91106f.js",
    "revision": "b69654fb3b7fc20321f5c05057bb036d"
  },
  {
    "url": "assets/js/102.f68e4309.js",
    "revision": "5609c5d4ca3a8a35a2b1c12b15ce5e9a"
  },
  {
    "url": "assets/js/103.90a4120f.js",
    "revision": "670df25eb6058a20ae72dd59220c8000"
  },
  {
    "url": "assets/js/104.e0a8b6cc.js",
    "revision": "0355454de254c460cf67ef0eb016c805"
  },
  {
    "url": "assets/js/105.82f9fe25.js",
    "revision": "17f174ccce455ba4d2429b4574c6b09a"
  },
  {
    "url": "assets/js/106.c1928ec7.js",
    "revision": "d11599dc2fc23a16e69f757a929705fb"
  },
  {
    "url": "assets/js/107.1ba81a97.js",
    "revision": "402b487f33d0f922800dfcb687e2ab9a"
  },
  {
    "url": "assets/js/108.3097f016.js",
    "revision": "e4dca08f3afa86c8946cc1c9bb52c4b7"
  },
  {
    "url": "assets/js/109.315bfc9a.js",
    "revision": "1ee7a3925a9513b836875cbe63a40b59"
  },
  {
    "url": "assets/js/11.708dd212.js",
    "revision": "6b37e18344509a1830b240b95b6d2bc0"
  },
  {
    "url": "assets/js/12.655dd338.js",
    "revision": "9183ae4d59fb39a6d8f18ba5abb218f3"
  },
  {
    "url": "assets/js/13.bfef087b.js",
    "revision": "8e6c380c47f21997ce204a90a094988b"
  },
  {
    "url": "assets/js/14.41035e8f.js",
    "revision": "23009718168e5673e9381743df7949ef"
  },
  {
    "url": "assets/js/15.d9df4c0e.js",
    "revision": "4be7c72b4c7982f78d6e8fbcad484409"
  },
  {
    "url": "assets/js/16.554ab8a9.js",
    "revision": "e0f37f9cd9f293b9b92bef05de893bd9"
  },
  {
    "url": "assets/js/17.5d81cb11.js",
    "revision": "60797f30cdbd215a97f4b74ca353ea09"
  },
  {
    "url": "assets/js/18.f2616e86.js",
    "revision": "f879a218b32fa742f800982983342774"
  },
  {
    "url": "assets/js/19.388f2e2c.js",
    "revision": "dd71555d482d759e60c0152cc85014af"
  },
  {
    "url": "assets/js/20.4e1f75b9.js",
    "revision": "0fdfd340928105df565ee0f485d5398d"
  },
  {
    "url": "assets/js/21.337b407c.js",
    "revision": "af2c09b5fd261a647c2c550b30742c0a"
  },
  {
    "url": "assets/js/22.0fc9cda0.js",
    "revision": "80c759bdce474f498c6e69bd4fcef6a6"
  },
  {
    "url": "assets/js/23.acc23df5.js",
    "revision": "3507387c976afcf60b2f94002e37e79e"
  },
  {
    "url": "assets/js/24.5203028b.js",
    "revision": "1d172aaf17bd4dcc8fc1c637729515de"
  },
  {
    "url": "assets/js/25.c7d0eda1.js",
    "revision": "cb96408c11747d3fb32db985f68ae3c2"
  },
  {
    "url": "assets/js/26.86ebdd29.js",
    "revision": "2c62c10cbc63f261e5f2e41b2d7771f6"
  },
  {
    "url": "assets/js/27.4bc6fa79.js",
    "revision": "52424e70658340052692664ab12ebbc1"
  },
  {
    "url": "assets/js/28.85afee50.js",
    "revision": "5c8feff59c96196439dd6a4f83ff6e8c"
  },
  {
    "url": "assets/js/29.2e00905a.js",
    "revision": "9660fdfefd167f37d0622e860fe0f11d"
  },
  {
    "url": "assets/js/30.36960d3a.js",
    "revision": "cb58d64a2cd86622a8639bd4c94242b6"
  },
  {
    "url": "assets/js/31.3fcf869b.js",
    "revision": "0a2e0c78aa12cd3de166f6b2829bc9ae"
  },
  {
    "url": "assets/js/32.4027396a.js",
    "revision": "49515b0ad192a71f48b73fc239aec2c3"
  },
  {
    "url": "assets/js/33.89b8082b.js",
    "revision": "a8f1433a9f11df0bb09444880a152b3e"
  },
  {
    "url": "assets/js/34.f7261052.js",
    "revision": "fbc03f8e1cce5c9066badca931e53137"
  },
  {
    "url": "assets/js/35.953c40a1.js",
    "revision": "6cdf221fec0b367bca39780d1495e1a1"
  },
  {
    "url": "assets/js/36.6ce0b1ab.js",
    "revision": "be1b03068c4134daf9800533e58118f1"
  },
  {
    "url": "assets/js/37.e3598331.js",
    "revision": "49457ec590c45a648ec4ddd00dced330"
  },
  {
    "url": "assets/js/38.ef4daa9c.js",
    "revision": "b32f07a74e477f0948b4f727c8cfe785"
  },
  {
    "url": "assets/js/39.a580ca3b.js",
    "revision": "be3a3be20d8ff8950300e03143012790"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.6886b826.js",
    "revision": "495c77105286c18f1e83fad50af6bd34"
  },
  {
    "url": "assets/js/41.ada11a43.js",
    "revision": "14bd9eff6f6d829648c5e3cc65c828e4"
  },
  {
    "url": "assets/js/42.ac9c8899.js",
    "revision": "1923efe335262319cdbebcd1e1f43998"
  },
  {
    "url": "assets/js/43.053ee84b.js",
    "revision": "f5f86342cd64d96ca687ed34bd446bc3"
  },
  {
    "url": "assets/js/44.d277758b.js",
    "revision": "d63df01e321096415bb1eae1c9e850a2"
  },
  {
    "url": "assets/js/45.a617dec9.js",
    "revision": "55c18652b9fb8fae1e26f2887cf43479"
  },
  {
    "url": "assets/js/46.c459d70e.js",
    "revision": "55be4ebd5ddb9766a8356aec2bb4c436"
  },
  {
    "url": "assets/js/47.84c387ac.js",
    "revision": "d829aa3253c67a9cc410ab077f01194b"
  },
  {
    "url": "assets/js/48.a5bbc731.js",
    "revision": "16835dc19107012474e5d1e93ecc4cea"
  },
  {
    "url": "assets/js/49.f6ddca00.js",
    "revision": "003a176245351568f852a674f36c461e"
  },
  {
    "url": "assets/js/5.29a4c170.js",
    "revision": "67c7ae3423cfb5de4127591434870624"
  },
  {
    "url": "assets/js/50.9fbdc983.js",
    "revision": "8df484ecc77f8f8d9a2aab6d9e68b960"
  },
  {
    "url": "assets/js/51.2845446d.js",
    "revision": "6fab8ab4265eef1a3ba7f20a96b34209"
  },
  {
    "url": "assets/js/52.cccadaa1.js",
    "revision": "096472aca7ce39b002f143802bf13875"
  },
  {
    "url": "assets/js/53.01c637c6.js",
    "revision": "79b874b97e1e5c2d5b17555084e28cad"
  },
  {
    "url": "assets/js/54.4514f59a.js",
    "revision": "ed244abe4b14457b996c6943adafee9d"
  },
  {
    "url": "assets/js/55.f6ea48a7.js",
    "revision": "798e9af5a26562e32bee055304759a75"
  },
  {
    "url": "assets/js/56.cae4fa50.js",
    "revision": "fa8a12ae53beb3db99ae4f716e07b3c1"
  },
  {
    "url": "assets/js/57.38f1466b.js",
    "revision": "1ce5080cb3c92f71bc15ccbab85665bb"
  },
  {
    "url": "assets/js/58.1e202367.js",
    "revision": "bca19fe3456376bdd3bf260b872a2efb"
  },
  {
    "url": "assets/js/59.00ae43ed.js",
    "revision": "58283abc3103c461eb7ad051fa2087de"
  },
  {
    "url": "assets/js/6.a9fa4fee.js",
    "revision": "affb9c4647d257771e4c64c5100b62e9"
  },
  {
    "url": "assets/js/60.b1de7c8f.js",
    "revision": "83c10149660e16348194c99240ccf595"
  },
  {
    "url": "assets/js/61.4af48761.js",
    "revision": "3510e0f76eae7a595b969114d08e3e33"
  },
  {
    "url": "assets/js/62.ab3180d6.js",
    "revision": "adb742917921bc57e04a4e775367ccb7"
  },
  {
    "url": "assets/js/63.38172140.js",
    "revision": "8ee22d2e7c450f9efab8ea145b615b77"
  },
  {
    "url": "assets/js/64.92666253.js",
    "revision": "ddba79d0810f8f5b2599f415d0d10979"
  },
  {
    "url": "assets/js/65.770e0cc5.js",
    "revision": "a4e6a4ab5783989742951f5bee8436cf"
  },
  {
    "url": "assets/js/66.37e1a3ad.js",
    "revision": "7f9182fe2b64e0d945427f1527be82fe"
  },
  {
    "url": "assets/js/67.7772868e.js",
    "revision": "a9ac3c344591696f36ac2e04864ebfd7"
  },
  {
    "url": "assets/js/68.d1c0f492.js",
    "revision": "f866929e51ba36a5190a1c1c57c512d0"
  },
  {
    "url": "assets/js/69.b51f9f1f.js",
    "revision": "e7079072e4dbdf70ca28c040a35478e2"
  },
  {
    "url": "assets/js/7.8fcade3c.js",
    "revision": "2730a6ba8a2f957e76b204f8c0021b02"
  },
  {
    "url": "assets/js/70.c97d258b.js",
    "revision": "dd75837ce0c21b24e413278844c3d7e8"
  },
  {
    "url": "assets/js/71.f98067c3.js",
    "revision": "16d4a141611a8f5e0c483fe5f5549161"
  },
  {
    "url": "assets/js/72.45bb9b77.js",
    "revision": "564af2216f9269decdea3dd2288070f9"
  },
  {
    "url": "assets/js/73.d9cc2aff.js",
    "revision": "37d7dbf4013d3b45a8138053d07ec658"
  },
  {
    "url": "assets/js/74.f5e6df36.js",
    "revision": "28a3c027b001df0ec0eaac3b33021fe6"
  },
  {
    "url": "assets/js/75.22439d70.js",
    "revision": "276e5e5f8d8e250f98f6915f38a5ed24"
  },
  {
    "url": "assets/js/76.b9bd34f7.js",
    "revision": "01d60be9806aba80a843ce570ed2d830"
  },
  {
    "url": "assets/js/77.22caaf17.js",
    "revision": "039f95d5bc41cf3838c21cb99c2c3d13"
  },
  {
    "url": "assets/js/78.063044ef.js",
    "revision": "10b7b6ae1fdf3252ae457dcd87f8161c"
  },
  {
    "url": "assets/js/79.fe4eb049.js",
    "revision": "4815e23abdca4f73b715bba05dbea0b0"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.19929127.js",
    "revision": "0539270290a59a3185abe61c9acd8985"
  },
  {
    "url": "assets/js/81.24723e8a.js",
    "revision": "449eb619dc90970c2127dbaae7abc5b3"
  },
  {
    "url": "assets/js/82.5f85cf1e.js",
    "revision": "9aa930491aa7074f9e308127729dc86e"
  },
  {
    "url": "assets/js/83.4294a183.js",
    "revision": "ebcc85158db6a41eb38ddd34ebeaccc1"
  },
  {
    "url": "assets/js/84.9e07a97a.js",
    "revision": "b46ca2e8bafed151fc0d16d4a7fac84c"
  },
  {
    "url": "assets/js/85.b4e906ca.js",
    "revision": "bbf57856c1bf47f857ac404c223b4d0b"
  },
  {
    "url": "assets/js/86.390a87ab.js",
    "revision": "d689d66f69a2d769fd030437f8f4dae0"
  },
  {
    "url": "assets/js/87.86f87d50.js",
    "revision": "3a289500d772fd5e64f4bede3106c249"
  },
  {
    "url": "assets/js/88.2231060b.js",
    "revision": "4d32cd69a66b35da91d875ec000b4a85"
  },
  {
    "url": "assets/js/89.c1d3d8e1.js",
    "revision": "49f3cb3efcf2991bcd065cdefd5ba69e"
  },
  {
    "url": "assets/js/9.267236a4.js",
    "revision": "e7e8dbbf5bde5b9f5ecb2e270a35ab19"
  },
  {
    "url": "assets/js/90.3e76e226.js",
    "revision": "a2a6a42452e23ff86594f3bc6a7533c7"
  },
  {
    "url": "assets/js/91.8185cca9.js",
    "revision": "bfee2d14fd9aa819d7241cde40656939"
  },
  {
    "url": "assets/js/92.1cfcc965.js",
    "revision": "df479ce69ef9533380a068c6c7eb2df5"
  },
  {
    "url": "assets/js/93.d07dfc32.js",
    "revision": "2ba529fc4d315d3a11c941d07aef3828"
  },
  {
    "url": "assets/js/94.33586074.js",
    "revision": "244ebf76b4305ecd82de1dc18ee23d9a"
  },
  {
    "url": "assets/js/95.16c48846.js",
    "revision": "b6fa5ab0b6c4d23caede4130d37ebe94"
  },
  {
    "url": "assets/js/96.b2c745b7.js",
    "revision": "608a5d0995d411a27ad8e02a94b5e927"
  },
  {
    "url": "assets/js/97.2b87587a.js",
    "revision": "8fe2a4138fb92900ef8b83e05e08edaa"
  },
  {
    "url": "assets/js/98.7da2a1e8.js",
    "revision": "d6785e733c469b02d59a002d19c29c76"
  },
  {
    "url": "assets/js/99.9a823734.js",
    "revision": "add6a0c1f20fc2984ad46b4238094e18"
  },
  {
    "url": "assets/js/app.e5464cdf.js",
    "revision": "b9a8d9f0e1d1b67ea9663ac42e3a7b01"
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
    "revision": "8c220699f3676db7d765764d9a157b87"
  },
  {
    "url": "faq/index.html",
    "revision": "9552fea0037feb770f1bc1928348e80f"
  },
  {
    "url": "guide/assets.html",
    "revision": "2c4b2de42b3923681d31ca5110ba4b22"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "29e652eea599f4ae4f24a33eb816e6bf"
  },
  {
    "url": "guide/coffee.html",
    "revision": "400d52656cc97a50f9a9af74735b57b4"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "a7768b80646904393018a8fdcd1d0b2c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a3a90855bc0f5b0d37de792a3e620c2c"
  },
  {
    "url": "guide/help.html",
    "revision": "98d92abf0b44058af9088a4c1fba2faa"
  },
  {
    "url": "guide/index.html",
    "revision": "4dc892288b14f896116d45e20cc074cf"
  },
  {
    "url": "guide/lang.html",
    "revision": "f912de63cf5cdf16dda5308ad5e49ecc"
  },
  {
    "url": "guide/security.html",
    "revision": "a66347bec7e65cddd59a80d32ed01345"
  },
  {
    "url": "guide/tags.html",
    "revision": "f25d4c88d4d81d8572da663a98d727de"
  },
  {
    "url": "guide/update-log.html",
    "revision": "d3ba55d1d1b2969b9fbf77f8316cb827"
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
    "revision": "a7aacc6a7d85107f5a2fbb8d1472c5c7"
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
    "revision": "93bf4cd6d689c030a89d054c029bb213"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "902609bb9a880f377056ba4f7edc124e"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "6e4a5c1d2624e998b9a5b6bad782d166"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "cc8c9ed97d48d6d216fbffc68cef1f48"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "5c10c7b8d5b4a5f71661374975d4c79a"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "4579830be562278dffe2e24fbe8b6c8d"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "2049c33016bb8be0cc26b7a79e0b3fa7"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "cb1ec942cd1eb938f5c00ccff0093fdb"
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
    "revision": "74ce69d186f1505ad8ea8aa13aebd7c9"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "10650c0a0dcf683f1a008822fad41e7f"
  },
  {
    "url": "tc/config/index.html",
    "revision": "f3f1b997c5dcfa8c7e67cabd094e56de"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "eea44c49e1779f34187353290026158e"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "69ea6fb21b3579e2d97f2a36dabb5788"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "0fd40c7ec191601df64f1d47e973d691"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "dd959d6ffd44dfa2baf9500100c723d6"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "5a4263207b4005f3b6b1fa6e8e1723f6"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "f1d98025791b9491dd9a6a1c7a7b1bf5"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "5dff3f868a6807fff336dccdd800cef1"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "88e053899be25b9c1c4f8f53197e104a"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "be96a2de1f44773b82e013998b9b46d0"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "b0ec14771067e3980fd3e83fa7a58335"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "b2f034f11c517aed6ced07c5a56e65ca"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "06363ab160318055c1e644f63e19e039"
  },
  {
    "url": "tc/index.html",
    "revision": "4da3bc7d47050084f6159eeb2ff75244"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "4d0f78b85188d223996ae975262a0d00"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "d4797da06717f9960e5e1deafcb47ae3"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "588283cf980c4fc44348cae0ec2c0e6c"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "c5e6dfd6e682063d305c7bf4c9bfd7c4"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "15936b92dbc50224fe236155fef2e65e"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "708a343d17cce2c708611fbe047c4e82"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "4e1a96d674969afcb8a10eebd3b5fafc"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "b28c9ea449b5537dc990c567d033e398"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "095565eb50526d3a66f9c198d7d64e89"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "51abf80790dbae7c640fd423f09dd420"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "dcf95d4803f89d6511bbad68563e3003"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "a7a6d0e80641c1bdf107656fdcca5a39"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "4758346388298c489d762431c633afaa"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "a4f431213144f3c394adff5c1832e442"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "04dd472476ce16186776db0e15546cb6"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "d9c58384edc385adec2afbc21304a4d2"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "a99eb6ba31622a07f3e270ae2767659a"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "64a8e747f94a4dec30a14a02eb19bef9"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "edca8c3db1c1fb73ae554ccc64227089"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "8864f950c5a395fb45edc12b63422bd9"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "96e2a17e9c3fd6a31246bff35117d5dc"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "e3d6858150dd1096c5146ffb89f25557"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "a22e0c7d74dd68f2f8cd15c2a328cb94"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "3ee7a9545aa9cf4997e0e14650b046f9"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "f234b630fe00026ba9b032dd18287272"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "92eda6c0ceda45825bdaeeb413e9b31e"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "dc7f10abd9dacc8a75761ed59f36e818"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "7309ad59ee22a4760e5f1f74f4487a0e"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "0805d937cb6a9fd20fe40faa9ce52701"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "9aaf6d53aef0cc024932948f3a6f2b19"
  },
  {
    "url": "theme/index.html",
    "revision": "4e976463386e9f5c994b1be6992871be"
  },
  {
    "url": "theme/senior.html",
    "revision": "4ce28e29777ca947ec0ef0ddbbdb5403"
  },
  {
    "url": "theme/structure.html",
    "revision": "a37b4124337c2bd0af4a47f391c835b3"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "41e3eb80a786842684fc63f89f11b336"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "b6bff797469fc50c5a80147380b9fd4e"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "def66fe808df06380e75f995861e25d4"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "609b15630a6a9a039528eadc0e07583c"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "88d6f10a7c2a9d891ed8cf1bd3f63905"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "dcb8531c14b0ee1003deb9c947c8a523"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "c70eac7ed8f36fe99642d48aa757c962"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "c882b3e0eb2cb40de080adc9ce540158"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "aa3a5d896dcfe8a3a1a2b64e58b72415"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "f82aa5d9e1619fbdf2a7fec66e3193ed"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "395f21da66e3dd6648248ef5f624102b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "4b78dfcaea61edb1f5a0b219e85f1c59"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "edc8a2ce3f9b1816814096ce27457207"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "1d2088c4f17ce3e49cdb6d7b1da6e98d"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "6ee2830ee46c595e37e8e492c32750b2"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "70760e895b0b02fd951cb392ed1218f9"
  },
  {
    "url": "webmaster/server.html",
    "revision": "d2820f43f125d543e3da3fde19a36bfc"
  },
  {
    "url": "webmaster/template.html",
    "revision": "28a4a5df79c6ef39d61dbad56953352e"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "d5fc0764ed188f26209988c48949d2da"
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
