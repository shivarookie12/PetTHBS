function validateAdd(){
if(validatePetname()){
	if(validatePetage()){
	if(validatePetplace()){
if(validateOwnerId()){
	alert("inserted");
  //   window.location.href = "C:\\Users\\shiva_ram\\Downloads\\PetTHBS\\PetTHBS\\main.html";
	 }	
	}
	}
}
return false;
}
function validateOwnerId() {
    var check = document.addPet.pet_owner_id.value;
     var s="";
		if(check==""){
		alert("Please Enter OwnerId");
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
var petNames = document.addPet.pet_name.value;
if(petNames==""){
	alert("please Enter PetName");
	return false;
}
	 return true;
}
function validatePetplace(){
var petPlace = document.addPet.pet_place.value;
if(petPlace==""){
	alert("please Enter PetPlace");
	return false;
}
	 return true;
}
function validatePetage(){
	var petAge=document.addPet.pet_age.value;
	if(petAge==""){
		alert("Please Enter PetAge");
		return false;
	}
	if (isNaN(petAge)) {
        alert("age is invalid"); 
		return false;
    }
	 return true;
}
