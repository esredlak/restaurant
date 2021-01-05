function validateForm(){
	name=document.contactForm.name.value;
	email=document.contactForm.email.value;
	phoneNumber=document.contactForm.phoneNumber.value;
	
	console.log("first"); //Why doesn't this show up in the console? I added this b/c name wasn't showing up. Seems that the first console.log is always missed??
	console.log(name);
	console.log(email);
	console.log(phoneNumber);
	

	if (name==null || name==""){
		alert("Your name cannot be blank");
		return
	};
	if (email==null || email==""){
		alert("Your email cannot be blank");
		return
	};
	if (phoneNumber==null || phoneNumber==""){
		alert("Your phone number cannot be blank");
		return
	};
	alert("You filled in all of the fields!");
}