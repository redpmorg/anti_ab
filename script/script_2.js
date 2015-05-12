/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-12 18:53:45
 * @version $Id$
 */

 window.setTimeout(function(){

	if(adsbygoogle instanceof Array) {

		my_modal.style.display = "block";

		ajaxLog(1);

	} else {

		ajaxLog(0);

	}

 }, 1000);