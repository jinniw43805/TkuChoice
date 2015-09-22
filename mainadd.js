

// ({
// 	getData: function() {
// 		var _dfr=$.Deferred();

// 		chrome.storage.sync.get("Cdata", function(items) {
// 			if (!chrome.runtime.error) {
// 				var Course=items.Cdata;

// 				_dfr.resolve(Course);
// 			}
// 	  	});
// 	  	return _dfr.promise();
// 	},

// 	delete: function(){

// 	},
// 	search: function(){

// 	},

// 	init:function(){
// 		var Course=this.getData();
// 		for (var i = 0; i < Course.length; i++) {
// 			console.log(i);
// 		};
// 		console.log("hi");
// 	}
// }).init();
var returnNext=function(current,max){
    current++;
    if(current==max){
        current=current%max;
    }
    else{
    }

    return current;
};



chrome.storage.sync.get(function(items) {
		if (!chrome.runtime.error) {

			//set index ==0
			

			chrome.storage.sync.set({"Index": 0},function(items){

			});


			if (items.Cdata === undefined) {
					console.log("Not Enter Course!");
				}else{

					var index=items.Index;

					var Course=items.Cdata[index].Course;

					//not added    
					var number=document.getElementById("txtCosEleSeq");
					number.value=Course;

					//Todo ++index
					//End ++

					var next=returnNext(index,items.Cdata.length);


					chrome.storage.sync.set({"Index": next},function(items){
						console.log("start add:"+Course);
						//Start add
						document.getElementById("btnAdd").click();
					});
				
				}


		}else {
			//chrome error
		}
			// });		
			// var Course=items.Cdata[0].Course;

			// //not added    
			// var number=document.getElementById("txtCosEleSeq");
			// number.value=Course;
			// console.log(Course);

			// //Todo ++index
			// //End ++


			// //Start add
			// document.getElementById("btnAdd").click();
		
});

