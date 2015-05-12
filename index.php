<?php
/**
 *
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2015-05-05 23:15:57
 * @version $Id$
 */

$uri = $_SERVER["REQUEST_URI"];

$pattern = "/\/([^\/]+)\//i";
preg_match($pattern, $uri, $baseurl);

$baseurl = ".." . $baseurl[0];

define ("BASE_URL", $baseurl);
define ("VIEW", BASE_URL."view/");
define ("SCRIPT", BASE_URL."script/");
define ("LOG", BASE_URL."log/");


view("header.phtml");

$arr["css"]["advert"] = randVar();
$arr["css"]["rectangle"] = randVar();
$arr["css"]["square"] = randVar();
$arr["css"]["modal-over"] = randVar();

if(isset($_GET["type"])) {

	$type = $_GET["type"];

	if("premier" === $type) {

		$arr["type"] = "first";
		view("test.phtml", $arr);

	} elseif("deuxieme" === $type) {

		$arr["type"] = "second";
		view("test.phtml", $arr);

	} else {

		echo "S'il vous plait choisir un test corect!";
		return;
	}

} else {

	echo "S'il vous plait choisir un test corect!";
	return;

}


function view($file, $arrayData = null) {
	include_once(VIEW.$file);
}


function script($file, $arrayData = null, $type = null) {
	echo '<script '. (!$type ? 'sync' : 'async') .' src="'. SCRIPT. $file .'.js"></script>';
}


function randVar() {
	$str = "abcedefghijklmnoprs_";
	return str_shuffle($str);

}