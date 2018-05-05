var IsSessionVPause=false;
var sessionTimeout = 40;

$(function(){

	Verifysession();

	function Verifysession()
	{
		if(!IsSessionVPause)
			checkSession();
		
		setTimeout(function(){
			Verifysession();
		},60000);
	}

function checkSession(){
	//alert("dfd: "+ localStorage.Sessiontime);
	console.log("In CHeck" + localStorage.Sessiontime);
	if(localStorage.Sessiontime)
	{
		
		if(Number(localStorage.Sessiontime) > 0)
		{
			console.log("In");
			if(window.location.href.includes("login")){
				var newurl= window.location.href.replace("login","CRUD_V2");	
				window.location.replace(newurl);
			}
		}
		else{
			if(window.location.href.includes("CRUD_V2")){
				var newurl= window.location.href.replace("CRUD_V2","login");	
				window.location.replace(newurl);
			}
			
		}
		localStorage.Sessiontime = Number(localStorage.Sessiontime) - 1;
	}
	else{
		console.log("dfasfa");
		if(window.location.href.includes("CRUD_V2")){
				var newurl= window.location.href.replace("CRUD_V2","login");	
				window.location.replace(newurl);
			}
		
	}
	
}

$('body').tap(function(e) { 
    console.log('User tapped !!'); 
	
	if(window.location.href.includes("CRUD_V2")){
		localStorage.Sessiontime = sessionTimeout;
		console.log('Reset Time out'); 
	}
});

});