/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-12 18:38:01
 * @version $Id$
 */


/**
 * get geolocation of client
 */

 if("geolocation" in navigator) {

	function success(position){
		my_lat = position.coords.latitude;
		my_lon = position.coords.longitude;
	}

	function error() {
		console.log("Error in getting geolocation coordonats");
	}

	navigator.geolocation.getCurrentPosition(success, error);

 } else {

	console.log("Geolocation is not available!");

 }
