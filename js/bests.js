function isimClick(){
	document.getElementById("isim").disabled=true;
	document.getElementById("fel").disabled=false;
	document.getElementById("sifet").disabled=false;
	document.getElementById("zerf").disabled=false;
	document.getElementById("say").disabled=false;
	document.getElementById("evez").disabled=false;
}
function felClick(){
	document.getElementById("isim").disabled=false;
	document.getElementById("fel").disabled=true;
	document.getElementById("sifet").disabled=false;
	document.getElementById("zerf").disabled=false;
	document.getElementById("say").disabled=false;
	document.getElementById("evez").disabled=false;
}
function sifetClick(){
	document.getElementById("isim").disabled=false;
	document.getElementById("fel").disabled=false;
	document.getElementById("sifet").disabled=true;
	document.getElementById("zerf").disabled=false;
	document.getElementById("say").disabled=false;
	document.getElementById("evez").disabled=false;
}
function zerfClick(){
	document.getElementById("isim").disabled=false;
	document.getElementById("fel").disabled=false;
	document.getElementById("sifet").disabled=false;
	document.getElementById("zerf").disabled=true;
	document.getElementById("say").disabled=false;
	document.getElementById("evez").disabled=false;
}
function sayClick(){
	document.getElementById("isim").disabled=false;
	document.getElementById("fel").disabled=false;
	document.getElementById("sifet").disabled=false;
	document.getElementById("zerf").disabled=false;
	document.getElementById("say").disabled=true;
	document.getElementById("evez").disabled=false;
}
function evezClick(){
	document.getElementById("isim").disabled=false;
	document.getElementById("fel").disabled=false;
	document.getElementById("sifet").disabled=false;
	document.getElementById("zerf").disabled=false;
	document.getElementById("say").disabled=false;
	document.getElementById("evez").disabled=true;
}