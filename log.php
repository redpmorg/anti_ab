<?php
/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-08 14:00:55
 * @version $Id$
 */


$remoteAddress = $_SERVER["REMOTE_ADDR"];
$remoteHost    = gethostbyaddr($remoteAddress);
$browser       = get_browser(null, true)["browser_name_pattern"];
$adBlock       = (isset($_POST["adblock"]) && $_POST["adblock"] === "enable") ? "enable" : "disable";
$date          = date("Y-m-d:h:m:s");

$log = $date . "  " . $remoteAddress . "  " . $remoteHost . "  " . $browser . "  AdBlock " . $adBlock . "\n\r";

$log_file = fopen("log.txt", "a");
fwrite($log_file, $log);
fclose($log_file);
return;