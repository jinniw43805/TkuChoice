

({
	getData: function() {
		var _dfr=$.Deferred();

		chrome.storage.sync.get("Cdata", function(items) {
			if (!chrome.runtime.error) {
				var Course=items.Cdata;

				_dfr.resolve(Course);
			}
	  	});
	  	return _dfr.promise();
	},

	delete: function(){

	},
	search: function(){

	},

	init:function(){
		var Course=this.getData();
		for (var i = 0; i < Course.length; i++) {
			console.log(i);
		};
	}
}).init();