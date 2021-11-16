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
    "revision": "bf0c4e3427e368e27ff13ea892a35389"
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
    "revision": "6ed31ead45f067f26daa48f258464ca6"
  },
  {
    "url": "api/web-design.html",
    "revision": "0bda488686713bda76694954ae42ea38"
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
    "url": "assets/js/100.8815c87f.js",
    "revision": "e7abef7f589bcb458492e051bd81e247"
  },
  {
    "url": "assets/js/101.7e986a1e.js",
    "revision": "a48bf2a82577c3c921a276b5be47713d"
  },
  {
    "url": "assets/js/102.5e044e57.js",
    "revision": "23dbbbc336c9bff7972ca7e4477564ef"
  },
  {
    "url": "assets/js/103.1fafda59.js",
    "revision": "29f542518987b94c00f7919bf387e28a"
  },
  {
    "url": "assets/js/104.5c1bcf0f.js",
    "revision": "35628ae40478deccd5f9e7f7a6cdc4ad"
  },
  {
    "url": "assets/js/105.c1b887c9.js",
    "revision": "1019e9309f621870dbeba35ea7b99be4"
  },
  {
    "url": "assets/js/106.54a822a5.js",
    "revision": "28c02d6f241aef8377b20ed2b5a991a0"
  },
  {
    "url": "assets/js/107.4339e35c.js",
    "revision": "ac769d38f84d234a8946910cdbfa2a0e"
  },
  {
    "url": "assets/js/108.fa4521ad.js",
    "revision": "95b96b933c7c814735145b413ae16d94"
  },
  {
    "url": "assets/js/109.cb0589be.js",
    "revision": "41116723aece0fa12e4b53ca4fa09e3d"
  },
  {
    "url": "assets/js/11.a1ff2cf2.js",
    "revision": "6d2309e080b0f6c325248d69451c5c28"
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
    "url": "assets/js/17.f3326132.js",
    "revision": "7d89d97c06b0711d04161932a258d98b"
  },
  {
    "url": "assets/js/18.4ce8d9cd.js",
    "revision": "13216eb81dfba14e7f11a9651caa1754"
  },
  {
    "url": "assets/js/19.5dfafda9.js",
    "revision": "2decc462096e41b968576b9570a2c13b"
  },
  {
    "url": "assets/js/20.0bcda76d.js",
    "revision": "aa24f8abce64d1a5922cb7fc43ead7ae"
  },
  {
    "url": "assets/js/21.378e238c.js",
    "revision": "a3f11dbdcc5d7ee1497189a09987a71f"
  },
  {
    "url": "assets/js/22.36510670.js",
    "revision": "7ce6aaf6a416f34cd51eba8f53994e1f"
  },
  {
    "url": "assets/js/23.acc23df5.js",
    "revision": "3507387c976afcf60b2f94002e37e79e"
  },
  {
    "url": "assets/js/24.5203028b.js",
    "revision": "1d172aaf17bd4dcc8fc1c637729515de"
  },
  {
    "url": "assets/js/25.86a37e2a.js",
    "revision": "010ef80292b056f55c91e34d63d08270"
  },
  {
    "url": "assets/js/26.f3c4185f.js",
    "revision": "58c8edc69f6e4fc499cc92275c783668"
  },
  {
    "url": "assets/js/27.4e9e4dac.js",
    "revision": "d757bbf8bad9abd509b3052c4bcd7a75"
  },
  {
    "url": "assets/js/28.85afee50.js",
    "revision": "5c8feff59c96196439dd6a4f83ff6e8c"
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
    "url": "assets/js/31.113f88cd.js",
    "revision": "c2650976079a97cb327485c490ed206f"
  },
  {
    "url": "assets/js/32.37dc7db2.js",
    "revision": "8d193848c0d156f8490d2f97fb3f5fca"
  },
  {
    "url": "assets/js/33.78d7b50d.js",
    "revision": "12cd06d57f695fec6e2686635b6b0faa"
  },
  {
    "url": "assets/js/34.a297e062.js",
    "revision": "7af42534ece985e5569cce4b6fd9e107"
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
    "url": "assets/js/37.0ceeff4c.js",
    "revision": "a66dc1d0f98eb94bfd7ba2f8d398f6ed"
  },
  {
    "url": "assets/js/38.ed62be1f.js",
    "revision": "bec1bb9b325f1291afc07bb6d8a44024"
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
    "url": "assets/js/40.6de9f380.js",
    "revision": "83cf681ad3f76377293a7df89e8ee3b0"
  },
  {
    "url": "assets/js/41.2261c774.js",
    "revision": "a3b3d86e7734f0d7d6b7f57bb4f4db1f"
  },
  {
    "url": "assets/js/42.a6ba457a.js",
    "revision": "d61d074d9042d36ce8f0f9a75f939769"
  },
  {
    "url": "assets/js/43.43f39fb9.js",
    "revision": "97dda49e9a850cf5d6ccc305dd320290"
  },
  {
    "url": "assets/js/44.afea1fce.js",
    "revision": "840028d7ec3452ea8b251800fd3131bc"
  },
  {
    "url": "assets/js/45.fbcd18fc.js",
    "revision": "d0f35813a962c890f19c5963879aa91a"
  },
  {
    "url": "assets/js/46.58a505f6.js",
    "revision": "7728020a8e2c374cd8de2ccd51c065b1"
  },
  {
    "url": "assets/js/47.70537ea3.js",
    "revision": "3f3f19e9595b89ecdb05a7d351bc1c18"
  },
  {
    "url": "assets/js/48.657159fb.js",
    "revision": "45a3490dade1942912536ec46c90e52c"
  },
  {
    "url": "assets/js/49.22de7e1f.js",
    "revision": "447f1b583eaea190f8cb3eafa0de2981"
  },
  {
    "url": "assets/js/5.89d3f703.js",
    "revision": "9da728bbfc3057ff5a5c1bf2b30a89ba"
  },
  {
    "url": "assets/js/50.73e5557e.js",
    "revision": "f0ce66645c66d2ac7c04fae320796557"
  },
  {
    "url": "assets/js/51.7ba553a4.js",
    "revision": "0857a6a6dc4165f611c420dccd1113d6"
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
    "url": "assets/js/54.f6024566.js",
    "revision": "81e5edcf65c7d3589f0fa3eaea5852dd"
  },
  {
    "url": "assets/js/55.e9052549.js",
    "revision": "472994a1424eee047710d1b8e4a5f17a"
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
    "url": "assets/js/6.b8c76823.js",
    "revision": "8e28fdb8df941573edda3985dff077ff"
  },
  {
    "url": "assets/js/60.cd7361a1.js",
    "revision": "b1a0853a949449a9d78791cee0b0840c"
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
    "url": "assets/js/63.b113a697.js",
    "revision": "ffa47ccead5d934563abfb46e1575dd6"
  },
  {
    "url": "assets/js/64.664132e8.js",
    "revision": "94225c0fc527f585c2378b62e5aa83ee"
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
    "url": "assets/js/68.04409463.js",
    "revision": "074aadd3a185001ba91fe57f02899210"
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
    "url": "assets/js/71.fc0a2665.js",
    "revision": "9fa745c4b94bde5e5893a6880713bb0a"
  },
  {
    "url": "assets/js/72.1a10bd54.js",
    "revision": "7225208703c4c384495ba065ba4a51fe"
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
    "url": "assets/js/76.7165b7f8.js",
    "revision": "6e26c37dbaf28a4485eea1e752f608b3"
  },
  {
    "url": "assets/js/77.719b9edf.js",
    "revision": "9db0a60ef037e0fafd688f82799cd879"
  },
  {
    "url": "assets/js/78.713bde29.js",
    "revision": "098a35e9e6d24e77ca3fa655877c89bf"
  },
  {
    "url": "assets/js/79.e842a4a1.js",
    "revision": "112327e5f6b97549d5580f6a9201fff5"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.733195eb.js",
    "revision": "124c752de8d4e59dc77b7d6661776c2c"
  },
  {
    "url": "assets/js/81.53001f34.js",
    "revision": "4987c323fba5e53e04d0da7c0bca0a08"
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
    "url": "assets/js/84.f2987d32.js",
    "revision": "c6e5eadfa883ea7a43aa17ce3c9eaa23"
  },
  {
    "url": "assets/js/85.da526268.js",
    "revision": "ccacaa62e3ba0dd8dea1d6ac30a5409d"
  },
  {
    "url": "assets/js/86.6d992567.js",
    "revision": "187e4389e7f1052581bbc0760e56f1e3"
  },
  {
    "url": "assets/js/87.ef43800e.js",
    "revision": "5254195d55a33c7e9905b8f416efad57"
  },
  {
    "url": "assets/js/88.a0ddd583.js",
    "revision": "fd75a07b26ad12ad681e3c1cb71fe3c1"
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
    "url": "assets/js/90.df2764c6.js",
    "revision": "12d000d89f355025b80ed12f21a7a4b3"
  },
  {
    "url": "assets/js/91.5b8fa588.js",
    "revision": "4b4b457e76d9611a46a427e95025c27e"
  },
  {
    "url": "assets/js/92.584c489c.js",
    "revision": "0f5d80671c5df81e32d37041d0b5ee19"
  },
  {
    "url": "assets/js/93.75e3169d.js",
    "revision": "a9a9945f73ccf1f1785e109101517acb"
  },
  {
    "url": "assets/js/94.ba61cf7c.js",
    "revision": "2e43a50f2f73cdd171f8dabdbf6baf6d"
  },
  {
    "url": "assets/js/95.5e2cbe83.js",
    "revision": "1fa157dc7dc8f1d9a029248620c69c28"
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
    "url": "assets/js/98.15ae4f3e.js",
    "revision": "dce1be9f51ef726a4d9c6371e438780b"
  },
  {
    "url": "assets/js/99.5642e34b.js",
    "revision": "eeb81bec51d75f8d2f761b3eac94512b"
  },
  {
    "url": "assets/js/app.8fc7293e.js",
    "revision": "72896588c98d8e99b8ef95e616d72791"
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
    "revision": "685f78cb50161355201488e278084052"
  },
  {
    "url": "faq/index.html",
    "revision": "a87885ee36017285716d5ed2da1fee0f"
  },
  {
    "url": "guide/assets.html",
    "revision": "6fd50a5d74f410e05bef5ae43c87c145"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9f0face55e801dbef669e2eb4f8e9c75"
  },
  {
    "url": "guide/coffee.html",
    "revision": "76787ff2aa4795f7b29166f2f3845075"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "72316678cd38fa73afa78acd73f7d872"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7ed42d797b6a5b65320116d46fd64893"
  },
  {
    "url": "guide/help.html",
    "revision": "57ac541d8bb6adc7d7263de507d0fe8e"
  },
  {
    "url": "guide/index.html",
    "revision": "bce725eaac8037bcd3b20debf065c784"
  },
  {
    "url": "guide/lang.html",
    "revision": "b0ad3072bbb360b94ab7982a61b39d34"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "d56498ebf2074b28cd2ca4d816f375cc"
  },
  {
    "url": "guide/security.html",
    "revision": "acd35112b41bdca0ffa2b6337fec44fd"
  },
  {
    "url": "guide/tags.html",
    "revision": "eec39e8f4fab28ec4342e0a4784c1b51"
  },
  {
    "url": "guide/update-log.html",
    "revision": "f26dc327702636ca66893b1aa89045e3"
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
    "revision": "4573eafea46df5def6de6a2b0bd44b3a"
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
    "revision": "35ba36666de42e1fc09ee04fbe5f471d"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "6f63a18c6b096d0d1688ec81e652c9e1"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "dc88d522b91bd5942fda46f52f9b33aa"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "30dcdaedf73658fb0660f1d3bdc2b322"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "6de0140c6609ae04bb5a506d2aedf6d2"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "eaaccefac7174fa7d2230d0df0d9d66e"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "e5229260e90d2356dda51a609a69c9f8"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "e20c8bae2f8a5abad854b23132bc3b1a"
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
    "revision": "791149dfa95ee7521ff79233464b1006"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "c4604dcdbd5e369632e2282e57b413ed"
  },
  {
    "url": "tc/config/index.html",
    "revision": "992299d31ce5d3745d9dff543e32ad91"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "7627b138565b2f93221796554746eb9b"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "9c723936e2855293c4d5cf145f603b07"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "4eca401d4459728902666ec0baa63626"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "6601d6873da9582b3e4e268c0e856009"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "f516d31afc8d27ee7198e8155c6d879c"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "699e8f12ab871f00882ebf179a689c6c"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "75fc206ecd3e106b9e021c9e199a389a"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "a56c4a7ded4435dd66c3e6338718ba88"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "f7c41fccbc15547195e5dc6fc0824f2b"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "16534c1b9913d9ae9e87398b135f331a"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "f55e8a2ce210ce9f9279ef36efd1ff88"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "5740d442542060df9c9abd5a3db02f69"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "d56e511e001b22c961de1988b9c197dd"
  },
  {
    "url": "tc/index.html",
    "revision": "2bf0ea3a2c144dbc184a0e1a40efab22"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "0065ad250502a537ea4ec9df6d77cb7a"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "af8116150bfb3ba1bc491de99e15ea62"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "3c09011a841ec4537b0d0edabaa8ecd8"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "91aa4e1564ffec1563e729c571ed52a8"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "cbd75ec659e60f180bd369f08d0e9e1b"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "e495e63cef10a2b0d4c3737b70d8ef09"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "1e7993f8899a3a67d537a80dcbae02e8"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "b210eab6f62a0001149055a8ecafa212"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "a91712ed919ac43545c5dbc3c97c7d20"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "eefeddc0d2cb5ba379ead4376fca5250"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "fa60674793dbf10b42edb15cba1534f2"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "ab6f7ac11725df264500a868fea87892"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "77c8c8ce91a64afff905452df8bd6dec"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "95c6a907aa0a19d992d05449d67e40a3"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "c25d89d768c1372dd8852cf0951500bd"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "2a056756f301038671705d8718a8154f"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "9ea622c7ff46d472409e1f9f9ae81639"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "94ca05454a18e553f86da83b79c59ef4"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "3112c0465010421f86c56369eca94a60"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "c1919c1e0b69a1a05facc91753b8c335"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "eaba8cb1c15b445eddea0e00e1081e48"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "afe05be69a45bfd5cde809c903720d05"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "55ac067f06c3e5f7c20387175d5e0fc9"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "e48c57d0611afbb8a0638c1a55e18785"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "8b3f92344e9ba81d7a18f4a6c60759c5"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "6f52ca1a37530621ef327c0423377819"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "08ba10de62c3f705898e84d58de98990"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "d763544ee17b23ebc86327b19f130b74"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "724ccc7284c3c09b9c1382cfc0e62e85"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "2102ed12babacc12256768a2e2492177"
  },
  {
    "url": "theme/index.html",
    "revision": "38c0cf38a2be61f5d15491d4c929af7e"
  },
  {
    "url": "theme/senior.html",
    "revision": "8af0d7b9eb27c3e5e1e9dbd6f13fda75"
  },
  {
    "url": "theme/structure.html",
    "revision": "b31b120504bf7c2b14dbf53316df9cf8"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "117af2642a3c5bd2c93d5bbb57ce0b86"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "b308b57ea36aed84175a7ab5b4f96064"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "b3b85223235abedd587142868ff4a6b7"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "62a8b9ced1a6bbe660b04233ebd42912"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "bc1b9c08a4071599c3f40f529a702101"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "52d9ab7852ad740fc5be84cb7b0594d2"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "ab3f1d8f10f35390157e8cfb1e25b020"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "e97ec01474c892e8f3f6a746fd766bc9"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "ee00461f0bcdca23563de935422a0663"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "43243289e7786ce1770478cf29337c3a"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "0281473315f1b4ed99f6f7a8ff31770f"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "3cae3e301c5b07fbe5498594d6b1a5e4"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "31d13e867b51a382c8d4ee0f903f01eb"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "56e123cf2240b96989321f2144c3ef53"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "201d3db0dd50011630c8a751e3ff8ed4"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "ec0eea351cf584e3a5c9ad7f10b01e44"
  },
  {
    "url": "webmaster/server.html",
    "revision": "fa21d51b9f0eae38ac469e67d458d36c"
  },
  {
    "url": "webmaster/template.html",
    "revision": "a5e33b0a8290291c4490c80752857005"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "1f2e752fea0b4149c9cd18d7c3057279"
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
