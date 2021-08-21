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
    "revision": "72b9de3052503b90969b1e4eb16ac45a"
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
    "revision": "8904ac0cac60ddaf390a611dd32b9bd9"
  },
  {
    "url": "api/web-design.html",
    "revision": "f81caae2c3ebc62e1e941be30b85082c"
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
    "url": "assets/js/100.27b50ef6.js",
    "revision": "e6ab059b1fc62c6b209b0f7baeffde51"
  },
  {
    "url": "assets/js/101.a8c2b1c7.js",
    "revision": "b24ffc899348fdadcef73c742f06da96"
  },
  {
    "url": "assets/js/102.c6c5f6b1.js",
    "revision": "c39dc43a85141f027a53d4e0fb64b5e8"
  },
  {
    "url": "assets/js/103.b0c0ccd4.js",
    "revision": "0bcc28980c71b86b96d43b8853e1c92b"
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
    "url": "assets/js/107.4b02e956.js",
    "revision": "70e7ef90c75f1ec3a6a02397f92927ab"
  },
  {
    "url": "assets/js/108.5fc155d4.js",
    "revision": "c2a594e6a2262eb385ed27138c247e63"
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
    "url": "assets/js/17.5d81cb11.js",
    "revision": "60797f30cdbd215a97f4b74ca353ea09"
  },
  {
    "url": "assets/js/18.f2616e86.js",
    "revision": "f879a218b32fa742f800982983342774"
  },
  {
    "url": "assets/js/19.d2911778.js",
    "revision": "c31ed1546cb10e7b686194df752fdfaa"
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
    "url": "assets/js/26.9f3e21e9.js",
    "revision": "10cd372345dfd10d858d43dfbd280212"
  },
  {
    "url": "assets/js/27.662b6fa4.js",
    "revision": "560c43d3f8150cf479f108269e7db78f"
  },
  {
    "url": "assets/js/28.bf893a3b.js",
    "revision": "717234fc481fbc999f9e855944681b59"
  },
  {
    "url": "assets/js/29.ba397d82.js",
    "revision": "3addf29d0e746473a47c918f074d46d9"
  },
  {
    "url": "assets/js/30.3a59457b.js",
    "revision": "5ae9fef8042ea6519d6a442507a03abf"
  },
  {
    "url": "assets/js/31.a3bf1182.js",
    "revision": "a2f72425f1302305d973d3f90e870966"
  },
  {
    "url": "assets/js/32.44256c16.js",
    "revision": "548dd348f574b3dac8bb7337e05e7581"
  },
  {
    "url": "assets/js/33.ddd1193f.js",
    "revision": "3a4e142f405c211058a0c48dd75bf35e"
  },
  {
    "url": "assets/js/34.1f7fd736.js",
    "revision": "734f10f00adbd50fb1146f06f149c380"
  },
  {
    "url": "assets/js/35.04dd51c6.js",
    "revision": "f14bbe3723534e3c63a5d0fe6d487f04"
  },
  {
    "url": "assets/js/36.58e11e56.js",
    "revision": "0148acd37a4dd7e0e4b74288acf921aa"
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
    "url": "assets/js/39.3704bee3.js",
    "revision": "892a49bc4068adc56f8c633b83017483"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.eb2b1395.js",
    "revision": "d14f69de528b55cce7a93a765037af68"
  },
  {
    "url": "assets/js/41.97512ce9.js",
    "revision": "e93cc4cfe7ce38914964f886087d735e"
  },
  {
    "url": "assets/js/42.1cea9561.js",
    "revision": "bbc0db0485faaa8977503734dde4cbc7"
  },
  {
    "url": "assets/js/43.fc820f9b.js",
    "revision": "4983aa63aa10c2270288b32ca48f4d6c"
  },
  {
    "url": "assets/js/44.575dae05.js",
    "revision": "27a6e40dac20da1d86250d3ea1a38fa2"
  },
  {
    "url": "assets/js/45.2d0af4cf.js",
    "revision": "4db60e0ce03c97117836ab41efaf4065"
  },
  {
    "url": "assets/js/46.0b61fae0.js",
    "revision": "fa4106580cd5c1ecf64f392be2de73a9"
  },
  {
    "url": "assets/js/47.3501bf4a.js",
    "revision": "1c24f676a5538cd5e4c643816e764530"
  },
  {
    "url": "assets/js/48.3bce03c9.js",
    "revision": "6e1c822fb43701f6486641b62a938a7b"
  },
  {
    "url": "assets/js/49.a1c695f2.js",
    "revision": "e5270682e3712cd99b01562b57888b25"
  },
  {
    "url": "assets/js/5.81ae8c85.js",
    "revision": "1e39c80b2f237bfebda8943e1734fde7"
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
    "url": "assets/js/52.77c26338.js",
    "revision": "b509e1aea46b4e6d58c8052f4d8e762a"
  },
  {
    "url": "assets/js/53.281a0b9f.js",
    "revision": "4dc8d1e866926ae5e4618e2a07b58ae0"
  },
  {
    "url": "assets/js/54.d8f34bd0.js",
    "revision": "7ee1d6f27f972aa8b456278d9a3c577d"
  },
  {
    "url": "assets/js/55.19040137.js",
    "revision": "9b0b6f940c058d23ffe1716106372547"
  },
  {
    "url": "assets/js/56.9896eb71.js",
    "revision": "9e0c07c44e0ee226791629a85316cb50"
  },
  {
    "url": "assets/js/57.b91f9032.js",
    "revision": "f7fcbb03f81be5916c9a5a548730742d"
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
    "url": "assets/js/60.88ae4cd6.js",
    "revision": "da5361fc06f280314ebecf6568e9d1df"
  },
  {
    "url": "assets/js/61.908474ee.js",
    "revision": "792c45dbbda50807ca2067bbd5d462a5"
  },
  {
    "url": "assets/js/62.e4a6ed55.js",
    "revision": "221559f32b8f06d1a45bb3ab922c3da2"
  },
  {
    "url": "assets/js/63.2143c22f.js",
    "revision": "9f5d6816d736df2f0db0a07253ad3dcf"
  },
  {
    "url": "assets/js/64.a4451584.js",
    "revision": "435b5d68005ec6cd1d321008bfef1a7f"
  },
  {
    "url": "assets/js/65.1435e00b.js",
    "revision": "a42c9074c927c923a4c9d064201f8923"
  },
  {
    "url": "assets/js/66.19190d7f.js",
    "revision": "6c13e6b1733d3d51f22117d09f796adc"
  },
  {
    "url": "assets/js/67.7d020b84.js",
    "revision": "b8aeba4e0007ad59cbd513687aeb1aef"
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
    "url": "assets/js/70.afaced1a.js",
    "revision": "77f2882ebeeec54db4a7b6f64be0ffe3"
  },
  {
    "url": "assets/js/71.8074da89.js",
    "revision": "ff0238266added00d81791f6bd3b853d"
  },
  {
    "url": "assets/js/72.7fe142a9.js",
    "revision": "f737352d4e0257b32a4b62bb48764d29"
  },
  {
    "url": "assets/js/73.53b07192.js",
    "revision": "89dca9bdbf7d2d162604bde44b2507be"
  },
  {
    "url": "assets/js/74.b84b7ec7.js",
    "revision": "1c74e60bdb177511e4f1544471b58fc8"
  },
  {
    "url": "assets/js/75.3bed7731.js",
    "revision": "6e2b705b5d843ace73c71aab4277d5e0"
  },
  {
    "url": "assets/js/76.06f358cd.js",
    "revision": "7027a9860d170679d6139f20d020ec1f"
  },
  {
    "url": "assets/js/77.7a999a04.js",
    "revision": "ecac7a355c61adae232ba930df64d6ec"
  },
  {
    "url": "assets/js/78.955aba46.js",
    "revision": "11e77f6956f8be3b4636cd3aef8d0981"
  },
  {
    "url": "assets/js/79.fe56663c.js",
    "revision": "7faf970184dc6b038e6af580903e2950"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.1bbe8a70.js",
    "revision": "d429c39e49d553eb554818f7a8ebb94e"
  },
  {
    "url": "assets/js/81.03f8e59d.js",
    "revision": "592d0b0a40be07839aa1d45fe89cd5b9"
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
    "url": "assets/js/84.740732bf.js",
    "revision": "98fbf21ae61b1b10da87307aa97b050c"
  },
  {
    "url": "assets/js/85.915b1d31.js",
    "revision": "4b09eda7ee27447a805bf6cd6f9f7e03"
  },
  {
    "url": "assets/js/86.27871b95.js",
    "revision": "4b298386cd5cee24d28b340124a98599"
  },
  {
    "url": "assets/js/87.062d15e8.js",
    "revision": "f9cbaed5a2c85f2c3b96714ac1ed4e5c"
  },
  {
    "url": "assets/js/88.b611af24.js",
    "revision": "78e4454d18a2140c25a9fa8bfdabae3c"
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
    "url": "assets/js/91.276c3198.js",
    "revision": "46706214988e17a4356245b8ecbada26"
  },
  {
    "url": "assets/js/92.9c3e94ed.js",
    "revision": "5ff3805235d0f866e411d22045ab0a20"
  },
  {
    "url": "assets/js/93.75e3169d.js",
    "revision": "a9a9945f73ccf1f1785e109101517acb"
  },
  {
    "url": "assets/js/94.f1e9ea8e.js",
    "revision": "c2b709e684f212b01bc1c9ddb48562c8"
  },
  {
    "url": "assets/js/95.87aacb8c.js",
    "revision": "31aa230452efc8e89eedf2beabab2692"
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
    "url": "assets/js/98.1c9f9f98.js",
    "revision": "6f5e40cfb62cc7888d3ab5450e278aea"
  },
  {
    "url": "assets/js/99.d7989fcd.js",
    "revision": "78d11a8fd3cfe2d09b0ded2e29fc842c"
  },
  {
    "url": "assets/js/app.1cea9fd9.js",
    "revision": "17025053cf80c2757c11568ea28aca0b"
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
    "revision": "57f83009c1b877c23c88e43607e1ed25"
  },
  {
    "url": "faq/index.html",
    "revision": "862bf2dc302388ff57959e3c63a4d6e5"
  },
  {
    "url": "guide/assets.html",
    "revision": "7bcea8c3ef2fcc3e3a5c22259856d3b4"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "0cf60fd883b943cc461c57f4ac335d9d"
  },
  {
    "url": "guide/coffee.html",
    "revision": "b97cb158a5bef7e2c1d06ca0081c62f1"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "ba04397a2b979a431f2ce32836f0c323"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "42e86cbeba7a41a9f60476e70728a944"
  },
  {
    "url": "guide/help.html",
    "revision": "3736e6af742011708e64bc02e439d5d0"
  },
  {
    "url": "guide/index.html",
    "revision": "92d8a548b7013ff5d4b21f26e3dbbdb1"
  },
  {
    "url": "guide/lang.html",
    "revision": "1da52effbe8c54fe38494c91b7c04057"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "cfb8bf6b04dabb724f3a02a15f3ce24d"
  },
  {
    "url": "guide/security.html",
    "revision": "f4a4bc357646698a31ee8816c9e9a9d7"
  },
  {
    "url": "guide/tags.html",
    "revision": "9efc20cb14492587047ee17288032b4f"
  },
  {
    "url": "guide/update-log.html",
    "revision": "8e7538e2b5c8491005b9c60c4f1256bb"
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
    "revision": "fcc0632f8b9053801933edf08d8a2ed8"
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
    "revision": "1bb7812b4947a51b45d24f961f8e798b"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "c180d4d64ecdebbb744e702fd378a22c"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "8a957e3a817074aa13ebe982e55b4a3b"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "77a11d17b91af4c173d03a14e38a80ed"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "9d5f2ee4e06ab227c3503fb71a0cc910"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "5979e46e98ec611779b6034fe6ae8d02"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "348e8b1182aaa2ba4c9560df5ecdd65f"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "627a987882913ffa4f99878a4f6a46cc"
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
    "revision": "0a8f9fa6d65d72cf49da2a10939e42ed"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "66e22dc21bd837c1ee6ab7c3a5583444"
  },
  {
    "url": "tc/config/index.html",
    "revision": "112af45df447d20ad149d2b7bcecbff2"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "72dff54e7ff0cb14cc34a601166429e4"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "7fb8be96045f4eb48aa463e861fdfd11"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "1c860f74cf0a8925a98cf1adfb316ec5"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "6375a8d16c2df4516b5d38c56b5d0f91"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "dcaedc26c596046b8481b935de71447a"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "b4ea141ed7c22f4f31459b82f307bdc7"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "11bf3b4513d9771c29a741567fd39c05"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "da7a1dd38d1c33b06c3274db5812aa5f"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "37896215c256da7b6d7e0eeaff8e8251"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "f0a5a453d2c4dbb3e932c2212a6201ab"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "a5f32eb6d276de872aeecc7c6bcf8fb5"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "b1e2a340df854c2d25f55561c436852e"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "0b9a1273563d5f076b38797c9111d0c9"
  },
  {
    "url": "tc/index.html",
    "revision": "d4f548f6dd633729a8bb231f40707eb0"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "f241132cd2787c77b4bf71e6b721ca30"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "e1687543b80561f243a1ea9388049a30"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "1a37173a73acbfdc5891cba76939dd13"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "dd78dbfffdbad6b3e28458e1089bf8fa"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "f9a1f1de3608335edf716a09ccba750a"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "cdd26b69eb1b6e44a98abd72575224f8"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "0444c731b5dbd869ccc6e629b7808145"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "57694b9968b51d702ad06dd9815af0b5"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "8879b2d52e418885aad8b745b02e8e55"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "e7b660a44796742467ad5b90f02f0862"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "5a1cb4c43fee192fd867d02a31a793e3"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "19637f7b47c836fab29687cdb1fa40a7"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "4d1d70a65508f8cf7e7ccc66599a71a6"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "01563a79f4eb366f7d9045ab83f807db"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "56e6923a70c18523c6beb64227429786"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "9111df0be22c41e39ff385f2ee6da7ee"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "98617a328f73ada437a52de1013d6cb3"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "319de683b659b614cb1682ab45d6d02a"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "31de15cfeeb67488a344608647b7ab42"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "390307ed122aacc455f4d64081b34909"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "3b24e8b405990da11b6a5b85ab5fca88"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "0f0844b5c4319209669e6f9c9547d7be"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "2729fc62d08f27fd17099508b3dc594a"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "fe67136955ab459ca86d249cd999c209"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "94d920f3b1b63d32a07c3022eec09fb4"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "adf6eaf82bd62d49e41edeef144c90db"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "b2394ea8f3d41b46f5bb4d79cf40c103"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "5fcf61a139866b90dcab34baf332a09e"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "dbc02d7349b4a0be4ad7f75ff42496ff"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "2bd73cb305f847fb8ca39eade93a64a4"
  },
  {
    "url": "theme/index.html",
    "revision": "0c426d036fc9a410b3aa78071a24468d"
  },
  {
    "url": "theme/senior.html",
    "revision": "d62f5741aa48d466dd35e5a636fffe04"
  },
  {
    "url": "theme/structure.html",
    "revision": "c751fc76af5f90444c7808721760fba9"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "92eb3834ceaa5b030cdbe1685b36eb76"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "fa9f1ffb40fb676ba3a889b86924c305"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "3d49726dc3b1c6317a573e52af5a890d"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "d02ec56554337300f003a4e1e92b93a4"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "ac063f16cfe60f8eba2ed365ff9fea8f"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "254b39fca59ea9bad5def259833e035d"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "00706d68d0d3a9f85448aa19ed5b568b"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "4d5f3c20486bcd9d186215e5729e5243"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "95dca09165a2d0bd52dbc6c8ba536204"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "ca1c7c76d6740e3da266f7534cd0920a"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "22a4f4dc21e8919423ea346caa0be680"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "f77e8b79bdcadb23bfef86cc35bf8688"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "3ac38ad3a3d49fb3a02d8ee333a67acd"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "ad3402eebbc86f96e5a3e4fb4b6b68a6"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "c66dafa77415d6dd02b7bf8dfba7291c"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "ab059348afa37dfdb33c1d6e2a822b91"
  },
  {
    "url": "webmaster/server.html",
    "revision": "ee44383ff14e1b4307fa8d4a83cdcc45"
  },
  {
    "url": "webmaster/template.html",
    "revision": "245960a74bdf57263ac26f2ee2ae82dc"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "d19f55b07fac5d98037ecdea7effea8c"
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
