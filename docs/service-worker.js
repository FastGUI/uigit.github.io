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
    "revision": "99ffafb5389264c7ab760d73daad6b8e"
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
    "revision": "4050e9fd4a9af9ed1a5999464178f0d7"
  },
  {
    "url": "api/web-design.html",
    "revision": "16834a2d79fe2b956ccd475b436215dc"
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
    "url": "assets/js/100.764ff207.js",
    "revision": "b25e334bfe0b88745db206594fb0819f"
  },
  {
    "url": "assets/js/101.2261f1b2.js",
    "revision": "6683a83336e428157f443c199e492219"
  },
  {
    "url": "assets/js/102.d93394f8.js",
    "revision": "58eb1098d7802ba94c47093d2e6a6aee"
  },
  {
    "url": "assets/js/103.b0c0ccd4.js",
    "revision": "0bcc28980c71b86b96d43b8853e1c92b"
  },
  {
    "url": "assets/js/104.e0b1633a.js",
    "revision": "c878339d805e74167233af52e5053dbc"
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
    "url": "assets/js/107.931598a1.js",
    "revision": "c8850190cc18db5e5dd550ac1593912d"
  },
  {
    "url": "assets/js/108.184df7e1.js",
    "revision": "04bf8dfcfa334d80964d75a5f021eaa9"
  },
  {
    "url": "assets/js/109.377c92ce.js",
    "revision": "5bc9bbf2f24a2a5fbe90cd97bc4c5ea0"
  },
  {
    "url": "assets/js/11.708dd212.js",
    "revision": "6b37e18344509a1830b240b95b6d2bc0"
  },
  {
    "url": "assets/js/110.3b6f6d7d.js",
    "revision": "72898b87b3827ed16f695b3087ae39a2"
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
    "url": "assets/js/17.a6a71390.js",
    "revision": "9d8735dc9c05053a7a101932547d3226"
  },
  {
    "url": "assets/js/18.d1023790.js",
    "revision": "17cc829cc018e70b0d2398e0e1ecb9dc"
  },
  {
    "url": "assets/js/19.b47efe9a.js",
    "revision": "9500472e7e94bfecd44327b0191e643c"
  },
  {
    "url": "assets/js/20.41c0e2c2.js",
    "revision": "4fface69f3f58d72727e6a44ce44112e"
  },
  {
    "url": "assets/js/21.378e238c.js",
    "revision": "a3f11dbdcc5d7ee1497189a09987a71f"
  },
  {
    "url": "assets/js/22.13a2040c.js",
    "revision": "edc3354d2cf459328ffcd4a0fdf650fc"
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
    "url": "assets/js/26.f142e906.js",
    "revision": "1d75e092fc1a38d5500f35d179ed67e5"
  },
  {
    "url": "assets/js/27.662b6fa4.js",
    "revision": "560c43d3f8150cf479f108269e7db78f"
  },
  {
    "url": "assets/js/28.d4ba82f5.js",
    "revision": "d398ac6b9408b0fa26c4830fba0864c2"
  },
  {
    "url": "assets/js/29.501b327c.js",
    "revision": "dd255b34a00944bcf36cb937bd69ea65"
  },
  {
    "url": "assets/js/30.fc5f2067.js",
    "revision": "e8600b07b94acbf8c029a55b18f4ae14"
  },
  {
    "url": "assets/js/31.997b17e2.js",
    "revision": "38091b0b22a986fcd599efe96ca0d279"
  },
  {
    "url": "assets/js/32.02434e7f.js",
    "revision": "21638fa2e43d83e35b2261d068b9109a"
  },
  {
    "url": "assets/js/33.93ee7ff2.js",
    "revision": "9b9ba081374c09484d3effca3bf16df6"
  },
  {
    "url": "assets/js/34.959b3e36.js",
    "revision": "69b0330b2f086dd1caff029edef7c5c3"
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
    "url": "assets/js/38.f8bb455f.js",
    "revision": "2102ee3d88e0f596daee39b20d869fd1"
  },
  {
    "url": "assets/js/39.f828563f.js",
    "revision": "345577e40b275bc7ad5338fe84e8e0db"
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
    "url": "assets/js/41.ac5ff79d.js",
    "revision": "211194262ebab22c8f1cdb239c322af7"
  },
  {
    "url": "assets/js/42.d0822c07.js",
    "revision": "108f6f9dae3e24b2710970b5355517ab"
  },
  {
    "url": "assets/js/43.f10f506f.js",
    "revision": "55e485e7c8f27be692b51a59b92f6b97"
  },
  {
    "url": "assets/js/44.231b86e3.js",
    "revision": "7b374c9429b4580af9e57bda9a80bc48"
  },
  {
    "url": "assets/js/45.6d904baa.js",
    "revision": "0fd73ba3f4371a3f3484eb71d3fb8c5e"
  },
  {
    "url": "assets/js/46.ea2dd968.js",
    "revision": "5f0f285938112ee3d45047dfc91aa586"
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
    "url": "assets/js/49.8f281fc2.js",
    "revision": "ec66da068d272b5655e83244381bfef3"
  },
  {
    "url": "assets/js/5.b06b0d86.js",
    "revision": "dca1e507aaf4a0a376ecf83d249293f3"
  },
  {
    "url": "assets/js/50.101f90df.js",
    "revision": "653144964488da81fad615e421a7b0ca"
  },
  {
    "url": "assets/js/51.df03d224.js",
    "revision": "ddece06d88be40e5b691ab73631ae580"
  },
  {
    "url": "assets/js/52.f3d4ec78.js",
    "revision": "303d1776a0586e00480c10fe3ad7d4e7"
  },
  {
    "url": "assets/js/53.75648dc4.js",
    "revision": "7c2b9cf92d938a48e2f58c5006c084c7"
  },
  {
    "url": "assets/js/54.d3a2315a.js",
    "revision": "f442b95a1468b9d8010624fc36ad206d"
  },
  {
    "url": "assets/js/55.399ca49b.js",
    "revision": "16a4c243d85ab6432b3b050e0c8e8f9d"
  },
  {
    "url": "assets/js/56.5ab2f884.js",
    "revision": "7b017f2bf1700b2d8c69d2c9ca74a13d"
  },
  {
    "url": "assets/js/57.5b8242f6.js",
    "revision": "f53933c95b1a55d80d1fb5a14d76e359"
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
    "url": "assets/js/60.6a5a7f80.js",
    "revision": "b03f192e021d83793cdd8d850fed6edf"
  },
  {
    "url": "assets/js/61.69cfc568.js",
    "revision": "798951aa0f02005eac42fe3254637980"
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
    "url": "assets/js/64.62b31a65.js",
    "revision": "4e313afe6d6ed9f012070d4e54d614b3"
  },
  {
    "url": "assets/js/65.2d3e8d19.js",
    "revision": "b84b75b4c3d272db04aaf62e65dd8b46"
  },
  {
    "url": "assets/js/66.a3a65563.js",
    "revision": "ab74ef8e3f5b0a47738fd8cdb47bcdeb"
  },
  {
    "url": "assets/js/67.b587ee26.js",
    "revision": "f5e171f435bd4e330a1d8155bd33820c"
  },
  {
    "url": "assets/js/68.17701077.js",
    "revision": "0a2a6a887f4bd19259e634eb687da02a"
  },
  {
    "url": "assets/js/69.0e33c896.js",
    "revision": "7fee4df7ac955a6ba97f2ba8d218dc1e"
  },
  {
    "url": "assets/js/7.37078044.js",
    "revision": "27a6092ae7f5585388bad9868d5f5d6c"
  },
  {
    "url": "assets/js/70.8e947810.js",
    "revision": "ea4f2db86bb8d37e834f8c50fd0a31ed"
  },
  {
    "url": "assets/js/71.3b7dbd25.js",
    "revision": "eb9451980194a2df84ac121f0709468f"
  },
  {
    "url": "assets/js/72.57009301.js",
    "revision": "5be1e714e17e2536f80bffbeef0826e7"
  },
  {
    "url": "assets/js/73.8fb5af1c.js",
    "revision": "81188f1488e217cc77fea0eec83f1432"
  },
  {
    "url": "assets/js/74.c639148d.js",
    "revision": "10d02bb06860afec72f5c566563a351b"
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
    "url": "assets/js/77.5b69de10.js",
    "revision": "bab4c7bb8e3eb3d51848dabf31fa3589"
  },
  {
    "url": "assets/js/78.713bde29.js",
    "revision": "098a35e9e6d24e77ca3fa655877c89bf"
  },
  {
    "url": "assets/js/79.cea110f7.js",
    "revision": "aa3acddef6f1575332bedde8c868f220"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.c1a04eda.js",
    "revision": "8d3f7245c89666d9e7aa9fa57964a184"
  },
  {
    "url": "assets/js/81.47d570c1.js",
    "revision": "84e4a07a16bd9867ebca533c1e8602e5"
  },
  {
    "url": "assets/js/82.0d262502.js",
    "revision": "0ee0060a5692a1334d2fd5fb91c99002"
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
    "url": "assets/js/88.e99f9703.js",
    "revision": "0cfcbdfb4e39197f52347d35036bcf32"
  },
  {
    "url": "assets/js/89.b6bce2d1.js",
    "revision": "91c216952243463b39431f44c37ddd55"
  },
  {
    "url": "assets/js/9.b7d893ca.js",
    "revision": "3adc74f0f24ccd4579788c20181bf62c"
  },
  {
    "url": "assets/js/90.873f395a.js",
    "revision": "59e8ca71e111521438662734e0b8c580"
  },
  {
    "url": "assets/js/91.5b8fa588.js",
    "revision": "4b4b457e76d9611a46a427e95025c27e"
  },
  {
    "url": "assets/js/92.5c020d75.js",
    "revision": "c3c30c0d76207f828414df3ede8c91f2"
  },
  {
    "url": "assets/js/93.69ca5c67.js",
    "revision": "59cd046d2e442fd4946c8073dc821e40"
  },
  {
    "url": "assets/js/94.f1e9ea8e.js",
    "revision": "c2b709e684f212b01bc1c9ddb48562c8"
  },
  {
    "url": "assets/js/95.fe6c4fb8.js",
    "revision": "afae516315ddd0810de57100541ca6c7"
  },
  {
    "url": "assets/js/96.f69bd55e.js",
    "revision": "c9e92adb3ac7292829e393962c8daeec"
  },
  {
    "url": "assets/js/97.bc488cde.js",
    "revision": "5d67a33240e6e78c3cb9ec614558a395"
  },
  {
    "url": "assets/js/98.1c9f9f98.js",
    "revision": "6f5e40cfb62cc7888d3ab5450e278aea"
  },
  {
    "url": "assets/js/99.5642e34b.js",
    "revision": "eeb81bec51d75f8d2f761b3eac94512b"
  },
  {
    "url": "assets/js/app.fd952fc5.js",
    "revision": "67b65cf1e1ab1356b2099d0c119f66d8"
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
    "revision": "165b587ce42a56cfc85cfc4a407c0dce"
  },
  {
    "url": "faq/index.html",
    "revision": "bdf5cdd4c47ba526401c2c4aed634e5b"
  },
  {
    "url": "guide/assets.html",
    "revision": "df31abc93f6301cf7fe0748d06897762"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "ab25f0c67d144aa0365428e2441fa007"
  },
  {
    "url": "guide/coffee.html",
    "revision": "a34daea37c1844846516bb6d7d3d2425"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "35c79d2ed39b2985c5686ffb0e094b6f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b35e7c85551c806cf95d13fd37ff9077"
  },
  {
    "url": "guide/help.html",
    "revision": "113ad4e85d3913b8f494f8ec0cf63485"
  },
  {
    "url": "guide/index.html",
    "revision": "b9c1f9437711c5630260dad0a919af6f"
  },
  {
    "url": "guide/lang.html",
    "revision": "ff787e93b23a9e8e1c2247f18bd803f9"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "e6dc05cad4b1c85eed08597a2837aa80"
  },
  {
    "url": "guide/security.html",
    "revision": "8b9d7852370a9327ab3f016f1eea05a7"
  },
  {
    "url": "guide/tags.html",
    "revision": "2fc4a75d5b0b4add46b7bb81f59b75b4"
  },
  {
    "url": "guide/update-log.html",
    "revision": "b3058f2719673ecaf682f09d32028a6b"
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
    "revision": "f62538bdf35b885c90979b61f4d9e996"
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
    "revision": "a260922a77bd571097b3c3003081caad"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "92ee9e8dcc2420267ace46d24d6a9360"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "be2a0a1a57c93a3eb653375066a8306d"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "8341596496fbfaac8fd18e08758bed5b"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "de38bf0b56d1dd483b3eacc909052dd0"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "5f7f54cb2865da60750aed3f9041f94a"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "f2b09adf44d3ed52af711817ca56de6a"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "3db25ea3581f710aa0e266863b66acce"
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
    "revision": "4bcd9e3eddb2aae22a16e07cb1d5c5ac"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "5578c70abbac6419560f0a723f88210b"
  },
  {
    "url": "tc/config/index.html",
    "revision": "0c28e787e263ab3b23aea78c17c2a4fd"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "0de0544c648b8c65704897be078d36d0"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "4f8aa45401c6e7169f1fc855f925645d"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "39252d7059c7bba6e68a1c8a85c72dcf"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "bfcc652eb2059d3bf032b404e5a0a865"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "7e88c25f69f72fa7316580fecd61fdf8"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "948d11a021084f209c9d0b11df62dc2b"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "51e87fab977e297adc28171b24484d42"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "4b25d2589aa58dda87a43cf53325888e"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "bbf2b455444550ff53487d847625eb47"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "b27dfa769594a6af4cda5d673ef57285"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "b47d19d11ca66370ba4b10d6f5804d29"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "a1a6fc2a55c8a12735ffcd7776596058"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "33a7ba42577f375f3c9d5e903d14f254"
  },
  {
    "url": "tc/index.html",
    "revision": "a90f144162ce8c8a9aa0ef390a5e0262"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "79815b5e7e88ed5691f83ef431bb5e24"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "829bbaa5f4ce0574448e8b25a75dd37e"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "153d851a115071ac8625f5c6ea78f9c2"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "66df6aa90651186308b12b9851030ff3"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "558a04b9554c8acb03e8ae863c40cc33"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "154fcfb0b28d53a6ef48293414beedd9"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "7967f54707e271756c10ed865f2fc79a"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "1fcbfd86c1dccda488bfe7351d79e3c1"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "7def05ed7ec2d5d2358562791a7d5318"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "212e2bd9536dde60e6f28c82e3afe3c8"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "ba1d1bb6e7bfc913cc77ea8eac42d9ce"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "72a1348602b074a766dfd469c4410a82"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "bf957dcc57aafeb962dc8d3a5f8071be"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "3c07938b1afd37630fe35984acb8358b"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "d06e38327d8141d51efdd0960011e252"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "a5693248a6265523e9bb2256ce364d92"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "af444f973889fbb83bcf6c5b646b2935"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "7fe04d2c0846acfca15bc8d88336f129"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "944d21eba054508f25357ac57ed8a72f"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "bf98030f9f4c726b8c252e83eac56633"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "dc0c3b4119f1fee50e0d8421770e03cc"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "5def99c8bafe6176ac1c4f0e7487ddeb"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "458e8bd7beb85406d7b6d413c9a068d2"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "d4159c5d9f860ac3aa9d16996dde9ccc"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "77b627a808541070ebf0d3543469e78a"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "dbe402a53496dedcf6d2aa602e96af00"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "7397fe87b2d304cc6a70e929150c90da"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "2436b80d64e42bc727c7f2ce1a2a6e8e"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "6b59def0c89a3d7c8d512d1acf2e06fe"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "e7ea79b20f383428377acb76babfdf6c"
  },
  {
    "url": "theme/index.html",
    "revision": "b18825b03bf92d83f64c05693d42f727"
  },
  {
    "url": "theme/senior.html",
    "revision": "a176e0f27aa63f545b535910d827ec2c"
  },
  {
    "url": "theme/structure.html",
    "revision": "fc609234c0d9c8a6652fb1780644bb07"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "e2b2fc2ab9c24021f1b8c436850e1362"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "0aca4cac93649fbac6a93419f142ecc2"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "0e34b738d6f11f0e57130e3b39cbb95b"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "95455bc5f229d5501bc0bf6d11d8b514"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "0104ed7700bfd852a0cf924dde3a2c07"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "6bbf6345fbdd3b5055be91e15724a88c"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "80d86d363003cc7c52ce902a35d7642e"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "8173927b8818a8284fa34d80069457d3"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "c0a376ed2e12e38cae4d7e291259e514"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "bb0578ffd61411588c7c3b05634eb51b"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "a929505c0ebd8cbacafff888c3b0268e"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "99428a163420138bafc0b1271efbc3e6"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "180c015cd25dc1dc968e623750d97df0"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "6c245264279b363b02f77ae00f7c5ce5"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "ef03d2623ac94d3e0fd65a8b7e7a8207"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "94ed9a5848edc4e85a7a0ede59f5f713"
  },
  {
    "url": "webmaster/server.html",
    "revision": "71f32b8d9e2020bbb4a0118bdc287b3b"
  },
  {
    "url": "webmaster/template.html",
    "revision": "f48e5a8ec8e71f7f60243a2731c9d5e8"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "528786fb75b45d4036bc86e29e22acf9"
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
