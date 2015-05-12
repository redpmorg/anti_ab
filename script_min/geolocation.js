/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-12 18:38:01
 * @version $Id$
 */

 function success(o){my_lat=o.coords.latitude,my_lon=o.coords.longitude}function error(){console.log("Error in getting geolocation coordonats")}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(success,error):console.log("Geolocation is not available!");