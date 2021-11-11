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
    "revision": "3729eaaba34c0b53a22980a0f6be949f"
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
    "revision": "ed25e9aa4b2f637b7a6fbf6765df28a4"
  },
  {
    "url": "api/web-design.html",
    "revision": "0dc3f270403aa82f737e84fe19a3d80e"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.9555af6c.css",
    "revision": "a63af4bfb76381e74f1ed6c2ef444912"
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
    "url": "assets/js/100.272ae67e.js",
    "revision": "14ea32c6cc4c6a4b202ecc4024d2b9fa"
  },
  {
    "url": "assets/js/101.617662be.js",
    "revision": "a0a86b002fef2a9605ff29e9f0586591"
  },
  {
    "url": "assets/js/102.3b7193ab.js",
    "revision": "54d6a082d632dd2f6966c66e98ac96e1"
  },
  {
    "url": "assets/js/103.1fafda59.js",
    "revision": "29f542518987b94c00f7919bf387e28a"
  },
  {
    "url": "assets/js/104.c05ced74.js",
    "revision": "d0ece9f139a9c50d6de78f45a9a3d46e"
  },
  {
    "url": "assets/js/105.99930a42.js",
    "revision": "e06a9f82ab110b537a3f7fabd1f44783"
  },
  {
    "url": "assets/js/106.54a822a5.js",
    "revision": "28c02d6f241aef8377b20ed2b5a991a0"
  },
  {
    "url": "assets/js/107.6e3fcac4.js",
    "revision": "8649f67b577fae74ef31317aad92bac3"
  },
  {
    "url": "assets/js/108.992da6fa.js",
    "revision": "70aaca993aabfecc1056057a9ea4f5dd"
  },
  {
    "url": "assets/js/109.cb0589be.js",
    "revision": "41116723aece0fa12e4b53ca4fa09e3d"
  },
  {
    "url": "assets/js/11.708dd212.js",
    "revision": "6b37e18344509a1830b240b95b6d2bc0"
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
    "url": "assets/js/17.f3326132.js",
    "revision": "7d89d97c06b0711d04161932a258d98b"
  },
  {
    "url": "assets/js/18.ad3b471f.js",
    "revision": "2c8fda037812be15eb890bebad7bb913"
  },
  {
    "url": "assets/js/19.5dfafda9.js",
    "revision": "2decc462096e41b968576b9570a2c13b"
  },
  {
    "url": "assets/js/20.266c6ac6.js",
    "revision": "1850847c8a47a87af95f3ef5e00d4546"
  },
  {
    "url": "assets/js/21.1984957c.js",
    "revision": "9d66b1b01ff34eead28e5e9e71500366"
  },
  {
    "url": "assets/js/22.8a1f0cb6.js",
    "revision": "948a68516b90f95cd961bac935e9745a"
  },
  {
    "url": "assets/js/23.e69970e8.js",
    "revision": "715eac62edae4452adf186e598dcc0d7"
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
    "url": "assets/js/26.c2ef07e2.js",
    "revision": "caccac459fdbdd97a7dfabc59e2d53c2"
  },
  {
    "url": "assets/js/27.dff3428b.js",
    "revision": "d90908f934d8e4e2fdf8d0ee74c2ce3a"
  },
  {
    "url": "assets/js/28.ceb1d22a.js",
    "revision": "e367834027996c574a795b81a2196bfd"
  },
  {
    "url": "assets/js/29.920b5774.js",
    "revision": "0f95dbcd93bcc88769fc70601a8afb1e"
  },
  {
    "url": "assets/js/30.02e30c41.js",
    "revision": "486d6470525aa675ca72d8e98d562c3f"
  },
  {
    "url": "assets/js/31.20b87da4.js",
    "revision": "03ee8e09e0aefbccf05b193284a3ff38"
  },
  {
    "url": "assets/js/32.4edd3546.js",
    "revision": "06be7b6db67893e17638f58c82dc1e0d"
  },
  {
    "url": "assets/js/33.1d5feb90.js",
    "revision": "33e50d3887a334fcbb86a492089056e9"
  },
  {
    "url": "assets/js/34.a4a6b5b4.js",
    "revision": "5e0a9003c398d126ccaf8c5be85dc9dd"
  },
  {
    "url": "assets/js/35.8095fd27.js",
    "revision": "f1f82b483eb2a55a6359610b59ae00a8"
  },
  {
    "url": "assets/js/36.c6b83801.js",
    "revision": "3af5d4529ea33834eb2ea1d72eab5730"
  },
  {
    "url": "assets/js/37.f5fc4e0b.js",
    "revision": "a8c4eb69baa206379ea4d6e456b60c84"
  },
  {
    "url": "assets/js/38.a44bba85.js",
    "revision": "cadd1dc267d91a85adf4add082822ce9"
  },
  {
    "url": "assets/js/39.3ea9d6af.js",
    "revision": "ddc39e0aceec6fd5e2255e49551bc4fa"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.8d916d87.js",
    "revision": "8f23793a2f6c43cce8df5288d53f0287"
  },
  {
    "url": "assets/js/41.2261c774.js",
    "revision": "a3b3d86e7734f0d7d6b7f57bb4f4db1f"
  },
  {
    "url": "assets/js/42.6cfac026.js",
    "revision": "f9b0e92580607074eaadaa5226600016"
  },
  {
    "url": "assets/js/43.2ef6e989.js",
    "revision": "696b719acc0c06789832d7474bcacb75"
  },
  {
    "url": "assets/js/44.231b86e3.js",
    "revision": "7b374c9429b4580af9e57bda9a80bc48"
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
    "url": "assets/js/47.70537ea3.js",
    "revision": "3f3f19e9595b89ecdb05a7d351bc1c18"
  },
  {
    "url": "assets/js/48.58343188.js",
    "revision": "e8bf25dada1042b181f96ce64af4d2e0"
  },
  {
    "url": "assets/js/49.ea745101.js",
    "revision": "fb99a7dde3d21ef35dbcc64ea5cf3243"
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
    "url": "assets/js/51.d099e9c6.js",
    "revision": "c9554e0d4a7b8b49c8c24ab933d98b23"
  },
  {
    "url": "assets/js/52.0f3faccf.js",
    "revision": "12bb504b1deb6c97e15ca857c32adf62"
  },
  {
    "url": "assets/js/53.983267f7.js",
    "revision": "0facc6406584e44e5d85228a357247b1"
  },
  {
    "url": "assets/js/54.b3fcecad.js",
    "revision": "3f4a3d02877e11329a6eb61e70173770"
  },
  {
    "url": "assets/js/55.4ba0eaa1.js",
    "revision": "8071f6aa1b8968e67b6f9746a459c76d"
  },
  {
    "url": "assets/js/56.e3a07a39.js",
    "revision": "9e0179aae622a3d8dc8b2b4a710285cb"
  },
  {
    "url": "assets/js/57.146917a5.js",
    "revision": "50e21ca5b2a100ad792e7a13c9d15861"
  },
  {
    "url": "assets/js/58.4899f37d.js",
    "revision": "1b0c62c900cc5bcc851271db38f473c1"
  },
  {
    "url": "assets/js/59.93124375.js",
    "revision": "734f2384594e64e06763e79e57126782"
  },
  {
    "url": "assets/js/6.bdcae1a6.js",
    "revision": "59f1cf190b6c1cb1a22cef97996e49af"
  },
  {
    "url": "assets/js/60.c4cd00f7.js",
    "revision": "5776df5ed79519a3c83e30bceff0e38a"
  },
  {
    "url": "assets/js/61.aa9a93be.js",
    "revision": "8e4b018e692fb04006a4e7a497b7355a"
  },
  {
    "url": "assets/js/62.1b1f568f.js",
    "revision": "4d30a4953e27f0375ca8447011677579"
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
    "url": "assets/js/65.2d3e8d19.js",
    "revision": "b84b75b4c3d272db04aaf62e65dd8b46"
  },
  {
    "url": "assets/js/66.a36edff4.js",
    "revision": "dd2daace4379a680d188fc912b620d0b"
  },
  {
    "url": "assets/js/67.074c6a47.js",
    "revision": "66b82042c3b46f4da479b46d4de55e31"
  },
  {
    "url": "assets/js/68.db6f0067.js",
    "revision": "721fe61317f16cfb9347a437eda68c03"
  },
  {
    "url": "assets/js/69.b45b3396.js",
    "revision": "bc81d5e28717cdb5e78dc1be79e49cc8"
  },
  {
    "url": "assets/js/7.37078044.js",
    "revision": "27a6092ae7f5585388bad9868d5f5d6c"
  },
  {
    "url": "assets/js/70.d77fd3dd.js",
    "revision": "61003a4238cd62f8a0e916b22208b06c"
  },
  {
    "url": "assets/js/71.a8d72e7b.js",
    "revision": "940f934d72bbac2542091ec9ea28593e"
  },
  {
    "url": "assets/js/72.57009301.js",
    "revision": "5be1e714e17e2536f80bffbeef0826e7"
  },
  {
    "url": "assets/js/73.8d19a144.js",
    "revision": "f3e2d287f7d8d1f67d4c92c4bb200a44"
  },
  {
    "url": "assets/js/74.37c9235a.js",
    "revision": "c548cc9516597460f635b694fab345fc"
  },
  {
    "url": "assets/js/75.95ff2207.js",
    "revision": "bec6cdc92278d37bdff35222bee8b971"
  },
  {
    "url": "assets/js/76.7165b7f8.js",
    "revision": "6e26c37dbaf28a4485eea1e752f608b3"
  },
  {
    "url": "assets/js/77.93d48c62.js",
    "revision": "8eeed387f46ccf974ffa07bf83503056"
  },
  {
    "url": "assets/js/78.29420ee0.js",
    "revision": "c2a27bc9566a25df3842e5bf6c9762ba"
  },
  {
    "url": "assets/js/79.f68dd342.js",
    "revision": "e881f27240436d5a289f02bb27e1f219"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.3cbcf757.js",
    "revision": "ec76f056b0c619b5262bdfde4ad2a59f"
  },
  {
    "url": "assets/js/81.6e43b8a2.js",
    "revision": "cc68f726f3418534b35357930e6be1f9"
  },
  {
    "url": "assets/js/82.800d48a6.js",
    "revision": "6eae1970367eb74635371dc845b2190e"
  },
  {
    "url": "assets/js/83.32421d6d.js",
    "revision": "c684603116dd0de9ef4374867e61068e"
  },
  {
    "url": "assets/js/84.e992e345.js",
    "revision": "84594bcc13dee91a7fe8e5be11172e88"
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
    "url": "assets/js/88.769006f5.js",
    "revision": "ec4f16eb7e62a6dcb28fd5f5746d3767"
  },
  {
    "url": "assets/js/89.f6528b53.js",
    "revision": "74ca70ddaaaa51d998415d8b7a60d17f"
  },
  {
    "url": "assets/js/9.b7d893ca.js",
    "revision": "3adc74f0f24ccd4579788c20181bf62c"
  },
  {
    "url": "assets/js/90.54569142.js",
    "revision": "55c0c66397f091c0bf28cfc88e6506ff"
  },
  {
    "url": "assets/js/91.45a4bd37.js",
    "revision": "8499aa495086db310dc26cf8a5fe494f"
  },
  {
    "url": "assets/js/92.d19e9212.js",
    "revision": "45d1dc2a9c9fd4eb8a0ef4edca01de77"
  },
  {
    "url": "assets/js/93.d8033930.js",
    "revision": "2de46dead302cbfee3ba7bd9daeaa698"
  },
  {
    "url": "assets/js/94.57d001c6.js",
    "revision": "7c07ae06deff6130f13f0ac3aafc0767"
  },
  {
    "url": "assets/js/95.8c9a04d6.js",
    "revision": "401e3fab770ad21bf2c73b7b518f2b6a"
  },
  {
    "url": "assets/js/96.c3a0cf16.js",
    "revision": "bacafdd60a4ead121f6f8c553ba54e6b"
  },
  {
    "url": "assets/js/97.8a2b9303.js",
    "revision": "5e64f2e760d27a837c0fadd548836751"
  },
  {
    "url": "assets/js/98.a8e791ac.js",
    "revision": "6e8df21d7016564717ed1ab7b0e04078"
  },
  {
    "url": "assets/js/99.5642e34b.js",
    "revision": "eeb81bec51d75f8d2f761b3eac94512b"
  },
  {
    "url": "assets/js/app.58bf8537.js",
    "revision": "c554ad61b9f775ca19b26b68ad47038e"
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
    "revision": "33d110147cd52a90b0b18d48b042b5ec"
  },
  {
    "url": "faq/index.html",
    "revision": "28025b1e8515fec88627861742731ed5"
  },
  {
    "url": "guide/assets.html",
    "revision": "ffcc265a0ff1d04c4735e52851900aaf"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e9c5aa55c3073ff5602b207f11e21426"
  },
  {
    "url": "guide/coffee.html",
    "revision": "d2538616cdb8110fe356f9f47a25bcb4"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "47ecdc7e5a02669fcf24dd3d3965b510"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cc06482b36d1f8a8570f070825d8358e"
  },
  {
    "url": "guide/help.html",
    "revision": "f47059e6ced44e21fa8925fe1077e58e"
  },
  {
    "url": "guide/index.html",
    "revision": "bd9409b130d3bdb136294660ab5367e8"
  },
  {
    "url": "guide/lang.html",
    "revision": "96bdd6c0bcdbe542349fbecfffaaf896"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "740345408e84b9e29b6269de6cc8a8cd"
  },
  {
    "url": "guide/security.html",
    "revision": "33cb3e836ccd0c70ac24ea4308ec92a5"
  },
  {
    "url": "guide/tags.html",
    "revision": "61f8be5c57b1d749ff87dfb162139802"
  },
  {
    "url": "guide/update-log.html",
    "revision": "3b19d6d7fbabbd8af4286462ef025139"
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
    "revision": "3231ad9c853389e2d791bb5480bcb4bb"
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
    "revision": "5efa33cb847b977bb6a6ad4b39bdd2be"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "25c3957551307a82edd026f9dcbac492"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "d61069d5f66b1f6877a2dfdc1b1b0706"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "51587482c6532376cee70a643136260f"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "c171b928e16805ecd45337966e05f295"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "7f93805f1d03dba82ee5b019e2968184"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "ad061ea092159d159e1879e0abd6b0f8"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "391b5d79d9dd2e60237f56b7a140f058"
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
    "revision": "24f14dd9b9c584217aa4569d1bd74f02"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "07495c9c17eb744cb6d8c3bb51d8d94d"
  },
  {
    "url": "tc/config/index.html",
    "revision": "f87819d48d85acdeff3d6d32fa33d7a0"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "4b3485e9a63cd1869cd6ec48c9ada57e"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "c648aa194b032d91335d0ec0f18d15f3"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "fd35f1adfbc30594f8152ed177c1b549"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "176849489e67a07ce718610def757c4c"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "aa32e4a30456c6cabddde0f9c9d37ddd"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "d8e5cd3b98367d640e70ab3c4356ee3f"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "132fd500c30eb6824d4f1be36e5d36a9"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "d8525117779ee0ca1df4634409d06ded"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "0d0199c3a2ac4b283e0e72c78d821453"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "d4c2e2450020aef57f45a29ebe399224"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "8433e96858b37de6211e33a86a881dc8"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "57498f287de535d11216d4e2dcc003f1"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "4ea110cf8ba17530ddf7c300e53b7403"
  },
  {
    "url": "tc/index.html",
    "revision": "ed24c2b8c17d7ff127a5ff2605e48d48"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "fea156036daff9e5d3359ee6522094e8"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "66b53a4cb7a2426fee2bd383aaa56b1b"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "9ac0d713d3a80f358f31c23987db2601"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "b7798404b1ebeaf0d865e460626a1eb0"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "6698eb93eb540bc866a8f8fd70ec1bab"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "7cb63cccf55f82b11bb3f16b13838dda"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "f80a2857a6a45eef63b11b718971f819"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "e542d8e977810b46bf4c2855d12c68d6"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "f882a0717b35b9ecee043e0f30dcbfe9"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "80d9b422fb39561a4739db996ef17705"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "71d07d67c51900fef0605344e3dce4f4"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "86bbe7ffe05671ecba3e3596c08a5083"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "e75c9627d5ce8d67779f9a576b32c365"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "17cb8b0cd34b0dd427391c09cd0361b5"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "be78e3ca6bf7dc0cd0f71fe89272c002"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "e37bfccc99983c8b012821781778fa91"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "fb88bbe7641c0ae0f7851b5f28ee1f73"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "9521745e2e11af7bdf934537ec4845de"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "5f540242566e45397f1b9bd66a02e343"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "e467c772e1d95379c67345b366aa82fd"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "fdb7353fb1e6682896cb5d9bd297e58c"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "57e04f15c80b7dbb2148e1d91f9bc163"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "93045abab93a487d48d37e72b295853a"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "28436e4496064357d9dc722d0f684533"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "04f6cb68fe272bf39e596be4518178b8"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "04c96ce6ff705abae04bb8b4e6471121"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "ac7a307f4a3262e162fc59ac354ba5bd"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "5fa956e7f805b5cbc3375a7cbc630e14"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "fd0911bee87b280059a584a2c7463250"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "f646ad65945ca22aa739e84cfd197873"
  },
  {
    "url": "theme/index.html",
    "revision": "d3e6c05e819306fc6cd3acc8fae1555c"
  },
  {
    "url": "theme/senior.html",
    "revision": "fc28bc0c9282407c55bcb98d129ba965"
  },
  {
    "url": "theme/structure.html",
    "revision": "2b666fca7645983006ae1b901c8a4b24"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "fbe7f36c6268a25b3a08bcde5982b9de"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "30c9b1ed6765a0db6b9c0423f5570c58"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "4280bdc9dd9937244df4cd4e3aff7c27"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "80c759227a35cb968d09aaf8b3b29de3"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "82b6ebddc65beb15b5f44c3ac9b928b7"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "75d4a0bb4f0d202a6741f8b7e8b9621d"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "990f3599fb766918279c423f5487ced7"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "b1ee81cb9ffaeeee45f0007197a4b589"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "a6003ab61af2b5a9649502270b7d1d52"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "252699e4e721094d09d9f40ea3fb4f60"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "32f552f5d831c3a252358c45251e1963"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9f188e382af08357226d10fec71a52e0"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "fb437eedfa0d337b871ba6511bd8f79e"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "21c7025d0411c45425d82db159073015"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "309f042e6d46a5386b8566a2261289e1"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "8615bed9e50a2aee7200fcfc3e69fcea"
  },
  {
    "url": "webmaster/server.html",
    "revision": "a46468c80bd7ccd6604f1ded605a9631"
  },
  {
    "url": "webmaster/template.html",
    "revision": "a4f6a5d3e2966730beb18ae2166f9e95"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "e241bbae013de33b7edb2a5167315106"
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
