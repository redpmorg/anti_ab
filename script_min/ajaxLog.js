/**
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-08 14:24:24
 * @version $Id$
 */

 function ajaxLog(t){if(window.XMLHttpRequest)httpRequest=new XMLHttpRequest;else if(window.ActiveXObject)try{httpRequest=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{httpRequest=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}if(!httpRequest)return console.log("Cannot create an XMLHTTP instance"),!1;var n={adblock:t,my_lat:my_lat,my_lon:my_lon};n=JSON.stringify(n),httpRequest.onreadystatechange=console.log("succesfull loging..."),httpRequest.open("POST","log.php",!0),httpRequest.setRequestHeader("Content-Type","application/json; charset=UTF-8"),httpRequest.send(n)}