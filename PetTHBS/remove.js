function validateRemove(){
if(validatePetname()){
if(validateOwnerId()){
	alert("successfully removed");
  //   window.location.href = "C:\\Users\\shiva_ram\\Downloads\\PetTHBS\\PetTHBS\\main.html";
	 }	
}
return false;
}
function validateOwnerId() {
    var check = document.removePet.pet_owner_id.value;
     var s="";
		if(check==""){
		alert("Please type OwnerId");
		return false;
	}
	else{
    if (check.length < 5) {
        s+="Your OwnerId must be at least 5 digits";
		s+="\n";
    }
   if (!(check.search(/[a-zA-Z]/) < 0)) {
        s+="Your OwnerId  contain alphabets"; 
		s+="\n";
    }
    if (s.length > 0) {
        alert(s);
        return false;
    }
	}
    return true;
}
function validatePetname(){
var petNames = document.removePet.pet_name.value;
if(petNames==""){
	alert("please type PetName");
	return false;
}
	 return true;
}
