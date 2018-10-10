function validate(){
if(validateUsername()){
if(validatePassword()){
	if(validateEmail()){
     window.location.href = "C:\\Users\\shiva_ram\\Downloads\\PetTHBS\\PetTHBS\\main.html";
	}
	 }	
}
return false;
}
function validatePassword() {
    var check = document.signup.pass.value;
     var s="";
		if(check==""){
		alert("Please type Password");
		return false;
	}
	else{
    if (check.length < 8) {
        s+="Your password must be at least 8 characters";
		s+="\n";
    }
    if (check.search(/[a-z]/i) < 0) {
        s+="Your password must contain at least one letter.";
		s+="\n";
    }
    if (check.search(/[0-9]/) < 0) {
        s+="Your password must contain at least one digit."; 
		s+="\n";
    }
    if (s.length > 0) {
        alert(s);
        return false;
    }
	}
    return true;
}
function validateUsername(){
var uname = document.signup.username.value;
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
function validateEmail(){
	var email=document.signup.email.value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
    alert("You have entered an invalid email address!")
    return false;
}