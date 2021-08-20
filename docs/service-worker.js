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
    "revision": "b5cb3150c76c9ea4541761ca5a4170fa"
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
    "revision": "6b7a20f1852c9858efd1f43119986613"
  },
  {
    "url": "api/web-design.html",
    "revision": "4c4d52602ce7e5c5d4008b6c1576eb17"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.9e97db6a.css",
    "revision": "7bdc6fb21c4e30c6a736e9ebaf85be8d"
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
    "url": "assets/js/100.c074f4d7.js",
    "revision": "bf67400ebae97b82e65b784363862e38"
  },
  {
    "url": "assets/js/101.95ad71e1.js",
    "revision": "9d842d917053a37186f4fc1e8a3a4bfa"
  },
  {
    "url": "assets/js/102.c3acec91.js",
    "revision": "c49b6b80b2187f3d42c0fc74c60d1c91"
  },
  {
    "url": "assets/js/103.de54a7c8.js",
    "revision": "f6d80ca64d7215a40d72322389ef0089"
  },
  {
    "url": "assets/js/104.388a06f1.js",
    "revision": "9206b6d6ec72fbd6fd4deae2c3bc19a9"
  },
  {
    "url": "assets/js/105.99930a42.js",
    "revision": "e06a9f82ab110b537a3f7fabd1f44783"
  },
  {
    "url": "assets/js/106.0d9ac496.js",
    "revision": "57e0f21bb618da0184b4c54feca9fee4"
  },
  {
    "url": "assets/js/107.44d8235c.js",
    "revision": "6e633947dcffaf24fc7c138f586b5a98"
  },
  {
    "url": "assets/js/108.fa4521ad.js",
    "revision": "95b96b933c7c814735145b413ae16d94"
  },
  {
    "url": "assets/js/109.cee58c68.js",
    "revision": "3231412ef328f336ba62b1847313c0d6"
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
    "url": "assets/js/18.baffa8fc.js",
    "revision": "1d82ae6b1929779a18b7a803a1bb0aad"
  },
  {
    "url": "assets/js/19.fa20928e.js",
    "revision": "e67dd888a186e5e04576fa3e34030d1d"
  },
  {
    "url": "assets/js/20.4ad51f64.js",
    "revision": "0bf60d31f3b97ed17be2b29a866d3224"
  },
  {
    "url": "assets/js/21.e777248c.js",
    "revision": "dbe21d98036a608a4c13c26af3ba4b91"
  },
  {
    "url": "assets/js/22.23c1d2f4.js",
    "revision": "ada0ba9cb06b5799566b599c075a6816"
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
    "url": "assets/js/25.86a37e2a.js",
    "revision": "010ef80292b056f55c91e34d63d08270"
  },
  {
    "url": "assets/js/26.1bbd6590.js",
    "revision": "7a62edb479bc9a623665c1039ead4927"
  },
  {
    "url": "assets/js/27.53c857ec.js",
    "revision": "0f5a3dde7a9b317619535f3c09e4b32b"
  },
  {
    "url": "assets/js/28.e4dca1f2.js",
    "revision": "f7f319c83e28c93d02e8fce92d5ca374"
  },
  {
    "url": "assets/js/29.dafe11d8.js",
    "revision": "1f5f819e6dc882d7c206304139480491"
  },
  {
    "url": "assets/js/30.4431513d.js",
    "revision": "03e9d9cde08021b021882508513e497d"
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
    "url": "assets/js/33.d28c24eb.js",
    "revision": "232c0d402b99b80b00d20859a60af7d3"
  },
  {
    "url": "assets/js/34.a297e062.js",
    "revision": "7af42534ece985e5569cce4b6fd9e107"
  },
  {
    "url": "assets/js/35.1755f350.js",
    "revision": "3eac65198f79ce51f13c75c6724253e2"
  },
  {
    "url": "assets/js/36.37b0f3ad.js",
    "revision": "1037a82b6461228a9abe5fd905a17724"
  },
  {
    "url": "assets/js/37.fab355ba.js",
    "revision": "74b4aeeb5285abec8bfd3038d365d34d"
  },
  {
    "url": "assets/js/38.dbab321e.js",
    "revision": "dbffdcb3970d1a6b659b4ce357e218e2"
  },
  {
    "url": "assets/js/39.dffc0cf6.js",
    "revision": "d935cff9cdf6685663ecbd04ac2b4a30"
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
    "url": "assets/js/41.f27b2c11.js",
    "revision": "c8944110bf350ef551268c0b4355498d"
  },
  {
    "url": "assets/js/42.c742b4dc.js",
    "revision": "7878795a3779c0a5bca1385e0ed2c7aa"
  },
  {
    "url": "assets/js/43.17d23b00.js",
    "revision": "256757e17ad5129d7b6f6d2e76bbcd1a"
  },
  {
    "url": "assets/js/44.80f24623.js",
    "revision": "65d02184276a30a05fdf02a89cee6767"
  },
  {
    "url": "assets/js/45.8785a76a.js",
    "revision": "9df9ca60ec8fd17debe43f29dcfa9c55"
  },
  {
    "url": "assets/js/46.ea2dd968.js",
    "revision": "5f0f285938112ee3d45047dfc91aa586"
  },
  {
    "url": "assets/js/47.f0e07e93.js",
    "revision": "3fd1243e77b9f7196e4564076ad8a84a"
  },
  {
    "url": "assets/js/48.28c2c046.js",
    "revision": "48e92a818d95827e0a9ec1013889ef81"
  },
  {
    "url": "assets/js/49.ea745101.js",
    "revision": "fb99a7dde3d21ef35dbcc64ea5cf3243"
  },
  {
    "url": "assets/js/5.29a4c170.js",
    "revision": "67c7ae3423cfb5de4127591434870624"
  },
  {
    "url": "assets/js/50.03db0fc8.js",
    "revision": "35b78a1bc8decdc4306fd8482be6fd0e"
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
    "url": "assets/js/54.426d4e07.js",
    "revision": "8882c4273c0505632a3be48ef4c7fc97"
  },
  {
    "url": "assets/js/55.e8a24784.js",
    "revision": "5b29b7ba90b1dd437a3d064d76f3ad65"
  },
  {
    "url": "assets/js/56.d6e7c7f2.js",
    "revision": "abae11345fc2f4d8946b49616fb6d8fe"
  },
  {
    "url": "assets/js/57.020af53f.js",
    "revision": "4574f768416d63735c3cf21f79a5dd42"
  },
  {
    "url": "assets/js/58.2f0ac701.js",
    "revision": "2d97b1f2cf9feb0485464aadfb99c18a"
  },
  {
    "url": "assets/js/59.8afda60f.js",
    "revision": "5845c88cc26a4ade8770053fa41715a9"
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
    "url": "assets/js/66.3a0aa6e1.js",
    "revision": "05547c14bb0656958bc2b96bc6c6d431"
  },
  {
    "url": "assets/js/67.e28dfe92.js",
    "revision": "e5b72dc42e1ea81ec27f73656d4d474e"
  },
  {
    "url": "assets/js/68.17701077.js",
    "revision": "0a2a6a887f4bd19259e634eb687da02a"
  },
  {
    "url": "assets/js/69.a1e12380.js",
    "revision": "5b699baa56ac6c67a76b8d9139922d5b"
  },
  {
    "url": "assets/js/7.567e98f4.js",
    "revision": "fa23c03c38d2e83b37f794552982c93f"
  },
  {
    "url": "assets/js/70.67f9aee3.js",
    "revision": "6313f08de206b065a8f3a716c2159328"
  },
  {
    "url": "assets/js/71.3b7dbd25.js",
    "revision": "eb9451980194a2df84ac121f0709468f"
  },
  {
    "url": "assets/js/72.92c4ecf0.js",
    "revision": "26b478299af195ddf0945477e1feb41a"
  },
  {
    "url": "assets/js/73.2bd4127f.js",
    "revision": "7c1e964b21ad474ab7e26b7c6ca3a681"
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
    "url": "assets/js/77.13196a4d.js",
    "revision": "3c0b71ea34ae56a2f0d0bf65d1e9b902"
  },
  {
    "url": "assets/js/78.0844f8da.js",
    "revision": "6ee0f709fd6a921c3872ce9d2cb69e67"
  },
  {
    "url": "assets/js/79.88acec97.js",
    "revision": "6dbf736669a9605867ec595f0295218b"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.d2c2d783.js",
    "revision": "191268fe9fbeb146b830abef157ce159"
  },
  {
    "url": "assets/js/81.1abdf039.js",
    "revision": "258e6518266e2e92f477b6f79cffe100"
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
    "url": "assets/js/84.66c82632.js",
    "revision": "81d85739af871e1f769745fc5cea8693"
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
    "url": "assets/js/88.e1b2ad87.js",
    "revision": "86e3556977d12b685e4d7760b817e797"
  },
  {
    "url": "assets/js/89.daa1fcba.js",
    "revision": "ddc1e306df3206e166ef4723f1ee9e75"
  },
  {
    "url": "assets/js/9.e75c031f.js",
    "revision": "6464d7023e29ee044cd0d437184e3d44"
  },
  {
    "url": "assets/js/90.873f395a.js",
    "revision": "59e8ca71e111521438662734e0b8c580"
  },
  {
    "url": "assets/js/91.300b67aa.js",
    "revision": "d19dc7d5092b6712945bc6cd78def3fb"
  },
  {
    "url": "assets/js/92.ce2f3a67.js",
    "revision": "ca2f9b8a7fed8f39ec318c4806dbb8ed"
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
    "url": "assets/js/95.646373ce.js",
    "revision": "9207f1f8dc750c78c3b467a3c1a58e3f"
  },
  {
    "url": "assets/js/96.c3a0cf16.js",
    "revision": "bacafdd60a4ead121f6f8c553ba54e6b"
  },
  {
    "url": "assets/js/97.3b2a212c.js",
    "revision": "8c1c433961770e25fb6749471080e53e"
  },
  {
    "url": "assets/js/98.94f5b255.js",
    "revision": "7206ed33d792f3b3ef224554ed6fb753"
  },
  {
    "url": "assets/js/99.d7989fcd.js",
    "revision": "78d11a8fd3cfe2d09b0ded2e29fc842c"
  },
  {
    "url": "assets/js/app.b37f8cdf.js",
    "revision": "a1c5e76cca44544c8482212f7a7a57f9"
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
    "revision": "7c133120583c8e89d5c9c0dd2a0fb560"
  },
  {
    "url": "faq/index.html",
    "revision": "90f36c7ace499ee0092dad4053e40479"
  },
  {
    "url": "guide/assets.html",
    "revision": "f0ba0e7812ab46e08cb338e7e6418c19"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "23bf7464231e71fc64c0f505b57e7d5f"
  },
  {
    "url": "guide/coffee.html",
    "revision": "beee86a1f6f773f74d1df99d551a3a16"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "f1cfab24143308119043ee19e5998da6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "64f634b0241b3eaaeb757af99301020e"
  },
  {
    "url": "guide/help.html",
    "revision": "3679328349d4159db6adb09c4240ab9e"
  },
  {
    "url": "guide/index.html",
    "revision": "f010f815f21346cae2082eb376d926eb"
  },
  {
    "url": "guide/lang.html",
    "revision": "cce4c80511d30a6bf57ceeaa067d15e1"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "ec6fa5ea1b104bb5dabf63c489e01277"
  },
  {
    "url": "guide/security.html",
    "revision": "5c7a32db468e36ae563e9459d75fc430"
  },
  {
    "url": "guide/tags.html",
    "revision": "44ebb434d1f0445011dde0ad61986fd0"
  },
  {
    "url": "guide/update-log.html",
    "revision": "6f83f64ad31d4fdeef18ac9a366b0c20"
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
    "revision": "2b5d7b0f6475893f40e21b71673871aa"
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
    "revision": "42ea94a39f547fd8d43d3f45835e2582"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "641598b8eb2548f271e8a56784b661d6"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "3bc9b1137a256b2f8e63634be7fc6b97"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "032e7ed9781d7d194b308705837440bb"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "cb7de6c60e7fdc996d676b734226b2e2"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "ffca12f029486069bf00c1811c025243"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "0d74962eea82ea9eb6dbbb51b86f8a38"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "1d855d1374657838ca53372bdb48ff6f"
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
    "revision": "ed49648a6e4b6b4c2401b40e1864cdff"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "8f1c697091aca72b08637ec6e5186d0a"
  },
  {
    "url": "tc/config/index.html",
    "revision": "026362a83e2bb7997aed5dd0fa548398"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "66e351a475038fc772943795fdbc8dfa"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "376385053614a350645a04ca9570d288"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "3ea3fae927d2aaa2cea7deb617c08dcb"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "08469e86cd2d580bced6cfd71d3f8774"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "9cfb3382151e343444274650d8c0f769"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "4b9beb6e836389f62e49803b46e9f901"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "521db3cadaf3633685e28e472d4df27f"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "1ae1f7f59cc62c992588dcc60eaa6e40"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "16ad0d711a3a7b145d6df91454f85e76"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "fc5dc6211c016ce838be38329cc109ed"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "30ddabd95b17df54266399663519c0c6"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "d50962b20a936f4aad30d4bce0e3f002"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "43b10e91b939a841a2e1d89b5f19533d"
  },
  {
    "url": "tc/index.html",
    "revision": "b1f81065bd9720c5c843752193a2a21b"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "5e96f0ccbd486ec20a8058e941ed4acc"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "df97ea83d9dd34a69e6292f83eee4a1e"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "a95ae6f278023e00833931146f46b542"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "4ffdeeb0d2b7dcb83993e924e0c7ab21"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "5c891fe5160ff5c044afbd9d899c14b0"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "1f3fdceab482abf9282e20456066130f"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "0f1826a351ef7c1e2f2b4016f1aa6646"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "788fbb0498696f64b8ee7454eb9fd12a"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "bef11245baafcf2b7a62f5d3bcdbd283"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "d76e8ec9a482d007e3b931a12ac0096d"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "75381309597a9b9cb566f244bd5b7f1f"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "8d9324e04843dc2afa084dd10a7c808d"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "be1c92da64a9afb8a79e5bcb7e4e1b60"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "5dbdeaba218aee70a47569bda2199984"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "76f35590a49a53565638a2ac157c79ce"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "e9e4d04e7dac0b455fae770c18a8c339"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "a536054a68f18748b9f33a636e0b5d2f"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "8c030d1e62bc343b0c2d61f53b317a67"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "6aa92fbf8890c3fc8e18be004cba7438"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "025915d155483c7020a1816f625705e1"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "a11aa2245076741f9483e64b25bb3c57"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "3968a066caa2d1c0fa6576bfaccf6a20"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "a6c383eaa770b7fe1371550b7e22be8c"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "88ed9397fb87e2be01388c8fbb78b022"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "82f51c8eae0496d3c1f3ec6bba9a6fb5"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "adfce2d04b3b4d36e60b275bca24e9c8"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "1d24442863f335d7ba941588f09967dd"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "9162ab1e4976baf88b48b3473a5e17e8"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "7944b935cb6f1ff15f482dd99ac0c625"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "a7097220a0a34fb39acb284fc50f398c"
  },
  {
    "url": "theme/index.html",
    "revision": "71991c37cffcb29a0fbda478c3882399"
  },
  {
    "url": "theme/senior.html",
    "revision": "9c1f861d3de189a063c90b2c83d4ae6b"
  },
  {
    "url": "theme/structure.html",
    "revision": "7521ede48609969fcf9a13b1eece0c13"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "878ea424e945e03f39d0eca715dd78f9"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "57726b13927693592e7b5b4341547641"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "71bd7115da4e56fe773a693c61a45c5c"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "386115afbf6191cb59bc370374f5b37c"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "7936b28f8592d0f6a02d1b2ac7b54183"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "1c2013bc3aa1f8c8e533775d41c759aa"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "743b632a9babde8b8ea8f8e2c1e1e8ba"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "209c592bd5e15bc6ab8b1a228ac7b9b2"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "3dd0e45cb963747d820586e1c7444a02"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "4a808b85b9e8e46e86e8d0c4235ed313"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "f6c0002de48244ba68a12f98236a662d"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9e6ad6d3c424238f36e4f0a52201368d"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "c829b66f12b40dd0d04627c17c58d138"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "3c2cfb75f268c9845b093d0f7c3fde3b"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "a75f554c7084d091538b338191bde6ad"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "6da06f757401e779d3b3b4e6ec9875e8"
  },
  {
    "url": "webmaster/server.html",
    "revision": "174e5acadd6c8c7e7b39e42ef74ede6d"
  },
  {
    "url": "webmaster/template.html",
    "revision": "bd5da660c74ab7a572b523e9ca312909"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "045ee39d6544e8fd654f17bb21837da4"
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
