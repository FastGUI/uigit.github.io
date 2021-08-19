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
    "revision": "3e4ce5b656f9f23effa39830958ebc1b"
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
    "revision": "9a834ca62f56d93d961a05541ca404e7"
  },
  {
    "url": "api/web-design.html",
    "revision": "2c80f328b5c6f618d97052b459ed1f90"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.32dee656.css",
    "revision": "0b6dd00bbf593b8cf23275fbc9f27cc4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.83a022e5.js",
    "revision": "f4cea24de52b47f74916a102aca20fb5"
  },
  {
    "url": "assets/js/100.2831571a.js",
    "revision": "074667c45f05282aa28b73d69bcc48cf"
  },
  {
    "url": "assets/js/101.c9aea171.js",
    "revision": "66d7210de379b857b12801644e2429c1"
  },
  {
    "url": "assets/js/102.63ca354d.js",
    "revision": "aa499888964aa0fe7835836c8c3fecfd"
  },
  {
    "url": "assets/js/103.2fcb7824.js",
    "revision": "cb24e7c1d57e0567a3d109d17b906ea5"
  },
  {
    "url": "assets/js/104.c5c6963b.js",
    "revision": "610e63d259b70ab1668a3ade8ecd0d07"
  },
  {
    "url": "assets/js/105.82f9fe25.js",
    "revision": "17f174ccce455ba4d2429b4574c6b09a"
  },
  {
    "url": "assets/js/106.0505d5f0.js",
    "revision": "da938f20caf6df3fd0e4a0e3330e06d4"
  },
  {
    "url": "assets/js/107.b506ea1d.js",
    "revision": "b373c9cd35af49e62b41c2e64c1ce6dc"
  },
  {
    "url": "assets/js/108.a38b74f9.js",
    "revision": "80ddf5117ca1865594fbd707f1d1cfbc"
  },
  {
    "url": "assets/js/109.315bfc9a.js",
    "revision": "1ee7a3925a9513b836875cbe63a40b59"
  },
  {
    "url": "assets/js/11.a1ff2cf2.js",
    "revision": "6d2309e080b0f6c325248d69451c5c28"
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
    "url": "assets/js/18.baffa8fc.js",
    "revision": "1d82ae6b1929779a18b7a803a1bb0aad"
  },
  {
    "url": "assets/js/19.d66c8945.js",
    "revision": "4af80e151221906a195aa0f3aa9ebab4"
  },
  {
    "url": "assets/js/20.caae876a.js",
    "revision": "3bd65bc9a9eebf38e2462459e04fe600"
  },
  {
    "url": "assets/js/21.5a57dc94.js",
    "revision": "3de7afcf1e6a8c3adfbf65b0215de5ee"
  },
  {
    "url": "assets/js/22.23c1d2f4.js",
    "revision": "ada0ba9cb06b5799566b599c075a6816"
  },
  {
    "url": "assets/js/23.9e7a5763.js",
    "revision": "a75715034ef225ada435bfc3d61db5c4"
  },
  {
    "url": "assets/js/24.f6fcccc8.js",
    "revision": "764156ee709b0682409f01fb658d952b"
  },
  {
    "url": "assets/js/25.86a37e2a.js",
    "revision": "010ef80292b056f55c91e34d63d08270"
  },
  {
    "url": "assets/js/26.ada967b3.js",
    "revision": "de419f52f0c08ca0056697d05ebed12c"
  },
  {
    "url": "assets/js/27.a00c1087.js",
    "revision": "aa7c967601df72de8f21b14a5f32e9b2"
  },
  {
    "url": "assets/js/28.bf893a3b.js",
    "revision": "717234fc481fbc999f9e855944681b59"
  },
  {
    "url": "assets/js/29.b2c0edb9.js",
    "revision": "09411ecbbe105559a367e5bb4164e03b"
  },
  {
    "url": "assets/js/30.069573b8.js",
    "revision": "d48711c946887af9a8dccf8246f16b93"
  },
  {
    "url": "assets/js/31.3fcf869b.js",
    "revision": "0a2e0c78aa12cd3de166f6b2829bc9ae"
  },
  {
    "url": "assets/js/32.de40852f.js",
    "revision": "dd1758976144a897c2995b4b646727c2"
  },
  {
    "url": "assets/js/33.82643a49.js",
    "revision": "d432db4e814e95a6f5828aa4e6dfb5d5"
  },
  {
    "url": "assets/js/34.9472bd61.js",
    "revision": "3749c649d4e67ab594f10839967422f7"
  },
  {
    "url": "assets/js/35.69a25bd4.js",
    "revision": "9eb5c0d0a35106ac28f5cb22705f96c1"
  },
  {
    "url": "assets/js/36.02f0de0d.js",
    "revision": "807451699bc66e87e29619ae9dba2e61"
  },
  {
    "url": "assets/js/37.ee635b54.js",
    "revision": "2036ff4e505603f0133c21f0932753dd"
  },
  {
    "url": "assets/js/38.8d51470b.js",
    "revision": "21e780f1bb87b39baff4f0284cff347d"
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
    "url": "assets/js/40.f04b5a8c.js",
    "revision": "9200c9c87df7b7e320f913fa884be4a7"
  },
  {
    "url": "assets/js/41.5d130e8f.js",
    "revision": "51ddfd5bcb174fb1225bd0172099d930"
  },
  {
    "url": "assets/js/42.f904627d.js",
    "revision": "e95efa36f53da627d35e8dda327dc203"
  },
  {
    "url": "assets/js/43.9abb4bcb.js",
    "revision": "58d9471124a503d1020e9d3dda02c2b1"
  },
  {
    "url": "assets/js/44.3f80cdba.js",
    "revision": "da6bf8df87ac8a9c8464f297d87be32b"
  },
  {
    "url": "assets/js/45.a617dec9.js",
    "revision": "55c18652b9fb8fae1e26f2887cf43479"
  },
  {
    "url": "assets/js/46.80bac75d.js",
    "revision": "27ded14e7f13b4fe92f156785f0fb30e"
  },
  {
    "url": "assets/js/47.05f1409d.js",
    "revision": "96d48fca3ccd54508390db3894772e06"
  },
  {
    "url": "assets/js/48.adbfa87a.js",
    "revision": "1ad8f5b0112a3c9e37b8988d417f2aff"
  },
  {
    "url": "assets/js/49.2295ee72.js",
    "revision": "138a468f692d751794b31528a6c5a3de"
  },
  {
    "url": "assets/js/5.29a4c170.js",
    "revision": "67c7ae3423cfb5de4127591434870624"
  },
  {
    "url": "assets/js/50.96877bf8.js",
    "revision": "8696ac89c3de0a3f0c4845e3e11c9335"
  },
  {
    "url": "assets/js/51.07037b38.js",
    "revision": "fb9b218b46e519d9a46ddf9fa6a6ac87"
  },
  {
    "url": "assets/js/52.764b7ce9.js",
    "revision": "f8d266cdefd2f8600119e91a5dfb3b4a"
  },
  {
    "url": "assets/js/53.133629a5.js",
    "revision": "58080b52c58e4331d655686c6f3c37a3"
  },
  {
    "url": "assets/js/54.a500f3e7.js",
    "revision": "ac88a7dda1bb9ced9e216b1fc929ec16"
  },
  {
    "url": "assets/js/55.68350ebc.js",
    "revision": "94409e54e5ef1ee99922be3fd5c81612"
  },
  {
    "url": "assets/js/56.4c0dfa02.js",
    "revision": "248457369ed8bcf5694f9bd56458a6f4"
  },
  {
    "url": "assets/js/57.d0a45b0b.js",
    "revision": "06212e7e8a006d5a6158be230e9b399d"
  },
  {
    "url": "assets/js/58.761092ac.js",
    "revision": "ad85bc0e98b248c52da74e44ac960d80"
  },
  {
    "url": "assets/js/59.7b69914f.js",
    "revision": "c24c70e851262f574b3a0bbaba42585b"
  },
  {
    "url": "assets/js/6.53f138da.js",
    "revision": "43b48f773f21fbac966546df3386967f"
  },
  {
    "url": "assets/js/60.a49e593d.js",
    "revision": "31c65d86ef037b51931ddd7f10693c51"
  },
  {
    "url": "assets/js/61.3e8c8878.js",
    "revision": "780de128fb0fe09ab5c3ab93c0ed5561"
  },
  {
    "url": "assets/js/62.e51c74fa.js",
    "revision": "87c8685017fb0bb9c03e633f9e080e5b"
  },
  {
    "url": "assets/js/63.6c05dc87.js",
    "revision": "d6f797b19e81efa5d96a88640466f7a9"
  },
  {
    "url": "assets/js/64.4a3a66cf.js",
    "revision": "51ef9b187674eda9ca2918e578c00e88"
  },
  {
    "url": "assets/js/65.bdca82fa.js",
    "revision": "df29b6a036f04239bde289a826c15686"
  },
  {
    "url": "assets/js/66.92161f68.js",
    "revision": "3983adf107da48c92c997b689b7429f1"
  },
  {
    "url": "assets/js/67.3d407cb7.js",
    "revision": "1b50957a02614311c7a6b9493a29ddb2"
  },
  {
    "url": "assets/js/68.04faf927.js",
    "revision": "191f842c0899c0f972718630c1102759"
  },
  {
    "url": "assets/js/69.b51f9f1f.js",
    "revision": "e7079072e4dbdf70ca28c040a35478e2"
  },
  {
    "url": "assets/js/7.c08d5db0.js",
    "revision": "2f724d4d48c500b78de68ded9be17962"
  },
  {
    "url": "assets/js/70.6ad8a6e9.js",
    "revision": "d267437743b66a24b697c7cc1dabcb52"
  },
  {
    "url": "assets/js/71.6c4fff4e.js",
    "revision": "6df346069a6abef33b4b025160c40f55"
  },
  {
    "url": "assets/js/72.44cbe215.js",
    "revision": "55b7d7bfd70ff5e054ce3e5f92467be7"
  },
  {
    "url": "assets/js/73.d16f24be.js",
    "revision": "f0f61f9ddcab3c21bcd1e6673c0e41f1"
  },
  {
    "url": "assets/js/74.d8188538.js",
    "revision": "d5386a8fdb95bc45ac63dba450090b9e"
  },
  {
    "url": "assets/js/75.98f03565.js",
    "revision": "ce125107bca817c2a724a6621117b626"
  },
  {
    "url": "assets/js/76.fa415493.js",
    "revision": "8f385cff2d90c69098791f3c0b942f95"
  },
  {
    "url": "assets/js/77.a75832e5.js",
    "revision": "8c44496be4308168a7501783279f0d4d"
  },
  {
    "url": "assets/js/78.bca133b1.js",
    "revision": "f939a0f75d18dab630483ff64681282e"
  },
  {
    "url": "assets/js/79.ec478792.js",
    "revision": "1870e4596a8b70be095b04c5cb2b4466"
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
    "url": "assets/js/81.30541779.js",
    "revision": "2b1541bf4bb2c9a264f40bbaaf21dbb1"
  },
  {
    "url": "assets/js/82.02e404e7.js",
    "revision": "e6f0761d741f3b221ce52d44f9f5c43c"
  },
  {
    "url": "assets/js/83.ef4dc34b.js",
    "revision": "f3870a388dc81d23b3da369bf41c9bd7"
  },
  {
    "url": "assets/js/84.b16b7ac0.js",
    "revision": "a721c7060ba2ceb20921f07ca4b23540"
  },
  {
    "url": "assets/js/85.5795dae6.js",
    "revision": "54f79c3114449aa3d25f229532383f36"
  },
  {
    "url": "assets/js/86.ec5d009b.js",
    "revision": "68b64da2ecf404c2c6739f076a301606"
  },
  {
    "url": "assets/js/87.88c984fe.js",
    "revision": "0d4b64ceac8f19c70a2a0c239974c463"
  },
  {
    "url": "assets/js/88.842959bf.js",
    "revision": "37f358403167ee9efb435770656c1216"
  },
  {
    "url": "assets/js/89.acb1ecee.js",
    "revision": "e5b39f281c35a5ce0302677af18d69eb"
  },
  {
    "url": "assets/js/9.267236a4.js",
    "revision": "e7e8dbbf5bde5b9f5ecb2e270a35ab19"
  },
  {
    "url": "assets/js/90.02689f0d.js",
    "revision": "15f9839bb55c1077442b9a765ad67983"
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
    "url": "assets/js/93.6ed400b4.js",
    "revision": "3d2b460efd743a50e903da1362b73b78"
  },
  {
    "url": "assets/js/94.a6b2a489.js",
    "revision": "8794609113ed0d1dbaa3aea5fb2ca7cc"
  },
  {
    "url": "assets/js/95.5302fa6c.js",
    "revision": "593bdd5157b1134da633dc8065737717"
  },
  {
    "url": "assets/js/96.5f8183b2.js",
    "revision": "d2918e1ec2207f15de4d015f4ea85959"
  },
  {
    "url": "assets/js/97.20f56faa.js",
    "revision": "7083745030a1b9456be9c05e0dff4ded"
  },
  {
    "url": "assets/js/98.7e03e271.js",
    "revision": "577bc9e6bd582cb562f340dfd2093ff6"
  },
  {
    "url": "assets/js/99.4b7fe3f5.js",
    "revision": "041c97dd4ba9142f48fdb7088c48864d"
  },
  {
    "url": "assets/js/app.6ebf1694.js",
    "revision": "67c0d8b32a670d3007e76065d7d314f7"
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
    "revision": "7e9d389718927a850ad3233735874c7f"
  },
  {
    "url": "faq/index.html",
    "revision": "68c02f0520219c20a06cae70b6d7f36f"
  },
  {
    "url": "guide/assets.html",
    "revision": "8e39012e4ffc5d7ef14021cef2162fac"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "d7294a3a886d4b1e9efe72cd2a3a49d8"
  },
  {
    "url": "guide/coffee.html",
    "revision": "3e966d321042ff2194c0020403bb3736"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "fcf1cbd97a2b3ba25399afd1a0fca481"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "62245a22995f652d145727350b0a0f23"
  },
  {
    "url": "guide/help.html",
    "revision": "80d3c030dd8426c293fd5de392976e50"
  },
  {
    "url": "guide/index.html",
    "revision": "4d700f6efce60b9ce962742ddfa50c43"
  },
  {
    "url": "guide/lang.html",
    "revision": "34b21727733248a2d0afc9cca1dc2dea"
  },
  {
    "url": "guide/security.html",
    "revision": "b3c16bab0438e938925573d472905472"
  },
  {
    "url": "guide/tags.html",
    "revision": "994c89eafc0a5bad58216c11fd01263d"
  },
  {
    "url": "guide/update-log.html",
    "revision": "8339f580c51e17cec548b82008f68237"
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
    "revision": "384a8a9ec4a1d035e25f1b2fdbe7ed9b"
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
    "revision": "2baff6e63a2b7db52a53270726c71dd2"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "0b15b4e3cb15274e9bd1026dbc1c6abe"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "c8f35d9e51f50851f90d625cb79761ed"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "813b1afddbd33ebd893ec2d4d78024ef"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "8a2e9d800749c9d3ebf0bdf32e846316"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "4a4627f72d5ab549f62b4c4c91773e3e"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "1065a6316340c1b8c9d1e40604e380ff"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "08a1c9dbc37e7c16d5a1098f42a58160"
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
    "revision": "f37780641b1fe8a2a6dc1ae2d4ff211e"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "bf6c0aa912831db331edc32d2c2c9ceb"
  },
  {
    "url": "tc/config/index.html",
    "revision": "08db76bd1d5f31934c208f19ae728fa0"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "a24d528213df65192c767fa887aa1b4a"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "4ea47154b112c997d183ca07066e7d73"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "ab16b71cfcac7a97d5d1cbae84db6c29"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "5f8b337753c21f360b515c09c154788d"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "8468cd2f13c24bc0dfb00d1514b0465e"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "e5b6aaa6b391659dc5d64794be0f6f8d"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "dfb8ad6d8be4fee1fd6c3bcb47e656fd"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "a8486746d6d2295806211fd347416d57"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "dafecd1415c4a7ff376f0f22b11d367f"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "01dbd2ea59460302cb7e623ef397ef6d"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "1ccdcceee3575ef40017e6939fd66c31"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "3f703d8ae29c72b736419b737df4e684"
  },
  {
    "url": "tc/index.html",
    "revision": "01e1cd09f488e81ecaf46dcc6182bf72"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "34fdf7aeb33497065a7b15caf52deb3b"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "1028c61a837f240cb16bf1e487c4fb59"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "87cfa054927c84992ed206242cef0c3a"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "7e47e48fc0415224f9b7104816ebc469"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "93aebbc507dfbdba413c185ab2ad6c85"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "89b152b5ba22918131a75bcb3085b876"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "5a1f0212611484193bf5cfd1b02563bd"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "e8a7da6bd21ba7062bf998dec7f67205"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "b281017b75d273100aafb855c062bf6f"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "fbe9f709389a2c36e41798c4db7a935d"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "8a97162b058cf15746350089dad36ed5"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "38ba6d75ba02db27d33d963d88bb1e48"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "8d2162a943e7add6eb9735d72509e944"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "804b1d8cf0b2be273509b34f8cfb36c7"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "efedbc07b4249d8683c2270b52b54a0a"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "a0bc94802b8335dff6296e14be58b581"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "ebb41a63330e10a6800c3b91971d4cea"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "0d8b334a4d639b7284791cf70b4e67b1"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "631e3afafe5b363904e7e847132baedc"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "ed5e28ececff1374e31e27bab2ec7ed5"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "530ef2d7e721ac4eca83f003b0f9f45b"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "b5eaaea26905a60e50b8c1848be984a2"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "946ccc2ad4d957891ba194482765d6f6"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "301c6ce1bd2bf3ca8db8c1b77c626b60"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "ca99d02bcf431b69bbff2f38ce6b571d"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "2a89af794ad55f2b256925bd9eeeb103"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "e49a4b2b66bac52dd46f4029e9566a06"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "e5261680b25448f38b5a18b2265420cc"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "0c1426de86ce6760a93761f1abffd48d"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "37b4d5a5a20824f93fbcf96b7fc257bc"
  },
  {
    "url": "theme/index.html",
    "revision": "4108d1f697d1836fa58a540b71336b81"
  },
  {
    "url": "theme/senior.html",
    "revision": "2cbd4685a531daf22c2a0ae50763f050"
  },
  {
    "url": "theme/structure.html",
    "revision": "4934b0e2b6a08e8b984beb78ad0a215b"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "108571afc5157b62ce598acb5c83a5d1"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "5fd0e36b3e4db3a155feb5aaf0681b18"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "28c9c18097246ae0a681a4ea074248a8"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "878d3bfe1ea1ddb6578a99284c038dd5"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "ff0b494e33a898431221c9654e38f682"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "292665624547cd00e4dd51e8377e0911"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "fb09d6937f3f845df110e69ac9f3945c"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "2c0ffd45ae11cfe6e766052a2cb4b0a0"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "1a7cc2fcf9d2b3db2d115942a5af20b4"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "4a6705ceacd73c414b573231bc0a3231"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "380d44cfb364ba3a2356f995dfabc36a"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "5516e5cd172653043aa6357f038127f1"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a86cdb62a1a26130a0c18b08f7c35108"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "0a21bbbd76a9a9fe4d996d41b17fd944"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "fd676f3b7ef3d88dcd0fca22a7d20b1c"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "e02b9c0de34fddbec6c2dd6ea3331ea0"
  },
  {
    "url": "webmaster/server.html",
    "revision": "7081319eafe15472b11c938949ec3137"
  },
  {
    "url": "webmaster/template.html",
    "revision": "4ed8584c2104e8ba5d757f9025d1c8a4"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "fc5668343276a115fb164e91b71bdfed"
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
