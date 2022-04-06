
function peek(i) {
  var request = new XMLHttpRequest();
  request.open("GET", "/messsages?action=peek&sourceid=" + i.toString(), false); // sync call to check if SW queue is populated

  try {
    request.send(null);
  } catch (e) {
    // We need this because the send call will abort after awaking from hibernation
    console.log("request.send: /messages/peek: exception, try again");
  }

  if (request.status === 200 && request.responseText) {
    return request.responseText === "true";
  }

  return false;
}

function peekMessage(i) {
    // console.log("ww-peek=" + i.toString());
    peek(i);
}

(function start() {
    console.log("@@@@@@@@@@@ start +");
    let i = 1;
    do {
        var msg = peekMessage(i);
        if (msg) {
            console.log('%c' + "RECEIVED: " + msg, 'color:' + 'yellow' + ';background-color: #444; padding: 3px 7px; margin-left: -7px;');
            break;
        }
        i=i+1;
    }
    while(i<40000);
    console.log("@@@@@@@@@@@ end +");
})();

