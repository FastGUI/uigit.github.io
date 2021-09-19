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
    "revision": "19b966cf1688d7e088ecdccf5f7724c3"
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
    "revision": "81a11dc2ad6ffb8e7d741809227e39e3"
  },
  {
    "url": "api/web-design.html",
    "revision": "5a9d8c5d1e0f920bed5ed25da341b719"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.6038fff4.css",
    "revision": "347511d4eb9161892a1cdaf18d15f23d"
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
    "url": "assets/js/101.ed097c7f.js",
    "revision": "1bed1f2ccc572b0686df04f9dfcc8157"
  },
  {
    "url": "assets/js/102.95e668be.js",
    "revision": "3656d7054c6cc1c71f3afa4612a6060a"
  },
  {
    "url": "assets/js/103.15e6dd3c.js",
    "revision": "8bc6a6530e7081a570e2f86e390574b7"
  },
  {
    "url": "assets/js/104.5c1bcf0f.js",
    "revision": "35628ae40478deccd5f9e7f7a6cdc4ad"
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
    "url": "assets/js/107.4339e35c.js",
    "revision": "ac769d38f84d234a8946910cdbfa2a0e"
  },
  {
    "url": "assets/js/108.fa4521ad.js",
    "revision": "95b96b933c7c814735145b413ae16d94"
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
    "url": "assets/js/17.7163bf50.js",
    "revision": "58835270b75d5c0e56e3c70fc881da0b"
  },
  {
    "url": "assets/js/18.f2daf1d0.js",
    "revision": "cefeb27655ad0cef90542cd730f50b5c"
  },
  {
    "url": "assets/js/19.44a84c76.js",
    "revision": "789a072a2e2ac887ad82d39051293652"
  },
  {
    "url": "assets/js/20.8972189d.js",
    "revision": "07f485aa489b254a54a125cf8edb9dd4"
  },
  {
    "url": "assets/js/21.05bbae60.js",
    "revision": "a85120fdbc5d0786dbb5989b6c2fee70"
  },
  {
    "url": "assets/js/22.aecf9e25.js",
    "revision": "a6e9ffa3eba0f95fffb8e20152a4c5e0"
  },
  {
    "url": "assets/js/23.1eec220b.js",
    "revision": "ce3dd40f2ea911e51fd4e10941f32e90"
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
    "url": "assets/js/26.9f3e21e9.js",
    "revision": "10cd372345dfd10d858d43dfbd280212"
  },
  {
    "url": "assets/js/27.dff3428b.js",
    "revision": "d90908f934d8e4e2fdf8d0ee74c2ce3a"
  },
  {
    "url": "assets/js/28.57c5e79b.js",
    "revision": "3daaf4e6bc24c1173ba7b4c31dc325ef"
  },
  {
    "url": "assets/js/29.ab85b18a.js",
    "revision": "5f8e1b860f4d1a362743a8d8f0b0d4a7"
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
    "url": "assets/js/32.37dc7db2.js",
    "revision": "8d193848c0d156f8490d2f97fb3f5fca"
  },
  {
    "url": "assets/js/33.93ee7ff2.js",
    "revision": "9b9ba081374c09484d3effca3bf16df6"
  },
  {
    "url": "assets/js/34.a4a6b5b4.js",
    "revision": "5e0a9003c398d126ccaf8c5be85dc9dd"
  },
  {
    "url": "assets/js/35.ad24f8a9.js",
    "revision": "1f3f5270fcedcfbbefde514094cda931"
  },
  {
    "url": "assets/js/36.8f3410a1.js",
    "revision": "a9ae5f5de2ab2005c841d802d4e98548"
  },
  {
    "url": "assets/js/37.19ec35f8.js",
    "revision": "d536c5dca603dd86a327aa29c3823fd7"
  },
  {
    "url": "assets/js/38.516a52c4.js",
    "revision": "0ef8c647ccea526e8d2c0452bbd3ae8d"
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
    "url": "assets/js/40.a351a86b.js",
    "revision": "d88aea3e7a40b03fa3c7a4fd14a164ad"
  },
  {
    "url": "assets/js/41.d30050e3.js",
    "revision": "d41bdb17f603d8d261983bbfcca6e7a6"
  },
  {
    "url": "assets/js/42.c742b4dc.js",
    "revision": "7878795a3779c0a5bca1385e0ed2c7aa"
  },
  {
    "url": "assets/js/43.7d9c0970.js",
    "revision": "4845979b226a492e4fb627b589ee094e"
  },
  {
    "url": "assets/js/44.afea1fce.js",
    "revision": "840028d7ec3452ea8b251800fd3131bc"
  },
  {
    "url": "assets/js/45.11903342.js",
    "revision": "7a7725324fb832dc4431ead2beba73dc"
  },
  {
    "url": "assets/js/46.9b3a0416.js",
    "revision": "44682b12416c64873ad6d39814a91aad"
  },
  {
    "url": "assets/js/47.dac7f3cc.js",
    "revision": "341671dd5abb2b2b659498da0c40c0d5"
  },
  {
    "url": "assets/js/48.61a75c21.js",
    "revision": "433a773ddecdc5a6675a92c872006a08"
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
    "url": "assets/js/50.9f42cca7.js",
    "revision": "ae6840227744fd0a41522a5a5c60c31e"
  },
  {
    "url": "assets/js/51.df03d224.js",
    "revision": "ddece06d88be40e5b691ab73631ae580"
  },
  {
    "url": "assets/js/52.9616fa95.js",
    "revision": "affd77236d6b249b12fc3268f9e9e016"
  },
  {
    "url": "assets/js/53.439b5e31.js",
    "revision": "73c3bff30abb744070689bfd7446d566"
  },
  {
    "url": "assets/js/54.de0c5e5e.js",
    "revision": "c1222a154d693c682da4c5235266a0b4"
  },
  {
    "url": "assets/js/55.19040137.js",
    "revision": "9b0b6f940c058d23ffe1716106372547"
  },
  {
    "url": "assets/js/56.89adccd9.js",
    "revision": "2a80fdf7c0a64aec427a5f53bad5957d"
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
    "url": "assets/js/59.e6687db0.js",
    "revision": "3b9a281d7db547a7366f0ee7fbfb5fb6"
  },
  {
    "url": "assets/js/6.bdcae1a6.js",
    "revision": "59f1cf190b6c1cb1a22cef97996e49af"
  },
  {
    "url": "assets/js/60.0ef69a97.js",
    "revision": "84849b4d71e5581363155e688fc6e259"
  },
  {
    "url": "assets/js/61.69cfc568.js",
    "revision": "798951aa0f02005eac42fe3254637980"
  },
  {
    "url": "assets/js/62.45288363.js",
    "revision": "1a2170112de5081c6ef5d90f93f644b5"
  },
  {
    "url": "assets/js/63.f7b5ebaf.js",
    "revision": "5c397b43cb8fded744f9a0e76ddcf30c"
  },
  {
    "url": "assets/js/64.9db29ede.js",
    "revision": "79907ea41220646db6f272fccafae589"
  },
  {
    "url": "assets/js/65.dc5dee1f.js",
    "revision": "e97fb00360ecd63b4224f7bccaa98c24"
  },
  {
    "url": "assets/js/66.4f1450f9.js",
    "revision": "ffdb5af299a3a06bd343a865a7603f24"
  },
  {
    "url": "assets/js/67.7d020b84.js",
    "revision": "b8aeba4e0007ad59cbd513687aeb1aef"
  },
  {
    "url": "assets/js/68.289931a6.js",
    "revision": "76a86557dd3bd0e47a243ccde5282782"
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
    "url": "assets/js/70.0be1ae34.js",
    "revision": "dfe1ec4d87515dc864ca32b892f0a1b7"
  },
  {
    "url": "assets/js/71.c9e0128a.js",
    "revision": "898d28b10963b0eb53eff554ef6d7bb2"
  },
  {
    "url": "assets/js/72.e3705de9.js",
    "revision": "743d037440170bf3018c8ddccaf9baed"
  },
  {
    "url": "assets/js/73.c211d6cd.js",
    "revision": "03f949019b58065a97c3c396b047c9f1"
  },
  {
    "url": "assets/js/74.410e6c50.js",
    "revision": "8f68ecd025b03453463609804728b554"
  },
  {
    "url": "assets/js/75.95ff2207.js",
    "revision": "bec6cdc92278d37bdff35222bee8b971"
  },
  {
    "url": "assets/js/76.a17db1a4.js",
    "revision": "21709a045e3d1991dde98bfd3bed7d17"
  },
  {
    "url": "assets/js/77.eeeb7aef.js",
    "revision": "6135c30a28617b95219fa46bc264f2d1"
  },
  {
    "url": "assets/js/78.a099d618.js",
    "revision": "34dfcc975803321fa6de7bcf85d089d1"
  },
  {
    "url": "assets/js/79.b7961cfa.js",
    "revision": "4de13566f8fb1f0db4584c4867bc618d"
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
    "url": "assets/js/81.0de06321.js",
    "revision": "4d915bb3fd85224da0dc55cf7dc7b16b"
  },
  {
    "url": "assets/js/82.0505f4d3.js",
    "revision": "20b659fa7d0e2494e3a985ca65d51fde"
  },
  {
    "url": "assets/js/83.a6a82839.js",
    "revision": "b4dbde15899465c4e08bca295ead5b4d"
  },
  {
    "url": "assets/js/84.081af6e1.js",
    "revision": "b32cb8fdda55e5f569736aa74531f81f"
  },
  {
    "url": "assets/js/85.006018fc.js",
    "revision": "c4b2b4cc2e37d7d8b475cba92e85f851"
  },
  {
    "url": "assets/js/86.24dbee55.js",
    "revision": "bc3bb3ee3212473769aa31b9197c6111"
  },
  {
    "url": "assets/js/87.2eb46ec2.js",
    "revision": "cfe3bb871c7a32f2d9c8f2f1ca74268f"
  },
  {
    "url": "assets/js/88.1c1571df.js",
    "revision": "a78a26fa56a146e53bb8340bcb9bc973"
  },
  {
    "url": "assets/js/89.888a7fe5.js",
    "revision": "167c2282fd7c1f33fe677c2b1d89d59e"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.d40f665f.js",
    "revision": "406da8ebaa61f20ce37be1847a825d3b"
  },
  {
    "url": "assets/js/91.b4186da9.js",
    "revision": "89354276dd5577e36c6ee7e4a8fc74d5"
  },
  {
    "url": "assets/js/92.d42a2fc0.js",
    "revision": "d7fff9a93fa98162f1a1356055de92b5"
  },
  {
    "url": "assets/js/93.51e6803d.js",
    "revision": "5b6fa15eecabd2a6cc0551320f486f89"
  },
  {
    "url": "assets/js/94.81c75bdd.js",
    "revision": "80499a6ecabf1e1eaaa8db8e4403ea7e"
  },
  {
    "url": "assets/js/95.92cbda8a.js",
    "revision": "9a16ed27206cf1730225206d3236b678"
  },
  {
    "url": "assets/js/96.3c4abc71.js",
    "revision": "edf8e72ea33e78ae68176c85b73b7a2c"
  },
  {
    "url": "assets/js/97.b6938069.js",
    "revision": "033e17c7277dcb043d25875dab9e32a9"
  },
  {
    "url": "assets/js/98.67d14d91.js",
    "revision": "f453a0288b4baea21e1fd4edc2a53530"
  },
  {
    "url": "assets/js/99.37effb3b.js",
    "revision": "d423c1f495a20e32e4acdb5799a60989"
  },
  {
    "url": "assets/js/app.3bf694b2.js",
    "revision": "3e7018ecfdae145a6ef79bcc49dcc723"
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
    "revision": "fd77bd50430bacd49bbd10a5d94091d3"
  },
  {
    "url": "faq/index.html",
    "revision": "aa49c1290b25b4ccaeb3a7485a97214c"
  },
  {
    "url": "guide/assets.html",
    "revision": "9a5af258a962a38e8926b4cc9e2e476c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "7968a0d87876301d2c92b9d164c3cb45"
  },
  {
    "url": "guide/coffee.html",
    "revision": "8a4e7331cca208c7b43721c49d6f838c"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "47cc48764fa1c8f9df1ddd44ca28ccff"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "afacc6f9ea4440665508e2dea2590017"
  },
  {
    "url": "guide/help.html",
    "revision": "60b2e623a1cf773d61a7dc5a436612e6"
  },
  {
    "url": "guide/index.html",
    "revision": "3cb953ca55ce550383d85131161e8195"
  },
  {
    "url": "guide/lang.html",
    "revision": "8af68d313ffd7557fc315d2bed6d332b"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "1ad4368d57b03f54faa8e63e984cafcb"
  },
  {
    "url": "guide/security.html",
    "revision": "0b08c3e988503f0861f40598ebc94a2b"
  },
  {
    "url": "guide/tags.html",
    "revision": "b346eacfb8257cebb0b93e448d64dfff"
  },
  {
    "url": "guide/update-log.html",
    "revision": "f14d10640597736a662f858974f6a211"
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
    "revision": "354ed74a52d9b5a3a8b0a3051c1e1058"
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
    "revision": "8ab3cc822c48ab456b6b122104ffcbf2"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "1cc5fc57cc6c660f782f42137bf33378"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "da168642cf114be3f1b6b53a56288998"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "1439a6008b7df4c94ed58a72812a4c16"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "4f4fe3fe5c840464a5a40851e5454e69"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "a7be2151c473a35c4b9eb594ff6fc7ae"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "8e88045cb26a17169896f8fe734ca7a3"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "aaf219cae17dcdb28d2f956740ad5983"
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
    "revision": "bbe62f40ba6c9b6c0f4e3466c41cb879"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "956c2013bdb15b56af2cc2408ffeb5d3"
  },
  {
    "url": "tc/config/index.html",
    "revision": "e9d1a1abd105bb2a534c6197135b106d"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "b9a09ea45314dce23f4caa412b9599e4"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "7ea3083d5570bb7d8bd3a6229841ffbd"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "ddc90221421ffa0eac961e65c92ce23c"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "03d8ce6cd40baf0d9d78f3025ebe1f16"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "cc7fc00563eb7d67e3f29e3abe615365"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "2a310ae432af03f02efa7e2ac35cc17c"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "a377c0bed6a4abc89ee2035b5579d353"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "6e1100255e0289355216db33546e0030"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "a6091256c04ff7ebcfc20e565aa58873"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "221acd120bae8de9af5f12c60add174f"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "06e3c525db8a3e9643573a64395f596c"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "6b1151b1c01f3d1551b0134f703adb3b"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "3d4c7f645d3988069410b943d5d351f5"
  },
  {
    "url": "tc/index.html",
    "revision": "a01220b013ff9bd15738466d3c8a6bef"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "98c4360624ce3b5c40268426346678d9"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "e79bf3c90c796a166783b5859b66d731"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "3bafb0e22276f45c33f8ebfcfdfccdc4"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "3bf65693d823797400eadf219ee049cf"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "892f3c54fa620f0f51329269dbcaf77d"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "454864d57481f1f9fbc63f42702d6c5a"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "564818f8b01fccab9f5552e84247a3b0"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "b38358585cd715d683d26f9e7d2bc3be"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "5e568bf1b8b51ed4a3d409ae5c03f2b6"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "6051f21e6d70bd1b9eeaff757b104254"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "9e1ba796b1e933e921f4f71ba39c9cec"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "c42b2cf0d258d4483f1ce6d75ffbc99a"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "60c592127ca5aeec918f86bc6bdec49a"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "b37355e8da8e965e1cd24546f475bb21"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "16289d8b6a6c6a50fe1fff4e2bd34bc1"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "784bdded4b8e8f6b49302320815e556b"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "148f8874f76d08f710f4c9b3f7920267"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "a350c0ace45203d64b7cb1e9a7eb118f"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "71958a2682e13e56002d6a71707384cd"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "caf8eaf89454ced01fddee215f1ddc7d"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "a7592a675255fbbefba8f8f6910910b1"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "1496ebe3ac586f8496173de8dc4f1553"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "79f0157e032e2f307c3b28751f433b05"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "b3f8e239af8f602ae3d4ba610f1e1883"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "13ec8f2339d4356997941c0345eeb569"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "a70727698bffbd1b00f8ce7f146331bb"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "7d9fce3383e0dd0b91af9fa4fc2876a4"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "7f6eb00733086ed134058df0d513d8fa"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "6571cbdf5965c30d23bf0e532916fc59"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "506ddad990517f1a46fe2d7914d8ec7d"
  },
  {
    "url": "theme/index.html",
    "revision": "c2a7f772793e3177ea48df11a66feaa0"
  },
  {
    "url": "theme/senior.html",
    "revision": "c483a9e3b1ea1356e49f99eac52d8ffd"
  },
  {
    "url": "theme/structure.html",
    "revision": "0db1a45878be95b0a4a9fe089deca2e6"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "737764b1c08b86ff9e44b9e997ee9c70"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "fd93624715b7885af760fbfa63b6ed92"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "40d4a610177a7385e83e5c5ce90a0caa"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "19b0435cb66cd9ff31342c661063157c"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "641326f2ede824787c1db05f2a4ca739"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "d5a9f9b773fc1b778b2feaf65d36a9d1"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "a36bbed07f18995be3cea05c7168b313"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "1d8dae50e3f4c30fdb37763feaeacd8d"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "8ed278fb53b9b4e48407b2e5fa67157e"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "6b2ddd84b40df2eb950331cdae38c819"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "8c6c1fd618b04c9038e8221e744e2612"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "8c84348cd0a34ab2d1b0eeb76dbde1dc"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "be18325298d304123ed43890bf7176d9"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "34cb4cff377af1f46b1a6438a26933c4"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "dee9dac8dc68b9a7041b71efd6f2bd34"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "9f320d04e57f92488dfb065c23437262"
  },
  {
    "url": "webmaster/server.html",
    "revision": "2e72ec76c9c540090de2ec8f722b7357"
  },
  {
    "url": "webmaster/template.html",
    "revision": "21ca13df3d1b26a9b1e990a44b2a4019"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "6bab227c126ba732f80ae4a99ad0482a"
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
