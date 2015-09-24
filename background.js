chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width':  700,
      'height': 500
    }
  });
});


chrome.runtime.onInstalled.addListener( function(details) {


  switch(details.reason) {
    case "install":
      // First installation
  		// chrome.tabs.update({url: "helloPage.html"});

  		//----
  		// chrome.app.window.create(
	   //    "helloPage.html",
	   //    {  width: 600,
	   //       height: 400,
	   //       frame: 'chrome'
	   //    },
	   //    function(appWin) {}
	   //  );
	// var notification = webkitNotifications.createHTMLNotification(
	// 	  'helloPage.html'  // html url - can be relative
	// 	);
		chrome.windows.create({url: "helloPage.html", type: "popup"});
    break;
    case "update":
      // First run after an update
        // chrome.tabs.update({url: "installed.html"});
        chrome.windows.create({url: "helloPage.html", type: "popup"});
     	break;
  }
});

chrome.extension.onRequest.addListener(function(request, sender) {
    chrome.tabs.update(sender.tab.id, {url: request.redirect});
});