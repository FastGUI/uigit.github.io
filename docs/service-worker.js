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
    "revision": "9bc57fc7fbe15639ed8c12f586c23318"
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
    "revision": "aaecff3eaaea5f041b980c530233766d"
  },
  {
    "url": "api/web-design.html",
    "revision": "6e00c39610b3669b10aab7c20304ae03"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.4140dd7b.css",
    "revision": "447d459a9f7f889f42b08d6548798c92"
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
    "url": "assets/js/100.8815c87f.js",
    "revision": "e7abef7f589bcb458492e051bd81e247"
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
    "url": "assets/js/103.15e6dd3c.js",
    "revision": "8bc6a6530e7081a570e2f86e390574b7"
  },
  {
    "url": "assets/js/104.5ba672d9.js",
    "revision": "bf641765b5c2723d4a96fd79e6adc453"
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
    "url": "assets/js/109.6f2fc2ef.js",
    "revision": "3f073fd74b9e492ae651925d7e5a9913"
  },
  {
    "url": "assets/js/11.6fca27a1.js",
    "revision": "4c0f82bbca3a55076b7d7557e18db0e7"
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
    "url": "assets/js/18.dfb3af7b.js",
    "revision": "3e1053bf52309becc39706bf51c64137"
  },
  {
    "url": "assets/js/19.3a68fe75.js",
    "revision": "302a19d1e24170e8030aebd2159f4dd9"
  },
  {
    "url": "assets/js/20.14b99ba1.js",
    "revision": "c2dfae95d72067182ab032d5f2628026"
  },
  {
    "url": "assets/js/21.1984957c.js",
    "revision": "9d66b1b01ff34eead28e5e9e71500366"
  },
  {
    "url": "assets/js/22.36510670.js",
    "revision": "7ce6aaf6a416f34cd51eba8f53994e1f"
  },
  {
    "url": "assets/js/23.264fc9c0.js",
    "revision": "7da717e13b0bbefdd335fb7c110919e4"
  },
  {
    "url": "assets/js/24.ad2528ae.js",
    "revision": "d0e2606b0c49ddc91995bd36874cc752"
  },
  {
    "url": "assets/js/25.9236c53c.js",
    "revision": "8f3636ae91ee5b9df57445534c8a32cf"
  },
  {
    "url": "assets/js/26.f142e906.js",
    "revision": "1d75e092fc1a38d5500f35d179ed67e5"
  },
  {
    "url": "assets/js/27.fcf4c84d.js",
    "revision": "002353fd7d1ae2bad9f70d9438f907fa"
  },
  {
    "url": "assets/js/28.d4ba82f5.js",
    "revision": "d398ac6b9408b0fa26c4830fba0864c2"
  },
  {
    "url": "assets/js/29.ad9ff74b.js",
    "revision": "514279bc749a214d91d7eef9f9ad0386"
  },
  {
    "url": "assets/js/30.1e2d98ca.js",
    "revision": "1d4cf5fa5188070f641e09e475776331"
  },
  {
    "url": "assets/js/31.a3bf1182.js",
    "revision": "a2f72425f1302305d973d3f90e870966"
  },
  {
    "url": "assets/js/32.7b66e649.js",
    "revision": "cc9bbff834cd87e27d80e341139c2e9b"
  },
  {
    "url": "assets/js/33.e1fba318.js",
    "revision": "8543b2af2961e4307dadbbf1d92925d5"
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
    "url": "assets/js/36.c67aae4c.js",
    "revision": "b89f29265ebe3b6a9f4b2754bd33e17b"
  },
  {
    "url": "assets/js/37.b06986c8.js",
    "revision": "f2ee8e93ae20cc2982f91867d9d27ef9"
  },
  {
    "url": "assets/js/38.8d071412.js",
    "revision": "6e37660901321ef752597c6cd856d9a5"
  },
  {
    "url": "assets/js/39.783047f5.js",
    "revision": "761aaf7a812cf4b4b107743b92f30d4f"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.6de9f380.js",
    "revision": "83cf681ad3f76377293a7df89e8ee3b0"
  },
  {
    "url": "assets/js/41.10192d0b.js",
    "revision": "4b9670f8db7fe56d9a1deeff8a7fc9a4"
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
    "url": "assets/js/44.77fc2b43.js",
    "revision": "cf1b26928134c4ebdcc5fe51a63533ff"
  },
  {
    "url": "assets/js/45.fbcd18fc.js",
    "revision": "d0f35813a962c890f19c5963879aa91a"
  },
  {
    "url": "assets/js/46.101ff885.js",
    "revision": "fe9d67ed770a2fb88b37c8c1c5359e12"
  },
  {
    "url": "assets/js/47.dac7f3cc.js",
    "revision": "341671dd5abb2b2b659498da0c40c0d5"
  },
  {
    "url": "assets/js/48.c45e6fe7.js",
    "revision": "be53675bb7ac6288233a5681df847241"
  },
  {
    "url": "assets/js/49.22de7e1f.js",
    "revision": "447f1b583eaea190f8cb3eafa0de2981"
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
    "url": "assets/js/51.584f0bce.js",
    "revision": "35f5a0b1697a9a52242e6c4dc3b44e62"
  },
  {
    "url": "assets/js/52.c008c3b4.js",
    "revision": "daeda307cea5aa688583d335db152752"
  },
  {
    "url": "assets/js/53.dcc6837a.js",
    "revision": "01c731b75f35ba30b74b405a8c300480"
  },
  {
    "url": "assets/js/54.e7edcd8d.js",
    "revision": "340e1e8f43e30c4494c6edcde4c0516a"
  },
  {
    "url": "assets/js/55.eb4fcd5a.js",
    "revision": "0f5200121c3953bd93a4f18fb9f0b0c1"
  },
  {
    "url": "assets/js/56.b1364249.js",
    "revision": "f327677e163316a79312a66c550f26d9"
  },
  {
    "url": "assets/js/57.d6295fa4.js",
    "revision": "26579cfc03b81a4b20731a29b25cd880"
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
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.c5b9d71d.js",
    "revision": "6e1b8efb301c96d454aa40dc8b4d4f98"
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
    "url": "assets/js/63.2143c22f.js",
    "revision": "9f5d6816d736df2f0db0a07253ad3dcf"
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
    "url": "assets/js/66.4a266ba6.js",
    "revision": "842f7740bf3c225145b043d358bba883"
  },
  {
    "url": "assets/js/67.9a903825.js",
    "revision": "009cc5eb7bb9670b2eed0a0287ba35ed"
  },
  {
    "url": "assets/js/68.be182329.js",
    "revision": "513c7d81e5c789e8378c3ddfe6aded2d"
  },
  {
    "url": "assets/js/69.7a795e33.js",
    "revision": "105147938dd3a4016797100d474526b4"
  },
  {
    "url": "assets/js/7.567e98f4.js",
    "revision": "fa23c03c38d2e83b37f794552982c93f"
  },
  {
    "url": "assets/js/70.64521d80.js",
    "revision": "a13958a594941685bf3f7e17c4d6ca10"
  },
  {
    "url": "assets/js/71.fc0a2665.js",
    "revision": "9fa745c4b94bde5e5893a6880713bb0a"
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
    "url": "assets/js/75.3bed7731.js",
    "revision": "6e2b705b5d843ace73c71aab4277d5e0"
  },
  {
    "url": "assets/js/76.06f358cd.js",
    "revision": "7027a9860d170679d6139f20d020ec1f"
  },
  {
    "url": "assets/js/77.13196a4d.js",
    "revision": "3c0b71ea34ae56a2f0d0bf65d1e9b902"
  },
  {
    "url": "assets/js/78.e95e0405.js",
    "revision": "ae5ffddd334bd194118d7546742ca562"
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
    "url": "assets/js/80.7a429038.js",
    "revision": "9bc9a02cb5b73805367af2205f59e981"
  },
  {
    "url": "assets/js/81.fba750da.js",
    "revision": "7f7e111000d4606f8ba9ffabbcb99fcc"
  },
  {
    "url": "assets/js/82.8b5acbee.js",
    "revision": "7ba5f29d6bd14f392c3ed7e4b7d45ade"
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
    "url": "assets/js/86.f0a0114a.js",
    "revision": "8a362d39227272d7bd0526240295d859"
  },
  {
    "url": "assets/js/87.c70b206e.js",
    "revision": "fe019656e252d11ad7f4e02fc004f089"
  },
  {
    "url": "assets/js/88.769006f5.js",
    "revision": "ec4f16eb7e62a6dcb28fd5f5746d3767"
  },
  {
    "url": "assets/js/89.1d296404.js",
    "revision": "beaf5ef1bcbeb14b5a706afbb6fa12ec"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.9210163c.js",
    "revision": "c0f336baa138d8eab55dddf30cf6db13"
  },
  {
    "url": "assets/js/91.e9e8a3f7.js",
    "revision": "17a1c5184750d5cd2e58a5691943e31f"
  },
  {
    "url": "assets/js/92.15097574.js",
    "revision": "eddfcf697fe75c2e6d8c8245ecaad20d"
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
    "url": "assets/js/97.71f326d0.js",
    "revision": "36822fefc36a06062465e1e9d5e38ef9"
  },
  {
    "url": "assets/js/98.a1b3b1ff.js",
    "revision": "17201d114539bbdc04f8cd5938b4a942"
  },
  {
    "url": "assets/js/99.37effb3b.js",
    "revision": "d423c1f495a20e32e4acdb5799a60989"
  },
  {
    "url": "assets/js/app.5b1b81c6.js",
    "revision": "93413d9176e40b5b06112dd81aedae0e"
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
    "revision": "ef73083a2d6076ab5be21bebf6982c6d"
  },
  {
    "url": "faq/index.html",
    "revision": "103ebfb790b4e3f1002e31d490e4f028"
  },
  {
    "url": "guide/assets.html",
    "revision": "7256c80a418d068e5ff583b9a1472b01"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "dd1e661e38ca0629d37031960964d2eb"
  },
  {
    "url": "guide/coffee.html",
    "revision": "2c59d566374d167e510ab6ab328e3ad4"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "fa327b1b2af5cddcd60822f972efe30b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "178f7efa9433fe4a26821460592d50d0"
  },
  {
    "url": "guide/help.html",
    "revision": "36b3f0d99a2e4b49a11e007fa2c6b5bc"
  },
  {
    "url": "guide/index.html",
    "revision": "3f94edfdc97165c7c68ef5fe85a99e42"
  },
  {
    "url": "guide/lang.html",
    "revision": "347ac15420215fd88cb44d09575b99bf"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "a5ec6704dcf4cc6476ee46d99c31733a"
  },
  {
    "url": "guide/security.html",
    "revision": "dcc16b55fd8fa430c2ecd2bab03b4aef"
  },
  {
    "url": "guide/tags.html",
    "revision": "084525b2adeeae43f7141ea07d50a326"
  },
  {
    "url": "guide/update-log.html",
    "revision": "03c4b54dc835080c9a01980b5d366b73"
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
    "revision": "1d3d85ad329d8f634dfd4b19d5a42fd0"
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
    "revision": "3efe8ec2fa145b2a2e5fa4582a71c8f7"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "7ed7aadd6adc6c72d38ea1f3932550d5"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "2edbd98444f2e5b519b4d0dcbcf3c9f8"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "729b0d8fc1db9503d89960b1e9a1a3da"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "5ecce3b71570b622078cb4efa609f7a3"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "4f9d9db50aab9204d960d12cafb86f6f"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "a6645c1fde33b7a8d58ef239ad6c4408"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "164744ed507e8c602ea266846dab0852"
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
    "revision": "1803c8c79a4ac6a9c9f3290a9cbaf0fa"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "a86a46be3feb08ffa880e26157e33878"
  },
  {
    "url": "tc/config/index.html",
    "revision": "28c805a0488e73471bc43b865324c226"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "c3f133795a36abe6c4b89b5d0d38df4d"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "d8d965b3548a3b402f98ada1d66877c6"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "fcb293153a8c986c733b01df29fb956d"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "f2f49098357e51b2a42cf5d8a3fde78c"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "345e1c32ae1ed476e4dc58b9e78ce1f1"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "0541b11cc33b6dd46cd523143a8ea9ca"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "b8e07f67f896a041b327cd486da6bc67"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "9dcbda7c1922296c68c8f82e5e8f723a"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "78527706f0a787299149b9e4048de17c"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "fccd8b7d2894e1a0d914cab03d9b79a2"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "f4a6838a2aebd0fe304470805c4c4f2b"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "398c7b244630ddbcfc5bd38c0bd54e59"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "d19eb341966badb083d0697f8a74d713"
  },
  {
    "url": "tc/index.html",
    "revision": "c1631593160ea27286611ce574284f0f"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "2fc8d234ce238ed9e65a7213c7c98f90"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "078dcdda812672a20255e44e314932e0"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "851fac88e9ac350208ec00df58ca3f6a"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "93367e06d7c5b217867210e0da0de497"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "9c921de554000dba95e698e4c49072e2"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "393a68e6950f4444e05f534232e2ff8b"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "3b5ae2e0f7b182841cdc4611bf42dfbc"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "04bfda4e0b3889aedd68677f6e3e5c33"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "0da1381cf2891c59cb3b4ec344afd427"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "befc621ac45e279161bd1cd7e77eb29b"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "780ea13a7e3dae9e6290b17496caadd4"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "6c07dd39dea517da503c03ccea7c13e3"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "d1cc84c894fc57f45eeb8797a1619c16"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "7fa3139c046be66b2405927d22cb930a"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "dc218135fcd4c7237d9522fa9b20ee2d"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "923923d790a998fa107018d93fd213cc"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "dd373e2527a97bc95ecb9b4791914e00"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "a3a602e359c7e10a6800a8cab83f5c2f"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "866e1121d9f691bef9e2372e3e09158a"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "ec9e85d45fc971700b99a270c06b702a"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "5eeebf459d9c22000a6c323104a92488"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "aa26dd0227c15a9ae283d061977239ec"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "41d09e29d2e433767d592f0480ddf704"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "7dee4b7ab15354a6a9bab3a4df9fa2a2"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "70d36022f3c4fa8c38eb4af2c09f204f"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "61c13d1a22cb470dca4bf8d0c03d96e8"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "fdd638f3cb1b33a784dc8b29841cd375"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "a13d943be52150ee411029625d8cf70b"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "ac2fc1a6cc066c07049b1d7cdfa6ece5"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "625c047e9c1873fdfb2e7c75dc6346a5"
  },
  {
    "url": "theme/index.html",
    "revision": "1b697bb7bfeb26426728d89cb2fb8fe9"
  },
  {
    "url": "theme/senior.html",
    "revision": "25503bfbfbf13046f92603454529061c"
  },
  {
    "url": "theme/structure.html",
    "revision": "3f93ed4626d1b622e09214c4aec46b52"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "150b0e1a55f96359d4902398d0e8e569"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "3c17a50a6e93a9278366807c7a343883"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "fbbb71c06e4028276a8aef7b94552f55"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "9a29647c78851de11b33640c8d479293"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "351378efcaec65caf7358f1aad41dc95"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "195032997a675cfa10080ba8f61bdfdf"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "f8f3cbebe0defb7148403d97d492a887"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "ab1f7acde25adfd66a20ec9e7d4cbd70"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "ff2d3bc9506ecdb585fd4060a858f0c4"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "db656495587920f7cdac3384648e508e"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "6bc6d9c7211e9f15a2c59cead5cafbb3"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "d4117121c116550aacc7a2db0ca71a2c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "273e71de6d99876acb45a59cd13e5c3d"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "28afe0fea0b262ca687b19b96314cb0e"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "eda59625442a436782fead87ce4f9b99"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "fbce8bb14bf41a90c8c6bbf41bbfc4cf"
  },
  {
    "url": "webmaster/server.html",
    "revision": "f73af58fe4db103b782e44ea6f497c95"
  },
  {
    "url": "webmaster/template.html",
    "revision": "e483812dc6dc8586d667a554013dd529"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "7ca5f9b16e6748f976236066540dd4e0"
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
