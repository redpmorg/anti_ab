/**
 *
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2015-05-07 21:25:29
 * @version $Id$
 */

 window.setTimeout(function(){

	if(adsbygoogle instanceof Array) {

		var alerte_A = document.createElement("p");
		var alerte_B = document.createElement("p");
		var textAdd = " <br><span class='info'> (à la place de ces messages peut surseoir à des propre campagnes de publicité - images/texte) </span>";


		alerte_A.innerHTML = "Probablement ce navigateur possède l'extension AdBlock activer! <br> Internet est libre parce que des annonces publicitaires." + textAdd;

		alerte_B.innerHTML = "Laissez-nous d'être le meilleur! <br><br> Désactiver AdBlock maintenant! <br><br><br> Liberte! Fraternite! Egalite!" + textAdd;

		document.getElementsByClassName("advert")[0].appendChild(alerte_A);
		document.getElementsByClassName("advert")[1].appendChild(alerte_B);

	}

 }, 2000);