/**
 * 
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-05-12 18:51:29
 * @version $Id$
 */
function hideDivVide(){for(var e=document.getElementsByClassName("empty"),a=0;a<e.length;a++)e[a].style.display="none"}window.setTimeout(function(){if(adsbygoogle instanceof Array){hideDivVide();for(var e=0;e<a_div.length;e++){var a=a_div[e].clientWidth-15-Math.floor(8*Math.random())-3,t=a_div[e].clientHeight-15-Math.floor(8*Math.random())-3,i=new Image(a,t),n=Math.floor(4*Math.random())+1,o=400>a?"square":"rectangular";o=o+n+".jpg",i.src="images/"+o;var r=document.createElement("a");r.setAttribute("href","www.20minutes.fr/link_"+e),a_div[e].appendChild(r),r=a_div[e].getElementsByTagName("a"),r[0].appendChild(i)}for(var d=document.getElementsByClassName("information"),e=0;e<d.length;e++)d[e].innerHTML="Container pour Proper Publicite ["+(e+1)+"]",d[e].style.background="#2caf1d";ajaxLog(1)}else hideDivVide(),ajaxLog(0)},1e3);