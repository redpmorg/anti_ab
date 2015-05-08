/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-08 14:24:24
 * @version $Id$
 */

 function ajaxLog(data) {
	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // IE
		try {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try {
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {}
		}
	}

	if (!httpRequest) {
		console.log('Giving up :( Cannot create an XMLHTTP instance');
			return false;
		}

httpRequest.onreadystatechange = console.log("ready for log...");
httpRequest.open('POST', "log.php");
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpRequest.send('adblock=' + encodeURIComponent(data));
}