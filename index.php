<?php
/**
 *
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2015-05-05 23:15:57
 * @version $Id$
 */




if(isset($_GET["type"])) {

	$type = $_GET["type"];

	if($type === "premier") {

		include_once('test1.phtml');

	} elseif($type === "deuxieme" ) {

		include_once("test2.phtml");

	} else {

		echo "S'il vous plait choisir un test corect!";
		return;


	}

} else {

	echo "S'il vous plait choisir un test corect!";
	return;

}

