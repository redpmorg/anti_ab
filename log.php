<?php
/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-08 14:00:55
 * @version $Id$
 */



$adBlockSign   = (isset($_POST["adblock"]) && $_POST["adblock"] === "enable") ? 1 : 0;
$remoteAddress = $_SERVER["REMOTE_ADDR"];
$remoteHost    = gethostbyaddr($remoteAddress);
$browser       = $_SERVER['HTTP_USER_AGENT'];
$date          = date("Y-m-d h:m:s");

$json = json_decode(file_get_contents("php://input"));

/**
 * log format
 * "log": { "adblock" : $adBlockSign, "date" : $date, "visiteur" : { "remoteAddress" : $remoteAddress, "remoteHost" : $remoteHost, "browser" : $browser } }
 */

$log = array(
	"ab" => $json->adblock,
	"d" => $date,
	"visit" => array(
		"rAddr" => $remoteAddress,
		"rHost" => $remoteHost,
		"brow" => $browser,
		"lat" => $json->my_lat,
		"lon" => $json->my_lon)
	);

$log_file = fopen("log/log.txt", "a");
fwrite($log_file, serialize($log)."\r\n");
fclose($log_file);
return;