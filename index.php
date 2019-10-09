<?php
$xml = simplexml_load_file('users.xml');

foreach ($xml->person as $person){
	echo $person->name.' is '.$person->age.'<br>';
}

?>

<?php
	
	$xml = new DomDocument('1.0'); //creates basic xml object
	$xml->formatOutput = true
	/*create element using createElement()
	append child to parent using appendChild()*/
	//whichever child element you have create you will append to parent element as you build xml file

	$persons = $xml->createElement("persons");
	$xml->appendChild($persons);
		//parent->appendChild(child)

	//first person element
	$person = $xml->createElement("person");
	$person->setAttribute("id",1);//sets the id of the person element to 1
	$persons->appendChild($person);

	$name = $xml->createElement("name","Bill");
	$person->appendChild($name);//appends name attribute to person

	$age = $xml->createElement("age","20");
	$person->appendChild($age);//appends name attribute to person

	//new person element
	$person = $xml->createElement("person");
	$person->setAttribute("id",2);//sets the id of the person element to 1
	$persons->appendChild($person);

	$name = $xml->createElement("name","Joe");
	$person->appendChild($name);//appends name attribute to person

	$age = $xml->createElement("age","30");
	$person->appendChild($age);//appends name attribute to person

	echo "<xmp>".$xml->saveXML()."<xmp>";	

	//save xml in physical xml file
	$xml->save("person_list.xml") or die("Error, couldn't create XML file");

?>