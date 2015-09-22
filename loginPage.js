$(document).ready(function() {console.log(document.readyState);

	chrome.storage.sync.get("userId", function(items) {
		if (!chrome.runtime.error) {


			var number=document.getElementById("txtStuNo");
		 	number.value=items.userId;
		}
		
	});

	chrome.storage.sync.get("Password", function(items) {
		if (!chrome.runtime.error) {


			var password=document.getElementById("txtPSWD");
			password.value=items.Password;
			document.getElementById("btnLogin").click();

		}
  	});

	console.log("helloworld")
});