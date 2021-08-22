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
    "revision": "b1eaa60d193808abc8655b64b70ca080"
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
    "revision": "12945ec0f393dce5da89c29cd9f35db2"
  },
  {
    "url": "api/web-design.html",
    "revision": "cee2707437f463c21e393640f5efaad0"
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
    "url": "assets/js/100.5160f346.js",
    "revision": "7b842d506fd83945ed8848c65f1693f0"
  },
  {
    "url": "assets/js/101.f19bb3ab.js",
    "revision": "c93c6a0fe1b6a188289be71e79b786f8"
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
    "url": "assets/js/104.5ba672d9.js",
    "revision": "bf641765b5c2723d4a96fd79e6adc453"
  },
  {
    "url": "assets/js/105.e3f428ef.js",
    "revision": "88e3b99bf11ea4b958ee0d1a8af5d402"
  },
  {
    "url": "assets/js/106.6aa9a9ab.js",
    "revision": "54cf523bfac05a02f6ece0c2a0efb6f9"
  },
  {
    "url": "assets/js/107.4339e35c.js",
    "revision": "ac769d38f84d234a8946910cdbfa2a0e"
  },
  {
    "url": "assets/js/108.184df7e1.js",
    "revision": "04bf8dfcfa334d80964d75a5f021eaa9"
  },
  {
    "url": "assets/js/109.cee58c68.js",
    "revision": "3231412ef328f336ba62b1847313c0d6"
  },
  {
    "url": "assets/js/11.a1ff2cf2.js",
    "revision": "6d2309e080b0f6c325248d69451c5c28"
  },
  {
    "url": "assets/js/110.21f139d4.js",
    "revision": "c898188475f023180c11f9401ebadef6"
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
    "url": "assets/js/13.2fd4565a.js",
    "revision": "195f75c7b11a3a612e121cffdaf596dd"
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
    "url": "assets/js/18.aadb0281.js",
    "revision": "d3b96d474960ed0b8879e82c2d61c7a0"
  },
  {
    "url": "assets/js/19.44a84c76.js",
    "revision": "789a072a2e2ac887ad82d39051293652"
  },
  {
    "url": "assets/js/20.7a2e4dae.js",
    "revision": "c7407c706301d8027d7ca94fea63676c"
  },
  {
    "url": "assets/js/21.c0914018.js",
    "revision": "88a869b618e549c25ebf2ffb0854ba77"
  },
  {
    "url": "assets/js/22.07a6c194.js",
    "revision": "76adb3b4b1e8877201e5c830d2e0f138"
  },
  {
    "url": "assets/js/23.3844690f.js",
    "revision": "89fef18d570ba42456cb6e88a2940ac5"
  },
  {
    "url": "assets/js/24.94d743b5.js",
    "revision": "4d3530003fff25eedecf74e1af71a4ec"
  },
  {
    "url": "assets/js/25.264b8114.js",
    "revision": "0481b35e5cdf3c7a442cd0f4c7eb8558"
  },
  {
    "url": "assets/js/26.86ebdd29.js",
    "revision": "2c62c10cbc63f261e5f2e41b2d7771f6"
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
    "url": "assets/js/29.860383c6.js",
    "revision": "85e35f1433d8baaf364469aa608c3907"
  },
  {
    "url": "assets/js/30.f4ae9fbf.js",
    "revision": "ff667dc8c0272f15caa7a4b4b4a93807"
  },
  {
    "url": "assets/js/31.997b17e2.js",
    "revision": "38091b0b22a986fcd599efe96ca0d279"
  },
  {
    "url": "assets/js/32.e271549d.js",
    "revision": "5f77efa84cad2cee19a7030f7daca2e6"
  },
  {
    "url": "assets/js/33.11d14c56.js",
    "revision": "46db7d8e2494f5294d18021b01479c88"
  },
  {
    "url": "assets/js/34.a297e062.js",
    "revision": "7af42534ece985e5569cce4b6fd9e107"
  },
  {
    "url": "assets/js/35.04dd51c6.js",
    "revision": "f14bbe3723534e3c63a5d0fe6d487f04"
  },
  {
    "url": "assets/js/36.d6bb745c.js",
    "revision": "46a1e0e0ffc3777d678052f46550711b"
  },
  {
    "url": "assets/js/37.b06986c8.js",
    "revision": "f2ee8e93ae20cc2982f91867d9d27ef9"
  },
  {
    "url": "assets/js/38.dfc1b1af.js",
    "revision": "c50f81446d71f8f52f740fdd86c316ed"
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
    "url": "assets/js/40.a351a86b.js",
    "revision": "d88aea3e7a40b03fa3c7a4fd14a164ad"
  },
  {
    "url": "assets/js/41.7a2814b1.js",
    "revision": "dfea93052bfaac91a1e5abf0af557fa4"
  },
  {
    "url": "assets/js/42.6cfac026.js",
    "revision": "f9b0e92580607074eaadaa5226600016"
  },
  {
    "url": "assets/js/43.f10f506f.js",
    "revision": "55e485e7c8f27be692b51a59b92f6b97"
  },
  {
    "url": "assets/js/44.575dae05.js",
    "revision": "27a6e40dac20da1d86250d3ea1a38fa2"
  },
  {
    "url": "assets/js/45.6d904baa.js",
    "revision": "0fd73ba3f4371a3f3484eb71d3fb8c5e"
  },
  {
    "url": "assets/js/46.5b9cf4c7.js",
    "revision": "ca7ed49380ee76272cfc8566a865ff89"
  },
  {
    "url": "assets/js/47.758ac20c.js",
    "revision": "3571748f893affcc7d1df4bd5db1ae81"
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
    "url": "assets/js/5.0f02ed52.js",
    "revision": "6d12ffea968cb27562c8cc1722d1ddca"
  },
  {
    "url": "assets/js/50.9a6962ce.js",
    "revision": "62e2f166e04dc1acf351396b3ebe7b3f"
  },
  {
    "url": "assets/js/51.df03d224.js",
    "revision": "ddece06d88be40e5b691ab73631ae580"
  },
  {
    "url": "assets/js/52.a242c7d4.js",
    "revision": "f49a85a901eb86689bf0c73f94c6a9c9"
  },
  {
    "url": "assets/js/53.75648dc4.js",
    "revision": "7c2b9cf92d938a48e2f58c5006c084c7"
  },
  {
    "url": "assets/js/54.2221a73e.js",
    "revision": "0ad648a4e5f3506b28adae950727bc67"
  },
  {
    "url": "assets/js/55.601e097a.js",
    "revision": "d0c6c2854120f0fd221049f25f18cdb2"
  },
  {
    "url": "assets/js/56.fbc7f7e5.js",
    "revision": "8f2e21cf2df738dc839a530ea6ae35fc"
  },
  {
    "url": "assets/js/57.586f45c3.js",
    "revision": "b0315de12adee103b579fb881994f85a"
  },
  {
    "url": "assets/js/58.a82dec74.js",
    "revision": "f0446b034c744b814f83115ed0339a51"
  },
  {
    "url": "assets/js/59.168fc3a9.js",
    "revision": "196487846ae271ca96c914550d29714d"
  },
  {
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.0be14338.js",
    "revision": "4ddf4ffeee433fd2eefdc247b7c415f3"
  },
  {
    "url": "assets/js/61.c54a967e.js",
    "revision": "8f2ec0e0784d58c8051f9f6e2f7dd731"
  },
  {
    "url": "assets/js/62.1831eaef.js",
    "revision": "320063749ba498bbd33056c46b81f755"
  },
  {
    "url": "assets/js/63.5c429457.js",
    "revision": "4f04c6c5510f5513b0d49a47c8cef7ef"
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
    "url": "assets/js/66.4f024f5e.js",
    "revision": "11f4f355e32cf250e9f3ede154fbdf53"
  },
  {
    "url": "assets/js/67.7d020b84.js",
    "revision": "b8aeba4e0007ad59cbd513687aeb1aef"
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
    "url": "assets/js/7.021220db.js",
    "revision": "0b68f3b5de1c3cbe57ac8f2001620b3a"
  },
  {
    "url": "assets/js/70.6a5836e9.js",
    "revision": "ddea39c16a8b9ef96d6e64ec615812dd"
  },
  {
    "url": "assets/js/71.fc0a2665.js",
    "revision": "9fa745c4b94bde5e5893a6880713bb0a"
  },
  {
    "url": "assets/js/72.0bde1e00.js",
    "revision": "4c90de9e981606d231a26d44526409af"
  },
  {
    "url": "assets/js/73.ce1e3d60.js",
    "revision": "475b1041b80119acf1b7dec03c498524"
  },
  {
    "url": "assets/js/74.9a2eea47.js",
    "revision": "540d88e2030d63a0b851f5b14475ce13"
  },
  {
    "url": "assets/js/75.95ff2207.js",
    "revision": "bec6cdc92278d37bdff35222bee8b971"
  },
  {
    "url": "assets/js/76.6ad186a4.js",
    "revision": "f4a5a05bf2dfbd62b4e71c3d6096b503"
  },
  {
    "url": "assets/js/77.d9daf226.js",
    "revision": "be0e120206ec4ac03dc2eaedaabbb241"
  },
  {
    "url": "assets/js/78.1e2e019a.js",
    "revision": "6be9f1e4b928f3608d8c3d7a4c03d5ec"
  },
  {
    "url": "assets/js/79.1ae84123.js",
    "revision": "b794d3da1a0c1414989472705d02238c"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.a92b106d.js",
    "revision": "cb88103760f853ac95aba8f83f9d94bd"
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
    "url": "assets/js/83.a4d860b9.js",
    "revision": "62b6df536388e49420b5d7ed80353b68"
  },
  {
    "url": "assets/js/84.745761dd.js",
    "revision": "c9020f1fdbc78865c98d57ab3ac4f856"
  },
  {
    "url": "assets/js/85.1820c378.js",
    "revision": "56d1801546c1008b3b3106204db0233a"
  },
  {
    "url": "assets/js/86.f0a0114a.js",
    "revision": "8a362d39227272d7bd0526240295d859"
  },
  {
    "url": "assets/js/87.7b896c80.js",
    "revision": "af99ed42978399750bea12233e23d30f"
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
    "url": "assets/js/92.507915e4.js",
    "revision": "9878670b899f96f7ed0fc338e01985d0"
  },
  {
    "url": "assets/js/93.75e3169d.js",
    "revision": "a9a9945f73ccf1f1785e109101517acb"
  },
  {
    "url": "assets/js/94.fece6a8a.js",
    "revision": "bc7f788e21d0064d5bfd0caad42a814d"
  },
  {
    "url": "assets/js/95.82af2a17.js",
    "revision": "29e4a77814633fe305a0edd909205da1"
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
    "url": "assets/js/98.21025b51.js",
    "revision": "d9fd856d413ac647ed4b43f9ec6bf576"
  },
  {
    "url": "assets/js/99.b06983b9.js",
    "revision": "503e539664c6836f934c92a78c068c40"
  },
  {
    "url": "assets/js/app.454e982e.js",
    "revision": "395fa7c10d64d2cd04e4d99c148692ef"
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
    "revision": "3ddd0a877d76d11a1fc3bf782bff210b"
  },
  {
    "url": "faq/index.html",
    "revision": "cbfb58f8cac2160b23490f3bf92bcb00"
  },
  {
    "url": "guide/assets.html",
    "revision": "ed7a1d3146b540bd0526bec7275119cf"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "6763441619fc5aace133bff1c4e56cf6"
  },
  {
    "url": "guide/coffee.html",
    "revision": "c9f670ff54083d32320c0673833c5a14"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2e25c8d5a1b5fe46216b4c64d1625b72"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4205a558247285cccacc588419ce2369"
  },
  {
    "url": "guide/help.html",
    "revision": "021c0a155e01f8e3bb85f85e42dbffa2"
  },
  {
    "url": "guide/index.html",
    "revision": "9fc1e395f6a2f65092c19fb290307f2c"
  },
  {
    "url": "guide/lang.html",
    "revision": "4b3508911119f014c74ba43cfcb783ac"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "60f5d00c82da0f768d23ba3db78bb536"
  },
  {
    "url": "guide/security.html",
    "revision": "a0e79239a974773866f378bc1b79a7c4"
  },
  {
    "url": "guide/tags.html",
    "revision": "223844ae45e6d5ad5e861a370a765072"
  },
  {
    "url": "guide/update-log.html",
    "revision": "5e98ed9d4056f451d8a97e3d028fb9c7"
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
    "revision": "ea49e826e584970ce15716b8130d47d7"
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
    "revision": "cec95dd4e5114cace58dbe891109a002"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "fa767e327d67ba0fd3ea375e090de4bd"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "c2db102f2e7cc3fa6869fec777fcc5fd"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "618a043371f273fa88688b094c2d9730"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "8dc0586a281aed486e0b00c1179310a4"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "0bdd32a0a29f77f5e0bf81db6f45f7a0"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "817ec8832d8c3cbefba2a9669f4bf426"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "bb2a1cd0f565013331beca80aa92227a"
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
    "revision": "bab3ac710d22168b4e22dee659f4f91d"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "def3ff1982ab1edfe265bf452086cad8"
  },
  {
    "url": "tc/config/index.html",
    "revision": "37ffc2f105e7215fdb02361126168750"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "59416bb73d61d910cd1b0354924c3bf3"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "e72f47a6364dd00eb72c27f2a66fb506"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "583e30a26a4da0a6e02c5a695571fed3"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "64b5a19f80c18e99d9a32e152530dd5f"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "05f07f0817717400f33bf3abfa044098"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "c5f3394bcd8cd31f3964daddfb6db942"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "450485ca399b44b9094bfc1658ff74c0"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "fbfbee264d810a35171568472b747895"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "33f04aba825fa6e33121b1e47abbaebc"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "4357180e231f2bfba8c7051ac5283975"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "f28c50d6841c78b16e6e072d302fad56"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "89d5f57bcea6864f3912a55289a0cfc1"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "be150b6343e26bd85b81ff8e998cba2d"
  },
  {
    "url": "tc/index.html",
    "revision": "166200207b308a809efeb2bd0ba609ea"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "86f0315ee5e4782340f9ca7ea01df713"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "b0e47966e4e12e40561bf724b4f0f351"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "e0fbb37a992a5a6047d80d76c3fec9b2"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "448a6033b9a5e651db134f8fb66ce0dc"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "baa69a6f6825c5214d730055ef5ac117"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "630dca8c253dfe16ced407b5c6a176c2"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "5f584fd31522addbceeff24d7ca7c33f"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "3c555e77b9286c8df6e28b4ff0392482"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "24890a3a4e38034aa78f364a8985c568"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "abd73c1de9d83d743656a611bed91e95"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "fb85dde316f6ff3eb2f9dc529eceb692"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "1c3804a937f00e9b1c146a77e06241bc"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "42de520f42d2eaf1ece0398e58df5284"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "ca2f84725a0c47a5c95ec2834b06f59d"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "aaa9999fc5d9da2950853529914f16aa"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "7eee9f3f7aae005951674f85576236f9"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "773dcb6c3c4ed66278cbe2a91a30a328"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "b5fcfa8e1b02ae0848fc5e33797992ab"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "bf0aed05bcb9d24213b42ceaa14cc674"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "291e1feda0f196f78f894273704cb5b7"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "b407ef17967ac0cb944ab4b23f1f9c2a"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "2166fd3c9f1fa55e742a0288ce35ae51"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "067b8a2dd8b662d2efb0614234c68786"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "213e894f9e33377063253f9aa1c21cc2"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "a485405685a4853fa4110f7e40486b50"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "d60b4cd746ef9da79e4c0cfd49bc5b3d"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "1462b3a42b2b4b9fcf494accef6f51fd"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "d5f75cb29e44d1f1848ae2051ff46709"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "e8be9d138bd6c50c8f443051df332e14"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "00ec8aa1c459521770c4c8c130c4c89c"
  },
  {
    "url": "theme/index.html",
    "revision": "2825e46356e41113e89441d07ff8108c"
  },
  {
    "url": "theme/senior.html",
    "revision": "636b78a217e3d9deb12733eafd2230a4"
  },
  {
    "url": "theme/structure.html",
    "revision": "933dccc2284732dee7593bd3c0673909"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "36941daf864d90e04d45a5f6694585d1"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "f4cb2bb22d9013b4d496efbf2f8916de"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "d72868eb1db389a29a20ac76a7bbaedd"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "63901750323c54918789c800d021e269"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "2713874a4c39aec9ceec63b287cd2ddc"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "41bdfa1a894aa098803cfce2faf09388"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "417cc0945db2f0382077db6cedb98e35"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "9a263de6142b437229c786c1b4c2a304"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "1bee7b554614e53e0f412e0ca01b3249"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "1462730b7e2a930a6daf8003502a5c6c"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "22defe515b77b46df339319b4a68dd0e"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "8ecd6bba68469e3502be18bb73520006"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "8a4686d4b3e7013c886a0aea78ea77f9"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "51d370b6bb535b8488a5cf9d9f389791"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "54f79dc791ad487cc5b7ad58473cf0b0"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "f33ad45c8b591607c9ad101953a173b5"
  },
  {
    "url": "webmaster/server.html",
    "revision": "12357cc3d21d8d4b97faa5ad40ce16cb"
  },
  {
    "url": "webmaster/template.html",
    "revision": "898a2e332d7554016bee1d1b954a86d0"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "96b8c8b18e187a742f1e6996c6b02780"
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
