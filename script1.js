/**
 *
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2015-05-07 21:25:29
 * @version $Id$
 */

 window.setTimeout(function(){

	if(adsbygoogle instanceof Array) {

		hideDivVide();

		var a_div =  document.getElementsByClassName("advert");
		var alerte_A = document.createElement("p");
		var alerte_B = document.createElement("p");
		var textAdd = " <br><span class='info'> (à la place de ces messages peut surseoir à des propre campagnes de publicité - images/texte) </span>";

		alerte_A.innerHTML = "Probablement cet navigateur possède l'extension AdBlock activer! <br> Internet est libre parce que des annonces publicitaires." + textAdd;
		alerte_B.innerHTML = "Laissez-nous d'être le meilleur! <br><br> <b>Désactiver AdBlock maintenant!</b> <br><br> <a href='#''>Me montrer comment la faire ca...</a> <br><br> Liberte! Fraternite! Egalite!" + textAdd;

		a_div[0].appendChild(alerte_A);
		a_div[1].appendChild(alerte_B);

	} else {

		hideDivVide();

	}

 }, 2000);


 function hideDivVide() {

	var empty_div = document.getElementsByClassName("empty");
	var i = 0;
	var l = empty_div.length;
	for (i; i < l; i++) {
		empty_div[i].style.display="none";
	}

 }