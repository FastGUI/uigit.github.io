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
    "revision": "a6b85233ee11d06f454b68e6c477c6c7"
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
    "revision": "69a73984bc2869a542362bffd4457db2"
  },
  {
    "url": "api/web-design.html",
    "revision": "f545ac1be8cc1cc7d17e0c6d415ef5eb"
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
    "url": "assets/js/100.6c617d34.js",
    "revision": "0bed228108f1c5f7badf26298bccf69e"
  },
  {
    "url": "assets/js/101.b4efb35b.js",
    "revision": "714a330b372d9f9d6def1e3d23b47a87"
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
    "url": "assets/js/104.d189b941.js",
    "revision": "be6de1181db3c85bb8d5346e58d9aea2"
  },
  {
    "url": "assets/js/105.99930a42.js",
    "revision": "e06a9f82ab110b537a3f7fabd1f44783"
  },
  {
    "url": "assets/js/106.77605f1c.js",
    "revision": "b90a78d5af045e739f0fa8942ba81d80"
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
    "url": "assets/js/109.f09ebaf3.js",
    "revision": "5c873090da436db4868a6d3ab8f3aacc"
  },
  {
    "url": "assets/js/11.6fca27a1.js",
    "revision": "4c0f82bbca3a55076b7d7557e18db0e7"
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
    "url": "assets/js/17.67a5e6d3.js",
    "revision": "f79aab64b7483f3febfd291b39d68ed7"
  },
  {
    "url": "assets/js/18.5f7f3103.js",
    "revision": "623c504eb6cf6da9381325655c51a5f4"
  },
  {
    "url": "assets/js/19.d59b6e79.js",
    "revision": "1bf9c19bcf5dfd944c65139109e3e53b"
  },
  {
    "url": "assets/js/20.4e1f75b9.js",
    "revision": "0fdfd340928105df565ee0f485d5398d"
  },
  {
    "url": "assets/js/21.ccc012c0.js",
    "revision": "e60c7eb3c62565c22ab99679e9eaed33"
  },
  {
    "url": "assets/js/22.3d184fc4.js",
    "revision": "2897f29ef19503be75037755a253c43f"
  },
  {
    "url": "assets/js/23.9e7a5763.js",
    "revision": "a75715034ef225ada435bfc3d61db5c4"
  },
  {
    "url": "assets/js/24.5203028b.js",
    "revision": "1d172aaf17bd4dcc8fc1c637729515de"
  },
  {
    "url": "assets/js/25.8c9226e7.js",
    "revision": "23d529fd9607c1820f2288c01204968a"
  },
  {
    "url": "assets/js/26.1bbd6590.js",
    "revision": "7a62edb479bc9a623665c1039ead4927"
  },
  {
    "url": "assets/js/27.58a798ea.js",
    "revision": "d7fe814d35f5cfc7f5ec0340e1af2911"
  },
  {
    "url": "assets/js/28.a82b46f8.js",
    "revision": "29ab850a99a060b0bf4cee1b09d83a41"
  },
  {
    "url": "assets/js/29.0a0019f1.js",
    "revision": "0af0589b615ed1b776c578ac45dbe80c"
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
    "url": "assets/js/32.4ed60888.js",
    "revision": "285d1e4ed3aa3c7de8f585f0f372f493"
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
    "url": "assets/js/35.b2d54de9.js",
    "revision": "d336872347a4b408c0ab80c1cd852f39"
  },
  {
    "url": "assets/js/36.37b0f3ad.js",
    "revision": "1037a82b6461228a9abe5fd905a17724"
  },
  {
    "url": "assets/js/37.0f508a4b.js",
    "revision": "65248632247446b259ab00c45cdab971"
  },
  {
    "url": "assets/js/38.6072dfab.js",
    "revision": "134496c8b1fb82ce76206a9e232d7b20"
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
    "url": "assets/js/41.7a2814b1.js",
    "revision": "dfea93052bfaac91a1e5abf0af557fa4"
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
    "url": "assets/js/44.bbc0041f.js",
    "revision": "a7450be96c1c06a5a15dccb4ecaf043b"
  },
  {
    "url": "assets/js/45.bd2b1165.js",
    "revision": "500311eea93dfd2b6b4526b88c6aff08"
  },
  {
    "url": "assets/js/46.0390e157.js",
    "revision": "b849e1b8dd90de5557aee64d2d366768"
  },
  {
    "url": "assets/js/47.70537ea3.js",
    "revision": "3f3f19e9595b89ecdb05a7d351bc1c18"
  },
  {
    "url": "assets/js/48.cd486f6a.js",
    "revision": "0505bf8d186c00962b5a4b3f0e4918b6"
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
    "url": "assets/js/50.73e5557e.js",
    "revision": "f0ce66645c66d2ac7c04fae320796557"
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
    "url": "assets/js/54.e7edcd8d.js",
    "revision": "340e1e8f43e30c4494c6edcde4c0516a"
  },
  {
    "url": "assets/js/55.6ac31dbb.js",
    "revision": "343a49454481f1631d67c201bf5fbab6"
  },
  {
    "url": "assets/js/56.fd85e84d.js",
    "revision": "d14f304cb8cb0ccc7942e735ca58ea2b"
  },
  {
    "url": "assets/js/57.9a0b243e.js",
    "revision": "7c40e060b223d924a8650a4a5b4d36a8"
  },
  {
    "url": "assets/js/58.0b878199.js",
    "revision": "f746dfaaa83786316f36dc7f8b7b74f4"
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
    "url": "assets/js/60.756119de.js",
    "revision": "34c62ef85b9dcd37ace28899b6ab3f5c"
  },
  {
    "url": "assets/js/61.caaaaee7.js",
    "revision": "97c216e1518325052cf9348ad9817f9c"
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
    "url": "assets/js/64.a4451584.js",
    "revision": "435b5d68005ec6cd1d321008bfef1a7f"
  },
  {
    "url": "assets/js/65.afa75d57.js",
    "revision": "1314632dc088d50761d4da5ce3b08dd0"
  },
  {
    "url": "assets/js/66.4f024f5e.js",
    "revision": "11f4f355e32cf250e9f3ede154fbdf53"
  },
  {
    "url": "assets/js/67.5d3d8318.js",
    "revision": "1c0f996d334c41957fadad3ddb6360d8"
  },
  {
    "url": "assets/js/68.17701077.js",
    "revision": "0a2a6a887f4bd19259e634eb687da02a"
  },
  {
    "url": "assets/js/69.a0e71b2e.js",
    "revision": "468ddad11d29110ee260a517fefbd67c"
  },
  {
    "url": "assets/js/7.567e98f4.js",
    "revision": "fa23c03c38d2e83b37f794552982c93f"
  },
  {
    "url": "assets/js/70.d77fd3dd.js",
    "revision": "61003a4238cd62f8a0e916b22208b06c"
  },
  {
    "url": "assets/js/71.3367ef27.js",
    "revision": "3286ff4257404cbe57580cc4c98110e9"
  },
  {
    "url": "assets/js/72.be67063b.js",
    "revision": "7c805c79dde6c54ca88e4190bc31b69a"
  },
  {
    "url": "assets/js/73.9fbed8dd.js",
    "revision": "4db209c9fb848f1ec4c30db0b6d0f7fb"
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
    "url": "assets/js/78.e95e0405.js",
    "revision": "ae5ffddd334bd194118d7546742ca562"
  },
  {
    "url": "assets/js/79.73d9ff68.js",
    "revision": "8e17194f7591890d40b26b1b818ef215"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.0714a7dd.js",
    "revision": "096661d52913d101c4d1ae2df47ab2cb"
  },
  {
    "url": "assets/js/81.5cf2c73d.js",
    "revision": "f8a90495f6e41d2446f8ee51105203f2"
  },
  {
    "url": "assets/js/82.12ef0349.js",
    "revision": "425c57af0841396b935f6cb17c9f1c50"
  },
  {
    "url": "assets/js/83.32421d6d.js",
    "revision": "c684603116dd0de9ef4374867e61068e"
  },
  {
    "url": "assets/js/84.5c71e7fc.js",
    "revision": "3d6e8bcc5c37e11f7c02b2bd96f5ab09"
  },
  {
    "url": "assets/js/85.da526268.js",
    "revision": "ccacaa62e3ba0dd8dea1d6ac30a5409d"
  },
  {
    "url": "assets/js/86.58667a13.js",
    "revision": "fdd704ce34d81b1dc97fe27154ba6d01"
  },
  {
    "url": "assets/js/87.c70b206e.js",
    "revision": "fe019656e252d11ad7f4e02fc004f089"
  },
  {
    "url": "assets/js/88.6504f63c.js",
    "revision": "cddfed36d564964fead683d692bfadce"
  },
  {
    "url": "assets/js/89.b6bce2d1.js",
    "revision": "91c216952243463b39431f44c37ddd55"
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
    "url": "assets/js/92.15097574.js",
    "revision": "eddfcf697fe75c2e6d8c8245ecaad20d"
  },
  {
    "url": "assets/js/93.f1c20a05.js",
    "revision": "5811aadfb99e0bc7ac2de55ff1e64440"
  },
  {
    "url": "assets/js/94.fece6a8a.js",
    "revision": "bc7f788e21d0064d5bfd0caad42a814d"
  },
  {
    "url": "assets/js/95.f6a3b518.js",
    "revision": "37c352d59f80ae9fc9f4c5b39c92428c"
  },
  {
    "url": "assets/js/96.b9fb0619.js",
    "revision": "06f751e99252508b53daa441ced4063d"
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
    "url": "assets/js/app.266abcc8.js",
    "revision": "e6ce232466768051a6baa021d015466f"
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
    "revision": "54dfa31c585a7129ca0137fa2bf16ef1"
  },
  {
    "url": "faq/index.html",
    "revision": "01b636b5cbde52f4fb3ca6de64966938"
  },
  {
    "url": "guide/assets.html",
    "revision": "b9c67076931fb72da2b3625f09c3ef8b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "203f2fd9f968332344046bb1d3fe2797"
  },
  {
    "url": "guide/coffee.html",
    "revision": "e36f3cfa1589dddc9f62390671a7efbe"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "12c61b974c1a863594617b85fb4720c3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8663ef2ac0e33cdbc11ccf7628138d12"
  },
  {
    "url": "guide/help.html",
    "revision": "7b819dc733b6e0f32fc17ef939048779"
  },
  {
    "url": "guide/index.html",
    "revision": "c11b9ffca89a8f4965d00fdb6ca602a0"
  },
  {
    "url": "guide/lang.html",
    "revision": "cf5b7095854b3ef3344c570cc6b41a5a"
  },
  {
    "url": "guide/often-sql.html",
    "revision": "7aedb5990cd3ef25123922e704e13ba6"
  },
  {
    "url": "guide/security.html",
    "revision": "25b7f16cc3026019b63b153ab5282a6e"
  },
  {
    "url": "guide/tags.html",
    "revision": "ec35e0f5610d9c597dc341ceae3130e9"
  },
  {
    "url": "guide/update-log.html",
    "revision": "92060845eea205b0ca6bf33fd962af42"
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
    "revision": "f698fe3e7e9111b91bc5e94a271267ef"
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
    "revision": "d55833d58c7cd43fe3cb40fb4fd99716"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "33323e5d16a859660057e27b396e0fb9"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "77b9414a20efeb250deb4b1f489711b9"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "d6173b296f267c94b217a823f788adfb"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "9486c214a865992dd543144e3bf2ec8d"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "0c73bc62dfb4eb6634c42b11eb6b2799"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "20078980b96860387157d58838ca349b"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "b0e2a3beff8f7fd08d856d3d9d3593d6"
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
    "revision": "123e9f7e7cb5ff24251a4c7e4b2f61dd"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "3aef0a22781057ee47a2135a791203dc"
  },
  {
    "url": "tc/config/index.html",
    "revision": "15cf0f513a81cf9043a7b4262bc376ac"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "2d997c1ed7dcab64215747931cc2f716"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "ca49d45407c0c6c83d70a6616ceab912"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "a274fda458b6ead2e9b58749f9907ae2"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "e320bc4aaf3dad0f9b5b3336a5ce5dcf"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "a68539fac0157a13db614136966458fd"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "4663b3b532b7ee6a87ae7257b96895f0"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "5e97a71083d456f084626d51c0d3a024"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "f5deb875d4d85d906d494c1653e06b24"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "03a53f966f265de91ebdcb291fb2794c"
  },
  {
    "url": "tc/guide/often-sql.html",
    "revision": "0939c8751e746b767acb323d30170907"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "e8d1e0a2c7e56382fad61d27d7fe9ea1"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "3345304f191386b9a0c1e773030b1ea8"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "f433482c72fa71080c3fdfa62db3890e"
  },
  {
    "url": "tc/index.html",
    "revision": "79620d0109f1d5d93ab4bcc3d2c784ad"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "934e6297932a87eb384641f91201e7c9"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "e8bb69d448df61b8ad6900017469cd11"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "761eaa17ae49972909e2ad7595511566"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "59c5de00807e4e555c2c5998890eeff5"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "6965487aa5597ec37145207a2fc56151"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "e27e0f5e2a75cc7acea2a4be04843129"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "411c4eb2687d593f390bb9533538a04a"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "53c18cfd37a247bdc8f302e76e3f5e26"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "8f325e352c0dd9b08b7788bacdb46103"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "11df2bbbf6cc6eb4beb411d66531a9fb"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "16d02b83e50401eae1e42e2df0a8f507"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "e93bdaa9ce949d1acfccd4e39ff8f7ea"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "66ac85304f70716cfd0367fbb2749767"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "c92e859f7be3e28fb8421f529edb1537"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "a8682354e7057d74cc5b547db75c23c5"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "506b8724ef54ebde0beb549781a46af0"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "d75ae2a22c17beaf314e322059af24d4"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "bd63e1123256ad37a566b5bc3a8e62ed"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "7c0f8c0423a18a18704645f44b4c1b21"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "1d984b0e208d491e473b97e8788de43b"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "03b9ae80ea94668b3555da11dc1dd4b2"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "8e3cc8936b6fa52b42c031f682b21ff5"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "e41aefce0a8d8b6d7afb01f4c957bee3"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "8e2b7da376fd46363a35fcc481ce9939"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "e16f0731a85679f19e8cc4491fcd5101"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "d1e91354895a83ad545aa7a868b65872"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "a2274a6cfbe86efd57a00363f0ec7f98"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "43aace784993aaf8ccc2519fcdb60c10"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "52f08093420dfadf2b8d5db7ec7583af"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "c7d9eefc82c478da5b1a9f2bf4577dab"
  },
  {
    "url": "theme/index.html",
    "revision": "dcb86527479b197ea2c777370d6b5265"
  },
  {
    "url": "theme/senior.html",
    "revision": "fcd8b2fd33c58165a310e8088943f123"
  },
  {
    "url": "theme/structure.html",
    "revision": "483d40c46e59a2940017528e6fdbf039"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "8dafd804ab726a156e83c627cfcab7ef"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "068092740e075a818968217984ac300a"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "519634c617b6f87a1ef7e68e02aabdf7"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "1b5b7b9e280eda8a0885f1600c9877ea"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "88a5463456878cba81d92efea2d61aed"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "8eac55004373ee29927194fbefcf9c0b"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "081e2c719bda083081df66155bc7dce8"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "3c00da6bd1c31b642eb7c8d4583062f3"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "847a185556effb4f7550f941877b1fc6"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "77eb895dfa53e595557ad2e1a5529d29"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "1eabfce18855b9953390937db31e6956"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "d8ed0070d12b8034a8aeaec90d2c5351"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "6263e7928aa802641f5c0808cdf6544e"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "a75d0ab5d890a7a551decb1f226899d0"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "30a934889d3c752ff9f540da7bdb1293"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "1cb0d5dd2b693ac0da981f4aebfd7e42"
  },
  {
    "url": "webmaster/server.html",
    "revision": "3af1fc8adb721d99623370c026416dd0"
  },
  {
    "url": "webmaster/template.html",
    "revision": "d6d6b316522e88ad75fd648d8c2b1fc1"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "1f61c84ed7668a72b6cf6a1975777e3e"
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
