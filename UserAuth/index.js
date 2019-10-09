var user;



var database = firebase.database();
var reference = database.ref('users');

reference.key = "use";
console.log(reference.key);

var student_ref = reference.child("students");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

   	user = firebase.auth().currentUser;

    if(user != null){
		var large = search("jrsing@scu.edu");
      var email_id = student_ref.key;
      
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      	console.log(user.uid);
		reference.child("students").orderByChild("email").equalTo(user.email).on("child_added", function(snapshot) {
		  console.log(snapshot.child("status").val());
		  //console.log(large);
			user.updateProfile({
				uid: "hello" 
			}).then(function() {
			  // Update successful.
			  console.log("success");
			}).catch(function(error) {
			  // An error happened.
			});
		});
		
		
    }
  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function search(email){
	console.log(reference);
	reference.on("value", function(user_names){
		console.log("hi");
		user_names.forEach(function(user_info){

			if(user_info.child("/email").val() == email){
				
				return user_info.val();
			}
		});
	});
	
}

function createUser(){

  // var email = document.getElementsByName("email");
  // var password = document.getElementsByName("password");
  var newemail = document.getElementById("email_field").value;
  var newpassword = document.getElementById("password_field").value;
  //alert(email);
  

  firebase.auth().createUserWithEmailAndPassword(newemail, newpassword).catch(function(error) {
     console.log(error.code);
     console.log(error.message);

     window.alert("Error : " + errorMessage);
  });

  var auth = firebase.auth();
  var emailAddress = "ej9606@gmail.com";

  
}

function login(){
  
  // if(!user){
  //   break;
  // }

  var email = " ";
  var userPass = " ";

  userEmail = document.getElementById("email_field").value;
  userPass = document.getElementById("password_field").value;

  	if(userPass == "password"){
  		changePassword(userEmail);
  	}
  	else{
	    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	      // Handle Errors here.
	      var errorCode = error.code;
	      var errorMessage = error.message;

	      window.alert("Error : " + errorMessage);

	      // ...
	    });
	}
	
	
}

function changePassword(userEmail){
  var auth = firebase.auth();
  var emailAddress = "ej9606@gmail.com";

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
  logout();
  //logout the user until they reset their password
}

function logout(){
  alert("hi");
  firebase.auth().signOut();
}
