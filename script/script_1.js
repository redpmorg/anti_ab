/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-12 18:51:29
 * @version $Id$
 */

 window.setTimeout(function(){

	if(adsbygoogle instanceof Array) {

		hideDivVide();

		for (var i = 0; i < a_div.length; i++) {

						// create image child
						var w = a_div[i].clientWidth - 15 - Math.floor(Math.random() * (5+3)) - 3;
						var h = a_div[i].clientHeight - 15 - Math.floor(Math.random() * (5+3)) - 3;

						var img = new Image(w, h);

						var rFileTail = Math.floor(Math.random() * (5-1) ) + 1 ;
						var imageType = (w < 400 ? 'square' : 'rectangular');
						imageType = imageType + rFileTail + '.jpg';

						img.src = "images/" + imageType;

						// create link of image
						var linkOfImage = document.createElement("a");
						linkOfImage.setAttribute('href', 'www.20minutes.fr/link_'+i);

						// append link
						a_div[i].appendChild(linkOfImage);

						// append image
						linkOfImage = a_div[i].getElementsByTagName('a');
						linkOfImage[0].appendChild(img);

					}

					var info_div = document.getElementsByClassName("information");

					for (var i = 0; i < info_div.length; i++) {

						info_div[i].innerHTML = "Container pour Proper Publicite ["+ (i+1) +"]";
						info_div[i].style.background = "#2caf1d";

					}


					ajaxLog(1);

				} else {

					hideDivVide();
					ajaxLog(0);

				}

			}, 1000);


function hideDivVide() {

	var empty_div = document.getElementsByClassName("empty");
	for (var i = 0; i < empty_div.length; i++) {
		empty_div[i].style.display="none";
	}


}