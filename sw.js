// Guif Matchstatistik – gör att appen fungerar utan internet.
// Höj versionen när appen uppdateras så att telefonerna hämtar den nya.
const CACHE='guif-stat-v4';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
const FB='https://www.gstatic.com/firebasejs/10.12.2/';
const FB_FILES=[FB+'firebase-app.js',FB+'firebase-auth.js',FB+'firebase-firestore.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).then(()=>c.addAll(FB_FILES).catch(()=>{}))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  // Bara appens egna filer och Firebase-biblioteken. Databastrafiken går direkt till Firebase.
  if(u.origin!==location.origin&&!e.request.url.startsWith(FB))return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return r}).catch(()=>hit||caches.match('./index.html'));
    return hit||net;
  }));
});
