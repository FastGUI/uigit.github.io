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
    "revision": "09c839cb067ff2fd4f31b83321d24d95"
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
    "revision": "3caf9a7059bbf148dfe44c64c33c34d2"
  },
  {
    "url": "api/web-design.html",
    "revision": "9e05ab10fe6c112cb5e60607122f5ed3"
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
    "url": "assets/js/100.25f7e7e6.js",
    "revision": "182754dd204f20ba2e65cdd269d15c00"
  },
  {
    "url": "assets/js/101.4ed56922.js",
    "revision": "53a9ed07851942939a085fcb467275b8"
  },
  {
    "url": "assets/js/102.a278321d.js",
    "revision": "cace5d7a3883dfc7db4ecc0edc0326c2"
  },
  {
    "url": "assets/js/103.1fafda59.js",
    "revision": "29f542518987b94c00f7919bf387e28a"
  },
  {
    "url": "assets/js/104.388a06f1.js",
    "revision": "9206b6d6ec72fbd6fd4deae2c3bc19a9"
  },
  {
    "url": "assets/js/105.c1b887c9.js",
    "revision": "1019e9309f621870dbeba35ea7b99be4"
  },
  {
    "url": "assets/js/106.0d9ac496.js",
    "revision": "57e0f21bb618da0184b4c54feca9fee4"
  },
  {
    "url": "assets/js/107.6e3fcac4.js",
    "revision": "8649f67b577fae74ef31317aad92bac3"
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
    "url": "assets/js/17.f3326132.js",
    "revision": "7d89d97c06b0711d04161932a258d98b"
  },
  {
    "url": "assets/js/18.be2c32b0.js",
    "revision": "e7fc867d51c8aa71d1f7cd1cd28c2344"
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
    "url": "assets/js/22.c49a527f.js",
    "revision": "eb548176e22e9aa578d844732e0850b7"
  },
  {
    "url": "assets/js/23.1eec220b.js",
    "revision": "ce3dd40f2ea911e51fd4e10941f32e90"
  },
  {
    "url": "assets/js/24.d7fd6b5c.js",
    "revision": "733a4f9113a03dd8f29d8c713afa8bc9"
  },
  {
    "url": "assets/js/25.86a37e2a.js",
    "revision": "010ef80292b056f55c91e34d63d08270"
  },
  {
    "url": "assets/js/26.c2ef07e2.js",
    "revision": "caccac459fdbdd97a7dfabc59e2d53c2"
  },
  {
    "url": "assets/js/27.5f1ca22b.js",
    "revision": "6978acf40072a7a38b6cc3a08c5e41d3"
  },
  {
    "url": "assets/js/28.e4dca1f2.js",
    "revision": "f7f319c83e28c93d02e8fce92d5ca374"
  },
  {
    "url": "assets/js/29.38c77e5b.js",
    "revision": "22ea555f3a77325474d29167d5471c5f"
  },
  {
    "url": "assets/js/30.1e2d98ca.js",
    "revision": "1d4cf5fa5188070f641e09e475776331"
  },
  {
    "url": "assets/js/31.997b17e2.js",
    "revision": "38091b0b22a986fcd599efe96ca0d279"
  },
  {
    "url": "assets/js/32.0a54f6f7.js",
    "revision": "4f6e0cb409e51eb69b710374b1e89c85"
  },
  {
    "url": "assets/js/33.17511c89.js",
    "revision": "f1ce3873d553cb64ffd2e707923ab91e"
  },
  {
    "url": "assets/js/34.a4a6b5b4.js",
    "revision": "5e0a9003c398d126ccaf8c5be85dc9dd"
  },
  {
    "url": "assets/js/35.4a037f21.js",
    "revision": "9e80bdb0b89c7fee7d1a2f437d4848a5"
  },
  {
    "url": "assets/js/36.44ca63a0.js",
    "revision": "08eb125e37c4c7565d7ba613401a5b4c"
  },
  {
    "url": "assets/js/37.f5fc4e0b.js",
    "revision": "a8c4eb69baa206379ea4d6e456b60c84"
  },
  {
    "url": "assets/js/38.1d5eb969.js",
    "revision": "1eb65878bc5a8dd44f7637fa6446acbf"
  },
  {
    "url": "assets/js/39.00cede1f.js",
    "revision": "497680c369e254ceba44c2b717122e0e"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.41722f2f.js",
    "revision": "9e3d12a74a557fb71f1b61fdd4178796"
  },
  {
    "url": "assets/js/41.65cff90b.js",
    "revision": "ffe78aa67778a329d2c22970e6986c42"
  },
  {
    "url": "assets/js/42.187aa5e8.js",
    "revision": "16645dd9329d41e79d93531376422d4b"
  },
  {
    "url": "assets/js/43.e18a3f10.js",
    "revision": "62549e6e4a9ca56c66439e529b20f6ac"
  },
  {
    "url": "assets/js/44.afea1fce.js",
    "revision": "840028d7ec3452ea8b251800fd3131bc"
  },
  {
    "url": "assets/js/45.c7d6e397.js",
    "revision": "a2d2ac574bf5f650101aa8b3c8985dd3"
  },
  {
    "url": "assets/js/46.5cb7668c.js",
    "revision": "4370433c18359d7179e087a78fe58bde"
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
    "url": "assets/js/49.a1c695f2.js",
    "revision": "e5270682e3712cd99b01562b57888b25"
  },
  {
    "url": "assets/js/5.b06b0d86.js",
    "revision": "dca1e507aaf4a0a376ecf83d249293f3"
  },
  {
    "url": "assets/js/50.e88aacba.js",
    "revision": "b4f03f6ba1193ee16fa7123658ec200f"
  },
  {
    "url": "assets/js/51.7ba553a4.js",
    "revision": "0857a6a6dc4165f611c420dccd1113d6"
  },
  {
    "url": "assets/js/52.21cff2e1.js",
    "revision": "8d11b644448ec043b7f4d5b81a7301d5"
  },
  {
    "url": "assets/js/53.ef84a1c8.js",
    "revision": "05f2755873b1ec2fd3a2d9f7178a5e20"
  },
  {
    "url": "assets/js/54.d8f34bd0.js",
    "revision": "7ee1d6f27f972aa8b456278d9a3c577d"
  },
  {
    "url": "assets/js/55.244f43fe.js",
    "revision": "e1c5058fe10184d17579f71eeb2039b4"
  },
  {
    "url": "assets/js/56.89e29417.js",
    "revision": "b9e8008631a5a68b799fe3db5c15ebf1"
  },
  {
    "url": "assets/js/57.ff3e41df.js",
    "revision": "c462ec1891e3ffb3a63604352afccb10"
  },
  {
    "url": "assets/js/58.c420f299.js",
    "revision": "c5f28e85e1554fb80d0d094ccd1da4f5"
  },
  {
    "url": "assets/js/59.93ef9563.js",
    "revision": "3de334ca92dfcc12fb8ad71ac991f352"
  },
  {
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.cd7361a1.js",
    "revision": "b1a0853a949449a9d78791cee0b0840c"
  },
  {
    "url": "assets/js/61.c54a967e.js",
    "revision": "8f2ec0e0784d58c8051f9f6e2f7dd731"
  },
  {
    "url": "assets/js/62.4380004c.js",
    "revision": "a4bc505ae0f23decee92eb294b633519"
  },
  {
    "url": "assets/js/63.1a02a2be.js",
    "revision": "3cc77883039912e2193222267c00fa67"
  },
  {
    "url": "assets/js/64.c4852597.js",
    "revision": "2e90f52f3779289b1d1f123cf7d1f680"
  },
  {
    "url": "assets/js/65.dc5dee1f.js",
    "revision": "e97fb00360ecd63b4224f7bccaa98c24"
  },
  {
    "url": "assets/js/66.4a266ba6.js",
    "revision": "842f7740bf3c225145b043d358bba883"
  },
  {
    "url": "assets/js/67.9a903825.js",
    "revision": "009cc5eb7bb9670b2eed0a0287ba35ed"
  },
  {
    "url": "assets/js/68.d7063186.js",
    "revision": "fe7de6272ba7a71bfa54b2a588072e56"
  },
  {
    "url": "assets/js/69.dcba9abd.js",
    "revision": "c726e2eb1af9f70e8e09da3c0fa60666"
  },
  {
    "url": "assets/js/7.567e98f4.js",
    "revision": "fa23c03c38d2e83b37f794552982c93f"
  },
  {
    "url": "assets/js/70.0be1ae34.js",
    "revision": "dfe1ec4d87515dc864ca32b892f0a1b7"
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
    "url": "assets/js/74.9a2eea47.js",
    "revision": "540d88e2030d63a0b851f5b14475ce13"
  },
  {
    "url": "assets/js/75.fd94a121.js",
    "revision": "5da4b2edd977453d2fd806156991d53c"
  },
  {
    "url": "assets/js/76.48ff55f6.js",
    "revision": "c68991168ec92a27fcf4801d3143c8ed"
  },
  {
    "url": "assets/js/77.d9daf226.js",
    "revision": "be0e120206ec4ac03dc2eaedaabbb241"
  },
  {
    "url": "assets/js/78.861a3e9c.js",
    "revision": "833c457404bba674de72fe5296dc2b01"
  },
  {
    "url": "assets/js/79.b370c4e8.js",
    "revision": "fb26cf85a3848b7eed3c56162dd8c800"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.5bdbdb84.js",
    "revision": "d9d1d2f1cf893e05341b6c4dcccb0668"
  },
  {
    "url": "assets/js/81.0034604f.js",
    "revision": "ba3d82318065cd8d281881f8740464a5"
  },
  {
    "url": "assets/js/82.0b206f67.js",
    "revision": "6013e157167ac07d1dfced258adba70e"
  },
  {
    "url": "assets/js/83.6313fa4e.js",
    "revision": "fb518eb32a4ad5dcad5857a220593791"
  },
  {
    "url": "assets/js/84.f18b169d.js",
    "revision": "8e35f33ca6553bf2f6ac92e22201e16a"
  },
  {
    "url": "assets/js/85.c4b55cb0.js",
    "revision": "93886467d37941ceb3cd73240e892d09"
  },
  {
    "url": "assets/js/86.0d7024c1.js",
    "revision": "0ed4ae1242d7bbd666fa911986ad82d4"
  },
  {
    "url": "assets/js/87.9c1020b4.js",
    "revision": "20787776f1fbc5f9f243bd48384419da"
  },
  {
    "url": "assets/js/88.e1b2ad87.js",
    "revision": "86e3556977d12b685e4d7760b817e797"
  },
  {
    "url": "assets/js/89.b6bce2d1.js",
    "revision": "91c216952243463b39431f44c37ddd55"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.10e6e2e5.js",
    "revision": "b2ece5332f3a00b9286c1b025a6a6e53"
  },
  {
    "url": "assets/js/91.d9d7c359.js",
    "revision": "e5ab30db348a5f9b659dfd23c1418e8e"
  },
  {
    "url": "assets/js/92.29658277.js",
    "revision": "3f42429977350b31188d2c85ab9da347"
  },
  {
    "url": "assets/js/93.05752ea0.js",
    "revision": "cfd6fa041b516d77831f1494ed3b1863"
  },
  {
    "url": "assets/js/94.81c75bdd.js",
    "revision": "80499a6ecabf1e1eaaa8db8e4403ea7e"
  },
  {
    "url": "assets/js/95.c33d7bc4.js",
    "revision": "419aaf3451e8ed534fb9967ab5f4a294"
  },
  {
    "url": "assets/js/96.b5c3f1cf.js",
    "revision": "595146a6a960ccbd94064991f4929d18"
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
    "url": "assets/js/99.b06983b9.js",
    "revision": "503e539664c6836f934c92a78c068c40"
  },
  {
    "url": "assets/js/app.e8aed761.js",
    "revision": "74fb395674eb63c40b22a6c1e04ffeb5"
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
    "revision": "8ce32b16f343085a760770da0557e7b8"
  },
  {
    "url": "faq/index.html",
    "revision": "1aaa9ae87b327186c26a14e43d695be4"
  },
  {
    "url": "guide/assets.html",
    "revision": "268d829a59ad50c32549899c136f2381"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "c6dcf8694e7298f39cd782a7e74ae3e6"
  },
  {
    "url": "guide/coffee.html",
    "revision": "d38dda4013560021d54c693d840aca27"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "d7885d71a5c1d15aebb822ad2854f8e5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4eef53b094646eab101c3ad03fd1d90d"
  },
  {
    "url": "guide/help.html",
    "revision": "198197a350004a4c121956a722b2d350"
  },
  {
    "url": "guide/index.html",
    "revision": "7632441edd1089f5368aab1c352606db"
  },
  {
    "url": "guide/lang.html",
    "revision": "1822ded44ed79c9c962ae024a245bbf8"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "b64036b7cceb35d34abfad5fa411048d"
  },
  {
    "url": "guide/security.html",
    "revision": "03f1f893a419620072ff192bd90134cb"
  },
  {
    "url": "guide/tags.html",
    "revision": "796e04636734af8fe46ca1ee392effaf"
  },
  {
    "url": "guide/update-log.html",
    "revision": "ec79729554a62b899934f435b41c97c1"
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
    "revision": "4e93515a762e8ee236183eb976cdd0f2"
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
    "revision": "367f6487fbf163860f21f1c6d4bb320a"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "fa11c545c19be662cd1eba55273b48d1"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "90976f1f3ba31413817c9e1affebdcce"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "6354d9857cb59b53ec144265604fff5c"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "eacd62577169475828ec496a160b373a"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "07f6cf330fdc64da4b1272b42b88fdcc"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "f6a6ed19111fd0b80ed846235ddc79ef"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "2825554b02a5eeaa85792440c37e67da"
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
    "revision": "b3ffb4ca523d28058e813b80aabd81aa"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "6eaac48a92892bba78856045719af990"
  },
  {
    "url": "tc/config/index.html",
    "revision": "5545b912c24e321df7d2628782f87d7c"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "04e9e221fe151dc2d9d54c8ec36575bf"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "3a5813b4a8b483b7b27cd90f64503491"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "8f635c659bbef9d652a9a807e45bf53c"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "1414344289fc01846d21117bc24cc38a"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "def66f73f80af7ea2be00c50f44f3da4"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "17fc7e54cbfa5fa9c76f059d28032f99"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "69d7fd008c06d84c543ad5b87a7935fe"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "50035ef631d6f27d5ef1cebf971df5d7"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "1a9ad333db941677834ca176f41695ca"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "bb48aa022694640e7d1f4445e4ed17a1"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "0347cf7d78fad1b57a38897cc51531cb"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "9036e49b6fb183b89994d6f9fcf420eb"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "135ddf2773fe9615f06c98288d5fd0bd"
  },
  {
    "url": "tc/index.html",
    "revision": "15331a6527c67b607ad602569ed23bbb"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "21005331306908f9cf948f77d0aeee89"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "c10c17154c3fb18d8db2bfbaf22061a2"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "a0edf954516d765d4f017c918facbd80"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "b70d3194e309497a0cceca9cb69604a8"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "ac8cbb1d1809ad5646937c485816f479"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "6fc7d82922a7e500551cbf6421907853"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "dce8ead08422a050441f262ca02b9e2f"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "da8a7399caffa8e11d4e3e1eb2d839b3"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "e98a820a7b136660e02d7844341ec693"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "eb608c7b27730b051047d0daf06791a9"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "84b2fc81b34b0cd157fb40017da1eae1"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "a8b5932963e1aba7ef079e525bfc09da"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "53462d9477235c9da9e99bebcbe54799"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "a62c0fbce28e4fd3af3b050e450295bc"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "2f4bfe1a40ccd0613bc07d375cc85c0a"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "065e035b76710e5d72394aec15658b1b"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "178d0ffe05f1dd54a20d3d4adf1491d2"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "3a87396ce8fbbbb02e7750137eb9c2ad"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "2c2d666242051902b1a27e742a1ff96d"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "d6486eec33eba126aab91013cc0fd2ec"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "feda8171ac1bc58d3f75414f215fcaed"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "e6ecde5332addba3c174eebd8ebf793b"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "3f34d7c94a49b3ff0e1c252aef436792"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "e1b616b0572c051d18005db933b85c3a"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "18aeaf87b98324585b351604d612f2fa"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "37d21413c86748f9e67e934051d64c7b"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "6965c342f11adde31a9b22658d2f616e"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "7e0ce6c5d80caa25f8f7ba3cacebe4c5"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "13274f7262002c2c0a29c0bd7215b4f4"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "582eef30e4e1d2325a5c669502d826f7"
  },
  {
    "url": "theme/index.html",
    "revision": "a193083273d3ab866c5b74c885cacd07"
  },
  {
    "url": "theme/senior.html",
    "revision": "d5fac3bf538e5825d8abdbd087795c2d"
  },
  {
    "url": "theme/structure.html",
    "revision": "7b6cc2f2063aec5eb6604e9b7add8510"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "e1fe96eeda6e14ab770f4cb1272f5781"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "9a1cee7b479c5ecccde66882d3e5f984"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "e88401ab79c2ab8cc59ec3094d4b8162"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "7a666c4b8621017d1bbb8f11107f8ef6"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "1c30a90f3688c9305638e7fbbf02d58b"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "cd0202699ea807e3b1486bfcb7167111"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "5fd2d723127b8fe47617bfaecd65e54f"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "ff3f50878d2e71adf7bbf79c88e404fe"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "34bc621dfe53b10a1074f97f35fb6715"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "02872e910a3b2954ffdc7c0e828c75e0"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "a3ea03b7dab708aaec53bbd1b5410c7e"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "a8049487ba2c0a80147b6928b4126c1f"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "8a32d0388ff0f1546538d2dd060683d7"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "f6c09389c2a08265eca87a825bb79d67"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "7db18a248bb39d22a393ab554f4a12ff"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "d16cb5479ea35acd276e94f11ab8b023"
  },
  {
    "url": "webmaster/server.html",
    "revision": "61c2a7b531479d644d2d160fc7613a5d"
  },
  {
    "url": "webmaster/template.html",
    "revision": "5427c66baa36b8ebdc7334ab0faa5a34"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "80ae568defea0c8c03aedf807a346d80"
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
