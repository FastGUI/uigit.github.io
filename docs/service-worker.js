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
    "revision": "35886bcc4ad44a3a3bd36ff720e09349"
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
    "revision": "7c1d00fcc072668c4abeedaed1a40e65"
  },
  {
    "url": "api/web-design.html",
    "revision": "8440aa353bf27aee769118adcf320164"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.5bee0be5.css",
    "revision": "8cd554663fe6a43e857b644b1c99f417"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4e13579.js",
    "revision": "daf1bff230bdc046fcecc717f59b5b0c"
  },
  {
    "url": "assets/js/100.beab3e59.js",
    "revision": "028716aa266977b91fa9fddb1317d961"
  },
  {
    "url": "assets/js/101.ed097c7f.js",
    "revision": "1bed1f2ccc572b0686df04f9dfcc8157"
  },
  {
    "url": "assets/js/102.3b7193ab.js",
    "revision": "54d6a082d632dd2f6966c66e98ac96e1"
  },
  {
    "url": "assets/js/103.18b4a074.js",
    "revision": "4fa9718d54493de63f5334ce4db5b66a"
  },
  {
    "url": "assets/js/104.1841358d.js",
    "revision": "70842286c481709ea131de4a1fdeae3a"
  },
  {
    "url": "assets/js/105.e3f428ef.js",
    "revision": "88e3b99bf11ea4b958ee0d1a8af5d402"
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
    "url": "assets/js/11.708dd212.js",
    "revision": "6b37e18344509a1830b240b95b6d2bc0"
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
    "url": "assets/js/18.2d224c16.js",
    "revision": "7eee2050913e65a22ca969d7755c7370"
  },
  {
    "url": "assets/js/19.44a84c76.js",
    "revision": "789a072a2e2ac887ad82d39051293652"
  },
  {
    "url": "assets/js/20.de91bb5d.js",
    "revision": "a2242f5a08383cc8eef5f001177401ab"
  },
  {
    "url": "assets/js/21.378e238c.js",
    "revision": "a3f11dbdcc5d7ee1497189a09987a71f"
  },
  {
    "url": "assets/js/22.83d4dc24.js",
    "revision": "6cabbb1c15ef46c31aaa3a0bceb0bdce"
  },
  {
    "url": "assets/js/23.acc23df5.js",
    "revision": "3507387c976afcf60b2f94002e37e79e"
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
    "url": "assets/js/26.d6257160.js",
    "revision": "734a346f5fcfa20cd437069c3aa5c6e4"
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
    "url": "assets/js/29.d2025c82.js",
    "revision": "9da106c4eec54011e41fd29872824c81"
  },
  {
    "url": "assets/js/30.02e30c41.js",
    "revision": "486d6470525aa675ca72d8e98d562c3f"
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
    "url": "assets/js/33.6cc08719.js",
    "revision": "87cf443fd19228f69c211a952ace4c30"
  },
  {
    "url": "assets/js/34.a297e062.js",
    "revision": "7af42534ece985e5569cce4b6fd9e107"
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
    "url": "assets/js/38.6072dfab.js",
    "revision": "134496c8b1fb82ce76206a9e232d7b20"
  },
  {
    "url": "assets/js/39.1bce230b.js",
    "revision": "914990c1885def655187003b588a48f1"
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
    "url": "assets/js/41.00d55610.js",
    "revision": "e2628123e4c623259d69355cdc38d492"
  },
  {
    "url": "assets/js/42.6cfac026.js",
    "revision": "f9b0e92580607074eaadaa5226600016"
  },
  {
    "url": "assets/js/43.04b40fd8.js",
    "revision": "b2a7c0f055a828681c0430a0b9839356"
  },
  {
    "url": "assets/js/44.afea1fce.js",
    "revision": "840028d7ec3452ea8b251800fd3131bc"
  },
  {
    "url": "assets/js/45.c927d9a9.js",
    "revision": "70d2db8fce30b8e47906d41e70358374"
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
    "url": "assets/js/53.3bc2a405.js",
    "revision": "b06005377e77f71f54378ffcf4a49b85"
  },
  {
    "url": "assets/js/54.2221a73e.js",
    "revision": "0ad648a4e5f3506b28adae950727bc67"
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
    "url": "assets/js/57.b19c4427.js",
    "revision": "2472819b4101fc53955aa40d6d546988"
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
    "url": "assets/js/60.26ed47fd.js",
    "revision": "99fcf2aa6486fbbb5e75b6a99b3a0c4b"
  },
  {
    "url": "assets/js/61.908474ee.js",
    "revision": "792c45dbbda50807ca2067bbd5d462a5"
  },
  {
    "url": "assets/js/62.c042a8c9.js",
    "revision": "f06fa2ad52563f66b8049ce208df7045"
  },
  {
    "url": "assets/js/63.1a02a2be.js",
    "revision": "3cc77883039912e2193222267c00fa67"
  },
  {
    "url": "assets/js/64.62b31a65.js",
    "revision": "4e313afe6d6ed9f012070d4e54d614b3"
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
    "url": "assets/js/67.a0e67d29.js",
    "revision": "34173a32bb8532b2fbde59cf19feeb58"
  },
  {
    "url": "assets/js/68.04409463.js",
    "revision": "074aadd3a185001ba91fe57f02899210"
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
    "url": "assets/js/70.33cb854f.js",
    "revision": "163aab7bd93eb0d99896cdbd6414c6e5"
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
    "url": "assets/js/78.3c610caf.js",
    "revision": "a32bafb52ca3cb2d27ce640551c176fd"
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
    "url": "assets/js/80.83e4400a.js",
    "revision": "35a3ac5a4a74a2fcb9e85594d855cf6d"
  },
  {
    "url": "assets/js/81.38985e17.js",
    "revision": "ee4b28b505aef1aca33a2cbd30dd2a20"
  },
  {
    "url": "assets/js/82.0505f4d3.js",
    "revision": "20b659fa7d0e2494e3a985ca65d51fde"
  },
  {
    "url": "assets/js/83.a4d860b9.js",
    "revision": "62b6df536388e49420b5d7ed80353b68"
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
    "url": "assets/js/86.bb114182.js",
    "revision": "db8ff8f16ff74b35e667764ac25dc685"
  },
  {
    "url": "assets/js/87.58d85bce.js",
    "revision": "d585247504e2bc56b2c3c6b1a4f4a026"
  },
  {
    "url": "assets/js/88.b611af24.js",
    "revision": "78e4454d18a2140c25a9fa8bfdabae3c"
  },
  {
    "url": "assets/js/89.4ba42f4f.js",
    "revision": "20a1a00c2a9f81d1a0e6769d07baa4b9"
  },
  {
    "url": "assets/js/9.7f2be5b9.js",
    "revision": "4fca26b222d3fa0ea2d276dab066d050"
  },
  {
    "url": "assets/js/90.9210163c.js",
    "revision": "c0f336baa138d8eab55dddf30cf6db13"
  },
  {
    "url": "assets/js/91.45a4bd37.js",
    "revision": "8499aa495086db310dc26cf8a5fe494f"
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
    "url": "assets/js/96.5bd6a09a.js",
    "revision": "213864a1b44b42cd128c7f11815b7139"
  },
  {
    "url": "assets/js/97.bc488cde.js",
    "revision": "5d67a33240e6e78c3cb9ec614558a395"
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
    "url": "assets/js/app.da1a403b.js",
    "revision": "924622752429785e5af024ad2183aba5"
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
    "revision": "05a0215bca5f164648695530078ed26c"
  },
  {
    "url": "faq/index.html",
    "revision": "c64f69f8c310d4df2f9e6bf8833c3832"
  },
  {
    "url": "guide/assets.html",
    "revision": "f07140d870f5a109a6b72c4ea224e559"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "8a3e33767baa939b7115b247b253a6dc"
  },
  {
    "url": "guide/coffee.html",
    "revision": "d7165e92e773e969aaee83c0bb8e71db"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8ec6bb0a0140787a582a7ff261854881"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "704881cb3b79cb762da5480043b0a018"
  },
  {
    "url": "guide/help.html",
    "revision": "3dcfa56f6fbb80ca3dee1a1e1970d7d9"
  },
  {
    "url": "guide/index.html",
    "revision": "8f8e3c6a2772540ceb1476a3d24e2058"
  },
  {
    "url": "guide/lang.html",
    "revision": "ef7c7f2b7bd0497fea9c3ee5abcdbc0f"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "544e4df1bb392a5008ba91c7ef9261ed"
  },
  {
    "url": "guide/security.html",
    "revision": "23a28221c2161a7b20fdac79e8c52639"
  },
  {
    "url": "guide/tags.html",
    "revision": "d2a29c3b6caa37f771140d43d7d7b597"
  },
  {
    "url": "guide/update-log.html",
    "revision": "a300ae9afcf201494490cc4ee192790e"
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
    "revision": "ba67117dd84cf171940d6bc39621dcfd"
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
    "revision": "6058284a8226e1ab5badb05300617570"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "4369c939baf11c13eb727e97bce899ad"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "54e28b6b8c144ebec8284086838c0e85"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "93d79c1998f468dedb7add493255d881"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "9ae684d342cdfdc2a5bb9e1801d059a9"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "fa070685935a5e7fd92e4645cf28b351"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "b32e997aa5f2bbfce443dbf188483a4b"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "9ec8719948f37a47e00229f138c7409d"
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
    "revision": "e4103a262206e114b6d8a76ddd1c53df"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "7e854fd0653e332be62298f4a21d2bec"
  },
  {
    "url": "tc/config/index.html",
    "revision": "dc29977aa3707e516aa06080dd0fe6d1"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "bfb6519ee9cb339bfd9a91c51d047caf"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "5bcf4f2922869d2c04a07ef4462c76b4"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "3ba8f6ab17626fa1ce65d7f7f415c86b"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "d951ff1eac87d5af799cbd10e449c43c"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "50ce4363f8ecc88b33a1fd7b95c2ecc9"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "0b1e839fac27cbbc15bf6d8b10f6f0c3"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "df1ff65a95e3d22b55dd803f4e884795"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "dc570dda2e41c737bb8046705411d1d5"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "a14c49ec8c7d83096e97d8c6638ba0d6"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "73a7984f4ca3fb80b8eea8f269d43b36"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "a695103618f5d738b94ce7dcea521629"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "d3e2cd7bb8d319057df6d32c0667cf1c"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "e571d1ec2459098f48bee0619e2047a8"
  },
  {
    "url": "tc/index.html",
    "revision": "0471ad74698c24cd43d775916f1ad960"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "15ab845e0cd478a89e98379da48833ae"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "9db99523887c5b2a6791988db08279a0"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "b86968951faa06be8a013e3cb99fc6a3"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "e01f18107c07b32fd9b4200d5df73122"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "ee8aad81ba6c9b77952eba09c8b95544"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "84a82649050cffa39e3dc76c2c661a55"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "a0c5c92e83d9f4ebcad66c8ff5fdcd0c"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "3d7c8c60da1b1b919a3246c53208e554"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "a3ffa401e5748632a54f0223a4a1c2e4"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "5e8da3ea4ed20480c047d4832ef33c93"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "bf86431ce6b320541eb865313fbe1b4a"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "87640112e83fb614611727e1793a4ca7"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "3cf9be1a2ed029edcffb0d900c212233"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "6e569b5202f1d901ff3fe7944b6015ac"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "166f55d39d360bfd34a910c96a00a3b9"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "7096ef0f4ed588c7dcc0a63aac0a6b84"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "ae82e408d9af6c07228455113443d649"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "d7ef95f1770978f98f81929d6fe2deed"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "c8af97d37ab4ad3c74cd9c65aefe025d"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "1d9d042a7afede24d712e176492687d9"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "1195a8aa933783d2a2d3c33c526c6472"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "20f1a6003cbb33eae39b7c9a998f2953"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "012d20d2908a0468334115a51a051cb3"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "bf8e5c19a14dd25feb9dd25bdbceda97"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "de919076c85b47b659acfde6622494e2"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "e9e067966e656f8addfb3fc2428a3bba"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "0e2075418bb21ed944c7255dd07e07b3"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "1460d87fa643dcbad2ddf0233a3728b0"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "4c37ce6a5a134c54d0c5c97a8137b513"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "64fdbf9fe3692fbd2bc232c99c31093a"
  },
  {
    "url": "theme/index.html",
    "revision": "707f38fc2ff729e1cc736d2bc275133f"
  },
  {
    "url": "theme/senior.html",
    "revision": "7a0613d0f29b2f0bb62bbdc05e7c9e8d"
  },
  {
    "url": "theme/structure.html",
    "revision": "c057b322724ee69ed6f5c78277694e8c"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "6c1184542a2cb6f236cef9ac5be08941"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "9498d8616f2d77c466e521fa0d540cdb"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "296cde9035b27f1a5650cc750bed42ab"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "3a662a4b5e2f89d8d33e88e73ae67c86"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "0f4f4a9f77789e1d420d46434eefa4d4"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "53c844b80cd03ccecf86a9a17d30c4f3"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "49348c74b2eef1cb90d22f82c5a06839"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "633127d4fbe2602cb3138293ca1a4cf8"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "da100b019446ec24480e3757fbaf0d76"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "6a7688304a74799c376c5aa75643ff39"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "958340e2f5f18f3fc8e6531f214fe63a"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "e43c089b5d50c25357e1cb9a28c365a0"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "0d67fe991ce9779b0505be7de72bc91b"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "bb3f60810e729bd888e7c0c84bd795cf"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "09df13a86b8040e1eae92f5789a4d37d"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "0dbaafb46d7c0e93b95a4b06d6898319"
  },
  {
    "url": "webmaster/server.html",
    "revision": "e25272e878ebd972b526793788c8ef1c"
  },
  {
    "url": "webmaster/template.html",
    "revision": "478f2bc8bdd1ba34139a0b10e4b06271"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "3f991ceb1e2a2c966afea45df94241ab"
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
