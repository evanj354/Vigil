//chatbot
console.log("connected");

function disappear(){
	document.getElementById("question").value = "";
	userInput=document.getElementById("question").value;
	if(userInput!=null){
		document.getElementById("question").addEventListener("keydown", function(e){
			if(e.keyCode==13){
				save();
			}
		});
	}

}

function save(){
	var question = document.getElementById("question").value;
	console.log(question);
	document.getElementById("question").value = "";
}