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
		console.log('Cannot create an XMLHTTP instance');
		return false;
	}

	var my_data =  {
		"adblock" : data,
		"my_lat" : my_lat,
		"my_lon" : my_lon
	}

	my_data = JSON.stringify(my_data);


	httpRequest.onreadystatechange = console.log("succesfull loging...");
	httpRequest.open('POST', "log.php", true);
	httpRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	httpRequest.send(my_data);
	//'adblock=' + encodeURIComponent(data)
}