function validate(){
if(validateUsername()){
if(validatePassword()){
window.close();
    window.open("main.html");
}	
}
return false;
}
function validatePassword() {
    var check = document.signup.pass.value;
        errors = [];
		if(check==""){
		alert("Please type Password");
		return false;
	}
	else{
    if (check.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (check.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (check.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
	}
    return true;
}
function validateUsername(){
var uname = document.signup.username.value;
errors = [];
if(uname==""){
	alert("please type username");
	return false;
}
if(uname.length<8){
	alert("your username is invalid");
	return false;
}
if (!(uname.search(/[0-9]/) < 0)) {
        alert("Your username  contain numeric character"); 
		return false;
    }
	 return true;
}