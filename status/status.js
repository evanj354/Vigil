var config = {
  apiKey: "AIzaSyAZMASVmLHKGFd4cn73sWslnmzb3v5te7g",
  authDomain: "vigilrs-123.firebaseapp.com",
  databaseURL: "https://vigilrs-123.firebaseio.com",
  projectId: "vigilrs-123",
  storageBucket: "vigilrs-123.appspot.com",
  messagingSenderId: "562799414989"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var reference = database.ref('users/students/');

var student_info = [];
var my_map = 0;
reference.on("value", function(user_names){
    var length = user_names.numChildren();
    var count = 0;

    user_names.forEach(function(user_info){
            console.log("hi");

        student_info[count++]= [user_info.child("/name").val(), user_info.child("/status").val()];
    });
    large();
});


function large(){
  var i;
  for(i=0; i<student_info.length; i++){
    var node = document.createElement("p");                 // Create a <li> node

    var namenode = document.createTextNode(student_info[i][0]);         // Create a text node
    var statusnode = document.createTextNode("   "+student_info[i][1]);
    

    

    node.appendChild(namenode); 
    node.appendChild(statusnode);                             // Append the text to <p>

    if(student_info[i][1] == "unsafe"){
      document.getElementById("name").appendChild(node).style.color = "red";
    }
    else{
      document.getElementById("name").appendChild(node);
    }
    //document.getElementById("name").style.color = "red"; 
    //document.getElementById("name").innerHTML = "hi";
  }
}
