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
    "revision": "ce4382cdcb3d01afdb8bdb8761570116"
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
    "revision": "86d055344f066e6b44dc606a4bd9177a"
  },
  {
    "url": "api/web-design.html",
    "revision": "a97385ca939305e0cec2878d81fbcf5c"
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
    "url": "assets/js/100.6c617d34.js",
    "revision": "0bed228108f1c5f7badf26298bccf69e"
  },
  {
    "url": "assets/js/101.4ed56922.js",
    "revision": "53a9ed07851942939a085fcb467275b8"
  },
  {
    "url": "assets/js/102.d862e378.js",
    "revision": "f6ca65e8961c2fc68373b819463a085e"
  },
  {
    "url": "assets/js/103.18b4a074.js",
    "revision": "4fa9718d54493de63f5334ce4db5b66a"
  },
  {
    "url": "assets/js/104.c693758b.js",
    "revision": "3e786082e54c84c61c8852566a9eb809"
  },
  {
    "url": "assets/js/105.c1b887c9.js",
    "revision": "1019e9309f621870dbeba35ea7b99be4"
  },
  {
    "url": "assets/js/106.8a6b7f31.js",
    "revision": "a82c95125af3667bd28d665c0524ed2c"
  },
  {
    "url": "assets/js/107.44d8235c.js",
    "revision": "6e633947dcffaf24fc7c138f586b5a98"
  },
  {
    "url": "assets/js/108.64ed68b5.js",
    "revision": "84ffcd8603a8e725129ebd7cb198aec8"
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
    "url": "assets/js/17.5d81cb11.js",
    "revision": "60797f30cdbd215a97f4b74ca353ea09"
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
    "url": "assets/js/20.5704bf81.js",
    "revision": "344a9f389ff2b4b99e0903ddea16f04c"
  },
  {
    "url": "assets/js/21.e611375a.js",
    "revision": "acd6523da2b5eb430428000e795b9c52"
  },
  {
    "url": "assets/js/22.33865c1c.js",
    "revision": "e5e16e3a960f68617e55643a95d895dd"
  },
  {
    "url": "assets/js/23.9e7a5763.js",
    "revision": "a75715034ef225ada435bfc3d61db5c4"
  },
  {
    "url": "assets/js/24.f6fcccc8.js",
    "revision": "764156ee709b0682409f01fb658d952b"
  },
  {
    "url": "assets/js/25.86a37e2a.js",
    "revision": "010ef80292b056f55c91e34d63d08270"
  },
  {
    "url": "assets/js/26.83c52a13.js",
    "revision": "59b863fe813e182e4e564c4c5472650d"
  },
  {
    "url": "assets/js/27.5f1ca22b.js",
    "revision": "6978acf40072a7a38b6cc3a08c5e41d3"
  },
  {
    "url": "assets/js/28.d4ba82f5.js",
    "revision": "d398ac6b9408b0fa26c4830fba0864c2"
  },
  {
    "url": "assets/js/29.291140bb.js",
    "revision": "9defbdee46afd3b34ef55262464d6274"
  },
  {
    "url": "assets/js/30.fc5f2067.js",
    "revision": "e8600b07b94acbf8c029a55b18f4ae14"
  },
  {
    "url": "assets/js/31.1a620d96.js",
    "revision": "1285c787c642c0d5f3c7c24bda956884"
  },
  {
    "url": "assets/js/32.7b66e649.js",
    "revision": "cc9bbff834cd87e27d80e341139c2e9b"
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
    "url": "assets/js/35.52cc59d5.js",
    "revision": "fc8949d1fecc7652cacc70f5e24130ff"
  },
  {
    "url": "assets/js/36.44ca63a0.js",
    "revision": "08eb125e37c4c7565d7ba613401a5b4c"
  },
  {
    "url": "assets/js/37.b06986c8.js",
    "revision": "f2ee8e93ae20cc2982f91867d9d27ef9"
  },
  {
    "url": "assets/js/38.1d5eb969.js",
    "revision": "1eb65878bc5a8dd44f7637fa6446acbf"
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
    "url": "assets/js/40.41722f2f.js",
    "revision": "9e3d12a74a557fb71f1b61fdd4178796"
  },
  {
    "url": "assets/js/41.65cff90b.js",
    "revision": "ffe78aa67778a329d2c22970e6986c42"
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
    "url": "assets/js/44.bbc0041f.js",
    "revision": "a7450be96c1c06a5a15dccb4ecaf043b"
  },
  {
    "url": "assets/js/45.c927d9a9.js",
    "revision": "70d2db8fce30b8e47906d41e70358374"
  },
  {
    "url": "assets/js/46.ca172793.js",
    "revision": "0c2669c49a64b1b33ce17307186e3c9f"
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
    "url": "assets/js/49.24244484.js",
    "revision": "13db0ff1c43b163bea964b4ce0db5390"
  },
  {
    "url": "assets/js/5.b06b0d86.js",
    "revision": "dca1e507aaf4a0a376ecf83d249293f3"
  },
  {
    "url": "assets/js/50.a2066d39.js",
    "revision": "2804c368c97accf584b4a6e507a0b128"
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
    "url": "assets/js/53.439b5e31.js",
    "revision": "73c3bff30abb744070689bfd7446d566"
  },
  {
    "url": "assets/js/54.2221a73e.js",
    "revision": "0ad648a4e5f3506b28adae950727bc67"
  },
  {
    "url": "assets/js/55.dcc483a9.js",
    "revision": "54b6330916bd87989cdc880372812fd1"
  },
  {
    "url": "assets/js/56.00fc6f91.js",
    "revision": "32fa8c1f50950bb70068e6365ad2b633"
  },
  {
    "url": "assets/js/57.9a0b243e.js",
    "revision": "7c40e060b223d924a8650a4a5b4d36a8"
  },
  {
    "url": "assets/js/58.26795fe0.js",
    "revision": "951115fa34693de4f49b3c654159cac3"
  },
  {
    "url": "assets/js/59.168fc3a9.js",
    "revision": "196487846ae271ca96c914550d29714d"
  },
  {
    "url": "assets/js/6.bdcae1a6.js",
    "revision": "59f1cf190b6c1cb1a22cef97996e49af"
  },
  {
    "url": "assets/js/60.cd7361a1.js",
    "revision": "b1a0853a949449a9d78791cee0b0840c"
  },
  {
    "url": "assets/js/61.caaaaee7.js",
    "revision": "97c216e1518325052cf9348ad9817f9c"
  },
  {
    "url": "assets/js/62.c042a8c9.js",
    "revision": "f06fa2ad52563f66b8049ce208df7045"
  },
  {
    "url": "assets/js/63.b3463b64.js",
    "revision": "c192f24ac3465b785039f6fa7f8921d9"
  },
  {
    "url": "assets/js/64.c4852597.js",
    "revision": "2e90f52f3779289b1d1f123cf7d1f680"
  },
  {
    "url": "assets/js/65.1435e00b.js",
    "revision": "a42c9074c927c923a4c9d064201f8923"
  },
  {
    "url": "assets/js/66.0f6a57e1.js",
    "revision": "e36c651e73c8fe2b098ba72fdbb099a2"
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
    "url": "assets/js/7.37078044.js",
    "revision": "27a6092ae7f5585388bad9868d5f5d6c"
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
    "url": "assets/js/72.4dfbd286.js",
    "revision": "353a461b43a23b6e40e9b504389f9664"
  },
  {
    "url": "assets/js/73.674b8e77.js",
    "revision": "139b12844332098a047b9c74ce97c067"
  },
  {
    "url": "assets/js/74.9a2eea47.js",
    "revision": "540d88e2030d63a0b851f5b14475ce13"
  },
  {
    "url": "assets/js/75.5f55edc4.js",
    "revision": "bdd145c2297bad35b98743391ab4427a"
  },
  {
    "url": "assets/js/76.095c9267.js",
    "revision": "1e5ece0ddb8c31c38351a6a1fddd3722"
  },
  {
    "url": "assets/js/77.7a999a04.js",
    "revision": "ecac7a355c61adae232ba930df64d6ec"
  },
  {
    "url": "assets/js/78.2cf53673.js",
    "revision": "4ce448786d0678ad73c4dcef247507ab"
  },
  {
    "url": "assets/js/79.865b1b7c.js",
    "revision": "d56ab4032edfde8a1b7bc48ed9b9296a"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.270c147d.js",
    "revision": "5ef2551ac93e323e1ceba154fa8c01be"
  },
  {
    "url": "assets/js/81.03f8e59d.js",
    "revision": "592d0b0a40be07839aa1d45fe89cd5b9"
  },
  {
    "url": "assets/js/82.0b206f67.js",
    "revision": "6013e157167ac07d1dfced258adba70e"
  },
  {
    "url": "assets/js/83.943b0a46.js",
    "revision": "8489ea39ad7140e235283feb70a8200e"
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
    "url": "assets/js/86.0d7024c1.js",
    "revision": "0ed4ae1242d7bbd666fa911986ad82d4"
  },
  {
    "url": "assets/js/87.2eb46ec2.js",
    "revision": "cfe3bb871c7a32f2d9c8f2f1ca74268f"
  },
  {
    "url": "assets/js/88.b8b244d2.js",
    "revision": "f2340ee247133719810c91c9fa46c9aa"
  },
  {
    "url": "assets/js/89.e0faddf1.js",
    "revision": "5f3c94eea3b6c837a7c8279a65b7aab8"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.54569142.js",
    "revision": "55c0c66397f091c0bf28cfc88e6506ff"
  },
  {
    "url": "assets/js/91.d9d7c359.js",
    "revision": "e5ab30db348a5f9b659dfd23c1418e8e"
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
    "url": "assets/js/96.3d8a0290.js",
    "revision": "e900d8605f53fea3919d27717c659186"
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
    "url": "assets/js/99.b06983b9.js",
    "revision": "503e539664c6836f934c92a78c068c40"
  },
  {
    "url": "assets/js/app.161e03b8.js",
    "revision": "023adf1dac142c1426d68d79c34c2a1e"
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
    "revision": "1cfbb5985996e794f9fecefc10a4bbbc"
  },
  {
    "url": "faq/index.html",
    "revision": "86dc4f79cea8fc79d2d5d52470f456d3"
  },
  {
    "url": "guide/assets.html",
    "revision": "ed50cf3264f8f1f1d2dac50382085c97"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "613727120436c27556b39dc812f77673"
  },
  {
    "url": "guide/coffee.html",
    "revision": "b1eb5526d9e0faaefd219d3f0ad2dfa1"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "977c08136eb63b60f7496c81f90a6489"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e1236b02e578704bf06456035e5cb141"
  },
  {
    "url": "guide/help.html",
    "revision": "dffe78ce3d3c727a03d8662d3870ce95"
  },
  {
    "url": "guide/index.html",
    "revision": "536c30215e8ff06778a12ee1eb9cd883"
  },
  {
    "url": "guide/lang.html",
    "revision": "7a1e6bb2b3b84e257c5fd381099071a2"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "859dec718fffe66db040b1e6d938a30b"
  },
  {
    "url": "guide/security.html",
    "revision": "9b3641c390aedd7f249ec3ddc5d3f462"
  },
  {
    "url": "guide/tags.html",
    "revision": "9958de0a3983dbebaa0e45919b67193f"
  },
  {
    "url": "guide/update-log.html",
    "revision": "cfba674ca1dd5d87e9ea779c15640e58"
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
    "revision": "21b87505ad73731d2fca40c18f1b2fc8"
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
    "revision": "31a7296e738a928f7504c8a87e68257a"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "d841d33ce4c747bce14285d87847b76b"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "137787e90cfe0faf6b892d710dfafd39"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "723170d8d51e945818dec0f5fffed359"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "cbf5b4f4f70498d5af72109a346dc599"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "7165a000f0bfa1e7fdc885f7341e3d1b"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "07bfadb4a39845d3327be01b84e6466d"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "994432b36dd791db7f1c8d01a463679e"
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
    "revision": "7a48bd3703404158916e394bf8456890"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "68b612565fd0eb0ac35c78660819da04"
  },
  {
    "url": "tc/config/index.html",
    "revision": "53f1c2cd9ca4840c31629ecc4457a35b"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "82cfdb346300522faa1a32c0514ed59f"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "25e717be8af5f9c968269cbaef878175"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "2f888547496a5f8af9bec38774e6afa3"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "26b1dc29887a007ac77998dae4e41a2f"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "e98e4efc77c705f98c19f4c7430ce880"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "33b9b2de48a9fd2bc8ae83386c65bff9"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "cbf3ef74f6b7a0a7c9e88729f13066bc"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "2a9085091b58ddc881e7e2a17c7b9be8"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "09e8edef797bc02ae9db5f78ebf0bdc0"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "6bb2a40a9e09ae4e3aaddc18baf91f4b"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "529365860cbc92870ac2765b77a252d0"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "e2458f38c721e28b84ee69c13f112e4d"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "8f1227fda352208e9c826763a5bbf05c"
  },
  {
    "url": "tc/index.html",
    "revision": "cb8bc98a24b10e141066f273cb1a9392"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "4cd3677ab26b770b6654ea585445fa6e"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "842b6973a61636b6cd732a9adeac93ef"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "1f23fcf9ef171726f908006c4b5a6e97"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "1753c06d930c9d4c7b353c1912762a9e"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "c1592184f3ff2e265ca70638280db53a"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "625e09ebe1e2844a1939ed3075bd0351"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "53f36f7e5151376bc42c4d8f0a395bf0"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "b99a69c84ddbe23fcc69891601eda7f6"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "b33b7837088ec32d5581c29f4b789066"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "89ff724b14b104c15e2320b88a43994c"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "e7453bc9303dade05b9e9fc14603a649"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "f714857809e45736fccdca6fa9f97174"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "4771e7359e7bf4f5643a0de6a51d48de"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "37f4c4cf39220afec921e70c81f355ac"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "47756c5a54797765cd8d45be4f2859ae"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "cc3dd9c2bf221169c2880acc92381c99"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "4dc793ee7cf8f01f2c4da0dec1f2fe32"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "3e6fa0d68210c5f7a5d4179834822d2b"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "e5142badd5f7d3bf4a90feb8571505ee"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "d1e70cdc8e23ba00d20c296c3181f6cd"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "fcf0b6ad7a121f368580dc896f0582c5"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "3377a91b3985630dfcb077c5bf7f81a7"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "46c18bca9f952bd4c43a026b10fe0909"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "067c95689bc8b37654d5f864e8e64fa2"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "36d7ba83ff9c2da22754d5a8ac03ec7a"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "5c2960a62cc9901eb5a8a730273617b2"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "101e9077227e11c41f4d423ecb3b2419"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "517b49e886ea034f765514b6cd3e59e4"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "cb3a57056b024c8e96bba4a2a172120c"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "649f3cc7fd435413625d7c9492c19b8c"
  },
  {
    "url": "theme/index.html",
    "revision": "8ab79ee7fc35b74c32cbcb7a9f875bb1"
  },
  {
    "url": "theme/senior.html",
    "revision": "3afc4268fa40796a59444923ec29ac95"
  },
  {
    "url": "theme/structure.html",
    "revision": "c8c4b2763138a7ae65589f3d9052111e"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "918678c7dba850b47ec50166f4ae9117"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "d5b17ba9395911385fa59e7bba24f7a5"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "481f3c94530d3db74654378eaeafa3d4"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "f15aab8b2d32e710cfaa2cbcfd9e44ba"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "3e6a5ba8d4929254c3148dabe419f2c0"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "3da1d45bec172bc1acbd85bd2fad6f28"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "3a8786e61cefc16a5cc3ae8f7ede49c5"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "aab6c3891bb4be4fe6adf940e1ccc716"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "557f03ef270cf83a3abb977da8afa141"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "e9cc614c9838bf4b7d2648869e6514c7"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "08254423f24e8ca2cade7a28ca4f7c0a"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "68750a8ed5ea2790e7298f94eb250cb2"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "88066bca9f4ae08d4acd72ddd78d1262"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "fed5bfd3d994f124b64026f906f4305f"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "06428b011c4992b1b637ecd8f9568464"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "3ac22e7ca1180c273073a40fd719af35"
  },
  {
    "url": "webmaster/server.html",
    "revision": "659f3ad39bd1c60ece47f65a97cfa5fb"
  },
  {
    "url": "webmaster/template.html",
    "revision": "351e269c48962d925b931e221f2003ba"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "27ba2193f76bcd53ed78bc10e0cbb257"
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
