if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),f={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-b76556ad"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2f4750e6e1fce770a0bf29efee8411a8"},{url:"assets/index.3be7ac37.css",revision:null},{url:"assets/index.f383634a.js",revision:null},{url:"index.html",revision:"b1ad5441d7b57893c16114b5c4dfc83b"},{url:"favicon.ico",revision:"47ab46e1d952a9d40272c7f0cd35ee5a"},{url:"favicon-32x32.png",revision:"6266c2b94d99a0d34de5646847edbbb1"},{url:"favicon-16x16.png",revision:"8eb8b30dcd184b16c6f6418fd3a9cf35"},{url:"android-chrome-192x192.png",revision:"0fff8436bfb4adc190c81e4e9c2b5e91"},{url:"android-chrome-512x512.png",revision:"d01ace399db5fadd95a2adabcdc8642a"},{url:"apple-touch-icon.png",revision:"7d6395799758181d4575407e0498442c"},{url:"safari-pinned-tab.svg",revision:"c0622a66c58b97e1837b2b3605f97da0"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"manifest.webmanifest",revision:"45ff19081b0817e0485f0dee272ae612"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
