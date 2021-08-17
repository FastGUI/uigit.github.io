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
    "revision": "c0e8d3872604b4c2d75fb3ded56489bf"
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
    "revision": "8fa8743190871b24e8e21ef0db89157f"
  },
  {
    "url": "api/web-design.html",
    "revision": "600f1c8bd0c3cbb0fe9b1afcbabd64c1"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.7785d7ed.css",
    "revision": "0263c2af5dd1a2dcb3f26120bac6bfa1"
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
    "url": "assets/js/100.03c95089.js",
    "revision": "0d6fc5791bcc8a84f901e226847216a9"
  },
  {
    "url": "assets/js/101.88729d4c.js",
    "revision": "6dc5801c5b423a7615f540b97e7a6f6d"
  },
  {
    "url": "assets/js/102.f68e4309.js",
    "revision": "5609c5d4ca3a8a35a2b1c12b15ce5e9a"
  },
  {
    "url": "assets/js/103.2fcb7824.js",
    "revision": "cb24e7c1d57e0567a3d109d17b906ea5"
  },
  {
    "url": "assets/js/104.c5c6963b.js",
    "revision": "610e63d259b70ab1668a3ade8ecd0d07"
  },
  {
    "url": "assets/js/105.82f9fe25.js",
    "revision": "17f174ccce455ba4d2429b4574c6b09a"
  },
  {
    "url": "assets/js/106.405879e0.js",
    "revision": "0da456bcb2bdaea864dc77331f6ece36"
  },
  {
    "url": "assets/js/107.1ba81a97.js",
    "revision": "402b487f33d0f922800dfcb687e2ab9a"
  },
  {
    "url": "assets/js/108.1a541803.js",
    "revision": "7f0ce41e3c066ec82bbe22a8edd56ad1"
  },
  {
    "url": "assets/js/109.315bfc9a.js",
    "revision": "1ee7a3925a9513b836875cbe63a40b59"
  },
  {
    "url": "assets/js/11.708dd212.js",
    "revision": "6b37e18344509a1830b240b95b6d2bc0"
  },
  {
    "url": "assets/js/12.655dd338.js",
    "revision": "9183ae4d59fb39a6d8f18ba5abb218f3"
  },
  {
    "url": "assets/js/13.bfef087b.js",
    "revision": "8e6c380c47f21997ce204a90a094988b"
  },
  {
    "url": "assets/js/14.41035e8f.js",
    "revision": "23009718168e5673e9381743df7949ef"
  },
  {
    "url": "assets/js/15.d9df4c0e.js",
    "revision": "4be7c72b4c7982f78d6e8fbcad484409"
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
    "url": "assets/js/18.baffa8fc.js",
    "revision": "1d82ae6b1929779a18b7a803a1bb0aad"
  },
  {
    "url": "assets/js/19.388f2e2c.js",
    "revision": "dd71555d482d759e60c0152cc85014af"
  },
  {
    "url": "assets/js/20.41c0e2c2.js",
    "revision": "4fface69f3f58d72727e6a44ce44112e"
  },
  {
    "url": "assets/js/21.337b407c.js",
    "revision": "af2c09b5fd261a647c2c550b30742c0a"
  },
  {
    "url": "assets/js/22.cdfc198f.js",
    "revision": "6de42b44007abe2f3d4edda48fd8525d"
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
    "url": "assets/js/26.ada967b3.js",
    "revision": "de419f52f0c08ca0056697d05ebed12c"
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
    "url": "assets/js/29.b2c0edb9.js",
    "revision": "09411ecbbe105559a367e5bb4164e03b"
  },
  {
    "url": "assets/js/30.f03db177.js",
    "revision": "a81f825ca6513ad903f8f81691ff23a9"
  },
  {
    "url": "assets/js/31.034d28eb.js",
    "revision": "71fbec5daf5dadce343706cd8db6c150"
  },
  {
    "url": "assets/js/32.67ef374e.js",
    "revision": "9499ec3a9c6115e3fbf583d8e25ec5c5"
  },
  {
    "url": "assets/js/33.c29034f0.js",
    "revision": "05bcb6a9aedc1883a2a94165af38e1b8"
  },
  {
    "url": "assets/js/34.9472bd61.js",
    "revision": "3749c649d4e67ab594f10839967422f7"
  },
  {
    "url": "assets/js/35.c42b5cdf.js",
    "revision": "5681b7816c661fcd925a3a92c047ae7d"
  },
  {
    "url": "assets/js/36.02f0de0d.js",
    "revision": "807451699bc66e87e29619ae9dba2e61"
  },
  {
    "url": "assets/js/37.ee635b54.js",
    "revision": "2036ff4e505603f0133c21f0932753dd"
  },
  {
    "url": "assets/js/38.06430958.js",
    "revision": "abf8c13b5a798556926b40de42e33137"
  },
  {
    "url": "assets/js/39.3267b284.js",
    "revision": "fdc7e3da691132ce2aa6206492f0816d"
  },
  {
    "url": "assets/js/4.9ebf53b1.js",
    "revision": "ba2787dc229d8a1e7beaf15c2f697a34"
  },
  {
    "url": "assets/js/40.6886b826.js",
    "revision": "495c77105286c18f1e83fad50af6bd34"
  },
  {
    "url": "assets/js/41.ada11a43.js",
    "revision": "14bd9eff6f6d829648c5e3cc65c828e4"
  },
  {
    "url": "assets/js/42.ac9c8899.js",
    "revision": "1923efe335262319cdbebcd1e1f43998"
  },
  {
    "url": "assets/js/43.682eeb54.js",
    "revision": "89f85fcb4c406cd974bd74ffec39f2fb"
  },
  {
    "url": "assets/js/44.66f210c4.js",
    "revision": "8457eab12af6ed8767fd67944f73e208"
  },
  {
    "url": "assets/js/45.e01fb5dc.js",
    "revision": "be55a8ee9d5b2ad01c3954d3489b814f"
  },
  {
    "url": "assets/js/46.80bac75d.js",
    "revision": "27ded14e7f13b4fe92f156785f0fb30e"
  },
  {
    "url": "assets/js/47.f3160640.js",
    "revision": "1196c95a5aba4c6c6ad1bb132ef56fd0"
  },
  {
    "url": "assets/js/48.e23800e6.js",
    "revision": "2c2e9adda10afc7ee401a924bc171caf"
  },
  {
    "url": "assets/js/49.2295ee72.js",
    "revision": "138a468f692d751794b31528a6c5a3de"
  },
  {
    "url": "assets/js/5.29a4c170.js",
    "revision": "67c7ae3423cfb5de4127591434870624"
  },
  {
    "url": "assets/js/50.96877bf8.js",
    "revision": "8696ac89c3de0a3f0c4845e3e11c9335"
  },
  {
    "url": "assets/js/51.789b91a0.js",
    "revision": "e0691b6f05031661c6a48c5aa91976b2"
  },
  {
    "url": "assets/js/52.bc15bde0.js",
    "revision": "572c17a3ac0129ed3c72a962a4c511b1"
  },
  {
    "url": "assets/js/53.fc67e547.js",
    "revision": "3e854c0595806eb264285b02afce72bf"
  },
  {
    "url": "assets/js/54.a500f3e7.js",
    "revision": "ac88a7dda1bb9ced9e216b1fc929ec16"
  },
  {
    "url": "assets/js/55.a5c6d397.js",
    "revision": "5a6948cc4c8109d11f1cb6a6286ebbcc"
  },
  {
    "url": "assets/js/56.4c0dfa02.js",
    "revision": "248457369ed8bcf5694f9bd56458a6f4"
  },
  {
    "url": "assets/js/57.d0a45b0b.js",
    "revision": "06212e7e8a006d5a6158be230e9b399d"
  },
  {
    "url": "assets/js/58.204d0683.js",
    "revision": "2a7ec8b677cd9b202b7277abe533bfdb"
  },
  {
    "url": "assets/js/59.7b69914f.js",
    "revision": "c24c70e851262f574b3a0bbaba42585b"
  },
  {
    "url": "assets/js/6.a9fa4fee.js",
    "revision": "affb9c4647d257771e4c64c5100b62e9"
  },
  {
    "url": "assets/js/60.9ce298d5.js",
    "revision": "7d737fbcb560338575c7482927ad26b9"
  },
  {
    "url": "assets/js/61.2edf645c.js",
    "revision": "034be8cc6cc84c0ebefa90fa50df967e"
  },
  {
    "url": "assets/js/62.e51c74fa.js",
    "revision": "87c8685017fb0bb9c03e633f9e080e5b"
  },
  {
    "url": "assets/js/63.6c05dc87.js",
    "revision": "d6f797b19e81efa5d96a88640466f7a9"
  },
  {
    "url": "assets/js/64.4a3a66cf.js",
    "revision": "51ef9b187674eda9ca2918e578c00e88"
  },
  {
    "url": "assets/js/65.69ae47da.js",
    "revision": "342d446d8c92ee39973eaa58e8acd560"
  },
  {
    "url": "assets/js/66.92161f68.js",
    "revision": "3983adf107da48c92c997b689b7429f1"
  },
  {
    "url": "assets/js/67.015390fd.js",
    "revision": "5da8727a83f53c104720176e373720b4"
  },
  {
    "url": "assets/js/68.122e7a94.js",
    "revision": "a3ffdf724bf65d364406be8c60b47f73"
  },
  {
    "url": "assets/js/69.cce46e3d.js",
    "revision": "731b50cb5e06bce54fb47ed98280bf15"
  },
  {
    "url": "assets/js/7.8fcade3c.js",
    "revision": "2730a6ba8a2f957e76b204f8c0021b02"
  },
  {
    "url": "assets/js/70.f1d9927e.js",
    "revision": "e274e651b6123a7e072d0e13d3ab768d"
  },
  {
    "url": "assets/js/71.6c4fff4e.js",
    "revision": "6df346069a6abef33b4b025160c40f55"
  },
  {
    "url": "assets/js/72.e27d9a6f.js",
    "revision": "0c922faed613b5d7589dc98772a39d1a"
  },
  {
    "url": "assets/js/73.2ab5a32e.js",
    "revision": "fd5bcd94cb2442c46cb09734258e5f3a"
  },
  {
    "url": "assets/js/74.d8188538.js",
    "revision": "d5386a8fdb95bc45ac63dba450090b9e"
  },
  {
    "url": "assets/js/75.98f03565.js",
    "revision": "ce125107bca817c2a724a6621117b626"
  },
  {
    "url": "assets/js/76.b9bd34f7.js",
    "revision": "01d60be9806aba80a843ce570ed2d830"
  },
  {
    "url": "assets/js/77.22caaf17.js",
    "revision": "039f95d5bc41cf3838c21cb99c2c3d13"
  },
  {
    "url": "assets/js/78.0fb52d3c.js",
    "revision": "9206e90f6d49cd1347adbcdb6c21481c"
  },
  {
    "url": "assets/js/79.ec478792.js",
    "revision": "1870e4596a8b70be095b04c5cb2b4466"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.f65d4da1.js",
    "revision": "e3008d00f272633da69897a5e1edc1d0"
  },
  {
    "url": "assets/js/81.2b9e7496.js",
    "revision": "82da7fcaedfdfb89461dc056c90cee07"
  },
  {
    "url": "assets/js/82.e0ae1344.js",
    "revision": "0e4f5626b2f8220a3d3464f80a3db995"
  },
  {
    "url": "assets/js/83.794b2557.js",
    "revision": "a5ec04faf987d12f6a16f37ae03751d5"
  },
  {
    "url": "assets/js/84.b16b7ac0.js",
    "revision": "a721c7060ba2ceb20921f07ca4b23540"
  },
  {
    "url": "assets/js/85.5795dae6.js",
    "revision": "54f79c3114449aa3d25f229532383f36"
  },
  {
    "url": "assets/js/86.fb5db240.js",
    "revision": "6ebec63024e364ccdd7ce6a6eac4a430"
  },
  {
    "url": "assets/js/87.57d6c32e.js",
    "revision": "7269002d49aac614fa21c35d93659a32"
  },
  {
    "url": "assets/js/88.842959bf.js",
    "revision": "37f358403167ee9efb435770656c1216"
  },
  {
    "url": "assets/js/89.c2de1543.js",
    "revision": "c5cf7873cc59ae1d4197482163f93e7e"
  },
  {
    "url": "assets/js/9.267236a4.js",
    "revision": "e7e8dbbf5bde5b9f5ecb2e270a35ab19"
  },
  {
    "url": "assets/js/90.24d7ad8a.js",
    "revision": "1cb84d78872e7a35596fc64f1d6e1af8"
  },
  {
    "url": "assets/js/91.a4b5f8ca.js",
    "revision": "2d6da99672fa47d6a0ba290d387b201b"
  },
  {
    "url": "assets/js/92.0251cf0c.js",
    "revision": "77abf9263a2d6d21cb3eade3dc40534b"
  },
  {
    "url": "assets/js/93.bb9daf25.js",
    "revision": "2b6d86246f23422d154dffe9449e6cee"
  },
  {
    "url": "assets/js/94.cbfca2d6.js",
    "revision": "2d7c75ad627b7a62226fc503ee12ffc4"
  },
  {
    "url": "assets/js/95.b53d9c3b.js",
    "revision": "926d9a72af0ed62050f3cfdb1efa2cf1"
  },
  {
    "url": "assets/js/96.f7f7d128.js",
    "revision": "62815f3f7203749e879e5fa219976d72"
  },
  {
    "url": "assets/js/97.2b87587a.js",
    "revision": "8fe2a4138fb92900ef8b83e05e08edaa"
  },
  {
    "url": "assets/js/98.bbd3aad6.js",
    "revision": "fa5aa866b64d980613788825e304e230"
  },
  {
    "url": "assets/js/99.ee94e323.js",
    "revision": "2508d175bbc80ab16a753ce389e4273d"
  },
  {
    "url": "assets/js/app.b4a5cb14.js",
    "revision": "b5e868bbd1fd1ac09c36a3fa03e0ab03"
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
    "revision": "260d07a4442016c903a64ab4b2cb9b3f"
  },
  {
    "url": "faq/index.html",
    "revision": "2f5ad9ddf3e1fda5842d5cff0bf23037"
  },
  {
    "url": "guide/assets.html",
    "revision": "3bad2518eb2701e29ca8c8f8cb5152e1"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "0c084ab6198dc23ef37239ba1beeb2a7"
  },
  {
    "url": "guide/coffee.html",
    "revision": "f8ba170f62282dd6e62567b089db9df1"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "326a3a528330344e561908115767ee22"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ef3c680c28db25948276ced074e87488"
  },
  {
    "url": "guide/help.html",
    "revision": "13b095b57ea215b5f3a65a24c5cd04ff"
  },
  {
    "url": "guide/index.html",
    "revision": "1e2633d75612ab2d726487dc83d0f711"
  },
  {
    "url": "guide/lang.html",
    "revision": "4d057845073a5672cdfdbdd201362664"
  },
  {
    "url": "guide/security.html",
    "revision": "f0f943d30af527eef511c20e4c76bf61"
  },
  {
    "url": "guide/tags.html",
    "revision": "710cca79ac209bced978e112554a4809"
  },
  {
    "url": "guide/update-log.html",
    "revision": "5dcd70588fd784480628611bffb3292a"
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
    "revision": "7f9517679fced8ba0b70b4ddda832096"
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
    "revision": "8ddf75d422ab45bad4e692a9967e0f91"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "9250ceab1cc0fb4a2648cf22d0e33000"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "85ce1e866f198f297ae7012e53c63c32"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "e7d511ac6587c9149f0ea2c79de47507"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "b30de62328dced1be6b452444cd0cb7b"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "570d2a3c3c74f6a36dc80c5b65fad368"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "8647e29418fb70c359ea7484ac3cf9e0"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "f10c1814a64dcd464afc8594ec38a89a"
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
    "revision": "8c16ecafeabb94a1b848694a606ccc79"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "0c13cd140da748d5f736c5d72d295e59"
  },
  {
    "url": "tc/config/index.html",
    "revision": "da9ecb2f0352e170292d4411a2b09177"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "2ea9222b781b8aa79e15a4bad7d931a4"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "aa55b43909753cc92860257a60732344"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "2967e5c4dde2278df4ecf541191f1871"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "e05e57240c0e1c1bbe6e238ed9835326"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "ce9237b57615320361f561ea8d0a5d2a"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "fec0dad31fc547eafd980fc9c575399f"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "453ecfbfecf9e7c7758800a737c6d88e"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "143e937bad57caa1397a72d6314b6e23"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "93864fe68bc9847deddd552bd5ab2808"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "f5682be8dd84e76bd974a347926e30d6"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "20d81b4275948f81e21e338cd54956ba"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "574884e3e483f971b2fee27107695bf3"
  },
  {
    "url": "tc/index.html",
    "revision": "f3ff5110b9c03de485c249ced1df9f8e"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "24eb7a8f58fbdc6ba720ad3e55f883fc"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "d92729abf717944da97743a305e448f6"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "eec60e0be3ed241ad3e55dafff1dc12a"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "0c806f64a7326d2d4a17c03a3caf7f50"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "aee4cdc234324e04c1d739fce429e62c"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "6de47b58d9b7b9b3b05d584ad19ac628"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "48362e92d8f2f34d6b8d058098653d3f"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "7ae4c40f26414a2671aac28fceebbde2"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "464043a3fcb4d957bda67d51a3cb699e"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "e8755d66e7fdad3054caaf7531040739"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "8db6b233b1d48f9234dcc6b3ec74bc76"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "7c89d078bf85fe8be31f734f450ad807"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "fb1d91936d55e96f6bf2c90580913145"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "862b43633ba69969cc3c7c66989727f6"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "e383e93f7fa5445f84e5daecf619697b"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "a111674e1d798a195bf0217e4db5a45e"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "6c006d935e97e716f1e32ef44b73b243"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "25f7e7d4d437c6e3189173fa59f0ef3d"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "b1d37aae7d67ed06dc6020f887cfe103"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "816c22269c3a02facbef0a33ebac77a9"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "0a2422a048d46f12492992a893f7f426"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "3fa84ff1f1bb6ce41ecfb5778dc090a3"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "3615123cc47f06025309c91d4069f5ab"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "5c69536e4db037f488b2a195c9f42bb2"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "0e92fc68dc0b0d8c663b0d08f0434e5e"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "52318c78daa4b714138397acb96e54c1"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "d04347de43a813f74668b61b2293948e"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "394baac5a2939ed7bd98a4a4b56a2415"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "95f32a6fff44008b5f08344dff3ab0c6"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "657e40187c35d908334028c8d3a0b981"
  },
  {
    "url": "theme/index.html",
    "revision": "507730291405d247a53da159605db008"
  },
  {
    "url": "theme/senior.html",
    "revision": "ef8e9ece72a396fc4e8d06a065f20193"
  },
  {
    "url": "theme/structure.html",
    "revision": "f66816c79370bb6f6ee3307afc98295d"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "5fdaf20e17dc78f861c14219bc271ee3"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "87d332e2e89e0308519f868ca76eca16"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "489d19838c148868ba8fbade0a0c337c"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "e6d304c03e1d33cf252aba0ace830922"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "5cd9e37552563c28912dd3fe053a63ce"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "2b0d81f21d1bcf1ccabb6fb577215f34"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "1cc0f60327b7465839c454d72c69b6be"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "a5c18879285d9af239c7938b06f4e882"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "94b14c1bf064383d0f6b48ac96f8c25c"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "883fe7348fcd360a1a30ac0d9d9b5905"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "d2af8903a12be55cb3e9fbcd8863aae7"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "b3c1d432b3276b66f8e7e5dc8515b38b"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "259bec81ff07b36c66ae318e45a88abc"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "4d173d5a1a1013876de5815bd9425f87"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "f1f5b473b864b349c3dca192bb639b93"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "0c2bc651052dd3fcd15e68d64622c957"
  },
  {
    "url": "webmaster/server.html",
    "revision": "b418ece00a3e234ee7511c9ec960e065"
  },
  {
    "url": "webmaster/template.html",
    "revision": "2bea82c35f24fbc6f38b925a3d0d4b05"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "e80528ba17e212a02292bf8430cecaf2"
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
