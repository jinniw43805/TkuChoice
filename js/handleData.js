function user_clickHandler(e) {
	var Id = document.getElementById("userId").value;
	var Pw = document.getElementById("userPassword").value;
	chrome.storage.sync.set({ "userId" : Id }, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error.");
		}
	});

	chrome.storage.sync.set({ "Password" : Pw }, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error.");
		}
	});
}
function course_clickHandler(e){
 	

	chrome.storage.sync.get(function(items) {
		
		//只能新增一個
	
			var array = [];

			var course = document.getElementById("InputCourse").value;
				
			var data = {
				Course : course
			};

			if (items.Cdata===undefined) {

			}else{

				//This is let multi-course addable.
				for (var i = 0; i < items.Cdata.length; i++) {
					array.push(items.Cdata[i]);
				};
				//End multi-course addable
			}


			array.push(data);

			chrome.storage.sync.set({"Cdata": array},function(){
				console.log("Cdata:"+items.Cdata);
			});
		
	});
}

function delete_clickHandler(e){
	var array=[];

	chrome.storage.sync.set({"Cdata": array},function(){
		console.log("delete!!");
		chrome.storage.sync.get(function(items) {
			if (!chrome.runtime.error) {
				getCourse=items.Cdata;

				//console.log(getCourse);
				if (getCourse===undefined) {

				}else{
					for (var i = 0; i < getCourse.length; i++) {
			 			div.innerHTML = div.innerHTML + ' <p>' +getCourse[i].Course +'<p>';
			 		}

				}
			 	
			}
	    });
	});

}
function enable(){

}
 function renderCoursePage(){
 	var div=document.getElementById("CourseField");

 	var getCourse ;


	  chrome.storage.sync.get(function(items) {
			if (!chrome.runtime.error) {
				getCourse=items.Cdata;

				//console.log(getCourse);
				//Mean not 
				if (getCourse===undefined) {


				}else{
					for (var i = 0; i < getCourse.length; i++) {
			 			div.innerHTML = div.innerHTML + ' <p>' +getCourse[i].Course +'<p>';
			 		}

				}
			 	
			}
	  });
	chrome.storage.sync.get("userId", function(items) {
		if (!chrome.runtime.error) {
			console.log(items);
			document.getElementById("userId").value=items.userId;
		}
  	});
	
  
	chrome.storage.sync.get("Password", function(items) {
		if (!chrome.runtime.error) {
			console.log(items);
			document.getElementById("userPassword").value=items.Password;
		}
	});			
 }

document.addEventListener('DOMContentLoaded', function () {

	renderCoursePage();

  	

  document.getElementById('saveUser').addEventListener('click', user_clickHandler);
  document.getElementById('saveCourse').addEventListener('click',course_clickHandler);
  document.getElementById('deleteCourse').addEventListener('click',delete_clickHandler);
  // document.getElementById('ableButton').addEventListener('click',enable;
  
});
