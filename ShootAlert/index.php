<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://media.twiliocdn.com/sdk/js/common/v0.1/twilio-common.min.js"></script>
    <script type="text/javascript" src="chatbot.js"></script>
  <script src="https://media.twiliocdn.com/sdk/js/chat/v2.0/twilio-chat.min.js"></script>
    <style type="text/css">
      .row {
        border: 3px solid red;
      }
      .col-sm {
        border: 3px solid green !important;
        text-align: center;
        padding: 0px !important;
      }
      button {
        border: 1px solid red;
        margin-top: 5px;
      }
      .messaging {
        border: 2px solid yellow;
        height: 190px;
      }
      .map {
        border: 2px solid pink;
        width: 100%;
          background-color: grey;
      }
      #question {
      	margin: 0 5% 0 5%;
      	width: 90%;
      }
    </style>

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container">
    <div class="row">
      <div class="col-sm" style="height: 200px">
        <div class="messaging">
       	<?php
		    function DB_Insert($dbh){
			    $sql = "INSERT INTO chatHistory (role, message) VALUES (0,'"question"');";
			    if($dbh->query($sql)){
			        echo "<br> SUCCESSFULL <br>";
			    }
			    else {
			        echo 'Nothing added :( <br>';
			    }
			}
		    /*** mysql hostname ***/
		    $hostname = 'localhost';
		    /*** mysql username ***/
		    $username = 'id4944238_alerts';
		    /*** mysql password ***/
		    $password = 'shootalert';
		    /*** database name ***/
		    $db_name = 'id4944238_alerts';

		    try { $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password); echo 'connected'; }
		    catch(PDOException $e) { echo $e->getMessage(); }
		?>      
          <div class="form-group">
            <label for="usr">Question</label>
            <input type="text" class="form-control" id="question" value="Ask your question here" onclick="disappear()" keyPressed="<?php DB_Insert($dbh) ?>">
          </div>
   		</div>
      </div>
      <div class="col-sm" style="height: 340px">
        <div class="map"></div>
          <iframe width="100%" height="330px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=15&center=37.3496%2C-121.9390&key=AIzaSyA4rT1CB7vzUmIw2NNfgj3_caR8dpAb9Mo" allowfullscreen></iframe>
      </div>
      <div class="col-sm" style="height: 60px">
        <button>I'm safe!</button>
        <button>Find me!</button>
      </div>
    </div>
  </div>
  </body>
</html>
