/**
 *
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2015-05-07 21:25:29
 * @version $Id$
 */

 window.setTimeout(function(){

	if(adsbygoogle instanceof Array) {

		document.getElementsByClassName("modal-over")[0].style.display = "block";
		ajaxLog("enable");

	} else {

		ajaxLog("disable");

	}

 }, 2000);