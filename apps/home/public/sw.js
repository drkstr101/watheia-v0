/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-expressions */
if (!self.define) {
  let e,
    s = {};
  const t = (t, o) => (
    (t = new URL(t + '.js', o).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (o, f) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[n]) return;
    let i = {};
    const b = (e) => t(e, n),
      c = { module: { uri: n }, exports: i, require: b };
    s[n] = Promise.all(o.map((e) => c[e] || b(e))).then((e) => (f(...e), i));
  };
}
define(['./workbox-6316bd60'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/../public/android-chrome-192x192.png',
          revision: '6b875852b72efeeb381422e39b238891'
        },
        {
          url: '/_next/../public/android-chrome-512x512.png',
          revision: '77f00c1806293c1c688c64fa3daf7ee8'
        },
        {
          url: '/_next/../public/apple-touch-icon.png',
          revision: '325e37562115b04fead40a4fd1fbe7f5'
        },
        {
          url: '/_next/../public/browserconfig.xml',
          revision: 'c24344acc0aae55ff1b533354965f12e'
        },
        {
          url: '/_next/../public/favicon-16x16.png',
          revision: '7f27689704782ca9e96d41eed3d676af'
        },
        {
          url: '/_next/../public/favicon-32x32.png',
          revision: '09c5dec927ff9faa289db14e7df710ac'
        },
        { url: '/_next/../public/favicon.ico', revision: 'd5ca52d1f694f68b5b711d655ee1246b' },
        {
          url: '/_next/../public/images/aaron-r-miller.jpg',
          revision: '850910c537ab9b46393b8e5a7cbe9af1'
        },
        {
          url: '/_next/../public/images/adobestock_434934439.jpg',
          revision: '59a44fd118f12bb2a0584004610d4558'
        },
        {
          url: '/_next/../public/images/background.jpg',
          revision: '2b67c2209b1985af5823503e76501ca1'
        },
        {
          url: '/_next/../public/images/cloud-illustration-indigo-400.svg',
          revision: 'fafeca0a61119835368b26a3a18b5cf2'
        },
        {
          url: '/_next/../public/images/hero-enterprise.svg',
          revision: '5d7c453356fe95d403b27b58c771260f'
        },
        {
          url: '/_next/../public/images/icon.png',
          revision: '4dfb1bdb213f5467f7586971e21a0cf2'
        },
        {
          url: '/_next/../public/images/logo-alt.png',
          revision: '23925863beafb392d22ce29640c63eb6'
        },
        {
          url: '/_next/../public/images/logo.png',
          revision: 'e310d08f750ea5db566c3c0673d68358'
        },
        {
          url: '/_next/../public/images/logo.svg',
          revision: 'db3f1a9e40fd9d06430106579ff7256c'
        },
        {
          url: '/_next/../public/images/wa-card@4x.png',
          revision: '164e425bcb61e7332c52550f32c0f252'
        },
        { url: '/_next/../public/manifest.json', revision: '3b7cb1b4ffb567e534ae934142110c07' },
        {
          url: '/_next/../public/mstile-150x150.png',
          revision: '022293d8b3c8939c415ebd192f0bdc04'
        },
        {
          url: '/_next/../public/safari-pinned-tab.svg',
          revision: '2c3fc209a8d2668421b28d50e35039a1'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Black.woff',
          revision: '18d66c722d5f65fee1cf3f7d2a7e894c'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Black.woff2',
          revision: 'a3704a40d5320071a1f72062f80ccb6f'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BlackIt.woff',
          revision: '41d7a7e317f7e76e3f433aafa7515651'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BlackIt.woff2',
          revision: '1fc2d7920b5407922951c3da5981b47b'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Bold.woff',
          revision: '8726857664d9ac7e3e02d8a2c6097c7a'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Bold.woff2',
          revision: '35b3642410957649f6ad90b1bb3ca4f0'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldCond.woff',
          revision: 'b8392b42714ee72c2c5665dcc21f433e'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldCond.woff2',
          revision: '012d3b92e8919983e66eb2733d896758'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldCondIt.woff',
          revision: '6202e245eb00888a67ef8040ed984bc7'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldCondIt.woff2',
          revision: '9bb18cd4690399702e35df0cba175b6e'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldIt.woff',
          revision: 'de3395a737c1d317189b08f1a5e7da1f'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldIt.woff2',
          revision: 'dbec605e1b5476d753a672acfa1fd6b6'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCn.woff',
          revision: '859c151962708303927936e6fd0c0637'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCn.woff2',
          revision: '8c434e341af143730106c81aff6ec9fe'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCnIt.woff',
          revision: 'a0d86d01a2466d35b7e83bded8b09e31'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCnIt.woff2',
          revision: 'ff22d5089e96fe7e17ef1ed0d8aa1830'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Cond.woff',
          revision: '5c7341486eddab1c17dc5602ff0fd733'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Cond.woff2',
          revision: 'e87905f8a232a760f67ebd06655cdb17'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-CondIt.woff',
          revision: 'b896ff467334aa5f0b280f163e9e346d'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-CondIt.woff2',
          revision: '6f9843322d42bffe5c2a6daf27fc6900'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-ExtraBold.woff',
          revision: '76d2e06dab9dced34bfbbf5ccb6fc031'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-ExtraBold.woff2',
          revision: 'b9467edc5b34f3079f040f5532280992'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-ExtraBoldIt.woff',
          revision: 'a7e13ab98311debda06ddc776a2d5d5f'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-ExtraBoldIt.woff2',
          revision: '45bb6216a0a40bee4454c75db2726469'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-It.woff',
          revision: '5d2563ce69b76fe783e4c88a2282d0e2'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-It.woff2',
          revision: '7e9770b690cfb085af3f1cf34bd85669'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Light.woff',
          revision: '27b0d7de02176130dabe0d3e7873c529'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Light.woff2',
          revision: '6e49fc9bd2e8fb88a87f72905844336b'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-LightIt.woff',
          revision: '3b9365b46324af1ea88b51a6e81b9081'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-LightIt.woff2',
          revision: '69c1387b657f29196692c5b92cefe929'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Medium.woff',
          revision: '40d738d50499045dec9b828c7ed8c018'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Medium.woff2',
          revision: '4017fa6ed81590094afb5ebcae93e62b'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Regular.woff',
          revision: 'c393fb0add7434bac9692afe00e4fcb1'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-Regular.woff2',
          revision: 'a2eb832ce21c44978f8c76fac79cd364'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiCn.woff',
          revision: '7c3699354d84f548c03abbbb09dc1ac7'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiCn.woff2',
          revision: '304e945e50516496fa1276c215a1b5f7'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiCnIt.woff',
          revision: '6299591bb75521ee0e13fcc20aabc4e8'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiCnIt.woff2',
          revision: '9033b96048d72df30e8101e7bca63dcf'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiLight.woff',
          revision: '1bef97ef81255441f8dce0e5628ba36c'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiLight.woff2',
          revision: '1a3413bc30fa24edf6f6e6ef6aa211be'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiLightIt.woff',
          revision: '74024ca4de58e781cf89f0044d78ffa2'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeClean-SemiLightIt.woff2',
          revision: 'e1a463a5d62568fe8aa718345db7c146'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Black.woff',
          revision: '6310c4e7675566ecb631862b845c13b0'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Black.woff2',
          revision: '257e510b98381eda963543a61b174176'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-BlackIt.woff',
          revision: '57da67a5b8469dc1f41fd7a571acb883'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-BlackIt.woff2',
          revision: 'd3b23ed591d36a8cc76843d075aaa7d8'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Bold.woff',
          revision: 'f3e161e4a1833af2567aa95745a7a619'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Bold.woff2',
          revision: '54a972219025f888d2069fad8ecf746e'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-BoldIt.woff',
          revision: 'b2e33d59f338439503dc52007c1dc0af'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-BoldIt.woff2',
          revision: '3f476b81d7f086e29e156eb61efac21e'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-It.woff',
          revision: '1e125ec61d63bc4cb03524ef6ae4722a'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-It.woff2',
          revision: 'd2b814792802e892f258060469801f14'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Medium.woff',
          revision: '13af0c356a3c99e225da4738d2c603c5'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Medium.woff2',
          revision: '60f34c3d5497ef034394687963ea48a0'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-MediumIt.woff',
          revision: 'c5588b28671fda9bbead44f904bf91bf'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-MediumIt.woff2',
          revision: '4f04e530c77f2e1a9da7a4f828cca740'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Regular.woff',
          revision: 'ab7b57ea25120953ecb2877fe6a4f8ed'
        },
        {
          url: '/_next/../public/styles/fonts/subset-AdobeCleanSerif-Regular.woff2',
          revision: '8974313abd37f6011890b9e90079546b'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Black.woff',
          revision: '2e7353b6b1f515b5ffe43028b77455ab'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Black.woff2',
          revision: 'da2c12072da1db99030b0e273f559fc3'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-BlackIt.woff',
          revision: 'b1187fd2a58014e7546f9035502ea073'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-BlackIt.woff2',
          revision: 'c3fc35163b10a8f6e1edf5e63d308fb7'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Bold.woff',
          revision: '9c4adb9a3976b832a114a0cc3076648b'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Bold.woff2',
          revision: '9c1d09523fb134117f3746509608fb40'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-BoldIt.woff',
          revision: 'b895d350d7031c2960b641fcd8ea097d'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-BoldIt.woff2',
          revision: 'a84424e3d7e1372c6819a5834d32d3da'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLight.woff',
          revision: '71675b907ed4d4b301f888ba6256ae86'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLight.woff2',
          revision: '7cad8456da0f42ca6f4b51225b3c3325'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLightIt.woff',
          revision: '4f3672e69367fb263aa55e259a0431b5'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLightIt.woff2',
          revision: 'a5a6850c6f0d21cd9182c54a02f04502'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-It.woff',
          revision: '7005a19250103f8c49f9d4ff046a1f90'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-It.woff2',
          revision: 'c627039a5486a46eee3ef060120b32df'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Light.woff',
          revision: '2afeb82519fa81cf624f09e877794f32'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Light.woff2',
          revision: '5dd1a826d285a6eefbce938286ac6252'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-LightIt.woff',
          revision: 'bec0a8af563f5fa972b161f8c593508a'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-LightIt.woff2',
          revision: '7d4e2f1ca6ea2dbba8772362af385346'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Medium.woff',
          revision: 'f93eb34be1a572b207ffabbbe2512873'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Medium.woff2',
          revision: '2948d5993fa46170f67d960f9dc04b7b'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-MediumIt.woff',
          revision: '04daf9605af2a2477db944ce34c3c1ad'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-MediumIt.woff2',
          revision: '86cb775cf28820fff3aa73bb1e49fc0a'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Regular.woff',
          revision: 'a80ac52f2e98448ee8db0bd454ae20a1'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Regular.woff2',
          revision: '9e3bd70f3c71d0b61b4f721cf57edcac'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Semibold.woff',
          revision: '46cb52683c365ef0aac81e976e54a19d'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-Semibold.woff2',
          revision: '3daf459f89a8118b070f33c06bc1f9a8'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-SemiboldIt.woff',
          revision: '1ce7632998c370622f3acd0ef3aa756d'
        },
        {
          url: '/_next/../public/styles/fonts/subset-SourceCodePro-SemiboldIt.woff2',
          revision: '3bf1c4f85378b3721c7c3280f23ab803'
        },
        {
          url: '/_next/static/4xBJl1WdUV4rcDBPOMEGV/_buildManifest.js',
          revision: '1bf981a624aa9374122df5b5a4126f3b'
        },
        {
          url: '/_next/static/4xBJl1WdUV4rcDBPOMEGV/_middlewareManifest.js',
          revision: '468e9a0ecca0c65bcb0ee673b762445d'
        },
        {
          url: '/_next/static/4xBJl1WdUV4rcDBPOMEGV/_ssgManifest.js',
          revision: '5352cb582146311d1540f6075d1f265e'
        },
        {
          url: '/_next/static/chunks/framework-5537cdada224f5cc.js',
          revision: '5537cdada224f5cc'
        },
        { url: '/_next/static/chunks/main-b3bac5803d9019ec.js', revision: 'b3bac5803d9019ec' },
        {
          url: '/_next/static/chunks/pages/_app-9550af4424d81418.js',
          revision: '9550af4424d81418'
        },
        {
          url: '/_next/static/chunks/pages/_error-e0cbd9aa1699d90b.js',
          revision: 'e0cbd9aa1699d90b'
        },
        {
          url: '/_next/static/chunks/pages/index-47fdf430a7623c87.js',
          revision: '47fdf430a7623c87'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: '99442aec5788bccac9b2f0ead2afdd6b'
        },
        {
          url: '/_next/static/chunks/webpack-34c76af51fb9f015.js',
          revision: '34c76af51fb9f015'
        },
        { url: '/_next/static/css/32d668369076d8cb.css', revision: '32d668369076d8cb' },
        { url: '/_next/static/css/bce94aa37e1454e5.css', revision: 'bce94aa37e1454e5' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: t, state: o }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
      }),
      'GET'
    );
});
