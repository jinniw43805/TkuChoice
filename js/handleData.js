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

			chrome.storage.sync.set({"Index": 0},function(items){

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
			 			div.innerHTML = div.innerHTML + getCourse[i].Course;
			 		}

				}
			 	
			}
	    });
	});


}
function goLogin_clickHandler(){
	// window.location.href = 'http://www.ais.tku.edu.tw/elecos/login.aspx';
	// console.log("jump");
	chrome.tabs.update({
     	url: "http://www.ais.tku.edu.tw/elecos/login.aspx"
	});
}
function auth_clickHandler (){
	chrome.tabs.update({
     	url: "https://github.com/jinniw43805"
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
				if (getCourse===undefined || getCourse[0].Course=="") {

					$("#InputCourse").notify("->",{ position:"left" });


				}else{

					var courseDiv=document.getElementById("CourseField");

					var arrayDiv=[];
					var elementDiv=[];
					var titleDiv=[];
					var headingDiv=[];
					for (var i = 0; i < getCourse.length; i++) {
						arrayDiv[i] = document.createElement('div');
						arrayDiv[i].id = 'divCourse';
						arrayDiv[i].className = 'panel panel-default';


						elementDiv[i] = document.createElement('div');
						// elementDiv[i].id = 'divCourse:'+getCourse[i].Course;
						elementDiv[i].className = 'panel-body';

						elementDiv[i].innerHTML = getCourse[i].Course;

						//
						headingDiv[i] = document.createElement('div');
						headingDiv[i].className = 'panel-heading';


						//
						titleDiv[i] = document.createElement('div');
						titleDiv[i].className = 'panel-title';
						titleDiv[i].innerHTML = 'Priority : '+(i+1);

						//
						headingDiv[i].appendChild(titleDiv[i]);

						arrayDiv[i].appendChild(headingDiv[i]);
						//

						arrayDiv[i].appendChild(elementDiv[i]);
						courseDiv.appendChild(arrayDiv[i]);
			 			// div.innerHTML = div.innerHTML + ' <p>' +getCourse[i].Course +'<p>';
			 		}	

				}
			 	
			}
	  });
	chrome.storage.sync.get("userId", function(items) {
		if (!chrome.runtime.error) {
			console.log(items);
			if(items.userId==undefined || items.userId==""){
				$("#userId").notify("->",{ position:"left" });
			}else{
				document.getElementById("userId").value=items.userId;
			}
		}
  	});
	
  
	chrome.storage.sync.get("Password", function(items) {
		if (!chrome.runtime.error) {
			console.log(items);
			if(items.Password==undefined || items.Password==""){
				$("#userPassword").notify("->",{ position:"left" });
			}else{
				document.getElementById("userPassword").value=items.Password;

			}
		}
	});	


	//Check user id == undifined 
		//show box
	// if(document.getElementById("userId").value==="undefined"){
	// 	//test
	// 	$("#userId").notify("->",{ position:"left" });
		
	// }
	//Check user password == undifined 
		//show box

 }

document.addEventListener('DOMContentLoaded', function () {

	renderCoursePage();

  	

  document.getElementById('saveUser').addEventListener('click', user_clickHandler);
  document.getElementById('saveCourse').addEventListener('click',course_clickHandler);
  document.getElementById('deleteCourse').addEventListener('click',delete_clickHandler);
  document.getElementById('goLoginBtn').addEventListener('click',goLogin_clickHandler);
  document.getElementById('authBtn').addEventListener('click',auth_clickHandler);

  // document.getElementById('ableButton').addEventListener('click',enable;
  
});
