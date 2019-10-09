<!-- 

Author: Nish U
Prog: mock.php
Purpose: This is the form used to send information about a specific alert to XML. 
Needs to read value after hitting "submit" and then store data in XML. 

-->

<html>
<head>
	<title>Police Alerts</title>
</head>
<body>


<?php 

if(isset($_REQUEST['ok'])){
	$xml = new DOMDocument("1.0","utf-8");
	$xml->load("mock1.xml");
	$rootTag = $xml->getElementsByTagName("document")->item(0);
	$dataTag = $xml->createElement("data");

	$aTag = $xml->createElement("a",$_REQUEST['a']);
	$bTag = $xml->createElement("b",$_REQUEST['b']);

	$dataTag->appendChild($aTag);
	$dataTag->appendChild($bTag);

	$rootTag->appendChild($dataTag);
	$xml->save("mock1.xml");
}


?>

	<form action="mock.php" method="post">

        a<input type="text" name="a"/>
		b<input type="text" name="b"/>
		<input type="submit" name="ok" value="add"/>


    </form>


</body>
</html>


