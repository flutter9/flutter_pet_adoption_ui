'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/lab.png": "d9d5af2fcd9ef0f457909c6dd0ffa216",
"/assets/assets/images/pug.jpg": "b37e056454273991c93f214658a0421b",
"/assets/assets/images/user.png": "2552238a10c0511bbad74b7d7b2c1424",
"/assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"/assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"/assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"/assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"/assets/FontManifest.json": "bcef619559f0f78e86cadd351de8667c",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "f03bad0ddbfb4ba543a4dd033235c53d",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "942b12a527560d13810382baf4cf35c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
