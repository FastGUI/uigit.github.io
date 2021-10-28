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
    "revision": "1ef64cda72f24f495b2c3ce094745eb2"
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
    "revision": "747801b980c38af2cb1ed0b9f7535ae5"
  },
  {
    "url": "api/web-design.html",
    "revision": "89062f4d417cce91df67ced3a89c012f"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.82cb7b42.css",
    "revision": "fb0d8526653bf016f49ab255d4fe24d0"
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
    "url": "assets/js/101.248c045f.js",
    "revision": "bb6fe51000f3a86fd76d70540c8b162f"
  },
  {
    "url": "assets/js/102.40bc615b.js",
    "revision": "ee671dc5b70be6f193a3861f9a4959f1"
  },
  {
    "url": "assets/js/103.eb331acc.js",
    "revision": "41e29bb71496bf2f9057536b839c3fce"
  },
  {
    "url": "assets/js/104.1841358d.js",
    "revision": "70842286c481709ea131de4a1fdeae3a"
  },
  {
    "url": "assets/js/105.ed7691db.js",
    "revision": "c0c382c62583dfccd7d439616d0d8fe4"
  },
  {
    "url": "assets/js/106.8a6b7f31.js",
    "revision": "a82c95125af3667bd28d665c0524ed2c"
  },
  {
    "url": "assets/js/107.97b29b0a.js",
    "revision": "37ec42fa800a077aadf09f0b9d7309e7"
  },
  {
    "url": "assets/js/108.bdc4df31.js",
    "revision": "bdf8c83177edd0a68342777cda1177cf"
  },
  {
    "url": "assets/js/109.f09ebaf3.js",
    "revision": "5c873090da436db4868a6d3ab8f3aacc"
  },
  {
    "url": "assets/js/11.6fca27a1.js",
    "revision": "4c0f82bbca3a55076b7d7557e18db0e7"
  },
  {
    "url": "assets/js/110.a041b080.js",
    "revision": "a6f332ad481ed46a909c991a33e7fd24"
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
    "url": "assets/js/17.c06dd2e7.js",
    "revision": "88c0b3bc081d60d3051e8efbb4ea9eee"
  },
  {
    "url": "assets/js/18.dfb3af7b.js",
    "revision": "3e1053bf52309becc39706bf51c64137"
  },
  {
    "url": "assets/js/19.7e11513d.js",
    "revision": "e4799a9f9fc060bf6476ce247030c835"
  },
  {
    "url": "assets/js/20.0bcda76d.js",
    "revision": "aa24f8abce64d1a5922cb7fc43ead7ae"
  },
  {
    "url": "assets/js/21.c4f5cd37.js",
    "revision": "4c02d59f191d25494a65095614cb9e17"
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
    "url": "assets/js/25.f66e2c62.js",
    "revision": "d27e67290127dff08bdb267ff0b1d665"
  },
  {
    "url": "assets/js/26.f99706e3.js",
    "revision": "d3fb4d29e1fe70f16e4cdf33f72ef6ba"
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
    "url": "assets/js/29.d14cd5e1.js",
    "revision": "cf606e3c0e5aaa6a57be8b46c69906ff"
  },
  {
    "url": "assets/js/30.1e2d98ca.js",
    "revision": "1d4cf5fa5188070f641e09e475776331"
  },
  {
    "url": "assets/js/31.113f88cd.js",
    "revision": "c2650976079a97cb327485c490ed206f"
  },
  {
    "url": "assets/js/32.37dc7db2.js",
    "revision": "8d193848c0d156f8490d2f97fb3f5fca"
  },
  {
    "url": "assets/js/33.64643571.js",
    "revision": "a29cc58c23950b7adb1f801bb20dbcb7"
  },
  {
    "url": "assets/js/34.6c5f7566.js",
    "revision": "3dfe83e9b7f97140a4f550d0d20f3142"
  },
  {
    "url": "assets/js/35.28135cc7.js",
    "revision": "f030548a0f8fca8ab2f5a4dadb0a930a"
  },
  {
    "url": "assets/js/36.f766d271.js",
    "revision": "d37992b72e389d589768edd9f77e17d3"
  },
  {
    "url": "assets/js/37.f5fc4e0b.js",
    "revision": "a8c4eb69baa206379ea4d6e456b60c84"
  },
  {
    "url": "assets/js/38.b2d9f523.js",
    "revision": "3b5c42d9b966da601ac2f1bba64c60e7"
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
    "url": "assets/js/40.8d916d87.js",
    "revision": "8f23793a2f6c43cce8df5288d53f0287"
  },
  {
    "url": "assets/js/41.bcbdcb6f.js",
    "revision": "201873175763eb86c8ad81a634df57f5"
  },
  {
    "url": "assets/js/42.187aa5e8.js",
    "revision": "16645dd9329d41e79d93531376422d4b"
  },
  {
    "url": "assets/js/43.f0b0a9b6.js",
    "revision": "669cbd15be5ae16020a83c7c8529859e"
  },
  {
    "url": "assets/js/44.dfc95e0b.js",
    "revision": "db1ecb1884af342d63248e203e578ba7"
  },
  {
    "url": "assets/js/45.c7d6e397.js",
    "revision": "a2d2ac574bf5f650101aa8b3c8985dd3"
  },
  {
    "url": "assets/js/46.5d19957f.js",
    "revision": "54a66477348a34d658c4c9374604991b"
  },
  {
    "url": "assets/js/47.dac7f3cc.js",
    "revision": "341671dd5abb2b2b659498da0c40c0d5"
  },
  {
    "url": "assets/js/48.58343188.js",
    "revision": "e8bf25dada1042b181f96ce64af4d2e0"
  },
  {
    "url": "assets/js/49.15337aa7.js",
    "revision": "8efc3b54e853fb6e4dccd057930f5332"
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
    "url": "assets/js/51.df03d224.js",
    "revision": "ddece06d88be40e5b691ab73631ae580"
  },
  {
    "url": "assets/js/52.0f3faccf.js",
    "revision": "12bb504b1deb6c97e15ca857c32adf62"
  },
  {
    "url": "assets/js/53.db1bd462.js",
    "revision": "991a6a8838c14acd036acbe6271532ac"
  },
  {
    "url": "assets/js/54.a2bce30f.js",
    "revision": "e5d2170c070581bef9fdd18a59c57291"
  },
  {
    "url": "assets/js/55.601e097a.js",
    "revision": "d0c6c2854120f0fd221049f25f18cdb2"
  },
  {
    "url": "assets/js/56.b1364249.js",
    "revision": "f327677e163316a79312a66c550f26d9"
  },
  {
    "url": "assets/js/57.3f2860e6.js",
    "revision": "5c80b2707a2a291314c7bc689964e89b"
  },
  {
    "url": "assets/js/58.c420f299.js",
    "revision": "c5f28e85e1554fb80d0d094ccd1da4f5"
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
    "url": "assets/js/60.26ed47fd.js",
    "revision": "99fcf2aa6486fbbb5e75b6a99b3a0c4b"
  },
  {
    "url": "assets/js/61.69cfc568.js",
    "revision": "798951aa0f02005eac42fe3254637980"
  },
  {
    "url": "assets/js/62.1831eaef.js",
    "revision": "320063749ba498bbd33056c46b81f755"
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
    "url": "assets/js/66.0f6a57e1.js",
    "revision": "e36c651e73c8fe2b098ba72fdbb099a2"
  },
  {
    "url": "assets/js/67.7d020b84.js",
    "revision": "b8aeba4e0007ad59cbd513687aeb1aef"
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
    "url": "assets/js/7.37078044.js",
    "revision": "27a6092ae7f5585388bad9868d5f5d6c"
  },
  {
    "url": "assets/js/70.64521d80.js",
    "revision": "a13958a594941685bf3f7e17c4d6ca10"
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
    "url": "assets/js/73.674b8e77.js",
    "revision": "139b12844332098a047b9c74ce97c067"
  },
  {
    "url": "assets/js/74.c639148d.js",
    "revision": "10d02bb06860afec72f5c566563a351b"
  },
  {
    "url": "assets/js/75.fd94a121.js",
    "revision": "5da4b2edd977453d2fd806156991d53c"
  },
  {
    "url": "assets/js/76.06f358cd.js",
    "revision": "7027a9860d170679d6139f20d020ec1f"
  },
  {
    "url": "assets/js/77.eeeb7aef.js",
    "revision": "6135c30a28617b95219fa46bc264f2d1"
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
    "url": "assets/js/80.3cbcf757.js",
    "revision": "ec76f056b0c619b5262bdfde4ad2a59f"
  },
  {
    "url": "assets/js/81.fba750da.js",
    "revision": "7f7e111000d4606f8ba9ffabbcb99fcc"
  },
  {
    "url": "assets/js/82.31b5594c.js",
    "revision": "15828f6a90576a1eb107e688561b0267"
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
    "url": "assets/js/89.da67f2c3.js",
    "revision": "2c2d158260855cfc8d162c6e98eab399"
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
    "url": "assets/js/91.5b8fa588.js",
    "revision": "4b4b457e76d9611a46a427e95025c27e"
  },
  {
    "url": "assets/js/92.c6d45453.js",
    "revision": "6104378ef152a96d0d35653c7787b105"
  },
  {
    "url": "assets/js/93.3d78e7e7.js",
    "revision": "c86736083915f0b681e7f41a7a4e00d1"
  },
  {
    "url": "assets/js/94.81c75bdd.js",
    "revision": "80499a6ecabf1e1eaaa8db8e4403ea7e"
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
    "url": "assets/js/97.3b2a212c.js",
    "revision": "8c1c433961770e25fb6749471080e53e"
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
    "url": "assets/js/app.fa502f6d.js",
    "revision": "48618990fd7fd84819d43a84601dbac2"
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
    "revision": "542893df00b5a30790d96fe78e39e895"
  },
  {
    "url": "faq/index.html",
    "revision": "b23763151285a959871f44333187370d"
  },
  {
    "url": "guide/assets.html",
    "revision": "15e264487ffb921d1f942e728ac78bca"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "78dd92783cf0fbfc46804c53676e360a"
  },
  {
    "url": "guide/coffee.html",
    "revision": "6f20cca60a19487b29738ae8cc02deb3"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "26847f548427b9b237438dbd9d43422e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d2cae875a691f454dcb2efaf422f9081"
  },
  {
    "url": "guide/help.html",
    "revision": "3c7113b97ccdafd796c7a0dabd4ab454"
  },
  {
    "url": "guide/index.html",
    "revision": "f798fb3c31dd5bff01004e4e51c03ac4"
  },
  {
    "url": "guide/lang.html",
    "revision": "5dc1ac70af50a5cc3cf6edbb38ba97a0"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "548a0a9d721aa32ff80383c652809db8"
  },
  {
    "url": "guide/security.html",
    "revision": "d2bcc20559993acd1a2200e2c628b286"
  },
  {
    "url": "guide/tags.html",
    "revision": "1b407e13550f6ee8beeb8348b5afcb69"
  },
  {
    "url": "guide/update-log.html",
    "revision": "6de36406b01900f7f45bc1e8416d977d"
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
    "revision": "6b3713b9756d69f76596651b0e9b5942"
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
    "revision": "6917d4d5aaefe6d63dfecc54b77a4d11"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "e5d83dcc2490ac582164083b50c03130"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "92dd6d6591f7eeb2d167f1fe6c174487"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "a5bc752dafc8d3a53b42b4b74a27d7d4"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "62f602514645cd348cdfbeea3e95ef44"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "8a3f89ec1cec0307a4907127c29bef1a"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "157349a6b59ce4c0e4e59e62c1fa6804"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "0ef26690cced8dd9946228f35f3c5c55"
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
    "revision": "ae093798a74d33c213f1df05e791d790"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "49a64b0858a223f7993da4462e94d267"
  },
  {
    "url": "tc/config/index.html",
    "revision": "f312ce154eb03ee3bdab21d3c961e440"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "5f65819aeec92c1ac6cf609b889509f3"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "13ccf96b3633c0e154e01c089bab9bc7"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "64daf03cbbc1154474d03bca37e423f1"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "52d21460cae2e56fb337c1c73ac74438"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "eb4133d834f39db46c8dc1746bd548b1"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "18e2197eb13e2bc3c8e6b0d3d8bc4b93"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "9a478dfbeeb446df4dff14fa493e70f4"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "a438140136d457187711f8bf3068faf8"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "7cc2f7008dc414b9d8683aa25b896420"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "d32c2e41d8b6967cc32be41ce34148f7"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "661d8c19bb8ef03bb675fac60fef77fa"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "12baaf211aff44deee0dd164c8554c7a"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "ea2ae9777d74bd823a41d8673cf5ff47"
  },
  {
    "url": "tc/index.html",
    "revision": "3e3fc45d8854c6a044d21668b02a987e"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "40cc5ee000b0a1b79dbfc19e799bfda7"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "9391653b6441fa4d98158cd696e00148"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "abf16b8f380908b61851b0fd87798ca3"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "022ff8d1e997274e5d53c7969a1744fe"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "61dfea8ff01f21cbce48614dda423f03"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "420e312c741ec14b185a0f61b3b844d4"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "d52eb8d32c08bfcbd39f64f302cce31b"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "1f6a26c482f3fe8b833b39f03d889676"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "6e88d285b13ddd5151a9f91063978ebf"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "2764a8fa276443bdeaf591cb38188615"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "0d054872b095b45b6cc500ddf28aeaa3"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "bc5aff7ba19ccec62e03efd9207b4b77"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "a1c2659853f8144d470def2f757f6103"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "985376169d8615059b29c6e434f052b3"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "a9a3c4ef09d2bed31bd1c3c616e7b879"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "a8b509d06966aa42ebfb6e2ab8320f66"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "826c96e8fa626361ac15eb6809a653d4"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "84f0bf895faef8d89a64618fb5a82c2a"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "809165c356ecdd75ee5b8669fbb3d635"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "99db8315e4e643b5844c1b752d8a0b96"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "e2fbace4098adae8a64f3814408b145a"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "4d6f302663f9e1632cf2e0c961604da2"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "42b347ee7d2818f7cdb982fce3ad7ddc"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "1538118ae735710771743f8d46e2b2f1"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "72146cfb53d96ab5a6608c82e198e2e7"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "67ccbd4fdb5be018ef827080259f6f6f"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "b646d6c622a6755d5a0733a8499fcff6"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "767c29fdf9b898effee2609124cdd88d"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "61ee4959b853baafd14043ac3b53a8b3"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "7aeadb993487a1d7c2336c4db1bed450"
  },
  {
    "url": "theme/index.html",
    "revision": "d594b526b23d3899b0ee55466156fca0"
  },
  {
    "url": "theme/senior.html",
    "revision": "65171d9406aa10b9eeaa7dd9f9e5baa8"
  },
  {
    "url": "theme/structure.html",
    "revision": "aec6faee4da161bdf4269993596e521c"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "1c5d8c5aac94015a210d5bcfba66d385"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "34a65c6103a4428a0e36f9bcdd8e3626"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "d831a39ef3f18114ddb28ab30d6cf385"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "9e4a4039b7fa024afc5f64ce4043d768"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "abb54763373884ff65532b96ec563854"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "656da568b1503062766f8005b9b811fc"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "0db4b90b407a00b21b138b748e2e5971"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "fbde626531799a9eb4725a501b06bbc6"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "a0690217802a05f45ea19296657f6073"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "0eefb12c13208598e132e59f61c46151"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "8c05b92f7818bde0ab1f9794b0fe9a1c"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "84f8eafd948904a1c51240530dea1efb"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "c6aab3f2a01279b68226c57bcfd68122"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "2f3d8ae43304a4837a32998596bf5b7c"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "cd5e93bd2b69f0e0deae936e32173103"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "9671146e444c66064efcdfecfe1b95ac"
  },
  {
    "url": "webmaster/server.html",
    "revision": "f7bf4ed5641bac57f6afed9d4173c1d5"
  },
  {
    "url": "webmaster/template.html",
    "revision": "e5fdaf12387dc6de7410298c797825d0"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "72f506b42ce70f5e52fa22d1c035f298"
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
