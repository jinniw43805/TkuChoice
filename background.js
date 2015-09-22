chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});


chrome.runtime.onInstalled.addListener( function(details) {
  switch(details.reason) {
    case "install":
      // First installation
      chrome.tabs.create({url: "helloPage.html"});
      break;
    case "update":
      // First run after an update
      break;
  }
});