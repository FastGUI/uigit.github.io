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
    "revision": "405036839126688cbbca1b001c3ffe95"
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
    "revision": "d19a197356db1dca52400f2f26610843"
  },
  {
    "url": "api/web-design.html",
    "revision": "2d5343f7966022f1ddc530f27ae66d44"
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
    "url": "assets/js/101.09f9b409.js",
    "revision": "b1a2def3b25f5e3f1372335b3278cde8"
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
    "url": "assets/js/104.c693758b.js",
    "revision": "3e786082e54c84c61c8852566a9eb809"
  },
  {
    "url": "assets/js/105.a5134215.js",
    "revision": "83d6ecb4f7af94ca9204962b29a8c392"
  },
  {
    "url": "assets/js/106.8a6b7f31.js",
    "revision": "a82c95125af3667bd28d665c0524ed2c"
  },
  {
    "url": "assets/js/107.752592dd.js",
    "revision": "e001e1e6ff08cc50ed265c603ec67dda"
  },
  {
    "url": "assets/js/108.64ed68b5.js",
    "revision": "84ffcd8603a8e725129ebd7cb198aec8"
  },
  {
    "url": "assets/js/109.377c92ce.js",
    "revision": "5bc9bbf2f24a2a5fbe90cd97bc4c5ea0"
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
    "url": "assets/js/17.7163bf50.js",
    "revision": "58835270b75d5c0e56e3c70fc881da0b"
  },
  {
    "url": "assets/js/18.c225430b.js",
    "revision": "461cb39ac5a3b2494511ea394dd4e165"
  },
  {
    "url": "assets/js/19.d510e9e0.js",
    "revision": "e4630132e617ed75d3306095634cff2e"
  },
  {
    "url": "assets/js/20.8fe60563.js",
    "revision": "9483e8cdcc22632744a298665e95235a"
  },
  {
    "url": "assets/js/21.a27fd3c5.js",
    "revision": "0dc07a09049dcaa8f9e68a6833c902b6"
  },
  {
    "url": "assets/js/22.a267290e.js",
    "revision": "83bc6c2724c9cf168a7c827fa3b5ce82"
  },
  {
    "url": "assets/js/23.3844690f.js",
    "revision": "89fef18d570ba42456cb6e88a2940ac5"
  },
  {
    "url": "assets/js/24.f6fcccc8.js",
    "revision": "764156ee709b0682409f01fb658d952b"
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
    "url": "assets/js/27.4bc6fa79.js",
    "revision": "52424e70658340052692664ab12ebbc1"
  },
  {
    "url": "assets/js/28.d4ba82f5.js",
    "revision": "d398ac6b9408b0fa26c4830fba0864c2"
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
    "url": "assets/js/31.3b6c3f17.js",
    "revision": "7b34165ff73d0de4985d2cb3991a011a"
  },
  {
    "url": "assets/js/32.e271549d.js",
    "revision": "5f77efa84cad2cee19a7030f7daca2e6"
  },
  {
    "url": "assets/js/33.e79d3f34.js",
    "revision": "fe34db8c54bcbbb61e218453b07d6a6c"
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
    "url": "assets/js/36.a93c78dc.js",
    "revision": "4f11c801184daff85b0ac21ea8205082"
  },
  {
    "url": "assets/js/37.58ecc806.js",
    "revision": "ddc7b98a2ae32b386e96c1f7ad73a5fa"
  },
  {
    "url": "assets/js/38.ed62be1f.js",
    "revision": "bec1bb9b325f1291afc07bb6d8a44024"
  },
  {
    "url": "assets/js/39.0d4b7901.js",
    "revision": "803f3411be2437c387397213ccf5c9de"
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
    "url": "assets/js/41.cb7c75d1.js",
    "revision": "1b6cbbf42f953cbff68969176c6cb9b0"
  },
  {
    "url": "assets/js/42.6cfac026.js",
    "revision": "f9b0e92580607074eaadaa5226600016"
  },
  {
    "url": "assets/js/43.551c0164.js",
    "revision": "c42b50237ce49a008e604d32cf0d8094"
  },
  {
    "url": "assets/js/44.5434146b.js",
    "revision": "6b211bffbe9af72c016cd8f4be6513fa"
  },
  {
    "url": "assets/js/45.13ca75b7.js",
    "revision": "7c884d1459cac557e21c262bed314488"
  },
  {
    "url": "assets/js/46.5bcf5c9b.js",
    "revision": "b4aedb558cbfa6e5d9838ad36cefcb41"
  },
  {
    "url": "assets/js/47.c7bec51a.js",
    "revision": "94d36f965ce2afaa5e1e10df618ede54"
  },
  {
    "url": "assets/js/48.c14beab1.js",
    "revision": "85174ee7ffb0072214e87cb6924f7468"
  },
  {
    "url": "assets/js/49.7db53e54.js",
    "revision": "cfb29a6655fe5c21518c6ccadd25bc38"
  },
  {
    "url": "assets/js/5.c9ff4b73.js",
    "revision": "ef8b620d4f819b1d06bcae693cf80211"
  },
  {
    "url": "assets/js/50.73e5557e.js",
    "revision": "f0ce66645c66d2ac7c04fae320796557"
  },
  {
    "url": "assets/js/51.584f0bce.js",
    "revision": "35f5a0b1697a9a52242e6c4dc3b44e62"
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
    "url": "assets/js/54.e7edcd8d.js",
    "revision": "340e1e8f43e30c4494c6edcde4c0516a"
  },
  {
    "url": "assets/js/55.478f13ac.js",
    "revision": "6914c5e7c4c692556dec9f8ecc18d2a7"
  },
  {
    "url": "assets/js/56.aa3c69fe.js",
    "revision": "3a2141268c6f1a5253e2e854522d9831"
  },
  {
    "url": "assets/js/57.d6295fa4.js",
    "revision": "26579cfc03b81a4b20731a29b25cd880"
  },
  {
    "url": "assets/js/58.0b878199.js",
    "revision": "f746dfaaa83786316f36dc7f8b7b74f4"
  },
  {
    "url": "assets/js/59.e6687db0.js",
    "revision": "3b9a281d7db547a7366f0ee7fbfb5fb6"
  },
  {
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.b17f7a69.js",
    "revision": "60b4e662119a43c8cf1145a2bf79ce45"
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
    "url": "assets/js/63.f7b5ebaf.js",
    "revision": "5c397b43cb8fded744f9a0e76ddcf30c"
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
    "url": "assets/js/66.a3a65563.js",
    "revision": "ab74ef8e3f5b0a47738fd8cdb47bcdeb"
  },
  {
    "url": "assets/js/67.9a903825.js",
    "revision": "009cc5eb7bb9670b2eed0a0287ba35ed"
  },
  {
    "url": "assets/js/68.db6f0067.js",
    "revision": "721fe61317f16cfb9347a437eda68c03"
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
    "url": "assets/js/70.649800ae.js",
    "revision": "b6260e379ead066f5301b408e2b78c9a"
  },
  {
    "url": "assets/js/71.a8d72e7b.js",
    "revision": "940f934d72bbac2542091ec9ea28593e"
  },
  {
    "url": "assets/js/72.0bde1e00.js",
    "revision": "4c90de9e981606d231a26d44526409af"
  },
  {
    "url": "assets/js/73.a5b90509.js",
    "revision": "b5be98e7ee7764c2788b8f299fc8853a"
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
    "url": "assets/js/76.7165b7f8.js",
    "revision": "6e26c37dbaf28a4485eea1e752f608b3"
  },
  {
    "url": "assets/js/77.fac449fb.js",
    "revision": "35a9c381c0cc27ea763bc91b562b8626"
  },
  {
    "url": "assets/js/78.81f68c3d.js",
    "revision": "c05862365280b17d305c73cffd28d3b8"
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
    "url": "assets/js/80.3cbcf757.js",
    "revision": "ec76f056b0c619b5262bdfde4ad2a59f"
  },
  {
    "url": "assets/js/81.38985e17.js",
    "revision": "ee4b28b505aef1aca33a2cbd30dd2a20"
  },
  {
    "url": "assets/js/82.bf3e40de.js",
    "revision": "0db2772018eb78cfdbe69b338fe38d1d"
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
    "url": "assets/js/85.c4b55cb0.js",
    "revision": "93886467d37941ceb3cd73240e892d09"
  },
  {
    "url": "assets/js/86.84cc2437.js",
    "revision": "bb418d8b0d98fe7a1729cece2e682078"
  },
  {
    "url": "assets/js/87.9f27572b.js",
    "revision": "1678b84b9774df63b7facbf37627658a"
  },
  {
    "url": "assets/js/88.198b335e.js",
    "revision": "f98bf8127f1365cce3e8b919604098cd"
  },
  {
    "url": "assets/js/89.f6528b53.js",
    "revision": "74ca70ddaaaa51d998415d8b7a60d17f"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.ccd4827b.js",
    "revision": "b58564040e2a496e38635f4543f3b4a8"
  },
  {
    "url": "assets/js/91.5b8fa588.js",
    "revision": "4b4b457e76d9611a46a427e95025c27e"
  },
  {
    "url": "assets/js/92.7a9c3e9b.js",
    "revision": "429c9efa6a38a14ffcdab651a6ef5ad5"
  },
  {
    "url": "assets/js/93.50e5b579.js",
    "revision": "b34369d231601192d1372488c0c133df"
  },
  {
    "url": "assets/js/94.f1e9ea8e.js",
    "revision": "c2b709e684f212b01bc1c9ddb48562c8"
  },
  {
    "url": "assets/js/95.f73c0f76.js",
    "revision": "1164cc08e4c360c0465186c8f7c7e99a"
  },
  {
    "url": "assets/js/96.f69bd55e.js",
    "revision": "c9e92adb3ac7292829e393962c8daeec"
  },
  {
    "url": "assets/js/97.6ce6d7c0.js",
    "revision": "9bdc85f0e8ea8fcf93ec3a3670425f9d"
  },
  {
    "url": "assets/js/98.efc764de.js",
    "revision": "b0c9ca1f75c627ff97c3a07395c56294"
  },
  {
    "url": "assets/js/99.5642e34b.js",
    "revision": "eeb81bec51d75f8d2f761b3eac94512b"
  },
  {
    "url": "assets/js/app.2aa20551.js",
    "revision": "75c1557780cd6291397e05de516b170f"
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
    "revision": "44fffdc4320d7faf0cb0f69204bb34a6"
  },
  {
    "url": "faq/index.html",
    "revision": "c4131f0c50326345eba9c3c591512b3b"
  },
  {
    "url": "guide/assets.html",
    "revision": "77f688a41763ffa4e49e8aeab29e03e4"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "18d81a0f84a9b0ad074f0b6dcb2a5a60"
  },
  {
    "url": "guide/coffee.html",
    "revision": "d586ca2d68b3ba7e63ee4edaed192b22"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "3d0bd667512714cf7520d387d6212c1e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5289ede793240d6675805bc895d250ce"
  },
  {
    "url": "guide/help.html",
    "revision": "15df5bf7a4c8f6d237a7b1271dc21b32"
  },
  {
    "url": "guide/index.html",
    "revision": "4feea058f868088c8bbd0fa386356c54"
  },
  {
    "url": "guide/lang.html",
    "revision": "f4d160ac8eaed9a367e23d5058b090cd"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "a0a07c952aab0d199818f76c07b160cf"
  },
  {
    "url": "guide/security.html",
    "revision": "e6195371a8b5ff12b9b1da000c790518"
  },
  {
    "url": "guide/tags.html",
    "revision": "f1fec2e4e85501a806e942b499f4a478"
  },
  {
    "url": "guide/update-log.html",
    "revision": "6e3b6c32aa6b16ecde4ca8a6443d22ce"
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
    "revision": "ac3b282c67ea6d963352dc2f835535d5"
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
    "revision": "ae244d4e6d3c2fbf5a3ecd1823f5b150"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "14185590ed71d95151f40ca8669f1b9c"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "e57d6351f3fd613f3543229c6913cc1d"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "1f2e5173ad0e5f329ec8b53c0a6b6396"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "2091bde098ec825742ecf83bc12ff7f8"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "6a727bf5371948a24d5e502cd22ca612"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "ff5369281045141148847ef93bca70fe"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "699c4c10112035dbc0e2fdfb1455e2eb"
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
    "revision": "701cb79ef1765b552ae1e8cb297b8935"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "abc7d8e1c963954191f87534752c275a"
  },
  {
    "url": "tc/config/index.html",
    "revision": "d6ff08accb865e8ac41e2d2981a53201"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "08344cc66ae549a756f8416d6bb8c6a3"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "6e9b36bf70a13f8265bdef5026ee7727"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "fc1792c55fa9d60e42516b90d5cfebab"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "27117d95a1721c3eeda5e80d408fad5b"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "9337dbba9a36ce3c5db580b13ecb69e3"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "f888a7157fba02cd92f2b9b8779cf3b4"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "40c86bcff3ba89cc8c0a72eba8f05989"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "6e55315eff41f489730c6a7fc46bf27a"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "bb9f4032a0d7b56cca4ee590900e8c60"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "a0720006cc7fa234b344452ac00806ff"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "ca39b5e99d8421aea7ad0f42805ace43"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "7fe3d3a5d2f855e0497e51b731f08d57"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "608bfe047dc66da4486ca74c63f4b893"
  },
  {
    "url": "tc/index.html",
    "revision": "210296a31ebc8778012e0febdae82186"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "ede73d6a9038f2217e222c650f39226c"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "cb4795191cd93b3663aeff2cc4497ecd"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "6606a521222bfb6e453219f6ea5d7306"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "89bea1efc4ab969253d3deca966d1360"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "2e9e928d9a23f987e52ad9f1e3f457a0"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "0c6e65bf4346eac134d573096c816591"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "36adc18ad68ed2f9c658bf058a8e5086"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "3ca8d52b17b95ff754fe63b0a796bfbe"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "e6c53612b737cc5f5a2adced778450a5"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "5eabcb330e517c1ff04e5347e668dcc8"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "98f1f6e42f53a28183582d1d87a14d52"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "3b6dcde472ba4c2a905044b1c3c35312"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "cff5229c4d95821d9f0fede88dda5340"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "2c495a285559b271c8c848aebec3ec14"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "cb4c63f77d68f6383c651280240e2ff8"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "5b13ea8405afda180415b7eda251ac98"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "9b681bfcc644b307c7424b2894731ced"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "69c56c8ed8bb5290b60839f285e04973"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "2daaa6f39ff5c559d0984aa97e7b7ffe"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "a45f3287806de820b743f6930724fce7"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "1bc28605d2501c972b6ef94d50337269"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "e840ddc6497d06d8b0666bec056f63b3"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "390dd3bca29dea9d7e2b46f7efd500be"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "492b9f5563cb5b5a5edab4849ced7c9b"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "b918d7597df83d7990fe4b6c291b9def"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "037280c89ef62cef0e348888f91c3d46"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "434ae0fc5b63849eb17308efcf6eabc9"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "a0cf2e5fce5e0347ee626ad3ed8e686f"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "088636a992f531e13b065fc0fd9ea597"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "7cc462ccb87ed7eb43d6abaccf3757ad"
  },
  {
    "url": "theme/index.html",
    "revision": "7e27c3d63b3c83950548ede9acf5c158"
  },
  {
    "url": "theme/senior.html",
    "revision": "55d2311853cf940ae4cc96d9ead5a34d"
  },
  {
    "url": "theme/structure.html",
    "revision": "4ecae4bb49b0b8cc544f75b564cafc7c"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "25c6cddc4ed6b871580aec60ada267cb"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "a63a1c8833085db6bfd9304098c84f26"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "25346bafc674049d841776c55b106eee"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "4c24cfe866f24a7d527d6361bc213e8f"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "df8528f9899ded373411e0e12c5f4e8c"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "5762ad36f36df7853082d18da1fd96b1"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "a81411cf710f0c54b1996a71d2a182f1"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "0e877d50b0e704532ce68879c3b66726"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "e1a71127214eea8bc2155b5326ac18c2"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "08bea15d71b59aea5205cdd860be089e"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "752f846397b088cb8a772f6e8f26dcfc"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "a169a6d5040491042252e76d1eb401ad"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a4e664fb9057b8bdbed83236614fb363"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "5e8fa33dd6930bd0cb68a80cf4b556cc"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "8dc7130e8f18d9f59540b9ea12764899"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "844af4483864c169b7e89f9d2e2b92ad"
  },
  {
    "url": "webmaster/server.html",
    "revision": "c76fab79f96452abd6ff56bad8a306b6"
  },
  {
    "url": "webmaster/template.html",
    "revision": "b424faa3f6c62952702346143b8fae59"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "527c5306d7f3a219409c1d67d01153ce"
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
