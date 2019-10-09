function submit(){

	// var email = document.getElementsByName("email");
	// var password = document.getElementsByName("password");
	var email = "a@b";
	var password = "soup";
	//alert(email);
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	   console.log(error.code);
	   console.log(error.message);
	});
}