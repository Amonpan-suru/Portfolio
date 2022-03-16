window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin
}

function checkLogin(){
	const queryString = window.location.search;
	console.log(queryString)
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	const password = urlParams.get('password')

	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];

	if((pass.value == password) && (user.value == username)){
		alert("login success")
	}else{
		alert("wrong username or password please try again")
		return false
	}
}
