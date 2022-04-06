console.log("SW Startup!");

// Install Service Worker
self.addEventListener('install', function(event){
    console.log('installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('activated!');
});

self.addEventListener('fetch', function(e) {
  let urlObj = new URL(e.request.url);

  switch (urlObj.searchParams.get("action")) {
      case "peek":
        // console.log("sw-peek=" + winSourceId.toString());
        e.respondWith(new Promise(function (accept, reject) {
          // check if there is any message in message queue
          accept(new Response("false"));  // hardcoding to false as if no message in message queue
      }));
      break;
  }
});
