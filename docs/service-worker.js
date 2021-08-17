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
    "revision": "99d82364fbb21bcdb300237e1e9aa806"
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
    "revision": "5f51558382959b97eed5bf0a7148ac40"
  },
  {
    "url": "api/web-design.html",
    "revision": "a286c1cffc2293cf73056ed7df8a6b5b"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.9e97db6a.css",
    "revision": "7bdc6fb21c4e30c6a736e9ebaf85be8d"
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
    "url": "assets/js/100.03c95089.js",
    "revision": "0d6fc5791bcc8a84f901e226847216a9"
  },
  {
    "url": "assets/js/101.696809f1.js",
    "revision": "e76fb9f72ac1d6d5fa069585ce8786be"
  },
  {
    "url": "assets/js/102.f68e4309.js",
    "revision": "5609c5d4ca3a8a35a2b1c12b15ce5e9a"
  },
  {
    "url": "assets/js/103.ff86f26b.js",
    "revision": "73e08bddcc7ab302cfcc86a41a13a233"
  },
  {
    "url": "assets/js/104.fa6c6523.js",
    "revision": "328bbd866f42e6cfd6370aa206e39670"
  },
  {
    "url": "assets/js/105.a5484a46.js",
    "revision": "4c6aa26b817d53e403c4299f6a764253"
  },
  {
    "url": "assets/js/106.405879e0.js",
    "revision": "0da456bcb2bdaea864dc77331f6ece36"
  },
  {
    "url": "assets/js/107.1ba81a97.js",
    "revision": "402b487f33d0f922800dfcb687e2ab9a"
  },
  {
    "url": "assets/js/108.1a541803.js",
    "revision": "7f0ce41e3c066ec82bbe22a8edd56ad1"
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
    "url": "assets/js/17.7163bf50.js",
    "revision": "58835270b75d5c0e56e3c70fc881da0b"
  },
  {
    "url": "assets/js/18.d336344d.js",
    "revision": "c94511f586f07bfd382591ab6247e45a"
  },
  {
    "url": "assets/js/19.ba77670c.js",
    "revision": "6afb408d69d5c20992b45d9bc6d10caa"
  },
  {
    "url": "assets/js/20.caae876a.js",
    "revision": "3bd65bc9a9eebf38e2462459e04fe600"
  },
  {
    "url": "assets/js/21.922edc5b.js",
    "revision": "44086753a918e09a0de064d92208f5b3"
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
    "url": "assets/js/24.d5601925.js",
    "revision": "4c7ca4b0e990644b6337918faec193c6"
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
    "url": "assets/js/30.f03db177.js",
    "revision": "a81f825ca6513ad903f8f81691ff23a9"
  },
  {
    "url": "assets/js/31.034d28eb.js",
    "revision": "71fbec5daf5dadce343706cd8db6c150"
  },
  {
    "url": "assets/js/32.67ef374e.js",
    "revision": "9499ec3a9c6115e3fbf583d8e25ec5c5"
  },
  {
    "url": "assets/js/33.c29034f0.js",
    "revision": "05bcb6a9aedc1883a2a94165af38e1b8"
  },
  {
    "url": "assets/js/34.d529ba85.js",
    "revision": "2e6306f361498e9c30e853bea0d8ae9a"
  },
  {
    "url": "assets/js/35.953c40a1.js",
    "revision": "6cdf221fec0b367bca39780d1495e1a1"
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
    "url": "assets/js/40.d1b63bee.js",
    "revision": "072b4554460311379e82ce4c8c85f78f"
  },
  {
    "url": "assets/js/41.5d130e8f.js",
    "revision": "51ddfd5bcb174fb1225bd0172099d930"
  },
  {
    "url": "assets/js/42.80b0e85a.js",
    "revision": "da399441982cee26f45fb5da02bf2cfe"
  },
  {
    "url": "assets/js/43.abf40ae0.js",
    "revision": "614bba225637f5441fbce44648ad4d4d"
  },
  {
    "url": "assets/js/44.9296494e.js",
    "revision": "13b733820a0e79747c9fcee7dd400fd2"
  },
  {
    "url": "assets/js/45.ee2c4a5b.js",
    "revision": "f06396046388d44e7bc8062375fffbe1"
  },
  {
    "url": "assets/js/46.09e7c3d3.js",
    "revision": "e46fd97b9934c1847a604325cc607f9c"
  },
  {
    "url": "assets/js/47.b961b47d.js",
    "revision": "65fd2900091db24e0f78849d9792ab4f"
  },
  {
    "url": "assets/js/48.c7027d50.js",
    "revision": "084d8801062173848408b15794b5e994"
  },
  {
    "url": "assets/js/49.692eb5dc.js",
    "revision": "420e78d5552cdc165e39c9982603e226"
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
    "url": "assets/js/51.789b91a0.js",
    "revision": "e0691b6f05031661c6a48c5aa91976b2"
  },
  {
    "url": "assets/js/52.bc15bde0.js",
    "revision": "572c17a3ac0129ed3c72a962a4c511b1"
  },
  {
    "url": "assets/js/53.fc67e547.js",
    "revision": "3e854c0595806eb264285b02afce72bf"
  },
  {
    "url": "assets/js/54.a500f3e7.js",
    "revision": "ac88a7dda1bb9ced9e216b1fc929ec16"
  },
  {
    "url": "assets/js/55.7bd304fd.js",
    "revision": "c9396bdb31bfdcadff457fd796a4d6b2"
  },
  {
    "url": "assets/js/56.1895b188.js",
    "revision": "a6aa7b616768757d04ec5a448d05577c"
  },
  {
    "url": "assets/js/57.d0a45b0b.js",
    "revision": "06212e7e8a006d5a6158be230e9b399d"
  },
  {
    "url": "assets/js/58.eb831659.js",
    "revision": "4ec856f2bedc5c752ca5f5914399d62e"
  },
  {
    "url": "assets/js/59.7b69914f.js",
    "revision": "c24c70e851262f574b3a0bbaba42585b"
  },
  {
    "url": "assets/js/6.a9fa4fee.js",
    "revision": "affb9c4647d257771e4c64c5100b62e9"
  },
  {
    "url": "assets/js/60.f91a7c7a.js",
    "revision": "23c94bd8c05b5ffada887899a8609b5e"
  },
  {
    "url": "assets/js/61.2edf645c.js",
    "revision": "034be8cc6cc84c0ebefa90fa50df967e"
  },
  {
    "url": "assets/js/62.74627f26.js",
    "revision": "b5c6f84d167e364dffb8ce3dbd2ff0ce"
  },
  {
    "url": "assets/js/63.5616d503.js",
    "revision": "d9e86788a5f1443efc56ec0228d55327"
  },
  {
    "url": "assets/js/64.97ad9a68.js",
    "revision": "ec619493e124fd3532ca0b9544016720"
  },
  {
    "url": "assets/js/65.c30ac4e2.js",
    "revision": "a23cea78e9c92081bb9064b884cf6c93"
  },
  {
    "url": "assets/js/66.92161f68.js",
    "revision": "3983adf107da48c92c997b689b7429f1"
  },
  {
    "url": "assets/js/67.015390fd.js",
    "revision": "5da8727a83f53c104720176e373720b4"
  },
  {
    "url": "assets/js/68.f59ba4ab.js",
    "revision": "9c0cbdf157913e7d70b479a81eeffba8"
  },
  {
    "url": "assets/js/69.cce46e3d.js",
    "revision": "731b50cb5e06bce54fb47ed98280bf15"
  },
  {
    "url": "assets/js/7.8fcade3c.js",
    "revision": "2730a6ba8a2f957e76b204f8c0021b02"
  },
  {
    "url": "assets/js/70.f1d9927e.js",
    "revision": "e274e651b6123a7e072d0e13d3ab768d"
  },
  {
    "url": "assets/js/71.f98067c3.js",
    "revision": "16d4a141611a8f5e0c483fe5f5549161"
  },
  {
    "url": "assets/js/72.d40a4594.js",
    "revision": "02a60cfad55ee47a5ac1ee9f5b47a8a8"
  },
  {
    "url": "assets/js/73.2ab5a32e.js",
    "revision": "fd5bcd94cb2442c46cb09734258e5f3a"
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
    "url": "assets/js/76.b9bd34f7.js",
    "revision": "01d60be9806aba80a843ce570ed2d830"
  },
  {
    "url": "assets/js/77.22caaf17.js",
    "revision": "039f95d5bc41cf3838c21cb99c2c3d13"
  },
  {
    "url": "assets/js/78.0fb52d3c.js",
    "revision": "9206e90f6d49cd1347adbcdb6c21481c"
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
    "url": "assets/js/80.f65d4da1.js",
    "revision": "e3008d00f272633da69897a5e1edc1d0"
  },
  {
    "url": "assets/js/81.83bb8fe2.js",
    "revision": "abb6526c2c082509098f6ebb3d3da27c"
  },
  {
    "url": "assets/js/82.0ef7562a.js",
    "revision": "4a852e25ec2ee97425680536be193b54"
  },
  {
    "url": "assets/js/83.794b2557.js",
    "revision": "a5ec04faf987d12f6a16f37ae03751d5"
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
    "url": "assets/js/87.8013d815.js",
    "revision": "8eb03ec3dbd40f9c699efec5c492741f"
  },
  {
    "url": "assets/js/88.842959bf.js",
    "revision": "37f358403167ee9efb435770656c1216"
  },
  {
    "url": "assets/js/89.c2de1543.js",
    "revision": "c5cf7873cc59ae1d4197482163f93e7e"
  },
  {
    "url": "assets/js/9.98029025.js",
    "revision": "32c68e5dde126a7fd7c908294027ec7d"
  },
  {
    "url": "assets/js/90.cd6f428e.js",
    "revision": "59ff9d3bd1ef948e5c825db65da4c372"
  },
  {
    "url": "assets/js/91.cbd16a63.js",
    "revision": "04e1f6dfa689ed51c006f450ca9df6fc"
  },
  {
    "url": "assets/js/92.1cfcc965.js",
    "revision": "df479ce69ef9533380a068c6c7eb2df5"
  },
  {
    "url": "assets/js/93.743809be.js",
    "revision": "4d013630ae7abc05457f44e698e2fbc3"
  },
  {
    "url": "assets/js/94.a6b2a489.js",
    "revision": "8794609113ed0d1dbaa3aea5fb2ca7cc"
  },
  {
    "url": "assets/js/95.16c48846.js",
    "revision": "b6fa5ab0b6c4d23caede4130d37ebe94"
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
    "url": "assets/js/99.9a823734.js",
    "revision": "add6a0c1f20fc2984ad46b4238094e18"
  },
  {
    "url": "assets/js/app.e58eea56.js",
    "revision": "21c4983d38ac4b12f2793db6b635a6c7"
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
    "revision": "0c88d51cc97d277c0d1afde2bd77a004"
  },
  {
    "url": "faq/index.html",
    "revision": "8c15731e5d626aeca1d9d08f9d43462c"
  },
  {
    "url": "guide/assets.html",
    "revision": "079ccf67e3e796cc2a63350fc04647a0"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "cdbf877c112b4f1a7498a8e6d64e2f81"
  },
  {
    "url": "guide/coffee.html",
    "revision": "3f6e8e839e31756b30cb88a54ae04763"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "785b2878074bee5b03bb5c1564962168"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ab69c823ceead1b8d96be71d46646e8b"
  },
  {
    "url": "guide/help.html",
    "revision": "8e222c701db8e7209963698660838e92"
  },
  {
    "url": "guide/index.html",
    "revision": "37189c8b240154b917df5962c2716cb3"
  },
  {
    "url": "guide/lang.html",
    "revision": "c1abd11ee3ccd7f36d90f7ff95d489cd"
  },
  {
    "url": "guide/security.html",
    "revision": "344f73ca0be803e4402f9f9d0ed31ac0"
  },
  {
    "url": "guide/tags.html",
    "revision": "63a1f92448a940eb339c8c6ae484edfc"
  },
  {
    "url": "guide/update-log.html",
    "revision": "c6d63441c2c4be38b1699593935f7d1c"
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
    "revision": "c593710d4a798d6a337b0d39aba86bad"
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
    "revision": "9fcfcf4f5f584148995a931ac20e2347"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "e919819ca43a0502c0f04724a44d29b4"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "a1ce8a9064a6b7d0a85cb5b4824be1d2"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "ac7a995788a5b29c4cf50ca53f526d0a"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "6bdb7cb2d3971c92899dcf1ab50fe00c"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "d0c047b34898d56a4ab0ceee7770d771"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "3964c6b32ac067588edfb24ae0439c51"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "b1a449115a7450099c5ccab8c6abc7d1"
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
    "revision": "55288cc93a246a0724daa724af58c8fc"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "27da669e61988be5f7245fbd51706e77"
  },
  {
    "url": "tc/config/index.html",
    "revision": "9d1fd86215511eed59a5575fe6bee34b"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "2769d581b352dfdefc9881b205da5ca3"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "9a8152d93e052a713d2b76b90656aacf"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "563104c66cb14a8f04afc6eb76543892"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "282805c0e9cfc6bca5e0707c6c656220"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "38a87b15c6c75ee2d86fcd6dac918da2"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "fd11153d72a667724c434dbf2c90b4b2"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "359ac8f9dac84ff05873188b271aaa1c"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "11226560df183d495f0b74b06042d533"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "97f224af2c425683eefdbf1c8a60f530"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "405aa4c91acbe5814b9cc6ae23337219"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "de31baa6350397dbe419fae5b28ae9e0"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "94dd63753f231e575692612ff8e0374c"
  },
  {
    "url": "tc/index.html",
    "revision": "9c65e0f9ab9628c863daded22c0408b2"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "a81642eaf8623a5613a3805196fa8805"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "7d23b3c51f3c790b669ff98e204da835"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "f0b01294e181cc475a365bab93f66c34"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "617fc04d67757815761459c630171c6d"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "7808d92061fca14b28bd1a2bb0dc660e"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "b812320db41bb59d2739f3e6d4b4a5bc"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "09122c84c951212e12d84554c581ea16"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "61133e9f5802c2e21219f94fcf1784f7"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "a393b56a609e2bad6d91c574b434b059"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "fc378d9639dd0c6c2a924c91905e23f5"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "ddaa15fb824fb7c983843d643fa1acdb"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "8518c7c892fe0ef0dd5009b25082e954"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "09a143443537829948cb7361aeb6dbeb"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "f89de2b06bca2fa26e5d033a5b17a842"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "3315c73733add5b49a7139dca3d0bed0"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "0ecdc6762a50f1523a61385e40a0853e"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "481fca1650c8adf7d5acb744acc3c90e"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "8f0b27892c868bbec1ff9e348e30c857"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "3dae5df98ab122da7711e8054367a4cb"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "8255e531802683fca3d4a171d627d29c"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "18af340e00ed79773f0947a19b171e42"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "f5d9623cb789ce18c5a735fc027fa6ac"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "d370bec3c97170ef81d054b325c2fae9"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "2d763fcaaa6aa0ee7875cf64fae88e4d"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "807c180f437330ed679e67a97608ac64"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "eff8c2a420b322fc9164a3c9b7989d2e"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "b10fa91bc9925abba992af86ca9dbd6b"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "2c32438f80315e6e7483bf27375f84e3"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "4e0ad462a4ce3bf0041d3428aafeaf98"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "1a262e2f4bfe9bf3606c07e05151d65a"
  },
  {
    "url": "theme/index.html",
    "revision": "7f9f41aa8ffea2c9fef3063f8ef0f3e8"
  },
  {
    "url": "theme/senior.html",
    "revision": "dd8a88bebc092da20c1d3242a085f026"
  },
  {
    "url": "theme/structure.html",
    "revision": "68f6ee96ec77f80beaff21d314b988b0"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "9b155df42591082e0629fc9e4c78ef5f"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "3b8ab923b3ff37b59bb5b095ed43e35b"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "0f31f71f36294ee50302222d3cb96cf2"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "9031c1795c90ee0144f2771a15467c7e"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "ca1be90d3d98f3195a44e48cf8b254af"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "aed4f738a23033697652f5285711fca0"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "54bf75bf0b22b7500fc2c34a0c5cbfd0"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "3a6835886f9633141804cc7f32335016"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "5b8f73c389f4df92e8d286b06724116e"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "d252b0b3672e0b74bbdb7a9de9481e25"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "8696282d2f83330c31167abe09c817a7"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "1873170434b39085bc40068514bd20f0"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "4fb9ab523feafb78ab0536f9575b0e2c"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "90e376fe6180941bc1897b3fb13fe15e"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "a78ad0aaa05578292257213f2947af3f"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "5de86587c9a6f8b7dfe96803f6cbd6ac"
  },
  {
    "url": "webmaster/server.html",
    "revision": "984e59f0af63dc7096daef0d7178b732"
  },
  {
    "url": "webmaster/template.html",
    "revision": "2289180c4d99b2236a6f94d6c965db97"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "896ee5f17c1d546067221d95fede053b"
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
