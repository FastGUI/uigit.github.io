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
    "revision": "1760d00248c3b38c190972cef7be3242"
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
    "revision": "a8bf9b6239efbc0fa9edc4b946ac37ea"
  },
  {
    "url": "api/web-design.html",
    "revision": "f4f8dd5440ea60657eea446535bac800"
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
    "url": "assets/js/100.25f7e7e6.js",
    "revision": "182754dd204f20ba2e65cdd269d15c00"
  },
  {
    "url": "assets/js/101.130ffab5.js",
    "revision": "c950a959b27605e88e297a0d2fe82005"
  },
  {
    "url": "assets/js/102.3b7193ab.js",
    "revision": "54d6a082d632dd2f6966c66e98ac96e1"
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
    "url": "assets/js/105.e3f428ef.js",
    "revision": "88e3b99bf11ea4b958ee0d1a8af5d402"
  },
  {
    "url": "assets/js/106.9d1db701.js",
    "revision": "49dd1ed0edf5f0401415998ae6edaa98"
  },
  {
    "url": "assets/js/107.931598a1.js",
    "revision": "c8850190cc18db5e5dd550ac1593912d"
  },
  {
    "url": "assets/js/108.d38e1773.js",
    "revision": "8d5a9eec7ded55c55ab46f0476867b2b"
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
    "url": "assets/js/17.7163bf50.js",
    "revision": "58835270b75d5c0e56e3c70fc881da0b"
  },
  {
    "url": "assets/js/18.82a568b0.js",
    "revision": "43b648cf19148eda0a0456ab5ec340da"
  },
  {
    "url": "assets/js/19.3a68fe75.js",
    "revision": "302a19d1e24170e8030aebd2159f4dd9"
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
    "url": "assets/js/22.c49a527f.js",
    "revision": "eb548176e22e9aa578d844732e0850b7"
  },
  {
    "url": "assets/js/23.e69970e8.js",
    "revision": "715eac62edae4452adf186e598dcc0d7"
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
    "url": "assets/js/26.9f3e21e9.js",
    "revision": "10cd372345dfd10d858d43dfbd280212"
  },
  {
    "url": "assets/js/27.662b6fa4.js",
    "revision": "560c43d3f8150cf479f108269e7db78f"
  },
  {
    "url": "assets/js/28.e4dca1f2.js",
    "revision": "f7f319c83e28c93d02e8fce92d5ca374"
  },
  {
    "url": "assets/js/29.291140bb.js",
    "revision": "9defbdee46afd3b34ef55262464d6274"
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
    "url": "assets/js/32.44256c16.js",
    "revision": "548dd348f574b3dac8bb7337e05e7581"
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
    "url": "assets/js/35.c547cd07.js",
    "revision": "25ee45ab71ab6410fb913dc542816c96"
  },
  {
    "url": "assets/js/36.37b0f3ad.js",
    "revision": "1037a82b6461228a9abe5fd905a17724"
  },
  {
    "url": "assets/js/37.f5fc4e0b.js",
    "revision": "a8c4eb69baa206379ea4d6e456b60c84"
  },
  {
    "url": "assets/js/38.1d5eb969.js",
    "revision": "1eb65878bc5a8dd44f7637fa6446acbf"
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
    "url": "assets/js/40.c27f5980.js",
    "revision": "62875bf3b8fddc8ca8c3cf1882ac8898"
  },
  {
    "url": "assets/js/41.ac5ff79d.js",
    "revision": "211194262ebab22c8f1cdb239c322af7"
  },
  {
    "url": "assets/js/42.1cea9561.js",
    "revision": "bbc0db0485faaa8977503734dde4cbc7"
  },
  {
    "url": "assets/js/43.fc820f9b.js",
    "revision": "4983aa63aa10c2270288b32ca48f4d6c"
  },
  {
    "url": "assets/js/44.77fc2b43.js",
    "revision": "cf1b26928134c4ebdcc5fe51a63533ff"
  },
  {
    "url": "assets/js/45.11903342.js",
    "revision": "7a7725324fb832dc4431ead2beba73dc"
  },
  {
    "url": "assets/js/46.5b9cf4c7.js",
    "revision": "ca7ed49380ee76272cfc8566a865ff89"
  },
  {
    "url": "assets/js/47.343af1b4.js",
    "revision": "41ab08f5c5c50efe56b998c1d4a02afa"
  },
  {
    "url": "assets/js/48.0015b8d2.js",
    "revision": "94a757fc497def70fbc64d5f93e047bd"
  },
  {
    "url": "assets/js/49.a1c695f2.js",
    "revision": "e5270682e3712cd99b01562b57888b25"
  },
  {
    "url": "assets/js/5.944abb20.js",
    "revision": "9e0a7de0990f74ff9595b7e259c2a79f"
  },
  {
    "url": "assets/js/50.550b3784.js",
    "revision": "b2eb2c01fdf65f3b3643a35cd4b70741"
  },
  {
    "url": "assets/js/51.f18ac484.js",
    "revision": "7a3ac0df993936a0a2813eec203b77d6"
  },
  {
    "url": "assets/js/52.91a4cee0.js",
    "revision": "2178ec705f139db129a725555f5a519a"
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
    "url": "assets/js/58.c420f299.js",
    "revision": "c5f28e85e1554fb80d0d094ccd1da4f5"
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
    "url": "assets/js/61.02243759.js",
    "revision": "9e653449a6cd76ae7a2c68ff702afdbb"
  },
  {
    "url": "assets/js/62.4380004c.js",
    "revision": "a4bc505ae0f23decee92eb294b633519"
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
    "url": "assets/js/65.2f2b79a8.js",
    "revision": "4cf400873ab44ce22824347e2cb3a96a"
  },
  {
    "url": "assets/js/66.66b677c5.js",
    "revision": "715521995613389d65ae6d4c1d01eb6b"
  },
  {
    "url": "assets/js/67.a0e67d29.js",
    "revision": "34173a32bb8532b2fbde59cf19feeb58"
  },
  {
    "url": "assets/js/68.04409463.js",
    "revision": "074aadd3a185001ba91fe57f02899210"
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
    "url": "assets/js/70.33cb854f.js",
    "revision": "163aab7bd93eb0d99896cdbd6414c6e5"
  },
  {
    "url": "assets/js/71.8074da89.js",
    "revision": "ff0238266added00d81791f6bd3b853d"
  },
  {
    "url": "assets/js/72.9744b059.js",
    "revision": "6bb8a8e2bc9f3382f39e34ac76da8e82"
  },
  {
    "url": "assets/js/73.4ff9c299.js",
    "revision": "1b84d5112298ef1efb5b1a5fc01fd2d1"
  },
  {
    "url": "assets/js/74.b84b7ec7.js",
    "revision": "1c74e60bdb177511e4f1544471b58fc8"
  },
  {
    "url": "assets/js/75.163711c5.js",
    "revision": "e64c356614b76b8bcf9d781b221ea036"
  },
  {
    "url": "assets/js/76.c32aeb1f.js",
    "revision": "c524b7c8ea44bdd4315de312f9b6136e"
  },
  {
    "url": "assets/js/77.d9daf226.js",
    "revision": "be0e120206ec4ac03dc2eaedaabbb241"
  },
  {
    "url": "assets/js/78.258c0300.js",
    "revision": "be180086a203a580de71372171c11985"
  },
  {
    "url": "assets/js/79.e9e7ad7b.js",
    "revision": "955b74d87a11e20b1fed3a6ef42f6a7a"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.83e4400a.js",
    "revision": "35a3ac5a4a74a2fcb9e85594d855cf6d"
  },
  {
    "url": "assets/js/81.38985e17.js",
    "revision": "ee4b28b505aef1aca33a2cbd30dd2a20"
  },
  {
    "url": "assets/js/82.0b206f67.js",
    "revision": "6013e157167ac07d1dfced258adba70e"
  },
  {
    "url": "assets/js/83.4afa6076.js",
    "revision": "ada84a52ef7ae1702faf5f99833c0c2d"
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
    "url": "assets/js/86.bb114182.js",
    "revision": "db8ff8f16ff74b35e667764ac25dc685"
  },
  {
    "url": "assets/js/87.062d15e8.js",
    "revision": "f9cbaed5a2c85f2c3b96714ac1ed4e5c"
  },
  {
    "url": "assets/js/88.b611af24.js",
    "revision": "78e4454d18a2140c25a9fa8bfdabae3c"
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
    "url": "assets/js/91.276c3198.js",
    "revision": "46706214988e17a4356245b8ecbada26"
  },
  {
    "url": "assets/js/92.c6d45453.js",
    "revision": "6104378ef152a96d0d35653c7787b105"
  },
  {
    "url": "assets/js/93.69ca5c67.js",
    "revision": "59cd046d2e442fd4946c8073dc821e40"
  },
  {
    "url": "assets/js/94.57d001c6.js",
    "revision": "7c07ae06deff6130f13f0ac3aafc0767"
  },
  {
    "url": "assets/js/95.1ff290f3.js",
    "revision": "5150d6e42178870c798b35508842f0cd"
  },
  {
    "url": "assets/js/96.822264f4.js",
    "revision": "bfac1ee4ea971daa9086e4d0e7ca5d3f"
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
    "url": "assets/js/99.d7989fcd.js",
    "revision": "78d11a8fd3cfe2d09b0ded2e29fc842c"
  },
  {
    "url": "assets/js/app.4f34e91f.js",
    "revision": "6520e1fa5dd1cf9bb01b6cfc748b6cd0"
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
    "revision": "191aaf7be8199d593ae6b5faf771650f"
  },
  {
    "url": "faq/index.html",
    "revision": "feb4c05cd4e0fe0877a2c5db435ff54a"
  },
  {
    "url": "guide/assets.html",
    "revision": "15e65a53e3429b0f6493209095229f1b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "f84d62c0ea7eeaf0de4129631c85463a"
  },
  {
    "url": "guide/coffee.html",
    "revision": "d819fa40050d44c3ea479c811357c4b9"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "fe6f6cf77e22d7f61576c8da19d033ca"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fa7c7226e89d1f4ddeb75591fada2c18"
  },
  {
    "url": "guide/help.html",
    "revision": "96b4468b783a65654adf393859efa74f"
  },
  {
    "url": "guide/index.html",
    "revision": "e77076bbd490b8a639451eb349a6e80c"
  },
  {
    "url": "guide/lang.html",
    "revision": "0c54172204cd735fe178a6fed24007e3"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "24ad4078160d67bc09b49f2566527ed2"
  },
  {
    "url": "guide/security.html",
    "revision": "81ff33987091bebbfccd6b4e4762ad61"
  },
  {
    "url": "guide/tags.html",
    "revision": "e817b181ca51a049c8db127a31243c26"
  },
  {
    "url": "guide/update-log.html",
    "revision": "2b16a90d9b9d06af3fe24262d55678a4"
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
    "revision": "7fe07606debaa582b01146328f3f02a2"
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
    "revision": "fe30e5b01a55ac4dabc8eea90f2ec75f"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "86e0007859f1b53d8b3c9fb7daa79834"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "dd724fd620065e6e28c8562d851856bf"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "8088b5f14c672afbadddf095267a13bc"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "40d5dceab8642a72147867ea2960d92a"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "7a9f075322f264fcaf638564385a5ae1"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "7744cd97f41ac1e0869915fc25810251"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "f56746d9510f17a37a5ec0e1f34afff0"
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
    "revision": "c47219fd001286f4b3ff62e358c878de"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "8b5f102bbc06545974f8681ede3d09ed"
  },
  {
    "url": "tc/config/index.html",
    "revision": "079222e8b6ef8ccb1ad37d0b11045b46"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "507ce95b30370701e5c617af83280264"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "47e30ea757c8e463e0bfac55ea78d76a"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "f4735698941bb38762152d076f1176c0"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "9baaaa47d43e08fcdf30c102e779d240"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "db4ff09da382053b3c6ac05bc744fb44"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "e1f71bc3b24741560c9d8858f7c6f267"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "4db3893c703dffb98cf34be03c8951b0"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "1ff12b3090c87288197fd8a6bef3ed6a"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "11c31a1f2466c87535ff8bb4bc78defd"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "518d42ea2719e1d3b3a1ca9a4ca28713"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "4bf958fd917a9b5e30b530a8dce900e4"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "0ab1a43c36bd82c7981dc87b640d9c69"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "3043952ed5869a1aa21f134ddcc5642a"
  },
  {
    "url": "tc/index.html",
    "revision": "2c950a96fb890537066b70f9178c659a"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "beac81d2480d000976b8639667be9135"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "2075f57c4c658e2d28cd032878731725"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "7b9b196a09eb2756e5c2a62846fbc7d9"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "9c3dd642e88b0e2574c7219b98920a7c"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "bd699225141ab187ed8ac56cba1e394b"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "cf55ad5225da2de16e06c9f08514041e"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "fc2f2dc5b8655038cc3f9d8579c0c5f8"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "f4d4ffedfad8769dd45eb9385320be02"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "e1f00c8d0130b03d59e4b6ff1f29e317"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "9df68612121e96ad5e4c9fe3d91f7bdb"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "635e0b8482b5ae12218bb1615b4c4ba4"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "0f0aef14052ffc9a84c2a21edfd1ad5c"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "d764e8bda573807a9f633b4eb839e5bd"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "f3736da125275d1459cdbf9c7bb0d5c7"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "4ee9b1b2b6b5138a921382e196fa1ed6"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "b7ea0734e305b8b31c65dc35e79a7357"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "591c3920a7b49cfb9f82d8531428b860"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "2f28334bc444877584bb70eeb8adbbd7"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "eca4b0fc1249cc0dbf8d03de9fce612c"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "f2a017205920537dca7c9b9b6b82dc9d"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "f09526ff907f795f4c7bc207bd684707"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "6660c660d2e6f3f995019e374ba32966"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "97ecdb6b8bd416a099bc381d76d32752"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "c73dc9b93a0d70bb8f648f9e7d110956"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "810a426a6f5906bfe7122c995bad0b60"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "9b9d1ce8445e21cc1e42e7c91937f98b"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "5a623dc9a241714ba3c6471fd995756e"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "527ab462c933d6b2ecd4b1a7ba4b46f8"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "893d7c669686972bb8d5ab91f9c2d3c8"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "78e6b1467ab725ddedfa86fb3fe82c17"
  },
  {
    "url": "theme/index.html",
    "revision": "191ff119a0353de1d7f8d1758d80fdb4"
  },
  {
    "url": "theme/senior.html",
    "revision": "2ddfc729f0dfb59dc70153bb8eb51c31"
  },
  {
    "url": "theme/structure.html",
    "revision": "b6f2eb314572c359530290f8ae5c1bce"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "6758687750b6c6555cffcc0571f5df64"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "7653a49d067b3954b39d884128828a6d"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "40dfe4e8472882cc2c59ca9141b76b1c"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "d7ab50bb38e851eb9659767884467c24"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "860c0ad03574135747211fb2272165f6"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "f509c54b7a378fddceeea87e725d3152"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "f047fa938eedb3cfded76fce13223a99"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "eadbf60a10783567a40d4b085508ada6"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "f26ce69865b99c535ddba2ee127e0201"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "2b5cd98f0319b0bdbf5f9c0a022c3a2d"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "970a0de02b5ff82e381d5a9bacae75de"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "a3ac2c6b82f4372751d1a5f616e2fbe0"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "de208217b8d2be0fcbf9685d8f70726f"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "aaf1c00473c3052eaebc9bada7c9726d"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "e7e78444fa1909691a2d82f80d74be1f"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "999df660d4c6df57bc0095a2f03f98c2"
  },
  {
    "url": "webmaster/server.html",
    "revision": "a58d19a7c643575d28b4b196fe3d47dd"
  },
  {
    "url": "webmaster/template.html",
    "revision": "2dbd239490da2c63c11adaddb4c8c835"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "45f9aef7b0573906f89cd89e0fc99ac4"
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
