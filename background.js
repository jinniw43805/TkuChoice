chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width':  700,
      'height': 500
    }
  });
});


chrome.app.runtime.onInstalled.addListener( function(details) {
  switch(details.reason) {
    case "install":
      // First installation
  		chrome.tabs.update({url: "helloPage.html"});

      break;
    case "update":
      // First run after an update
        chrome.tabs.update({url: "installed.html"});

      break;
  }
});

chrome.extension.onRequest.addListener(function(request, sender) {
    chrome.tabs.update(sender.tab.id, {url: request.redirect});
});