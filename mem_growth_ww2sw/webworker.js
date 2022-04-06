
function peek() {
  var request = new XMLHttpRequest();
  request.open("GET", "/messsages?action=peek", false); // sync call to check if SW queue is populated

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
    do {
        var msg = peekMessage();
        if (msg) {
            console.log('%c' + "RECEIVED: " + msg, 'color:' + 'yellow' + ';background-color: #444; padding: 3px 7px; margin-left: -7px;');
            break;
        }
    }
    while(1);
    console.log("@@@@@@@@@@@ end +");
})();

