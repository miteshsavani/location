var script_url = "https://script.google.com/macros/s/AKfycbwUxk0M8Pvt_ZnE6tDcaF45dNVOg-A89cPAxsfJmzfshnFOKEbO/exec";
 var resultAll;
 
 function Login(){
 showloader(true);
		var UName= $("#uname").val();
		var Pass= $("#pass").val();
		var OName= $("#Organization").text();
		
		var url = script_url+"?callback=LoginStatus&uname="+UName+"&pass="+Pass+"&oname="+OName;

		 var request = jQuery.ajax({
			  crossDomain: true,
			  url: url ,
			  method: "GET",
			  dataType: "jsonp"
			});
 }
 
 function LoginStatus(result)
 {


	resultAll=result;
	Output=resultAll.result.records[0];
	
	 
		if(Output.toUpperCase()=="NOT FOUND"){
			$("#msg").text(Output.toUpperCase());
			$(".topmsg").css({"visibility":"visible","background-color":"red"});
			flushmsg();
		}
		else{
		
			//$("#msg").text(Output.toUpperCase());
			//$(".topmsg").css({"visibility":"visible","background-color":"green"});
			flushmsg();
			sessionStorage.setItem("LoggedIN", "true");
			//alert(window.location.href);
			var newurl= window.location.href.replace("login","CRUD_V2");
			window.location.replace(newurl);
			localStorage.Sessiontime = sessionTimeout ;
		}
		
	showloader(false);
 }
 
 function showloader(flag)
	{
		if(flag){
			document.getElementById("loader").style.visibility = "visible";
			$("#loader").css("display","");
		} else {
			document.getElementById("loader").style.visibility = "hidden";
			$("#loader").css("display","block");
		}
		
	}
	
	function flushmsg(){
		
		setTimeout(function(){ $(".topmsg").css("visibility","hidden"); }, 2000);
	
	}
 