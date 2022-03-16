window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["rePassword"];
    if (pass.value != repass.value){
        errormsg("password not match")
        return false
    }
    alert ("register suscess")
}


function errormsg(text){
    var error = document.getElementById("errormsg");
    error.innerHTML = text
}