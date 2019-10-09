var database = firebase.database();

var reference = database.ref('users/students');

document.getElementById("login_div").style.display = "block";


firebase.auth().onAuthStateChanged(function(user) {
  
  
    // User is signed in.
  //   if(user != null){
  //   	console.log("hello");
  //     var email_id = user.email;
  //     //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  //     console.log(user.key);
		// user.updateProfile({
		// 	uid: user.key
		// }).then(function() {
		//   // Update successful.
		// }).catch(function(error) {
		//   // An error happened.
		// });
		
  //   }
});

function authenticate(){
	var email = ""
	var password = "";

	reference.on("value", function(user_names){
	    var length = user_names.numChildren();
	    var user = user_names[0];
	    console.log(String(user_names.val()[0]));
	    var count = 0;
	    var auth = firebase.auth();
	    var password = "password";
	    user_names.forEach(function(user_info){
			email = user_info.child("/email").val();
			console.log(user_info.key);

			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {


				console.log(error.code);
				console.log(error.message);

		        auth.sendPasswordResetEmail("ej9606@gmail.com").then(function() {
			    // Email sent.
			    console.log("sent"); 
			 	}).catch(function(error) {
			    // An error happened.
			    	console.log(error.message);
			  	});
		       	window.alert("Error : " + errorMessage);
		    });
			
	      
	    });
	    document.getElementsByTagName('h4').innerHTML = "All Users Authenticated";
	    
	});

}

function sendReset(){
	reference.on("value", function(user_names){
		var length = user_names.numChildren();
		var count = 0;

		user_names.forEach(function(user_info){
			var email = user_info.child("/email").val();
			// firebase.auth().sendPasswordResetEmail(email).then(function() {
		 //    // Email sent.

		 //    }).catch(function(error) {
		 //    // An error happened.
		 //    });
		})
		
	})
	
}