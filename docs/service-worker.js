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
    "revision": "7277cae55ff113ab0aa744d19a928d24"
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
    "revision": "816affa1ad617449fc4304aded768d0c"
  },
  {
    "url": "api/web-design.html",
    "revision": "52d3f4c21a80432bd8d6b915ef6cf5cf"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.840141f7.css",
    "revision": "879f9428911a4ec36b46b3800e64f83d"
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
    "url": "assets/js/100.0188424e.js",
    "revision": "2061e05457e656ef36802548b6f10632"
  },
  {
    "url": "assets/js/101.183192ad.js",
    "revision": "a0da4cdc30b6b19bc3087db99c9ad322"
  },
  {
    "url": "assets/js/102.63ca354d.js",
    "revision": "aa499888964aa0fe7835836c8c3fecfd"
  },
  {
    "url": "assets/js/103.e50ea64e.js",
    "revision": "80916a30f3aecf8c1fda9bbc5986e0f3"
  },
  {
    "url": "assets/js/104.c139fec7.js",
    "revision": "da4ba9344582ffb25fdf1eaa60b69fd1"
  },
  {
    "url": "assets/js/105.ff3a901c.js",
    "revision": "afea39a9906ed5a4f2a63f975c7dc731"
  },
  {
    "url": "assets/js/106.a07a87c5.js",
    "revision": "e2c3c1c4a89403704e3e7485791815bc"
  },
  {
    "url": "assets/js/107.c09a4755.js",
    "revision": "184d5843a870ba90d60b676b40f0d0ea"
  },
  {
    "url": "assets/js/108.a38b74f9.js",
    "revision": "80ddf5117ca1865594fbd707f1d1cfbc"
  },
  {
    "url": "assets/js/109.315bfc9a.js",
    "revision": "1ee7a3925a9513b836875cbe63a40b59"
  },
  {
    "url": "assets/js/11.6fca27a1.js",
    "revision": "4c0f82bbca3a55076b7d7557e18db0e7"
  },
  {
    "url": "assets/js/12.655dd338.js",
    "revision": "9183ae4d59fb39a6d8f18ba5abb218f3"
  },
  {
    "url": "assets/js/13.9e995308.js",
    "revision": "fda041fe9418007892498fe3996f6f82"
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
    "url": "assets/js/17.777594b4.js",
    "revision": "a21df98a7d493b44a4802bcb5ce86ff8"
  },
  {
    "url": "assets/js/18.acaf62e3.js",
    "revision": "e0ae46a53e874a548f373f82ee611c8d"
  },
  {
    "url": "assets/js/19.8dc375a8.js",
    "revision": "a1ae296cc136646e9a0ed8d15f426b09"
  },
  {
    "url": "assets/js/20.8fe60563.js",
    "revision": "9483e8cdcc22632744a298665e95235a"
  },
  {
    "url": "assets/js/21.e665ef80.js",
    "revision": "67f613601b701dbcaad08fc991c15f9e"
  },
  {
    "url": "assets/js/22.7b749844.js",
    "revision": "1bab2dd4babb8b2e0f4d69cfeeb47df7"
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
    "url": "assets/js/25.4e796958.js",
    "revision": "51ba50e2355433187ca29b7bea5bc19c"
  },
  {
    "url": "assets/js/26.f142e906.js",
    "revision": "1d75e092fc1a38d5500f35d179ed67e5"
  },
  {
    "url": "assets/js/27.53c857ec.js",
    "revision": "0f5a3dde7a9b317619535f3c09e4b32b"
  },
  {
    "url": "assets/js/28.637e9a66.js",
    "revision": "b7fa4dd949e6a391c4affc2c3b8a9264"
  },
  {
    "url": "assets/js/29.2e00905a.js",
    "revision": "9660fdfefd167f37d0622e860fe0f11d"
  },
  {
    "url": "assets/js/30.736b5224.js",
    "revision": "673588822d917d369e852136733e47d9"
  },
  {
    "url": "assets/js/31.f9d64c2a.js",
    "revision": "be4472d85cbb95d42de8a139e9f5edc7"
  },
  {
    "url": "assets/js/32.f3167257.js",
    "revision": "d9f9afb689429c6c480ad1c29d0738a2"
  },
  {
    "url": "assets/js/33.b54ec664.js",
    "revision": "e30c67486e18ef7679bab825fb6e1cb2"
  },
  {
    "url": "assets/js/34.f7261052.js",
    "revision": "fbc03f8e1cce5c9066badca931e53137"
  },
  {
    "url": "assets/js/35.fa850591.js",
    "revision": "a694533e05b5c0a5f72dede4623ad277"
  },
  {
    "url": "assets/js/36.6ce0b1ab.js",
    "revision": "be1b03068c4134daf9800533e58118f1"
  },
  {
    "url": "assets/js/37.2de8991e.js",
    "revision": "db2af57b297721a4ab6e7836b945edec"
  },
  {
    "url": "assets/js/38.919d4109.js",
    "revision": "ebcb15df067a77b6d9449ae45f0aa2a9"
  },
  {
    "url": "assets/js/39.2ecef545.js",
    "revision": "c3093e63cbcbd80a53614839f2f05b25"
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
    "url": "assets/js/41.120a6866.js",
    "revision": "20557bacbb9d4f47e8d5c599c802e59b"
  },
  {
    "url": "assets/js/42.73e45c83.js",
    "revision": "55a3fe06cf778b1f44b8c1c1f84edb54"
  },
  {
    "url": "assets/js/43.e04889aa.js",
    "revision": "d03f795cae2243ed81c629efb80866ae"
  },
  {
    "url": "assets/js/44.4b9d0dae.js",
    "revision": "91c99a748796ad9faea7f562a3409aa7"
  },
  {
    "url": "assets/js/45.932ab0aa.js",
    "revision": "bc3959bb9800794bc7c579f0a74bbedf"
  },
  {
    "url": "assets/js/46.c459d70e.js",
    "revision": "55be4ebd5ddb9766a8356aec2bb4c436"
  },
  {
    "url": "assets/js/47.df0761f4.js",
    "revision": "22e72e0f65dc8377265bfc665630b160"
  },
  {
    "url": "assets/js/48.a5bbc731.js",
    "revision": "16835dc19107012474e5d1e93ecc4cea"
  },
  {
    "url": "assets/js/49.4998c968.js",
    "revision": "227e33c963ff8e74e41f43dcd5c6d15a"
  },
  {
    "url": "assets/js/5.29a4c170.js",
    "revision": "67c7ae3423cfb5de4127591434870624"
  },
  {
    "url": "assets/js/50.ff6269ef.js",
    "revision": "1ab8c6be1df41f19213dfda7285f02cd"
  },
  {
    "url": "assets/js/51.17604036.js",
    "revision": "f2fa5a1826940deb0dafd484ad01f5d9"
  },
  {
    "url": "assets/js/52.764b7ce9.js",
    "revision": "f8d266cdefd2f8600119e91a5dfb3b4a"
  },
  {
    "url": "assets/js/53.133629a5.js",
    "revision": "58080b52c58e4331d655686c6f3c37a3"
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
    "url": "assets/js/57.e490c8df.js",
    "revision": "7cedec6bdfd53aaa417092938ae23aee"
  },
  {
    "url": "assets/js/58.6b6a21df.js",
    "revision": "322c1ab2d84366b13b747ea9ad60b14c"
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
    "url": "assets/js/60.a49e593d.js",
    "revision": "31c65d86ef037b51931ddd7f10693c51"
  },
  {
    "url": "assets/js/61.56cc2870.js",
    "revision": "832c14924c3ae869a10ca01280ff4ca3"
  },
  {
    "url": "assets/js/62.b61c678f.js",
    "revision": "13cc8529e576df8ca2815d9917615039"
  },
  {
    "url": "assets/js/63.9f8cb17a.js",
    "revision": "786c502ad3504e6438802971d94a775c"
  },
  {
    "url": "assets/js/64.b94929d4.js",
    "revision": "205172da97d42ec14a1d6dd6254ce47c"
  },
  {
    "url": "assets/js/65.1097f384.js",
    "revision": "49458d5b95e7bf58a1cbf43cef72e60c"
  },
  {
    "url": "assets/js/66.92161f68.js",
    "revision": "3983adf107da48c92c997b689b7429f1"
  },
  {
    "url": "assets/js/67.157a7e50.js",
    "revision": "1b30a08ffbd75e983f2e5911f4994cd2"
  },
  {
    "url": "assets/js/68.40488e54.js",
    "revision": "23ddb6a59f646ac1e816e9ffdcbbce2d"
  },
  {
    "url": "assets/js/69.0ba4c084.js",
    "revision": "385941674d396056894ad8b6e488f6c1"
  },
  {
    "url": "assets/js/7.255be918.js",
    "revision": "8c453bf0090d3a3f60922e7dc09e2f0b"
  },
  {
    "url": "assets/js/70.f1d9927e.js",
    "revision": "e274e651b6123a7e072d0e13d3ab768d"
  },
  {
    "url": "assets/js/71.fc6acd19.js",
    "revision": "8cd56a17fc4daf061f7b35b0c187e99f"
  },
  {
    "url": "assets/js/72.45bb9b77.js",
    "revision": "564af2216f9269decdea3dd2288070f9"
  },
  {
    "url": "assets/js/73.304d16ce.js",
    "revision": "3ee7809553721c2425b6464e98b490a4"
  },
  {
    "url": "assets/js/74.7deb2034.js",
    "revision": "ff46a0f32d5890dbde33fddc7ef528f5"
  },
  {
    "url": "assets/js/75.ebdcd77b.js",
    "revision": "3c981e802864d4a0e580ea64a5321e41"
  },
  {
    "url": "assets/js/76.7a1bda38.js",
    "revision": "56e63c5c29f4764796316a65b14190bc"
  },
  {
    "url": "assets/js/77.25666fdb.js",
    "revision": "3caa0df31e5fa93db5655829d2c5cff6"
  },
  {
    "url": "assets/js/78.063044ef.js",
    "revision": "10b7b6ae1fdf3252ae457dcd87f8161c"
  },
  {
    "url": "assets/js/79.e230da15.js",
    "revision": "ebc8d52ebc5c24e0e02e842a6bc9d8f9"
  },
  {
    "url": "assets/js/8.a78a9654.js",
    "revision": "653c9ac9078ce85f55228c06f73c943c"
  },
  {
    "url": "assets/js/80.0286f764.js",
    "revision": "36a611c74c26af44aa447eeeca8665cf"
  },
  {
    "url": "assets/js/81.1b845daf.js",
    "revision": "c559f891b2a1a950de56a20468254ceb"
  },
  {
    "url": "assets/js/82.e22a4891.js",
    "revision": "24e28c2e1a82c329cb54ccec7d667e1d"
  },
  {
    "url": "assets/js/83.cba5e8ed.js",
    "revision": "6bf9ca46b4d82ed013aa127e2b29302c"
  },
  {
    "url": "assets/js/84.2a0a6858.js",
    "revision": "58a0531b583022cb6c921947d740e6b4"
  },
  {
    "url": "assets/js/85.2283dd1c.js",
    "revision": "3769bc4352c908947542a137face8959"
  },
  {
    "url": "assets/js/86.d38596a1.js",
    "revision": "50ac2a182a871d745d4a727409c86337"
  },
  {
    "url": "assets/js/87.4a304ee1.js",
    "revision": "8e7c0ca968767dfed0abb945f3fa67bd"
  },
  {
    "url": "assets/js/88.5048c4b9.js",
    "revision": "6080b82e6b40e8929664467b4dad3c17"
  },
  {
    "url": "assets/js/89.c1d3d8e1.js",
    "revision": "49f3cb3efcf2991bcd065cdefd5ba69e"
  },
  {
    "url": "assets/js/9.98029025.js",
    "revision": "32c68e5dde126a7fd7c908294027ec7d"
  },
  {
    "url": "assets/js/90.9de5571b.js",
    "revision": "87cea3dd427e91e896b6421717ac55ce"
  },
  {
    "url": "assets/js/91.de1721a7.js",
    "revision": "1da991bee8752c50c643960463990029"
  },
  {
    "url": "assets/js/92.25012f82.js",
    "revision": "03fa2d1e4abc7660de47b4020c28b4b2"
  },
  {
    "url": "assets/js/93.33ada442.js",
    "revision": "6a2c3558717a952aa6466d0395bfc328"
  },
  {
    "url": "assets/js/94.cbfca2d6.js",
    "revision": "2d7c75ad627b7a62226fc503ee12ffc4"
  },
  {
    "url": "assets/js/95.904b18bf.js",
    "revision": "880cb7cc998da3c3b62c4ba6f869b789"
  },
  {
    "url": "assets/js/96.2081be76.js",
    "revision": "9949560f7b6052945870c348ae952da3"
  },
  {
    "url": "assets/js/97.d6a1ce21.js",
    "revision": "5c376517b387d65ce70bcce5657ef039"
  },
  {
    "url": "assets/js/98.7da2a1e8.js",
    "revision": "d6785e733c469b02d59a002d19c29c76"
  },
  {
    "url": "assets/js/99.02a8df80.js",
    "revision": "415936afbf826b3f5fdbc3e78b581ff0"
  },
  {
    "url": "assets/js/app.ca480ac5.js",
    "revision": "8b5594bbdebfaa8ebc4a8d8742a4ad3b"
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
    "revision": "5769dec5ef487be1748f46c9755026e4"
  },
  {
    "url": "faq/index.html",
    "revision": "5e9873ce4f6c3061823b50b55e84dd36"
  },
  {
    "url": "guide/assets.html",
    "revision": "6cecd76c0705c2d21b5ce4747c046b03"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "d536fca9a289bc6ad844a24832013182"
  },
  {
    "url": "guide/coffee.html",
    "revision": "7431501a4a24658b126676bfb23ed109"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "65c909b6b85075741774587a1c746886"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "222751cc7901228d497c74daddedcbea"
  },
  {
    "url": "guide/help.html",
    "revision": "5db8f551c43e93c3623f9e4a19dc248f"
  },
  {
    "url": "guide/index.html",
    "revision": "8ae96755dcaebd778884371d1fb476c3"
  },
  {
    "url": "guide/lang.html",
    "revision": "5caf0d2a13fd2fc719b4695697c17369"
  },
  {
    "url": "guide/security.html",
    "revision": "914c6c93db265f513b6fc15a84d75a54"
  },
  {
    "url": "guide/tags.html",
    "revision": "567ecea6adcf24088a91bd0aac6f432a"
  },
  {
    "url": "guide/update-log.html",
    "revision": "c121c62e47a1bb0a115e596cda3bd6b5"
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
    "revision": "e054f3cef425627a9903d3f60eabed2b"
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
    "revision": "fc1b0710181e562e28e8d93f7dc33eb4"
  },
  {
    "url": "plugin/official/plugin-ppvod-maccms.html",
    "revision": "9c1227af71a80b9f373de8f0350b0637"
  },
  {
    "url": "plugin/plugin-controller.html",
    "revision": "4dabeb1c5d0fcc1471d8f140224e5c7c"
  },
  {
    "url": "plugin/plugin-dir.html",
    "revision": "d3e8e89d866ba9a284bcec0bf6868f76"
  },
  {
    "url": "plugin/plugin-extend.html",
    "revision": "653e0e9f1890fdaa675d7a0bf364aec3"
  },
  {
    "url": "plugin/plugin-function.html",
    "revision": "b5468566810d3d85758c9e0ecc32e3be"
  },
  {
    "url": "plugin/plugin-model.html",
    "revision": "78107ea8475ec1f4dbd0115cae20259f"
  },
  {
    "url": "plugin/plugin-writing.html",
    "revision": "8d67cf30ebc6c3407584570d418bbf84"
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
    "revision": "fb9b8d722d70112e659782e47ce21bbf"
  },
  {
    "url": "tc/api/web-design.html",
    "revision": "2eb999b87df993a25883913f43b939b2"
  },
  {
    "url": "tc/config/index.html",
    "revision": "cb40384afa816361c746042378c9b77c"
  },
  {
    "url": "tc/faq/index.html",
    "revision": "ffad4e520226689e7a81f04662e72012"
  },
  {
    "url": "tc/guide/assets.html",
    "revision": "b4976600d1d1efbf17d0a8b4c5866342"
  },
  {
    "url": "tc/guide/basic-config.html",
    "revision": "d248ad918bb6640c91ae9eaca8760038"
  },
  {
    "url": "tc/guide/coffee.html",
    "revision": "f93d9816c398ae79d8a2b17515c5c1ff"
  },
  {
    "url": "tc/guide/directory-structure.html",
    "revision": "207c7c3dc20425615eef42bfc71b2b38"
  },
  {
    "url": "tc/guide/getting-started.html",
    "revision": "3c6d5de56957b7b92b3f4d010dbece78"
  },
  {
    "url": "tc/guide/help.html",
    "revision": "8f7e66554a091c01bf480c7aca48a892"
  },
  {
    "url": "tc/guide/index.html",
    "revision": "590c2c23a6668de3c70c938152d14c65"
  },
  {
    "url": "tc/guide/lang.html",
    "revision": "2c2fbc288111bdc2e8d60e2f4577b17c"
  },
  {
    "url": "tc/guide/security.html",
    "revision": "ce65759f32df54afe0142cf1f20b8b66"
  },
  {
    "url": "tc/guide/tags.html",
    "revision": "31263c6768010d31f0456805da6ae6e9"
  },
  {
    "url": "tc/guide/update-log.html",
    "revision": "bbe8a2cef0c72bce2169680302d9994c"
  },
  {
    "url": "tc/index.html",
    "revision": "3bf93b635c7d1b94477ab4f2b3768209"
  },
  {
    "url": "tc/plugin/index.html",
    "revision": "a7e0b13f1b00a909dfbe15f63b77c24f"
  },
  {
    "url": "tc/plugin/official/plugin-ppvod-maccms.html",
    "revision": "0f67ec6e27964670a98952b43c15621d"
  },
  {
    "url": "tc/plugin/plugin-controller.html",
    "revision": "145eb950b916f0724137324deed9fb0c"
  },
  {
    "url": "tc/plugin/plugin-dir.html",
    "revision": "9f0379f88a16060dd62cb2848125042f"
  },
  {
    "url": "tc/plugin/plugin-extend.html",
    "revision": "63d212c9d7b21596153b49fc19f67c7c"
  },
  {
    "url": "tc/plugin/plugin-function.html",
    "revision": "e873df780723a4cbb1d1a67285d7297f"
  },
  {
    "url": "tc/plugin/plugin-model.html",
    "revision": "e758f6c6eb75e2edd7b1ced87f43978c"
  },
  {
    "url": "tc/plugin/plugin-writing.html",
    "revision": "f0092da3a3ba3cbbe2eb8fb18da8c945"
  },
  {
    "url": "tc/theme/index.html",
    "revision": "7c800c9db440412bdae29285ea83b1e7"
  },
  {
    "url": "tc/theme/senior.html",
    "revision": "a9d04c25e2a678f10d6bc60960793cac"
  },
  {
    "url": "tc/theme/structure.html",
    "revision": "c05a5bafee16bc70689c32af7367d033"
  },
  {
    "url": "tc/theme/tags-global.html",
    "revision": "a73bad3a9d644825681db31912da76d0"
  },
  {
    "url": "tc/theme/theme-actor.html",
    "revision": "ab57915acb94aef6aeac062e23b6c6bc"
  },
  {
    "url": "tc/theme/theme-art.html",
    "revision": "7e384a3b7ff6ede1adeca37160b2f329"
  },
  {
    "url": "tc/theme/theme-other.html",
    "revision": "0ca3ee52978272ab23baa455e918fd59"
  },
  {
    "url": "tc/theme/theme-plot.html",
    "revision": "6f2345f40b393d40171d9222eb2da969"
  },
  {
    "url": "tc/theme/theme-role.html",
    "revision": "249f85cd3a703c2ae51e6b18a369cc0e"
  },
  {
    "url": "tc/theme/theme-topic.html",
    "revision": "967ea74ac09668785547d3cd429adbdf"
  },
  {
    "url": "tc/theme/theme-type.html",
    "revision": "a797b749d7f28a2c0347dc86cdb25bda"
  },
  {
    "url": "tc/theme/theme-user.html",
    "revision": "84c127a1c683f5e557edc4beb681629d"
  },
  {
    "url": "tc/theme/theme-vod.html",
    "revision": "04f9989695160da90ed9dc6abf61cc75"
  },
  {
    "url": "tc/theme/theme-website.html",
    "revision": "05b5bc85a752886c34a7262bf7ea7cd7"
  },
  {
    "url": "tc/theme/using-a-theme.html",
    "revision": "b0a9c9b1c871dbd373edb99f92156bc4"
  },
  {
    "url": "tc/theme/writing-a-theme.html",
    "revision": "e97a2578b1ada665d80f2f96cf539ebc"
  },
  {
    "url": "tc/webmaster/ads.html",
    "revision": "fdcc5113eda4929ffa501b488514665e"
  },
  {
    "url": "tc/webmaster/glossary.html",
    "revision": "39daa55820b21e74c12fd613e503f332"
  },
  {
    "url": "tc/webmaster/migration-guide.html",
    "revision": "7970ae4f927fec6bd58db08856412da9"
  },
  {
    "url": "tc/webmaster/server.html",
    "revision": "f543df2ab71575adf1b7b685049c31e9"
  },
  {
    "url": "tc/webmaster/template.html",
    "revision": "d634a8edd439eb14b70a05e504cd5ba5"
  },
  {
    "url": "tc/webmaster/transfer.html",
    "revision": "f300f98e41d0a9bbd17fb847b44fa57f"
  },
  {
    "url": "theme/index.html",
    "revision": "6f5ccaa6958589f4797072b477cfed36"
  },
  {
    "url": "theme/senior.html",
    "revision": "65f7fddf2872db1398183093613c11bf"
  },
  {
    "url": "theme/structure.html",
    "revision": "d02554bf083929d43e392b57d8dfba2f"
  },
  {
    "url": "theme/tags-global.html",
    "revision": "85f4d48c6f2ebcf2953f498029382875"
  },
  {
    "url": "theme/theme-actor.html",
    "revision": "ee4edecf836e1724bbfe2002ffe138e9"
  },
  {
    "url": "theme/theme-art.html",
    "revision": "d403800754e58271365c4e353b7aa20b"
  },
  {
    "url": "theme/theme-other.html",
    "revision": "81fb620ed63d6d8103443e7a1a012a20"
  },
  {
    "url": "theme/theme-plot.html",
    "revision": "f6803245ed98d0ef2a1106f6d01b9b0c"
  },
  {
    "url": "theme/theme-role.html",
    "revision": "6c631d691d2a64ff5a151b04be1d5301"
  },
  {
    "url": "theme/theme-topic.html",
    "revision": "972c961d41cfa922e3ca2ad85f18f7fd"
  },
  {
    "url": "theme/theme-type.html",
    "revision": "27c8519279cd8b0a97b415de02855708"
  },
  {
    "url": "theme/theme-user.html",
    "revision": "c88ff21af1d7709e18f79c56c2f14882"
  },
  {
    "url": "theme/theme-vod.html",
    "revision": "f964829602821737f515b1e3e02873d2"
  },
  {
    "url": "theme/theme-website.html",
    "revision": "ef23dc3b10a28457afa47c4d314bac37"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "05ba1b85df1e91f766a47672a3b7b39c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "e9b3b3094036b063b08e9b361f124871"
  },
  {
    "url": "webmaster/ads.html",
    "revision": "6f07413bce601215e326098ec542e182"
  },
  {
    "url": "webmaster/glossary.html",
    "revision": "3fdeb363034e731ba773520a3aed3f1e"
  },
  {
    "url": "webmaster/migration-guide.html",
    "revision": "dd3873d413fceda0016327bb9395d0f3"
  },
  {
    "url": "webmaster/server.html",
    "revision": "641e5c064a422a2f1352155ef27cec98"
  },
  {
    "url": "webmaster/template.html",
    "revision": "a8328f5f557731bddf29e1818254bb6c"
  },
  {
    "url": "webmaster/transfer.html",
    "revision": "7eabb5b1b52633065e942602ce33b398"
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
